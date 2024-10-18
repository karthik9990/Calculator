from django.urls import path
from .views import calculator_view
from .views import advanced_calculator

urlpatterns = [
    path('', calculator_view, name='calculator'),
    path('advanced_calculator/', advanced_calculator, name='advanced_calculator'),
]
