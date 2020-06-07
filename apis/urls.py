from .views import LineChartJSONView
from django.urls import path

urlpatterns = [
    path('line_chart_json/', LineChartJSONView.as_view(), name='line_chart_json'),
]