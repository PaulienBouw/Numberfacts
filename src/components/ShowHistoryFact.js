import React from "react";


function ShowHistoryFact({historyItems}) {
  console.log("Dit is historyfact op component showhistory" + historyItems)
//    console.log("Dit is numberfact op component showresult" + typeof numberfact)
		return (
            <div>
                <h1>This is your History of facts</h1>
                {/*historyItems &&                 
                
                historyItems.map(item => (
						<div key={item.id}>
				    		<div>
				    		<p>{console.log(item)}</p>
				    		</div>
						</div>
					))
                */ }
            </div>   
        )}
export default ShowHistoryFact
