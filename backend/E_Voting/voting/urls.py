
from django.urls import path, include

from knox import views as knox_views
from .api import GetAllElectionAPI, GetElectionPosition, GetPositionCandidates, PostVote

urlpatterns = [

    path('api/auth/electionlist/', GetAllElectionAPI.as_view()),
    path('api/auth/positions/<str:election_id>', GetElectionPosition.as_view()),
    path('api/auth/candidates/<str:election_id>/<str:position_id>', GetPositionCandidates.as_view()),
    path('api/auth/candidates/voting/<str:election>/<str:election_position>/<str:election_candidate>', PostVote.as_view())

]