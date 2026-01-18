import { IoMenu, IoClose } from "react-icons/io5";

export default function Hamburger({ open, setOpen }) {
  return (
    <button
      className={`hamburger ${open ? "" : "open"}`}
      onClick={() => setOpen(!open)}
    >
      <IoMenu className="icon close" />
      <IoClose className="icon menu" />
    </button>
  );
}
