from rest_framework import viewsets, mixins
from .serializers import ProductSerializer
from .models import Product
from rest_framework.permissions import IsAdminUser


class ProductsAdminViewSet(
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]
    lookup_field = "slug"
