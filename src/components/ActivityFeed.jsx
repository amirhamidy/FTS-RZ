import React from 'react';

export default function ActivityFeed({ title, activities }) {
    const defaultActivities = [
        { user: 'علی', action: 'سفارش جدید ثبت کرد', time: '2 دقیقه پیش' },
        { user: 'سارا', action: 'کاربر جدید اضافه شد', time: '10 دقیقه پیش' },
        { user: 'مهرداد', action: 'پرداخت موفق انجام شد', time: '30 دقیقه پیش' },
        { user: 'فاطمه', action: 'پروژه جدید ایجاد شد', time: '1 ساعت پیش' },
    ];

    return (
        <div className="panel-m-activity-card">
            <h5 className="panel-m-chart-title">{title}</h5>
            <ul className="panel-m-activity-list">
                {(activities || defaultActivities).map((act, i) => (
                    <li key={i} className="panel-m-activity-item">
                        <div className="panel-m-activity-text"><strong>{act.user}</strong> {act.action}</div>
                        <small className="panel-m-activity-time">{act.time}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
