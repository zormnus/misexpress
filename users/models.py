from django.db import models
from django.contrib.auth.models import AbstractUser
from products.models import Product


class PaymentMethod(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Payment method"
        verbose_name_plural = "Payment methods"
        ordering = ["-name"]


class OrderStatus(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Order status"
        verbose_name_plural = "Order statuses"
        ordering = ["-name"]


class User(AbstractUser):
    phone_number = models.CharField(
        max_length=20,
        unique=True,
        blank=True,
    )

    def __str__(self) -> str:
        return f"User {self.username}"


class Review(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
    )

    def __str__(self) -> str:
        return f"Review {self.pk} by user {self.user}"


class Favorites(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )

    def __str__(self) -> str:
        return f"Favorite product {self.product} for user {self.user}"

    class Meta:
        verbose_name = "Favorites"
        verbose_name_plural = "Favorites"


class Order(models.Model):
    address = models.CharField(
        max_length=1024,
    )
    payment_method = models.ForeignKey(
        PaymentMethod,
        on_delete=models.SET_NULL,
        null=True,
    )
    status = models.ForeignKey(
        OrderStatus,
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )

    class Meta:
        verbose_name = "Order"
        verbose_name_plural = "Orders"
        ordering = ["-payment_method"]


class OrderProduct(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
    )
    amount = models.PositiveIntegerField()

    class Meta:
        verbose_name = "Order to Product"
        verbose_name_plural = "Orders to Products"
        ordering = ["amount"]
