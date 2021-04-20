import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings')
class setting{
    
    @PrimaryColumn()
    id: String;
    
    @Column()
    userName: setting;
    
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

export default{setting}