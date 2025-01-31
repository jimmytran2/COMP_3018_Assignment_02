import { Request, Response, NextFunction } from "express";
import * as branchController from "../src/api/v1/controllers/branchControllers";
import * as branchService from "../src/api/v1/services/branchServices";

jest.mock("../src/api/v1/services/branchServices");

describe("Branch Controller", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    jest.clearAllMocks();
    mockReq = { params: {}, body: {} };
    mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    mockNext = jest.fn();
  });

  describe("createBranch", () => {
    it("should handle a succesful operation", async () => {
      const mockBranch = {
        id: 1,
        name: "Vancouver Branch",
        address: "1300 Burrard St, Vancouver, BC, V6Z 2C7",
        phone: "604-456-0022",
      };

      (branchService.createBranch as jest.Mock).mockResolvedValue(mockBranch);

      await branchController.createBranch(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Branch created",
        data: mockBranch,
      });
    });
  });
});
