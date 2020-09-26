import MaterialsRepository from "../repositories/MaterialsRepository";
import AppError from "../../../errors/AppError";

import Materials from "../entities/Materials";

interface ITeachers {
  id: string;
}

interface IRequest {
  id: string;
  name: string;
  teachers?: ITeachers[];
}

class UpdateMaterialService {
  public async execute({
    id,
    name,
    teachers,
  }: IRequest): Promise<Materials | undefined> {
    const materialsRepository = new MaterialsRepository();

    const materialExists = await materialsRepository.findById(id);

    if (!materialExists) {
      throw new AppError("Material not found", 401);
    }

    if (!teachers) {
      throw new AppError("Techers necessary", 401);
    }

    const material = await materialsRepository.save({
      id,
      name,
      teachers,
    });

    return material;
  }
}

export default UpdateMaterialService;
