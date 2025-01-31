export type Branch = {
  id: number;
  name: string;
  address: string;
  phone: string;
};

const branches: Branch[] = [];
let newBranchId: number = 0;

export const createBranch = async (branch: {
  name: string;
  address: string;
  phone: string;
}): Promise<Branch> => {
  newBranchId++;
  const newBranch: Branch = { id: newBranchId, ...branch };
  branches.push(newBranch);
  return newBranch;
};

export const getAllBranches = async (): Promise<Branch[]> => {
  return branches;
};

export const getBranchById = async (id: number): Promise<Branch> => {
  const index: number = branches.findIndex((i) => i.id === id);

  if (index === -1) {
    throw new Error(`Branch with ID ${id} not found`);
  }

  return branches[index];
};
