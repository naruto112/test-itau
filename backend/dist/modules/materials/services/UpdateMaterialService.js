"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MaterialsRepository = _interopRequireDefault(require("../repositories/MaterialsRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateMaterialService {
  async execute({
    id,
    name,
    teachers
  }) {
    const materialsRepository = new _MaterialsRepository.default();
    const material = await materialsRepository.findById(id);

    if (!material) {
      throw new _AppError.default("Material not found");
    }

    if (teachers) {
      const teachersExists = await materialsRepository.findByIds(teachers);
      const material = await materialsRepository.save({
        id,
        name,
        teachers: teachersExists
      });
      return material;
    } else {
      const teacher = await materialsRepository.save({
        id,
        name
      });
      return teacher;
    }
  }

}

var _default = UpdateMaterialService;
exports.default = _default;