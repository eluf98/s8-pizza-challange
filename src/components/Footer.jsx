import { Link } from "react-router-dom"; // react-router-dom'dan Link import edilmesi gerektiğini unutma
import './footer.css'; // CSS dosyasını import et

export const menuItems = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];

export const instagramItemsSrc = [
  "/images/iteration-2-images/footer/insta/li-0.png",
  "/images/iteration-2-images/footer/insta/li-1.png",
  "/images/iteration-2-images/footer/insta/li-2.png",
  "/images/iteration-2-images/footer/insta/li-3.png",
  "/images/iteration-2-images/footer/insta/li-4.png",
  "/images/iteration-2-images/footer/insta/li-5.png",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Footer Üst Kısmı */}
        <div className="footer__section">
          <img
            className="footer__logo"
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Footer Logo"
          />
          <div className="footer__address">
            <img
              src="/images/iteration-2-images/footer/icons/icon-1.png"
              alt="Location Icon"
            />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </div>
          <div className="footer__email">
            <img
              src="/images/iteration-2-images/footer/icons/icon-2.png"
              alt="Email Icon"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="footer__phone">
            <img
              src="/images/iteration-2-images/footer/icons/icon-3.png"
              alt="Phone Icon"
            />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        {/* Hot Menu Kısmı */}
        <div className="footer__section">
          <p className="footer__menu-title">Hot Menu</p>
          {menuItems.map((item, index) => (
            <p className="footer__menu" key={index}>
              {item}
            </p>
          ))}
        </div>

        {/* Instagram Kısmı */}
        <div className="footer__section">
          <p className="footer__menu-title">Instagram</p>
          <div className="footer__instagram">
            {instagramItemsSrc.map((itemSrc, index) => (
              <img
                src={itemSrc}
                key={index}
                className="w-20"
                alt={`Instagram Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="footer__divider" />
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Teknolojik Yemekler</p>
        <Link to="">
          <img
            src="/images/iteration-2-images/footer/twitter.svg"
            alt="Twitter Icon"
            className="footer__twitter-icon"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;