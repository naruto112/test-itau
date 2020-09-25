import Students from "../entities/Students";
import StudentsRepository from "../repositories/StudentsRepository";
import AppError from "../../../errors/AppError";

interface IResponse {
  register: string;
}

interface IRequest {
  register: string;
}

class AuthStudentService {
  public async execute({ register }: IRequest): Promise<IResponse> {
    const studentsRepository = new StudentsRepository();

    const studentExists = await studentsRepository.findByRegister(register);

    if (!studentExists) {
      throw new AppError("Not student exists", 401);
    }

    return studentExists;
  }
}

export default AuthStudentService;
