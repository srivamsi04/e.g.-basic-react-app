function Class(){
    class Car {
        constructor(name) {
            this.brand=name;
        }
    
    present(){
        return 'My car Name is '+this.brand;
    }
}
class MOdel extends Car{
    constructor(name,mod){
        super(name);
        this.Model=mod
    }
    show(){
        return <div>
            <>
            <p>
                {this.present()}  'it is a '<b>{this.Model} </b> ' model ';
            </p>
            </>
        </div>
        
    }
}
    const Mycar=new MOdel("FORD","Mustang");
    
    return(
        <div>
            <p>{Mycar.show()}</p>
        </div>
    );
}
export default Class;