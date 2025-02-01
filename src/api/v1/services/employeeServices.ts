import { employeeData } from "./employeeData";
import { branchData } from "./branchData";

export type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branch: number;
};

const employees: Employee[] = [...employeeData];
let newEmployeeId: number = employees.length;

export const createEmployee = async (employee: {
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branch: number;
}): Promise<Employee> => {
  newEmployeeId++;
  const newEmployee: Employee = { id: newEmployeeId, ...employee };
  employees.push(newEmployee);
  return newEmployee;
};

export const getAllEmployees = async (): Promise<Employee[]> => {
  return employees;
};

export const getEmployeeById = async (id: number): Promise<Employee> => {
  const index: number = employees.findIndex((i) => i.id === id);

  if (index === -1) {
    throw new Error(`Employee with ID ${id} not found`);
  }

  return employees[index];
};

export const updateEmployee = async (
  id: number,
  employeeData: Partial<Employee>
): Promise<Employee> => {
  const index: number = employees.findIndex((i) => i.id === id);

  if (index === -1) {
    throw new Error(`Employee with ID ${id} not found`);
  }

  employees[index] = { ...employees[index], ...employeeData };
  return employees[index];
};

export const deleteEmployee = async (id: number): Promise<void> => {
  const index: number = employees.findIndex((i) => i.id === id);

  if (index === -1) {
    throw new Error(`Employee with ID ${id} not found`);
  }

  employees.splice(index, 1);
};

/**
 * Array filter method
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

export const getEmployeeByBranch = async (
  branchId: number
): Promise<Employee[]> => {
  const branchIndex: number = branchData.findIndex(
    (branch) => branch.id === branchId
  );

  if (branchIndex === -1) {
    throw new Error(`Branch ${branchId} does not exist`);
  }

  const employeesInBranch: Employee[] = employees.filter(
    (employee) => employee.branch === branchId
  );

  if (employeesInBranch.length === 0) {
    throw new Error(`There are no employees in branch ${branchId}`);
  }

  return employeesInBranch;
};

export const getEmployeeByDepartment = async (
  department: string
): Promise<Employee[]> => {
  const departmentIndex: number = employeeData.findIndex(
    (employee) => employee.department.toLowerCase() === department.toLowerCase()
  );

  if (departmentIndex === -1) {
    throw new Error(`${department} department does not exist`);
  }

  const employeesInDepartment: Employee[] = employees.filter(
    (employee) => employee.department.toLowerCase() === department.toLowerCase()
  );

  if (employeesInDepartment.length === 0) {
    throw new Error(`There are no employees in the ${department} department`);
  }

  return employeesInDepartment;
};
