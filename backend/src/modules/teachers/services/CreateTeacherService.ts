import TeachersRepository from "../repositories/TeachersRepository";
import AppError from "../../../errors/AppError";

import Teachers from "../entities/Teachers";

interface IMaterials {
  id: string;
}

interface IRequest {
  name: string;
  age: number;
  materials?: IMaterials[];
}

class CreateTeacherService {
  public async execute({ name, age, materials }: IRequest): Promise<Teachers> {
    const teachersRepository = new TeachersRepository();

    if (materials) {
      const materialsExists = await teachersRepository.findByIds(materials);

      const teacher = await teachersRepository.create({
        name,
        age,
        materials: materialsExists,
      });

      return teacher;
    } else {
      const teacher = await teachersRepository.create({
        name,
        age,
      });

      return teacher;
    }
  }
}

export default CreateTeacherService;
