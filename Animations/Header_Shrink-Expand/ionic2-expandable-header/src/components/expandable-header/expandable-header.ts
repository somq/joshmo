import { Gesture } from 'ionic-angular/gestures/gesture';
import { Component, Input, ElementRef, Renderer, ContentChildren, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Item } from 'ionic-angular';
import { Content } from 'ionic-angular';

declare var Hammer: any;

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeader {
  @Output() onSwipeUp = new EventEmitter();
  @Output() onSwipeDown = new EventEmitter();

  @ContentChildren(Item, {read: ElementRef}) children: any;
  
  private el: HTMLElement;
  private swipeGesture: Gesture;
  private swipeDownGesture: Gesture;

  constructor(public element: ElementRef, public renderer: Renderer, ) {
      this.el = element.nativeElement;
  }

  ngOnInit() {
      this.swipeGesture = new Gesture(this.el, {
          recognizers: [
              [Hammer.Swipe, {direction: Hammer.DIRECTION_VERTICAL}]
          ]
      });

      let hammer = new window['Hammer'](this.element.nativeElement);
      hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
  
      hammer.on('pan', (ev) => {
        console.log(ev)
      });
      this.swipeGesture.listen();
      this.swipeGesture.on('pan', e => {
          this.onSwipeUp.emit({ el: this.el });
          this.renderer.setElementStyle(this.element.nativeElement, 'height', '50px');
          // TODO: Opacity 0/1 of child
          
          // this.children.forEach((child) => {
      
          //     let headerElement = child.nativeElement;
          //     let totalHeight = headerElement.offsetTop + headerElement.clientHeight;
        
          //     if(!headerElement.isHidden){
          //       headerElement.isHidden = true;
          //       this.renderer.setElementStyle(headerElement, 'opacity', '0');
          //     } else if (headerElement.isHidden) {
          //       headerElement.isHidden = false;
          //       this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
          //     }
      
          //   });
      });
      this.swipeGesture.on('swipedown', e => {
        console.log("SWIP DOWN:", e, this);
        this.renderer.setElementStyle(this.element.nativeElement, 'height', '200px');
          this.onSwipeDown.emit({ el: this.el });
      });
  }

  ngOnDestroy() {
      this.swipeGesture.destroy();
  }
  swip
 

}
