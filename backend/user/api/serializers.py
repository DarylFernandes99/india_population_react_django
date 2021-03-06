from ..models import User
from rest_framework import serializers

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'uname' ,'email' ,'pwd' ,'dob' ,'phone' ,'add1' ,'add2' ,'city' ,'state' ,'country' ,'created_at', 'updated_at')