from django.conf.urls import url, include
from django.contrib import admin
from .views import *

urlpatterns = [
    
    url(r'^ip_reports/(?P<platform>[0-9]+)/$', IpReportListAPIView.as_view()),
    url(r'^client_reports/(?P<platform>[0-9]+)/$', ClientReportListAPIView.as_view()),

    
]
