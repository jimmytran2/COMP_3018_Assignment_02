import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeServices";
import type { Employee } from "../services/employeeServices";

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newEmployee: Employee = await employeeService.createEmployee(
      req.body
    );
    res.status(200).json({ message: "Employee created", data: newEmployee });
  } catch (error) {
    next(error);
  }
};
