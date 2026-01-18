import "../../styles/footer.css";
import Copyright from "./Copyright";
import FooterNav from "./FooterNav";
import Social from "./Social";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <FooterNav />
        <Social />
        <Copyright />
      </div>
    </div>
  );
}
