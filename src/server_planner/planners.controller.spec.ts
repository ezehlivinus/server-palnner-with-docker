import { Test, TestingModule } from '@nestjs/testing';
import { PlannersController } from './planners.controller';

describe('PlannersController', () => {
  let controller: PlannersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlannersController],
    }).compile();

    controller = module.get<PlannersController>(PlannersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an object contain result: 1', () => {
    expect(
      controller.calculate({
        server: { CPU: 4, RAM: 8, HDD: 16 },
        vm: [{ CPU: 1, RAM: 2, HDD: 3 }],
      }),
    ).toEqual({ Result: 1 });
  });
});
