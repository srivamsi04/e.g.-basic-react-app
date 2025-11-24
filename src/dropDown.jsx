function DropDown(){
    const DropDownComponent = (<div>
         <select>
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>);
    return <>
    {DropDownComponent}
    </>
}
export default DropDown;