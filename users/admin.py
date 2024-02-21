from django.contrib import admin
from .models import (
    OrderStatus,
    Order,
    OrderProduct,
    User,
    Review,
)

admin.site.register(OrderStatus)
admin.site.register(Order)
admin.site.register(OrderProduct)
admin.site.register(User)
admin.site.register(Review)
