import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRouteData } from '../navigation-route-data';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  //styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	routeLinks : NavigationRouteData[];
	activeLinkIndex : -1;
	colorTheme : string;
	menuObject = {
		  'Reports' : {
			  'Referral' : ['Overdue','Pending'],
			  'Metrics' : ['Filters'],
			  
		  },
		  'Admin' : {
			  'QRT' : ['Admin']
			  
		  }
	  };
	 linker = {
		  'Overdue' : '/patientSearch',
		  'Pending' : '/generateReports',
			'Filters' : '/generateReports',
			'Admin' : '/logAudits'
	  }
	 
  constructor(private router:Router) {
	  this.colorTheme = "accent";
	  /*this.menuObject = {
		  'Reports' : {
			  'Referral' : ['Overdue','Pending'],
			  'Metrics' : ['Filters'],
			  
		  },
		  'Admin' : {
			  'QRT' : ['Admin']
			  
		  }
	  };
	  this.linker = {
		  'Overdue' : '/patientSearch',
		  'Pending' : '/generateReports',
			'Filters' : '/generateReports',
			'Admin' : '/logAudits'
	  }*/
	  this.routeLinks = [
			{
                label: 'Search',
                link: '/patientSearch',
                index: 0
            }, {
                label: 'Reports',
                link: '/generateReports',
                index: 1
            }, {
                label: 'Audit',
                link: '/logAudits',
                index: 2
            }];
	  }

  ngOnInit() {
	  this.router.events.subscribe((res) => {
		  //tab --> a variable that holds object of the array while find iterates over each object 
			//console.log(res.url);
			console.log(this.router);
            //this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
	  
  }

}
