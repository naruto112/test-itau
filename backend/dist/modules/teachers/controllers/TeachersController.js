"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateTeacherService = _interopRequireDefault(require("../services/CreateTeacherService"));

var _ShowTeachersService = _interopRequireDefault(require("../services/ShowTeachersService"));

var _UpdateTeacherService = _interopRequireDefault(require("../services/UpdateTeacherService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TeachersController {
  async create(request, response) {
    const createTeacherService = new _CreateTeacherService.default();
    const {
      name,
      age,
      materials
    } = request.body;
    const teacher = await createTeacherService.execute({
      name,
      age,
      materials
    });
    return response.json(teacher);
  }

  async show(request, response) {
    const showTeachersService = new _ShowTeachersService.default();
    const teachers = await showTeachersService.execute();
    return response.json(teachers);
  }

  async update(request, response) {
    const updateTeacherService = new _UpdateTeacherService.default();
    const {
      id,
      name,
      age,
      materials
    } = request.body;
    const teacher = await updateTeacherService.execute({
      id,
      name,
      age,
      materials
    });
    return response.json(teacher);
  }

}

var _default = TeachersController;
exports.default = _default;