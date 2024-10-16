import React from "react";
import "./style.css";
import Movie from "./Movie.jsx";
import { useState, useEffect } from "react";
const apiUrl = "http://www.omdbapi.com?apikey=56526b5";
const App = () => {
  const [Data, setData] = useState([]);
  const [Input, setInput] = useState("");
  async function fetchData(title = "movies") {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    const searchArray = data.Search;
    setData(searchArray);
  }
  useEffect(() => {
    fetchData("movies");
  }, []);
  return (
    <div className="appJs">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="enter what you want"
          value={Input}
          onChange={(e) => {
            setInput(e.target.value);
            fetchData(Input);
            if(Input===""){
                fetchData("movies");
            }
          }}
        />
      </div>
      {Data?.length > 0 ? (
        <div className="container">
          {Data.map((movieData) => {
            return <Movie movie={movieData} />;
          })}
        </div>
      ) : (
        <div>
          <h3 className="noSearchResult">No Search Result : (</h3>
        </div>
      )}
    </div>
  );
};
export default App;
