import { useEffect, useState } from "react";

import ShipmentForm from "./components/ShipmentForm";
import ShipmentList from "./components/ShipmentList";

export default function App() {
  const [shipments, setShipments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadShipments() {
      try {
        const response = await fetch("http://localhost:5000/shipments");
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Failed to load shipments");
          return;
        }

        setShipments(data);
      } catch (err) {
        setError("Could not connect to backend");
        console.error(err);
      }
    }

    loadShipments();
  }, []);

  function handleShipmentCreated(newShipment) {
    setShipments((currentShipments) => [...currentShipments, newShipment]);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>FleetOps Lite</h1>
      <p>Fleet Operations Dashboard</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ShipmentForm onShipmentCreated={handleShipmentCreated} />

      <hr />

      <ShipmentList shipments={shipments} />
    </div>
  );
}