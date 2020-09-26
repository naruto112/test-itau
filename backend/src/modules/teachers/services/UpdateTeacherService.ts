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

    const teacherExists = await teachersRepository.findById(id);

    if (!teacherExists) {
      throw new AppError("Teacher not found", 401);
    }

    if (!materials) {
      throw new AppError("Material necessary");
    }

    const teacher = await teachersRepository.save({
      id,
      name,
      age,
      materials,
    });

    return teacher;
  }
}

export default UpdateTeacherService;
