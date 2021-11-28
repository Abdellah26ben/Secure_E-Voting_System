
from django.urls import path, include

from knox import views as knox_views
from .api import GetAllElectionAPI, GetElectionPosition

urlpatterns = [

    path('api/auth/electionlist/', GetAllElectionAPI.as_view()),
    path('api/auth/positions/<str:election_id>', GetElectionPosition.as_view()),

]