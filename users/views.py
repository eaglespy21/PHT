from rest_framework import generics, permissions, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model

from users.serializers import UserRegisterSerializer

# Create your views here.


class RegisterView(generics.CreateAPIView):
    # Don't use CustomUser class, use get_user_model() that gets the class from settings.py
    model = get_user_model()
    serializer_class = UserRegisterSerializer
    # Allow any user to call this API
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        # Override create function to return 201 status instead of password details
        return Response(status=status.HTTP_201_CREATED)