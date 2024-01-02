import "./BlogItem.css";

const BlogItem = () => {
  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        <img src="../../../../public/img/images/an.webp" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>25 Eylül, 2023 </span>-<span> 0 Yorum</span>
        </div>
        <div className="blog-info-center">
          <a href="#"> Giyimdeki ince detay:Kumaşlar</a>
        </div>
        <div className="blog-info-bottom">
          <a href="#">Devamını Oku</a>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
