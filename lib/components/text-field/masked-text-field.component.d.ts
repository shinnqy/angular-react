import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { FabBaseTextFieldComponent } from './base-text-field.component';
export declare class FabMaskedTextFieldComponent extends FabBaseTextFieldComponent {
    protected reactNodeRef: ElementRef;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
