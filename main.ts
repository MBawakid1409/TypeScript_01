// Part 01

class Customers {
    // Variables
    name:string;
    phone:number;
    address:string;

    // Methods
    ShowCustomerInfo() {
        console.log('Name: ',this.name);
        console.log('Phone: ',this.phone);
        console.log('Address: ',this.address);
    }
}

let cust01 = new Customers();
console.log('Customer 01 Info:')
cust01.name = 'Mohammad Omar';
cust01.phone = 12345678910;
cust01.address = 'Jeddah'; 
cust01.ShowCustomerInfo();
console.log('------------------')
let cust02 = new Customers();
console.log('Customer 02 Info:')
cust02.name = 'Saeed Omar';
cust02.phone = 1237878910;
cust02.address = 'Makkah'; 
cust02.ShowCustomerInfo();

console.log('------------------------------------')

// Part 02

class Employees01 {
    name:string;
    age:number;
    address:string;

    showEmployees() {
        console.log('Name: ',this.name);
        console.log('Age: ',this.age);
        console.log('Address: ',this.address);
    }   
}

class Jobs extends Employees01 {
    jobName:string;

    showJobsInfo() {
        console.log('Job Role: ',this.jobName);
    }
}

let job01 = new Jobs();
job01.name = 'Hamed Ismaeel';
job01.jobName = 'Software Developer';
job01.age = 33;
job01.address = 'Jeddah';
job01.showEmployees();
job01.showJobsInfo();

console.log('------------------------------------')

// Part 03

class Employees02 {
    constructor() {
        console.log('Any thing will be called inside constructor after creating object');
    }
}
let employee01 = new Employees02(); 
// output: Any thing will be called inside constructor after creating object
let employee02 = new Employees02();
// output: Any thing will be called inside constructor after creating object
