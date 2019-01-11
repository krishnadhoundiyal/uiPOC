import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toppings = new FormControl();
  showLogin: boolean = true;
  
	toppingList: string[] = ['AT'];
	processingTypeList : string[] = ['CLIN','CLINH','CYTO','FRZ','FRZH','HSTO','NOHSYSN','PCSCLN'];
	qlsList : string[] = ['QLS ValidationVAL','QLS Upgrade PO','QLS Test SRT1','Other'];
	constructor(private router:Router) {
	}
	public navigate(event) {
    this.showLogin = false;
	this.router.navigate(['./LandingPage']);
  }
}
