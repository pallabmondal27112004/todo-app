from django.shortcuts import render,HttpResponse
from rest_framework.decorators import api_view 
from .models import todoModel
from .serializer import todoSerializer
import json
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from rest_framework.decorators import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin,DestroyModelMixin
from rest_framework.viewsets import ModelViewSet
# @api_view(['GET'])
# def viewTodos(request):
#     todos= todoModel.objects.all()
#     print(todos)
#     serialiseData=todoSerializer(todos, many=True)
#     print(serialiseData.data)
#     # data=json.dumps( serialiseData.data)
#     # return response(serialiseData.data,status)
#     return Response(serialiseData.data)

# @api_view(['POST'])
# def addTodos(request):
#     print(request.body,"reques .......... body")
#     data=todoSerializer(data=request.data, many=True)
#     print(data.data)
#     # data.save()
#     return Response(json.dumps(data.data))

# # views.py


# @api_view(['POST'])
# @csrf_exempt
# def addTodos(request):
#     serializer = todoSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()  # Saves the item to the database
#         return Response({'message': 'Item added successfully!', 'item': serializer.data}, status=status.HTTP_201_CREATED)
    
#     return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# class todoview(APIView):
#     def get(self,request):
#         todos= todoModel.objects.all()
#         # print(todos)
#         # print()
#         serialiseData=todoSerializer(todos, many=True)
#         # print(serialiseData.data)
#         # print(serialiseData.data)
#         # data=json.dumps( serialiseData.data)
#         # return response(serialiseData.data,status)
#         return Response(serialiseData.data)
    
    # @csrf_exempt
    # def post(self,request):
    #     serializer = todoSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()  # Saves the item to the database
    #         return Response({'message': 'Item added successfully!', 'item': serializer.data}, status=status.HTTP_201_CREATED)
    
    #     return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    # def put(self,request):
    #     ids=request.data.get('id')
    #     user=todoModel.objects.get(id=ids)

        
    #     print(user.time,user.id)
    #     print(id)

    #     serializer = todoSerializer(user,data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()  # Saves the item to the database
    #         return Response({'message': 'Item added successfully!', 'item': serializer.data}, status=status.HTTP_201_CREATED)
    
    #     return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
class updateTodos(GenericAPIView,UpdateModelMixin,DestroyModelMixin):
    queryset=todoModel.objects.all()
    serializer_class=todoSerializer

    def put(self,request,*args, **kwargs):
        return self.update(request,*args, **kwargs)
    
    def delete(self,request,*args, **kwargs):
        return self.destroy(request,*args, **kwargs)


    
class todoview(ModelViewSet):
    queryset=todoModel.objects.all()
    serializer_class=todoSerializer

@api_view(['GET'])
def getvalue(request,value):
    print("right going ")
    todo=todoModel.objects.filter(name__icontains=value)
    print(todo)
    serializer = todoSerializer(todo, many=True)
    print(serializer.data)
    return Response(serializer.data)


