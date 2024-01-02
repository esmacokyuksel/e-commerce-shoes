import "./BreadCrumbs.css";

const BreadCrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Anasayfa</a>
          </li>
          <li>
            <a href="#">Giyim</a>
          </li>
          <li>
            <a href="#">Üst Giyim</a>
          </li>
          <li>Erkek Mont</li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;
