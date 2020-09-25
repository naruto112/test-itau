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
  public async execute({ id, name, teachers }: IRequest): Promise<Materials> {
    const materialsRepository = new MaterialsRepository();

    const material = await materialsRepository.findById(id);

    if (!material) {
      throw new AppError("Material not found");
    }

    if (teachers) {
      const teachersExists = await materialsRepository.findByIds(teachers);

      const material = await materialsRepository.save({
        id,
        name,
        teachers: teachersExists,
      });

      return material;
    } else {
      const teacher = await materialsRepository.save({
        id,
        name,
      });

      return teacher;
    }
  }
}

export default UpdateMaterialService;
