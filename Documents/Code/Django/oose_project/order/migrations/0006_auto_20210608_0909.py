# Generated by Django 3.1.7 on 2021-06-08 04:09

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0005_auto_20210607_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='transaction_ID',
            field=models.CharField(default=1623125374.333363, max_length=256, null=True),
        ),
        migrations.CreateModel(
            name='Product_Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.CharField(blank=True, max_length=720, null=True)),
                ('rating', models.IntegerField(null=True, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('isAnonymous', models.BooleanField(default=False)),
                ('order_item', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='order.orderitem')),
            ],
        ),
    ]