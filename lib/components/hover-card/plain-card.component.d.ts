/// <reference types="react" />
import { InputRendererOptions, ReactWrapperComponent, JsxRenderFunc } from '@angular-react/core';
import { ElementRef, EventEmitter, OnInit, ChangeDetectorRef, Renderer2, NgZone } from '@angular/core';
import { IPlainCardProps } from 'office-ui-fabric-react/lib/HoverCard';
export declare class FabPlainCardComponent extends ReactWrapperComponent<IPlainCardProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef: IPlainCardProps['componentRef'];
    className: IPlainCardProps['className'];
    directionalHint: IPlainCardProps['directionalHint'];
    directionalHintFixed: IPlainCardProps['directionalHintFixed'];
    firstFocus: IPlainCardProps['firstFocus'];
    gapSpace: IPlainCardProps['gapSpace'];
    renderData: IPlainCardProps['renderData'];
    styles: IPlainCardProps['styles'];
    targetElement: IPlainCardProps['targetElement'];
    theme: IPlainCardProps['theme'];
    trapFocus: IPlainCardProps['trapFocus'];
    renderPlainCard?: InputRendererOptions<IPlainCardProps>;
    readonly onEnter: EventEmitter<void>;
    readonly onLeave: EventEmitter<void>;
    onRenderPlainCard: (props?: IPlainCardProps, defaultRender?: JsxRenderFunc<IPlainCardProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
}
