import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692769100452 implements MigrationInterface {
    name = 'Alteredcolumn1692769100452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    }

}
