import React from "react";

function ShowResult({ numberfact }) {
   return (
    <div>
      <h1>This is your fact</h1>
      {numberfact !== null && numberfact.found === true && (
        <React.Fragment>
          <p>{numberfact.text}</p>
        </React.Fragment>
      )}
      {numberfact !== null && numberfact.found === false && (
        <React.Fragment>
          <p>{numberfact.number}</p>
          <p>Saai nummer</p>
        </React.Fragment>
      )}
    </div>
  );
}
export default ShowResult;
