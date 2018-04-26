# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(default=b'', max_length=50, blank=True)),
                ('content', models.TextField()),
                ('is_end', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ('create_time', 'is_end'),
            },
        ),
    ]
