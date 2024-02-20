from .models import Product, Category, ProductType, ProductSubType
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


class ProductCategoriesSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProductTypeSerializer(ModelSerializer):
    class Meta:
        model = ProductType
        fields = "__all__"


class ProductSubTypeSerializer(ModelSerializer):
    class Meta:
        model = ProductSubType
        fields = "__all__"
