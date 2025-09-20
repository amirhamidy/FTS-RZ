import React from 'react';

export default function ActivityFeed({ title }) {
    const activities = [
        { user: 'علی', action: 'سفارش جدید ثبت کرد', time: '2 دقیقه پیش' },
        { user: 'سارا', action: 'کاربر جدید اضافه شد', time: '10 دقیقه پیش' },
        { user: 'مهرداد', action: 'پرداخت موفق انجام شد', time: '30 دقیقه پیش' },
        { user: 'فاطمه', action: 'پروژه جدید ایجاد شد', time: '1 ساعت پیش' },
    ];

    return (
        <div className="DASH-activity-card">
            <h5 className="DASH-activity-title">{title}</h5>
            <ul className="DASH-activity-list">
                {activities.map((act, i) => (
                    <li key={i} className="DASH-activity-item">
                        <div className="DASH-activity-text"><strong>{act.user}</strong> {act.action}</div>
                        <small className="DASH-activity-time">{act.time}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
