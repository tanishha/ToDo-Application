from django.db import models

# Create your models here.
class TODO(models.Model):
    value=models.CharField(max_length=255)
    date=models.DateField()