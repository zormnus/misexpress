from rest_framework.serializers import ModelSerializer, ValidationError

from products.models import Product
from .models import Review, User, OrderProduct


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class LightReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = ("text",)


class BaseUserConfig:
    def user_save(self, validated_data):
        user = User(**validated_data)
        password = validated_data.pop("password")
        user.set_password(password)
        user.save()
        return user


class CustomerUserLoginSerializer(ModelSerializer, BaseUserConfig):
    class Meta:
        model = User
        exclude = (
            "date_joined",
            "is_superuser",
            "is_active",
            "is_staff",
            "groups",
            "user_permissions",
            "last_login",
        )

    def create(self, validated_data):
        return super().user_save(validated_data)


class StaffUserLoginSerializer(ModelSerializer, BaseUserConfig):
    class Meta:
        model = User
        exclude = (
            "date_joined",
            "last_login",
        )

    def create(self, validated_data):
        return super().user_save(validated_data)


class CartProductSerializer(ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = "__all__"

    def validate(self, data):
        # Controlling amount of creating/updating cart position
        product = Product.objects.get(pk=data["product"].pk)
        if product.amount < data["amount"]:
            raise ValidationError("Too much product in the cart")
        return data
