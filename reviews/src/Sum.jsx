import React from "react";
import Picture from "./picture.jsx";
import people from "./people.js";

function Sum() {
  return (
    <>
      <div></div>

      <div>
        <h3 class="text-xl flex justify-center"> Past Matches</h3>
        <img className="person-img" src={people[0].image} alt="" />
        <p class=" flex justify-center">{people[0].name}</p>
        <img className="person-img" src={people[1].image} alt="" />
        <p class=" flex justify-center">{people[1].name}</p>
        <img className="person-img" src={people[2].image} alt="" />
        <p class=" flex justify-center">{people[2].name}</p>
        <img className="person-img" src={people[3].image} alt="" />
        <p class=" flex justify-center">{people[3].name}</p>
      </div>
    </>
  );
}

export default Sum;
