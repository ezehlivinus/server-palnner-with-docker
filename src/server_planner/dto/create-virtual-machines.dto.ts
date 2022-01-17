import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateVirtualMachineDto {
  @IsNumber()
  readonly CPU: number;

  @IsNumber()
  readonly RAM: number;

  @IsNumber()
  readonly HDD: number;
}
