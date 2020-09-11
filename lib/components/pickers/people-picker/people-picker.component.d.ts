import { ChangeDetectorRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { FabBasePickerComponent } from '../base-picker/base-picker.component';
import { IPeoplePickerProps } from 'office-ui-fabric-react/lib/Pickers';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
export declare class FabPeoplePickerComponent extends FabBasePickerComponent<IPersonaProps, IPeoplePickerProps> {
    protected reactNodeRef: ElementRef;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
