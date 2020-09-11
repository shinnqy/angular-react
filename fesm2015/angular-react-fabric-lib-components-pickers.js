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
class FabBasePickerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onRemoveSuggestion = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
        this.onRemoveSuggestionHandler = this.onRemoveSuggestionHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pickerSuggestionsOptions(value) {
        this._pickerSuggestionsOptions = value;
        if (value) {
            this.pickerSuggestionsProps = this._transformBasePickerSuggestionsOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get pickerSuggestionsOptions() {
        return this._pickerSuggestionsOptions;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        this.onRenderSuggestionsItem = this.createRenderPropHandler(this.renderSuggestionsItem);
    }
    /**
     * @param {?=} items
     * @return {?}
     */
    onChangeHandler(items) {
        this.onChange.emit({
            items,
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusHandler(event) {
        this.onFocus.emit(event.nativeEvent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlurHandler(event) {
        this.onBlur.emit(event.nativeEvent);
    }
    /**
     * @param {?=} ev
     * @param {?=} selectedItem
     * @return {?}
     */
    onDismissHandler(ev, selectedItem) {
        this.onDismiss.emit({
            ev: (ev && ev.nativeEvent) || ev,
            selectedItem,
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onRemoveSuggestionHandler(item) {
        this.onRemoveSuggestion.emit({
            item,
        });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformBasePickerSuggestionsOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderNoResultFound', 'renderResultsFooterFull', 'renderResultsFooter');
        /** @type {?} */
        const noResultFoundRenderer = this.createInputJsxRenderer(options.renderNoResultFound);
        /** @type {?} */
        const resultsFooterFullRenderer = this.createInputJsxRenderer(options.renderResultsFooterFull);
        /** @type {?} */
        const resultsFooterRenderer = this.createInputJsxRenderer(options.renderResultsFooter);
        return Object.assign({}, sharedProperties, noResultFoundRenderer &&
            ((/** @type {?} */ ({ onRenderNoResultFound: (/**
                 * @return {?}
                 */
                () => noResultFoundRenderer({})) }))), resultsFooterFullRenderer &&
            ((/** @type {?} */ ({ resultsFooterFull: (/**
                 * @return {?}
                 */
                () => resultsFooterFullRenderer({})) }))), resultsFooterRenderer &&
            ((/** @type {?} */ ({ resultsFooter: (/**
                 * @return {?}
                 */
                () => resultsFooterRenderer({})) }))));
    }
}
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
class FabBasePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('BasePicker', (/**
         * @return {?}
         */
        () => BasePicker));
    }
}
FabBasePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabBasePickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabTagPickerComponent extends FabBasePickerComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabTagPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag-picker',
                exportAs: 'fabTagPicker',
                template: `
    <TagPicker
      #reactNode
      [componentRef]="componentRef"
      [resolveDelay]="resolveDelay"
      [defaultSelectedItems]="defaultSelectedItems"
      [getTextFromItem]="getTextFromItem"
      [className]="className"
      [pickerCalloutProps]="pickerCalloutProps"
      [searchingText]="searchingText"
      [disabled]="disabled"
      [itemLimit]="itemLimit"
      [createGenericItem]="createGenericItem"
      [removeButtonAriaLabel]="removeButtonAriaLabel"
      [selectedItems]="selectedItems"
      [enableSelectedSuggestionAlert]="enableSelectedSuggestionAlert"
      [inputProps]="inputProps"
      [pickerSuggestionsProps]="pickerSuggestionsProps"
      [ItemSelected]="onItemSelected"
      [InputChange]="onInputChange"
      [EmptyInputFocus]="onEmptyInputFocus"
      [ResolveSuggestions]="onResolveSuggestions"
      [GetMoreResults]="onGetMoreResults"
      [ValidateInput]="onValidateInput"
      [RenderItem]="renderItem && onRenderItem"
      [RenderSuggestionsItem]="renderSuggestionsItem && onRenderSuggestionsItem"
      [Change]="onChangeHandler"
      [Focus]="onFocusHandler"
      [Blur]="onBlurHandler"
      [Dismiss]="onDismissHandler"
      [RemoveSuggestion]="onRemoveSuggestionHandler"
    >
    </TagPicker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTagPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabTagPickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
const components = [FabTagPickerComponent];
class FabTagPickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TagPicker', (/**
         * @return {?}
         */
        () => (/** @type {?} */ (TagPicker))));
    }
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
FabTagPickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPeoplePickerComponent extends FabBasePickerComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabPeoplePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-people-picker',
                exportAs: 'fabPeoplePicker',
                template: `
      <PeoplePicker
        #reactNode
        [componentRef]="componentRef"
        [resolveDelay]="resolveDelay"
        [defaultSelectedItems]="defaultSelectedItems"
        [getTextFromItem]="getTextFromItem"
        [className]="className"
        [pickerCalloutProps]="pickerCalloutProps"
        [searchingText]="searchingText"
        [disabled]="disabled"
        [itemLimit]="itemLimit"
        [createGenericItem]="createGenericItem"
        [removeButtonAriaLabel]="removeButtonAriaLabel"
        [selectedItems]="selectedItems"
        [enableSelectedSuggestionAlert]="enableSelectedSuggestionAlert"
        [inputProps]="inputProps"
        [pickerSuggestionsProps]="pickerSuggestionsProps"
        [ItemSelected]="onItemSelected"
        [InputChange]="onInputChange"
        [EmptyInputFocus]="onEmptyInputFocus"
        [ResolveSuggestions]="onResolveSuggestions"
        [GetMoreResults]="onGetMoreResults"
        [ValidateInput]="onValidateInput"
        [RenderItem]="renderItem && onRenderItem"
        [RenderSuggestionsItem]="renderSuggestionsItem && onRenderSuggestionsItem"
        [Change]="onChangeHandler"
        [Focus]="onFocusHandler"
        [Blur]="onBlurHandler"
        [Dismiss]="onDismissHandler"
        [RemoveSuggestion]="onRemoveSuggestionHandler"
      >
      </PeoplePicker>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPeoplePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPeoplePickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
const components$1 = [FabPeoplePickerComponent];
class FabPeoplePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('PeoplePicker', (/**
         * @return {?}
         */
        () => (/** @type {?} */ (NormalPeoplePickerBase))));
    }
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
FabPeoplePickerModule.ctorParameters = () => [];

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
