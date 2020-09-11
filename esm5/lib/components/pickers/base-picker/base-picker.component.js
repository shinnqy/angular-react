/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, Input, Output } from '@angular/core';
import omit from 'angular-react-toolkit/utils/omit';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL3BpY2tlcnMvIiwic291cmNlcyI6WyJiYXNlLXBpY2tlci9iYXNlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBNkMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RyxPQUFPLEVBQWlDLFlBQVksRUFBRSxLQUFLLEVBQWtCLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQVF0SCxPQUFPLElBQUksTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFcEQ7SUFDVSxrREFBNkI7SUFzRHJDLGdDQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQTdHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQU9qRjtRQXZCa0IsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQy9DLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3hDLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQUMvRCx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQWNsRixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDckQsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENB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Q0FBNEQ7O0lBQzVELHdDQUEyRDs7SUFDM0QsMkNBQWtGOztJQUNsRixvREFBb0Y7O0lBRXBGLHdEQUFvRDs7SUFDcEQseURBR2lCOztJQUNqQiw4Q0FBK0c7Ozs7O0lBRS9HLDJEQUFpRTs7Ozs7QUF3RW5FLG1EQUtDOzs7SUFIQyw0REFBdUQ7O0lBQ3ZELGdFQUEyRDs7SUFDM0QsNERBQXVEOzs7Ozs7QUFHekQsa0RBR0M7OztJQUZDLDZDQUFrQjs7SUFDbEIsaURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBPbWl0LCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGVyc29uYVByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUGVyc29uYSc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUF1dG9GaWxsLFxyXG4gIElCYXNlUGlja2VyUHJvcHMsXHJcbiAgSUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzLFxyXG4gIElQaWNrZXJJdGVtUHJvcHMsXHJcbn0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUGlja2Vycyc7XHJcbmltcG9ydCBvbWl0IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9vbWl0JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJCYXNlUGlja2VyQ29tcG9uZW50PFQsIFRQcm9wcyBleHRlbmRzIElCYXNlUGlja2VyUHJvcHM8VD4+XHJcbiAgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8VFByb3BzPlxyXG4gIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJQmFzZVBpY2tlclByb3BzPFQ+Wydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSByZXNvbHZlRGVsYXk/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydyZXNvbHZlRGVsYXknXTtcclxuICBASW5wdXQoKSBkZWZhdWx0U2VsZWN0ZWRJdGVtcz86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2RlZmF1bHRTZWxlY3RlZEl0ZW1zJ107XHJcbiAgQElucHV0KCkgZ2V0VGV4dEZyb21JdGVtPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnZ2V0VGV4dEZyb21JdGVtJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgcGlja2VyQ2FsbG91dFByb3BzPzogSUJhc2VQaWNrZXJQcm9wczxUPlsncGlja2VyQ2FsbG91dFByb3BzJ107XHJcbiAgQElucHV0KCkgc2VhcmNoaW5nVGV4dD86IElCYXNlUGlja2VyUHJvcHM8VD5bJ3NlYXJjaGluZ1RleHQnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgaXRlbUxpbWl0PzogSUJhc2VQaWNrZXJQcm9wczxUPlsnaXRlbUxpbWl0J107XHJcbiAgQElucHV0KCkgY3JlYXRlR2VuZXJpY0l0ZW0/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydjcmVhdGVHZW5lcmljSXRlbSddO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUJ1dHRvbkFyaWFMYWJlbD86IElCYXNlUGlja2VyUHJvcHM8VD5bJ3JlbW92ZUJ1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbXM/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydzZWxlY3RlZEl0ZW1zJ107XHJcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0ZWRTdWdnZXN0aW9uQWxlcnQ/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydlbmFibGVTZWxlY3RlZFN1Z2dlc3Rpb25BbGVydCddO1xyXG4gIEBJbnB1dCgpIGlucHV0UHJvcHM/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydpbnB1dFByb3BzJ107XHJcbiAgQElucHV0KCdpdGVtU2VsZWN0ZWQnKSBvbkl0ZW1TZWxlY3RlZD86IChzZWxlY3RlZEl0ZW0/OiBUKSA9PiBUIHwgUHJvbWlzZUxpa2U8VD4gfCBudWxsO1xyXG4gIEBJbnB1dCgnaW5wdXRDaGFuZ2UnKSBvbklucHV0Q2hhbmdlPzogKGlucHV0OiBzdHJpbmcpID0+IHN0cmluZztcclxuICBASW5wdXQoJ2VtcHR5SW5wdXRGb2N1cycpIG9uRW1wdHlJbnB1dEZvY3VzPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnb25FbXB0eUlucHV0Rm9jdXMnXTtcclxuICBASW5wdXQoJ3Jlc29sdmVTdWdnZXN0aW9ucycpIG9uUmVzb2x2ZVN1Z2dlc3Rpb25zOiBJQmFzZVBpY2tlclByb3BzPFQ+WydvblJlc29sdmVTdWdnZXN0aW9ucyddO1xyXG4gIEBJbnB1dCgnZ2V0TW9yZVJlc3VsdHMnKSBvbkdldE1vcmVSZXN1bHRzPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnb25HZXRNb3JlUmVzdWx0cyddO1xyXG4gIEBJbnB1dCgndmFsaWRhdGVJbnB1dCcpIG9uVmFsaWRhdGVJbnB1dD86IElCYXNlUGlja2VyUHJvcHM8VD5bJ29uVmFsaWRhdGVJbnB1dCddO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwaWNrZXJTdWdnZXN0aW9uc09wdGlvbnModmFsdWU6IElCYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9waWNrZXJTdWdnZXN0aW9uc09wdGlvbnMgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5waWNrZXJTdWdnZXN0aW9uc1Byb3BzID0gdGhpcy5fdHJhbnNmb3JtQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9uc1RvUHJvcHModmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucygpOiBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgcmVuZGVySXRlbT86IElucHV0UmVuZGVyZXJPcHRpb25zPElQaWNrZXJJdGVtUHJvcHM8VD4+O1xyXG4gIEBJbnB1dCgpIHJlbmRlclN1Z2dlc3Rpb25zSXRlbT86IElucHV0UmVuZGVyZXJPcHRpb25zPElSZW5kZXJTdWdnZXN0aW9uSXRlbUNvbnRleHQ8VD4+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbXM/OiBUW10gfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBhbnk7IHNlbGVjdGVkSXRlbT86IFQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25SZW1vdmVTdWdnZXN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx7IGl0ZW06IElQZXJzb25hUHJvcHMgfT4oKTtcclxuXHJcbiAgcGlja2VyU3VnZ2VzdGlvbnNQcm9wczogSUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzO1xyXG4gIG9uUmVuZGVyU3VnZ2VzdGlvbnNJdGVtOiAoXHJcbiAgICBwcm9wcz86IElSZW5kZXJTdWdnZXN0aW9uSXRlbUNvbnRleHQ8VD4sXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUmVuZGVyU3VnZ2VzdGlvbkl0ZW1Db250ZXh0PFQ+PlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJJdGVtOiAocHJvcHM/OiBJUGlja2VySXRlbVByb3BzPFQ+LCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJUGlja2VySXRlbVByb3BzPFQ+PikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgX3BpY2tlclN1Z2dlc3Rpb25zT3B0aW9uczogSUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Gb2N1c0hhbmRsZXIgPSB0aGlzLm9uRm9jdXNIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQmx1ckhhbmRsZXIgPSB0aGlzLm9uQmx1ckhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EaXNtaXNzSGFuZGxlciA9IHRoaXMub25EaXNtaXNzSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJlbW92ZVN1Z2dlc3Rpb25IYW5kbGVyID0gdGhpcy5vblJlbW92ZVN1Z2dlc3Rpb25IYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJJdGVtID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckl0ZW0pO1xyXG4gICAgdGhpcy5vblJlbmRlclN1Z2dlc3Rpb25zSXRlbSA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJTdWdnZXN0aW9uc0l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyKGl0ZW1zPzogVFtdKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICBpdGVtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0hhbmRsZXIoZXZlbnQ6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEJhc2VBdXRvRmlsbD4pIHtcclxuICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50Lm5hdGl2ZUV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQmx1ckhhbmRsZXIoZXZlbnQ6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEJhc2VBdXRvRmlsbD4pIHtcclxuICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQubmF0aXZlRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25EaXNtaXNzSGFuZGxlcihldj86IGFueSwgc2VsZWN0ZWRJdGVtPzogVCkge1xyXG4gICAgdGhpcy5vbkRpc21pc3MuZW1pdCh7XHJcbiAgICAgIGV2OiAoZXYgJiYgZXYubmF0aXZlRXZlbnQpIHx8IGV2LFxyXG4gICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlU3VnZ2VzdGlvbkhhbmRsZXIoaXRlbTogSVBlcnNvbmFQcm9wcykge1xyXG4gICAgdGhpcy5vblJlbW92ZVN1Z2dlc3Rpb24uZW1pdCh7XHJcbiAgICAgIGl0ZW0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnNUb1Byb3BzKFxyXG4gICAgb3B0aW9uczogSUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnNcclxuICApOiBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHMge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQob3B0aW9ucywgJ3JlbmRlck5vUmVzdWx0Rm91bmQnLCAncmVuZGVyUmVzdWx0c0Zvb3RlckZ1bGwnLCAncmVuZGVyUmVzdWx0c0Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IG5vUmVzdWx0Rm91bmRSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlck5vUmVzdWx0Rm91bmQpO1xyXG4gICAgY29uc3QgcmVzdWx0c0Zvb3RlckZ1bGxSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlclJlc3VsdHNGb290ZXJGdWxsKTtcclxuICAgIGNvbnN0IHJlc3VsdHNGb290ZXJSZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihvcHRpb25zLnJlbmRlclJlc3VsdHNGb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgc2hhcmVkUHJvcGVydGllcyxcclxuICAgICAgbm9SZXN1bHRGb3VuZFJlbmRlcmVyICYmXHJcbiAgICAgICAgKHsgb25SZW5kZXJOb1Jlc3VsdEZvdW5kOiAoKSA9PiBub1Jlc3VsdEZvdW5kUmVuZGVyZXIoe30pIH0gYXMgUGljazxcclxuICAgICAgICAgIElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcyxcclxuICAgICAgICAgICdvblJlbmRlck5vUmVzdWx0Rm91bmQnXHJcbiAgICAgICAgPiksXHJcbiAgICAgIHJlc3VsdHNGb290ZXJGdWxsUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyByZXN1bHRzRm9vdGVyRnVsbDogKCkgPT4gcmVzdWx0c0Zvb3RlckZ1bGxSZW5kZXJlcih7fSkgfSBhcyBQaWNrPFxyXG4gICAgICAgICAgSUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzLFxyXG4gICAgICAgICAgJ3Jlc3VsdHNGb290ZXJGdWxsJ1xyXG4gICAgICAgID4pLFxyXG4gICAgICByZXN1bHRzRm9vdGVyUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyByZXN1bHRzRm9vdGVyOiAoKSA9PiByZXN1bHRzRm9vdGVyUmVuZGVyZXIoe30pIH0gYXMgUGljazxJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHMsICdyZXN1bHRzRm9vdGVyJz4pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9uc1xyXG4gIGV4dGVuZHMgT21pdDxJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHMsICdvblJlbmRlck5vUmVzdWx0Rm91bmQnIHwgJ3Jlc3VsdHNGb290ZXJGdWxsJyB8ICdyZXN1bHRzRm9vdGVyJz4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlck5vUmVzdWx0Rm91bmQ6IElucHV0UmVuZGVyZXJPcHRpb25zPHt9PjtcclxuICByZWFkb25seSByZW5kZXJSZXN1bHRzRm9vdGVyRnVsbDogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+O1xyXG4gIHJlYWRvbmx5IHJlbmRlclJlc3VsdHNGb290ZXI6IElucHV0UmVuZGVyZXJPcHRpb25zPHt9PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVuZGVyU3VnZ2VzdGlvbkl0ZW1Db250ZXh0PFQ+IHtcclxuICByZWFkb25seSBwcm9wczogVDtcclxuICByZWFkb25seSBpdGVtUHJvcHM6IGFueTtcclxufVxyXG4iXX0=