import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFkPersonsAndTransactionForms1615385440807
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'transaction_forms',
            new TableForeignKey({
                name: 'fk_persons_transaction_forms',
                columnNames: ['person_id'],
                referencedTableName: 'persons',
                referencedColumnNames: ['id'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'transaction_forms',
            'fk_persons_transaction_forms',
        );
    }
}
