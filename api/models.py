# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone

# Create your models here.
class Todo(models.Model):
    #创建时间
    create_time = models.DateTimeField(auto_now_add=True)
    #编辑时间
    update_time = models.DateTimeField(auto_now=True)
    #Todo内容
    title = models.CharField(max_length=50, default=timezone.now)
    #是否完成
    is_end = models.BooleanField(default=False)

    class Meta:
        ordering = ('is_end',)