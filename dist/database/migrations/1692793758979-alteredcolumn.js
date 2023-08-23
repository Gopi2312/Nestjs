"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alteredcolumn1692793758979 = void 0;
class Alteredcolumn1692793758979 {
    constructor() {
        this.name = 'Alteredcolumn1692793758979';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "post_order" TO "postorder"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "postorder" TO "post_order"`);
    }
}
exports.Alteredcolumn1692793758979 = Alteredcolumn1692793758979;
//# sourceMappingURL=1692793758979-alteredcolumn.js.map