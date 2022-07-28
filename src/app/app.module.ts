import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckEventAllComponent } from './components/check-event-all/check-event-all.component';
import { CheckEventReactiveComponent } from './components/check-event-reactive/check-event-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckEventAllComponent,
    CheckEventReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
