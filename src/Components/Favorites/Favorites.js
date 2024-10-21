import React from "react";

function Favorites(props) {
  const menuItems = props.menuitmes.map((item, index) => {
    if (index < 6) {
      return (
        <div className="item-box col-md-3 mx-2 my-2">
          <img src={item.strMealThumb} className="img-fluid" />
          <p>{item.strMeal}</p>
        </div>
      );
    }
  });
  return (
    <section>
      <div className="contnet-box text-center">
        <h3>Most favourite foods</h3>
        <p>
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. L
        </p>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">{menuItems}</div>
      </div>
    </section>
  );
}

export default Favorites;
