from django.contrib import admin
from .models import (
    PaymentMethod,
    OrderStatus,
    Order,
    OrderProduct,
    User,
    Review,
    Favorites,
)

admin.site.register(PaymentMethod)
admin.site.register(OrderStatus)
admin.site.register(Order)
admin.site.register(OrderProduct)
admin.site.register(User)
admin.site.register(Review)
admin.site.register(Favorites)
