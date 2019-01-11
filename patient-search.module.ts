import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientSearchComponent } from './patient-search.component';
import {MatTabsModule} from '@angular/material/tabs'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';;

import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [PatientSearchComponent],
  imports: [
    CommonModule,
	BrowserModule,
	FormsModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	MatTabsModule,
	MatExpansionModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatGridListModule,
	FlexLayoutModule,
	MatSidenavModule,
	MatListModule,
	MatMenuModule,
	MatToolbarModule,
	MatButtonModule
  ]
})
export class PatientSearchModule { }
