import request from "supertest";
import app from "../src/app";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
} from "../src/api/v1/controllers/employeeControllers";

jest.mock("../src/api/v1/controllers/employeeControllers", () => ({
  createEmployee: jest.fn((req, res) => res.status(201).send()),
  getAllEmployees: jest.fn((req, res) => res.status(200).send()),
  getEmployeeById: jest.fn((req, res) => res.status(200).send()),
  updateEmployee: jest.fn((req, res) => res.status(200).send()),
}));

describe("Employee Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("POST api/v1/employees", () => {
    it("should call createEmployee controller", async () => {
      const mockEmployee = {
        id: 1,
        name: "John Doe",
        position: "Manager",
        department: "Accounting",
        email: "johndoe@pixell-river.com",
        phone: "123-456-7890",
        branch: 9,
      };

      await request(app).post("/api/v1/employees").send(mockEmployee);
      expect(createEmployee).toHaveBeenCalled();
    });
  });

  describe("GET /api/v1/employees", () => {
    it("should call getAllEmployees controller", async () => {
      await request(app).get("/api/v1/employees");
      expect(getAllEmployees).toHaveBeenCalled();
    });
  });

  describe("GET /api/v1/employees/:id", () => {
    it("should call getEmployeeById controller", async () => {
      const mockEmployee = {
        id: 1,
        name: "John Doe",
        position: "Manager",
        department: "Accounting",
        email: "johndoe@pixell-river.com",
        phone: "123-456-7890",
        branch: 9,
      };

      const mockId: number = 1;

      await request(app).get(`/api/v1/employees/${mockId}`).send(mockEmployee);
      expect(getEmployeeById).toHaveBeenCalled();
    });
  });

  describe("PUT /api/v1/employee/:id", () => {
    it("should call updateEmployee controller", async () => {
      const mockEmployee = {
        id: 1,
        name: "John Doe",
        position: "Manager",
        department: "Accounting",
        email: "johndoe@pixell-river.com",
        phone: "123-456-7890",
        branch: 9,
      };

      const mockId = 1;

      await request(app).put(`/api/v1/employees/${mockId}`).send(mockEmployee);
      expect(updateEmployee).toHaveBeenCalled();
    });
  });
});
