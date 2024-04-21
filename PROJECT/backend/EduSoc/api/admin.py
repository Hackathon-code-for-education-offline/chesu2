from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Skill)

admin.site.register(University)
admin.site.register(Faculty)
admin.site.register(Place)

admin.site.register(Post)
admin.site.register(Subscription)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(Photo)
admin.site.register(Review)

admin.site.register(UniversityAdmin)
admin.site.register(UniversityStudent)
