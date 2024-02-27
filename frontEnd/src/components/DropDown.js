import React from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  const dropDownLists = [
    {
      item: "Diabetes",
      href: "/programs/diabetes",
    },

    {
      item: "Dyslipedimia",
      href: "/programs/dyslipedimia",
    },
    {
      item: "PCOD",
      href: "/programs/pcod",
    },
  ];
  return (
    <ul>
      {dropDownLists.map((list,index) => {
        const { item, href } = list;
        return (
          <Link to={href} key={index}>
            <li>{item}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default DropDown;
