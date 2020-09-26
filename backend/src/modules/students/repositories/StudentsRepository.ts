import { Repository, getRepository } from "typeorm";
import Students from "../entities/Students";

interface ICreateStudent {
  id?: string;
  name: string;
  register: string;
  newRegister?: string;
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

  public async update(studentData: ICreateStudent): Promise<Students> {
    return await this.ormRepository.save(studentData);
  }

  public async findByRegister(register: string): Promise<Students | undefined> {
    const student = await this.ormRepository.findOne({
      where: { register },
    });

    return student;
  }
}

export default StudentsRepository;
