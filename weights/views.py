from rest_framework import viewsets
from .models import WeightMeasurement
from .serializers import WeightMeasurementSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class WeightMeasurementViewSet(viewsets.ModelViewSet):
    serializer_class = WeightMeasurementSerializer
    queryset = WeightMeasurement.objects.all()
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return WeightMeasurement.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
