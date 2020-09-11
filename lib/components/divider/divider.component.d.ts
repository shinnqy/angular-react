import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { IVerticalDividerProps } from 'office-ui-fabric-react/lib/Divider';
export declare class FabDividerComponent extends ReactWrapperComponent<IVerticalDividerProps> {
    protected reactNodeRef: ElementRef;
    getClassNames?: IVerticalDividerProps['getClassNames'];
    theme?: IVerticalDividerProps['theme'];
    styles?: IVerticalDividerProps['styles'];
    className?: IVerticalDividerProps['className'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
