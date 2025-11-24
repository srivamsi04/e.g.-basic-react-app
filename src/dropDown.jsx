function DropDown(){
    const DropDownComponent = (<div 
        style={{
            backgroundColor:"#000000",
        }}
    >
            <select
        style={{
            fontSize:"16px",
            width:"100px",
            border: "1px solid red",
            background: "white",
            padding: "6px 10px",
            borderRadius: "4px", // optional
           // WebkitAppearance: "none",
            //MozAppearance: "none"
           
        }} >
            <option value="">Select an option</option>
            <option value="1">test case 1 test case 1 sri vamsi</option>
            <option value="2">test case 2</option>
            <option value="3">test case 3</option>
        </select>
    </div>);
    return <>
    {DropDownComponent}
    </>
}
export default DropDown;