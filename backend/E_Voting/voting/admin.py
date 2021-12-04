from django.contrib import admin
from .models import Election,Candidates,Positions,Votes

# Register your models here.
admin.site.register(Election)
admin.site.register(Candidates)
admin.site.register(Positions)
admin.site.register(Votes)
