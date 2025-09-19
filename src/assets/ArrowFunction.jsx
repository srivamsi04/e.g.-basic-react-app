// before
function AboutArrays(){
    let AddAndRemove=function(){
    const arrayAddAndRemove=`
array.
It just makes a shallow copy of part of the array.

Example:
const fruits = ["apple", "banana", "cherry", "grapes", "mango"];

// slice from index 1 to 3 (not including 3)
const newFruits = fruits.slice(1, 3);

console.log(newFruits); // ["banana", "cherry"]
console.log(fruits);    // ["apple", "banana", "cherry", "grapes", "mango"]


👉 The original array is unchanged.
So .slice() is non-destructive.

If you want to permanently remove:

Use .splice() ✅

fruits.splice(2, 1); // removes 1 element at index 2
console.log(fruits); // ["apple", "banana", "grapes", "mango"]


Or use filter() to create a new array without that element

const newFruits = fruits.filter((fruit, index) => index !== 2);
console.log(newFruits); // ["apple", "banana", "grapes", "mango"]


⚡ Quick recap:

slice() → copy (doesn’t touch original).

splice() → remove/replace (changes original).

filter() → exclude (returns new array, original stays).

👉 Do you want me to make a small comparison table of slice, splice, and filter so you can quickly remember which does what?

You said:
expalin about all methods 
ChatGPT said:

Perfect 👍 Let’s go through the most common array element removal methods in JavaScript with clear explanation and examples.

🔹 1. .slice(start, end)

What it does: Copies a portion of the array into a new array.

Does not change the original array.

end is not included.

const fruits = ["apple", "banana", "cherry", "grapes", "mango"];
const newFruits = fruits.slice(1, 3); 

console.log(newFruits); // ["banana", "cherry"]
console.log(fruits);    // ["apple", "banana", "cherry", "grapes", "mango"]


✅ Good for making copies, not for deleting.

🔹 2. .splice(start, deleteCount, ...items)

What it does: Changes the original array (mutates it).

Removes deleteCount elements from start.

You can also insert new elements.

const fruits = ["apple", "banana", "cherry", "grapes", "mango"];
fruits.splice(2, 1);  // remove 1 element at index 2
console.log(fruits);  // ["apple", "banana", "grapes", "mango"]

fruits.splice(1, 0, "kiwi");  // insert "kiwi" at index 1
console.log(fruits);          // ["apple", "kiwi", "banana", "grapes", "mango"]


✅ Best for permanent removal or insertion.

🔹 3. .filter(callback)

What it does: Creates a new array with elements that pass a condition.

Original array stays the same.

const fruits = ["apple", "banana", "cherry", "grapes", "mango"];
const withoutCherry = fruits.filter(fruit => fruit !== "cherry");

console.log(withoutCherry); // ["apple", "banana", "grapes", "mango"]
console.log(fruits);        // ["apple", "banana", "cherry", "grapes", "mango"]


✅ Very common in React, since it doesn’t mutate the original array.

🔹 4. delete array[index]

What it does: Deletes the value but leaves an empty slot (undefined).

Array length does not change.

const fruits = ["apple", "banana", "cherry"];
delete fruits[1];

console.log(fruits); // ["apple", empty, "cherry"]
console.log(fruits.length); // 3


⚠️ Not recommended in practice (leaves holes).

🔹 5. .pop()

Removes last element and returns it.

Changes original array.

const fruits = ["apple", "banana", "cherry"];
const last = fruits.pop();

console.log(last);   // "cherry"
console.log(fruits); // ["apple", "banana"]

🔹 6. .shift()

Removes first element and returns it.

Changes original array.

const fruits = ["apple", "banana", "cherry"];
const first = fruits.shift();

console.log(first);  // "apple"
console.log(fruits); // ["banana", "cherry"]

🔹 7. .unshift(item)

Adds one or more elements to the start.

Returns new length.

const fruits = ["banana", "cherry"];
fruits.unshift("apple");

console.log(fruits); // ["apple", "banana", "cherry"]

🔹 8. .push(item)

Adds one or more elements to the end.

Returns new length.

const fruits = ["apple", "banana"];
fruits.push("cherry");

console.log(fruits); // ["apple", "banana", "cherry"]

` 
    return (
        <pre style={{textAlign:"left"}}>
            <code>
                {arrayAddAndRemove}
            </code>
        </pre>
    )
}
let Hello=function(){
    return <p >hello world</p>;
}
const Hi=()=>{
    return <p>hi React</p>
}
//Arrow Function With Parameters:
const Bye=({val})=>{
    return <p>this the value : {val}</p>
}
return(
    <div style={{border:"2px solid red", margin:"10px",padding:"5px"}}>
        <Hello/>
        <Hi/>
        <Bye val={2500}/>
        <AddAndRemove/>
    </div>
);

}

//console.log(Hello());
//console.log(Hi());
export default AboutArrays
