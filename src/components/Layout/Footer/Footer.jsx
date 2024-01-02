import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">
                    Yeni ürünler, satışlar ve daha fazlası hakkında bilgi almak
                    için e-postalarımızı alın.{" "}
                  </h3>
                  <p className="subscribe-desc">
                    İlk siparişinizde 50 doların üzerinde 10 dolar değerinde bir
                    kupon e-postayla gönderin.
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="Email adresinizi giriniz..."
                    />
                    <button className="btn">Gönder</button>
                  </form>
                  <p className="privacy-text">
                    Abone olarak Şartlar ve Koşullarımızı ve{" "}
                    <a href="#">
                      Gizlilik ve Çerez Politikamızı kabul etmiş olursunuz.{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-top">
                <h3 className="contact-title">
                  Bize ulaşmak mı istiyorsunuz? <br />
                  (+90) 546 023 54 65
                </h3>
                <p className="contact-desc">
                  Mesai Saatlerimiz: 8:00am – 7:00pm
                </p>
              </div>
              <div className="footer-contact-bottom">
                <div className="download-app">
                  <a href="#">
                    <img src="/img/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/img/footer/google-play.png" alt="" />
                  </a>
                </div>
                <p className="privacy-text">
                  <strong>Alışveriş Uygulaması:</strong> Görüntüleme
                  özelliğimizi deneyin, kayıtları yönetin ve ödeme bilgilerini
                  kaydedin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  Hisar Giyim
                </a>
              </div>
              <div className="footer-desc">
                <p>
                  {" "}
                  Giyimin kumaşla uyumundan doğan, modernden klasiğe, geniş ürün
                  yelpazesiyle birbirinde şık ve göz alıcı giyim modelleri siz
                  ve sevdikleriniz için hazırlandı.
                </p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+800) 546 356 95 62</a> –{" "}
                  <a href="mailto:info@example.com">hisargiyim@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>Bilgi</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">İade Politikası</a>
                </li>
                <li>
                  <a href="#">Kargo Politikası</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesap</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Siparişlerim</a>
                </li>
                <li>
                  <a href="#">Favorilerim</a>
                </li>
                <li>
                  <a href="#">Hesabım</a>
                </li>
                <li>
                  <a href="#">Siparişlerimi Takip Et</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Alışveriş</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Ortaklar</a>
                </li>
                <li>
                  <a href="#">En Çok Satanlar</a>
                </li>
                <li>
                  <a href="#">İndirimdekiler</a>
                </li>

                <li>
                  <a href="#">Satıştaki Ürünleri</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Kategoriler</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Üst Giyim</a>
                </li>
                <li>
                  <a href="#">Alt Giyim</a>
                </li>
                <li>
                  <a href="#">Ayakkabı</a>
                </li>
                <li>
                  <a href="#">Saat</a>
                </li>
                <li>
                  <a href="#">Gözlük</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>
                Copyright 2022 © E-Commerce Theme. All right reserved. Powered
                by Hisar Giyim.
              </p>
            </div>
            <a href="#">
              <img src="/img/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Gizlilik politikası</a>
                </li>
                <li className="list-item">
                  <a href="#">Şartlar ve Koşullar</a>
                </li>
                <li className="list-item">
                  <a href="#">İade Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
