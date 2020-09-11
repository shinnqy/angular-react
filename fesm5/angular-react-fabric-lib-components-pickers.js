import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Input, Output, NgModule, NO_ERRORS_SCHEMA, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild } from '@angular/core';
import omit from 'angular-react-toolkit/utils/omit';
import { CommonModule } from '@angular/common';
import * as BasePickerCss from 'office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss';
import { BasePicker, NormalPeoplePickerBase } from 'office-ui-fabric-react/lib/Pickers';
import { noop } from 'angular-react-toolkit/utils/noop';
import { TagPicker } from 'office-ui-fabric-react';
import * as PeoplePickerItemCss from 'office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T, TProps
 */
var FabBasePickerComponent = /** @class */ (function (_super) {
    __extends(FabBasePickerComponent, _super);
    function FabBasePickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onChange = new EventEmitter();
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onRemoveSuggestion = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onFocusHandler = _this.onFocusHandler.bind(_this);
        _this.onBlurHandler = _this.onBlurHandler.bind(_this);
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        _this.onRemoveSuggestionHandler = _this.onRemoveSuggestionHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabBasePickerComponent.prototype, "pickerSuggestionsOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pickerSuggestionsOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pickerSuggestionsOptions = value;
            if (value) {
                this.pickerSuggestionsProps = this._transformBasePickerSuggestionsOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FabBasePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        this.onRenderSuggestionsItem = this.createRenderPropHandler(this.renderSuggestionsItem);
    };
    /**
     * @param {?=} items
     * @return {?}
     */
    FabBasePickerComponent.prototype.onChangeHandler = /**
     * @param {?=} items
     * @return {?}
     */
    function (items) {
        this.onChange.emit({
            items: items,
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabBasePickerComponent.prototype.onFocusHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onFocus.emit(event.nativeEvent);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabBasePickerComponent.prototype.onBlurHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onBlur.emit(event.nativeEvent);
    };
    /**
     * @param {?=} ev
     * @param {?=} selectedItem
     * @return {?}
     */
    FabBasePickerComponent.prototype.onDismissHandler = /**
     * @param {?=} ev
     * @param {?=} selectedItem
     * @return {?}
     */
    function (ev, selectedItem) {
        this.onDismiss.emit({
            ev: (ev && ev.nativeEvent) || ev,
            selectedItem: selectedItem,
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FabBasePickerComponent.prototype.onRemoveSuggestionHandler = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onRemoveSuggestion.emit({
            item: item,
        });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabBasePickerComponent.prototype._transformBasePickerSuggestionsOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderNoResultFound', 'renderResultsFooterFull', 'renderResultsFooter');
        /** @type {?} */
        var noResultFoundRenderer = this.createInputJsxRenderer(options.renderNoResultFound);
        /** @type {?} */
        var resultsFooterFullRenderer = this.createInputJsxRenderer(options.renderResultsFooterFull);
        /** @type {?} */
        var resultsFooterRenderer = this.createInputJsxRenderer(options.renderResultsFooter);
        return Object.assign({}, sharedProperties, noResultFoundRenderer &&
            ((/** @type {?} */ ({ onRenderNoResultFound: (/**
                 * @return {?}
                 */
                function () { return noResultFoundRenderer({}); }) }))), resultsFooterFullRenderer &&
            ((/** @type {?} */ ({ resultsFooterFull: (/**
                 * @return {?}
                 */
                function () { return resultsFooterFullRenderer({}); }) }))), resultsFooterRenderer &&
            ((/** @type {?} */ ({ resultsFooter: (/**
                 * @return {?}
                 */
                function () { return resultsFooterRenderer({}); }) }))));
    };
    FabBasePickerComponent.propDecorators = {
        componentRef: [{ type: Input }],
        resolveDelay: [{ type: Input }],
        defaultSelectedItems: [{ type: Input }],
        getTextFromItem: [{ type: Input }],
        className: [{ type: Input }],
        pickerCalloutProps: [{ type: Input }],
        searchingText: [{ type: Input }],
        disabled: [{ type: Input }],
        itemLimit: [{ type: Input }],
        createGenericItem: [{ type: Input }],
        removeButtonAriaLabel: [{ type: Input }],
        selectedItems: [{ type: Input }],
        enableSelectedSuggestionAlert: [{ type: Input }],
        inputProps: [{ type: Input }],
        onItemSelected: [{ type: Input, args: ['itemSelected',] }],
        onInputChange: [{ type: Input, args: ['inputChange',] }],
        onEmptyInputFocus: [{ type: Input, args: ['emptyInputFocus',] }],
        onResolveSuggestions: [{ type: Input, args: ['resolveSuggestions',] }],
        onGetMoreResults: [{ type: Input, args: ['getMoreResults',] }],
        onValidateInput: [{ type: Input, args: ['validateInput',] }],
        pickerSuggestionsOptions: [{ type: Input }],
        renderItem: [{ type: Input }],
        renderSuggestionsItem: [{ type: Input }],
        onChange: [{ type: Output }],
        onFocus: [{ type: Output }],
        onBlur: [{ type: Output }],
        onDismiss: [{ type: Output }],
        onRemoveSuggestion: [{ type: Output }]
    };
    return FabBasePickerComponent;
}(ReactWrapperComponent));
if (false) {
    /** @type {?} */
    FabBasePickerComponent.prototype.componentRef;
    /** @type {?} */
    FabBasePickerComponent.prototype.resolveDelay;
    /** @type {?} */
    FabBasePickerComponent.prototype.defaultSelectedItems;
    /** @type {?} */
    FabBasePickerComponent.prototype.getTextFromItem;
    /** @type {?} */
    FabBasePickerComponent.prototype.className;
    /** @type {?} */
    FabBasePickerComponent.prototype.pickerCalloutProps;
    /** @type {?} */
    FabBasePickerComponent.prototype.searchingText;
    /** @type {?} */
    FabBasePickerComponent.prototype.disabled;
    /** @type {?} */
    FabBasePickerComponent.prototype.itemLimit;
    /** @type {?} */
    FabBasePickerComponent.prototype.createGenericItem;
    /** @type {?} */
    FabBasePickerComponent.prototype.removeButtonAriaLabel;
    /** @type {?} */
    FabBasePickerComponent.prototype.selectedItems;
    /** @type {?} */
    FabBasePickerComponent.prototype.enableSelectedSuggestionAlert;
    /** @type {?} */
    FabBasePickerComponent.prototype.inputProps;
    /** @type {?} */
    FabBasePickerComponent.prototype.onItemSelected;
    /** @type {?} */
    FabBasePickerComponent.prototype.onInputChange;
    /** @type {?} */
    FabBasePickerComponent.prototype.onEmptyInputFocus;
    /** @type {?} */
    FabBasePickerComponent.prototype.onResolveSuggestions;
    /** @type {?} */
    FabBasePickerComponent.prototype.onGetMoreResults;
    /** @type {?} */
    FabBasePickerComponent.prototype.onValidateInput;
    /** @type {?} */
    FabBasePickerComponent.prototype.renderItem;
    /** @type {?} */
    FabBasePickerComponent.prototype.renderSuggestionsItem;
    /** @type {?} */
    FabBasePickerComponent.prototype.onChange;
    /** @type {?} */
    FabBasePickerComponent.prototype.onFocus;
    /** @type {?} */
    FabBasePickerComponent.prototype.onBlur;
    /** @type {?} */
    FabBasePickerComponent.prototype.onDismiss;
    /** @type {?} */
    FabBasePickerComponent.prototype.onRemoveSuggestion;
    /** @type {?} */
    FabBasePickerComponent.prototype.pickerSuggestionsProps;
    /** @type {?} */
    FabBasePickerComponent.prototype.onRenderSuggestionsItem;
    /** @type {?} */
    FabBasePickerComponent.prototype.onRenderItem;
    /**
     * @type {?}
     * @private
     */
    FabBasePickerComponent.prototype._pickerSuggestionsOptions;
}
/**
 * @record
 */
function IBasePickerSuggestionsOptions() { }
if (false) {
    /** @type {?} */
    IBasePickerSuggestionsOptions.prototype.renderNoResultFound;
    /** @type {?} */
    IBasePickerSuggestionsOptions.prototype.renderResultsFooterFull;
    /** @type {?} */
    IBasePickerSuggestionsOptions.prototype.renderResultsFooter;
}
/**
 * @record
 * @template T
 */
function IRenderSuggestionItemContext() { }
if (false) {
    /** @type {?} */
    IRenderSuggestionItemContext.prototype.props;
    /** @type {?} */
    IRenderSuggestionItemContext.prototype.itemProps;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force BasePickerCss to load and not be tree-shaken away.
noop(BasePickerCss);
var FabBasePickerModule = /** @class */ (function () {
    function FabBasePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('BasePicker', (/**
         * @return {?}
         */
        function () { return BasePicker; }));
    }
    FabBasePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabBasePickerModule.ctorParameters = function () { return []; };
    return FabBasePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabTagPickerComponent = /** @class */ (function (_super) {
    __extends(FabTagPickerComponent, _super);
    function FabTagPickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabTagPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tag-picker',
                    exportAs: 'fabTagPicker',
                    template: "\n    <TagPicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [resolveDelay]=\"resolveDelay\"\n      [defaultSelectedItems]=\"defaultSelectedItems\"\n      [getTextFromItem]=\"getTextFromItem\"\n      [className]=\"className\"\n      [pickerCalloutProps]=\"pickerCalloutProps\"\n      [searchingText]=\"searchingText\"\n      [disabled]=\"disabled\"\n      [itemLimit]=\"itemLimit\"\n      [createGenericItem]=\"createGenericItem\"\n      [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n      [selectedItems]=\"selectedItems\"\n      [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n      [inputProps]=\"inputProps\"\n      [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n      [ItemSelected]=\"onItemSelected\"\n      [InputChange]=\"onInputChange\"\n      [EmptyInputFocus]=\"onEmptyInputFocus\"\n      [ResolveSuggestions]=\"onResolveSuggestions\"\n      [GetMoreResults]=\"onGetMoreResults\"\n      [ValidateInput]=\"onValidateInput\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n      [Change]=\"onChangeHandler\"\n      [Focus]=\"onFocusHandler\"\n      [Blur]=\"onBlurHandler\"\n      [Dismiss]=\"onDismissHandler\"\n      [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n    >\n    </TagPicker>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTagPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabTagPickerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabTagPickerComponent;
}(FabBasePickerComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTagPickerComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabTagPickerComponent];
var FabTagPickerModule = /** @class */ (function () {
    function FabTagPickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TagPicker', (/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (TagPicker)); }));
    }
    FabTagPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabBasePickerModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabTagPickerModule.ctorParameters = function () { return []; };
    return FabTagPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabPeoplePickerComponent = /** @class */ (function (_super) {
    __extends(FabPeoplePickerComponent, _super);
    function FabPeoplePickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPeoplePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-people-picker',
                    exportAs: 'fabPeoplePicker',
                    template: "\n      <PeoplePicker\n        #reactNode\n        [componentRef]=\"componentRef\"\n        [resolveDelay]=\"resolveDelay\"\n        [defaultSelectedItems]=\"defaultSelectedItems\"\n        [getTextFromItem]=\"getTextFromItem\"\n        [className]=\"className\"\n        [pickerCalloutProps]=\"pickerCalloutProps\"\n        [searchingText]=\"searchingText\"\n        [disabled]=\"disabled\"\n        [itemLimit]=\"itemLimit\"\n        [createGenericItem]=\"createGenericItem\"\n        [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n        [selectedItems]=\"selectedItems\"\n        [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n        [inputProps]=\"inputProps\"\n        [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n        [ItemSelected]=\"onItemSelected\"\n        [InputChange]=\"onInputChange\"\n        [EmptyInputFocus]=\"onEmptyInputFocus\"\n        [ResolveSuggestions]=\"onResolveSuggestions\"\n        [GetMoreResults]=\"onGetMoreResults\"\n        [ValidateInput]=\"onValidateInput\"\n        [RenderItem]=\"renderItem && onRenderItem\"\n        [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n        [Change]=\"onChangeHandler\"\n        [Focus]=\"onFocusHandler\"\n        [Blur]=\"onBlurHandler\"\n        [Dismiss]=\"onDismissHandler\"\n        [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n      >\n      </PeoplePicker>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPeoplePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPeoplePickerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabPeoplePickerComponent;
}(FabBasePickerComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPeoplePickerComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force PeoplePickerItemCss to load and not be tree-shaken away.
noop(PeoplePickerItemCss);
/** @type {?} */
var components$1 = [FabPeoplePickerComponent];
var FabPeoplePickerModule = /** @class */ (function () {
    function FabPeoplePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('PeoplePicker', (/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (NormalPeoplePickerBase)); }));
    }
    FabPeoplePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabBasePickerModule],
                    declarations: components$1,
                    exports: components$1,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabPeoplePickerModule.ctorParameters = function () { return []; };
    return FabPeoplePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabBasePickerComponent, FabBasePickerModule, FabPeoplePickerComponent, FabPeoplePickerModule, FabTagPickerComponent, FabTagPickerModule };
//# sourceMappingURL=angular-react-fabric-lib-components-pickers.js.map
