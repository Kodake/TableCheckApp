import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckEventConditionComponent } from './components/check-event-condition/check-event-condition.component';
import { CheckEventAllComponent } from './components/check-event-all/check-event-all.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckEventConditionComponent,
    CheckEventAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
