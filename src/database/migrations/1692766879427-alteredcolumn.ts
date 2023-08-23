import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteredcolumn1692766879427 implements MigrationInterface {
    name = 'Alteredcolumn1692766879427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phonenumber" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phonenumber"`);
    }

}
