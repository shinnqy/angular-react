import { __rest, __assign, __extends } from 'tslib';
import { Directive, Input, ContentChildren, EventEmitter, Output, ContentChild, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { ComboBox, VirtualizedComboBox } from 'office-ui-fabric-react/lib/ComboBox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating a ComboBoxOption
 * \@paramName optionKey Binds to React 'key' property.
 *                      Name change necessary because key is a reserved attribute in the wrapper component.
 */
var ComboBoxOptionDirective = /** @class */ (function () {
    function ComboBoxOptionDirective() {
    }
    ComboBoxOptionDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-combo-box-option' },] }
    ];
    ComboBoxOptionDirective.propDecorators = {
        optionKey: [{ type: Input }],
        text: [{ type: Input }],
        title: [{ type: Input }],
        itemType: [{ type: Input }],
        index: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        selected: [{ type: Input }],
        disabled: [{ type: Input }],
        data: [{ type: Input }],
        styles: [{ type: Input }],
        useAriaLabelAsText: [{ type: Input }]
    };
    return ComboBoxOptionDirective;
}());
if (false) {
    /** @type {?} */
    ComboBoxOptionDirective.prototype.optionKey;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.text;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.title;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.itemType;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.index;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.ariaLabel;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.selected;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.disabled;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.data;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.styles;
    /** @type {?} */
    ComboBoxOptionDirective.prototype.useAriaLabelAsText;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating multiple ComboBoxOptions
 * Note that if you use this, it will override the imperative [options] binding.
 */
var ComboBoxOptionsDirective = /** @class */ (function () {
    function ComboBoxOptionsDirective() {
    }
    Object.defineProperty(ComboBoxOptionsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var optionKey = _a.optionKey, otherDirectiveProps = __rest(_a, ["optionKey"]);
                return (__assign({ key: optionKey }, otherDirectiveProps));
            }));
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxOptionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-combo-box > options' },] }
    ];
    ComboBoxOptionsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [ComboBoxOptionDirective,] }]
    };
    return ComboBoxOptionsDirective;
}());
if (false) {
    /** @type {?} */
    ComboBoxOptionsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var FabBaseComboBoxComponent = /** @class */ (function (_super) {
    __extends(FabBaseComboBoxComponent, _super);
    function FabBaseComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onItemClick = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onPendingValueChanged = new EventEmitter();
        _this.onMenuOpen = new EventEmitter();
        _this.onMenuDismissed = new EventEmitter();
        _this.onMenuDismiss = new EventEmitter();
        _this.onScrollToItem = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onItemClickHandler = _this.onItemClickHandler.bind(_this);
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onPendingValueChangedHandler = _this.onPendingValueChangedHandler.bind(_this);
        _this.onScrollToItemHandler = _this.onScrollToItemHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderLowerContent = this.createRenderPropHandler(this.renderLowerContent);
    };
    /**
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.comboBoxOptionsDirective) {
            this._initDirective(this.comboBoxOptionsDirective);
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onItemClickHandler = /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    function (event, option, index) {
        this.onItemClick.emit({
            event: event.nativeEvent,
            option: option,
            index: index,
        });
    };
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    function (event, option, index, value) {
        this.onChange.emit({
            event: event.nativeEvent,
            option: option,
            index: index,
            value: value,
        });
    };
    /**
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onPendingValueChangedHandler = /**
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    function (option, index, value) {
        this.onPendingValueChanged.emit({
            option: option,
            index: index,
            value: value,
        });
    };
    /**
     * @param {?} itemIndex
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype.onScrollToItemHandler = /**
     * @param {?} itemIndex
     * @return {?}
     */
    function (itemIndex) {
        this.onScrollToItem.emit({
            itemIndex: itemIndex,
        });
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    FabBaseComboBoxComponent.prototype._initDirective = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        this.options = directive.items;
        this.markForCheck();
    };
    FabBaseComboBoxComponent.propDecorators = {
        componentRef: [{ type: Input }],
        options: [{ type: Input }],
        allowFreeform: [{ type: Input }],
        autoComplete: [{ type: Input }],
        text: [{ type: Input }],
        buttonIconProps: [{ type: Input }],
        autofill: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        getClassNames: [{ type: Input }],
        caretDownButtonStyles: [{ type: Input }],
        comboBoxOptionStyles: [{ type: Input }],
        scrollSelectedToTop: [{ type: Input }],
        dropdownWidth: [{ type: Input }],
        useComboBoxAsMenuWidth: [{ type: Input }],
        multiSelect: [{ type: Input }],
        isButtonAriaHidden: [{ type: Input }],
        ariaDescribedBy: [{ type: Input }],
        keytipProps: [{ type: Input }],
        persistMenu: [{ type: Input }],
        shouldRestoreFocus: [{ type: Input }],
        resolveOptions: [{ type: Input }],
        renderLowerContent: [{ type: Input }],
        onItemClick: [{ type: Output }],
        onChange: [{ type: Output }],
        onPendingValueChanged: [{ type: Output }],
        onMenuOpen: [{ type: Output }],
        onMenuDismissed: [{ type: Output }],
        onMenuDismiss: [{ type: Output }],
        onScrollToItem: [{ type: Output }],
        comboBoxOptionsDirective: [{ type: ContentChild, args: [ComboBoxOptionsDirective, { static: true },] }]
    };
    return FabBaseComboBoxComponent;
}(ReactWrapperComponent));
if (false) {
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.componentRef;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.options;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.allowFreeform;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.autoComplete;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.text;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.buttonIconProps;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.autofill;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.theme;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.styles;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.getClassNames;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.caretDownButtonStyles;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.comboBoxOptionStyles;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.scrollSelectedToTop;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.dropdownWidth;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.useComboBoxAsMenuWidth;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.multiSelect;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.isButtonAriaHidden;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.keytipProps;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.persistMenu;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.shouldRestoreFocus;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.resolveOptions;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.renderLowerContent;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onItemClick;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onChange;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onPendingValueChanged;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onMenuOpen;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onMenuDismissed;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onMenuDismiss;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onScrollToItem;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.comboBoxOptionsDirective;
    /** @type {?} */
    FabBaseComboBoxComponent.prototype.onRenderLowerContent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabComboBoxComponent = /** @class */ (function (_super) {
    __extends(FabComboBoxComponent, _super);
    function FabComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabComboBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-combo-box',
                    exportAs: 'fabComboBox',
                    template: "\n    <ComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </ComboBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabComboBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabComboBoxComponent;
}(FabBaseComboBoxComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabComboBoxComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabVirtualizedComboBoxComponent = /** @class */ (function (_super) {
    __extends(FabVirtualizedComboBoxComponent, _super);
    function FabVirtualizedComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabVirtualizedComboBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-virtualized-combo-box',
                    exportAs: 'fabVirtualizedComboBox',
                    template: "\n    <VirtualizedComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </VirtualizedComboBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabVirtualizedComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabVirtualizedComboBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabVirtualizedComboBoxComponent;
}(FabBaseComboBoxComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabVirtualizedComboBoxComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations = [
    FabComboBoxComponent,
    FabVirtualizedComboBoxComponent,
    ComboBoxOptionDirective,
    ComboBoxOptionsDirective
];
var FabComboBoxModule = /** @class */ (function () {
    function FabComboBoxModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ComboBox', (/**
         * @return {?}
         */
        function () { return ComboBox; }));
        registerElement('VirtualizedComboBox', (/**
         * @return {?}
         */
        function () { return VirtualizedComboBox; }));
    }
    FabComboBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: declarations,
                    exports: declarations,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabComboBoxModule.ctorParameters = function () { return []; };
    return FabComboBoxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabComboBoxComponent, FabComboBoxModule, FabBaseComboBoxComponent as ɵa, ComboBoxOptionsDirective as ɵb, ComboBoxOptionDirective as ɵc, FabVirtualizedComboBoxComponent as ɵd };
//# sourceMappingURL=angular-react-fabric-lib-components-combo-box.js.map
