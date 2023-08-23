"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alteredcolumn1692772582990 = void 0;
class Alteredcolumn1692772582990 {
    constructor() {
        this.name = 'Alteredcolumn1692772582990';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
    }
}
exports.Alteredcolumn1692772582990 = Alteredcolumn1692772582990;
//# sourceMappingURL=1692772582990-alteredcolumn.js.map