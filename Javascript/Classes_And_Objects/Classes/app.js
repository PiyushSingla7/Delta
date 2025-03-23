// 1
class toyotacar {
    constructor(){                                             // default constructor
        console.log("creating new object");
    }
    // constructor(brand){
    //     console.log("parametirized constructor called");       // parametirized constructor
    //     this.brand=brand;
    // }
     
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brand=brand;
    }
}

let fortuner = new toyotacar();
let lexus = new toyotacar();
let innova = new toyotacar();

//let glanza = new toyotacar("toyota");

fortuner.setbrand("legender");

