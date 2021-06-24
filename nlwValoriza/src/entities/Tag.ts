import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm";
import { v4 } from "uuid";

@Entity("tags")
export class Tag {

    // @PrimaryColumn()
    @PrimaryGeneratedColumn("uuid") // ao invés de usar um construtor, veremos o resultado desta coluna primária autogerada pelo typeorm
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
//     constructor() {
//         if (!this.id) this.id = v4()
//     }
}