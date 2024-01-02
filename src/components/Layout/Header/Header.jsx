import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import { Link, useLocation } from "react-router-dom";
import Proptypes from "prop-types";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);

  const { pathname } = useLocation();

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            Kasım ayına özel %50 indirimi kaçırmayın.İndirimli ürünleri görmek
            için
            <a href="shop.html"> tıklayın</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                HİSAR ERKEK GİYİM{" "}
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      ANASAYFA
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">GİYİM</a>
                        </li>
                        <li>
                          <a href="#">ÜST GİYİM</a>
                        </li>
                        <li>
                          <a href="#">ALT GİYİM</a>
                        </li>
                        <li>
                          <a href="#">AYAKKABI</a>
                        </li>
                        <li>
                          <a href="#">TERLİK</a>
                        </li>
                        <li>
                          <a href="#">BOT</a>
                        </li>
                        <li>
                          <a href="#">SAAT</a>
                        </li>
                        <li>
                          <a href="#">KOL SAATİ</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      GİYİM
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">GİYİM</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">GİYİM</a>
                              </li>
                              <li>
                                <a href="#">ÜST GİYİM</a>
                              </li>
                              <li>
                                <a href="#">ALT GİYİM</a>
                              </li>
                              <li>
                                <a href="#">AYAKKABI</a>
                              </li>
                              <li>
                                <a href="#">TERLİK</a>
                              </li>
                              <li>
                                <a href="#">BOT</a>
                              </li>
                              <li>
                                <a href="#">SAAT</a>
                              </li>
                              <li>
                                <a href="#">KOL SAATİ</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              AYAKKABI
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">TERLİK</a>
                              </li>
                              <li>
                                <a href="#">BOT</a>
                              </li>
                              <li>
                                <a href="#">SPOR AYAKKABI</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">SAAT</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">AKILLI SAAT</a>
                              </li>
                              <li>
                                <a href="#">AKILLI SAAT</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img
                              src="../../../../public/img/images/14e564_88c4462257154b4ca72ce2c3965c4029~mv2.webp"
                              alt=""
                            />
                          </a>
                          <h3 className="megamenu-single-title">
                            GİYİMİN RUHU HİSAR
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            HEMEN HİSAR GİYİMİN RUHUNU HİSSEDİN
                          </h4>
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            ŞİMDİ ALIŞVERİŞ YAP
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      İLETİŞİM
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                  // tıklandığında true yapacak
                >
                  <i className="bi bi-search"></i>
                </button>
                <a href="#">
                  <i className="bi bi-heart"></i>
                </a>
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
