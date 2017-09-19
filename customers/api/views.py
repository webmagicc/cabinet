from rest_framework import viewsets
from .serializers import ResouceSerializer
from customers.models import Resouce
from core.permissions import IsOwnerOrReadOnly


class ResouceViewSet(viewsets.ModelViewSet):
    serializer_class = ResouceSerializer
    queryset = Resouce.objects.all()
    permission_classes = (IsOwnerOrReadOnly,)

    def list(self, request):
        super(ResouceViewSet, self).list(request)

    def create(self, request):
        super(ResouceViewSet, self).create(request)

    def retrieve(self, request, pk=None):
        super(ResouceViewSet, self).retrive(request,pk)

    def update(self, request, pk=None):
        super(ResouceViewSet, self).update(request,pk)

    def partial_update(self, request, pk=None):
        super(ResouceViewSet, self).partial_update(request,pk)

    def destroy(self, request, pk=None):
        super(ResouceViewSet, self).destroy(request,pk)