"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StudentsRepository = _interopRequireDefault(require("../repositories/StudentsRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthStudentService {
  async execute({
    register
  }) {
    const studentsRepository = new _StudentsRepository.default();
    const studentExists = await studentsRepository.findByRegister(register);

    if (!studentExists) {
      throw new _AppError.default("Not student exists", 401);
    }

    return studentExists;
  }

}

var _default = AuthStudentService;
exports.default = _default;