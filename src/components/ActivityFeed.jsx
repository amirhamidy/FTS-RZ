import React from 'react';

export default function ActivityFeed({ title }) {
    const activities = [
        { user: "علی", action: "سفارش جدید ثبت کرد", time: "2 دقیقه پیش" },
        { user: "سارا", action: "کاربر جدید اضافه شد", time: "10 دقیقه پیش" },
        { user: "مهرداد", action: "پرداخت موفق انجام شد", time: "30 دقیقه پیش" },
        { user: "فاطمه", action: "پروژه جدید ایجاد شد", time: "1 ساعت پیش" },
    ];

    return (
        <div className="card p-3 h-100">
            <h5 className="mb-3">{title}</h5>
            <ul className="list-unstyled">
                {activities.map((act, i) => (
                    <li key={i} className="d-flex justify-content-between align-items-start mb-2 p-2 rounded hover-bg">
                        <div>
                            <strong>{act.user}</strong> {act.action}
                        </div>
                        <small className="text-muted">{act.time}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
