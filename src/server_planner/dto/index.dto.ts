import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { IServerType } from './create-server-type';
import { CreateVirtualMachineDto } from './create-virtual-machines.dto';

export class CreateVMRequestBodyDto {
  @IsArray()
  readonly vm: CreateVirtualMachineDto[];

  @IsObject({
    message: '/Server/ must be an object and is required',
  })
  readonly server: IServerType;
}
