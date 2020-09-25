import { Repository, getRepository } from "typeorm";
import Materials from "../entities/Materials";
import Teachers from "../../teachers/entities/Teachers";

interface ICreateTeacher {
  id: string;
}

interface ICreateMaterials {
  id?: string;
  name: string;
  teachers?: ICreateTeacher[];
}

class MaterialsRepository {
  private ormRepository: Repository<Materials>;
  private ormRepositoryTeachers: Repository<Teachers>;

  constructor() {
    this.ormRepository = getRepository(Materials);
    this.ormRepositoryTeachers = getRepository(Teachers);
  }

  public async create(materialData: ICreateMaterials): Promise<Materials> {
    const material = this.ormRepository.create(materialData);

    await this.ormRepository.save(material);

    return material;
  }

  public async findById(id: string): Promise<Materials | undefined> {
    const material = await this.ormRepository.findOne(id);

    return material;
  }

  public async findByIds(teachersData: ICreateTeacher[]): Promise<Teachers[]> {
    const teachers = this.ormRepositoryTeachers.findByIds(teachersData);

    return teachers;
  }

  public async findAll(): Promise<Materials[]> {
    const materials = this.ormRepository.find({ relations: ["teachers"] });

    return materials;
  }

  public async save(materialData: ICreateMaterials): Promise<Materials> {
    return this.ormRepository.save(materialData);
  }
}

export default MaterialsRepository;
