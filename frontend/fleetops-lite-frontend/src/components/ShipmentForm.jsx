import { useState } from "react";

export default function ShipmentForm({ onShipmentCreated }) {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [driver, setDriver] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const shipment = {
      id,
      status,
      driver
    };

    const response = await fetch("http://localhost:5000/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(shipment)
    });

    const data = await response.json();

    onShipmentCreated(data);

    setId("");
    setStatus("");
    setDriver("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Shipment</h2>

      <input
        placeholder="Shipment ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Driver"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />

      <br /><br />

      <button type="submit">Create Shipment</button>
    </form>
  );
}