from django.conf.urls import url, include
from django.views.generic.base import TemplateView
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'resouce', ResouceViewSet, base_name='resouce')
urlpatterns = router.urls

