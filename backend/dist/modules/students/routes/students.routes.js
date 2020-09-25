"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _StudentsController = _interopRequireDefault(require("../controllers/StudentsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const studentsController = new _StudentsController.default();
const studentsRouter = (0, _express.Router)();
studentsRouter.post("/", studentsController.create);
studentsRouter.post("/signin", studentsController.auth);
var _default = studentsRouter;
exports.default = _default;