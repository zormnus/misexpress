from rest_framework import permissions


class IsOwnerOrAdminUserReviewPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method == "POST":
            is_admin = bool(request.user and request.user.is_staff)
            is_owner = request.data["user"] == request.user.pk
            return is_admin or is_owner
        return True

    def has_object_permission(self, request, view, obj):
        return bool(request.user and request.user.is_staff) or obj.user == request.user
