"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alteredcolumn1692792308348 = void 0;
class Alteredcolumn1692792308348 {
    constructor() {
        this.name = 'Alteredcolumn1692792308348';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ADD "post_order" integer`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_order"`);
    }
}
exports.Alteredcolumn1692792308348 = Alteredcolumn1692792308348;
//# sourceMappingURL=1692792308348-alteredcolumn.js.map