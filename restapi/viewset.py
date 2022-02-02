from rest_framework import viewsets
from . import models
from . import serializers

class TODOViewSet(viewsets.ModelViewSet):
    queryset=models.TODO.objects.all() 
    serializer_class=serializers.TODOSerializer