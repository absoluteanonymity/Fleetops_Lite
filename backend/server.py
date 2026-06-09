from flask import Flask, jsonify, request
from flask_cors import CORS

from db import list_shipments, create_shipment, delete_shipment


app = Flask(__name__)
CORS(app)


@app.get("/")
def home():
    return jsonify({
        "message": "FleetOps Lite backend running"
    }), 200


@app.get("/shipments")
def get_shipments():
    try:
        shipments = list_shipments()

        return jsonify(shipments), 200

    except Exception as error:
        return jsonify({
            "error": "Failed to fetch shipments",
            "details": str(error)
        }), 500


@app.post("/shipments")
def add_shipment():
    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "error": "Missing JSON body",
            }), 400

        shipment = create_shipment(data)

        return jsonify({
            "message": "Shipment created successfully",
            "shipment": shipment
        }), 201

    except Exception as error:
        return jsonify({
            "error": "Failed to create shipment",
            "details": str(error)
        }), 500


@app.delete("/shipments/<shipment_id>")
def remove_shipment(shipment_id):
    try:
        delete_shipment(shipment_id)

        return jsonify({
            "message": "Shipment deleted successfully",
            "shipment_id": shipment_id
        }), 200

    except Exception as error:
        return jsonify({
            "error": "Failed to delete shipment",
            "details": str(error)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)