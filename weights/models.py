from django.db import models
from django.contrib.auth import get_user_model


class WeightMeasurement(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    measurement_date = models.DateField(auto_now_add=True)
