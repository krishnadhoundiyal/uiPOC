import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientSearchComponent } from './patient-search.component';
import {MatTabsModule} from '@angular/material/tabs'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [PatientSearchComponent],
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatTabsModule,
	MatExpansionModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatGridListModule
  ]
})
export class PatientSearchModule { }
