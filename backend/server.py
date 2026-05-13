from flask import Flask, request
from flask_cors import CORS
import json

from lambdas.get_shipments import lambda_handler
from lambdas.create_shipment import lambda_handler as create_lambda

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
   return {"status": "Fleetops Lite API Online"}

@app.route("/shipments", methods=["GET"])
def shipments():
  response = lambda_handler({}, {})
  return json.loads(response["body"])

@app.route("/shipments", methods=["POST"])
def create_shipment():
  event = {
     "body": json.dumps(request.json)
  }

  response = create_lambda(event, {})
  return json.loads(response["body"]), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)