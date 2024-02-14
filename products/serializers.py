from .models import Product
from rest_framework.serializers import ModelSerializer


class ProductUpdateSerializer(ModelSerializer):
    class Meta:
        model = Product
        lookup_field = "slug"
        exclude = ("slug",)


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        lookup_field = "slug"
        fields = "__all__"
