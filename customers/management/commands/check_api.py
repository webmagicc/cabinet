from django.core.management.base import BaseCommand, CommandError
from pymongo import MongoClient



class Command(BaseCommand):

    def handle(self, *args, **options):
        remote_client = MongoClient('mongodb://adv2:<ju,kfujq@5.45.115.126:27017/adv')
        remote_db = remote_client['adv']
        local_client = MongoClient('mongodb://localhost:27017/')
        local_db = local_client['cabinet']

        exist_api = []
        for i in local_db.ips.distinct( "ip" ):
            exist_api.append(i)
        print(exist_api)

        new_ip = []

        for i in remote_db.hits.distinct( "ip" ):
            if not i or i == "unknown":
                continue
            ip = i.replace(' ','')
            if not ip in exist_api:
                print(ip)
                new_ip.append({
                    "ip":ip,
                    "city":"",
                    "address":"",
                    "owner":"",
                    "lan":"",
                    "lon":"",
                    "text":""
                    })
        #print(new_ip)
        if new_ip:
            res = local_db.ips.insert_many(new_ip)

