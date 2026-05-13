from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/shipments")
def shipments():
    return jsonify([
        {"id": "LOAD-0001", "status": "In Transit", "driver": "Unit 331"},
        {"id": "LOAD-0002", "status": "Delivered", "driver": "Unit 332"},
        {"id": "LOAD-0003", "status": "Pending", "driver": "Unit 333"},
    ])

if __name__ == "__main__":
    app.run(debug=True, port=5000)