from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from users.models import User
from django.contrib.auth.password_validation import validate_password


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,  # Ensure that the user is unique given all the existing users
        validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True,
                                     required=True,
                                     validators=[
                                         validate_password,
                                     ],
                                     style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True,
                                      required=True,
                                      style={'input_type': 'password'})

    class Meta:  # Associate Serializer with a specific model class
        model = User
        fields = ('email', 'password', 'password2')

    # Overriden function
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({'password': 'passwords must match'})
        return attrs

    # Overriden function
    def create(self, validated_data):
        user = User.objects.create_user(email=validated_data['email'], )
        user.set_password(validated_data['password'])
        user.save()
        return user
