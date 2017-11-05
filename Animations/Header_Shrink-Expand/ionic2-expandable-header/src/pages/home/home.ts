import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	testData: any = new Array(1);
  @ViewChild(Content) content: Content;
  
  scrollDown() {
    this.content.scrollTo(0, 125, 300);
  }
	constructor(public navCtrl: NavController, public renderer: Renderer, public element: ElementRef) {

	}
  ionViewDidEnter(){
			this.scrollDown()
  }
  swiped(e) {
    console.log("swiped:", e);
    if(e.direction === 16) {
      console.log('swiped down.', this)
      this.renderer.setElementStyle(this.element.nativeElement, 'height', '30px');
    }
    console.log(this);
  }

}
