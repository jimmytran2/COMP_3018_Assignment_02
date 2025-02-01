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
    res.status(201).json({ message: "Employee created", data: newEmployee });
  } catch (error) {
    next(error);
  }
};

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const employees: Employee[] = await employeeService.getAllEmployees();
    res.status(200).json({ message: "Employees retrieved", data: employees });
  } catch (error) {
    next(error);
  }
};

export const getEmployeeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const employee: Employee = await employeeService.getEmployeeById(
      Number(req.params.id)
    );
    res.status(200).json({ message: "Employee retrieved", data: employee });
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedEmployee: Employee = await employeeService.updateEmployee(
      Number(req.params.id),
      req.body
    );

    res
      .status(200)
      .json({ message: "Employee updated", data: updatedEmployee });
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await employeeService.deleteEmployee(Number(req.params.id));
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    next(error);
  }
};

export const getEmployeeByBranch = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const employees: Employee[] = await employeeService.getEmployeeByBranch(
      Number(req.params.branch)
    );
    res
      .status(200)
      .json({ message: "Employees from branch retrieved", data: employees });
  } catch (error) {
    next(error);
  }
};

export const getEmployeeByDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const employees: Employee[] = await employeeService.getEmployeeByDepartment(
      req.params.department
    );
    res.status(200).json({
      message: "Employees from department retrieved",
      data: employees,
    });
  } catch (error) {
    next(error);
  }
};
