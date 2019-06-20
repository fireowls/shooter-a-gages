import { GageService } from './gages/services/gage.service';
import { GageListComponent } from './gages/gage-list.component';
import { GageModule } from './gages/gage.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GageModule
  ],
  providers: [GageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
