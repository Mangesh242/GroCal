
import './App.css';
import React,{ useState } from "react";
// import LinkedStateMixin from 'react-addons-linked-state-mixin';




function App() {
  const [inputValues, setinputValues] = useState("");

  var load=true;
  const previousList=[
              {"text":"Sakhar 1kg 72,etc","total":780},
              {"text":"Sakhar 1kg 72,etc","total":780},
              {"text":"Sakhar 1kg 72,etc","total":780}
            ];

  const [valList, setPreviousList] = useState(previousList);

function handleChange() {
             
              var item={}
              item["text"]=inputValues;
              
              item["total"]=processInput(inputValues);

              console.log("Initial Values: ",...valList);

              let tempList=[...valList];

              tempList.push(item);
              console.log("TempList is: ",tempList);
              setPreviousList(tempList);

              console.log("item need to push: ",item,valList);
            };

function processInput(expression){
  let exp=expression.toLowerCase();
  console.log("Split String",exp,exp.split("rs"))
  let initialArray=exp.split("rs")
  let sum=0;
  initialArray.forEach(element => {
    let secondArray=element.split(" ");
      console.log("last Value split after space",secondArray[secondArray.length - 1]);
      let lastElement=secondArray[secondArray.length - 1];
      try {
        let element=parseInt(lastElement)
        console.log("Element:",element);
        if(!(isNaN(element))){
          sum=sum+element;
        }
        
        console.log("Sum is : ",sum);
      } catch (error) {
        console.log("Error ",error);
      }
  });
  
return sum;
}
  return (
    <div className="container">
      <div className="headerContainer">
        <div className="headerName">
        <p> GroCal </p>
        </div>
       
      </div>
        <div className="inputClass" >
      <div> 
        {
                                valList.map((val, index) => {
                                return (
                                  <div className="previousListCard" >
                                    <p>{index}:</p>
                                    <p> Content:  {val.text}</p>
                                    <p>Total : {val.total}</p>
                                  </div>
                                   
                                );
                                })
                            }

      </div>

      
      <input
                  type="text"
                  className="input"
                  placeholder="Enter items name and Rate"
                  value={inputValues}
                  onChange={e => setinputValues(e.target.value)}
                />


     <div className="calculateButton">
        <button type="submit" onClick={handleChange}>Calculate</button>
     </div>
    
     <p>Note: Write in the format like Sugar 36rs, Oil 30rs </p>

     </div>
    </div>
  );
}


export default App