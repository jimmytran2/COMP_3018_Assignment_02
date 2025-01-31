import express, { Router } from "express";
import * as branchController from "../controllers/branchControllers";

const router: Router = express.Router();

router.post("/", branchController.createBranch);

export default router;
