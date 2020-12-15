import React from "react";
import InputField from "./components/InputField";
import RandomField from "./components/RandomField";
import useApicalls from "./components/Apicalls";
import ShowResult from "./components/ShowResult";
import ShowHistoryFact from "./components/ShowHistoryFact";

function Container() {
  const [numberfact, historyItems, apiCallWithInput, apiCallWithRandomNumber] = useApicalls();


  return (
    <div>
      <h1>Number Facts by Paulien</h1>
      <InputField apiCallWithInput={apiCallWithInput} />
      <RandomField apiCallWithRandomNumber={apiCallWithRandomNumber} />
      <ShowResult numberfact={numberfact} />
      <ShowHistoryFact historyItems={historyItems} />
    </div>
  );
}
export default Container;
