import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputformComponent } from './inputform/inputform.component';


const routes: Routes = [
  {path: "input", component: InputformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
