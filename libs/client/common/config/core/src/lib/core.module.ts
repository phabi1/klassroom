import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ConfigModuleOptions } from './interfaces/config-module-options.interface';
import { ConfigStaticLoader } from './loaders/static.loader';
import { CONFIG_LOADER } from './constants/tokens';
import { initializeConfig } from './initializers/config.initializer';

@NgModule({
  imports: [CommonModule]
})
export class ConfigModule {
  static forRoot(options?: ConfigModuleOptions): ModuleWithProviders<ConfigModule> {
    const provideLoader = options?.loader || { provide: CONFIG_LOADER, useValue: new ConfigStaticLoader({}) };
    return {
      ngModule: ConfigModule,
      providers: [
        ConfigService,
        provideLoader,
        ...((options?.initialize === true || options?.initialize === undefined) ?
          [
            {
              provide: APP_INITIALIZER,
              useFactory: initializeConfig,
              deps: [ConfigService],
              multi: true
            }
          ] : [])
      ]
    }
  }
}
