# Generated by Django 5.0.4 on 2024-04-20 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_post_title_alter_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='comments',
            field=models.ManyToManyField(blank=True, to='api.comment'),
        ),
        migrations.AlterField(
            model_name='review',
            name='comments',
            field=models.ManyToManyField(blank=True, to='api.comment'),
        ),
    ]