"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TeachersController = _interopRequireDefault(require("../controllers/TeachersController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const teachersRouter = (0, _express.Router)();
const teachersController = new _TeachersController.default();
teachersRouter.post("/", teachersController.create);
teachersRouter.get("/", teachersController.show);
teachersRouter.put("/", teachersController.update);
var _default = teachersRouter;
exports.default = _default;