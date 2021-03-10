import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class PersonsTableEnableTrueDefault1615378027900
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'persons',
            'enabled',
            new TableColumn({
                name: 'enabled',
                type: 'boolean',
                default: 'false',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'persons',
            'enabled',
            new TableColumn({
                name: 'enabled',
                type: 'boolean',
            }),
        );
    }
}
