// Part 01
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customers = /** @class */ (function () {
    function Customers() {
    }
    // Methods
    Customers.prototype.ShowCustomerInfo = function () {
        console.log('Name: ', this.name);
        console.log('Phone: ', this.phone);
        console.log('Address: ', this.address);
    };
    return Customers;
}());
var cust01 = new Customers();
console.log('Customer 01 Info:');
cust01.name = 'Mohammad Omar';
cust01.phone = 12345678910;
cust01.address = 'Jeddah';
cust01.ShowCustomerInfo();
console.log('------------------');
var cust02 = new Customers();
console.log('Customer 02 Info:');
cust02.name = 'Saeed Omar';
cust02.phone = 1237878910;
cust02.address = 'Makkah';
cust02.ShowCustomerInfo();
console.log('------------------------------------');
// Part 02
var Employees01 = /** @class */ (function () {
    function Employees01() {
    }
    Employees01.prototype.showEmployees = function () {
        console.log('Name: ', this.name);
        console.log('Age: ', this.age);
        console.log('Address: ', this.address);
    };
    return Employees01;
}());
var Jobs = /** @class */ (function (_super) {
    __extends(Jobs, _super);
    function Jobs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jobs.prototype.showJobsInfo = function () {
        console.log('Job Role: ', this.jobName);
    };
    return Jobs;
}(Employees01));
var job01 = new Jobs();
job01.name = 'Hamed Ismaeel';
job01.jobName = 'Software Developer';
job01.age = 33;
job01.address = 'Jeddah';
job01.showEmployees();
job01.showJobsInfo();
console.log('------------------------------------');
// Part 03
var Employees02 = /** @class */ (function () {
    function Employees02() {
        console.log('Any thing will be called inside constructor after creating object');
    }
    return Employees02;
}());
var employee01 = new Employees02();
// output: Any thing will be called inside constructor after creating object
var employee02 = new Employees02();
// output: Any thing will be called inside constructor after creating object
