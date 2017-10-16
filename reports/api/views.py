from rest_framework.generics import ListAPIView
from reports.models import (IpReport,
                            IpReportItem,
                            UserReport, 
                            UserReportItem)
from .serializers import (IpReportSerializer,
                        IpReportItemSerializer,
                        UserReportSerializer,
                        UserReportItemSerializer)
from django_filters.rest_framework import DjangoFilterBackend

class IpReportListAPIView(ListAPIView):
    serializer_class = IpReportSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('platform_id', 'site_id')

    def get_queryset(self):
        platform = self.kwargs['platform']
        queryset = IpReport.objects.filter(count__gte=2,platform_id=int(platform)).order_by('-count')
        return queryset


class ClientReportListAPIView(ListAPIView):
    serializer_class = UserReportSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('platform_id', 'site_id')

    def get_queryset(self):
        platform = self.kwargs['platform']
        queryset = UserReport.objects.filter(count__gte=2,platform_id=int(platform)).order_by('-count')
        return queryset