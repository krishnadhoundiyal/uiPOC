import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { NavigationModule } from './navigation/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';;
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
//featured modules
import { LogAuditsModule } from './log-audits/log-audits.module';
import { PatientSearchModule } from './patient-search/patient-search.module';
import { GenerateReportsModule } from './generate-reports/generate-reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	CommonModule,
    BrowserModule,
	BrowserAnimationsModule,
	MatToolbarModule,
	MatMenuModule,
	MatButtonModule,
	MatIconModule,
    AppRoutingModule,
	LogAuditsModule,
	PatientSearchModule,
	MatSidenavModule,
	MatListModule,
	GenerateReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
