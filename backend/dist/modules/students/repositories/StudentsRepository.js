"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Students = _interopRequireDefault(require("../entities/Students"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StudentsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Students.default);
  }

  async create(studentData) {
    const student = this.ormRepository.create(studentData);
    await this.ormRepository.save(student);
    return student;
  }

  async findByRegister(register) {
    const student = await this.ormRepository.findOne({
      where: {
        register
      }
    });
    return student;
  }

}

var _default = StudentsRepository;
exports.default = _default;