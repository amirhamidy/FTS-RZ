export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow px-4 py-2">
      <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        داشبورد
      </h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded">🔔</button>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
