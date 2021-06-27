import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid"


@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    admin: boolean
    @Exclude()
    @Column()
    password: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = v4();
        }
    }

}

export { User }