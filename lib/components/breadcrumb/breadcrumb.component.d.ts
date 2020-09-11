/// <reference types="react" />
import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { IBreadcrumbItem, IBreadcrumbProps } from 'office-ui-fabric-react/lib/Breadcrumb';
export declare class FabBreadcrumbComponent extends ReactWrapperComponent<IBreadcrumbProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IBreadcrumbProps['componentRef'];
    items: IBreadcrumbProps['items'];
    className?: IBreadcrumbProps['className'];
    dividerAs?: IBreadcrumbProps['dividerAs'];
    maxDisplayedItems?: IBreadcrumbProps['maxDisplayedItems'];
    ariaLabel?: IBreadcrumbProps['ariaLabel'];
    overflowAriaLabel?: IBreadcrumbProps['overflowAriaLabel'];
    overflowIndex?: IBreadcrumbProps['overflowIndex'];
    styles?: IBreadcrumbProps['styles'];
    theme?: IBreadcrumbProps['theme'];
    focusZoneProps?: IBreadcrumbProps['focusZoneProps'];
    tooltipHostProps?: IBreadcrumbProps['tooltipHostProps'];
    renderItem?: InputRendererOptions<IBreadcrumbItem>;
    onReduceData?: IBreadcrumbProps['onReduceData'];
    onRenderItem: (props?: IBreadcrumbItem, defaultRender?: JsxRenderFunc<IBreadcrumbItem>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
}
