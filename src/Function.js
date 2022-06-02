import React, { useState } from "react";
import Data from "./Cities.json";
const Function = () => {
  let [search, setSearch] = useState("");
  return (
    <div>
      <center>
        <h4>INDIA CITY</h4>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />

        <br />
        {Data.filter((city) =>
          city.name.toLowerCase().includes(search.toLowerCase())
        ).map((city) => {
          return <div>{city.name}</div>;
        })}
      </center>
    </div>
  );
};
export default Function;
