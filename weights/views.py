from rest_framework import viewsets
from .models import WeightMeasurement
from .serializers import WeightMeasurementSerializer


class WeightMeasurementViewSet(viewsets.ModelViewSet):
    serializer_class = WeightMeasurementSerializer
    queryset = WeightMeasurement.objects.all()

    def get_queryset(self):
        return WeightMeasurement.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
