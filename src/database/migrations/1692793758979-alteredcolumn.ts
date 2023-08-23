import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692793758979 implements MigrationInterface {
    name = 'Alteredcolumn1692793758979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "post_order" TO "postorder"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "postorder" TO "post_order"`);
    }

}
