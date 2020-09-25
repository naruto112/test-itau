"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TeachersRepository = _interopRequireDefault(require("../repositories/TeachersRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateTeacherService {
  async execute({
    name,
    age,
    materials
  }) {
    const teachersRepository = new _TeachersRepository.default();

    if (materials) {
      const materialsExists = await teachersRepository.findByIds(materials);
      const teacher = await teachersRepository.create({
        name,
        age,
        materials: materialsExists
      });
      return teacher;
    } else {
      const teacher = await teachersRepository.create({
        name,
        age
      });
      return teacher;
    }
  }

}

var _default = CreateTeacherService;
exports.default = _default;