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
