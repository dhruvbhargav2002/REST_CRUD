from django.urls import path
from Home.views import DepartmentView,EmployeeView


urlpatterns = [
    path('department', DepartmentView.as_view()),
    path('department/update/<str:id>',DepartmentView.as_view()),
    path('department/delete/<str:id>',DepartmentView.as_view()),
    path('employe', EmployeeView.as_view()),
    path('employe/update/<str:id>',EmployeeView.as_view()),
    path('employe/delete/<str:id>',EmployeeView.as_view()),
]