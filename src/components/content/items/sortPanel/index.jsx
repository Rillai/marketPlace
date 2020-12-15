import React from "react";

export const SortPanel = (props) => {
  return (
    <div className="sortPanel">
      <button onClick={() => props.setMode("price")}>По цене</button>
      <button onClick={() => props.setMode("rating")}>По рейтингу</button>
      <button onClick={() => props.setMode("name")}>По названию</button>
    </div>
  );
};
