/**
 * User Entity
 */

import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('users')
class User {
    @PrimaryColumn('uuid')
    public id: string;

    @Column()
    public username: string;

    @Column()
    public password: string;

    @Column()
    public permission_level: string;

    @CreateDateColumn()
    public created_at: Date;

    constructor() {
        // Set the user id if it does not exists
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default User;
