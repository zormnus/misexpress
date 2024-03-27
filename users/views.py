import logging
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from rest_framework import viewsets, mixins
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Review, User, OrderProduct
from .permissions import (
    IsOwnerOrAdminUserReviewPermission,
    # IsOwnerOrAdminCartProductPermission,
)
from .serializers import (
    ReviewSerializer,
    LightReviewSerializer,
    CustomerUserLoginSerializer,
    CartProductSerializer,
)
from .services.reviews_service import ReviewService

from django.db.utils import IntegrityError
from django.http import HttpResponse
from .services.cart_service import CartService
from .services.user_service import UserService


logger = logging.getLogger(__name__)


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
    list=extend_schema(
        summary="Get all reviews of product endpoint",
        parameters=[
            OpenApiParameter(
                name="product_id",
                description="Reviews filtering by product id",
                type=OpenApiTypes.INT,
                required=True,
                location=OpenApiParameter.QUERY,
            )
        ],
    ),
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
class ReviewsViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Review.objects.select_related("user", "product")
    permission_classes = [IsOwnerOrAdminUserReviewPermission]
    serializer_class = ReviewSerializer

    def get_queryset(self):
        request_data = self.request.GET
        filter_result = ReviewService.apply_product_reviews_filter(
            request_data,
            self.queryset,
        )
        if filter_result:
            self.queryset = filter_result
            return super().get_queryset()
        return Review.objects.none()

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
            return HttpResponse(
                status=status.HTTP_400_BAD_REQUEST,
                content="That review is already created",
            )


@extend_schema(tags=["signup"])
@extend_schema_view(
    create=extend_schema(
        summary="Create user endpoint",
    )
)
class UserCreateViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = CustomerUserLoginSerializer

    def create(self, request, *args, **kwargs):
        user_data = request.data
        response = super().create(request, *args, **kwargs)
        created_user = UserService.get_user_by_username(username=user_data["username"])
        CartService.create_empty_cart(user=created_user)
        return response


@extend_schema(tags=["cart"])
@extend_schema_view(
    create=extend_schema(
        summary="Add product to cart endpoint",
    ),
    destroy=extend_schema(
        summary="Delete product from cart endpoint",
    ),
    list=extend_schema(
        summary="Get cart of current user endpoint",
    ),
)
class CartViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    queryset = OrderProduct.objects.select_related("order", "product")
    serializer_class = CartProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        self.queryset = self.queryset.filter(order__user=self.request.user)
        return super().get_queryset()
