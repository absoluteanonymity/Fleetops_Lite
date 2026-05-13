export default function ShipmentList({ shipments }) {
    return (
        <div>
            <h2>Active Shipments</h2>
            
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Driver</th>
                    </tr>
                </thead>
                
                <tbody>
                    {shipments.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.status}</td>
                            <td>{s.driver}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}