import React, { useState } from "react";



export function InputField({apiCallWithInput, numberfact, createHistoryFacts}){
		const [userInput, setUserInput] = useState("");
		
		const handleSubmit = (evt) => {
			evt.preventDefault();
			console.log(`Submitting number is ${userInput}`)
			console.log(typeof userInput)
			apiCallWithInput(userInput)
			createHistoryFacts(numberfact)
			
		}
	
    
		return (
		  <form onSubmit={handleSubmit}>
			<label>
			  Choose a number:
			  <input
				type="text"
				value={userInput}
				onChange={e => setUserInput(parseInt(e.target.value))}
			  />
			</label>
			<input type="submit" value="Submit" />
		  </form>
		);
	  }
export default InputField


	