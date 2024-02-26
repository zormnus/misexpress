from rest_framework.serializers import ModelSerializer
from .models import Review, User


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class LightReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = ("text",)


class BaseUserConfig:
    def base_user_save(self, validated_data):
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
        return super().base_user_save(validated_data)


class StaffUserLoginSerializer(ModelSerializer, BaseUserConfig):
    class Meta:
        model = User
        exclude = (
            "date_joined",
            "last_login",
        )

    def create(self, validated_data):
        return super().base_user_save(validated_data)
