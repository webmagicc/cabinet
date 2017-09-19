from rest_framework import serializers
from customers.models import Resouce, Platform

class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ('id','name',)


class ResouceSerializer(serializers.ModelSerializer):
    watch = PlatformSerializer(many=True)
    class Meta:
        model = Resouce
        fields = ('id','owner','watch','domain','pay_to')