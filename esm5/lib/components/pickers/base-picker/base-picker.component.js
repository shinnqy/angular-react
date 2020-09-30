/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
/**
 * @abstract
 * @template T, TProps
 */
var FabBasePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabBasePickerComponent, _super);
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
export { FabBasePickerComponent };
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
export function IBasePickerSuggestionsOptions() { }
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
export function IRenderSuggestionItemContext() { }
if (false) {
    /** @type {?} */
    IRenderSuggestionItemContext.prototype.props;
    /** @type {?} */
    IRenderSuggestionItemContext.prototype.itemProps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGlja2Vycy9iYXNlLXBpY2tlci9iYXNlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBNkMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RyxPQUFPLEVBQWlDLFlBQVksRUFBRSxLQUFLLEVBQWtCLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQVF0SCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRXZEO0lBQ1Usa0RBQTZCO0lBc0RyQyxnQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FPakY7UUF2QmtCLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMvQyxhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6QyxZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxlQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDL0Qsd0JBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFjbEYsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2RCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3JELEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENB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RTs7SUFDbEUseUNBQTREOztJQUM1RCx3Q0FBMkQ7O0lBQzNELDJDQUFrRjs7SUFDbEYsb0RBQW9GOztJQUVwRix3REFBb0Q7O0lBQ3BELHlEQUdpQjs7SUFDakIsOENBQStHOzs7OztJQUUvRywyREFBaUU7Ozs7O0FBd0VuRSxtREFLQzs7O0lBSEMsNERBQXVEOztJQUN2RCxnRUFBMkQ7O0lBQzNELDREQUF1RDs7Ozs7O0FBR3pELGtEQUdDOzs7SUFGQyw2Q0FBa0I7O0lBQ2xCLGlEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgT21pdCwgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBlcnNvbmFQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BlcnNvbmEnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VBdXRvRmlsbCxcclxuICBJQmFzZVBpY2tlclByb3BzLFxyXG4gIElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcyxcclxuICBJUGlja2VySXRlbVByb3BzLFxyXG59IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BpY2tlcnMnO1xyXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFiQmFzZVBpY2tlckNvbXBvbmVudDxULCBUUHJvcHMgZXh0ZW5kcyBJQmFzZVBpY2tlclByb3BzPFQ+PlxyXG4gIGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PFRQcm9wcz5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgcmVzb2x2ZURlbGF5PzogSUJhc2VQaWNrZXJQcm9wczxUPlsncmVzb2x2ZURlbGF5J107XHJcbiAgQElucHV0KCkgZGVmYXVsdFNlbGVjdGVkSXRlbXM/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydkZWZhdWx0U2VsZWN0ZWRJdGVtcyddO1xyXG4gIEBJbnB1dCgpIGdldFRleHRGcm9tSXRlbT86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2dldFRleHRGcm9tSXRlbSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHBpY2tlckNhbGxvdXRQcm9wcz86IElCYXNlUGlja2VyUHJvcHM8VD5bJ3BpY2tlckNhbGxvdXRQcm9wcyddO1xyXG4gIEBJbnB1dCgpIHNlYXJjaGluZ1RleHQ/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydzZWFyY2hpbmdUZXh0J107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIGl0ZW1MaW1pdD86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2l0ZW1MaW1pdCddO1xyXG4gIEBJbnB1dCgpIGNyZWF0ZUdlbmVyaWNJdGVtPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnY3JlYXRlR2VuZXJpY0l0ZW0nXTtcclxuICBASW5wdXQoKSByZW1vdmVCdXR0b25BcmlhTGFiZWw/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydyZW1vdmVCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnc2VsZWN0ZWRJdGVtcyddO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdGVkU3VnZ2VzdGlvbkFsZXJ0PzogSUJhc2VQaWNrZXJQcm9wczxUPlsnZW5hYmxlU2VsZWN0ZWRTdWdnZXN0aW9uQWxlcnQnXTtcclxuICBASW5wdXQoKSBpbnB1dFByb3BzPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnaW5wdXRQcm9wcyddO1xyXG4gIEBJbnB1dCgnaXRlbVNlbGVjdGVkJykgb25JdGVtU2VsZWN0ZWQ/OiAoc2VsZWN0ZWRJdGVtPzogVCkgPT4gVCB8IFByb21pc2VMaWtlPFQ+IHwgbnVsbDtcclxuICBASW5wdXQoJ2lucHV0Q2hhbmdlJykgb25JbnB1dENoYW5nZT86IChpbnB1dDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbiAgQElucHV0KCdlbXB0eUlucHV0Rm9jdXMnKSBvbkVtcHR5SW5wdXRGb2N1cz86IElCYXNlUGlja2VyUHJvcHM8VD5bJ29uRW1wdHlJbnB1dEZvY3VzJ107XHJcbiAgQElucHV0KCdyZXNvbHZlU3VnZ2VzdGlvbnMnKSBvblJlc29sdmVTdWdnZXN0aW9uczogSUJhc2VQaWNrZXJQcm9wczxUPlsnb25SZXNvbHZlU3VnZ2VzdGlvbnMnXTtcclxuICBASW5wdXQoJ2dldE1vcmVSZXN1bHRzJykgb25HZXRNb3JlUmVzdWx0cz86IElCYXNlUGlja2VyUHJvcHM8VD5bJ29uR2V0TW9yZVJlc3VsdHMnXTtcclxuICBASW5wdXQoJ3ZhbGlkYXRlSW5wdXQnKSBvblZhbGlkYXRlSW5wdXQ/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydvblZhbGlkYXRlSW5wdXQnXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zKHZhbHVlOiBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucykge1xyXG4gICAgdGhpcy5fcGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMucGlja2VyU3VnZ2VzdGlvbnNQcm9wcyA9IHRoaXMuX3RyYW5zZm9ybUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnNUb1Byb3BzKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwaWNrZXJTdWdnZXN0aW9uc09wdGlvbnMoKTogSUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckl0ZW0/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUGlja2VySXRlbVByb3BzPFQ+PjtcclxuICBASW5wdXQoKSByZW5kZXJTdWdnZXN0aW9uc0l0ZW0/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUmVuZGVyU3VnZ2VzdGlvbkl0ZW1Db250ZXh0PFQ+PjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW1zPzogVFtdIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogYW55OyBzZWxlY3RlZEl0ZW0/OiBUIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUmVtb3ZlU3VnZ2VzdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtOiBJUGVyc29uYVByb3BzIH0+KCk7XHJcblxyXG4gIHBpY2tlclN1Z2dlc3Rpb25zUHJvcHM6IElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcztcclxuICBvblJlbmRlclN1Z2dlc3Rpb25zSXRlbTogKFxyXG4gICAgcHJvcHM/OiBJUmVuZGVyU3VnZ2VzdGlvbkl0ZW1Db250ZXh0PFQ+LFxyXG4gICAgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVJlbmRlclN1Z2dlc3Rpb25JdGVtQ29udGV4dDxUPj5cclxuICApID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVySXRlbTogKHByb3BzPzogSVBpY2tlckl0ZW1Qcm9wczxUPiwgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVBpY2tlckl0ZW1Qcm9wczxUPj4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBwcml2YXRlIF9waWNrZXJTdWdnZXN0aW9uc09wdGlvbnM6IElCYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lLCBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRm9jdXNIYW5kbGVyID0gdGhpcy5vbkZvY3VzSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkJsdXJIYW5kbGVyID0gdGhpcy5vbkJsdXJIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlzbWlzc0hhbmRsZXIgPSB0aGlzLm9uRGlzbWlzc0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25SZW1vdmVTdWdnZXN0aW9uSGFuZGxlciA9IHRoaXMub25SZW1vdmVTdWdnZXN0aW9uSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVySXRlbSA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIHRoaXMub25SZW5kZXJTdWdnZXN0aW9uc0l0ZW0gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyU3VnZ2VzdGlvbnNJdGVtKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihpdGVtcz86IFRbXSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgaXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXNIYW5kbGVyKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBCYXNlQXV0b0ZpbGw+KSB7XHJcbiAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudC5uYXRpdmVFdmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXJIYW5kbGVyKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBCYXNlQXV0b0ZpbGw+KSB7XHJcbiAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50Lm5hdGl2ZUV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uRGlzbWlzc0hhbmRsZXIoZXY/OiBhbnksIHNlbGVjdGVkSXRlbT86IFQpIHtcclxuICAgIHRoaXMub25EaXNtaXNzLmVtaXQoe1xyXG4gICAgICBldjogKGV2ICYmIGV2Lm5hdGl2ZUV2ZW50KSB8fCBldixcclxuICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZVN1Z2dlc3Rpb25IYW5kbGVyKGl0ZW06IElQZXJzb25hUHJvcHMpIHtcclxuICAgIHRoaXMub25SZW1vdmVTdWdnZXN0aW9uLmVtaXQoe1xyXG4gICAgICBpdGVtLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1CYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zVG9Qcm9wcyhcclxuICAgIG9wdGlvbnM6IElCYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zXHJcbiAgKTogSUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KG9wdGlvbnMsICdyZW5kZXJOb1Jlc3VsdEZvdW5kJywgJ3JlbmRlclJlc3VsdHNGb290ZXJGdWxsJywgJ3JlbmRlclJlc3VsdHNGb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBub1Jlc3VsdEZvdW5kUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJOb1Jlc3VsdEZvdW5kKTtcclxuICAgIGNvbnN0IHJlc3VsdHNGb290ZXJGdWxsUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJSZXN1bHRzRm9vdGVyRnVsbCk7XHJcbiAgICBjb25zdCByZXN1bHRzRm9vdGVyUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIob3B0aW9ucy5yZW5kZXJSZXN1bHRzRm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIG5vUmVzdWx0Rm91bmRSZW5kZXJlciAmJlxyXG4gICAgICAgICh7IG9uUmVuZGVyTm9SZXN1bHRGb3VuZDogKCkgPT4gbm9SZXN1bHRGb3VuZFJlbmRlcmVyKHt9KSB9IGFzIFBpY2s8XHJcbiAgICAgICAgICBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHMsXHJcbiAgICAgICAgICAnb25SZW5kZXJOb1Jlc3VsdEZvdW5kJ1xyXG4gICAgICAgID4pLFxyXG4gICAgICByZXN1bHRzRm9vdGVyRnVsbFJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgcmVzdWx0c0Zvb3RlckZ1bGw6ICgpID0+IHJlc3VsdHNGb290ZXJGdWxsUmVuZGVyZXIoe30pIH0gYXMgUGljazxcclxuICAgICAgICAgIElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcyxcclxuICAgICAgICAgICdyZXN1bHRzRm9vdGVyRnVsbCdcclxuICAgICAgICA+KSxcclxuICAgICAgcmVzdWx0c0Zvb3RlclJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgcmVzdWx0c0Zvb3RlcjogKCkgPT4gcmVzdWx0c0Zvb3RlclJlbmRlcmVyKHt9KSB9IGFzIFBpY2s8SUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzLCAncmVzdWx0c0Zvb3Rlcic+KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnNcclxuICBleHRlbmRzIE9taXQ8SUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzLCAnb25SZW5kZXJOb1Jlc3VsdEZvdW5kJyB8ICdyZXN1bHRzRm9vdGVyRnVsbCcgfCAncmVzdWx0c0Zvb3Rlcic+IHtcclxuICByZWFkb25seSByZW5kZXJOb1Jlc3VsdEZvdW5kOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT47XHJcbiAgcmVhZG9ubHkgcmVuZGVyUmVzdWx0c0Zvb3RlckZ1bGw6IElucHV0UmVuZGVyZXJPcHRpb25zPHt9PjtcclxuICByZWFkb25seSByZW5kZXJSZXN1bHRzRm9vdGVyOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlclN1Z2dlc3Rpb25JdGVtQ29udGV4dDxUPiB7XHJcbiAgcmVhZG9ubHkgcHJvcHM6IFQ7XHJcbiAgcmVhZG9ubHkgaXRlbVByb3BzOiBhbnk7XHJcbn1cclxuIl19