# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todo',
            options={'ordering': ('target_time', 'is_end')},
        ),
        migrations.AddField(
            model_name='todo',
            name='target_time',
            field=models.DateTimeField(default=datetime.datetime(2018, 4, 25, 15, 3, 22, 910823, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='todo',
            name='update_time',
            field=models.DateTimeField(default=datetime.datetime(2018, 4, 25, 15, 3, 40, 532858, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='todo',
            name='title',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
        ),
    ]
