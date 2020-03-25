import React from "react";
import MainHeader from "../header/header";
import Sections from "../section/section";

function Main() {
  const test = ["test", "test", "test"];
  return (
    <div>
      <MainHeader />
      {test.map(value => {
        return (
          <div>
            <Sections />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
