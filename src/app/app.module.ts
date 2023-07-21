import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/all/all.component';
import { PendingComponent } from './pages/pending/pending.component';
import { CompletedComponent } from './pages/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    PendingComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
