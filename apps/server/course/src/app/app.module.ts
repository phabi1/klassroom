import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from '../config/database.config';
import messageBrokerConfig from '../config/message-broker.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [messageBrokerConfig, databaseConfig] }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService]
    }),
    CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
