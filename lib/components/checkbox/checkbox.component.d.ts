import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { FormEvent } from 'react';
export declare class FabCheckboxComponent extends ReactWrapperComponent<ICheckboxProps> implements OnInit {
    protected reactNodeRef: ElementRef;
    componentRef?: ICheckboxProps['componentRef'];
    className?: ICheckboxProps['className'];
    checked?: ICheckboxProps['checked'];
    defaultChecked?: ICheckboxProps['defaultChecked'];
    label?: ICheckboxProps['label'];
    disabled?: ICheckboxProps['disabled'];
    inputProps?: React.ButtonHTMLAttributes<HTMLElement | HTMLButtonElement>;
    boxSide?: ICheckboxProps['boxSide'];
    theme?: ICheckboxProps['theme'];
    ariaLabel?: ICheckboxProps['ariaLabel'];
    ariaLabelledBy?: ICheckboxProps['ariaLabelledBy'];
    ariaDescribedBy?: ICheckboxProps['ariaDescribedBy'];
    ariaPositionInSet?: ICheckboxProps['ariaPositionInSet'];
    ariaSetSize?: ICheckboxProps['ariaSetSize'];
    checkmarkIconProps?: ICheckboxProps['checkmarkIconProps'];
    keytipProps?: ICheckboxProps['keytipProps'];
    styles?: ICheckboxProps['styles'];
    renderLabel?: InputRendererOptions<ICheckboxProps>;
    readonly onChange: EventEmitter<{
        ev?: Event;
        checked?: boolean;
    }>;
    readonly checkedChange: EventEmitter<boolean>;
    onRenderLabel: (props?: ICheckboxProps, defaultRender?: JsxRenderFunc<ICheckboxProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    onChangeHandler(ev?: FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void;
}
