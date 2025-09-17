// before
let hello=function(){
    return <p >hello world</p>;
}
const hi=()=>{
    return <p>hi React</p>
}
//Arrow Function With Parameters:
const Bye=(val)=>{
    return <p>this the value : {val}</p>
}
console.log(hello());
console.log(hi());
export default hello;
export {hi,Bye};