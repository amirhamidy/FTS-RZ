import React from 'react';

export default function OrdersTable({ title, orders }) {
    const defaultOrders = [
        { id: 101, user: 'علی', amount: '$120', status: 'پرداخت شده' },
        { id: 102, user: 'سارا', amount: '$75', status: 'در انتظار' },
        { id: 103, user: 'مهرداد', amount: '$240', status: 'پرداخت شده' },
        { id: 104, user: 'فاطمه', amount: '$50', status: 'لغو شده' },
    ];

    return (
        <div className="panel-m-orders-card">
            <h5 className="panel-m-chart-title">{title}</h5>
            <div className="panel-m-orders-table-wrapper">
                <table className="panel-m-orders-table">
                    <thead>
                        <tr><th>شماره</th><th>کاربر</th><th>مبلغ</th><th>وضعیت</th></tr>
                    </thead>
                    <tbody>
                        {(orders || defaultOrders).map((order, i) => (
                            <tr key={i}>
                                <td>{order.id}</td>
                                <td>{order.user}</td>
                                <td>{order.amount}</td>
                                <td>
                                    <span className={`panel-m-orders-badge ${order.status === 'پرداخت شده' ? 'panel-m-status-paid' : order.status === 'در انتظار' ? 'panel-m-status-pending' : 'panel-m-status-cancelled'}`}>
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
