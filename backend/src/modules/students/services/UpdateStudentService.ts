import StudentsRepository from "../repositories/StudentsRepository";
import AppError from "../../../errors/AppError";

import Students from "../entities/Students";

interface IRequest {
  name: string;
  register: string;
  newRegister: string;
}

class UpdateStudentService {
  public async execute({
    name,
    register,
    newRegister,
  }: IRequest): Promise<Students> {
    const studentsRepository = new StudentsRepository();

    const student = await studentsRepository.findByRegister(register);

    if (!student) {
      throw new AppError("Students not exists", 401);
    }

    student.name = name;
    student.register = newRegister;

    return studentsRepository.update(student);
  }
}

export default UpdateStudentService;
