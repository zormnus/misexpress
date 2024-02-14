from rest_framework import viewsets, mixins
from .serializers import ProductUpdateSerializer, ProductSerializer
from .models import Product
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from drf_spectacular.utils import (
    extend_schema_view,
    extend_schema,
)


openapi_params = {
    # "access_token": OpenApiParameter(
    #     name="Authorization",
    #     location=OpenApiParameter.HEADER,
    #     description="Bearer JWT token",
    #     required=True,
    #     type=str,
    # ),
}


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

    def get_queryset(self):
        request_data = self.request.GET
        print(request_data)
        categories = request_data.getlist("cats", None)
        color = request_data.get("color", None)
        size = request_data.get("size", None)
        low_border_price = request_data.get("lbprice", None)
        high_border_price = request_data.get("hbprice", None)
        brands = request_data.getlist("brands", None)
        return super().get_queryset()
