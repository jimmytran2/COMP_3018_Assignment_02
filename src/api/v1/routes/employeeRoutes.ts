import express, { Router } from "express";
import * as employeeController from "../controllers/employeeControllers";

const router: Router = express.Router();

router.post("/", employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployeeById);

export default router;
