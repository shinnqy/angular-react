import { ChangeDetectorRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { FabBaseComboBoxComponent } from './base-combo-box.component';
export declare class FabComboBoxComponent extends FabBaseComboBoxComponent {
    protected reactNodeRef: ElementRef;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
