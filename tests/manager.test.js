const Manager = require('../lib/manager');

test("setting up github with the constructor", () => {
    const testValue = "rcass13";
    const employee = new Manager("Roo", 1, "roo@slay.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("findRole function", () => {
    const testValue = "Manager";
    const employee = new Manager("Roo", 1, "roo@slay.com", testValue);
    expect(employee.findRole()).toBe(testValue);
})

test("Get Office Number", () => {
    const testValue = "100";
    const employee = new Manager("Roo", 1, "roo@slay.com", testValue);
    expect(employee.findOfficeNumber()).toBe(testValue);
})