import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people.length);

  return (
    <div>
      <h1>{people.length} Birthdays Today</h1>
      {people.map((person) => {
        const { id, age, name, image } = person;

        return (
          <div key={id}>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          setPeople([]);
        }}
        className="btn"
      >
        Clear All
      </button>
    </div>
  );
};
export default App;
