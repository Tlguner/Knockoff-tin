import React, { useState } from "react";
import people from "./people.js";
import "./App.css";

function Picture() {
  const [index, setIndex] = useState(0); // Define index as a state variable

  const nextPerson = () => {
    let newIndex = index + 1;
    if (newIndex === people.length) {
      newIndex = 0; // If we're at the end of the array, go back to the start
    } // Update the index state variable
    setIndex(newIndex);
  };

  const beforePerson = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = people.length - 1; // If we're at the start of the array, go to the end
    }
    setIndex(newIndex);
  };

  return (
    <div>
      <img src={people[index].image} className="person-img" alt="" />
      <p>
        {people[index].name}
        {people[index.job]}
      </p>
      <p>{people[index].job}</p>
      <p>{people[index].age}</p>
      <button onClick={nextPerson}>Next Person</button>
      <button onClick={beforePerson}>Previous Person</button>
    </div>
  );
}

export default Picture;
