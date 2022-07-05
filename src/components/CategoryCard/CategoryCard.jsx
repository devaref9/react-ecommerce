import React from "react";

const CategoryCard = () => {
  return (
    <div className="CategoryCard">
      <div className="CategoryCard__img-container">
        <img
          className="CategoryCard__img"
          src="/assets/category-3.png"
          alt="category-name"
        />
        <span className="CategoryCard__name">sunglass</span>
        <span className="CategoryCard__number">3k orders this week</span>
      </div>
    </div>
  );
};

export default CategoryCard;
