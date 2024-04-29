import React, { useState } from "react";
import people from "./people.js";
import "./App.css";
import reviews from "./people.js";

function Picture() {
  /* to do delete or save the users to another array to show matches*/

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
        </div>

        <div>
          <button className="buttonL" onClick={beforePerson}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--twemoji"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="#DD2E44">
                <path d="M13.589 26.521a1.5 1.5 0 0 1 .035-1.599l4.395-6.646l-5.995-5.139a1.5 1.5 0 0 1-.31-1.911l4.304-7.172a9.778 9.778 0 0 0-6.035-2.09c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c.025-.009.052-.022.077-.032l-4.488-7.481z"></path>

                <path d="M26.018 1.966c-2.765 0-5.248 1.151-7.037 2.983l-4.042 6.737l6.039 5.176a1.5 1.5 0 0 1 .274 1.966l-4.604 6.962l4.161 6.935c6.338-3.529 13.621-11.263 14.809-18.649c.17-.721.268-1.469.268-2.241c-.001-5.452-4.419-9.869-9.868-9.869z"></path>
              </g>
            </svg>
          </button>
          <button className="buttonR" onClick={nextPerson}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M933.387 517.868C950.274 477.276 960 431.509 960 382.887c0-165.301-109.993-299.305-245.677-299.305-83.964 0-158.011 51.39-202.323 129.684-44.31-78.295-118.357-129.685-202.321-129.685C173.994 83.581 64 217.586 64 382.887c0 57.701 13.632 111.398 36.851 157.102 56.694 135.957 196.112 269.389 414.1 400.428 149.872-95.245 273.613-208.473 368.923-341.271 14.435-16.802 49.513-81.278 49.513-81.278z"
                fill="#FF3B30"
              />
              <path
                d="M484 254.385c8.327-14.713 17.706-28.474 28-41.12-57.022-96.69-134.136-129.682-202.321-129.682-9.409 0-18.659 0.786-27.794 2.039C354.075 95.7 444.727 184.995 484 254.385zM714.323 83.583c-9.547 0-18.946 0.75-28.206 2.039C808.697 102.462 904 229.049 904 382.888c0 48.623-9.724 94.386-26.613 134.982 0 0-35.08 64.473-49.515 81.277-89.475 124.668-204.315 231.88-342.002 323.366 9.592 5.971 19.163 11.942 29.079 17.905 149.872-95.244 273.613-208.474 368.923-341.271 14.434-16.805 49.514-81.277 49.514-81.277C950.276 477.274 960 431.511 960 382.888c0-165.302-109.993-299.305-245.677-299.305z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Picture;
