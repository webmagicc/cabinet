from django.core.management.base import BaseCommand, CommandError
from pymongo import MongoClient
from customers.models import Resouce
import re



class Command(BaseCommand):

    def handle(self, *args, **options):
        remote_client = MongoClient('mongodb://adv2:<ju,kfujq@5.45.115.126:27017/adv')
        remote_db = remote_client['adv']
        local_client = MongoClient('mongodb://localhost:27017/')
        local_db = local_client['cabinet']

        for s in Resouce.objects.prefetch_related('watch').all():
            print(s.domain)
            for w in s.watch.all():
                print(w.name)
                if w.name == 'Google':
                    google_ips = []
                    regx = re.compile("gclid=", re.IGNORECASE)
                    for i in remote_db.hits.find({"$and":[{"domain":s.domain},{ "href": regx }]}):
                        print(i)
                        print(" ")
                        
                if w.name == 'Yandex':
                    yandex_ips = []
                    regx = re.compile("yabs", re.IGNORECASE)
                    for i in remote_db.hits.find({"$and":[{"domain":s.domain},{ "referer": regx }]}):
                        print(i)
                        print(" ")