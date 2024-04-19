import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [filter2, setFilter2] = useState("");

  const [paginate, setpaginate] = useState(8);


  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setItems(myJson); //items = myJson
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const data = Object.values(items);
  console.log(data);

  const search_parameters = Object.keys(Object.assign({}, ...data));
  const filter_items = [...new Set(data.map((item) => item.skill))];
  const filter_items2 = [...new Set(data.map((item) => item.gender))];

  function search(items) {
    return items.filter(
      (item) =>
        (item.gender.includes(filter) || item.skill.includes(filter)) &&
        (item.gender.includes(filter2) || item.skill.includes(filter2)) &&
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query)
        )
    );
  }

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };
  

  return (
    <div className="Wrapper">
      <div className="search-and-filter">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search User"
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="sr-only">Search here</span>
          </label>
        </div>
        <div className="select">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="custom-select"
            aria-label="Filter users By gender"
          >
            <option value="">Filter by Skill</option>
            {filter_items.map((item) => (
              <option value={item}> {item}</option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        <div className="select">
          <select
            onChange={(e) => setFilter2(e.target.value)}
            className="custom-select"
            aria-label="Filter users By gender"
          >
            <option value="">Filter by Gender</option>
            {filter_items2.map((item) => (
              <option value={item}> {item}</option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        
        
      </div>

      <ul className="card-grid">
        {search(data).slice(0, paginate).map((item) => (
          <li key={item.id}>
            <article className="card">
              <div className="card-image">
                <img
                  src={item.image}
                  alt={item.first_name + " " + item.last_name}
                />
              </div>
              <div className="card-content">
                <h3 className="card-name">
                  {item.first_name + " " + item.last_name}
                </h3>
                <ol className="card-list">
                  <li>
                    email: <span>{item.email}</span>
                  </li>
                  <li>
                    gender: <span>{item.gender}</span>
                  </li>
                  <li>
                    skill: <span>{item.skill}</span>
                  </li>
                </ol>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={load_more}>Load More</button>
    </div>
  );
}

export default App;
