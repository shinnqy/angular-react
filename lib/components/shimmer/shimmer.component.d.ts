/// <reference types="react" />
import { InputRendererOptions, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { IShimmerElementsGroupProps } from 'office-ui-fabric-react/lib/components/Shimmer/ShimmerElementsGroup/ShimmerElementsGroup.types';
import { IShimmerProps } from 'office-ui-fabric-react/lib/Shimmer';
export declare class FabShimmerComponent extends ReactWrapperComponent<IShimmerProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IShimmerProps['componentRef'];
    width?: IShimmerProps['width'];
    isDataLoaded?: IShimmerProps['isDataLoaded'];
    shimmerElements?: IShimmerProps['shimmerElements'];
    ariaLabel?: IShimmerProps['ariaLabel'];
    styles?: IShimmerProps['styles'];
    className?: IShimmerProps['className'];
    theme?: IShimmerProps['theme'];
    shimmerColors?: IShimmerProps['shimmerColors'];
    renderCustomElementsGroup: InputRendererOptions<{}>;
    customElementsGroup?: React.ReactNode;
    private _renderCustomElementsGroup?;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
export declare class FabShimmerElementsGroupComponent extends ReactWrapperComponent<IShimmerElementsGroupProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IShimmerElementsGroupProps['componentRef'];
    rowHeight?: IShimmerElementsGroupProps['rowHeight'];
    shimmerElements?: IShimmerElementsGroupProps['shimmerElements'];
    flexWrap?: IShimmerElementsGroupProps['flexWrap'];
    width?: IShimmerElementsGroupProps['width'];
    theme?: IShimmerElementsGroupProps['theme'];
    backgroundColor?: IShimmerElementsGroupProps['backgroundColor'];
    styles?: IShimmerElementsGroupProps['styles'];
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
}
