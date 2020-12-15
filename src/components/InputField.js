import React, { useState } from "react";

function InputField({ apiCallWithInput }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    apiCallWithInput(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose a number:
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(parseInt(e.target.value))}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default InputField;
