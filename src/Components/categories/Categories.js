import React, { Fragment, useState } from "react";
import "../../App.css";
import "../categories/categories.css";
import Pagination from "../Pagination/Pagination";

function Categories(props) {
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [active, setActive] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [itenPerPage, setItemPerPage] = useState(3);
  let indexOfLastDish = currentPage * itenPerPage;
  let indexOfFirstDish = indexOfLastDish - itenPerPage;
  let dishesPerPage = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);
  const singleMenu = props.singleMenu.map((item) => {
    return (
      <div className="item-box col-md-3 mx-2 my-2">
        <img src={item.strMealThumb} className="img-fluid" />
        <p>{item.strMeal}</p>
      </div>
    );
  });
  const defaultMenu = singleMenu.slice(indexOfFirstDish, indexOfLastDish);
  const getFilteredDishes = (category) => {
    setCurrentPage(1);
    setActive(category);
    props.setoneMenu([]);
    const mealByCategory = props.allMenus
      .filter((item) => {
        return item.strCategory == category;
      })
      .map((item) => {
        return (
          <div className="item-box col-md-3 mx-2 my-2">
            <img src={item.strMealThumb} className="img-fluid" />
            <p>{item.strMeal}</p>
          </div>
        );
      });

    setFilteredDishes(mealByCategory);
  };
  const outOfStock = () => {
    return <div className="out-of-stock"></div>;
  };

  const categories = props.categories.map((item) => {
    return (
      <button
        className={
          item.strCategory == active ? "active category-btn" : "category-btn"
        }
        onClick={() => getFilteredDishes(item.strCategory)}
      >
        {item.strCategory}
      </button>
    );
  });
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div col-md-10>{categories}</div>
        </div>
        <div className="row justify-content-center">{defaultMenu}</div>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {singleMenu ? (
              <Pagination
                filteredDishes={singleMenu}
                itemPerPage={itenPerPage}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row justify-content-center">
          {dishesPerPage.length < 1 && singleMenu < 1
            ? outOfStock()
            : dishesPerPage}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <Pagination
              filteredDishes={filteredDishes}
              itemPerPage={itenPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Categories;
