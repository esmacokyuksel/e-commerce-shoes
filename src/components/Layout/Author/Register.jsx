const Register = () => {
  return (
    <div className="account-column">
      <h2>Kaydol</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı Adı<span className="required">*</span>
            </span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email adresi <span className="required">*</span>
            </span>
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input type="password" />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Kişisel verileriniz deneyiminizi desteklemek için kullanılacaktır Bu
            web sitesi genelinde, hesabınıza erişimi yönetmek ve
            <a href="#">Gizlilik politikamızda</a> açıklanan diğer amaçlar için
            kullanılacaktır
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
