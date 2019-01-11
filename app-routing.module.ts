import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientSearchComponent } from './patient-search/patient-search.component';

const routes: Routes = [
	
	{
    path: '',
   // component: AppComponent,
    children: [
      {
		path: 'LandingPage', 
		component : PatientSearchComponent
		},
	]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
