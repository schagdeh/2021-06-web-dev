from shop.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet)
urlpatterns = router.urls

# from django.urls import path
# from shop.views import view_articles

# urlpatterns = [
#     path('articles/<int:id>/', view_articles),
# ]