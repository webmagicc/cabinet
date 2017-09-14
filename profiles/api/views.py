

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from profiles.models import User




class UserView(APIView):
	queryset = User.objects.all()
	def get(self, request, format=None):
		if request.user.is_authenticated():
			user = {"id":str(request.user.id),
					"email":request.user.email}
		else:
			user = {"id":"0",
					"email":""}
		return Response(user)
	
