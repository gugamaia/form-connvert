import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { FinalmessageComponent } from './components/finalmessage/finalmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppFormComponent,
    FinalmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
