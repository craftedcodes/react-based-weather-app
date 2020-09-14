import React from "react";
import "./Search.css";
​
export default function Search(props) {
  return (
    <div>
      <form className="Search" onSubmit={props.handleSubmit}>
        <input
          type="search"
          className="search-field"
          onChange={props.handleCityChange}
        />
        <input type="submit" placeholder="Search" className="submit-field" />
      </form>
    </div>
  );
}