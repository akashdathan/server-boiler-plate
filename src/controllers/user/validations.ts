import { ValidateNested, Length, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';

export class UserInfo {

  @IsEmail()
  email: string;

  @Length(2, 20)
  name: string;

  @Length(2, 20)
  role: string;

  @Length(2, 20)
  phone: string;
  
  @ValidateNested()
  @Type(() => Object)
  config: object;

}