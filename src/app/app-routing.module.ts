import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './Component/student-add/student-add.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { HomePageComponent } from './Component/home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'add', component: StudentAddComponent},
  {path: 'list', component: StudentListComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
