from ..models import User
# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework import viewsets
from .serializers import UserSerializers

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializers
    queryset = User.objects.all()

# class UserListView(ListAPIView):
#     serializer_class = UserSerializers
#     queryset = User.objects.all()

# class UserDetailView(RetrieveAPIView):
#     serializer_class = UserSerializers
#     queryset = User.objects.all()

# class UserCreateView(CreateAPIView):
#     serializer_class = UserSerializers
#     queryset = User.objects.all()

# class UserUpdateView(UpdateAPIView):
#     serializer_class = UserSerializers
#     queryset = User.objects.all()

# class UserDeleteView(DestroyAPIView):
#     serializer_class = UserSerializers
#     queryset = User.objects.all()