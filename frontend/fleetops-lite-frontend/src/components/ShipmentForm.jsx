import { useState } from "react";

export default function ShipmentForm({ onShipmentCreated }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [carrier, setCarrier] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState("Pending");
  const [notes, setNotes] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const shipment = {
      origin,
      destination,
      carrier,
      tracking_number: trackingNumber,
      status,
      notes,
    };

    const response = await fetch("http://localhost:5000/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shipment),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to create shipment:", data);
      return;
    }

    onShipmentCreated(data.shipment);

    setOrigin("");
    setDestination("");
    setCarrier("");
    setTrackingNumber("");
    setStatus("Pending");
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Shipment</h2>

      <input
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Carrier"
        value={carrier}
        onChange={(e) => setCarrier(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <br /><br />

      <button type="submit">Create Shipment</button>
    </form>
  );
}