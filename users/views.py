from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from rest_framework import viewsets, mixins
from .models import Review
from .permissions import IsOwnerOrAdminUserReviewPermission
from .serializers import ReviewSerializer, LightReviewSerializer
from .services import reviews_filters

from django.db.utils import IntegrityError
from django.http import HttpResponse


@extend_schema(tags=["jwt auth"])
class TokenObtainPairViewDoc(TokenObtainPairView):
    @extend_schema(
        summary="Get access and refresh token by username and password",
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


@extend_schema(tags=["jwt auth"])
class TokenRefreshViewDoc(TokenRefreshView):

    @extend_schema(
        summary="Get new access token by previous access token",
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


@extend_schema(tags=["jwt auth"])
class TokenVerifyViewDoc(TokenVerifyView):
    @extend_schema(
        summary="Verify access token",
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


@extend_schema(tags=["reviews"])
@extend_schema_view(
    create=extend_schema(
        summary="Create user's review endpoint",
    ),
    destroy=extend_schema(
        summary="Destroy user's review endpoint",
    ),
    update=extend_schema(
        summary="Update user's review endpoint",
    ),
    partial_update=extend_schema(
        summary="Partial update user's review endpoint",
    ),
)
class ReviewsProcessViewSet(
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Review.objects.all()
    permission_classes = [IsOwnerOrAdminUserReviewPermission]
    serializer_class = ReviewSerializer

    def get_serializer_class(self):
        if self.action == "create":
            return ReviewSerializer
        elif self.action in ("update", "partial_update"):
            return LightReviewSerializer
        return super().get_serializer_class()

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError:
            return HttpResponse(status=403, content="That review is already created")


@extend_schema(tags=["reviews"])
@extend_schema_view(
    list=extend_schema(
        summary="Get all reviews of product endpoint",
        parameters=[
            OpenApiParameter(
                name="pid",
                description="Reviews filtering by product id",
                type=OpenApiTypes.INT,
                required=True,
                location=OpenApiParameter.QUERY,
            )
        ],
    ),
)
class ReviewsViewSet(
    mixins.ListModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Review.objects.select_related("user", "product")
    serializer_class = ReviewSerializer

    def get_queryset(self):
        request_data = self.request.GET
        filter_result = reviews_filters.apply_product_reviews_filter(
            request_data,
            self.queryset,
        )
        if filter_result:
            self.queryset = filter_result
            return super().get_queryset()
        return Review.objects.none()
