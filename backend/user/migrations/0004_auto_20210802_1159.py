# Generated by Django 2.2.13 on 2021-08-02 06:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_auto_20210709_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]