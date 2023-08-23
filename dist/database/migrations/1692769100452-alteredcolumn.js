"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alteredcolumn1692769100452 = void 0;
class Alteredcolumn1692769100452 {
    constructor() {
        this.name = 'Alteredcolumn1692769100452';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    }
}
exports.Alteredcolumn1692769100452 = Alteredcolumn1692769100452;
//# sourceMappingURL=1692769100452-alteredcolumn.js.map