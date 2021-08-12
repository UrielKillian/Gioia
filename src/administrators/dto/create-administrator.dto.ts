import { IsEmail, IsString } from 'class-validator';

export class CreateAdministratorDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly cellphone: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly DNI: string;
}
