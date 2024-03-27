from rest_framework import permissions
from .models import OrderProduct
from .models import Order
from django.http.response import HttpResponse
from rest_framework.status import HTTP_404_NOT_FOUND
from django.core.exceptions import ObjectDoesNotExist
import json


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


class IsOwnerOrAdminCartProductPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        is_admin = bool(request.user and request.user.is_staff)
        if request.method == "POST":
            data = json.loads(request.body)
            try:
                is_owner = Order.objects.get(pk=data["order"]).user == request.user
            except ObjectDoesNotExist:
                return HttpResponse(
                    status=HTTP_404_NOT_FOUND, content="Order not found"
                )
            return is_admin or is_owner
        return True

    def has_object_permission(self, request, view, obj: OrderProduct):
        return request.user == obj.order.user
