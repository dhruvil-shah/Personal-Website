import React from 'react';
import {Chrono} from 'react-chrono';
import {GiStairsCake} from 'react-icons/gi';
const items = [
    {title: "July-2001", cardTitle:  "Birthdate",cardSubtitle:"Surat-Gujarat"},
    {title: "May-2017", cardTitle:  "10th Passed",cardSubtitle:"C.C. Shah Sarvajanik High School"},
    {title: "May-2019", cardTitle:  "12th Passed",cardSubtitle:"C.C. Shah Sarvajanik High School"},
    {title: "May-2023", cardTitle:  "Graduation Year",cardSubtitle:"Nirma University, Ahemdabad"}
  ];
export const Personal = () => {
    return (
        <div  style={{ color:'black', width: "90rem", height: "fit-content" }}>
<Chrono className="timeline-item" mode="VERTICAL_ALTERNATING" items={items} cardHeight="4em" slideShow="True" enableOutline
    theme={{ 
    primary: "black",
    cardBgColor: "#ebd3d3",
    cardForeColor: "black",
    titleColor: "red",
    
  }}>
    <div>
      <p><GiStairsCake size='2.5em'/></p>
    </div>
    <div>
        <h1>85.6%</h1>
    </div>
    <div>
        <h1>86.5%</h1>
    </div>
    <div>
        <h1>9.25 CPI (Till 2nd year)</h1>
    </div>
  </Chrono>

         </div>
    )
}
