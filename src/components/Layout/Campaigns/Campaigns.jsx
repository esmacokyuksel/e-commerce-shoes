import "./Campaigns.css";
const Campaigns = () => {
  return (
    <>
      <section className="campaigns">
        <div className="container">
          <div className="campaigns-wrapper">
            <div className="campaign-item">
              <h3 className="campaign-title">2024 Kampanyası</h3>
              <p className="campaign-desc">
                En tarz giyim ürünleriyle
                <br /> kampüsün yıldızı siz olun!
              </p>
              <button className="btn">
                <a href="#" className="deneme">
                  Şimdi İncele
                  <i className="bi bi-arrow-right"></i>
                </a>{" "}
              </button>
            </div>
            <div className="campaign-item">
              <h3 className="campaign-title">2024 Kampanyası</h3>
              <p className="campaign-desc">Aradığın kalite bu linkte!</p>
              <button className="btn ">
                <a href="#" className="deneme">
                  Şimdi İncele
                  <i className="bi bi-arrow-right"></i>
                </a>{" "}
              </button>
            </div>
          </div>

          <div className="campaigns-wrapper">
            <div className="campaign-item">
              <h3 className="campaign-title">2024 Kampanyası</h3>
              <p className="campaign-desc">
                Gözlüğün ile şıklığın seninle gelsin...
              </p>
              <button className="btn ">
                <a href="#" className="deneme">
                  Şimdi İncele
                  <i className="bi bi-arrow-right"></i>
                </a>{" "}
              </button>
            </div>
            <div className="campaign-item">
              <h3 className="campaign-title">2024 Kampanyası</h3>
              <p className="campaign-desc">
                Bu t-shirtte aradığın
                <br /> rahatlığı bulabilirsin...
              </p>
              <button className="btn">
                <a href="#" className="deneme">
                  Şimdi İncele
                  <i className="bi bi-arrow-right"></i>
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campaigns;
