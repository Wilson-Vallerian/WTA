import { NavLink } from "react-router";
export default function MobileNavList({ to, handleClick, children }) {
  return (
    <li>
      <NavLink to={to} onClick={() => handleClick}>
        {children}
      </NavLink>
    </li>
  );
}
