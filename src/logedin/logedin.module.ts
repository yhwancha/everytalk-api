import { Module } from '@nestjs/common';
import { LogedinService } from './logedin.service';
import { LogedinController } from './logedin.controller';

@Module({
  controllers: [LogedinController],
  providers: [LogedinService]
})
export class LogedinModule {}
