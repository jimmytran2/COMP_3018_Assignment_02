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
let newEmployeeId: number = 0;

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
