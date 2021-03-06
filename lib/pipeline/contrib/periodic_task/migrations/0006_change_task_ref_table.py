# Generated by Django 2.2.6 on 2020-11-02 13:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("periodic_task", "0005_migrate_task"),
    ]

    operations = [
        migrations.AlterField(
            model_name="periodictask",
            name="celery_task",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="django_celery_beat.PeriodicTask",
                verbose_name="celery 周期任务实例",
            ),
        ),
    ]
