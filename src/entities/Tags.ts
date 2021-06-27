import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid"
import { Expose } from "class-transformer"

@Entity("tags")
class Tags {
    @PrimaryColumn()
    readonly id: string
    @Column()
    name: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @Expose({ name: "#" })
    nameCustom(): string {
        return `#${this.name}`
    }


    constructor() {
        if (!this.id) {
            this.id = v4();
        }
    }

}
export { Tags }