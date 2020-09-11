/// <reference types="react" />
import { InputRendererOptions, JsxRenderFunc, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2, AfterContentInit } from '@angular/core';
import { IComboBox, IComboBoxOption, IComboBoxProps } from 'office-ui-fabric-react/lib/ComboBox';
import { ComboBoxOptionsDirective } from './directives/combo-box-options.directive';
export declare abstract class FabBaseComboBoxComponent extends ReactWrapperComponent<IComboBoxProps> implements OnInit, AfterContentInit {
    componentRef?: IComboBoxProps['componentRef'];
    options: IComboBoxProps['options'];
    allowFreeform?: IComboBoxProps['allowFreeform'];
    autoComplete?: IComboBoxProps['autoComplete'];
    text?: IComboBoxProps['text'];
    buttonIconProps?: IComboBoxProps['buttonIconProps'];
    autofill?: IComboBoxProps['autofill'];
    theme?: IComboBoxProps['theme'];
    styles?: IComboBoxProps['styles'];
    getClassNames?: IComboBoxProps['getClassNames'];
    caretDownButtonStyles?: IComboBoxProps['caretDownButtonStyles'];
    comboBoxOptionStyles?: IComboBoxProps['comboBoxOptionStyles'];
    scrollSelectedToTop?: IComboBoxProps['scrollSelectedToTop'];
    dropdownWidth?: IComboBoxProps['dropdownWidth'];
    useComboBoxAsMenuWidth?: IComboBoxProps['useComboBoxAsMenuWidth'];
    multiSelect?: IComboBoxProps['multiSelect'];
    isButtonAriaHidden?: IComboBoxProps['isButtonAriaHidden'];
    ariaDescribedBy?: IComboBoxProps['ariaDescribedBy'];
    keytipProps?: IComboBoxProps['keytipProps'];
    persistMenu?: IComboBoxProps['persistMenu'];
    shouldRestoreFocus?: IComboBoxProps['shouldRestoreFocus'];
    resolveOptions?: (options: IComboBoxOption[]) => IComboBoxOption[] | PromiseLike<IComboBoxOption[]>;
    renderLowerContent?: InputRendererOptions<IComboBoxProps>;
    readonly onItemClick: EventEmitter<{
        event: Event;
        option?: IComboBoxOption;
        index?: number;
    }>;
    readonly onChange: EventEmitter<{
        event: Event;
        option?: IComboBoxOption;
        index?: number;
        value?: string;
    }>;
    readonly onPendingValueChanged: EventEmitter<{
        option?: IComboBoxOption;
        index?: number;
        value?: string;
    }>;
    readonly onMenuOpen: EventEmitter<void>;
    readonly onMenuDismissed: EventEmitter<void>;
    readonly onMenuDismiss: EventEmitter<void>;
    readonly onScrollToItem: EventEmitter<{
        itemIndex: number;
    }>;
    readonly comboBoxOptionsDirective?: ComboBoxOptionsDirective;
    onRenderLowerContent: (props?: IComboBoxProps, defaultRender?: JsxRenderFunc<IComboBoxProps>) => JSX.Element;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onItemClickHandler(event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number): void;
    onChangeHandler(event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, value?: string): void;
    onPendingValueChangedHandler(option?: IComboBoxOption, index?: number, value?: string): void;
    onScrollToItemHandler(itemIndex: number): void;
    private _initDirective;
}
