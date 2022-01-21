// Write your solution in this file!


const employee = {name:"Brian",streetAddress:"Duffield"};
console.log(employee);

function updateEmployeeWithKeyAndValue(employee,k,v) {
    let newEmployee = {...employee};
    newEmployee[k] = v;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,k,v) {
    employee[k] = v;
    return employee;
}

function deleteFromEmployeeByKey(employee,k) {
    let newO = {...employee};
    delete newO[k];
    return newO;
}

function destructivelyDeleteFromEmployeeByKey(employee,k) {
    delete employee[k];
    return employee;
}