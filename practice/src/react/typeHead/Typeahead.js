import React, { useState } from "react";

const Typeahead = () => {
  const [selectedCity, setSelectedCity] = useState("");
  let cityNames = ["Mumbai", "Delhi", "Pune"];
  return (
    <>
      <div>
        <label>Single Selection:</label>
        <select
          name="single"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          {cityNames.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Multiple Selection:</label>
        {/* <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /> */}
      </div>
    </>
  );
};

export default Typeahead;
