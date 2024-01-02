import React from "react";
import Categories from "../components/Layout/Categories/Categories";
import Sliders from "../components/Layout/Sliders/Sliders";

import Products from "../components/Layout/Products/Products";
import Blogs from "../components/Layout/Blogs/Blogs";
import Brands from "../components/Layout/Brands/Brands";
import Campaigns from "../components/Layout/Campaigns/Campaigns";
import CampaignSingle from "../components/Layout/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <>
      <React.Fragment>
        <Sliders />
        <Categories />
        <Products />
        <Campaigns />
        <Products />
        <Blogs />
        <Brands />
        <CampaignSingle />
      </React.Fragment>
    </>
  );
};

export default HomePage;
