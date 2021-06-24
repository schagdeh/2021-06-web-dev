from shop.filters import ArticleFilter
from shop.models import Article
from shop.serializers import ArticleSerializer
from rest_framework.viewsets import ModelViewSet


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_class = ArticleFilter


# # from django.shortcuts import render
# from json import loads
# from django.http import JsonResponse
# from shop.models import Article

# def view_articles(request, id):
    
#     if request.method == 'GET':
#         article = Article.objects.filter(id=id).get()
#         return JsonResponse({
#         'id': article.id,
#         'name': article.name
#     })
#     elif request.method == 'POST':
#         data = loads(request.body)
#         article = Article.objects.create(name=data['name'])
#         article.save()
#         return JsonResponse({
#             'id': article.id,
#             'name': article.name,
#         })

# def view_article(request, id):
    
#     if request.method == 'GET':
#         article = Article.objects.filter(id=id).get()
#         return JsonResponse({
#         'id': article.id,
#         'name': article.name
#     })
#     elif request.method == 'PATCH':
#         data = loads(request.body)
#         article = Article.objects.create(name=data['name'])
#         article.save()
#         return JsonResponse({
#             'id': article.id,
#             'name': article.name,
#         })    
#     elif request.method == 'DELETE':
#         data = loads(request.body)
#         article = Article.objects.remove(id=id)
#         article.save()
#         return JsonResponse({
#             'id': article.id,
#             'name': article.name,
#         })          
    

# Create your views here.
