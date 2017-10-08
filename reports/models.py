from django.db import models
from core.models import BaseModel
from customers.models import Platform, Resouce


class IpReport(BaseModel):
    site = models.ForeignKey(Resouce,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Site')
    platform = models.ForeignKey(Platform,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Platform')
    ip = models.CharField('ip',
                            max_length=255,
                            db_index=True,
                            default='')
    count = models.IntegerField('Count vizits',
                            default=0,
                            null=True,
                            blank=True)

class IpReportItem(BaseModel):
    ip_report = models.ForeignKey(IpReport,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Ip report')
    date = models.DateTimeField('date',
                            null=True,
                            db_index=True)
    user_agent = models.CharField('user agent',
                            max_length=255,
                            default='')
    referer = models.CharField('referer',
                            max_length=255,
                            default='')
    href = models.CharField('href',
                            max_length=255,
                            default='')


class UserReport(BaseModel):
    site = models.ForeignKey(Resouce,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Site')
    platform = models.ForeignKey(Platform,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Platform')
    user = models.CharField('user',
                            max_length=255,
                            db_index=True,
                            default='')
    count = models.IntegerField('Count vizits',
                            default=0,
                            null=True,
                            blank=True)


class UserReportItem(BaseModel):
    user_report = models.ForeignKey(UserReport,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Ip report')
    date = models.DateTimeField('date',
                            null=True,
                            db_index=True)
    user_agent = models.CharField('user agent',
                            max_length=255,
                            default='')
    referer = models.CharField('referer',
                            max_length=255,
                            default='')
    href = models.CharField('href',
                            max_length=255,
                            default='')
    ip = models.CharField('ip',
                            max_length=255,
                            db_index=True,
                            default='')

