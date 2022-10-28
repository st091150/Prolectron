from django.db import models
from mptt.models import MPTTModel, TreeForeignKey  # TODO
from django.contrib.auth.models import User

IMAGES_PATH = ""  # !TODO


class Tag(models.Model):
    """Теги"""
    tag_id = models.IntegerField(verbose_name="id тега", primary_key=True)
    name = models.CharField(verbose_name="Название тега", max_length=150)
    slug = models.SlugField(max_length=160, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Тег"
        verbose_name_plural = "Теги"


class Category(models.Model):
    """Категория"""
    category_id = models.IntegerField(verbose_name="id категории", primary_key=True, default=-1)
    name = models.CharField(verbose_name="Название категории", max_length=150)
    slug = models.SlugField(max_length=160, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Product(models.Model):
    """Товар"""
    product_id = models.IntegerField(verbose_name="id категории", primary_key=True)
    category = models.OneToOneField(Category, on_delete=models.CASCADE)
    tags = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True)
    slug = models.SlugField(max_length=160, unique=True)
    title = models.CharField(verbose_name="Наименование товара", max_length=150)
    images = models.ImageField(upload_to='media')
    price = models.FloatField(verbose_name="Цена")
    discription = models.TextField(verbose_name="Описание", max_length=2000)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class Customer(User):
    """Покупатель"""
    address = models.TextField(verbose_name="Адрес", max_length=200)
    shopping_cart = models.ForeignKey(Product, verbose_name="Корзина покупок", on_delete=models.SET_NULL, null=True, related_name="shopping_cart")
    favourites = models.ForeignKey(Product, verbose_name="Избранное", on_delete=models.SET_NULL, null=True, related_name="favourites")
    slug = models.SlugField(max_length=160, unique=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Поставщик"
        verbose_name_plural = "Поставщики"


class Provider(User):
    """Поставщик"""
    phone_number = models.CharField(verbose_name="Номер телефона", max_length=15, blank=False)
    provider_email = models.EmailField(verbose_name="Почта", blank=False)


class Order(models.Model):
    """Заказ"""
    STATUS_CHOICES = (
        ("AWCO", "awaiting_confirmation"),
        ("PERF", "performed"),
        ("COMP", "completed")
    )
    slug = models.SlugField(max_length=160, unique=True)
    order_id = models.IntegerField(verbose_name="id заказа", primary_key=True)
    user_id = models.OneToOneField(User, verbose_name="id покупателя", on_delete=models.SET_NULL, null=True)
    products = models.ForeignKey(Product, verbose_name="id товаров", on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(verbose_name="Дата когда был создан заказ", blank=False)
    status = models.TextField(choices=STATUS_CHOICES)

    # amount  !TODO

    def __str__(self):
        return self.order_id

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"


Customer.order_history = models.ForeignKey(Order, verbose_name="История покупок", on_delete=models.SET_NULL, null=True)


class SuppliedProduct(models.Model):
    """Товары поставщика"""
    products_id = models.ForeignKey(Product, verbose_name="id товаров", on_delete=models.SET_NULL, null=True)
    provider_id = models.OneToOneField(User, verbose_name="id поставщика", on_delete=models.SET_NULL, null=True)
    # count_of_product
    price_for_product = models.IntegerField(verbose_name="Цена за 1 единицу товара")

    def __str__(self):
        return self.provider_id

    class Meta:
        verbose_name = "Поставляемый товар"
        verbose_name_plural = "Поставляемые товары"


class Comment(models.Model):
    """Комментарий"""
    comment_id = models.IntegerField(verbose_name="id комментария", primary_key=True, default="NULL")
    created_at = models.DateField(verbose_name="Дата создания комментария", default="NULL")
    created_by = models.OneToOneField(User, verbose_name="Кем создан комментарий", on_delete=models.SET_NULL, null=True)
    product_id = models.OneToOneField(Product, verbose_name="К какому товару относится комментарий", on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.comment_id

    class Meta:
        verbose_name = "Комментарий"
        verbose_name_plural = "Комментарии"

