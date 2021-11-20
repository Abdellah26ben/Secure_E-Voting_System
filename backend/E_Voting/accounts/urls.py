from django.urls import path, include

from knox import views as knox_views

from .api import RegisterAPI
from .api import LoginAPI
from .api import UserAPI
from .api import UserDetail



urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register',RegisterAPI.as_view()),
    path('api/auth/login',LoginAPI.as_view()),
    path('api/auth/user',UserAPI.as_view()),
    path('api/auth/user/<str:username>', UserDetail.as_view()),
    path('api/auth/logout',knox_views.LogoutView.as_view(), name='knox_logout'),

]
