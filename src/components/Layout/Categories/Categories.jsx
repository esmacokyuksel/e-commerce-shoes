import "./Categories.css";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Tüm Kategoriler</h2>
          <p>Yaz Koleksiyonu Yeni Modern Tasarım</p>
        </div>
        <ul className="category-list">
          <CategoryItem />
        </ul>
      </div>
    </section>
  );
};

export default Categories;
