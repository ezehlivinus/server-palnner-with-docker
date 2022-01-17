import { Body, Controller, Post, Query } from '@nestjs/common';
import { IServerType } from './dto/create-server-type';
import { CreateVirtualMachineDto } from './dto/create-virtual-machines.dto';
import { CreateVMRequestBodyDto } from './dto/index.dto';
import { PlannersService } from './planners.service';

@Controller('server-plans')
export class PlannersController {
  constructor(private readonly plannersService: PlannersService) {}

  @Post()
  calculate(@Body() request: CreateVMRequestBodyDto) {
    return {
      Result: this.plannersService.create(request.server, request.vm),
    };
  }
}
