import request from "supertest";
import app from "../src/app";
import {
  createBranch,
  getAllBranches,
  getBranchById,
  updateBranch,
} from "../src/api/v1/controllers/branchControllers";

jest.mock("../src/api/v1/controllers/branchControllers", () => ({
  createBranch: jest.fn((req, res) => res.status(201).send()),
  getAllBranches: jest.fn((req, res) => res.status(200).send()),
  getBranchById: jest.fn((req, res) => res.status(200).send()),
  updateBranch: jest.fn((req, res) => res.status(200).send()),
}));

describe("Branch Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("POST api/v1/branches", () => {
    it("should call createBranch controller", async () => {
      const mockBranch = {
        id: 1,
        name: "Vancouver Branch",
        address: "1300 Burrard St, Vancouver, BC, V6Z 2C7",
        phone: "604-456-0022",
      };

      await request(app).post("/api/v1/branches").send(mockBranch);
      expect(createBranch).toHaveBeenCalled();
    });
  });

  describe("GET /api/v1/branches", () => {
    it("should call getAllbranches controller", async () => {
      await request(app).get("/api/v1/branches");
      expect(getAllBranches).toHaveBeenCalled();
    });
  });
});
