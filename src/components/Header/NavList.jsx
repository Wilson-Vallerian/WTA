import { NavLink } from "react-router";

export default function NavList({ to, children }) {
  return (
    <li>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
