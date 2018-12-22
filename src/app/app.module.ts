import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialSharedModule } from './material-shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* --- NgRx & State Related --- */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, metaReducers } from './state';
import { CustomSerializer } from  '@state/utils/custom-router-state-serializer';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({name: 'NgRx Movies', maxAge: 30}) : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
