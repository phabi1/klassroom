import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigService } from '@klassroom/client/common/config/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './initializers/keycloak.initializer';
import { IsLoggedGuard } from './guards/is-logged.guard';

@NgModule({
  imports: [CommonModule, KeycloakAngularModule],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        IsLoggedGuard,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeKeycloak,
          multi: true,
          deps: [KeycloakService, ConfigService]
        }
      ]
    }
  }
}
