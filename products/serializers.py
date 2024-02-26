from .models import Product, Category, ProductType, ProductSubType
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class ProductUpdateSerializer(ModelSerializer):
    class Meta:
        model = Product
        lookup_field = "slug"
        exclude = ("slug",)


class ProductSerializer(ModelSerializer):
    subtype_names = serializers.SerializerMethodField()

    class Meta:
        model = Product
        lookup_field = "slug"
        exclude = ("subTypes",)

    def get_subtype_names(self, obj):
        return [subtype.name for subtype in obj.subTypes.all()]


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
