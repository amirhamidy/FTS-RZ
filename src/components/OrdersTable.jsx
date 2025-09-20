import React from 'react';

export default function OrdersTable({ title }) {
    const orders = [
        { id: 101, user: 'علی', amount: '$120', status: 'پرداخت شده' },
        { id: 102, user: 'سارا', amount: '$75', status: 'در انتظار' },
        { id: 103, user: 'مهرداد', amount: '$240', status: 'پرداخت شده' },
        { id: 104, user: 'فاطمه', amount: '$50', status: 'لغو شده' },
    ];

    return (
        <div className="DASH-orders-card">
            <h5 className="DASH-orders-title">{title}</h5>
            <div className="DASH-orders-table-wrapper">
                <table className="DASH-orders-table">
                    <thead>
                        <tr>
                            <th>شماره</th>
                            <th>کاربر</th>
                            <th>مبلغ</th>
                            <th>وضعیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i) => (
                            <tr key={i}>
                                <td>{order.id}</td>
                                <td>{order.user}</td>
                                <td>{order.amount}</td>
                                <td>
                                    <span
                                        className={`DASH-orders-badge ${order.status === 'پرداخت شده'
                                                ? 'DASH-status-paid'
                                                : order.status === 'در انتظار'
                                                    ? 'DASH-status-pending'
                                                    : 'DASH-status-cancelled'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
