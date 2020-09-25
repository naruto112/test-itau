"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStudents1600879673614 = void 0;

var _typeorm = require("typeorm");

class CreateStudents1600879673614 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "students",
      columns: [{
        name: "id",
        type: "varchar",
        isPrimary: true,
        generationStrategy: "uuid"
      }, {
        name: "name",
        type: "varchar(30)",
        isNullable: false
      }, {
        name: "register",
        type: "varchar(100)"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updated_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("students");
  }

}

exports.CreateStudents1600879673614 = CreateStudents1600879673614;