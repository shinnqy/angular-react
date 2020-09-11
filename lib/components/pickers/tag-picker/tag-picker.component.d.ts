import { ChangeDetectorRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { ITag, ITagPickerProps } from 'office-ui-fabric-react/lib/Pickers';
import { FabBasePickerComponent } from '../base-picker/base-picker.component';
export declare class FabTagPickerComponent extends FabBasePickerComponent<ITag, ITagPickerProps> {
    protected reactNodeRef: ElementRef;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
