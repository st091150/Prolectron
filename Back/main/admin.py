from django.contrib import admin
from mptt.admin import MPTTModelAdmin

from . import models


admin.site.register(models.Category)
admin.site.register(models.Product)
admin.site.register(models.Tag)
admin.site.register(models.Comment)
admin.site.register(models.Provider)
admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.SuppliedProduct)


