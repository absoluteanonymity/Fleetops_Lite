import json

def lambda_handler(event, context):
    shipments = [
        {
            'id': 'Load-001',
            'status': 'In Transit',
            'driver': 'Unit 345'
        },
        {
            'id': 'Load-002',
            'status': 'Delivered',
            'driver': 'Unit 678'
        },
        {
            'id': 'Load-003',
            'status': 'Pending',
            'driver': 'Unit 901'
        }
    ]

    return {
        'statusCode': 200,
        "headers": {
            "Content-Type": "application/json"
        },
        'body': json.dumps(shipments)
    }
    