import { useState } from "react";
function MapParameter(){
    const about=<div>
        <h1>map() Parameters</h1>
           <p>The map() method takes three parameters:</p> 
        <ol>
            <li>currentValue - The current element being processed </li>
            <li> index - The index of the current element (optional)</li>
            <li>array - The array that map was called upon (optional)</li>
        </ol>
    </div>
    const paraCode=`
                    const fruitlist = ['apple', 'banana', 'cherry'];

                    function App() {
                    return (
                        <ul>
                        {fruitlist.map((fruit, index, array) => {
                            return (
                            <li key={fruit}>
                                Number: {fruit}, Index: {index}, Array: {array}
                            </li>
                            );
                        })}
                        </ul>
                    );
                    }`
        // const [fruitlist,setfruitlist]= useState(['apple', 'banana', 'cherry']);
        // const removeFirst = () => {
        //        setfruitlist(prev => prev.slice(1));
        //   };
       const fruitlist=['apple','banana','cherry'];
        function App() {
            return (
                <>
                <ul>
                {fruitlist.map((fruit, index, array) => {
                     return(
                    <li key={fruit}>
                        Number: {fruit}, Index: {index}, Array: {array.join(" , ")}
                    </li>
                     );
                })}
                </ul>
                </>
            );
            }
    return (
        <div style={{textAlign:"left",border:"1px solid red", margin:"5px"}}>
        {about}
        <pre>
            <code>
                {paraCode}
            </code>
        </pre>
        <App />
        </div>
    ) 
}
export default MapParameter;