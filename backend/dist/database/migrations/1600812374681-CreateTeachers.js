"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTeachers1600812374681 = void 0;

var _typeorm = require("typeorm");

class CreateTeachers1600812374681 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "teachers",
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
        name: "age",
        type: "int(3)"
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
    await queryRunner.dropTable("teachers");
  }

}

exports.CreateTeachers1600812374681 = CreateTeachers1600812374681;