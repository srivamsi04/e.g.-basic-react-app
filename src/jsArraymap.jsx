import { useState } from "react";
function ArrayMap(){
    const text=<div>
        <p>
             The map() method creates a new array with the results of calling a function for every array element.
        </p>
     </div>
     const numbers=[1,2,3,4];
     const doubled=numbers.map(x=>x*2);
     const mapinReact=<div>
        <h3>map() in React</h3>
        <p>The map() method is commonly used in React to render lists of elements:</p>
     </div>
     const codeExaple= `
            const fruitlist = ['apple', 'banana', 'cherry'];
            function MyList() {
                return (
                    <ul>
                    {fruitlist.map(fruit => 
                        <li key={fruit}>{fruit}</li>
                    )}
                    </ul>
                    );
            }


            the output of the code is :        
            `;
        function Mylist(){
            const [fruits, setFruits]=useState(['Apple','banana','cherry']);
            const removeFirst = () => {
                setFruits(prev => prev.slice(0,prev.length-1));
            };
            const addFruit=()=>{
                setFruits(prev=>[...prev,"Mango"]);
            }

            return(
                <div>
                <ul style={{textAlign:"left"}}>
                    {
                        fruits.map(fruit=>(
                            <li key={fruit}>{fruit}</li>
                        ))
                    }
                </ul>
                <button onClick={removeFirst}>Remove First Fruit</button>
                <button onClick={addFruit}>+</button>
                </div>
            );
            
        }
    return (
        <div style={{border:"1px solid black", padding:"20px", marginTop:"20px", gap:"5px"}}>
        {text}
         <p className="font-semibold">
        Original Numbers: {numbers.join(", ")}
      </p>
         <p id="demo">
        Doubled Numbers: {doubled.join(", ")}
      </p>
      {mapinReact}
      <pre style={{textAlign: "left"}}>
        <code>
            {codeExaple}
        </code>
      </pre>
      <Mylist />
      <p>
        <b>Note: </b> When using map() in React to create list items, each item needs a unique key prop.
      </p>
      </div>
    )
}
export default ArrayMap;