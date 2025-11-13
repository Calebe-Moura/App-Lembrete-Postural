import { 
    BeforeInsert, 
    BeforeUpdate, 
    Column, 
    Entity, 
    Index, 
    PrimaryGeneratedColumn 
} from "typeorm";

import {UserType} from '../enums/user.enum'

@Entity({
    name: 'user'
})
export class UserEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({
        name:'name',
        nullable:false})
    name: string;

    @IsEmail()
    @Column({
        name:'email',
        nullable:false,
        unique: true 
    })
    email: string;

    @Column({
        name:'cpf',
        nullable:false})
    @Index({ 
        unique: true 
    })
    cpf: string;

    @Column({
        name:'crefito',
        nullable:true,
    })
    @Index({ 
        unique: true 
    })
    crefito: string;

    @Column({
        name: 'isFisioterapeuta', 
        nullable:false,
        default: false
    })
    isFisioterapeuta: boolean;

    @Column({
        name:'password',
        nullable:false})
    password: string;

    @Column({
        name:'type_user',
        nullable:false,
        enum: UserType,
        default: UserType.USER
    })
    typeUser: number;
    
    @Column({
        name: 'created_at',
        nullable:false 
    })
    createdAt: Date;
    
    @Column({
        name: 'updated_at',
        nullable:true
    })
    updatedAt: Date;

    @BeforeInsert()
    setCreatedAt() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    setUpdatedAt() {
        this.updatedAt = new Date();
    }
}

function IsEmail(): (target: UserEntity, propertyKey: "email") => void {
    throw new Error("Function not implemented.");
}
