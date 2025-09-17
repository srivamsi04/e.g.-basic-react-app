function Class(){
    class Car {
        constructor(name) {
            this.brand=name;
        }
    }
    const Mycar=new Car("FORD");
    
    return(
        <div>
            <p>{Mycar.brand}</p>
        </div>
    );
}
export default Class;