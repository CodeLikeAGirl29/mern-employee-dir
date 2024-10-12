import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="directory central logo" className="h-48 w-full object-cover md:h-full md:w-48" src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1728510985/logo_1_damd5g.png"></img>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3 btn btn-outline btn-secondary" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}