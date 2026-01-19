import { NavLink } from "react-router";
export default function MobileNavList({ to, onClick, children }) {
  return (
    <li>
      <NavLink to={to} onClick={() => onClick()}>
        {children}
      </NavLink>
    </li>
  );
}
