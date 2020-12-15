import React from "react";



export function RandomField({apiCallWithRandomNumber, numberfact, createHistoryFacts}){
	
		
		const handleSubmit = (evt) => {
			evt.preventDefault();
      apiCallWithRandomNumber()
      createHistoryFacts()
      createHistoryFacts(numberfact)
		}

		return (
		  <form onSubmit={handleSubmit}>
			<input type="submit" value="Random Number" />
		  </form>
		);
	  }
export default RandomField


	