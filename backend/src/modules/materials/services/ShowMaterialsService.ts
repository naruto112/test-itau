import MaterialsRepository from "../repositories/MaterialsRepository";
import Materials from "../entities/Materials";

class ShowMaterialsService {
  public async execute(): Promise<Materials[]> {
    const materialsRepository = new MaterialsRepository();

    const materials = await materialsRepository.findAll();

    return materials;
  }
}

export default ShowMaterialsService;
