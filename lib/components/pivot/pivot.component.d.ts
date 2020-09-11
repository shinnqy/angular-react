import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, QueryList, Renderer2 } from '@angular/core';
import { IPivotItemProps, IPivotProps, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import * as React from 'react';
export declare class FabPivotItemComponent extends ReactWrapperComponent<IPivotItemProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    disabled?: boolean;
    componentRef?: IPivotItemProps['componentRef'];
    headerText?: IPivotItemProps['headerText'];
    headerButtonProps?: IPivotItemProps['headerButtonProps'];
    itemKey?: IPivotItemProps['itemKey'];
    ariaLabel?: IPivotItemProps['ariaLabel'];
    itemCount?: IPivotItemProps['itemCount'];
    itemIcon?: IPivotItemProps['itemIcon'];
    keytipProps?: IPivotItemProps['keytipProps'];
    renderItemLink?: InputRendererOptions<IPivotItemProps>;
    onRenderItemLink: (props?: IPivotItemProps, defaultRender?: JsxRenderFunc<IPivotItemProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
}
export declare class FabPivotComponent extends ReactWrapperComponent<IPivotProps> {
    readonly PivotType: React.FunctionComponent<IPivotProps>;
    readonly PivotItemType: typeof PivotItem;
    protected reactNodeRef: ElementRef;
    pivotItems: QueryList<FabPivotItemComponent>;
    componentRef?: IPivotProps['componentRef'];
    styles?: IPivotProps['styles'];
    theme?: IPivotProps['theme'];
    className?: IPivotProps['className'];
    defaultSelectedKey?: IPivotProps['defaultSelectedKey'];
    defaultSelectedIndex?: IPivotProps['defaultSelectedIndex'];
    selectedKey?: IPivotProps['selectedKey'];
    linkSize?: IPivotProps['linkSize'];
    linkFormat?: IPivotProps['linkFormat'];
    headersOnly?: IPivotProps['headersOnly'];
    getTabId?: IPivotProps['getTabId'];
    children?: QueryList<FabPivotItemComponent>;
    readonly onLinkClick: EventEmitter<{
        item?: PivotItem;
        ev?: MouseEvent;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onLinkClickHandler(item?: PivotItem, ev?: React.MouseEvent<HTMLElement>): void;
}
