import { HomeComponent } from './calculover/container/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadoComponent } from './calculover/components/resultado/resultado.component';

const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "resultado", component: ResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
