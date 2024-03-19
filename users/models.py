from django.db import models
from django.contrib.auth.models import AbstractUser
from products.models import Product
from django.db.models import UniqueConstraint


class User(AbstractUser):
    phone_number = models.CharField(
        max_length=20,
        unique=True,
        blank=True,
    )
    favorites = models.ManyToManyField(
        Product,
        blank=True,
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

    class Meta:
        constraints = [
            UniqueConstraint(fields=["user", "product"], name="unique_user_product"),
        ]

    def __str__(self) -> str:
        return f"Review {self.pk} on {self.product.pk} by user {self.user.username}"


class Order(models.Model):
    BANK_TRANSFER = "BT"
    BY_CARD = "BC"
    BILLING = "BG"
    BY_CRYPTOCURRENCY = "CR"
    BY_PAYPAL = "PP"

    PAYMENT_METHODS = [
        (BANK_TRANSFER, "Bank Transfer"),
        (BY_CARD, "By card"),
        (BILLING, "By billing"),
        (BY_CRYPTOCURRENCY, "By cryptocurrency"),
        (BY_PAYPAL, "By PayPal service"),
    ]

    CREATED = "CR"
    PROCESSED = "PR"
    COLLECTED = "CD"
    FINISHED = "FD"

    ORDER_STATUSES = [
        (CREATED, "Created"),
        (PROCESSED, "Processed"),
        (COLLECTED, "Collected"),
        (FINISHED, "Finished"),
    ]

    address = models.CharField(
        max_length=1024,
        null=True,
        blank=True,
    )

    payment_method = models.CharField(
        max_length=50,
        choices=PAYMENT_METHODS,
        null=True,
        blank=True,
    )

    status = models.CharField(
        max_length=50,
        choices=ORDER_STATUSES,
        null=True,
        blank=True,
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )

    def __str__(self) -> str:
        return f"Заказ: {self.pk} состояние {self.status} (вледелец: {self.user})"

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
