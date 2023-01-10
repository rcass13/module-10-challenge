const Manager = require('../lib/manager');

test("setting up github with the constructor", () => {
    const testValue = "rcass13";
    const employee = new Manager("Roo", 1, "roo@slay.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Manager";
    const employee = new Manager("Roo", 1, "roo@slay.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get Office Number", () => {
    const testValue = "rcass13";
    const employee = new Manager("Roo", 1, "roo@slay.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
})