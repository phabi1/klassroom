import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      imports: [
        JwtModule.register({})
      ],
      driver: ApolloGatewayDriver,
      useFactory: (jwtService: JwtService) => {

        const handleAuth = ({ req }) => {

          const token = req.headers.authorization.replace('Bearer ', '');
          const payload = jwtService.decode(token);

          return {
            userId: payload.sub,
            authorization: req.headers.authorization
          }
        }

        return {
          server: {
            path: '/api/graphql',
            context: handleAuth
          },
          gateway: {
            buildService: ({ url }) => {
              return new RemoteGraphQLDataSource({
                url,
                willSendRequest({ request, context }: any) {
                  request.http.headers.set('X-User-Id', context.userId);
                  request.http.headers.set('Authorization', context.authorization);
                },
              });
            },
            supergraphSdl: new IntrospectAndCompose({
              subgraphs: [
                { name: 'spaces', url: 'http://server-spaces:3000/graphql' },
                { name: 'courses', url: 'http://server-courses:3000/graphql' },
              ],
            }),
          },

        }
      },
      inject: [JwtService]
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
