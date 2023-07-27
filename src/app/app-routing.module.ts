import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { CreationComponent } from './components/operators/creation/creation.component';
import { JoinCreationComponent } from './components/operators/join-creation/join-creation.component';

const routes: Routes = [
  { path: 'observables', component: ObservablesComponent},
  { path: 'operators', component: OperatorsComponent, 
    children: [
      { path: "creation", component: CreationComponent},
      { path: "joincreation", component: JoinCreationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
