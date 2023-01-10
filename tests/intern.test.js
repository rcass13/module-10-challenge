const Intern = require('../lib/intern');

test("setting up school with the constructor", () => {
    const testValue = "rcass13";
    const employee = new Intern("Roo", 1, "roo@slay.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Roo", 1, "roo@slay.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get school", () => {
    const testValue = "rcass13";
    const employee = new Intern("Roo", 1, "roo@slay.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
})