from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from drf_spectacular.utils import extend_schema


@extend_schema(tags=["jwt auth"])
class TokenObtainPairViewDoc(TokenObtainPairView):
    @extend_schema(
        summary="Get access and refresh token by username and password",
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


@extend_schema(tags=["jwt auth"])
class TokenRefreshViewDoc(TokenRefreshView):

    @extend_schema(
        summary="Get new access token by previous access token",
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


@extend_schema(tags=["jwt auth"])
class TokenVerifyViewDoc(TokenVerifyView):
    @extend_schema(
        summary="Verify access token",
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
