/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IChoiceGroupOption, IChoiceGroupProps } from 'office-ui-fabric-react/lib/ChoiceGroup';
export declare class FabChoiceGroupComponent extends ReactWrapperComponent<IChoiceGroupProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: IChoiceGroupProps['componentRef'];
    options?: IChoiceGroupProps['options'];
    defaultSelectedKey?: IChoiceGroupProps['defaultSelectedKey'];
    selectedKey?: IChoiceGroupProps['selectedKey'];
    label?: IChoiceGroupProps['label'];
    theme?: IChoiceGroupProps['theme'];
    styles?: IChoiceGroupProps['styles'];
    ariaLabelledBy?: IChoiceGroupProps['ariaLabelledBy'];
    /** HTML Input props */
    required?: IChoiceGroupProps['required'];
    readonly onChanged: EventEmitter<{
        option: IChoiceGroupOption;
        evt?: Event;
    }>;
    readonly onChange: EventEmitter<{
        ev?: Event;
        option?: IChoiceGroupOption;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onChangedHandler(option: IChoiceGroupOption, evt?: React.FormEvent<HTMLElement | HTMLInputElement>): void;
    onChangeHandler(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void;
}
