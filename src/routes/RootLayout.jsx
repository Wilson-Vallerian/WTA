import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
