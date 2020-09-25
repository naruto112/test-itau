import { Router } from "express";

import MaterialsController from "../controllers/MaterialsController";

const materialsRouter = Router();
const materialsController = new MaterialsController();

materialsRouter.post("/", materialsController.create);
materialsRouter.get("/", materialsController.show);
materialsRouter.put("/", materialsController.update);

export default materialsRouter;
