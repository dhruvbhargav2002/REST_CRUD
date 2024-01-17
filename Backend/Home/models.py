from django.db import models

# Create your models here.
class Department(models.Model):
    id=models.CharField(max_length=16,primary_key=True)
    name=models.CharField(max_length=32)
    def __str__(self):
        return self.name
class Employee(models.Model):
    id=models.CharField(max_length=16,primary_key=True)
    name=models.CharField(max_length=32)
    department=models.CharField(max_length=32)
    manager_id=models.CharField(max_length=16)
    def __str__(self):
        return self.name