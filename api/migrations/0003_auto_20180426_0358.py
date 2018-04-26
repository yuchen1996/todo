# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180425_1503'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todo',
            options={'ordering': ('is_end', 'target_time')},
        ),
    ]
