"""cabinet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from profiles import views as profiles_views

urlpatterns = [
    #url(r'^accounts/', profiles_views.LoginView.as_view()),
    url(r'^admin/', admin.site.urls),
    url(r'^accounts/', include('allauth.urls')),
    
    url(r'^api/profiles/', include('profiles.api.urls')),
    url(r'^api/customers/', include('customers.api.urls')),
    url(r'^api/reports/', include('reports.api.urls')),
    url(r'^', profiles_views.HomeView.as_view()),

    
]
