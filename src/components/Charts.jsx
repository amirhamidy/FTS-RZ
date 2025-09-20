import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function Charts({ type, title }) {
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
            {
                label: title,
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#7C3AED',
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="card p-3 h-100">
            <h5 className="mb-3">{title}</h5>
            {type === "line" && <Line data={data} />}
            {type === "bar" && <Bar data={data} />}
        </div>
    );
}
