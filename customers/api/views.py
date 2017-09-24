from rest_framework import viewsets
from .serializers import ResouceSerializer
from customers.models import Resouce, Platform
from core.permissions import IsOwnerOrReadOnly
from rest_framework import status
from rest_framework.response import Response


class ResouceViewSet(viewsets.ModelViewSet):
    serializer_class = ResouceSerializer
    queryset = Resouce.objects.all()
    permission_classes = (IsOwnerOrReadOnly,)

    def list(self, request):
        return super(ResouceViewSet, self).list(request)

    def create(self, request):
        domain = request.data.get('domain')
        platforms = request.data.get('platforms')
        if Resouce.objects.filter(domain=domain).count()>0:
            content = {'text': 'Такой домен уже зарегистрирован'}
            return Response(content, status=status.HTTP_409_CONFLICT)
        
        try:
            new_site = Resouce(owner=request.user,
                                domain=domain)
            new_site.save()
        except:
            content = {'text': 'Ошибка сохранения'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        for p_id in platforms:
            p = Platform.objects.filter(pk=int(p_id)).first()
            if p:
                new_site.watch.add(p)

        content = {'text': 'Данные успешно сохранены'}
        return Response(content, status=status.HTTP_201_CREATED)




        return super(ResouceViewSet, self).create(request)

    def retrieve(self, request, pk=None):
        return super(ResouceViewSet, self).retrive(request,pk)

    def update(self, request, pk=None):
        return super(ResouceViewSet, self).update(request,pk)

    def partial_update(self, request, pk=None):
        return super(ResouceViewSet, self).partial_update(request,pk)

    def destroy(self, request, pk=None):
        return super(ResouceViewSet, self).destroy(request,pk)