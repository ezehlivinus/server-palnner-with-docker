import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlannersModule } from './server_planner/planers.module';
import { PlannersService } from './server_planner/planners.service';

@Module({
  imports: [PlannersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
