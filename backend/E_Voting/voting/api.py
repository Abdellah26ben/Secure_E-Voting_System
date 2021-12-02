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
from .serializer import ElectionSerializer,PositionSerializer, VoteSerializer
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

class GetPositionCandidates(generics.RetrieveAPIView):
    serializer_class = Candidates

    def get(self,request,election_id,position_id):
        print("----------------")
        queryset = Candidates.objects.filter(election_name__election_generated_id=election_id , election_position__election_position_id=position_id)
        data = serializers.serialize('json', queryset)

        return HttpResponse(data, content_type="application/json")
class PostVote(generics.CreateAPIView):
    serializer_class = VoteSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data,voter=request.user)
        serializer.is_valid(raise_exception=True)
        vote = serializer.save()
        return Response({
            "Vote": VoteSerializer(vote,context=self.get_serializer_context()).data,
        })