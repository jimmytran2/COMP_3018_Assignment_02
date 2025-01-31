export type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branch: number;
};

const employees: Employee[] = [];
let newestId: number = 0;

export const createEmployee = async (employee: {
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branch: number;
}): Promise<Employee> => {
  newestId++;
  const newEmployee: Employee = { id: newestId, ...employee };
  employees.push(newEmployee);
  return newEmployee;
};

export const getAllEmployees = async (): Promise<Employee[]> => {
  return employees;
};

export const getEmployeeById = async (id: number): Promise<Employee> => {
  const index: number = employees.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error(`Item with ID ${id} not found`);
  }
  return employees[index];
};
