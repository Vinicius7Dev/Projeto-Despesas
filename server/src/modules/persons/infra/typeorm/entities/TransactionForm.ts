/**
 * Transaction Form Entity
 */

import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('transaction_forms')
class TransactionForm {
    @PrimaryColumn('uuid')
    public id: string;

    @Column('uuid')
    public person_id: string;

    @Column('boolean')
    public enabled: boolean;

    @Column()
    public title: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default TransactionForm;
