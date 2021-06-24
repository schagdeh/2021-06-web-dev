from django.contrib import admin
from django.contrib.admin import ModelAdmin, register
from shop.models import Article

@register(Article)
class ArticelAdmin(ModelAdmin):
    list_display = ['name']
# Register your models here.
