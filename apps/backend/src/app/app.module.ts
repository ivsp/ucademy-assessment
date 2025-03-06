import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/Infrastructure/config/database.module';
import { StudentModule } from '../Students/students.module';

@Module({
	imports: [DatabaseModule, StudentModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
