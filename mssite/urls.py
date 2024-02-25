from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from products.views import (
    ProductsAdminViewSet,
    ProductsClientViewSet,
    ProductCategoriesViewSet,
    ProductTypesViewSet,
    ProductSubTypesViewSet,
)
from django.conf.urls.static import static
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)
from users.views import (
    TokenObtainPairViewDoc,
    TokenRefreshViewDoc,
    TokenVerifyViewDoc,
    ReviewsProcessViewSet,
    ReviewsViewSet,
)


router = DefaultRouter()

router.register(r"products", ProductsAdminViewSet)
router.register(r"catalog", ProductsClientViewSet)
router.register(r"categories", ProductCategoriesViewSet)
router.register(r"types", ProductTypesViewSet)
router.register(r"subtypes", ProductSubTypesViewSet)
router.register(r"reviews-proc", ReviewsProcessViewSet)
router.register(r"reviews", ReviewsViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "api/schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path(
        "api/schema/redoc/",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
    path(
        "api/token/",
        TokenObtainPairViewDoc.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "api/token/refresh/",
        TokenRefreshViewDoc.as_view(),
        name="token_refresh",
    ),
    path(
        "api/token/verify/",
        TokenVerifyViewDoc.as_view(),
        name="token_verify",
    ),
]


if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
