// 1
let student = {
  name: "Piyush",
  roll_number: 23,
  marks: 90,
  printmarks: function () {
    console.log("marks :- ", this.marks);
  },
  printname() {
    console.log("name :- ", this.name);
  },
};

// 2
const employee = {
  calctax() {
    console.log("tax rate is 10%");
  },
};

const karanarjun = {
  salary: 500000,
};

karanarjun.__proto__ = employee;

// 3
const employees = {
  calctax1() {
    console.log("tax rate is 10%");
  },
};

const karanarjun1 = {
  salary: 500000,
  calctax1(){
    console.log("tax rate is 20%");
  }
};

karanarjun1.__proto__ = employees;
// on calling karanarjun1.calctax1() "tax rate is 20%" will be printed 
