import { InputRendererOptions, Omit, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { ITooltipHostProps, ITooltipProps } from 'office-ui-fabric-react/lib/Tooltip';
export declare class FabTooltipHostComponent extends ReactWrapperComponent<ITooltipHostProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: ITooltipHostProps['componentRef'];
    closeDelay?: ITooltipHostProps['closeDelay'];
    calloutProps?: ITooltipHostProps['calloutProps'];
    content?: ITooltipHostProps['content'];
    delay?: ITooltipHostProps['delay'];
    directionalHint?: ITooltipHostProps['directionalHint'];
    directionalHintForRTL?: ITooltipHostProps['directionalHintForRTL'];
    hostClassName?: ITooltipHostProps['hostClassName'];
    overflowMode?: ITooltipHostProps['overflowMode'];
    setAriaDescribedBy?: ITooltipHostProps['setAriaDescribedBy'];
    theme?: ITooltipHostProps['theme'];
    tooltipOptions: ITooltipOptions;
    readonly onTooltipToggle: EventEmitter<{
        isTooltipVisible: boolean;
    }>;
    transformedTooltipProps: ITooltipHostProps['tooltipProps'];
    private _tooltipOptions;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    onTooltipToggleHandler(isTooltipVisible: boolean): void;
    private _transformTooltipOptionsToProps;
}
/**
 * Counterpart of `ITooltipProps`, with Angular adjustments.
 */
export interface ITooltipOptions extends Omit<ITooltipProps, 'onRenderContent'> {
    readonly renderContent?: InputRendererOptions<ITooltipProps>;
}
