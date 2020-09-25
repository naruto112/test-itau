"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateMaterialService = _interopRequireDefault(require("../services/CreateMaterialService"));

var _ShowMaterialsService = _interopRequireDefault(require("../services/ShowMaterialsService"));

var _UpdateMaterialService = _interopRequireDefault(require("../services/UpdateMaterialService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MaterialsController {
  async create(request, response) {
    const createMaterialService = new _CreateMaterialService.default();
    const {
      name,
      teachers
    } = request.body;
    const material = await createMaterialService.execute({
      name,
      teachers
    });
    return response.json(material);
  }

  async show(request, response) {
    const showMaterialsService = new _ShowMaterialsService.default();
    const materials = await showMaterialsService.execute();
    return response.json(materials);
  }

  async update(request, response) {
    const updateMaterialService = new _UpdateMaterialService.default();
    const {
      id,
      name,
      teachers
    } = request.body;
    const material = await updateMaterialService.execute({
      id,
      name,
      teachers
    });
    return response.json(material);
  }

}

var _default = MaterialsController;
exports.default = _default;