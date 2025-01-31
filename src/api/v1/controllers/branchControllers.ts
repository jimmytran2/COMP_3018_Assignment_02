import { Request, Response, NextFunction } from "express";
import * as branchService from "../services/branchServices";
import type { Branch } from "../services/branchServices";

export const createBranch = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newBranch: Branch = await branchService.createBranch(req.body);
    res.status(201).json({ message: "Branch created", data: newBranch });
  } catch (error) {
    next(error);
  }
};

export const getAllBranches = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const branches: Branch[] = await branchService.getAllBranches();
    res.status(200).json({ message: "Branches retrieved", data: branches });
  } catch (error) {
    next(error);
  }
};

export const getBranchById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const branch: Branch = await branchService.getBranchById(
      Number(req.params.id)
    );
    res.status(200).json({ message: "Branch retrieved", data: branch });
  } catch (error) {
    next(error);
  }
};
