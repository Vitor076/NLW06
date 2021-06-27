import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, } from "typeorm";
import { v4 } from "uuid"
import { Tags } from "./Tags"
import { User } from "./User";
@Entity("compliments")
class Compliments {

    @PrimaryColumn()
    readonly id: string

    @Column()
    user_sender: string
    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    user_Sender: User

    @Column()
    user_receiver: string
    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    user_Receiver: User

    @Column()
    tags_id: string
    @JoinColumn({ name: "tags_id" })
    @ManyToOne(() => Tags)
    tags: Tags

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = v4();
        }
    }
}

export { Compliments }

