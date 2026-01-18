import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        {open ? <IoClose /> : <IoMenu />}
      </button>

      {open && (
        <ul className="nav-mobile">
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}
