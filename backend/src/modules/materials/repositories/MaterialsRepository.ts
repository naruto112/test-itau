import { Repository, getRepository } from "typeorm";
import Materials from "../entities/Materials";

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

  constructor() {
    this.ormRepository = getRepository(Materials);
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

  public async findByMaterials(id: string): Promise<ICreateMaterials[]> {
    const materials = await this.ormRepository.find({
      relations: ["teachers"],
      where: { id },
    });

    return materials;
  }

  public async findAll(): Promise<Materials[]> {
    const materials = await this.ormRepository.find({
      relations: ["teachers"],
    });

    return materials;
  }

  public async save(materialData: ICreateMaterials): Promise<Materials> {
    return this.ormRepository.save(materialData);
  }
}

export default MaterialsRepository;
