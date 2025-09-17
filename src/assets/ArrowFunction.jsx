// before
let hello=function(){
    return <p >hello world</p>;
}
let hi=()=>{
    return <p>hi React</p>
}
console.log(hello());
console.log(hi());
export default hello;
export {hi}