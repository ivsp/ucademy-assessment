import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI_DB, {
      connectionFactory: (connection) => {
        Logger.log('✅ Connected to MongoDB', 'DatabaseModule');
        return connection;
      },
    }),
  ],
})
export class DatabaseModule {}
