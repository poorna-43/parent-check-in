import {
  FaHome,
  FaUsers,
  FaPhone,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        Parent Check-In
      </div>

      <nav className="flex-1 p-4">

        <ul className="space-y-3">

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <FaHome />
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <FaUsers />
            Parents
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <FaPhone />
            Check-ins
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <FaChartBar />
            Analytics
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <FaCog />
            Settings
          </li>

        </ul>

      </nav>

      <div className="p-4 border-t border-slate-700">

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-600 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;