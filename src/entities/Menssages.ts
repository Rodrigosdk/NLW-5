import { Entity, Column, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User';

@Entity('Menssages')
export class Menssages{
    
    @PrimaryColumn()
    id: String;
    
    @Column()
    admin_id: string;

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    user: User
    
    @Column()
    user_id: string;

    @Column()
    text: string;

    @UpdateDateColumn()
    created_at:Date;

    constructor(){
         if(!this.id){
            this.id = uuid();
         }
    }
}
