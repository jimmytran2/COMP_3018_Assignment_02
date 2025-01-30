import request from "supertest";
import app from "../src/app";
import { createEmployee } from "../src/api/v1/controllers/employeeControllers";

jest.mock("../src/api/v1/controllers/employeeControllers", () => ({
  createEmployee: jest.fn((req, res) => res.status(201).send()),
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
});
