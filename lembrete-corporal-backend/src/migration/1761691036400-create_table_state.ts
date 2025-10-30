import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableState1761691036400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(``);
    }

}
