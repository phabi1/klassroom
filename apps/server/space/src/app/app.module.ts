import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from '../config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceModule } from './space/space.module';
import { join } from 'path';
import courseConfig from '../config/course.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, load: [
        databaseConfig,
        courseConfig
      ]
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService]
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      introspection: true,
      autoSchemaFile: {
        path: join(process.cwd(), 'graphql', 'space.gql')
      },
    }),
    SpaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
