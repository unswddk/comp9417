import json


def hander(event, context):
    #event get the post parameter: movie id
    #then call the item to time function to get the most like item
    #give the response
    data = json.loads(event['body'])
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }
    response = {
        "statusCode": 200,
        "headers":{
            "Access-Control-Allow-Origin":"*"
        },
        "body": json.dumps(body)
    }

    return response


    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
