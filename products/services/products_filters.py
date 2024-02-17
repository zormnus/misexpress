from products.models import Product, ProductSubType
from django.db.models import Subquery, QuerySet
from django.http.request import QueryDict


def apply_categories_filter(request_data: QueryDict, queryset: QuerySet) -> QuerySet:
    categories = request_data.getlist("cats", None)
    if categories:
        correct_products = (
            Product.objects.prefetch_related("subType")
            .filter(
                subType__type__category__in=Subquery(
                    ProductSubType.objects.select_related("type__category")
                    .filter(type__category__name__in=categories)
                    .values("type__category")
                ),
            )
            .values("name")
            .distinct()
        )
        correct_products_names = [item["name"] for item in correct_products]
        return queryset.filter(name__in=correct_products_names)
    return queryset


def apply_color_filter(request_data: QueryDict, queryset: QuerySet) -> QuerySet:
    color = request_data.get("color", None)
    if color:
        return queryset.filter(color__name=color)
    return queryset


def apply_size_filter(request_data: QueryDict, queryset: QuerySet) -> QuerySet:
    size = request_data.get("size", None)
    if size:
        return queryset.filter(size__name=size)
    return queryset


def apply_price_filter(request_data: QueryDict, queryset: QuerySet) -> QuerySet:
    low_border_price = request_data.get("lbprice", None)
    high_border_price = request_data.get("hbprice", None)
    if low_border_price and high_border_price:
        return queryset.filter(
            price__range=(
                low_border_price,
                high_border_price,
            )
        )
    return queryset


def apply_brands_filter(request_data: QueryDict, queryset: QuerySet) -> QuerySet:
    brands = request_data.getlist("brands", None)
    if brands:
        return queryset.filter(brand__name__in=brands)
    return queryset
