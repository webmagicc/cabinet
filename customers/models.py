from django.db import models
from profiles.models import User 
from core.models import OrderingBaseModel

class Platform(OrderingBaseModel):
    name = models.CharField(max_length=255,
                            default="",
                            verbose_name='Name')
    patern = models.CharField(max_length=255,
                            default="",
                            verbose_name='Patern')
    def __str__(self):
        return self.name

    class Meta:
        verbose_name='Platform'
        verbose_name_plural="Platforms"



class Resouce(OrderingBaseModel):
    owner = models.ForeignKey(User,
                            on_delete=models.CASCADE,
                            null=True,
                            verbose_name='Owner')
    domain = models.CharField(max_length=255,
                            default="",
                            unique=True,
                            verbose_name='Domain')
    watch = models.ManyToManyField(Platform,
                            blank=True,
                            verbose_name='Отслеживаемый трафик')
    pay_to = models.DateField("Оплачен до ",
                            blank=True,
                            null=True)
    def __str__(self):
        return self.domain

    class Meta:
        verbose_name='Site'
        verbose_name_plural="Sites"






