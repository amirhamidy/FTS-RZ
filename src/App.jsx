import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Layout from "./layouts/Layout";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Sidebar />} />
          <Route path="/users" element={<Users />} />
          {/* پیج‌های دیگه رو بعداً اضافه می‌کنیم */}
        </Route>
      </Routes>
    </Router>
  );
}
