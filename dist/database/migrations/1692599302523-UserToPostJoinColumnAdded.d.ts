import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UserToPostJoinColumnAdded1692599302523 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
