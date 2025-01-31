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
