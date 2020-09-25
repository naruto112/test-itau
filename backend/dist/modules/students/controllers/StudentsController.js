"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateStudentService = _interopRequireDefault(require("../services/CreateStudentService"));

var _AuthStudentService = _interopRequireDefault(require("../services/AuthStudentService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StudentsController {
  async create(request, response) {
    const createStudentService = new _CreateStudentService.default();
    const {
      name,
      register
    } = request.body;
    const student = await createStudentService.execute({
      name,
      register
    });
    return response.json(student);
  }

  async auth(request, response) {
    const authStudentService = new _AuthStudentService.default();
    const {
      register
    } = request.body;
    const student = await authStudentService.execute({
      register
    });
    return response.json(student);
  }

}

var _default = StudentsController;
exports.default = _default;