import React from "react";

function Date({ date }) {
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = Number(date.substr(5, 2));
  const monthName = monthList[month - 1];
  const dateNumber = date.substr(8, 2);
  const year = date.substr(0, 4);

  return <span>- {`${monthName} ${dateNumber}, ${year}`}</span>;
}

export default Date;
