import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddPersonIdColumnToTransactionForms1615385316480
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'transaction_forms',
            new TableColumn({
                name: 'person_id',
                type: 'uuid',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('transaction_forms', 'person_id');
    }
}
