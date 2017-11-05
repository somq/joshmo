import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items: any = new Array(10);

	constructor(public navCtrl: NavController) {

	}

	handleOverslide(item){
		console.log(item);
	}

}
