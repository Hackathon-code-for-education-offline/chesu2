# Generated by Django 5.0.4 on 2024-04-21 15:52

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_chatroom_message'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='university',
        ),
        migrations.AddField(
            model_name='review',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
