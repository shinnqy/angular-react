/// <reference types="react" />
import { ReactWrapperComponent, JsxRenderFunc, InputRendererOptions } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, Renderer2, OnInit } from '@angular/core';
import { IProgressIndicatorProps } from 'office-ui-fabric-react/lib/ProgressIndicator';
export declare class FabProgressIndicatorComponent extends ReactWrapperComponent<IProgressIndicatorProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    ariaValueText?: IProgressIndicatorProps['ariaValueText'];
    barHeight?: IProgressIndicatorProps['barHeight'];
    className?: IProgressIndicatorProps['className'];
    renderProgress?: InputRendererOptions<IProgressIndicatorProps>;
    percentComplete?: IProgressIndicatorProps['percentComplete'];
    progressHidden?: IProgressIndicatorProps['progressHidden'];
    styles?: IProgressIndicatorProps['styles'];
    theme?: IProgressIndicatorProps['theme'];
    renderDescription: InputRendererOptions<{}>;
    description?: React.ReactNode;
    private _renderDescription?;
    renderLabel: InputRendererOptions<{}>;
    label?: React.ReactNode;
    private _renderLabel?;
    onRenderProgress: (props?: IProgressIndicatorProps, defaultRender?: JsxRenderFunc<IProgressIndicatorProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
}
