import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);
ChartJS.defaults.font.family = "'Vazir', sans-serif";
ChartJS.defaults.color = "#374151";

export default function CustomChart({ type = 'line', title }) {
    const palette = ['#3B82F6', '#9333EA', '#F59E0B', '#10B981', '#EF4444', '#6366F1', '#EC4899'];
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
            { label: 'فروش', data: [12, 19, 3, 5, 2, 3], borderColor: palette[0], backgroundColor: type === 'line' ? 'rgba(59,130,246,0.3)' : palette, borderWidth: 2, fill: type === 'line', tension: 0.4 },
            { label: 'درآمد', data: [5, 10, 15, 20, 25, 30], borderColor: palette[1], backgroundColor: type === 'line' ? 'rgba(147,51,234,0.3)' : palette.slice().reverse(), borderWidth: 2, fill: type === 'line', tension: 0.4 },
        ]
    };
    const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { size: 13, weight: '600' }, color: '#374151' } }, tooltip: { mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#fff', bodyColor: '#f9fafb', borderWidth: 1, borderColor: '#4b5563' } }, scales: { x: { ticks: { color: '#374151', font: { size: 12 } }, grid: { color: 'rgba(0,0,0,0.05)' } }, y: { ticks: { color: '#374151', font: { size: 12 } }, grid: { color: 'rgba(0,0,0,0.05)' } } } };
    const renderChart = () => { switch (type) { case 'bar': return <Bar data={data} options={options} />; case 'pie': return <Pie data={data} options={options} />; case 'doughnut': return <Doughnut data={data} options={options} />; default: return <Line data={data} options={options} />; } };
    return <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
        <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#374151' }}>{title}</h5>
        <div style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>{renderChart()}</div>
    </div>;
}
