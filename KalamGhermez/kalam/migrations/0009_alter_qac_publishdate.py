# Generated by Django 4.1.3 on 2022-11-24 13:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kalam', '0008_rename_user_userdata_alter_qac_publishdate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qac',
            name='publishDate',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 24, 13, 59, 53, 664696)),
        ),
    ]
