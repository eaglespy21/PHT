from urllib import response
from django.shortcuts import render
from rest_framework import generics, permissions, status, serializers
from django.contrib.auth import get_user_model

# Create your views here.


class RegisterView(generics.CreateAPIView):
    model = get_user_model()
    serializer_class = serializers.ModelSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        return response(status=status.HTTP_201_CREATED)