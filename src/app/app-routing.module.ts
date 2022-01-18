import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [{
  path: '',
  component: DogsComponent,
},{
  path: 'dogs/:dogId',
  component: DogDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
