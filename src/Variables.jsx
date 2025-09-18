function Variables(){
    const variableVar = <>
    <p>
        Before ES6 there was only one way of defining your variables:
         with the var keyword. If you did not define them, they would 
         be assigned to the global object. Unless you were in strict mode, 
         then you would get an error if your variables were undefined.
         <br />
         Now, with ES6, there are three ways of defining your variables: 
         <b>var, let </b>and <b>const</b>.
         <br />
         <p className="text-right">
            <code>
                Example :
                    var x = 5.6;
            </code>
            <br />
            <div className="text-right">
            If you use <b> var</b> outside of a function, it belongs to the global scope.<br />
            If you use <b> var</b> inside of a function, it belongs to that function. <br />
            If you use <b> var</b> inside of a block, i.e. a for loop, the variable is still available outside of that block. <br />
            </ div>
            <b>var has a function scope, not a block scope.</b>
        </p>
    </p>
    <h3>Let:</h3>
    <p>
        <code>
            Example: 
                let x = 5.6;
        </code>
        <br ></br>
        let is the block scoped version of var, and is limited to the block (or expression) where it is defined<br />
        If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
        <br />
        <b>let has a block scope.</b>
    </p>
    <br />
    <h3>const</h3>
    <p>
        <code>
            Example :
                const x=5.6;
        </code>
        <br />
        const is a variable that once it has been created, its value can never change.
        <br />
        <b>const has a block scope.</b>
        <br />
       <b> The keyword const is a bit misleading. </b>
It does not define a constant value. It defines a constant reference to a value.
<b>Because of this you can NOT:</b>
Reassign a constant value
Reassign a constant array
Reassign a constant object
<br />
<b>
But you CAN: </b>
Change the elements of constant array
Change the properties of constant object
    </p>
    </>
    return(
        <>{variableVar}</>
    )
}
export default Variables;