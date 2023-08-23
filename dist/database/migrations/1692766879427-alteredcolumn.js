"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alteredcolumn1692766879427 = void 0;
class Alteredcolumn1692766879427 {
    constructor() {
        this.name = 'Alteredcolumn1692766879427';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "phonenumber" integer NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phonenumber"`);
    }
}
exports.Alteredcolumn1692766879427 = Alteredcolumn1692766879427;
//# sourceMappingURL=1692766879427-alteredcolumn.js.map