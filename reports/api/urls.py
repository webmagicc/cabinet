from django.conf.urls import url, include
from django.contrib import admin
from .views import *

urlpatterns = [
    
    url(r'^ip_reports/$', IpReportListAPIView.as_view()),

    
]
