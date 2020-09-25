import { Router } from "express";

import teachersRouter from "../modules/teachers/routes/teachers.routes";
import materialsRouter from "../modules/materials/routes/materials.routes";
import studentsRouter from "../modules/students/routes/students.routes";

const routes = Router();

routes.use("/teachers", teachersRouter);
routes.use("/materials", materialsRouter);
routes.use("/students", studentsRouter);

export default routes;
