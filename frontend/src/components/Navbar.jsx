import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b">

      <h1 className="text-2xl font-bold">
        Parent Check-In
      </h1>

      <Link to="/login">
  <button className="bg-black text-white px-4 py-2 rounded-lg">
    Login
  </button>
</Link>

    </nav>
  );
}

export default Navbar;