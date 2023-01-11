const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Roo"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
    // expect(employee.id).toBe(name);
});
test('Set ID', () => {
    const testId = 13;
    const employee = new Employee("Roo", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "Roo@slay.com"
    const employee = new Employee("Roo", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('find\\Name', () => {
    const testName = "Roo"
    const employee = new Employee(testName);
    expect(employee.findName()).toBe(testName);
});
test('findId', () => {
    const testId = "13"
    const employee = new Employee("Roo", testId);
    expect(employee.findId()).toBe(testId);
});
test('findEmail', () => {
    const testEmail = "roo@slay.com"
    const employee = new Employee("Roo", 1, testEmail);
    expect(employee.findEmail()).toBe(testEmail);
});
test('findRole', () => {
    const testRole = "Employee"
    const employee = new Employee("Roo", 1, "roo@slay.com");
    expect(employee.findRole()).toBe(testRole);
});