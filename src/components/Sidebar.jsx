import React, { useState } from 'react';
import HomeIcon from "../icons/HomeIcon";
import ChartIcon from "../icons/ChartIcon";
import UserIcon from "../icons/UserIcon";
import UsersGroupIcon from "../icons/UsersGroupIcon";
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
    const [collapsed, setCollapsed] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [activeMenu, setActiveMenu] = useState('داشبورد');
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleCollapse = () => setCollapsed(!collapsed);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleSubmenu = (name) => setOpenSubmenu(openSubmenu === name ? null : name);

    const menuItems = [
        {
            name: 'داشبورد', icon: <HomeIcon />, children: [
                { name: 'خانه', icon: <HomeIcon /> },
                { name: 'نمودار', icon: <ChartIcon /> },
                { name: 'فعالیت‌ها', icon: <ChartIcon /> },
            ]
        },
        {
            name: 'مدیریت کاربران', icon: <UserIcon />, children: [
                { name: 'کاربر', icon: <UserIcon /> },
                { name: 'گروه کاربران', icon: <UsersGroupIcon /> },
                { name: 'نقش‌ها و دسترسی‌ها', icon: <LockIcon /> },
            ]
        },
        {
            name: 'محتوا', icon: <ArticleIcon />, children: [
                { name: 'مقاله / بلاگ', icon: <ArticleIcon /> },
                { name: 'صفحات استاتیک', icon: <PageIcon /> },
                { name: 'رسانه', icon: <MediaIcon /> },
            ]
        },
        {
            name: 'محصولات و فروش', icon: <CartIcon />, children: [
                { name: 'سفارشات', icon: <CartIcon /> },
                { name: 'محصول / کالا', icon: <BoxIcon /> },
                { name: 'دسته‌بندی / برچسب', icon: <TagIcon /> },
                { name: 'تخفیف / کوپن', icon: <CouponIcon /> },
            ]
        },
        {
            name: 'مالی', icon: <MoneyIcon />, children: [
                { name: 'درآمد / هزینه‌ها', icon: <MoneyIcon /> },
                { name: 'فاکتور / تراکنش', icon: <InvoiceIcon /> },
                { name: 'پرداخت‌ها', icon: <CreditCardIcon /> },
            ]
        },
        {
            name: 'پروژه‌ها', icon: <ProjectIcon />, children: [
                { name: 'پروژه‌ها', icon: <ProjectIcon /> },
                { name: 'کارها', icon: <TaskIcon /> },
                { name: 'تقویم / تایم‌لاین', icon: <CalendarIcon /> },
            ]
        },
        {
            name: 'تنظیمات', icon: <SettingsIcon />, children: [
                { name: 'تنظیمات', icon: <SettingsIcon /> },
                { name: 'اعلان‌ها', icon: <NotificationIcon /> },
                { name: 'امنیت / پسورد', icon: <LockIcon /> },
            ]
        },
        {
            name: 'عمومی', icon: <SearchIcon />, children: [
                { name: 'جستجو', icon: <SearchIcon /> },
                { name: 'زنگ نوتیفیکیشن', icon: <BellIcon /> },
                { name: 'خروج', icon: <LogoutIcon /> },
            ]
        },
    ];

    return (
        <div className={`panel-m-sidebar ${collapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`}>
            <div className="panel-m-sidebar-header">
                {!collapsed && <h2 className="panel-m-logo">پنل مدیریت</h2>}
                <div className="panel-m-actions">
                    <button className="panel-m-collapse-btn" onClick={toggleCollapse}>≡</button>
                    <button className="panel-m-theme-btn" onClick={toggleDarkMode}>
                        {darkMode ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>
            </div>

            <ul className="panel-m-menu">
                {menuItems.map((item, i) => (
                    <li key={i}>
                        <div
                            className={`panel-m-menu-item ${activeMenu === item.name ? 'active' : ''} ${openSubmenu === item.name ? 'open' : ''}`}
                            onClick={() => {
                                setActiveMenu(item.name);
                                toggleSubmenu(item.name);
                            }}
                        >
                            <div className="panel-m-menu-right">
                                <span className="panel-m-icon">{item.icon}</span>
                                {!collapsed && <span className="panel-m-text">{item.name}</span>}
                            </div>
                            {!collapsed && item.children && (
                                <span className={`panel-m-arrow ${openSubmenu === item.name ? 'open' : ''}`}>›</span>
                            )}
                        </div>

                        {item.children && openSubmenu === item.name && !collapsed && (
                            <ul className="panel-m-submenu">
                                {item.children.map((sub, j) => (
                                    <li
                                        key={j}
                                        className={`panel-m-submenu-item ${activeMenu === sub.name ? 'active' : ''}`}
                                        onClick={() => setActiveMenu(sub.name)}
                                    >
                                        <span className="panel-m-icon">{sub.icon}</span>
                                        <span className="panel-m-text">{sub.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {!collapsed && <div className="panel-m-sidebar-footer">© 2025 پنل مدیریت</div>}
        </div>
    );
}
