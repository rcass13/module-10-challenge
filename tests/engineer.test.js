const Engineer = require('../lib/engineer');

test("setting up github", () => {
    const testValue = "rcass13";
    const employee = new Engineer("Roo", 1, "roo@slay.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Roo", 1, "roo@slay.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "rcass13";
    const employee = new Engineer("Roo", 1, "roo@slay.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})



