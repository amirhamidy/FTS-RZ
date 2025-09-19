import React from 'react';
import { FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

export default function DashboardCard({ title, value, icon, bgColor }) {
    return (
        <div className={`card text-white ${bgColor} mb-3`} style={{ maxWidth: '18rem' }}>
            <div className="card-body d-flex align-items-center">
                <div className="me-3" style={{ fontSize: '2rem' }}>{icon}</div>
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text fs-4">{value}</p>
                </div>
            </div>
        </div>
    );
}
