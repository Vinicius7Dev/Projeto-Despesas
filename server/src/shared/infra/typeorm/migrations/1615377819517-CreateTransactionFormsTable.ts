import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransactionFormsTable1615377819517
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transaction_forms',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'enabled',
                        type: 'boolean',
                        default: 'true',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '35',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transaction_forms');
    }
}
