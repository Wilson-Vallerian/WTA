import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import Hamburger from "./Hamburger";

const AUTO_CLOSE = 3000;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (open) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, AUTO_CLOSE);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  function handleClick() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setOpen(false);
    }
  }

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />

      {open && (
        <ul className="nav-mobile">
          <li>
            <NavLink to="/" onClick={() => handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => handleClick}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => handleClick}>
              About
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}
