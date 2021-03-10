/**
 * Person Entity
 */

import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('persons')
class Person {
    @PrimaryColumn('uuid')
    public id: string;

    @Column('boolean')
    public enabled: boolean;

    @Column()
    public name: string;

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

export default Person;
