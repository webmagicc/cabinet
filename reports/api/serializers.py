from rest_framework import serializers
from reports.models import (IpReport,
                            IpReportItem,
                            UserReport, 
                            UserReportItem)


class IpReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = IpReport
        fields = '__all__'



class IpReportItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = IpReportItem
        fields = '__all__'



class UserReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserReport
        fields = '__all__'



class UserReportItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserReportItem
        fields = '__all__'