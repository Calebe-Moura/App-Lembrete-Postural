import { 
    BeforeInsert, 
    BeforeUpdate, 
    Column, 
    Entity, 
    Index, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { IsEmail, IsNotEmpty, IsEnum, IsBoolean } from "class-validator"; 
import { UserType } from '../enums/user.enum'

@Entity({
    name: 'user'
})
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({
        name: 'name',
        nullable: false
    })
    @IsNotEmpty()
    name: string;

    @Column({
        name: 'email',
        nullable: false,
        unique: true 
    })
    @IsEmail() 
    email: string;

    @Column({
        name: 'cpf',
        nullable: false
    })
    @IsNotEmpty()
    @Index({ 
        unique: true 
    })
    cpf: string;

    @Column({
        name: 'crefito',
        nullable: true,
    })
    @Index({ 
        unique: true 
    })
    crefito: string;

    @Column({
        name: 'password',
        nullable: false
    })
    @IsNotEmpty()
    password: string;

    @Column({
        name: 'type_user',
        nullable: false,
        enum: UserType,
        default: UserType.USER
    })
    @IsEnum(UserType)
    typeUser: number;
    
    @Column({
        name: 'created_at',
        nullable: false 
    })
    createdAt: Date;
    
    @Column({
        name: 'updated_at',
        nullable: true
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