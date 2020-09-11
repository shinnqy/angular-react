import { InputRendererOptions, Omit, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { IExpandingCardProps, IHoverCardProps, IPlainCardProps } from 'office-ui-fabric-react/lib/HoverCard';
export declare class FabHoverCardComponent extends ReactWrapperComponent<IHoverCardProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IHoverCardProps['componentRef'];
    className?: IHoverCardProps['className'];
    theme?: IHoverCardProps['theme'];
    type?: IHoverCardProps['type'];
    setAriaDescribedBy?: IHoverCardProps['setAriaDescribedBy'];
    cardOpenDelay?: IHoverCardProps['cardOpenDelay'];
    cardDismissDelay?: IHoverCardProps['cardDismissDelay'];
    expandedCardOpenDelay?: IHoverCardProps['expandedCardOpenDelay'];
    sticky?: IHoverCardProps['sticky'];
    instantOpenOnClick?: IHoverCardProps['instantOpenOnClick'];
    styles?: IHoverCardProps['styles'];
    target?: IHoverCardProps['target'];
    eventListenerTarget?: IHoverCardProps['eventListenerTarget'];
    trapFocus?: IHoverCardProps['trapFocus'];
    shouldBlockHoverCard?: () => boolean;
    setInitialFocus?: IHoverCardProps['setInitialFocus'];
    openHotKey?: IHoverCardProps['openHotKey'];
    expandingCardOptions: IExpandingCardOptions;
    plainCardOptions: IPlainCardOptions;
    readonly onCardVisible: EventEmitter<void>;
    readonly onCardHide: EventEmitter<void>;
    readonly onCardExpand: EventEmitter<void>;
    transformedExpandingCardProps: IExpandingCardProps;
    private _expandingCardOptions;
    transformedPlainCardProps: IPlainCardProps;
    private _plainCardOptions;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    private _transformExpandingCardOptionsToProps;
    private _transformPlainCardOptionsToProps;
}
/**
 * Counterpart of `IExpandingCardProps`, with Angular adjustments.
 */
export interface IExpandingCardOptions extends Omit<IExpandingCardProps, 'onRenderCompactCard' | 'onRenderExpandedCard'> {
    readonly renderCompactCard?: InputRendererOptions<RenderCardContext<IExpandingCardProps>>;
    readonly renderExpandedCard?: InputRendererOptions<RenderCardContext<IExpandingCardProps>>;
}
export interface IPlainCardOptions extends Omit<IPlainCardProps, 'onRenderPlainCard'> {
    readonly renderPlainCard?: InputRendererOptions<RenderCardContext<IPlainCardProps>>;
}
export interface RenderCardContext<T = any> {
    readonly data: T;
}
