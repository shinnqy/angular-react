import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { EventEmitter, ViewChild, Input, Output, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabBaseTextFieldComponent = /** @class */ (function (_super) {
    __extends(FabBaseTextFieldComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabTextFieldComponent = /** @class */ (function (_super) {
    __extends(FabTextFieldComponent, _super);
    function FabTextFieldComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabTextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-text-field',
                    exportAs: 'fabTextField',
                    template: "\n    <TextField\n      #reactNode\n      [required]=\"required\"\n      [placeholder]=\"placeholder\"\n      [type]=\"type\"\n      [cols]=\"cols\"\n      [colSpan]=\"colSpan\"\n      [rows]=\"rows\"\n      [rowSpan]=\"rowSpan\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [pattern]=\"pattern\"\n      [htmlFor]=\"htmlFor\"\n      [componentRef]=\"componentRef\"\n      [multiline]=\"multiline\"\n      [resizable]=\"resizable\"\n      [autoAdjustHeight]=\"autoAdjustHeight\"\n      [underlined]=\"underlined\"\n      [borderless]=\"borderless\"\n      [label]=\"label\"\n      [description]=\"description\"\n      [prefix]=\"prefix\"\n      [suffix]=\"suffix\"\n      [iconProps]=\"iconProps\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"readOnly\"\n      [errorMessage]=\"errorMessage\"\n      [deferredValidationTime]=\"deferredValidationTime\"\n      [className]=\"className\"\n      [inputClassName]=\"inputClassName\"\n      [ariaLabel]=\"ariaLabel\"\n      [validateOnFocusIn]=\"validateOnFocusIn\"\n      [validateOnFocusOut]=\"validateOnFocusOut\"\n      [validateOnLoad]=\"validateOnLoad\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [autoComplete]=\"autoComplete\"\n      [mask]=\"mask\"\n      [maskChar]=\"maskChar\"\n      [maskFormat]=\"maskFormat\"\n      [GetErrorMessage]=\"getErrorMessage\"\n      [RenderLabel]=\"renderLabel\"\n      [RenderDescription]=\"renderDescription\"\n      [RenderPrefix]=\"renderPrefix\"\n      [RenderSuffix]=\"renderSuffix\"\n      [Change]=\"onChangeHandler\"\n      [BeforeChange]=\"onBeforeChangeHandler\"\n      [maxLength]=\"maxLength\"\n      [NotifyValidationResult]=\"onNotifyValidationResultHandler\"\n      (onClick)=\"onClickHandler($event)\"\n      (onFocus)=\"onFocusHandler($event)\"\n      (onBlur)=\"onBlurHandler($event)\"\n    >\n    </TextField>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTextFieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabTextFieldComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabTextFieldComponent;
}(FabBaseTextFieldComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTextFieldComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabMaskedTextFieldComponent = /** @class */ (function (_super) {
    __extends(FabMaskedTextFieldComponent, _super);
    function FabMaskedTextFieldComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabMaskedTextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-masked-text-field',
                    exportAs: 'fabMaskedTextField',
                    template: "\n    <MaskedTextField\n      #reactNode\n      [required]=\"required\"\n      [placeholder]=\"placeholder\"\n      [type]=\"type\"\n      [cols]=\"cols\"\n      [colSpan]=\"colSpan\"\n      [rows]=\"rows\"\n      [rowSpan]=\"rowSpan\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [pattern]=\"pattern\"\n      [htmlFor]=\"htmlFor\"\n      [componentRef]=\"componentRef\"\n      [multiline]=\"multiline\"\n      [resizable]=\"resizable\"\n      [autoAdjustHeight]=\"autoAdjustHeight\"\n      [underlined]=\"underlined\"\n      [borderless]=\"borderless\"\n      [label]=\"label\"\n      [description]=\"description\"\n      [prefix]=\"prefix\"\n      [suffix]=\"suffix\"\n      [iconProps]=\"iconProps\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"readOnly\"\n      [errorMessage]=\"errorMessage\"\n      [deferredValidationTime]=\"deferredValidationTime\"\n      [className]=\"className\"\n      [inputClassName]=\"inputClassName\"\n      [ariaLabel]=\"ariaLabel\"\n      [validateOnFocusIn]=\"validateOnFocusIn\"\n      [validateOnFocusOut]=\"validateOnFocusOut\"\n      [validateOnLoad]=\"validateOnLoad\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [autoComplete]=\"autoComplete\"\n      [mask]=\"mask\"\n      [maskChar]=\"maskChar\"\n      [maskFormat]=\"maskFormat\"\n      [GetErrorMessage]=\"getErrorMessage\"\n      [RenderLabel]=\"renderLabel\"\n      [RenderDescription]=\"renderDescription\"\n      [RenderPrefix]=\"renderPrefix\"\n      [RenderSuffix]=\"renderSuffix\"\n      [Change]=\"onChangeHandler\"\n      [BeforeChange]=\"onBeforeChangeHandler\"\n      [NotifyValidationResult]=\"onNotifyValidationResultHandler\"\n      (onClick)=\"onClickHandler($event)\"\n      (onFocus)=\"onFocusHandler($event)\"\n      (onBlur)=\"onBlurHandler($event)\"\n    >\n    </MaskedTextField>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMaskedTextFieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabMaskedTextFieldComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabMaskedTextFieldComponent;
}(FabBaseTextFieldComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMaskedTextFieldComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabTextFieldComponent, FabMaskedTextFieldComponent];
var FabTextFieldModule = /** @class */ (function () {
    function FabTextFieldModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TextField', (/**
         * @return {?}
         */
        function () { return TextField; }));
        registerElement('MaskedTextField', (/**
         * @return {?}
         */
        function () { return MaskedTextField; }));
    }
    FabTextFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabTextFieldModule.ctorParameters = function () { return []; };
    return FabTextFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabMaskedTextFieldComponent, FabTextFieldComponent, FabTextFieldModule, FabBaseTextFieldComponent as ɵa };
//# sourceMappingURL=angular-react-fabric-lib-components-text-field.js.map
