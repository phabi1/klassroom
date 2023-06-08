import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@klassroom/client/common/auth';
import {
  CONFIG_LOADER,
  ConfigModule,
} from '@klassroom/client/common/config/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { configFactory } from './factories/config.factory';
import { GraphqlModule } from '@klassroom/client/common/graphql';
import { SpaceStoreModule } from '@klassroom/client/store/space';
import { WaitingComponent } from './components/waiting/waiting.component';

@NgModule({
  declarations: [AppComponent, WaitingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ConfigModule.forRoot({
      loader: {
        provide: CONFIG_LOADER,
        useFactory: configFactory,
        deps: [HttpClient],
      },
    }),
    AuthModule.forRoot(),
    GraphqlModule.forRoot({ endpoint: '/api/graphql' }),
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    SpaceStoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
