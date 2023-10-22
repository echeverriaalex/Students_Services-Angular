import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './Component/student-add/student-add.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { NotFoundPageComponent } from './Component/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'add', component: StudentAddComponent},
  {path: 'list', component: StudentListComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
