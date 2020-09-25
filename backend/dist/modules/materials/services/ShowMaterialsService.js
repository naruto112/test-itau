"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MaterialsRepository = _interopRequireDefault(require("../repositories/MaterialsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowMaterialsService {
  async execute() {
    const materialsRepository = new _MaterialsRepository.default();
    const materials = await materialsRepository.findAll();
    return materials;
  }

}

var _default = ShowMaterialsService;
exports.default = _default;