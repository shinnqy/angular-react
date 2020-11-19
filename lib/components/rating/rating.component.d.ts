/// <reference types="react" />
import { InputRendererOptions, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, NgZone, Renderer2, EventEmitter, OnInit } from '@angular/core';
import { IRatingProps, IRatingStarProps } from 'office-ui-fabric-react/lib/Rating';
export declare class FabRatingComponent extends ReactWrapperComponent<IRatingProps> implements OnInit {
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
    renderStar?: InputRendererOptions<IRatingStarProps>;
    onRenderStar: (props?: IRatingStarProps) => JSX.Element;
    readonly onRatingChange: EventEmitter<{
        ev?: FocusEvent;
        rating?: number;
    }>;
    readonly onRatingChanged: EventEmitter<{
        rating?: number;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    onChange(ev?: React.FocusEvent<HTMLElement>, rating?: number): void;
    onChanged(rating?: number): void;
}
