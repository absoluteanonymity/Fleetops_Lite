import os
import uuid
from datetime import datetime, timezone

import boto3
from dotenv import load_dotenv


load_dotenv()

AWS_REGION = os.getenv("AWS_REGION", "us-east-2")
DYNAMODB_TABLE = os.getenv("DYNAMODB_TABLE", "FleetOpsShipments")

dynamodb = boto3.resource("dynamodb", region_name=AWS_REGION)
table = dynamodb.Table(DYNAMODB_TABLE)


def list_shipments():
    response = table.scan()
    return response.get("Items", [])


def create_shipment(data):
    shipment = {
        "shipment_id": str(uuid.uuid4()),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "status": data.get("status", "Pending"),
        "origin": data.get("origin", ""),
        "destination": data.get("destination", ""),
        "carrier": data.get("carrier", ""),
        "tracking_number": data.get("tracking_number", ""),
        "notes": data.get("notes", ""),
    }

    table.put_item(Item=shipment)

    return shipment


def delete_shipment(shipment_id):
    table.delete_item(
        Key={
            "shipment_id": shipment_id
        }
    )

    return shipment_id


def update_shipment(shipment_id, data):
    updated_shipment = {
        "shipment_id": shipment_id,
        "status": data.get("status", "Pending"),
        "origin": data.get("origin", ""),
        "destination": data.get("destination", ""),
        "carrier": data.get("carrier", ""),
        "tracking_number": data.get("tracking_number", ""),
        "notes": data.get("notes", ""),
    }

    table.update_item(
        Key={
            "shipment_id": shipment_id
        },
        UpdateExpression="""
            SET #status = :status,
                origin = :origin,
                destination = :destination,
                carrier = :carrier,
                tracking_number = :tracking_number,
                notes = :notes
        """,
        ExpressionAttributeNames={
            "#status": "status"
        },
        ExpressionAttributeValues={
            ":status": updated_shipment["status"],
            ":origin": updated_shipment["origin"],
            ":destination": updated_shipment["destination"],
            ":carrier": updated_shipment["carrier"],
            ":tracking_number": updated_shipment["tracking_number"],
            ":notes": updated_shipment["notes"],
        },
        ReturnValues="ALL_NEW"
    )

    return updated_shipment