import { useEffect, useState } from 'react';

export default function ShipmentList() {
    const [shipments, setShipments] = useState([]);

    useEffect(() => {
        fetch('http://Localhost:5000/shipments')
            .then((res) => res.json())
            .then((data) => setShipments(data));
    }, []);
    

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