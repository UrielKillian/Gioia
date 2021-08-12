import { IsBoolean, IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  readonly address: string;

  @IsBoolean()
  readonly active: boolean;
}
