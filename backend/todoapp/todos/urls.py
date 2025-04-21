from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from .views import todoview

router = DefaultRouter()
router.register(r'todos', todoview, basename='todos')

# urlpatterns = router.urls

urlpatterns = [
    # path('',views.viewTodos, name='todos'),
    # path('add',views.addTodos, name='todosAdd'),
    # path('todos',views.todoview.as_view()),
    path("", include(router.urls)),
    path('todos/updateanddelete/<int:pk>/',views.updateTodos.as_view()),
    path('search/<str:value>/',views.getvalue)
]
