import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { EventEmitter, ViewChild, Input, Output, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabBaseTextFieldComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onBeforeChange = new EventEmitter();
        this.onNotifyValidationResult = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        this.valueChange = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBeforeChangeHandler = this.onBeforeChangeHandler.bind(this);
        this.onNotifyValidationResultHandler = this.onNotifyValidationResultHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
        this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
        this.onRenderPrefix = this.createRenderPropHandler(this.renderPrefix);
        this.onRenderSuffix = this.createRenderPropHandler(this.renderSuffix);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onClickHandler(ev) {
        this.onClick.emit(ev && ev.nativeEvent);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onFocusHandler(ev) {
        this.onFocus.emit(ev && ev.nativeEvent);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onBlurHandler(ev) {
        this.onBlur.emit(ev && ev.nativeEvent);
    }
    /**
     * @param {?} event
     * @param {?=} newValue
     * @return {?}
     */
    onChangeHandler(event, newValue) {
        this.onChange.emit({ event: event.nativeEvent, newValue });
        this.valueChange.emit(newValue);
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onBeforeChangeHandler(newValue) {
        this.onBeforeChange.emit({ newValue });
    }
    /**
     * @param {?} errorMessage
     * @param {?} value
     * @return {?}
     */
    onNotifyValidationResultHandler(errorMessage, value) {
        this.onNotifyValidationResult.emit({ errorMessage, value });
    }
}
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
class FabTextFieldComponent extends FabBaseTextFieldComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-text-field',
                exportAs: 'fabTextField',
                template: `
    <TextField
      #reactNode
      [required]="required"
      [placeholder]="placeholder"
      [type]="type"
      [cols]="cols"
      [colSpan]="colSpan"
      [rows]="rows"
      [rowSpan]="rowSpan"
      [min]="min"
      [max]="max"
      [pattern]="pattern"
      [htmlFor]="htmlFor"
      [componentRef]="componentRef"
      [multiline]="multiline"
      [resizable]="resizable"
      [autoAdjustHeight]="autoAdjustHeight"
      [underlined]="underlined"
      [borderless]="borderless"
      [label]="label"
      [description]="description"
      [prefix]="prefix"
      [suffix]="suffix"
      [iconProps]="iconProps"
      [defaultValue]="defaultValue"
      [value]="value"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [errorMessage]="errorMessage"
      [deferredValidationTime]="deferredValidationTime"
      [className]="className"
      [inputClassName]="inputClassName"
      [ariaLabel]="ariaLabel"
      [validateOnFocusIn]="validateOnFocusIn"
      [validateOnFocusOut]="validateOnFocusOut"
      [validateOnLoad]="validateOnLoad"
      [theme]="theme"
      [styles]="styles"
      [autoComplete]="autoComplete"
      [mask]="mask"
      [maskChar]="maskChar"
      [maskFormat]="maskFormat"
      [GetErrorMessage]="getErrorMessage"
      [RenderLabel]="renderLabel"
      [RenderDescription]="renderDescription"
      [RenderPrefix]="renderPrefix"
      [RenderSuffix]="renderSuffix"
      [Change]="onChangeHandler"
      [BeforeChange]="onBeforeChangeHandler"
      [maxLength]="maxLength"
      [NotifyValidationResult]="onNotifyValidationResultHandler"
      (onClick)="onClickHandler($event)"
      (onFocus)="onFocusHandler($event)"
      (onBlur)="onBlurHandler($event)"
    >
    </TextField>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTextFieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
class FabMaskedTextFieldComponent extends FabBaseTextFieldComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabMaskedTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-masked-text-field',
                exportAs: 'fabMaskedTextField',
                template: `
    <MaskedTextField
      #reactNode
      [required]="required"
      [placeholder]="placeholder"
      [type]="type"
      [cols]="cols"
      [colSpan]="colSpan"
      [rows]="rows"
      [rowSpan]="rowSpan"
      [min]="min"
      [max]="max"
      [pattern]="pattern"
      [htmlFor]="htmlFor"
      [componentRef]="componentRef"
      [multiline]="multiline"
      [resizable]="resizable"
      [autoAdjustHeight]="autoAdjustHeight"
      [underlined]="underlined"
      [borderless]="borderless"
      [label]="label"
      [description]="description"
      [prefix]="prefix"
      [suffix]="suffix"
      [iconProps]="iconProps"
      [defaultValue]="defaultValue"
      [value]="value"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [errorMessage]="errorMessage"
      [deferredValidationTime]="deferredValidationTime"
      [className]="className"
      [inputClassName]="inputClassName"
      [ariaLabel]="ariaLabel"
      [validateOnFocusIn]="validateOnFocusIn"
      [validateOnFocusOut]="validateOnFocusOut"
      [validateOnLoad]="validateOnLoad"
      [theme]="theme"
      [styles]="styles"
      [autoComplete]="autoComplete"
      [mask]="mask"
      [maskChar]="maskChar"
      [maskFormat]="maskFormat"
      [GetErrorMessage]="getErrorMessage"
      [RenderLabel]="renderLabel"
      [RenderDescription]="renderDescription"
      [RenderPrefix]="renderPrefix"
      [RenderSuffix]="renderSuffix"
      [Change]="onChangeHandler"
      [BeforeChange]="onBeforeChangeHandler"
      [NotifyValidationResult]="onNotifyValidationResultHandler"
      (onClick)="onClickHandler($event)"
      (onFocus)="onFocusHandler($event)"
      (onBlur)="onBlurHandler($event)"
    >
    </MaskedTextField>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMaskedTextFieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabMaskedTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
const components = [FabTextFieldComponent, FabMaskedTextFieldComponent];
class FabTextFieldModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TextField', (/**
         * @return {?}
         */
        () => TextField));
        registerElement('MaskedTextField', (/**
         * @return {?}
         */
        () => MaskedTextField));
    }
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
FabTextFieldModule.ctorParameters = () => [];

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
