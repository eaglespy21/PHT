from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import WeightMeasurementViewSet

app_name = 'weights'

weightmeasurement_list = WeightMeasurementViewSet.as_view({'get': 'list', 'post': 'create'})
weightmeasurement_detail = WeightMeasurementViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path('weightmeasurements/', weightmeasurement_list, name='weightmeasurement-list'),
    path('weightmeasurements/<int:pk>/', weightmeasurement_detail, name='weightmeasurement-detail'),
])
