"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _MaterialsController = _interopRequireDefault(require("../controllers/MaterialsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const materialsRouter = (0, _express.Router)();
const materialsController = new _MaterialsController.default();
materialsRouter.post("/", materialsController.create);
materialsRouter.get("/", materialsController.show);
materialsRouter.put("/", materialsController.update);
var _default = materialsRouter;
exports.default = _default;