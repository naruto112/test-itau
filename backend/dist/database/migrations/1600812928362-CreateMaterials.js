"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMaterials1600812928362 = void 0;

var _typeorm = require("typeorm");

class CreateMaterials1600812928362 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "materials",
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
    await queryRunner.dropTable("materials");
  }

}

exports.CreateMaterials1600812928362 = CreateMaterials1600812928362;