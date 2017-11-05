import { Component, Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture'
declare var Hammer: any
/**
 * Generated class for the SwipeVerticalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'swipe-vertical',
  templateUrl: 'swipe-vertical.html'
})
export class SwipeVertical {

  text: string;
  @Input('swipeUp') actionUp: any;
  @Input('swipeDown') actionDown: any;

  private el: HTMLElement
  private swipeGesture: Gesture
  private swipeDownGesture: Gesture

  constructor(el: ElementRef) {
    this.el = el.nativeElement
  }

  ngOnInit() {
    this.swipeGesture = new Gesture(this.el, {
      recognizers: [
          [Hammer.Swipe, {direction: Hammer.DIRECTION_VERTICAL}]
      ]
    });
    this.swipeGesture.listen()
    this.swipeGesture.on('swipeup', e => {
      console.log('up');
        this.actionUp()
    })
    this.swipeGesture.on('swipedown', e => {
      console.log('down');
        this.actionDown()
    })
  }

  ngOnDestroy() {
    this.swipeGesture.destroy()
  }

}
