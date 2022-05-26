
const employee = {
    name: "Bob",
    streetAddress: "2981 Tiemann Ave"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyEmployee = {...employee, [key]: value};
    return copyEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}