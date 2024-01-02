import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>ÜCRETSİZ KARGO </strong>
              <span> $59.89</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong> 7/24 DESTEK</strong>
              <span>24 SAAT BOYUNCA</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> 30 GÜN</strong>
              <span>30 GÜN İÇİNDE İADE </span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong> ÖDEME METOTLARI</strong>
              <span>GÜVENLİ ÖDEME</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
