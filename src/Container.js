import React, { useState } from "react";
import InputField from "./components/InputField";
import RandomField from "./components/RandomField";
import useApicalls from "./components/Apicalls";
import ShowResult from "./components/ShowResult";
import ShowHistoryFact from "./components/ShowHistoryFact"

function Container() {
 	
	const [numberfact, apiCallWithInput, apiCallWithRandomNumber] = useApicalls()

    const [historyItems, SetHistoryItems] = useState({});

    const createHistoryFacts = (numberfact) => {
		//var id = new Date().getTime();
		SetHistoryItems(current => ({ ...current, [numberfact]:numberfact }));
			
	}   
	

		return (
			<div>
				<h1>Number Facts by Paulien</h1>
				<InputField apiCallWithInput={apiCallWithInput} createHistoryFacts={createHistoryFacts} numberfact={numberfact}/>
				<RandomField apiCallWithRandomNumber={apiCallWithRandomNumber} createHistoryFacts={createHistoryFacts} numberfact={numberfact} />
				{console.log(numberfact)}
				{console.log(historyItems)}
				<ShowResult numberfact={numberfact}/>
				<ShowHistoryFact historyItems={historyItems}/>
		 	</div>
		 	)
	
}
export default Container
