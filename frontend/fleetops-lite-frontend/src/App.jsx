import { useEffect, useState } from "react";

import ShipmentForm from "./components/ShipmentForm";
import ShipmentList from "./components/ShipmentList";

export default function App() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shipments")
      .then((res) => res.json())
      .then((data) => setShipments(data));
  }, []);

  function handleShipmentCreated(newShipment) {
    setShipments([...shipments, newShipment]);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>FleetOps Lite</h1>
      <p>Fleet Operations Dashboard</p>

      <ShipmentForm onShipmentCreated={handleShipmentCreated} />

      <hr />

      <ShipmentList shipments={shipments} />
    </div>
  );
}