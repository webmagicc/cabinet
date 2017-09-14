from django.shortcuts import render, redirect
from .models import User
from django.contrib.auth import get_user_model
from django.views.generic.edit import FormView
from django.views.generic.base import RedirectView
from django.views.generic import DetailView
from django.views import View


class HomeView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            return render(request, 'index.html')
        else:
            return redirect('/accounts/login/')


class LoginView(View):
    def get(self, request, *args, **kwargs):
        return render(request,'login.html')


class ProfileView(DetailView):
    model = get_user_model()
    context_object_name = 'user_object'
    template_name = 'profiles/profile.html'
    def get_object(self):
        pass






