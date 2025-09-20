import React from 'react';

export default function OrdersTable({ title }) {
    const orders = [
        { id: 101, user: "علی", amount: "$120", status: "پرداخت شده" },
        { id: 102, user: "سارا", amount: "$75", status: "در انتظار" },
        { id: 103, user: "مهرداد", amount: "$240", status: "پرداخت شده" },
        { id: 104, user: "فاطمه", amount: "$50", status: "لغو شده" },
    ];

    return (
        <div className="card p-3 h-100">
            <h5 className="mb-3">{title}</h5>
            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
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
                                    <span className={`badge ${order.status === "پرداخت شده" ? "bg-success" : order.status === "در انتظار" ? "bg-warning" : "bg-danger"}`}>
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
