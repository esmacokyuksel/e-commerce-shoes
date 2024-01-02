import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Policy from "../Policy/Policy";
import Proptypes from "prop-types";
import Search from "../../Modals/Search/Search";
import { useState } from "react";
import Dialog from "../../Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  // eğer useState true olursa görünür useState,
  //  renderlar arasında verimizi tutmayı sağlayan bir React Hookudur.
  // Set ile search butonuna bsınca açılacak
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  // yüklendiğinde sadece bir defa çalıştırır.
  // useEffect de tıpkı useState gibi React da bir hooks fonksiyonudur.
  //  Bu fonksiyon da component'in mount, update veya unmount durumlarında
  //  işlemleri gerçekleştirmek için kullanılır. Yani useEffect React
  //   component'inin yaşam döngüsü boyunca belirli işlemleri takip etmek ve
  //    gerçekleştirmek için kullanılır.

  useEffect(() => {
    // local storage de değer varsa alacak yoksa kaydedecek
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    // mail ekranını birka. saniye sonra getirir
    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 2000);
  }, []);

  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Policy />
      <Footer />
    </div>
  );
};

export default MainLayout;
MainLayout.propTypes = {
  children: Proptypes.node,
};
