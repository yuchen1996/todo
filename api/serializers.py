from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Todo

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'target_time', 'title', 'content', 'is_end', 'create_time', 'update_time')
    '''
    pk = serializers.IntegerField(read_only=True)
    create_time = serializers.DateTimeField()
    update_time = serializers.DateTimeField()
    title = serializers.CharField(required=True)
    content = serializers.CharField()
    target_time = serializers.DateTimeField()
    is_end = serializers.BooleanField(default=False)
    def create(self, validated_data):
        return Todo.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.target_time = validated_data.get('target_time', instance.target_time)
        instance.save()
        return instance
    '''