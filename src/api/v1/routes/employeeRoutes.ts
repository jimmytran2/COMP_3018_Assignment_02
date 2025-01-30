import express, { Router } from "express";
import * as employeeController from "../controllers/employeeControllers";

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Employees!");
});

// example "tasks" endpoint
/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
 */
router.get("/", (req, res) => {
  res.send("Retrieve tasks");
});

router.post("/", employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);

export default router;
