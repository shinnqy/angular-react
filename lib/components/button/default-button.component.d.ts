import { ChangeDetectorRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
export declare class FabDefaultButtonComponent extends FabBaseButtonComponent {
    protected reactNodeRef: ElementRef;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
