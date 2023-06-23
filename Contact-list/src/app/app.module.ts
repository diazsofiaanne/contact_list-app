import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactFormComponent } from './contact-home/contact-form/contact-form.component';
import { ContactListComponent } from './contact-home/contact-list/contact-list.component';
import { ErrorComponent } from './error/error.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    ContactFormComponent,
    ContactListComponent,
    ErrorComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
