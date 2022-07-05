import React from "react";
import Flash from "../../components/Flash/Flash";
import Shop from "../../components/Shop/Shop";
import TopCategory from "../../components/TopCategory/TopCategory";

const Home = () => {
  return (
    <div className="Home container">
        <Flash />
        <TopCategory />
        <Shop />
    </div>
  );
};

export default Home;
