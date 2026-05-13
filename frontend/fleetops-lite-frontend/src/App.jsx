import ShipmentList from "./components/ShipmentList";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>FleetOps Lite</h1>
      <p>Fleet Operations Dashboard</p>

      <ShipmentList />
    </div>
  );
} 
