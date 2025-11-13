import { UserType } from "../enums/user.enum";

export interface CreateUserDto{
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    type_user:UserType;
    crefito: string;
    isFisioterapeuta: boolean;
}