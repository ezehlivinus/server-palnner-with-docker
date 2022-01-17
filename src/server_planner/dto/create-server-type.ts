import { IsNumber } from 'class-validator';

export class IServerType {
  @IsNumber()
  readonly CPU: number;

  @IsNumber()
  readonly RAM: number;

  @IsNumber()
  readonly HDD: number;
}
