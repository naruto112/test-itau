import TeachersRepository from "../repositories/TeachersRepository";
import AppError from "../../../errors/AppError";

import Teachers from "../entities/Teachers";

interface IMaterials {
  id: string;
}

interface IRequest {
  id: string;
  name: string;
  age: number;
  materials?: IMaterials[];
}

class UpdateTeacherService {
  public async execute({
    id,
    name,
    age,
    materials,
  }: IRequest): Promise<Teachers> {
    const teachersRepository = new TeachersRepository();

    const teacher = await teachersRepository.findById(id);

    if (!teacher) {
      throw new AppError("Teacher not found", 401);
    }

    if (materials) {
      const materialsExists = await teachersRepository.findByIds(materials);

      const teacher = await teachersRepository.save({
        id,
        name,
        age,
        materials: materialsExists,
      });

      return teacher;
    } else {
      const teacher = await teachersRepository.save({
        id,
        name,
        age,
      });

      return teacher;
    }
  }
}

export default UpdateTeacherService;
