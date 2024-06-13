import React, { useState, createContext } from "react";
import people from "./people.js";
import "./App.css";
import reviews from "./people.js";
import Buttons from "./button.jsx";
//import Sum from "./Sum.jsx";

export const UserContext = createContext(""); // Create a context with default value of empty string
function Picture() {
  /* to do delete or save the users to another array to show matches*/

  const [index, setIndex] = useState(0); // Define index as a state variable
  const [selectedPerson, setSelectedPerson] = useState(null); //holds the person

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

  const sum = () => {
    {
      people[index].image;
    }
  };

  return (
    <>
      <div>
        <div>
          <img
            src={people[index].image}
            className="person-img"
            alt="profile picture"
          />
          <div className="Float-left">
            <p> {people[index].name} </p>
            <p> {people[index].age} </p>
            <p> {people[index].job} </p>
          </div>
          <Buttons
            beforePerson={beforePerson}
            nextPerson={nextPerson}
            sum={sum}
          />
        </div>
      </div>
    </>
  );
}

export default Picture;
