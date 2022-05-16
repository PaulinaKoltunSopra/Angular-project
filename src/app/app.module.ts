import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { WeatherComponent } from './components/weather/weather.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { GreatnestReasonsComponent } from './components/greatnest-reasons/greatnest-reasons.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ReasonComponent } from './components/reason/reason.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/shared/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WeatherComponent,
    CompanyInfoComponent,
    GreatnestReasonsComponent,
    ContactComponent,
    ReasonComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
