import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import omit from 'angular-react-toolkit/utils/omit';
import { CommonModule } from '@angular/common';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSearchBoxComponent = /** @class */ (function (_super) {
    __extends(FabSearchBoxComponent, _super);
    function FabSearchBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onChange = new EventEmitter();
        _this.onSearch = new EventEmitter();
        _this.onClear = new EventEmitter();
        _this.onEscape = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onSearchHandler = _this.onSearchHandler.bind(_this);
        _this.onClearHandler = _this.onClearHandler.bind(_this);
        _this.onEscapeHandler = _this.onEscapeHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabSearchBoxComponent.prototype, "clearButtonOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clearButtonOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearButtonOptions = value;
            if (value) {
                this.clearButtonProps = this._transformButtonOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onChangeHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onChange.emit({
            newValue: newValue,
        });
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onSearchHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onSearch.emit({
            newValue: newValue,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onClearHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onClear.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onEscapeHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onEscape.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabSearchBoxComponent.prototype._transformButtonOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
        /** @type {?} */
        var iconRenderer = this.createInputJsxRenderer(options.renderIcon);
        /** @type {?} */
        var textRenderer = this.createInputJsxRenderer(options.renderText);
        /** @type {?} */
        var descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
        /** @type {?} */
        var ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
        /** @type {?} */
        var childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
        /** @type {?} */
        var menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
        return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
             * @param {?} props
             * @return {?}
             */
            function (props) { return iconRenderer(props); }) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
             * @param {?} props
             * @return {?}
             */
            function (props) { return textRenderer(props); }) }))), descriptionRenderer &&
            ((/** @type {?} */ ({ onRenderDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return descriptionRenderer(props); }) }))), ariaDescriptionRenderer &&
            ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return ariaDescriptionRenderer(props); }) }))), childrenRenderer &&
            ((/** @type {?} */ ({ onRenderChildren: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return childrenRenderer(props); }) }))), menuIconRenderer &&
            ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return menuIconRenderer(props); }) }))));
    };
    FabSearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-search-box',
                    exportAs: 'fabSearchBox',
                    template: "\n    <SearchBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [clearButtonProps]=\"clearButtonProps\"\n      [iconProps]=\"iconProps\"\n      [underlined]=\"underlined\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [disableAnimation]=\"disableAnimation\"\n      [Change]=\"onChangeHandler\"\n      [Search]=\"onSearchHandler\"\n      [Clear]=\"onClearHandler\"\n      [Escape]=\"onEscapeHandler\"\n    >\n    </SearchBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSearchBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabSearchBoxComponent;
}(ReactWrapperComponent));
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
var components = [FabSearchBoxComponent];
var FabSearchBoxModule = /** @class */ (function () {
    function FabSearchBoxModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SearchBox', (/**
         * @return {?}
         */
        function () { return SearchBox; }));
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
    FabSearchBoxModule.ctorParameters = function () { return []; };
    return FabSearchBoxModule;
}());

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
