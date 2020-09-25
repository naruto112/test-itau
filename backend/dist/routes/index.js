"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _teachers = _interopRequireDefault(require("../modules/teachers/routes/teachers.routes"));

var _materials = _interopRequireDefault(require("../modules/materials/routes/materials.routes"));

var _students = _interopRequireDefault(require("../modules/students/routes/students.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use("/teachers", _teachers.default);
routes.use("/materials", _materials.default);
routes.use("/students", _students.default);
var _default = routes;
exports.default = _default;