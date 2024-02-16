from rest_framework import viewsets, mixins
from .serializers import ProductUpdateSerializer, ProductSerializer
from .models import Product, ProductSubType, ProductType
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from django.db.models import Subquery


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
        categories = request_data.getlist("cats", None)

        if categories:
            correct_products = (
                Product.objects.prefetch_related("subType")
                .filter(
                    subType__type__category__in=Subquery(
                        ProductSubType.objects.select_related("type__category")
                        .filter(type__category__name__in=categories)
                        .values("type__category")
                    ),
                )
                .values("name")
                .distinct()
            )
            correct_products_names = [item["name"] for item in correct_products]
            self.queryset = self.queryset.filter(name__in=correct_products_names)
        color = request_data.get("color", None)
        if color:
            self.queryset = self.queryset.filter(color__name=color)
        size = request_data.get("size", None)
        if size:
            self.queryset = self.queryset.filter(size__name=size)
        low_border_price = request_data.get("lbprice", None)
        high_border_price = request_data.get("hbprice", None)
        if low_border_price and high_border_price:
            self.queryset = self.queryset.filter(
                price__range=(low_border_price, high_border_price)
            )
        brands = request_data.getlist("brands", None)
        if brands:
            self.queryset = self.queryset.filter(brand__name__in=brands)
        return super().get_queryset()
