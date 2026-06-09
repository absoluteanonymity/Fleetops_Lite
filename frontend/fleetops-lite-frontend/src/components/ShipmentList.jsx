export default function ShipmentList({ shipments }) {
    return (
        <div>
            <h2>Active Shipments</h2>
            {shipments.length === 0 ? (
                <p>No active shipments.</p>
            ) : (
                <table border='1' cellPadding='8'>
                    <thead>
                        <tr>
                            <th>Shipment ID</th>
                            <th>Status</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Carrier</th>
                            <th>Tracking Number</th>
                            <th>Notes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {shipments.map((s) => (
                            <tr key={s.shipment_id}>
                                <td>{s.shipment_id}</td>
                                <td>{s.status}</td>
                                <td>{s.origin}</td>
                                <td>{s.destination}</td>
                                <td>{s.carrier}</td>
                                <td>{s.tracking_number}</td>
                                <td>{s.notes}</td>
                            </tr>
                           ))} 
                        </tbody>
                    </table>
                )}    
        </div>
    );
}