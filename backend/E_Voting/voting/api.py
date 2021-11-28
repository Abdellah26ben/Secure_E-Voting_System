import json

from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from django.db.models import Q
from django.shortcuts import get_object_or_404
from random import randint
from knox.models import AuthToken
from .models import Election,Positions,Candidates,Votes
from .serializer import ElectionSerializer,PositionSerializer
from django.core import serializers

# Get Available Elections API
class GetAllElectionAPI(APIView):
    def get(self, request):
        elections = Election.objects.all()
        data = ElectionSerializer(elections, many=True).data
        return Response(data)

class GetElectionPosition(generics.RetrieveAPIView):

    serializer_class = PositionSerializer

    def get(self, request,election_id):
        queryset = Positions.objects.filter(position_election__election_generated_id= election_id)
        data = serializers.serialize('json', queryset)
        return HttpResponse(data, content_type="application/json")

