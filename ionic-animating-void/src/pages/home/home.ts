import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	animations: [
		trigger('itemState', [
			transition('void => *', [
				style({transform: 'translateX(-100%)'}),
				animate('500ms ease-out')
			]),
			transition('* => void', [
				animate('500ms ease-in', style({transform: 'translateX(100%)'}))	
			])
		])
	]
})
export class HomePage {

	items: string[] = [];

	constructor(public navCtrl: NavController) {

	}

	addItem(){
		this.items.push('test');
	}

	deleteItem(item){
		this.items.splice(this.items.indexOf(item), 1);
	}

}
