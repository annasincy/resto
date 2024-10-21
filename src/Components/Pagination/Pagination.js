import React, { useState } from "react";
import "./pagination.css";
function Pagination(props) {
  let numberOfpages = [];
  let [active, setActive] = useState(1);

  for (
    let i = 1;
    i <= Math.ceil(props.filteredDishes.length / props.itemPerPage);
    i++
  ) {
    numberOfpages.push(i);
  }
  console.log(numberOfpages);
  let currentPageHandler = (event, item) => {
    setActive(item);
    props.setCurrentPage(event.target.id);
  };
  let pages = numberOfpages.map((item) => {
    return (
      <li>
        <button
          id={item}
          onClick={(event) => currentPageHandler(event, item)}
          className={
            item == active ? "pagination-btn active" : "pagination-btn"
          }
        >
          {item}
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul className="pagination">{pages}</ul>
    </div>
  );
}

export default Pagination;
