# Generated by Django 2.1.1 on 2018-09-25 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0009_auto_20180924_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userlist',
            name='favourite',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='userlist',
            name='watch_later',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='userlist',
            name='watched',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]