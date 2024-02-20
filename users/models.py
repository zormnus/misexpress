from django.db import models
from django.contrib.auth.models import AbstractUser
from products.models import Product


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
    favorites = models.ManyToManyField(
        Product,
    )

    def __str__(self) -> str:
        return f"User {self.username}"


class Review(models.Model):
    text = models.TextField()
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
        return f"Review {self.pk} on {self.product.name} by user {self.user.username}"


class Order(models.Model):
    BANK_TRANSFER = "BT"
    BY_CARD = "BC"
    BILLING = "BG"
    BY_CRYPTOCURRENCY = "CR"
    BY_PAYPAL = "PP"

    address = models.CharField(
        max_length=1024,
    )
    PAYMENT_METHODS = [
        (BANK_TRANSFER, "Bank Transfer"),
        (BY_CARD, "By card"),
        (BILLING, "By billing"),
        (BY_CRYPTOCURRENCY, "By cryptocurrency"),
        (BY_PAYPAL, "By PayPal service"),
    ]
    payment_method = models.CharField(
        max_length=50,
        choices=PAYMENT_METHODS,
        null=True,
        blank=True,
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
