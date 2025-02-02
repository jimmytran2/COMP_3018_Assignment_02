# Debugging Analysis

## Scenario 1: newEmployee creation

- **Breakpoint Location:** employeeServices.ts - line 43
- **Objective:** Check if the newEmployee being created is assigned the correct property values, before being pushed to the array of employees

### Debugger Observations

- **Variable States:** newEmployee: contains data from request {id: 1, name: jimmy, position: manager, department: finance,
-                      email: jimmy@gmail.com, phone: 123-123-1234, branch: 1} - employees: [{35}]
- **Call Stack:** api request is made, sent to router, which sends to controller, which then sends to services, where the business logic
  is performed. For this scenario, the service being called is createEmployee. The newEmployee is assigned the new values provided
- **Behavior:** a request is made to create a new employee. the createEmployee service is called.
-               This is where a newEmployee object is created with - the provided values and it is given a
-               unique employee id before it is pushed to the employees array. the new employee is then returned

### Analysis

- What did you learn from this scenario?
  - I learned how the data from the api request is taken to the service (employeeService.ts) and processed. In this case processed to create a new
  - employee.
- Did you observe any unexpected behavior? If so, what might be the cause?
  - No, there was no unexpected behavior
- Are there areas for improvement or refactoring in this part of the code?
  - If i were to improve this part of the code, i would add some sort of validation that makes sure when a new employee is created, they cant assign
  - them an ID themselves, rather it should be automatically generated.
- How does this enhance your understanding of the overall project?
  - This helped me understand the flow of the api requests when they are made. Also made me more wary of when there i user input
  - that there shouldnt be.

## Scenario 2: [Title of the Scenario]

[Repeat the same format as Scenario 1]

## Scenario 3: [Title of the Scenario]

[Repeat the same format as Scenario 1]
