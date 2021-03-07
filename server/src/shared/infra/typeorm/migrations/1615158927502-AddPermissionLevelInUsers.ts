import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddPermissionLevelInUsers1615158927502
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'permission_level',
                type: 'VARCHAR',
                default: 'USER',
                length: '15',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'permission_level');
    }
}
