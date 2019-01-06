import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
//featured modules
import { LogAuditsModule } from '../log-audits/log-audits.module';
import { PatientSearchModule } from '../patient-search/patient-search.module';
import { GenerateReportsModule } from '../generate-reports/generate-reports.module';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
	MatMenuModule,
	MatButtonModule,
    NavigationRoutingModule,
	LogAuditsModule,
	PatientSearchModule,
	GenerateReportsModule,
  ]
})
export class NavigationModule { }
