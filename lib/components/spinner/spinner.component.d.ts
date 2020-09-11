import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { ISpinnerProps } from 'office-ui-fabric-react/lib/Spinner';
export declare class FabSpinnerComponent extends ReactWrapperComponent<ISpinnerProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: ISpinnerProps['componentRef'];
    type?: ISpinnerProps['type'];
    size?: ISpinnerProps['size'];
    label?: ISpinnerProps['label'];
    className?: ISpinnerProps['className'];
    ariaLive?: ISpinnerProps['ariaLive'];
    ariaLabel?: ISpinnerProps['ariaLabel'];
    theme?: ISpinnerProps['theme'];
    styles?: ISpinnerProps['styles'];
    labelPosition?: ISpinnerProps['labelPosition'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
