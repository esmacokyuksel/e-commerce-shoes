import "./Tabs.css";
import Reviews from "../../Reviews/Reviews";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""} `}
            onClick={(e) => handleTabClick(e, "desc")}
            // tıkladığında bu sekmeye getiriyor a tagında direk sayfa yenilendiği için handle ile yazdık
          >
            Description
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""} `}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Additional information
          </a>
        </li>
        <li>
          <a
            href="#"
            // eğer reviewse bastıysa yazıyı kalın yazar
            className={`tab-button ${activeTab === "reviews" ? "active" : ""} `}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        >
          <p>
            BEDEN BİLGİLERİ S BEDEN : BOY 1.60 - 1.70 CM / KİLO 50 - 60 / BOY
            UZUNLUK 60 CM / KOL UZUNLUK 60 CM<br></br>M BEDEN : BOY 1.65 - 1.75
            CM / KİLO 55 - 65 / BOY UZUNLUK 64 CM / KOL UZUNLUK 63 CM<br></br>L
            BEDEN : BOY 1.70 - 1.80 CM / KİLO 65 - 75 / BOY UZUNLUK 64 CM / KOL
            UZUNLUK 65 CM<br></br>
            XL BEDEN : BOY 1.75 - 1.85 CM / KİLO 70 - 80 / BOY UZUNLUK 66 CM /
            KOL UZUNLUK 66 CM<br></br>
            XXL BEDEN : BOY 1.80 - 1.90 CM / KİLO 75 - 85 / BOY UZUNLUK 67 CM /
            KOL UZUNLUK 66 CM
          </p>
          <br></br>
          <br />
          <p>
            Malzeme : %100 Pamuk Modelin Ölçüleri: Boy: 1.80, Kilo:75 Mankenin
            üzerindeki ürün L bedendedir. Ürün Hakkında· Ürünümüz Rahat Kesim
            dir. Şeklini uzun süre koruma özelliğine sahiptir.
          </p>
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>XXS, XS, S, M, L, XL, XXL</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;
