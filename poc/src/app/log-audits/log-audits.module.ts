import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogAuditsComponent } from './log-audits.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatRadioModule,MatSelectModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [LogAuditsComponent],
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatFormFieldModule,
	MatInputModule,
	MatChipsModule
  ]
})
export class LogAuditsModule { }
