function Class(){
    class Car {
        constructor(name) {
            this.brand=name;
        }
    
    present(){
        return 'My car Name is '+this.brand
    }
}
    const Mycar=new Car("FORD");
    
    return(
        <div>
            <p>{Mycar.present()}</p>
        </div>
    );
}
export default Class;