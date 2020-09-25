"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TeachersRepository = _interopRequireDefault(require("../repositories/TeachersRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowTeachersService {
  async execute() {
    const teachersRepository = new _TeachersRepository.default();
    const teachers = await teachersRepository.findAll();
    return teachers;
  }

}

var _default = ShowTeachersService;
exports.default = _default;