import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { ISliderProps } from 'office-ui-fabric-react/lib/Slider';
export declare class FabSliderComponent extends ReactWrapperComponent<ISliderProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: ISliderProps['componentRef'];
    styles?: ISliderProps['styles'];
    theme?: ISliderProps['theme'];
    label?: ISliderProps['label'];
    defaultValue?: ISliderProps['defaultValue'];
    value?: ISliderProps['value'];
    min?: ISliderProps['min'];
    max?: ISliderProps['max'];
    step?: ISliderProps['step'];
    showValue?: ISliderProps['showValue'];
    ariaLabel?: ISliderProps['ariaLabel'];
    ariaValueText?: ISliderProps['ariaValueText'];
    vertical?: ISliderProps['vertical'];
    disabled?: ISliderProps['disabled'];
    className?: ISliderProps['className'];
    buttonProps?: ISliderProps['buttonProps'];
    valueFormat?: ISliderProps['valueFormat'];
    originFromZero?: ISliderProps['originFromZero'];
    readonly onChange: EventEmitter<number>;
    readonly onChanged: EventEmitter<{
        event: MouseEvent | TouchEvent;
        value: number;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onChangedHandler(event: MouseEvent | TouchEvent, value: number): void;
}
