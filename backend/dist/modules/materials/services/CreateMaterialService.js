"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MaterialsRepository = _interopRequireDefault(require("../repositories/MaterialsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateMaterialService {
  async execute({
    name,
    teachers
  }) {
    const materialsRepository = new _MaterialsRepository.default();

    if (teachers) {
      const teachersExists = await materialsRepository.findByIds(teachers);
      const teacher = await materialsRepository.create({
        name,
        teachers: teachersExists
      });
      return teacher;
    } else {
      const teacher = await materialsRepository.create({
        name
      });
      return teacher;
    }
  }

}

var _default = CreateMaterialService;
exports.default = _default;