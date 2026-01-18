import NavList from "./NavList";
export default function DesktopNav() {
  return (
    <div className="nav">
      <ul>
        <NavList to="/">Home</NavList>
        <NavList to="/services">Services</NavList>
        <NavList to="/about">About Us</NavList>
      </ul>
    </div>
  );
}
