import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRouteData } from './navigation-route-data';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
leftMenus = {
		  'Database Maintainece' : [],
		'Supervisor Menu' : ['Client Group Maintainece','Field Maintainece','Release Batch','Client Watch Maintainece (Ctrl + W)'],
		'Corp Support Menu' : ['Dest Out Sort Map','IVD Sort Code Maintainece'],
		'Order Entry' : ['J Station Order Entry','Electronic Station Order Entry','PSC Sample Recieve','TEST'],	  
		  }
leftMenus1 = [
		{
		  'route' : 'Database Maintainece',
		  'subroute' : [],
		 },
		 {
		'route' : 'Supervisor Menu',
		'subroute': ['Client Group Maintainece','Field Maintainece','Release Batch','Client Watch Maintainece (Ctrl + W)','Patient Watch Maintainece','Release Operator','Translation Services for Order Code','AP Maintainece Screen']
		},
		{
		'route' : 'Corp Support Menu',
		'subroute' : ['Dest Out Sort Map','IVD Sort Code Maintainece'],
		},
		{
		'route' : 'Order Entry',
		'subroute' : ['J Station Order Entry (Ctrl + J)','Electronic Station Order Entry (Ctrl + E)','PSC Sample Recieve (Ctrl + Q)','Router Lab Recieve (Ctrl + E)']
		},
		{
		'route' : 'Accession Operations',
		'subroute' : ['Display Screen (Ctrl + N)','Modify Accession (Ctrl + M)','Deferred Aliquot (Ctrl + D)','Label Reprint (Ctrl + R)','Print QPS Side Labels (Ctrl + S)','Specimen History(Ctrl + H)','Switch Printer Type']
		},
		{
		'route' : 'Batch Operations',
		'subroute' : ['Batch Detail (Ctrl + I)','Batch Director (Ctrl + Y)']
		},
		{
		'route' : 'Environment',
		'subroute' : ['Hot Keys Set Up (Ctrl + K)','Change Login Details (Ctrl + L)']
		}		
		  ]
	  
  ngOnInit() {
  }

}