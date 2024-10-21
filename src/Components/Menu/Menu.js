import React, { useState, useEffect, Fragment } from "react";
import "../Menu/menu.css";
import Favorites from "../Favorites/Favorites";
import Categories from "../categories/Categories";
import Loader from "../Loader/Loader";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState();
  const [singleMenu, setSingleMenu] = useState([]);
  const getAllMenus = async () => {
    setLoading(true);
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      setMenu(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };
  const getAllCategories = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      setCategory(data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getSingleMenu = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
    let response = await fetch(API_URL);
    let data = await response.json();
    setSingleMenu(data.meals);
  };

  useEffect(() => {
    getAllMenus();
    getAllCategories();
    getSingleMenu();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <Fragment>
      {!loading ? <Favorites menuitmes={menu} /> : <Loader />}

      <Categories
        categories={category}
        allMenus={menu}
        singleMenu={singleMenu}
        setoneMenu ={setSingleMenu}
      />
    </Fragment>
  );
}

export default Menu;
