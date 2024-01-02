import "./CampaignSingle.css";
const CampaignSingle = () => {
  return (
    <section className="campaign-single">
      <div className="container">
        <div className="campaign-wrapper">
          <div className="text">
            <h2>Yeni Sezon İndirimi</h2>
            <strong>40% İndirim</strong>
          </div>
          <a href="#" className="btn btn-lg">
            Şimdi alışveriş yap
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignSingle;
