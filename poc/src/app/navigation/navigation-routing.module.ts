import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import the components
import { LogAuditsComponent } from '../log-audits/log-audits.component';
import { PatientSearchComponent } from '../patient-search/patient-search.component';
import { GenerateReportsComponent } from '../generate-reports/generate-reports.component';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
	
	{
    path: '',
    component: NavigationComponent,
    children: [
      {
		path: 'patientSearch', 
		component : PatientSearchComponent
		},
		{
			path : 'generateReports',
			component : GenerateReportsComponent,
		},
		{
			path : 'logAudits',
			component : LogAuditsComponent
		},
		{
			path : '**',
			component : PatientSearchComponent
		}
	]
  },
];

@NgModule({
  //declarations : [LogAuditsComponent,PatientSearchComponent,GenerateReportsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
