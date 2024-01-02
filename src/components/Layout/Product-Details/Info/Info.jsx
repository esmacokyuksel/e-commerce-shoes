import "./Info.css";

const Info = () => {
  return (
    <div className="product-info">
      <h1 className="product-title">
        Erkek A Kalite Slim Fit Denim Kot Ceket LACİVERT
      </h1>
      <div className="product-review">
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>22 yorum</span>
      </div>
      <div className="product-price">
        <s className="old-price">$165</s>
        <strong className="new-price">$100</strong>
      </div>
      <p className="product-description">
        Malzeme : %100 Pamuk Modelin Ölçüleri: Boy: 1.80, Kilo:75 Mankenin
        üzerindeki ürün L bedendedir. Ürün Hakkında· Ürünümüz Rahat Kesim dir.
        Şeklini uzun süre koruma özelliğine sahiptir.
      </p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Renk</span>
            </div>
            <div className="colors-wrapper">
              <div className="color-wrapper">
                <label className="blue-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper">
                <label className="red-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper active">
                <label className="green-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper">
                <label className="purple-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              <span className="active">XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
            >
              Sepete Ekle
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe" style={{ marginRight: "5px" }}></i>
              <span>Beden Seç</span>
            </a>
            <a href="#">
              <i className="bi bi-heart" style={{ marginRight: "5px" }}></i>
              <span>İstak listesine ekle</span>
            </a>
            <a href="#">
              <i className="bi bi-share" style={{ marginRight: "5px" }}></i>
              <span>Ürünü Paylaş</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Kategori:</span>
          <strong>Ceket </strong>
        </div>
        <div className="product-tags">
          <span>Renk:</span>
          <a href="#">Mavi</a>,<a href="#">Lacivert</a>
        </div>
      </div>
    </div>
  );
};

export default Info;
