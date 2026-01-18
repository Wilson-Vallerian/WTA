import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoTiktok,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Social() {
  return (
    <div className="footer-social">
      <a href="https://instagram.com">
        <IoLogoInstagram className="social-icon" />
      </a>
      <a href="https://tiktok.com">
        <IoLogoTiktok className="social-icon" />
      </a>
      <a href="https://whatsapp.com">
        <IoLogoWhatsapp className="social-icon" />
      </a>
      <a href="https://x.com">
        <IoLogoTwitter className="social-icon" />
      </a>
    </div>
  );
}
