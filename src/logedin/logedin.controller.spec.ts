import { Test, TestingModule } from '@nestjs/testing';
import { LogedinController } from './logedin.controller';
import { LogedinService } from './logedin.service';

describe('LogedinController', () => {
  let controller: LogedinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogedinController],
      providers: [LogedinService],
    }).compile();

    controller = module.get<LogedinController>(LogedinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
