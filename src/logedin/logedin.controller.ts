import { Controller } from '@nestjs/common';
import { LogedinService } from './logedin.service';

@Controller('logedin')
export class LogedinController {
  constructor(private readonly logedinService: LogedinService) {}
}
