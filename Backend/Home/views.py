from rest_framework import status
from rest_framework.views import APIView,Response
from Home.models import Department,Employee
from Home.serializers import DepartmentSerializer,EmployeeSerializer
# Create your views here.

class DepartmentView(APIView):
    def get(self,request):
        depts=DepartmentSerializer(Department.objects.all(),many=True).data
        response={
            "success": True,
            "message": "Fetched Succesfully",
            "data": depts
        }
        return Response(response,status.HTTP_200_OK)
    def post(self,request):
        response={
            "success": True,
            "message": "Department Added "
        }
        if 'name' not in request.data:
            response['success']=False
            response['message']='name required'
            return Response(response,status.HTTP_400_BAD_REQUEST)
        id=request.data['id']
        name=request.data['name']
        Department.objects.create(id=id,name=name)
        return Response(response,status.HTTP_200_OK)
    
    def put(self,request,id):
        dept=Department.objects.filter(id=id).first()
        response={
            "success": True,
            "message": "Department Updated "
        }
        if dept is None:
            response['success']=False,
            response['message']='Department not found!'
            return Response(response,status.HTTP_404_NOT_FOUND)
        for key,value in request.data.items():
            setattr(dept,key,value)
        dept.save()
        return Response(response,status.HTTP_204_NO_CONTENT)
    
    def patch(self,request,id):
        return self.put(request,id)
    
    def delete(self,request,id):
        dept=Department.objects.get(id=id)
        response={
            "success": True,
            "message": "Department Deleted"
        }
        if dept is None:
            response['success']=False,
            response['message']='No department found'
            return Response(response,status.HTTP_404_NOT_FOUND)
        dept.delete()
        return Response(response,status.HTTP_204_NO_CONTENT)
    

class EmployeeView(APIView):
    def get(self,request):
        dept=EmployeeSerializer(Employee.objects.all(),many=True).data
        response={
            "success": True,
            "message": "Fetched succesfully",
            "data": dept
        }
        return Response(response,status.HTTP_200_OK)

    def post(self,request):
        response={
            "success": True,
            "message": "Employee Created succesfully!"
        }
        id=request.data['id']
        name=request.data['name']
        department=request.data['department']
        manager_id=request.data['manager_id']
        Employee.objects.create(
            id=id,
                name=name, 
                department=department,
                manager_id=manager_id
            )
        return Response(response,status.HTTP_201_CREATED)

    def put(self,request,id):
        emp=Employee.objects.filter(id=id).first()
        response={
            "success": True,
            "message": "Employee Updated succesfully!"
        }
        if emp is None:
            response['success']=False,
            response['message']='Employee not found!'
            return Response(response,status.HTTP_404_NOT_FOUND)
        for key,value in request.data.items():
            setattr(emp,key,value)
        emp.save()
        return Response(response,status.HTTP_204_NO_CONTENT)
    
    def patch(self,request,id):
        return self.put(request,id)
    
    def delete(self,request,id):
        emp=Employee.objects.get(id=id)
        response={
            "success": True,
            "message": "Employee Deleted succesfully!"
        }
        if emp is None:
            response['success']=False,
            response['message']='Employee not found!'
            return Response(response,status.HTTP_404_NOT_FOUND)
        emp.delete()
        return Response(response,status.HTTP_204_NO_CONTENT)