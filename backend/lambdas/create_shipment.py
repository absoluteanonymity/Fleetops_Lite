import json

def lambda_handler(event, context):
    body = json.loads(event['body'])
                      
    shipment = {
        "id": body['id'],
        "status": body['status'],
        "driver": body['driver']
    }

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': json.dumps(shipment)
}