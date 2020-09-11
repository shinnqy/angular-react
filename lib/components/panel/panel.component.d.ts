/// <reference types="react" />
import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IPanelHeaderRenderer, IPanelProps } from 'office-ui-fabric-react/lib/Panel';
export declare class FabPanelComponent extends ReactWrapperComponent<IPanelProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IPanelProps['componentRef'];
    isOpen?: IPanelProps['isOpen'];
    hasCloseButton?: IPanelProps['hasCloseButton'];
    isLightDismiss?: IPanelProps['isLightDismiss'];
    isHiddenOnDismiss?: IPanelProps['isHiddenOnDismiss'];
    isBlocking?: IPanelProps['isBlocking'];
    isFooterAtBottom?: IPanelProps['isFooterAtBottom'];
    headerText?: IPanelProps['headerText'];
    styles?: IPanelProps['styles'];
    theme?: IPanelProps['theme'];
    className?: IPanelProps['className'];
    type?: IPanelProps['type'];
    customWidth?: IPanelProps['customWidth'];
    closeButtonAriaLabel?: IPanelProps['closeButtonAriaLabel'];
    headerClassName?: IPanelProps['headerClassName'];
    elementToFocusOnDismiss?: IPanelProps['elementToFocusOnDismiss'];
    ignoreExternalFocusing?: IPanelProps['ignoreExternalFocusing'];
    forceFocusInsideTrap?: IPanelProps['forceFocusInsideTrap'];
    firstFocusableSelector?: IPanelProps['firstFocusableSelector'];
    focusTrapZoneProps?: IPanelProps['focusTrapZoneProps'];
    layerProps?: IPanelProps['layerProps'];
    componentId?: IPanelProps['componentId'];
    renderNavigation?: InputRendererOptions<IPanelProps>;
    renderNavigationContent?: InputRendererOptions<IPanelProps>;
    renderHeader?: InputRendererOptions<IPanelHeaderRenderContext>;
    renderBody?: InputRendererOptions<IPanelProps>;
    renderFooter?: InputRendererOptions<IPanelProps>;
    renderFooterContent?: InputRendererOptions<IPanelProps>;
    readonly onLightDismissClick: EventEmitter<void>;
    readonly onOpen: EventEmitter<void>;
    readonly onOpened: EventEmitter<void>;
    readonly onDismiss: EventEmitter<{
        ev?: Event;
    }>;
    readonly onDismissed: EventEmitter<void>;
    private _renderHeader;
    onRenderNavigation: (props?: IPanelProps, defaultRender?: JsxRenderFunc<IPanelProps>) => JSX.Element;
    onRenderNavigationContent: (props?: IPanelProps, defaultRender?: JsxRenderFunc<IPanelProps>) => JSX.Element;
    onRenderBody: (props?: IPanelProps, defaultRender?: JsxRenderFunc<IPanelProps>) => JSX.Element;
    onRenderFooter: (props?: IPanelProps, defaultRender?: JsxRenderFunc<IPanelProps>) => JSX.Element;
    onRenderFooterContent: (props?: IPanelProps, defaultRender?: JsxRenderFunc<IPanelProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    onRenderHeader(props?: IPanelProps, defaultRender?: IPanelHeaderRenderer, headerTextId?: string | undefined): JSX.Element;
    onDismissHandler(ev?: React.SyntheticEvent<HTMLElement>): void;
}
/**
 * Counterpart of `IPanelHeaderRenderer`.
 */
export interface IPanelHeaderRenderContext {
    props?: IPanelProps;
    headerTextId?: string | undefined;
}
