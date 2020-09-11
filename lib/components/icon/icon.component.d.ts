import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
export declare class FabIconComponent extends ReactWrapperComponent<IIconProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IIconProps['componentRef'];
    iconName?: IIconProps['iconName'];
    ariaLabel?: IIconProps['ariaLabel'];
    iconType?: IIconProps['iconType'];
    imageProps?: IIconProps['imageProps'];
    imageErrorAs?: IIconProps['imageErrorAs'];
    styles?: IIconProps['styles'];
    theme?: IIconProps['theme'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
