import { Test, TestingModule } from '@nestjs/testing';
import { LogedinService } from './logedin.service';

describe('LogedinService', () => {
  let service: LogedinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogedinService],
    }).compile();

    service = module.get<LogedinService>(LogedinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
