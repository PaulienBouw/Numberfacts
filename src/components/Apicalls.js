import React, { useState } from "react";

function useApicalls() {
	const [numberfact, setNumberFact] = useState(null);


    const apiCallWithInput = async (userInput) => {
        const apiUrl = `http://numbersapi.com/${userInput}?json`;
        try{
            const res = await fetch(apiUrl, {method: "GET"});
            const data = await res.json(); 
            setNumberFact(data);
            console.log("the response from the API URI in getData function is: ", res);
            console.log("dit is alle data na .json ", typeof data); 
            console.log(data);
            
            return data;
    
        }catch(error){
            console.log(error);
        }
    }
   
    
    const apiCallWithRandomNumber = async () => {
        const apiUrlRandom = `http://numbersapi.com/random?ceil&floor&json`;
        
        try{
            const res = await fetch(apiUrlRandom, {method: "GET"});
            const data = await res.json(); 
            setNumberFact(data);
            console.log("the response from the API URI in getData function is: ", res);
            console.log("dit is alle data na .json ", typeof data); 
            console.log(data);
            return data;
    
        }catch(error){
            console.log(error);
        }
    
    }
    
return([numberfact, apiCallWithInput, apiCallWithRandomNumber])

}

export default useApicalls;

