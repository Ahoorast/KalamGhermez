# Generated by Django 4.1.3 on 2022-11-19 17:34

import datetime
from django.db import migrations, models
import django.db.models.deletion
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('kalam', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='QAC',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', django_quill.fields.QuillField()),
                ('upvotesCount', models.IntegerField(default=0)),
                ('downvotesCount', models.IntegerField(default=0)),
                ('publishDate', models.DateTimeField(default=datetime.datetime(2022, 11, 19, 17, 34, 30, 775703))),
                ('lastEdit', models.DateTimeField(blank=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kalam.user')),
            ],
        ),
        migrations.CreateModel(
            name='QA',
            fields=[
                ('qac_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='kalam.qac')),
            ],
            bases=('kalam.qac',),
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('qa_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='kalam.qa')),
                ('title', models.CharField(max_length=50)),
                ('solved', models.BooleanField(default=False)),
                ('viewed', models.IntegerField(default=0)),
            ],
            bases=('kalam.qa',),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('qac_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='kalam.qac')),
                ('QorA', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kalam.qa')),
            ],
            bases=('kalam.qac',),
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('qa_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='kalam.qa')),
                ('worked', models.BooleanField(default=False)),
                ('_question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kalam.question')),
            ],
            bases=('kalam.qa',),
        ),
    ]