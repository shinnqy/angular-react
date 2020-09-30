/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, ElementRef, Input, ViewChild, Output, } from '@angular/core';
var FabBaseTextFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabBaseTextFieldComponent, _super);
    function FabBaseTextFieldComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        _this.onClick = new EventEmitter();
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onBeforeChange = new EventEmitter();
        _this.onNotifyValidationResult = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        _this.valueChange = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onBeforeChangeHandler = _this.onBeforeChangeHandler.bind(_this);
        _this.onNotifyValidationResultHandler = _this.onNotifyValidationResultHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
        this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
        this.onRenderPrefix = this.createRenderPropHandler(this.renderPrefix);
        this.onRenderSuffix = this.createRenderPropHandler(this.renderSuffix);
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.onClickHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onClick.emit(ev && ev.nativeEvent);
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.onFocusHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onFocus.emit(ev && ev.nativeEvent);
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.onBlurHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onBlur.emit(ev && ev.nativeEvent);
    };
    /**
     * @param {?} event
     * @param {?=} newValue
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} newValue
     * @return {?}
     */
    function (event, newValue) {
        this.onChange.emit({ event: event.nativeEvent, newValue: newValue });
        this.valueChange.emit(newValue);
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.onBeforeChangeHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onBeforeChange.emit({ newValue: newValue });
    };
    /**
     * @param {?} errorMessage
     * @param {?} value
     * @return {?}
     */
    FabBaseTextFieldComponent.prototype.onNotifyValidationResultHandler = /**
     * @param {?} errorMessage
     * @param {?} value
     * @return {?}
     */
    function (errorMessage, value) {
        this.onNotifyValidationResult.emit({ errorMessage: errorMessage, value: value });
    };
    FabBaseTextFieldComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        required: [{ type: Input }],
        placeholder: [{ type: Input }],
        type: [{ type: Input }],
        cols: [{ type: Input }],
        colSpan: [{ type: Input }],
        rows: [{ type: Input }],
        rowSpan: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        pattern: [{ type: Input }],
        htmlFor: [{ type: Input, args: ['for',] }],
        componentRef: [{ type: Input }],
        multiline: [{ type: Input }],
        resizable: [{ type: Input }],
        autoAdjustHeight: [{ type: Input }],
        underlined: [{ type: Input }],
        borderless: [{ type: Input }],
        label: [{ type: Input }],
        description: [{ type: Input }],
        prefix: [{ type: Input }],
        suffix: [{ type: Input }],
        iconProps: [{ type: Input }],
        defaultValue: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        readOnly: [{ type: Input }],
        errorMessage: [{ type: Input }],
        deferredValidationTime: [{ type: Input }],
        className: [{ type: Input }],
        inputClassName: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        validateOnFocusIn: [{ type: Input }],
        validateOnFocusOut: [{ type: Input }],
        validateOnLoad: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        autoComplete: [{ type: Input }],
        mask: [{ type: Input }],
        maskChar: [{ type: Input }],
        maskFormat: [{ type: Input }],
        getErrorMessage: [{ type: Input }],
        renderLabel: [{ type: Input }],
        renderDescription: [{ type: Input }],
        renderPrefix: [{ type: Input }],
        renderSuffix: [{ type: Input }],
        maxLength: [{ type: Input }],
        onClick: [{ type: Output }],
        onFocus: [{ type: Output }],
        onBlur: [{ type: Output }],
        onChange: [{ type: Output }],
        onBeforeChange: [{ type: Output }],
        onNotifyValidationResult: [{ type: Output }],
        valueChange: [{ type: Output }]
    };
    return FabBaseTextFieldComponent;
}(ReactWrapperComponent));
export { FabBaseTextFieldComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabBaseTextFieldComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.required;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.placeholder;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.type;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.cols;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.colSpan;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.rows;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.rowSpan;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.min;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.max;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.pattern;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.htmlFor;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.componentRef;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.multiline;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.resizable;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.autoAdjustHeight;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.underlined;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.borderless;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.label;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.description;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.prefix;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.suffix;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.iconProps;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.defaultValue;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.value;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.disabled;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.readOnly;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.errorMessage;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.deferredValidationTime;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.className;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.inputClassName;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.ariaLabel;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.validateOnFocusIn;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.validateOnFocusOut;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.validateOnLoad;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.theme;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.styles;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.autoComplete;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.mask;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.maskChar;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.maskFormat;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.getErrorMessage;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.renderLabel;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.renderDescription;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.renderPrefix;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.renderSuffix;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.maxLength;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onClick;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onFocus;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onBlur;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onChange;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onBeforeChange;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onNotifyValidationResult;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.valueChange;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onRenderLabel;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onRenderDescription;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onRenderPrefix;
    /** @type {?} */
    FabBaseTextFieldComponent.prototype.onRenderSuffix;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10ZXh0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHQtZmllbGQvYmFzZS10ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUF1QyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFFTCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBRVQsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBQStDLHFEQUFzQztJQXNFbkYsbUNBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUE3RixZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FLekU7UUF2QmtCLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRW5DLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUNuRSxvQkFBYyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQzNELDhCQUF3QixHQUFHLElBQUksWUFBWSxFQUFxRSxDQUFDOzs7UUFJakgsaUJBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBVTFELEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDdkQsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDbkUsS0FBSSxDQUFDLCtCQUErQixHQUFHLEtBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ3pGLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLEVBQXFCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxrREFBYzs7OztJQUFkLFVBQWUsRUFBcUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGlEQUFhOzs7O0lBQWIsVUFBYyxFQUF5QjtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELG1EQUFlOzs7OztJQUFmLFVBQWdCLEtBQThELEVBQUUsUUFBaUI7UUFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCx5REFBcUI7Ozs7SUFBckIsVUFBc0IsUUFBYTtRQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCxtRUFBK0I7Ozs7O0lBQS9CLFVBQWdDLFlBQW9CLEVBQUUsS0FBeUI7UUFDN0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzsrQkEzR0EsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXZDLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLEtBQUs7K0JBRVgsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5Q0FDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSztpQ0FDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7OEJBRUwsS0FBSztvQ0FDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFFTCxLQUFLOzBCQUVMLE1BQU07MEJBQ04sTUFBTTt5QkFDTixNQUFNOzJCQUVOLE1BQU07aUNBQ04sTUFBTTsyQ0FDTixNQUFNOzhCQUlOLE1BQU07O0lBOENULGdDQUFDO0NBQUEsQUE3R0QsQ0FBK0MscUJBQXFCLEdBNkduRTtTQTdHWSx5QkFBeUI7Ozs7OztJQUNwQyxpREFBNkU7O0lBRTdFLDZDQUFnRDs7SUFDaEQsZ0RBQXNEOztJQUN0RCx5Q0FBd0M7O0lBQ3hDLHlDQUF3Qzs7SUFDeEMsNENBQThDOztJQUM5Qyx5Q0FBd0M7O0lBQ3hDLDRDQUE4Qzs7SUFDOUMsd0NBQXNDOztJQUN0Qyx3Q0FBc0M7O0lBQ3RDLDRDQUE4Qzs7SUFDOUMsNENBQW1EOztJQUVuRCxpREFBd0Q7O0lBQ3hELDhDQUFrRDs7SUFDbEQsOENBQWtEOztJQUNsRCxxREFBZ0U7O0lBQ2hFLCtDQUFvRDs7SUFDcEQsK0NBQW9EOztJQUNwRCwwQ0FBMEM7O0lBQzFDLGdEQUFzRDs7SUFDdEQsMkNBQTRDOztJQUM1QywyQ0FBNEM7O0lBQzVDLDhDQUFrRDs7SUFDbEQsaURBQXdEOztJQUN4RCwwQ0FBMEM7O0lBQzFDLDZDQUFnRDs7SUFDaEQsNkNBQWdEOztJQUNoRCxpREFBd0Q7O0lBQ3hELDJEQUE0RTs7SUFDNUUsOENBQWtEOztJQUNsRCxtREFBNEQ7O0lBQzVELDhDQUFrRDs7SUFDbEQsc0RBQWtFOztJQUNsRSx1REFBb0U7O0lBQ3BFLG1EQUE0RDs7SUFDNUQsMENBQTBDOztJQUMxQywyQ0FBNEM7O0lBQzVDLGlEQUF3RDs7SUFDeEQseUNBQXdDOztJQUN4Qyw2Q0FBZ0Q7O0lBQ2hELCtDQUFvRDs7SUFDcEQsb0RBQWdFOztJQUVoRSxnREFBNkQ7O0lBQzdELHNEQUFtRTs7SUFDbkUsaURBQThEOztJQUM5RCxpREFBOEQ7O0lBRTlELDhDQUEyQjs7SUFFM0IsNENBQTREOztJQUM1RCw0Q0FBNEQ7O0lBQzVELDJDQUFzRDs7SUFFdEQsNkNBQXNGOztJQUN0RixtREFBOEU7O0lBQzlFLDZEQUFvSTs7SUFJcEksZ0RBQTREOztJQUU1RCxrREFBd0c7O0lBQ3hHLHdEQUE4Rzs7SUFDOUcsbURBQXlHOztJQUN6RyxtREFBeUciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50LCBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRleHRGaWVsZFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvVGV4dEZpZWxkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWJCYXNlVGV4dEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElUZXh0RmllbGRQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHJlcXVpcmVkPzogSVRleHRGaWVsZFByb3BzWydyZXF1aXJlZCddO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogSVRleHRGaWVsZFByb3BzWydwbGFjZWhvbGRlciddO1xyXG4gIEBJbnB1dCgpIHR5cGU/OiBJVGV4dEZpZWxkUHJvcHNbJ3R5cGUnXTtcclxuICBASW5wdXQoKSBjb2xzPzogSVRleHRGaWVsZFByb3BzWydjb2xzJ107XHJcbiAgQElucHV0KCkgY29sU3Bhbj86IElUZXh0RmllbGRQcm9wc1snY29sU3BhbiddO1xyXG4gIEBJbnB1dCgpIHJvd3M/OiBJVGV4dEZpZWxkUHJvcHNbJ3Jvd3MnXTtcclxuICBASW5wdXQoKSByb3dTcGFuPzogSVRleHRGaWVsZFByb3BzWydyb3dTcGFuJ107XHJcbiAgQElucHV0KCkgbWluPzogSVRleHRGaWVsZFByb3BzWydtaW4nXTtcclxuICBASW5wdXQoKSBtYXg/OiBJVGV4dEZpZWxkUHJvcHNbJ21heCddO1xyXG4gIEBJbnB1dCgpIHBhdHRlcm4/OiBJVGV4dEZpZWxkUHJvcHNbJ3BhdHRlcm4nXTtcclxuICBASW5wdXQoJ2ZvcicpIGh0bWxGb3I/OiBJVGV4dEZpZWxkUHJvcHNbJ2h0bWxGb3InXTtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVRleHRGaWVsZFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBtdWx0aWxpbmU/OiBJVGV4dEZpZWxkUHJvcHNbJ211bHRpbGluZSddO1xyXG4gIEBJbnB1dCgpIHJlc2l6YWJsZT86IElUZXh0RmllbGRQcm9wc1sncmVzaXphYmxlJ107XHJcbiAgQElucHV0KCkgYXV0b0FkanVzdEhlaWdodD86IElUZXh0RmllbGRQcm9wc1snYXV0b0FkanVzdEhlaWdodCddO1xyXG4gIEBJbnB1dCgpIHVuZGVybGluZWQ/OiBJVGV4dEZpZWxkUHJvcHNbJ3VuZGVybGluZWQnXTtcclxuICBASW5wdXQoKSBib3JkZXJsZXNzPzogSVRleHRGaWVsZFByb3BzWydib3JkZXJsZXNzJ107XHJcbiAgQElucHV0KCkgbGFiZWw/OiBJVGV4dEZpZWxkUHJvcHNbJ2xhYmVsJ107XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb24/OiBJVGV4dEZpZWxkUHJvcHNbJ2Rlc2NyaXB0aW9uJ107XHJcbiAgQElucHV0KCkgcHJlZml4PzogSVRleHRGaWVsZFByb3BzWydwcmVmaXgnXTtcclxuICBASW5wdXQoKSBzdWZmaXg/OiBJVGV4dEZpZWxkUHJvcHNbJ3N1ZmZpeCddO1xyXG4gIEBJbnB1dCgpIGljb25Qcm9wcz86IElUZXh0RmllbGRQcm9wc1snaWNvblByb3BzJ107XHJcbiAgQElucHV0KCkgZGVmYXVsdFZhbHVlPzogSVRleHRGaWVsZFByb3BzWydkZWZhdWx0VmFsdWUnXTtcclxuICBASW5wdXQoKSB2YWx1ZT86IElUZXh0RmllbGRQcm9wc1sndmFsdWUnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElUZXh0RmllbGRQcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSByZWFkT25seT86IElUZXh0RmllbGRQcm9wc1sncmVhZE9ubHknXTtcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U/OiBJVGV4dEZpZWxkUHJvcHNbJ2Vycm9yTWVzc2FnZSddO1xyXG4gIEBJbnB1dCgpIGRlZmVycmVkVmFsaWRhdGlvblRpbWU/OiBJVGV4dEZpZWxkUHJvcHNbJ2RlZmVycmVkVmFsaWRhdGlvblRpbWUnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJVGV4dEZpZWxkUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGlucHV0Q2xhc3NOYW1lPzogSVRleHRGaWVsZFByb3BzWydpbnB1dENsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElUZXh0RmllbGRQcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgdmFsaWRhdGVPbkZvY3VzSW4/OiBJVGV4dEZpZWxkUHJvcHNbJ3ZhbGlkYXRlT25Gb2N1c0luJ107XHJcbiAgQElucHV0KCkgdmFsaWRhdGVPbkZvY3VzT3V0PzogSVRleHRGaWVsZFByb3BzWyd2YWxpZGF0ZU9uRm9jdXNPdXQnXTtcclxuICBASW5wdXQoKSB2YWxpZGF0ZU9uTG9hZD86IElUZXh0RmllbGRQcm9wc1sndmFsaWRhdGVPbkxvYWQnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElUZXh0RmllbGRQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJVGV4dEZpZWxkUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGF1dG9Db21wbGV0ZT86IElUZXh0RmllbGRQcm9wc1snYXV0b0NvbXBsZXRlJ107XHJcbiAgQElucHV0KCkgbWFzaz86IElUZXh0RmllbGRQcm9wc1snbWFzayddO1xyXG4gIEBJbnB1dCgpIG1hc2tDaGFyPzogSVRleHRGaWVsZFByb3BzWydtYXNrQ2hhciddO1xyXG4gIEBJbnB1dCgpIG1hc2tGb3JtYXQ/OiBJVGV4dEZpZWxkUHJvcHNbJ21hc2tGb3JtYXQnXTtcclxuICBASW5wdXQoKSBnZXRFcnJvck1lc3NhZ2U/OiBJVGV4dEZpZWxkUHJvcHNbJ29uR2V0RXJyb3JNZXNzYWdlJ107XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckxhYmVsPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVRleHRGaWVsZFByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJEZXNjcmlwdGlvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElUZXh0RmllbGRQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyUHJlZml4PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVRleHRGaWVsZFByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJTdWZmaXg/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJVGV4dEZpZWxkUHJvcHM+O1xyXG5cclxuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogRXZlbnQ7IG5ld1ZhbHVlPzogc3RyaW5nIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQmVmb3JlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5ld1ZhbHVlPzogc3RyaW5nIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTm90aWZ5VmFsaWRhdGlvblJlc3VsdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBlcnJvck1lc3NhZ2U6IHN0cmluZyB8IEpTWC5FbGVtZW50OyB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIH0+KCk7XHJcblxyXG4gIC8qIE5vbi1SZWFjdCBwcm9wcywgbW9yZSBuYXRpdmUgc3VwcG9ydCBmb3IgQW5ndWxhciAqL1xyXG4gIC8vIHN1cHBvcnQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nIGZvciBgQElucHV0KCkgY2hlY2tlZGAuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIG9uUmVuZGVyTGFiZWw6IChwcm9wcz86IElUZXh0RmllbGRQcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVRleHRGaWVsZFByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJEZXNjcmlwdGlvbjogKHByb3BzPzogSVRleHRGaWVsZFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJVGV4dEZpZWxkUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlclByZWZpeDogKHByb3BzPzogSVRleHRGaWVsZFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJVGV4dEZpZWxkUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlclN1ZmZpeDogKHByb3BzPzogSVRleHRGaWVsZFByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJVGV4dEZpZWxkUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkJlZm9yZUNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQmVmb3JlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5vdGlmeVZhbGlkYXRpb25SZXN1bHRIYW5kbGVyID0gdGhpcy5vbk5vdGlmeVZhbGlkYXRpb25SZXN1bHRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJMYWJlbCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJMYWJlbCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyRGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyRGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5vblJlbmRlclByZWZpeCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJQcmVmaXgpO1xyXG4gICAgdGhpcy5vblJlbmRlclN1ZmZpeCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJTdWZmaXgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0hhbmRsZXIoZXY/OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLm9uQ2xpY2suZW1pdChldiAmJiBldi5uYXRpdmVFdmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzSGFuZGxlcihldj86IFJlYWN0LkZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ICYmIGV2Lm5hdGl2ZUV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQmx1ckhhbmRsZXIoZXY/OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgdGhpcy5vbkJsdXIuZW1pdChldiAmJiBldi5uYXRpdmVFdmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sIG5ld1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBldmVudDogZXZlbnQubmF0aXZlRXZlbnQsIG5ld1ZhbHVlIH0pO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uQmVmb3JlQ2hhbmdlSGFuZGxlcihuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLm9uQmVmb3JlQ2hhbmdlLmVtaXQoeyBuZXdWYWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uTm90aWZ5VmFsaWRhdGlvblJlc3VsdEhhbmRsZXIoZXJyb3JNZXNzYWdlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMub25Ob3RpZnlWYWxpZGF0aW9uUmVzdWx0LmVtaXQoeyBlcnJvck1lc3NhZ2UsIHZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=