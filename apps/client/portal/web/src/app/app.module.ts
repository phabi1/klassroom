import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@klassroom/client/common/auth';
import { CONFIG_LOADER, ConfigModule } from '@klassroom/client/common/config/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { configFactory } from './factories/config.factory';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ConfigModule.forRoot({
      loader: {
        provide: CONFIG_LOADER,
        useFactory: configFactory,
        deps: [HttpClient]
      }
    }),
    AuthModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
