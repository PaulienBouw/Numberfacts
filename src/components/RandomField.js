import React from "react";

function RandomField({ apiCallWithRandomNumber }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    apiCallWithRandomNumber();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Random Number" />
    </form>
  );
}
export default RandomField;
