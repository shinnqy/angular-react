/// <reference types="react" />
import { InputRendererOptions, ReactWrapperComponent, JsxRenderFunc } from '@angular-react/core';
import { ElementRef, EventEmitter, OnInit, ChangeDetectorRef, Renderer2, NgZone } from '@angular/core';
import { IExpandingCardProps } from 'office-ui-fabric-react/lib/HoverCard';
export declare class FabExpandingCardComponent extends ReactWrapperComponent<IExpandingCardProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: IExpandingCardProps['componentRef'];
    className?: IExpandingCardProps['className'];
    directionalHint?: IExpandingCardProps['directionalHint'];
    directionalHintFixed?: IExpandingCardProps['directionalHintFixed'];
    firstFocus?: IExpandingCardProps['firstFocus'];
    gapSpace?: IExpandingCardProps['gapSpace'];
    renderData?: IExpandingCardProps['renderData'];
    styles?: IExpandingCardProps['styles'];
    targetElement?: IExpandingCardProps['targetElement'];
    theme?: IExpandingCardProps['theme'];
    trapFocus?: IExpandingCardProps['trapFocus'];
    compactCardHeight?: IExpandingCardProps['compactCardHeight'];
    expandedCardHeight?: IExpandingCardProps['expandedCardHeight'];
    mode?: IExpandingCardProps['mode'];
    renderCompactCard?: InputRendererOptions<IExpandingCardProps>;
    renderExpandedCard?: InputRendererOptions<IExpandingCardProps>;
    readonly onEnter: EventEmitter<void>;
    readonly onLeave: EventEmitter<void>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    onRenderCompactCard: (props?: IExpandingCardProps, defaultRender?: JsxRenderFunc<IExpandingCardProps>) => JSX.Element;
    onRenderExpandedCard: (props?: IExpandingCardProps, defaultRender?: JsxRenderFunc<IExpandingCardProps>) => JSX.Element;
    ngOnInit(): void;
}
