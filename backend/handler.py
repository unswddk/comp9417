import json

def hander(event, context):
    target_id = event['pathParameters']['id']
    result=[]
    with open('data/data.json') as data_file:
        data_loaded = json.load(data_file)
    for p in data_loaded[target_id]["peer"]:
        result.append(data_loaded[str(p)]["name"])
    response = {
        "statusCode": 200,
        "headers":{
            "Access-Control-Allow-Origin":"*"
        },
        "body": json.dumps(result)
    }
    return response
