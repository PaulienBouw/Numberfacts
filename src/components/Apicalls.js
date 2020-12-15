import { useState } from "react";

function useApicalls() {
  const [numberfact, setNumberFact] = useState(null);
  const [historyItems, setHistoryItems] = useState([]);

  const apiCallWithInput = async (userInput) => {
    const apiUrl = `http://numbersapi.com/${userInput}?json`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setNumberFact(data);
      setHistoryItems(current =>[...current, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const apiCallWithRandomNumber = async () => {
    const apiUrlRandom = `http://numbersapi.com/random?ceil&floor&json`;

    try {
      const res = await fetch(apiUrlRandom);
      const data = await res.json();
      setNumberFact(data);
      setHistoryItems(current =>[...current, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return [numberfact, historyItems, apiCallWithInput, apiCallWithRandomNumber];
}

export default useApicalls;
