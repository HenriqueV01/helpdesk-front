import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para /home dentro de nav.
      {path: 'home', component: HomeComponent},
      {path: 'tecnicos', component: TecnicoListComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
