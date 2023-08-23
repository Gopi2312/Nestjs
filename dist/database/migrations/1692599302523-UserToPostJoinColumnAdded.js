"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserToPostJoinColumnAdded1692599302523 = void 0;
class UserToPostJoinColumnAdded1692599302523 {
    constructor() {
        this.name = 'UserToPostJoinColumnAdded1692599302523';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_52378a74ae3724bcab44036645b" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_52378a74ae3724bcab44036645b"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "user_id"`);
    }
}
exports.UserToPostJoinColumnAdded1692599302523 = UserToPostJoinColumnAdded1692599302523;
//# sourceMappingURL=1692599302523-UserToPostJoinColumnAdded.js.map