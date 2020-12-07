from django.db import models
from django.contrib.auth.models import User

class Lead(models.Model):
    name = models.CharField(max_length = 70)
    email = models.CharField(max_length = 70, unique = True)
    message = models.TextField(blank = True, null = True)
    owner = models.ForeignKey(User, on_delete = models.CASCADE, null = True, related_name = "leads")
    creation_date = models.DateTimeField(auto_now_add = True, null = True)

    def __str__(self):
        return self.name
