import BlogItem from "./BlogItem";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Bloglarımız</h2>
          <p>GİYİM SEKTÖRÜNDEKİ İNCELİKLERİ ÖĞRENMEK İSTER MİSİN</p>
        </div>
        <ul className="blog-list">
          <BlogItem />
          <BlogItem />

          <BlogItem />
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
