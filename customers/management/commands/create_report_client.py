from django.core.management.base import BaseCommand, CommandError
from pymongo import MongoClient
from customers.models import Resouce
import re
from reports.models import (IpReport,
                             IpReportItem,
                             UserReport,
                             UserReportItem)



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
                        report, created = UserReport.objects.get_or_create(site=s,
                                                                platform=w,
                                                                user=i['adv_user'])
                        if 'referer' in i:
                            referer  = i['referer']
                        else:
                            referer  = ''
                        if 'href' in i:
                            href  = i['href']
                        else:
                            href  = ''
                        user_agent = i['user_agent']
                        user_agent = user_agent[0:250]
                        report.user_agent = user_agent
                        report.save()
                        iri, created = UserReportItem.objects.get_or_create(user_report=report,
                                                                date=i['date'],
                                                                user_agent=user_agent,
                                                                href=href,
                                                                referer=referer,
                                                                ip=i['ip'])
                        print(i)
                        print(" ")
                        
                if w.name == 'Yandex':
                    yandex_ips = []
                    regx = re.compile("yabs", re.IGNORECASE)
                    for i in remote_db.hits.find({"$and":[{"domain":s.domain},{ "referer": regx }]}):
                        report, created = UserReport.objects.get_or_create(site=s,
                                                                platform=w,
                                                                user=i['adv_user'])
                        if 'referer' in i:
                            referer  = i['referer']
                        else:
                            referer  = ''
                        if 'href' in i:
                            href  = i['href']
                        else:
                            href  = ''
                        user_agent = i['user_agent']
                        user_agent = user_agent[0:250]
                        report.user_agent = user_agent
                        report.save()
                        iri, created = UserReportItem.objects.get_or_create(user_report=report,
                                                                date=i['date'],
                                                                user_agent=user_agent,
                                                                href=href,
                                                                referer=referer,
                                                                ip=i['ip'])
                        print(i)
                        print(" ")

        for r in UserReport.objects.all():
            c = UserReportItem.objects.filter(user_report=r).count()
            r.count = c
            print(c)
            d = UserReportItem.objects.filter(user_report=r).values('ip').distinct().count()
            print("un " + str(d))
            r.distinct_ip = d
            r.save()

