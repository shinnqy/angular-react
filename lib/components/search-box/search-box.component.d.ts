import { InputRendererOptions, Omit, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { ISearchBoxProps } from 'office-ui-fabric-react/lib/SearchBox';
export declare class FabSearchBoxComponent extends ReactWrapperComponent<ISearchBoxProps> {
    protected reactNodeRef: ElementRef;
    componentRef?: ISearchBoxProps['componentRef'];
    placeholder?: ISearchBoxProps['placeholder'];
    value?: ISearchBoxProps['value'];
    className?: ISearchBoxProps['className'];
    ariaLabel?: ISearchBoxProps['ariaLabel'];
    underlined?: ISearchBoxProps['underlined'];
    theme?: ISearchBoxProps['theme'];
    styles?: ISearchBoxProps['styles'];
    disableAnimation?: ISearchBoxProps['disableAnimation'];
    clearButtonOptions: IButtonOptions;
    iconProps?: ISearchBoxProps['iconProps'];
    readonly onChange: EventEmitter<{
        newValue: any;
    }>;
    readonly onSearch: EventEmitter<{
        newValue: any;
    }>;
    readonly onClear: EventEmitter<{
        ev?: any;
    }>;
    readonly onEscape: EventEmitter<{
        ev?: any;
    }>;
    clearButtonProps: IButtonProps;
    private _clearButtonOptions;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
    onChangeHandler(newValue: any): void;
    onSearchHandler(newValue: any): void;
    onClearHandler(ev?: any): void;
    onEscapeHandler(ev?: any): void;
    private _transformButtonOptionsToProps;
}
export interface IButtonOptions extends Omit<IButtonProps, 'onRenderIcon' | 'onRenderText' | 'onRenderDescription' | 'onRenderAriaDescription' | 'onRenderChildren' | 'onRenderMenuIcon'> {
    readonly renderIcon: InputRendererOptions<IButtonProps>;
    readonly renderText: InputRendererOptions<IButtonProps>;
    readonly renderDescription: InputRendererOptions<IButtonProps>;
    readonly renderAriaDescription: InputRendererOptions<IButtonProps>;
    readonly renderChildren: InputRendererOptions<IButtonProps>;
    readonly renderMenuIcon: InputRendererOptions<IButtonProps>;
}
