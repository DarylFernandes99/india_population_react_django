# from .views import UserListView, UserDetailView, UserCreateView, UserUpdateView, UserDeleteView
# from django.urls import path

# urlpatterns = [
#     path('', UserListView.as_view()),
#     path('create/', UserCreateView.as_view()),
#     path('<pk>', UserDetailView.as_view()),
#     path('<pk>/update/', UserUpdateView.as_view()),
#     path('<pk>/delete/', UserDeleteView.as_view()),
# ]

from .views import UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', UserViewSet)
urlpatterns = router.urls