
import './App.css';
import React,{ useState } from "react";

function App() {
  const [inputValues, setinputValues] = useState("");
  const previousList=[
            ];

  const [valList, setPreviousList] = useState(previousList);

function handleChange() {
             
              var item={}
              item["text"]=inputValues;
              item["total"]=processInput(inputValues);
              let tempList=[...valList];

              tempList.push(item);
              
              setPreviousList(tempList);

              setinputValues("");

              
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
      <div className="previousListCard" ><p>Example:</p>
                                    <p>Receipt No: _ </p>
                                    <p> Content:Sakhar 1kg 72,etc </p>
                                    <p>Total : 780 Rs</p>
      </div>
        {
                                valList.map((val, index) => {
                                return (
                                  <div className="previousListCard" >
                                    <p>Receipt No: {index}</p>
                                    <p> Content:  {val.text}</p>
                                    <p>Total : {val.total}</p>
                                  </div>
                                   
                                );
                                })
                            }

      </div>

      
      <textarea
                  type="text"
                  className="input"
                  placeholder="Enter items name and Rate"
                  value={inputValues}
                  onChange={e => setinputValues(e.target.value)}
                />


     <div className="calculateButton">
        <button type="submit" onClick={handleChange}>Calculate</button>
     </div>
    
     <p>Note: Write Rupees in the format like 36rs, Oil 30rs </p>

     </div>
    </div>
  );
}


export default App