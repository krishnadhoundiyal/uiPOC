
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-log-audits',
  templateUrl: './log-audits.component.html',
  styleUrls: ['./log-audits.component.css']

})
export class LogAuditsComponent {
	toppings = new FormControl();
	toppingList: string[] = ['AT'];
	processingTypeList : string[] = ['CLIN','CLINH','CYTO','FRZ','FRZH','HSTO','NOHSYSN','PCSCLN'];
	qlsList : string[] = ['QLS ValidationVAL','QLS Upgrade PO','QLS Test SRT1','Other']

}

