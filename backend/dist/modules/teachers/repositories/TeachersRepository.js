"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Teachers = _interopRequireDefault(require("../entities/Teachers"));

var _Materials = _interopRequireDefault(require("../../materials/entities/Materials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TeachersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepositoryMaterials = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Teachers.default);
    this.ormRepositoryMaterials = (0, _typeorm.getRepository)(_Materials.default);
  }

  async create(teacherData) {
    const teacher = this.ormRepository.create(teacherData);
    await this.ormRepository.save(teacher);
    return teacher;
  }

  async findById(id) {
    const teacher = await this.ormRepository.findOne(id);
    return teacher;
  }

  async findByIds(materialsData) {
    const materials = this.ormRepositoryMaterials.findByIds(materialsData);
    return materials;
  }

  async findAll() {
    const teachers = this.ormRepository.find({
      relations: ["materials"]
    });
    return teachers;
  }

  async save(teacherData) {
    return this.ormRepository.save(teacherData);
  }

}

var _default = TeachersRepository;
exports.default = _default;