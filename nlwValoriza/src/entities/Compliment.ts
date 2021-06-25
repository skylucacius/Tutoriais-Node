import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,JoinColumn, ManyToOne} from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
export class Compliment {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    user_receiver: string;
    
    @JoinColumn({name:"user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    user_sender: string;

    @JoinColumn({name:"user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    tag_id: string;

    @JoinColumn({name:"tag_id"})
    @ManyToOne(() => Tag)
    tagId: Tag;

    @Column()
    messsage: string;

    @CreateDateColumn()
    created_at: Date;

}