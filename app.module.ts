import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatRadioModule,MatSelectModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { PatientSearchModule } from './patient-search/patient-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatFormFieldModule,
	MatInputModule,
	MatChipsModule,
	MatGridListModule,
	PatientSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
