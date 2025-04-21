from rest_framework import serializers
from .models import todoModel
class todoSerializer(serializers.ModelSerializer):
    # try:
    #     id=serializers.IntegerField()
    #     name=serializers.CharField(max_length=100)
    #     time=serializers.DateTimeField()
    # except Exception as e:
    #     print(e)
    #     id=serializers.IntegerField()
    id=serializers.IntegerField(required=False)

    class Meta:
        model=todoModel
        fields="__all__"

    def create(self, validated_data):
        return todoModel.objects.create(**validated_data)