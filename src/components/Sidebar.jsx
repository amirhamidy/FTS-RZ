import React, { useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import ChartIcon from "../icons/ChartIcon";
import ActivityIcon from "../icons/ActivityIcon";
import UserIcon from "../icons/UserIcon";
import UsersGroupIcon from "../icons/UsersGroupIcon";
import ShieldIcon from "../icons/ShieldIcon";
import ArticleIcon from "../icons/ArticleIcon";
import PageIcon from "../icons/PageIcon";
import MediaIcon from "../icons/MediaIcon";
import CartIcon from "../icons/CartIcon";
import BoxIcon from "../icons/BoxIcon";
import TagIcon from "../icons/TagIcon";
import CouponIcon from "../icons/CouponIcon";
import MoneyIcon from "../icons/MoneyIcon";
import InvoiceIcon from "../icons/InvoiceIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import ProjectIcon from "../icons/ProjectIcon";
import TaskIcon from "../icons/TaskIcon";
import CalendarIcon from "../icons/CalendarIcon";
import SettingsIcon from "../icons/SettingsIcon";
import NotificationIcon from "../icons/NotificationIcon";
import LockIcon from "../icons/LockIcon";
import SearchIcon from "../icons/SearchIcon";
import BellIcon from "../icons/BellIcon";
import LogoutIcon from "../icons/LogoutIcon";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(true);
    const [openSection, setOpenSection] = useState(null);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleSection = (idx) => setOpenSection(openSection === idx ? null : idx);

    const menuSections = [
        {
            title: "داشبورد", items: [{ name: "خانه", icon: <HomeIcon /> },
            { name: "نمودار", icon: <ChartIcon /> },
            { name: "فعالیت‌ها", icon: <ActivityIcon /> }]
        },
        {
            title: "مدیریت کاربران", items: [{ name: "کاربر", icon: <UserIcon /> },
            { name: "گروه کاربران", icon: <UsersGroupIcon /> },
            { name: "نقش‌ها و دسترسی‌ها", icon: <ShieldIcon /> }]
        },
        {
            title: "محتوا", items: [{ name: "مقاله / بلاگ", icon: <ArticleIcon /> },
            { name: "صفحات استاتیک", icon: <PageIcon /> },
            { name: "رسانه", icon: <MediaIcon /> }]
        },
        {
            title: "محصولات و فروش", items: [{ name: "سفارشات", icon: <CartIcon /> },
            { name: "محصول / کالا", icon: <BoxIcon /> },
            { name: "دسته‌بندی / برچسب", icon: <TagIcon /> },
            { name: "تخفیف / کوپن", icon: <CouponIcon /> }]
        },
        {
            title: "مالی", items: [{ name: "درآمد / هزینه‌ها", icon: <MoneyIcon /> },
            { name: "فاکتور / تراکنش", icon: <InvoiceIcon /> },
            { name: "پرداخت‌ها", icon: <CreditCardIcon /> }]
        },
        {
            title: "پروژه‌ها", items: [{ name: "پروژه‌ها", icon: <ProjectIcon /> },
            { name: "کارها", icon: <TaskIcon /> },
            { name: "تقویم / تایم‌لاین", icon: <CalendarIcon /> }]
        },
        {
            title: "تنظیمات", items: [{ name: "تنظیمات", icon: <SettingsIcon /> },
            { name: "اعلان‌ها", icon: <NotificationIcon /> },
            { name: "امنیت / پسورد", icon: <LockIcon /> }]
        },
        {
            title: "عمومی", items: [{ name: "جستجو", icon: <SearchIcon /> },
            { name: "زنگ نوتیفیکیشن", icon: <BellIcon /> },
            { name: "خروج", icon: <LogoutIcon /> }]
        },
    ];

    return (
        <div className="d-flex flex-column p-3 text-white" style={{ width: "300px",overflowY : "scroll", height: "100vh", backgroundColor: darkMode ? "#121212" : "#1e1e1e", fontFamily: "Vazir, sans-serif", transition: "all 0.3s", direction: "rtl" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fs-14 fw-bold text-white">پنل مدیریت</h2>
                <button onClick={toggleDarkMode} className="btn btn-sm" style={{ backgroundColor: darkMode ? "#3b2a6b" : "#6b3b99", color: "#fff", borderRadius: "6px" }}>
                    {darkMode ? <MoonIcon /> : <SunIcon />}
                </button>
            </div>
            {menuSections.map((section, idx) => (
                <div key={idx} className="mb-3">
                    <div
                        onClick={() => toggleSection(idx)}
                        className={`fs-14 fw-bold text-white mb-2 py-2`}
                        style={{ cursor: "pointer", userSelect: "none" }}>
                        {section.title}
                    </div>
                    {openSection === idx && (
                        <ul className="nav flex-column">
                            {section.items.map((item, i) => (
                                <li key={i} className="mb-1 sub-menu-item">
                                    <a href="#" className="nav-link d-flex align-items-center text-white" style={{ fontSize: "14px", padding: "8px 12px", borderRadius: "6px", transition: "all 0.2s" }}>
                                        <span className="me-2">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            <div className="mt-auto text-center" style={{ fontSize: "13px", color: "#aaa" }}>© 2025 پنل مدیریت</div>
        </div>
    );
}
