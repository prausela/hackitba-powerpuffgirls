from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .tweets import TwitterClient

@api_view(['POST'])
def create_tweet(request):
	client = TwitterClient()
	client.create_tweet(request.data.get('tweet'))
	return Response({"tweet": request.data.get('tweet')}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_tweet(request):
	client = TwitterClient()
	client.delete_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully deleted"}, status=status.HTTP_200_OK)
