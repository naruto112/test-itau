import { Router } from "express";
import StudentsController from "../controllers/StudentsController";

const studentsController = new StudentsController();

const studentsRouter = Router();

studentsRouter.post("/", studentsController.create);
studentsRouter.post("/signin", studentsController.auth);

export default studentsRouter;
