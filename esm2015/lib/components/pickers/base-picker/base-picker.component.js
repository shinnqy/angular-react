/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
/**
 * @abstract
 * @template T, TProps
 */
export class FabBasePickerComponent extends ReactWrapperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGlja2Vycy9iYXNlLXBpY2tlci9iYXNlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUE2QyxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZHLE9BQU8sRUFBaUMsWUFBWSxFQUFFLEtBQUssRUFBa0IsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBUXRILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFFdkQsTUFBTSxPQUFnQixzQkFDcEIsU0FBUSxxQkFBNkI7Ozs7Ozs7SUFzRHJDLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFoQmhFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMvQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDL0QsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFjbEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFB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RDs7SUFDdkQsZ0VBQTJEOztJQUMzRCw0REFBdUQ7Ozs7OztBQUd6RCxrREFHQzs7O0lBRkMsNkNBQWtCOztJQUNsQixpREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEpzeFJlbmRlckZ1bmMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQZXJzb25hUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QZXJzb25hJztcclxuaW1wb3J0IHtcclxuICBCYXNlQXV0b0ZpbGwsXHJcbiAgSUJhc2VQaWNrZXJQcm9wcyxcclxuICBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHMsXHJcbiAgSVBpY2tlckl0ZW1Qcm9wcyxcclxufSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QaWNrZXJzJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYkJhc2VQaWNrZXJDb21wb25lbnQ8VCwgVFByb3BzIGV4dGVuZHMgSUJhc2VQaWNrZXJQcm9wczxUPj5cclxuICBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxUUHJvcHM+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHJlc29sdmVEZWxheT86IElCYXNlUGlja2VyUHJvcHM8VD5bJ3Jlc29sdmVEZWxheSddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3RlZEl0ZW1zPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnZGVmYXVsdFNlbGVjdGVkSXRlbXMnXTtcclxuICBASW5wdXQoKSBnZXRUZXh0RnJvbUl0ZW0/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydnZXRUZXh0RnJvbUl0ZW0nXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBwaWNrZXJDYWxsb3V0UHJvcHM/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydwaWNrZXJDYWxsb3V0UHJvcHMnXTtcclxuICBASW5wdXQoKSBzZWFyY2hpbmdUZXh0PzogSUJhc2VQaWNrZXJQcm9wczxUPlsnc2VhcmNoaW5nVGV4dCddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSUJhc2VQaWNrZXJQcm9wczxUPlsnZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBpdGVtTGltaXQ/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydpdGVtTGltaXQnXTtcclxuICBASW5wdXQoKSBjcmVhdGVHZW5lcmljSXRlbT86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2NyZWF0ZUdlbmVyaWNJdGVtJ107XHJcbiAgQElucHV0KCkgcmVtb3ZlQnV0dG9uQXJpYUxhYmVsPzogSUJhc2VQaWNrZXJQcm9wczxUPlsncmVtb3ZlQnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtcz86IElCYXNlUGlja2VyUHJvcHM8VD5bJ3NlbGVjdGVkSXRlbXMnXTtcclxuICBASW5wdXQoKSBlbmFibGVTZWxlY3RlZFN1Z2dlc3Rpb25BbGVydD86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2VuYWJsZVNlbGVjdGVkU3VnZ2VzdGlvbkFsZXJ0J107XHJcbiAgQElucHV0KCkgaW5wdXRQcm9wcz86IElCYXNlUGlja2VyUHJvcHM8VD5bJ2lucHV0UHJvcHMnXTtcclxuICBASW5wdXQoJ2l0ZW1TZWxlY3RlZCcpIG9uSXRlbVNlbGVjdGVkPzogKHNlbGVjdGVkSXRlbT86IFQpID0+IFQgfCBQcm9taXNlTGlrZTxUPiB8IG51bGw7XHJcbiAgQElucHV0KCdpbnB1dENoYW5nZScpIG9uSW5wdXRDaGFuZ2U/OiAoaW5wdXQ6IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgnZW1wdHlJbnB1dEZvY3VzJykgb25FbXB0eUlucHV0Rm9jdXM/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydvbkVtcHR5SW5wdXRGb2N1cyddO1xyXG4gIEBJbnB1dCgncmVzb2x2ZVN1Z2dlc3Rpb25zJykgb25SZXNvbHZlU3VnZ2VzdGlvbnM6IElCYXNlUGlja2VyUHJvcHM8VD5bJ29uUmVzb2x2ZVN1Z2dlc3Rpb25zJ107XHJcbiAgQElucHV0KCdnZXRNb3JlUmVzdWx0cycpIG9uR2V0TW9yZVJlc3VsdHM/OiBJQmFzZVBpY2tlclByb3BzPFQ+WydvbkdldE1vcmVSZXN1bHRzJ107XHJcbiAgQElucHV0KCd2YWxpZGF0ZUlucHV0Jykgb25WYWxpZGF0ZUlucHV0PzogSUJhc2VQaWNrZXJQcm9wczxUPlsnb25WYWxpZGF0ZUlucHV0J107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucyh2YWx1ZTogSUJhc2VQaWNrZXJTdWdnZXN0aW9uc09wdGlvbnMpIHtcclxuICAgIHRoaXMuX3BpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucyA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnBpY2tlclN1Z2dlc3Rpb25zUHJvcHMgPSB0aGlzLl90cmFuc2Zvcm1CYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zVG9Qcm9wcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zKCk6IElCYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9waWNrZXJTdWdnZXN0aW9uc09wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSByZW5kZXJJdGVtPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBpY2tlckl0ZW1Qcm9wczxUPj47XHJcbiAgQElucHV0KCkgcmVuZGVyU3VnZ2VzdGlvbnNJdGVtPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVJlbmRlclN1Z2dlc3Rpb25JdGVtQ29udGV4dDxUPj47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtcz86IFRbXSB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IGFueTsgc2VsZWN0ZWRJdGVtPzogVCB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJlbW92ZVN1Z2dlc3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbTogSVBlcnNvbmFQcm9wcyB9PigpO1xyXG5cclxuICBwaWNrZXJTdWdnZXN0aW9uc1Byb3BzOiBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHM7XHJcbiAgb25SZW5kZXJTdWdnZXN0aW9uc0l0ZW06IChcclxuICAgIHByb3BzPzogSVJlbmRlclN1Z2dlc3Rpb25JdGVtQ29udGV4dDxUPixcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElSZW5kZXJTdWdnZXN0aW9uSXRlbUNvbnRleHQ8VD4+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckl0ZW06IChwcm9wcz86IElQaWNrZXJJdGVtUHJvcHM8VD4sIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQaWNrZXJJdGVtUHJvcHM8VD4+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBfcGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zOiBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZvY3VzSGFuZGxlciA9IHRoaXMub25Gb2N1c0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25CbHVySGFuZGxlciA9IHRoaXMub25CbHVySGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpc21pc3NIYW5kbGVyID0gdGhpcy5vbkRpc21pc3NIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUmVtb3ZlU3VnZ2VzdGlvbkhhbmRsZXIgPSB0aGlzLm9uUmVtb3ZlU3VnZ2VzdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckl0ZW0gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB0aGlzLm9uUmVuZGVyU3VnZ2VzdGlvbnNJdGVtID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclN1Z2dlc3Rpb25zSXRlbSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIoaXRlbXM/OiBUW10pIHtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzSGFuZGxlcihldmVudDogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgQmFzZUF1dG9GaWxsPikge1xyXG4gICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQubmF0aXZlRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVySGFuZGxlcihldmVudDogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgQmFzZUF1dG9GaWxsPikge1xyXG4gICAgdGhpcy5vbkJsdXIuZW1pdChldmVudC5uYXRpdmVFdmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkRpc21pc3NIYW5kbGVyKGV2PzogYW55LCBzZWxlY3RlZEl0ZW0/OiBUKSB7XHJcbiAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KHtcclxuICAgICAgZXY6IChldiAmJiBldi5uYXRpdmVFdmVudCkgfHwgZXYsXHJcbiAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVTdWdnZXN0aW9uSGFuZGxlcihpdGVtOiBJUGVyc29uYVByb3BzKSB7XHJcbiAgICB0aGlzLm9uUmVtb3ZlU3VnZ2VzdGlvbi5lbWl0KHtcclxuICAgICAgaXRlbSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9uc1RvUHJvcHMoXHJcbiAgICBvcHRpb25zOiBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zT3B0aW9uc1xyXG4gICk6IElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcyB7XHJcbiAgICBjb25zdCBzaGFyZWRQcm9wZXJ0aWVzID0gb21pdChvcHRpb25zLCAncmVuZGVyTm9SZXN1bHRGb3VuZCcsICdyZW5kZXJSZXN1bHRzRm9vdGVyRnVsbCcsICdyZW5kZXJSZXN1bHRzRm9vdGVyJyk7XHJcblxyXG4gICAgY29uc3Qgbm9SZXN1bHRGb3VuZFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyTm9SZXN1bHRGb3VuZCk7XHJcbiAgICBjb25zdCByZXN1bHRzRm9vdGVyRnVsbFJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyUmVzdWx0c0Zvb3RlckZ1bGwpO1xyXG4gICAgY29uc3QgcmVzdWx0c0Zvb3RlclJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKG9wdGlvbnMucmVuZGVyUmVzdWx0c0Zvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBub1Jlc3VsdEZvdW5kUmVuZGVyZXIgJiZcclxuICAgICAgICAoeyBvblJlbmRlck5vUmVzdWx0Rm91bmQ6ICgpID0+IG5vUmVzdWx0Rm91bmRSZW5kZXJlcih7fSkgfSBhcyBQaWNrPFxyXG4gICAgICAgICAgSUJhc2VQaWNrZXJTdWdnZXN0aW9uc1Byb3BzLFxyXG4gICAgICAgICAgJ29uUmVuZGVyTm9SZXN1bHRGb3VuZCdcclxuICAgICAgICA+KSxcclxuICAgICAgcmVzdWx0c0Zvb3RlckZ1bGxSZW5kZXJlciAmJlxyXG4gICAgICAgICh7IHJlc3VsdHNGb290ZXJGdWxsOiAoKSA9PiByZXN1bHRzRm9vdGVyRnVsbFJlbmRlcmVyKHt9KSB9IGFzIFBpY2s8XHJcbiAgICAgICAgICBJQmFzZVBpY2tlclN1Z2dlc3Rpb25zUHJvcHMsXHJcbiAgICAgICAgICAncmVzdWx0c0Zvb3RlckZ1bGwnXHJcbiAgICAgICAgPiksXHJcbiAgICAgIHJlc3VsdHNGb290ZXJSZW5kZXJlciAmJlxyXG4gICAgICAgICh7IHJlc3VsdHNGb290ZXI6ICgpID0+IHJlc3VsdHNGb290ZXJSZW5kZXJlcih7fSkgfSBhcyBQaWNrPElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcywgJ3Jlc3VsdHNGb290ZXInPilcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlUGlja2VyU3VnZ2VzdGlvbnNPcHRpb25zXHJcbiAgZXh0ZW5kcyBPbWl0PElCYXNlUGlja2VyU3VnZ2VzdGlvbnNQcm9wcywgJ29uUmVuZGVyTm9SZXN1bHRGb3VuZCcgfCAncmVzdWx0c0Zvb3RlckZ1bGwnIHwgJ3Jlc3VsdHNGb290ZXInPiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVyTm9SZXN1bHRGb3VuZDogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+O1xyXG4gIHJlYWRvbmx5IHJlbmRlclJlc3VsdHNGb290ZXJGdWxsOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT47XHJcbiAgcmVhZG9ubHkgcmVuZGVyUmVzdWx0c0Zvb3RlcjogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZW5kZXJTdWdnZXN0aW9uSXRlbUNvbnRleHQ8VD4ge1xyXG4gIHJlYWRvbmx5IHByb3BzOiBUO1xyXG4gIHJlYWRvbmx5IGl0ZW1Qcm9wczogYW55O1xyXG59XHJcbiJdfQ==