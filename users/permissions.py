from rest_framework import permissions
from .models import OrderProduct
from .services.user_service import UserService


class IsOwnerOrAdminUserReviewPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        is_admin = bool(request.user and request.user.is_staff)
        if request.method == "POST":
            try:
                is_owner = request.data["user"] == request.user.pk
                return is_admin or is_owner
            except KeyError:
                return False
        return True

    def has_object_permission(self, request, view, obj):
        return bool(request.user and request.user.is_staff) or obj.user == request.user


# class IsOwnerOrAdminCartProductPermission(permissions.BasePermission):
#     def has_permission(self, request, view):
#         is_admin = bool(request.user and request.user.is_staff)
#         if request.method in ("GET", "POST"):
#             try:
#                 is_owner = (
#                     int(request.GET["user_id"]) == request.user.pk
#                     if request.method == "GET"
#                     else UserService.get_user_by_order_id(request.data["order"])
#                     == request.user
#                 )
#                 return is_admin or is_owner
#             except KeyError:
#                 return False
#         return True

#     def has_object_permission(self, request, view, obj: OrderProduct):
#         return request.user == obj.order.user
