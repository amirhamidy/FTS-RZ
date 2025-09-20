import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CustomChart({ type, title }) {
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
            {
                label: 'فروش',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59,130,246,0.2)',
                borderWidth: 3,
                pointRadius: 5,
                tension: 0.4,
            },
            {
                label: 'درآمد',
                data: [5, 10, 15, 20, 25, 30],
                borderColor: '#9333EA',
                backgroundColor: 'rgba(147,51,234,0.2)',
                borderWidth: 3,
                pointRadius: 5,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#1e1e2f', font: { size: 13, weight: '700' } } },
            tooltip: { mode: 'index', intersect: false },
        },
        scales: {
            x: { ticks: { color: '#1e1e2f', font: { size: 12 } }, grid: { display: false } },
            y: { ticks: { color: '#1e1e2f', font: { size: 12 } }, grid: { color: 'rgba(0,0,0,0.05)' } },
        },
    };

    return (
        <div className="DASH-chart-card">
            <h5 className="DASH-chart-title">{title}</h5>
            {type === 'line' && <Line data={data} options={options} className="DASH-chart" />}
        </div>
    );
}
