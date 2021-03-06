import {Entity, Column, UpdateDateColumn, PrimaryColumn} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings')
export class Setting{
    
    @PrimaryColumn()
    id: String;
    
    @Column()
    userName: string;
    
    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;

    @UpdateDateColumn()
    created_at:Date;

    constructor(){
         if(!this.id){
            this.id = uuid();
         }
    }
}
