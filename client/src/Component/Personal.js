import React from 'react';
import {Chrono} from 'react-chrono';
import {GiStairsCake} from 'react-icons/gi';
const items = [
    {title: "July-2001", cardTitle:  "Birthdate"},
    {title: "May-2017", cardTitle:  "10th Passed"},
    {title: "May-2019", cardTitle:  "12th Passed"},
    {title: "May-2023", cardTitle:  "Graduation Year"}
  ];
export const Personal = () => {
    return (
        <div  style={{ color:'black', width: "100rem", height: "40rem" }}>
  <Chrono mode="VERTICAL_ALTERNATING" items={items} cardHeight="4em" slideShow="True" enableOutline
    theme={{ 
    primary: "red",
    secondary: "",
    cardBgColor: "#ebd3d3",
    cardForeColor: "black",
    titleColor: "red"
  }}>
    <div>
      <p><GiStairsCake size='5em'/></p>
    </div>
    <div>
        <h1>85.6%</h1>
    </div>
    <div>
        <h1>86.5%</h1>
    </div>
    <div>
        <h1>9.25 CPI </h1>
        <h5>(Till 2nd year)</h5>
    </div>
  </Chrono>

         </div>
    )
}
