import { UserType } from "../enums/user.enum";

export class CreateUserDto {
  id:number;
  name:string;
  email:string;
  cpf:string;
  crefito:string;
  phone: string;
  password:string;
  type_user: UserType;
  created_at:string;
  updated_at:string;
}
