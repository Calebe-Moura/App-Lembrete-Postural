import { UserType } from "../enums/user.enum";

export interface User{
    id: number;
    name:string;
    email:string;
    cpf:string;
    crefito:string;
    password:string;
    type_user: UserType;
    created_at:string;
    updated_at:string;
}