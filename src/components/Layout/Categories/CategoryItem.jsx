import "./CategoryItem.css";
const CategoryItem = () => {
  return (
    <>
      <li className="category-item">
        <a href="#">
          <img
            src="../../../../public/img/images/2.jpg"
            alt=""
            className="category-image"
          />
          <span className="category-title">Takım Elbise</span>
        </a>
      </li>

      <li className="category-item">
        <a href="#">
          <img
            src="../../../../public/img/images/2.jpeg"
            alt=""
            className="category-image"
          />
          <span className="category-title">Ceket</span>
        </a>
      </li>
      <li className="category-item">
        <a href="#">
          <img
            src="../../../../public/img/images/29.jpg"
            alt=""
            className="category-image"
          />
          <span className="category-title">Mont</span>
        </a>
      </li>
      <li className="category-item">
        <a href="#">
          <img
            src="../../../../public/img/images/115.jpg"
            alt=""
            className="category-image"
          />
          <span className="category-title">Eşofman</span>
        </a>
      </li>
      <li className="category-item">
        <a href="#">
          <img
            src="../../../../public/img/images/214.jpg"
            alt=""
            className="category-image"
          />
          <span className="category-title">Pantolon</span>
        </a>
      </li>
      <li className="category-item">
        <a href="#">
          <img
            src="../../../../public/img/images/508.jpg"
            alt=""
            className="category-image"
          />
          <span className="category-title">Ayakkabı</span>
        </a>
      </li>
    </>
  );
};

export default CategoryItem;
