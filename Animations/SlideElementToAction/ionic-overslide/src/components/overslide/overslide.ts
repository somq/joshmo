import { Directive, Output, ElementRef, Renderer, EventEmitter } from '@angular/core';

@Directive({
	selector: '[overslide]',
	host: {
		'(ionDrag)': 'handleDrag($event)'
	}
})
export class Overslide {

	@Output() overslide: any = new EventEmitter();

	triggered: boolean = false;

	constructor(public element: ElementRef, public renderer: Renderer) {
		console.log('Hello Overslide Directive');
	}

	handleDrag(ev){

		if(Math.abs(ev.getSlidingPercent()) > 1.7 && !this.triggered){

			this.triggered = true;

			this.renderer.setElementStyle(this.element.nativeElement, 'transition', '0.3s linear');
			this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0');

			setTimeout(() => {
				this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
				this.overslide.emit(true);
			}, 300);

		}

	}

}
