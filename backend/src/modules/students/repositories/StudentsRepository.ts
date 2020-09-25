import { Repository, getRepository } from "typeorm";
import Students from "../entities/Students";

interface ICreateStudent {
  id?: string;
  name: string;
  register: string;
}

class StudentsRepository {
  private ormRepository: Repository<Students>;

  constructor() {
    this.ormRepository = getRepository(Students);
  }

  public async create(studentData: ICreateStudent): Promise<Students> {
    const student = this.ormRepository.create(studentData);

    await this.ormRepository.save(student);

    return student;
  }

  public async findByRegister(register: string): Promise<Students | undefined> {
    const student = await this.ormRepository.findOne({
      where: { register },
    });

    return student;
  }
}

export default StudentsRepository;
