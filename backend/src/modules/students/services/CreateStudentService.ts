import StudentsRepository from "../repositories/StudentsRepository";
import AppError from "../../../errors/AppError";

import Students from "../entities/Students";

interface IRequest {
  name: string;
  register: string;
}

class CreateStudentService {
  public async execute({ name, register }: IRequest): Promise<Students> {
    const studentsRepository = new StudentsRepository();

    const studentExists = await studentsRepository.findByRegister(register);

    if (studentExists) {
      throw new AppError("Students exists", 401);
    }

    const student = await studentsRepository.create({
      name,
      register,
    });

    return student;
  }
}

export default CreateStudentService;
