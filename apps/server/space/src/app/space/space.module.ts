import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentSpaceSchema } from './entities/parent-space.entity';
import { SpaceSchema } from './entities/space.entity';
import { StudentSpaceSchema } from './entities/student-space.entity';
import { TeacherSpaceSchema } from './entities/teacher-space.entity';
import { SpaceResolver } from './resolvers/space.resolver';
import { SpaceService } from './services/space.service';

@Module({
  imports: [
    ClientsModule.registerAsync([{
      name: 'course', useFactory: (configService: ConfigService) => {
        return {
          transport: Transport.RMQ, options: configService.get('course')
        }
      },
      inject: [ConfigService]
    }]),
    MongooseModule.forFeature([{
      name: 'Space',
      schema: SpaceSchema,
      discriminators: [
        { name: 'Parent', schema: ParentSpaceSchema },
        { name: 'Student', schema: StudentSpaceSchema },
        { name: 'Teacher', schema: TeacherSpaceSchema },
      ]
    }
    ])],
  providers: [SpaceResolver, SpaceService],
})
export class SpaceModule { }
