import { ModuleWithProviders, NgModule } from '@angular/core';
import { GRAPHQL_OPTIONS } from './constants/tokens';
import { GraphqlModuleOptions } from './interfaces/graphql-module-options.interface';
import { GraphqlOptions } from './interfaces/graphql-options.interface';
import { GraphqlService } from './services/graphql.service';

@NgModule()
export class GraphqlModule {
  static forRoot(
    options: GraphqlModuleOptions
  ): ModuleWithProviders<GraphqlModule> {
    const opts: GraphqlOptions = { endpoint: options.endpoint || '/graphql' };
    return {
      ngModule: GraphqlModule,
      providers: [
        GraphqlService,
        {
          provide: GRAPHQL_OPTIONS,
          useValue: opts,
        },
      ],
    };
  }
}
