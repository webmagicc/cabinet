# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-10 07:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ipreport',
            name='distinct_user_agents',
            field=models.IntegerField(blank=True, default=0, null=True, verbose_name='Distinct user agent'),
        ),
        migrations.AddField(
            model_name='userreportitem',
            name='distinct_ip',
            field=models.IntegerField(blank=True, default=0, null=True, verbose_name='Distinct ip'),
        ),
    ]
