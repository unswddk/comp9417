import json
import csv




def get(event, context):
    #event get the post parameter: movie id
    #then call the item to time function to get the most like item
    #give the response
    # data = json.loads(event['body'])
    csvFile = open("./data/movies.csv",encoding = "ISO-8859-1")
    reader = csv.reader(csvFile)
    result = {}
    for item in reader:
        if reader.line_num == 1:
            continue
        result[item[0]] = item[1]
    csvFile.close()
    response = {
        "statusCode": 200,
        "headers":{
            "Access-Control-Allow-Origin":"*"
        },
        "body": json.dumps(result)
    }
    return response

    # """
    # return {
    #     "message": "Go Serverless v1.0! Your function executed successfully!",
    #     "event": event
    # }
    # """
