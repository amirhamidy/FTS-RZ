import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

ChartJS.defaults.font.family = "'Vazir', sans-serif";
ChartJS.defaults.font.size = 13;
ChartJS.defaults.color = "#374151";

export default function AdvancedChart({ type = 'line', title, dataSets }) {
    const data = (canvas) => {
        const ctx = canvas?.getContext('2d');
        let gradient1 = '#3b6af6ad';
        let gradient2 = '#8f3bf6ad';

        if (ctx) {
            gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
            gradient1.addColorStop(0, '#3B82F680');
            gradient1.addColorStop(1, '#3B82F610');

            gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
            gradient2.addColorStop(0, '#9333EA80');
            gradient2.addColorStop(1, '#9333EA10');
        }

        return {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
            datasets: dataSets || [
                {
                    label: 'فروش',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: 'transparent',
                    backgroundColor: gradient1,
                    fill: type === 'line',
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: '#3bf6f3ff',
                    pointBorderRadius: 7,
                },
                {
                    label: 'درآمد',
                    data: [5, 10, 15, 20, 25, 30],
                    borderColor: 'transparent',
                    backgroundColor: gradient2,
                    fill: type === 'line',
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: '#3fea33ff',
                    pointBorderRadius: 7,
                }
            ]
        };
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1200, easing: 'easeOutQuart' },
        interaction: { mode: 'nearest', intersect: false },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#374151',
                    font: { family: 'Vazir', size: 13, weight: '600' }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#f9fafb',
                borderWidth: 1,
                borderColor: '#4b5563',
                padding: 12,
                cornerRadius: 8,
                titleFont: { family: 'Vazir', size: 13, weight: 'bold' },
                bodyFont: { family: 'Vazir', size: 12 }
            }
        },
        scales: {
            x: {
                ticks: { color: '#375141ff', font: { family: 'Vazir', size: 12 } },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            y: {
                ticks: { color: '#3e5137ff', font: { family: 'Vazir', size: 12 } },
                grid: { color: 'rgba(0,0,0,0.05)' }
            }
        }
    };

    const renderChart = (canvas) => {
        switch (type) {
            case 'bar': return <Bar data={data(canvas)} options={options} />;
            case 'pie': return <Pie data={data(canvas)} options={options} />;
            case 'doughnut': return <Doughnut data={data(canvas)} options={options} />;
            default: return <Line data={data(canvas)} options={options} />;
        }
    };

    return (
        <div className="panel-m-chart-card mx-1" style={{ width: '49%' }}>
            <h5 className="panel-m-chart-title">{title}</h5>
            <div style={{ width: '100%', height: '320px', position: 'relative', padding: "10px"}}>
                {renderChart()}
            </div>
        </div>
    );
}
