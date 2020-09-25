import { Request, Response } from "express";

import CreateMaterialService from "../services/CreateMaterialService";
import ShowMaterialsService from "../services/ShowMaterialsService";
import UpdateMaterialService from "../services/UpdateMaterialService";

class MaterialsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createMaterialService = new CreateMaterialService();
    const { name, teachers } = request.body;

    const material = await createMaterialService.execute({
      name,
      teachers,
    });

    return response.json(material);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showMaterialsService = new ShowMaterialsService();

    const materials = await showMaterialsService.execute();

    return response.json(materials);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateMaterialService = new UpdateMaterialService();
    const { id, name, teachers } = request.body;

    const material = await updateMaterialService.execute({
      id,
      name,
      teachers,
    });

    return response.json(material);
  }
}

export default MaterialsController;
