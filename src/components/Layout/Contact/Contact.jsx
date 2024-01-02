import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle iletişime geç</h4>
            <p>
              Her türlü istek, öneri ve şikayetlerinizi formu doldurarak bize
              ulaştırabilir ve ya atasaraypırlanta@gmail.com e-posta adresinden
              bizimle irtibata geçebilirsiniz.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  İsim ve Soyisminiz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Email adresiniz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesaj Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Kartal/İstanbul</strong>
                  <p className="contact-street">
                    Hobyar Mah. Ankara Cad. No:5 Cağaloğlu Kartal/İstanbul
                  </p>
                  <a href="Telefon: +90 534 567 88">
                    Telefon: +90 546 356 20 52
                  </a>
                  <a href="mailto:Email: contact@example.com">
                    Email: atasaraypırlanta@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Opening Hours</strong>
                  <p className="contact-date">Pazartesi-Cuma : 09:00 - 05:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
