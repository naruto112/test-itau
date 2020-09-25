"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Materials = _interopRequireDefault(require("../entities/Materials"));

var _Teachers = _interopRequireDefault(require("../../teachers/entities/Teachers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MaterialsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepositoryTeachers = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Materials.default);
    this.ormRepositoryTeachers = (0, _typeorm.getRepository)(_Teachers.default);
  }

  async create(materialData) {
    const material = this.ormRepository.create(materialData);
    await this.ormRepository.save(material);
    return material;
  }

  async findById(id) {
    const material = await this.ormRepository.findOne(id);
    return material;
  }

  async findByIds(teachersData) {
    const teachers = this.ormRepositoryTeachers.findByIds(teachersData);
    return teachers;
  }

  async findAll() {
    const materials = this.ormRepository.find({
      relations: ["teachers"]
    });
    return materials;
  }

  async save(materialData) {
    return this.ormRepository.save(materialData);
  }

}

var _default = MaterialsRepository;
exports.default = _default;