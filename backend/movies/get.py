import json
import csv

def get(event, context):
    result = {}
    with open('./data/movies.csv',encoding="ISO-8859-1") as csvfile:
        spamreader = csv.reader(csvfile)
        next(spamreader)
        for item in spamreader:
            # id_name = item[0].split("|")
            result[item[0]] = item[1]
    response = {
        "statusCode": 200,
        "headers":{
            "Access-Control-Allow-Origin":"*"
        },
        "body": json.dumps(result)
    }
    return response

