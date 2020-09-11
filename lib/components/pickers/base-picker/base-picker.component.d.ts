/// <reference types="react" />
import { InputRendererOptions, JsxRenderFunc, Omit, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { BaseAutoFill, IBasePickerProps, IBasePickerSuggestionsProps, IPickerItemProps } from 'office-ui-fabric-react/lib/Pickers';
export declare abstract class FabBasePickerComponent<T, TProps extends IBasePickerProps<T>> extends ReactWrapperComponent<TProps> implements OnInit {
    componentRef?: IBasePickerProps<T>['componentRef'];
    resolveDelay?: IBasePickerProps<T>['resolveDelay'];
    defaultSelectedItems?: IBasePickerProps<T>['defaultSelectedItems'];
    getTextFromItem?: IBasePickerProps<T>['getTextFromItem'];
    className?: IBasePickerProps<T>['className'];
    pickerCalloutProps?: IBasePickerProps<T>['pickerCalloutProps'];
    searchingText?: IBasePickerProps<T>['searchingText'];
    disabled?: IBasePickerProps<T>['disabled'];
    itemLimit?: IBasePickerProps<T>['itemLimit'];
    createGenericItem?: IBasePickerProps<T>['createGenericItem'];
    removeButtonAriaLabel?: IBasePickerProps<T>['removeButtonAriaLabel'];
    selectedItems?: IBasePickerProps<T>['selectedItems'];
    enableSelectedSuggestionAlert?: IBasePickerProps<T>['enableSelectedSuggestionAlert'];
    inputProps?: IBasePickerProps<T>['inputProps'];
    onItemSelected?: (selectedItem?: T) => T | PromiseLike<T> | null;
    onInputChange?: (input: string) => string;
    onEmptyInputFocus?: IBasePickerProps<T>['onEmptyInputFocus'];
    onResolveSuggestions: IBasePickerProps<T>['onResolveSuggestions'];
    onGetMoreResults?: IBasePickerProps<T>['onGetMoreResults'];
    onValidateInput?: IBasePickerProps<T>['onValidateInput'];
    pickerSuggestionsOptions: IBasePickerSuggestionsOptions;
    renderItem?: InputRendererOptions<IPickerItemProps<T>>;
    renderSuggestionsItem?: InputRendererOptions<IRenderSuggestionItemContext<T>>;
    readonly onChange: EventEmitter<{
        items?: T[];
    }>;
    readonly onFocus: EventEmitter<FocusEvent>;
    readonly onBlur: EventEmitter<FocusEvent>;
    readonly onDismiss: EventEmitter<{
        ev?: any;
        selectedItem?: T;
    }>;
    readonly onRemoveSuggestion: EventEmitter<{
        item: IPersonaProps;
    }>;
    pickerSuggestionsProps: IBasePickerSuggestionsProps;
    onRenderSuggestionsItem: (props?: IRenderSuggestionItemContext<T>, defaultRender?: JsxRenderFunc<IRenderSuggestionItemContext<T>>) => JSX.Element;
    onRenderItem: (props?: IPickerItemProps<T>, defaultRender?: JsxRenderFunc<IPickerItemProps<T>>) => JSX.Element;
    private _pickerSuggestionsOptions;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    onChangeHandler(items?: T[]): void;
    onFocusHandler(event: React.FocusEvent<HTMLInputElement | BaseAutoFill>): void;
    onBlurHandler(event: React.FocusEvent<HTMLInputElement | BaseAutoFill>): void;
    onDismissHandler(ev?: any, selectedItem?: T): void;
    onRemoveSuggestionHandler(item: IPersonaProps): void;
    private _transformBasePickerSuggestionsOptionsToProps;
}
export interface IBasePickerSuggestionsOptions extends Omit<IBasePickerSuggestionsProps, 'onRenderNoResultFound' | 'resultsFooterFull' | 'resultsFooter'> {
    readonly renderNoResultFound: InputRendererOptions<{}>;
    readonly renderResultsFooterFull: InputRendererOptions<{}>;
    readonly renderResultsFooter: InputRendererOptions<{}>;
}
export interface IRenderSuggestionItemContext<T> {
    readonly props: T;
    readonly itemProps: any;
}
