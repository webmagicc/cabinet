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
    	queryset = IpReport.objects.filter(count__gte=2)
    	return queryset