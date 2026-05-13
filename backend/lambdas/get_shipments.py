import json

def lambda_handler(event, context):
    return {
        "StatusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "shipments": [
                {
                    "id": "LOAD-1001",
                    "status": "In Transit",
                    "Driver": "Unit-379"
                },
                {
                    "id": "LOAD-1002",
                    "status": "Delivered",
                    "Driver": "Unit-380"
                }
            ]
        })
    }