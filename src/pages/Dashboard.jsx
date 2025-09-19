// import React from 'react';
// import DashboardCard from '../components/DashboardCard';
// import { FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
// import { Line } from 'react-chartjs-2';

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export default function Dashboard() {
//     const data = {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//         datasets: [
//             {
//                 label: 'فروش ماهانه',
//                 data: [12, 19, 3, 5, 2, 3],
//                 borderColor: '#7C3AED',
//                 backgroundColor: 'rgba(124, 58, 237, 0.2)',
//                 tension: 0.4,
//             },
//         ],
//     };

//     return (
//         <div className="container my-4">
//             <h1 className="mb-4" style={{ fontFamily: 'Vazir' }}>داشبورد</h1>
//             <div className="row mb-4">
//                 <div className="col-md-4">
//                     <DashboardCard title="کاربران جدید" value="1,245" icon={<FaUsers />} bgColor="bg-primary" />
//                 </div>
//                 <div className="col-md-4">
//                     <DashboardCard title="سفارشات" value="753" icon={<FaShoppingCart />} bgColor="bg-success" />
//                 </div>
//                 <div className="col-md-4">
//                     <DashboardCard title="درآمد" value="$12,345" icon={<FaDollarSign />} bgColor="bg-warning" />
//                 </div>
//             </div>

//             <div className="card p-3 mb-4">
//                 <h5>نمودار فروش</h5>
//                 <Line data={data} />
//             </div>
//         </div>
//     );
// }
