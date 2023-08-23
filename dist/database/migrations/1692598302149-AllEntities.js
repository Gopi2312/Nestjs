"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllEntities1692598302149 = void 0;
class AllEntities1692598302149 {
    constructor() {
        this.name = 'AllEntities1692598302149';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "post" ("post_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "post_name" character varying NOT NULL, CONSTRAINT "PK_4d093caee4d33b2745c7d05a41d" PRIMARY KEY ("post_id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_name" character varying NOT NULL, CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "post"`);
    }
}
exports.AllEntities1692598302149 = AllEntities1692598302149;
//# sourceMappingURL=1692598302149-AllEntities.js.map