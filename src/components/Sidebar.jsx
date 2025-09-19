import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
            <div className="p-4 text-xl font-bold text-gray-700 dark:text-gray-200">
                Admin Panel
            </div>
            <nav className="mt-4 flex flex-col space-y-2">
                <Link to="/" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    داشبورد
                </Link>
                <Link to="/users" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    کاربران
                </Link>
            </nav>
        </div>
    );
}
