import "./Search.css";
import PropTypes from "prop-types";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  return (
    <div className={`modal-search  ${isSearchShow ? "show" : ""}`}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Ürün ara</h3>
        <p className="modal-text">
          Aradığınız ürünleri görmek için yazmaya başlayın.{" "}
        </p>
        <form className="search-form">
          <input type="text" placeholder="Ürün ara" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>ÜRÜNLERDEN SONUÇLAR</h3>
          </div>
          <div className="results">
            <a href="#" className="result-item">
              <img
                src="/public/img/images/119.jpg"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Analogue Resin Strap</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </a>
            <a href="#" className="result-item">
              <img
                src="../../../../public/img/images/116.jpg"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Analogue Resin Strap</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </a>
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
      </div>
      <div
        // click outside yani div dışına tıkladığında search alanını kapatıyor
        className="modal-overlay"
        onClick={() => setIsSearchShow(false)}
      ></div>
    </div>
  );
};

export default Search;
Search.propTypes = {
  isSearchShow: PropTypes.bool,
  setIsSearchShow: PropTypes.func,
};
