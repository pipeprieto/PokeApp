import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { FormComponent } from './components/form/form.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';

const routes: Routes = [
  {path:'', component:PokelistComponent},
  {path:'addPokemon',component:FormComponent},
  {path:'pokemon/:id',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
