import MaterialsRepository from "../repositories/MaterialsRepository";
import AppError from "../../../errors/AppError";

import Materials from "../entities/Materials";

interface ITeachers {
  id: string;
}

interface IRequest {
  name: string;
  teachers?: ITeachers[];
}

class CreateMaterialService {
  public async execute({ name, teachers }: IRequest): Promise<Materials> {
    const materialsRepository = new MaterialsRepository();

    if (teachers) {
      const teachersExists = await materialsRepository.findByIds(teachers);

      const teacher = await materialsRepository.create({
        name,
        teachers: teachersExists,
      });

      return teacher;
    } else {
      const teacher = await materialsRepository.create({
        name,
      });

      return teacher;
    }
  }
}

export default CreateMaterialService;
