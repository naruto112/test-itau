import TeachersRepository from "../repositories/TeachersRepository";
import Teachers from "../entities/Teachers";

class ShowTeachersService {
  public async execute(): Promise<Teachers[]> {
    const teachersRepository = new TeachersRepository();

    const teachers = await teachersRepository.findAll();

    return teachers;
  }
}

export default ShowTeachersService;
