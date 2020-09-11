/// <reference types="react" />
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IToggleProps } from 'office-ui-fabric-react/lib/Toggle';
export declare class FabToggleComponent extends ReactWrapperComponent<IToggleProps> {
    protected reactNodeRef: ElementRef;
    as?: IToggleProps['as'];
    componentRef?: IToggleProps['componentRef'];
    label?: IToggleProps['label'];
    /**
     * Counterpart of `IToggleProps['onText']`.
     * Angular doesn't allow Inputs to be prefixed with "on", so this is misspelled as "onn".
     */
    onText?: IToggleProps['onText'];
    offText?: IToggleProps['offText'];
    ariaLabel?: IToggleProps['ariaLabel'];
    checked?: IToggleProps['checked'];
    defaultChecked?: IToggleProps['defaultChecked'];
    disabled?: IToggleProps['disabled'];
    inlineLabel?: IToggleProps['inlineLabel'];
    theme?: IToggleProps['theme'];
    styles?: IToggleProps['styles'];
    keytipProps?: IToggleProps['keytipProps'];
    readonly onChange: EventEmitter<{
        event: MouseEvent;
        checked?: boolean;
    }>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    onChangeHandler(event: React.MouseEvent<HTMLElement>, checked?: boolean): void;
}
