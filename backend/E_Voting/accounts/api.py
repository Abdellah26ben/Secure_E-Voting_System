from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from django.db.models import Q
from django.shortcuts import get_object_or_404
from random import randint
from knox.models import AuthToken
from .models import User
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

import json


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  #
        user = serializer.save()

        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  #
        user = serializer.validated_data

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Get User API
class UserAPI(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_object(self):
        return self.request.user

    def put(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)



# User detail view for other users
class UserDetail(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get(self, request, username):
        user = get_object_or_404(User, username=username)
        data = UserSerializer(user).data
        return Response(data)





