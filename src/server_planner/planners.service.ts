import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVirtualMachineDto } from './dto/create-virtual-machines.dto';
import { ServerType } from './entities/server.entity';

@Injectable()
export class PlannersService {
  create(_server: ServerType, _vm: CreateVirtualMachineDto[]) {
    const result = _vm.filter((element, index) => {
      if (
        _server.CPU >= element.CPU &&
        _server.RAM >= element.RAM &&
        _server.HDD >= element.HDD
      ) {
        _server.CPU -= element.CPU;
        _server.RAM -= element.RAM;
        _server.HDD -= element.HDD;

        return element;
      }
    });

    console.log(result.length);

    return result.length;
  }
}
