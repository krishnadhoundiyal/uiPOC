import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import the components
import { LogAuditsComponent } from './log-audits/log-audits.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';

const routes: Routes = [
	
	{
    path: '',
   // component: AppComponent,
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
		
	]
  },
];

@NgModule({
  //declarations : [LogAuditsComponent,PatientSearchComponent,GenerateReportsComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

