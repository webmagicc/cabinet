from rest_framework import serializers
from customers.models import Resouce


class ResouceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resouce
        fields = ('owner','domain')