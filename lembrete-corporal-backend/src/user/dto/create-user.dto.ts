import { UserType } from "../enums/user.enum";

export class CreateUserDto {
  name:string;
  email:string;
  cpf:string;
  crefito:string;
  phone: string;
  isFisioterapeuta: boolean;
  password:string;
  type_user: UserType;
  created_at:string;
  updated_at:string;
}
