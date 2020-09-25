"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TeachersRepository = _interopRequireDefault(require("../repositories/TeachersRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateTeacherService {
  async execute({
    id,
    name,
    age,
    materials
  }) {
    const teachersRepository = new _TeachersRepository.default();
    const teacher = await teachersRepository.findById(id);

    if (!teacher) {
      throw new _AppError.default("Teacher not found", 401);
    }

    if (materials) {
      const materialsExists = await teachersRepository.findByIds(materials);
      const teacher = await teachersRepository.save({
        id,
        name,
        age,
        materials: materialsExists
      });
      return teacher;
    } else {
      const teacher = await teachersRepository.save({
        id,
        name,
        age
      });
      return teacher;
    }
  }

}

var _default = UpdateTeacherService;
exports.default = _default;