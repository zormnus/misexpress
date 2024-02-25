from rest_framework.serializers import ModelSerializer
from .models import Review


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class LightReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = ("text",)
