import React from "react";

function ShowHistoryFact({ historyItems }) {
  return (
    <div>
      <h1>This is your History of facts</h1>
      {historyItems &&
        historyItems.map((item, index) => (
          <div key={index}>
              <p>{item.text}</p>  
          </div>
        ))}
    </div>
  );
}
export default ShowHistoryFact;
