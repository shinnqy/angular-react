import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { IFabricProps } from 'office-ui-fabric-react/lib/Fabric';
export declare class FabFabricComponent extends ReactWrapperComponent<IFabricProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IFabricProps['componentRef'];
    theme?: IFabricProps['theme'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
