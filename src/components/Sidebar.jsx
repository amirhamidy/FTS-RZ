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
    const [activeItem, setActiveItem] = useState("خانه");
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleCollapse = () => setCollapsed(!collapsed);
    const toggleSubmenu = (name) => setOpenMenu(openMenu === name ? null : name);

    const menuItems = [
        {
            name: "داشبورد",
            icon: <HomeIcon />,
            children: [
                { name: "خانه", icon: <HomeIcon /> },
                { name: "نمودار", icon: <ChartIcon /> },
                { name: "فعالیت‌ها", icon: <ActivityIcon /> },
            ],
        },
        {
            name: "مدیریت کاربران",
            icon: <UserIcon />,
            children: [
                { name: "کاربر", icon: <UserIcon /> },
                { name: "گروه کاربران", icon: <UsersGroupIcon /> },
                { name: "نقش‌ها و دسترسی‌ها", icon: <ShieldIcon /> },
            ],
        },
        {
            name: "محتوا",
            icon: <ArticleIcon />,
            children: [
                { name: "مقاله / بلاگ", icon: <ArticleIcon /> },
                { name: "صفحات استاتیک", icon: <PageIcon /> },
                { name: "رسانه", icon: <MediaIcon /> },
            ],
        },
        {
            name: "محصولات و فروش",
            icon: <CartIcon />,
            children: [
                { name: "سفارشات", icon: <CartIcon /> },
                { name: "محصول / کالا", icon: <BoxIcon /> },
                { name: "دسته‌بندی / برچسب", icon: <TagIcon /> },
                { name: "تخفیف / کوپن", icon: <CouponIcon /> },
            ],
        },
        {
            name: "مالی",
            icon: <MoneyIcon />,
            children: [
                { name: "درآمد / هزینه‌ها", icon: <MoneyIcon /> },
                { name: "فاکتور / تراکنش", icon: <InvoiceIcon /> },
                { name: "پرداخت‌ها", icon: <CreditCardIcon /> },
            ],
        },
        {
            name: "پروژه‌ها",
            icon: <ProjectIcon />,
            children: [
                { name: "پروژه‌ها", icon: <ProjectIcon /> },
                { name: "کارها", icon: <TaskIcon /> },
                { name: "تقویم / تایم‌لاین", icon: <CalendarIcon /> },
            ],
        },
        {
            name: "تنظیمات",
            icon: <SettingsIcon />,
            children: [
                { name: "تنظیمات", icon: <SettingsIcon /> },
                { name: "اعلان‌ها", icon: <NotificationIcon /> },
                { name: "امنیت / پسورد", icon: <LockIcon /> },
            ],
        },
        {
            name: "عمومی",
            icon: <SearchIcon />,
            children: [
                { name: "جستجو", icon: <SearchIcon /> },
                { name: "زنگ نوتیفیکیشن", icon: <BellIcon /> },
                { name: "خروج", icon: <LogoutIcon /> },
            ],
        },
    ];

    return (
        <div className={`sidebar ${darkMode ? "dark" : "light"} ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-header">
                {!collapsed && <h2 className="logo">پنل مدیریت</h2>}
                <div className="actions">
                    <button onClick={toggleCollapse} className="collapse-btn">≡</button>
                    <button onClick={toggleDarkMode} className="toggle-theme-btn">
                        {darkMode ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>
            </div>
            <ul className="menu">
                {menuItems.map((item, i) => (
                    <li key={i}>
                        <div
                            className={`menu-item ${activeItem === item.name ? "active" : ""} ${openMenu === item.name ? "open" : ""}`}
                            onClick={() => {
                                toggleSubmenu(item.name);
                                setActiveItem(item.name);
                            }}
                        >
                            <div className="menu-right">
                                <span className="icon">{item.icon}</span>
                                {!collapsed && <span className="text">{item.name}</span>}
                            </div>
                            {!collapsed && item.children && (
                                <span className={`arrow ${openMenu === item.name ? "open" : ""}`}>›</span>
                            )}
                        </div>
                        {item.children && openMenu === item.name && !collapsed && (
                            <ul className="submenu">
                                {item.children.map((sub, j) => (
                                    <li
                                        key={j}
                                        className={`submenu-item ${activeItem === sub.name ? "active" : ""}`}
                                        onClick={() => setActiveItem(sub.name)}
                                    >
                                        <span className="icon">{sub.icon}</span>
                                        <span className="text">{sub.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            {!collapsed && <div className="sidebar-footer">© 2025 پنل مدیریت</div>}
        </div>
    );
}
