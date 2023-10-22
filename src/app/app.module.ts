import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { StudentAddComponent } from './Component/student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { StudentViewComponent } from './Component/student-view/student-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentViewComponent,
    NavbarComponent,
    HomePageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


