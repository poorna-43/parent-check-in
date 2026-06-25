import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex justify-between items-center px-8">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-6">

        <FaBell className="text-xl cursor-pointer" />

        <div className="flex items-center gap-2">

          <FaUserCircle className="text-3xl" />

          <span className="font-semibold">
            Poorna
          </span>

        </div>

      </div>

    </header>
  );
}

export default Topbar;