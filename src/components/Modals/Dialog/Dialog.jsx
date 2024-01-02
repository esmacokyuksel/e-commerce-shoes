import "./Dialog.css";
import PropTypes from "prop-types";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
  const handleCloseDialog = (event) => {
    const checked = event.target.checked;
    localStorage.setItem("dialog", JSON.stringify(!checked));
  };

  return (
    <div>
      <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
        <div className="modal-content">
          <button
            className="modal-close"
            onClick={() => setIsDialogShow(false)}
          >
            <i className="bi bi-x"></i>
          </button>
          <div className="modal-image">
            <img src="../../../../public/img/1-2-tr.jpg" alt="" />
          </div>
          <div className="popup-wrapper">
            <div className="popup-content">
              <div className="popup-title">
                <h3>HABER BÜLTENİ</h3>
              </div>
              <p className="popup-text">
                Bültenimize kaydolun ve doğrudan gelen kutunuza başka bir yerde
                bulamacağınız olağanüstü fırsatlar elde edin!
              </p>
              <form className="popup-form">
                <input type="text" placeholder="Email adresinizi giriniz" />
                <button className="btn btn-primary">Abone Ol</button>
                <label>
                  <input type="checkbox" onChange={handleCloseDialog} />
                  <span>Bunu bir daha gösterme</span>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div
          className="modal-overlay"
          onClick={() => setIsDialogShow(false)}
        ></div>
      </div>
    </div>
  );
};

export default Dialog;
Dialog.propTypes = {
  isDialogShow: PropTypes.bool,
  setIsDialogShow: PropTypes.func,
};
