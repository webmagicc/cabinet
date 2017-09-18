from django.contrib import admin
from .models import Platform, Resouce

@admin.register(Platform)
class PlatformAdmin(admin.ModelAdmin):
    pass

@admin.register(Resouce)
class ResouceAdmin(admin.ModelAdmin):
    pass