import { Repository, getRepository } from "typeorm";
import Teachers from "../entities/Teachers";
import Materials from "../../materials/entities/Materials";

interface ICreateMaterial {
  id: string;
}

interface ICreateTeacher {
  id?: string;
  name: string;
  age: number;
  materials?: ICreateMaterial[];
}

class TeachersRepository {
  private ormRepository: Repository<Teachers>;
  private ormRepositoryMaterials: Repository<Materials>;

  constructor() {
    this.ormRepository = getRepository(Teachers);
    this.ormRepositoryMaterials = getRepository(Materials);
  }

  public async create(teacherData: ICreateTeacher): Promise<Teachers> {
    const teacher = this.ormRepository.create(teacherData);

    await this.ormRepository.save(teacher);

    return teacher;
  }

  public async findById(id: string): Promise<Teachers | undefined> {
    const teacher = await this.ormRepository.findOne(id);

    return teacher;
  }

  public async findByIds(
    materialsData: ICreateMaterial[]
  ): Promise<Materials[]> {
    const materials = this.ormRepositoryMaterials.findByIds(materialsData);

    return materials;
  }

  public async findAll(): Promise<Teachers[]> {
    const teachers = this.ormRepository.find({ relations: ["materials"] });

    return teachers;
  }

  public async save(teacherData: ICreateTeacher): Promise<Teachers> {
    return this.ormRepository.save(teacherData);
  }
}

export default TeachersRepository;
