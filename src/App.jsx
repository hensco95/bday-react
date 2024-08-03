import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people.length);

  return (
    <main>
      <secion className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          const { id, age, name, image } = person;

          return (
            <article key={id} className="person">
              <img src={image} alt={name} className="img"/>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
        <button
          className="btn btn-block"
          type="button"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </secion>
    </main>
  );
};
export default App;
