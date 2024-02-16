from rest_framework import viewsets, mixins
from .serializers import ProductUpdateSerializer, ProductSerializer
from .models import Product
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from .services import products_filter_service


@extend_schema(tags=["Products"])
@extend_schema_view(
    create=extend_schema(
        summary="Create product endpoint",
    ),
    destroy=extend_schema(
        summary="Destroy product endpoint",
    ),
    update=extend_schema(
        summary="Update product endpoint",
    ),
    partial_update=extend_schema(
        summary="Partial update product endpoint",
    ),
)
class ProductsAdminViewSet(
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Product.objects.all()
    serializer_class = ProductUpdateSerializer
    permission_classes = [IsAdminUser, IsAuthenticated]
    lookup_field = "slug"


@extend_schema(tags=["Products"])
@extend_schema_view(
    list=extend_schema(
        summary="Get all products endpoint",
    ),
    retrieve=extend_schema(
        summary="Get product by its slug endpoint",
    ),
)
class ProductsClientViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "slug"

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name="cats",
                description="Products filtering by categories",
                many=True,
                type=OpenApiTypes.STR,
            ),
            OpenApiParameter(
                name="color",
                description="Product filtering by color",
                type=OpenApiTypes.STR,
            ),
            OpenApiParameter(
                name="size",
                description="Product filtering by size",
                type=OpenApiTypes.STR,
            ),
            OpenApiParameter(
                name="lbprice",
                description="Product filtering by price low border",
                type=OpenApiTypes.DECIMAL,
            ),
            OpenApiParameter(
                name="hbprice",
                description="Product filtering by price high border",
                type=OpenApiTypes.DECIMAL,
            ),
            OpenApiParameter(
                name="brands",
                description="Product filtering by brands",
                many=True,
                type=OpenApiTypes.STR,
            ),
        ]
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        request_data = self.request.GET
        self.queryset = products_filter_service.apply_categories_filter(
            request_data, self.queryset
        )
        self.queryset = products_filter_service.apply_color_filter(
            request_data, self.queryset
        )
        self.queryset = products_filter_service.apply_size_filter(
            request_data, self.queryset
        )
        self.queryset = products_filter_service.apply_price_filter(
            request_data, self.queryset
        )
        self.queryset = products_filter_service.apply_brands_filter(
            request_data, self.queryset
        )
        return super().get_queryset()
