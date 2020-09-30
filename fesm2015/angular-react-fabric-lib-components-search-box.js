import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
import { CommonModule } from '@angular/common';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSearchBoxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onChange = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onEscape = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onClearHandler = this.onClearHandler.bind(this);
        this.onEscapeHandler = this.onEscapeHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clearButtonOptions(value) {
        this._clearButtonOptions = value;
        if (value) {
            this.clearButtonProps = this._transformButtonOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get clearButtonOptions() {
        return this._clearButtonOptions;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onChangeHandler(newValue) {
        this.onChange.emit({
            newValue,
        });
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onSearchHandler(newValue) {
        this.onSearch.emit({
            newValue,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onClearHandler(ev) {
        this.onClear.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onEscapeHandler(ev) {
        this.onEscape.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformButtonOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
        /** @type {?} */
        const iconRenderer = this.createInputJsxRenderer(options.renderIcon);
        /** @type {?} */
        const textRenderer = this.createInputJsxRenderer(options.renderText);
        /** @type {?} */
        const descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
        /** @type {?} */
        const ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
        /** @type {?} */
        const childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
        /** @type {?} */
        const menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
        return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
             * @param {?} props
             * @return {?}
             */
            props => iconRenderer(props)) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
             * @param {?} props
             * @return {?}
             */
            props => textRenderer(props)) }))), descriptionRenderer &&
            ((/** @type {?} */ ({ onRenderDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => descriptionRenderer(props)) }))), ariaDescriptionRenderer &&
            ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => ariaDescriptionRenderer(props)) }))), childrenRenderer &&
            ((/** @type {?} */ ({ onRenderChildren: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => childrenRenderer(props)) }))), menuIconRenderer &&
            ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => menuIconRenderer(props)) }))));
    }
}
FabSearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-search-box',
                exportAs: 'fabSearchBox',
                template: `
    <SearchBox
      #reactNode
      [componentRef]="componentRef"
      [placeholder]="placeholder"
      [value]="value"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [clearButtonProps]="clearButtonProps"
      [iconProps]="iconProps"
      [underlined]="underlined"
      [theme]="theme"
      [styles]="styles"
      [disableAnimation]="disableAnimation"
      [Change]="onChangeHandler"
      [Search]="onSearchHandler"
      [Clear]="onClearHandler"
      [Escape]="onEscapeHandler"
    >
    </SearchBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSearchBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabSearchBoxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    className: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    underlined: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    disableAnimation: [{ type: Input }],
    clearButtonOptions: [{ type: Input }],
    iconProps: [{ type: Input }],
    onChange: [{ type: Output }],
    onSearch: [{ type: Output }],
    onClear: [{ type: Output }],
    onEscape: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSearchBoxComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSearchBoxComponent.prototype.componentRef;
    /** @type {?} */
    FabSearchBoxComponent.prototype.placeholder;
    /** @type {?} */
    FabSearchBoxComponent.prototype.value;
    /** @type {?} */
    FabSearchBoxComponent.prototype.className;
    /** @type {?} */
    FabSearchBoxComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSearchBoxComponent.prototype.underlined;
    /** @type {?} */
    FabSearchBoxComponent.prototype.theme;
    /** @type {?} */
    FabSearchBoxComponent.prototype.styles;
    /** @type {?} */
    FabSearchBoxComponent.prototype.disableAnimation;
    /** @type {?} */
    FabSearchBoxComponent.prototype.iconProps;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onChange;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onSearch;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onClear;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onEscape;
    /** @type {?} */
    FabSearchBoxComponent.prototype.clearButtonProps;
    /**
     * @type {?}
     * @private
     */
    FabSearchBoxComponent.prototype._clearButtonOptions;
}
/**
 * @record
 */
function IButtonOptions() { }
if (false) {
    /** @type {?} */
    IButtonOptions.prototype.renderIcon;
    /** @type {?} */
    IButtonOptions.prototype.renderText;
    /** @type {?} */
    IButtonOptions.prototype.renderDescription;
    /** @type {?} */
    IButtonOptions.prototype.renderAriaDescription;
    /** @type {?} */
    IButtonOptions.prototype.renderChildren;
    /** @type {?} */
    IButtonOptions.prototype.renderMenuIcon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabSearchBoxComponent];
class FabSearchBoxModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SearchBox', (/**
         * @return {?}
         */
        () => SearchBox));
    }
}
FabSearchBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabSearchBoxModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabSearchBoxComponent, FabSearchBoxModule };
//# sourceMappingURL=angular-react-fabric-lib-components-search-box.js.map
