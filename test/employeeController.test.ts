import { Request, Response, NextFunction } from "express";
import * as employeeController from "../src/api/v1/controllers/employeeControllers";
import * as employeeService from "../src/api/v1/services/employeeServices";

jest.mock("../src/api/v1/services/employeeServices");

describe("Employee Controller", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    jest.clearAllMocks();
    mockReq = { params: {}, body: {} };
    mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    mockNext = jest.fn();
  });

  describe("createEmployee", () => {
    it("should handle a successful operation", async () => {
      const mockEmployee = [
        {
          id: 1,
          name: "John Doe",
          position: "Manager",
          department: "Accounting",
          email: "johndoe@pixell-river.com",
          phone: "123-456-7890",
          branch: 9,
        },
      ];

      (employeeService.createEmployee as jest.Mock).mockResolvedValue(
        mockEmployee
      );

      await employeeController.createEmployee(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee created",
        data: mockEmployee,
      });
    });
  });

  describe("getAllEmployees", () => {
    it("should handle a successful operation", async () => {
      const mockEmployee = [
        {
          id: 1,
          name: "John Doe",
          position: "Manager",
          department: "Accounting",
          email: "johndoe@pixell-river.com",
          phone: "123-456-7890",
          branch: 9,
        },
      ];

      (employeeService.getAllEmployees as jest.Mock).mockResolvedValue(
        mockEmployee
      );

      await employeeController.getAllEmployees(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employees retrieved",
        data: mockEmployee,
      });
    });
  });

  describe("getEmployeeById", () => {
    it("should handle a succesful opereation", async () => {
      const mockEmployees = [
        {
          id: 1,
          name: "John Doe",
          position: "Manager",
          department: "Accounting",
          email: "johndoe@pixell-river.com",
          phone: "123-456-7890",
          branch: 9,
        },
      ];

      (employeeService.getEmployeeById as jest.Mock).mockResolvedValue(
        mockEmployees
      );

      await employeeController.getEmployeeById(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee retrieved",
        data: mockEmployees,
      });
    });
  });

  describe("updateEmployee", () => {
    it("should handle successful operation", async () => {
      const mockEmployee = [
        {
          id: 1,
          name: "John Doe",
          position: "Manager",
          department: "Accounting",
          email: "johndoe@pixell-river.com",
          phone: "123-456-7890",
          branch: 9,
        },
      ];

      (employeeService.updateEmployee as jest.Mock).mockResolvedValue(
        mockEmployee
      );

      await employeeController.updateEmployee(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee updated",
        data: mockEmployee,
      });
    });
  });

  describe("deleteEmployee", () => {
    it("should handle successfull operation", async () => {
      const mockEmployee = [
        {
          id: 1,
          name: "John Doe",
          position: "Manager",
          department: "Accounting",
          email: "johndoe@pixell-river.com",
          phone: "123-456-7890",
          branch: 9,
        },
      ];

      (employeeService.deleteEmployee as jest.Mock).mockResolvedValue(
        mockEmployee
      );

      await employeeController.deleteEmployee(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee deleted",
      });
    });
  });
});
