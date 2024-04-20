from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver


class User(AbstractUser):
    USER_ROLES = (
        ('university', 'University'),
        ('admin', 'University Admin'),
        ('student', 'University Student'),
        ('user', 'General User'),
    )
    role = models.CharField(max_length=20, choices=USER_ROLES, default='user')
    university = models.ForeignKey('University', on_delete=models.SET_NULL, null=True, blank=True)
    avatar = models.ImageField(upload_to='users/', blank=True, null=True)


class University(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()

    avatar = models.ImageField(upload_to='universities/', blank=True, null=True)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    university = models.ForeignKey(University, related_name='faculties', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class UniversityAdmin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    managed_university = models.ForeignKey(University, on_delete=models.CASCADE)


class UniversityStudent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    enrollment_date = models.DateField()
    degree_program = models.CharField(max_length=255)


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author.username} on Post {self.post.id}"


class Post(models.Model):
    university = models.ForeignKey(University, related_name='posts', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    comments = models.ManyToManyField(Comment, blank=True)

    def __str__(self):
        return f"{self.title}\nPost by {self.author.username} at {self.university.name}"


class Like(models.Model):
    post = models.ForeignKey(Post, related_name='likes', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Like by {self.user.username} on Post {self.post.id}"

    class Meta:
        unique_together = ('post', 'user')  # Ensure a user can only like a post once


class Photo(models.Model):
    post = models.ForeignKey(Post, related_name='photos', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post_photos/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Photo for Post {self.post.id}"


class Review(models.Model):
    university = models.ForeignKey(University, related_name='reviews', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    comments = models.ManyToManyField(Comment, blank=True)

    def __str__(self):
        return f"Review by {self.author.username} for {self.university.name}"
