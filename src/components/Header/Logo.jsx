// import logo from "../assets/logo.svg";
import { Link } from "react-router";

export default function Logo() {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <p>TEMPLATE</p>
      </Link>
    </div>
  );
}
