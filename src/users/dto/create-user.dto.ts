import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly cellphone: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}

// npm i class-validator
