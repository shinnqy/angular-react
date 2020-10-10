/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, NgZone, Renderer2, EventEmitter } from '@angular/core';
import { IRatingProps } from 'office-ui-fabric-react/lib/Rating';
export declare class FabRatingComponent extends ReactWrapperComponent<IRatingProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IRatingProps['componentRef'];
    rating?: IRatingProps['rating'];
    min?: IRatingProps['min'];
    max?: IRatingProps['max'];
    allowZeroStars?: IRatingProps['allowZeroStars'];
    icon?: IRatingProps['icon'];
    unselectedIcon?: IRatingProps['unselectedIcon'];
    size?: IRatingProps['size'];
    ariaLabelFormat?: IRatingProps['ariaLabelFormat'];
    ariaLabelId?: IRatingProps['ariaLabelId'];
    readOnly?: IRatingProps['readOnly'];
    getAriaLabel?: IRatingProps['getAriaLabel'];
    styles?: IRatingProps['styles'];
    theme?: IRatingProps['theme'];
    readonly onRatingChange: EventEmitter<{
        ev?: FocusEvent;
        rating?: number;
    }>;
    readonly onRatingChanged: EventEmitter<{
        rating?: number;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    onChange(ev?: React.FocusEvent<HTMLElement>, rating?: number): void;
    onChanged(rating?: number): void;
}
