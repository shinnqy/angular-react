import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSpinButtonComponent = /** @class */ (function (_super) {
    __extends(FabSpinButtonComponent, _super);
    function FabSpinButtonComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        return _this;
    }
    FabSpinButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-spin-button',
                    exportAs: 'fabSpinButton',
                    template: "\n    <SpinButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [title]=\"title\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [label]=\"label\"\n      [labelPosition]=\"labelPosition\"\n      [iconProps]=\"iconProps\"\n      [incrementButtonIcon]=\"incrementButtonIcon\"\n      [decrementButtonIcon]=\"decrementButtonIcon\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [upArrowButtonStyles]=\"upArrowButtonStyles\"\n      [downArrowButtonStyles]=\"downArrowButtonStyles\"\n      [theme]=\"theme\"\n      [incrementButtonAriaLabel]=\"incrementButtonAriaLabel\"\n      [decrementButtonAriaLabel]=\"decrementButtonAriaLabel\"\n      [precision]=\"precision\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [ariaValueNow]=\"ariaValueNow\"\n      [ariaValueText]=\"ariaValueText\"\n      [keytipProps]=\"keytipProps\"\n      [Validate]=\"validate\"\n      [Increment]=\"increment\"\n      [Decrement]=\"decrement\"\n      (onFocus)=\"onFocus.emit($event)\"\n      (onBlur)=\"onBlur.emit($event)\"\n    >\n    </SpinButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSpinButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabSpinButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        defaultValue: [{ type: Input }],
        value: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        ariaDescribedBy: [{ type: Input }],
        title: [{ type: Input }],
        disabled: [{ type: Input }],
        className: [{ type: Input }],
        label: [{ type: Input }],
        labelPosition: [{ type: Input }],
        iconProps: [{ type: Input }],
        incrementButtonIcon: [{ type: Input }],
        decrementButtonIcon: [{ type: Input }],
        styles: [{ type: Input }],
        getClassNames: [{ type: Input }],
        upArrowButtonStyles: [{ type: Input }],
        downArrowButtonStyles: [{ type: Input }],
        theme: [{ type: Input }],
        incrementButtonAriaLabel: [{ type: Input }],
        decrementButtonAriaLabel: [{ type: Input }],
        precision: [{ type: Input }],
        ariaPositionInSet: [{ type: Input }],
        ariaSetSize: [{ type: Input }],
        ariaValueNow: [{ type: Input }],
        ariaValueText: [{ type: Input }],
        keytipProps: [{ type: Input }],
        validate: [{ type: Input }],
        increment: [{ type: Input }],
        decrement: [{ type: Input }],
        onFocus: [{ type: Output }],
        onBlur: [{ type: Output }]
    };
    return FabSpinButtonComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSpinButtonComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSpinButtonComponent.prototype.componentRef;
    /** @type {?} */
    FabSpinButtonComponent.prototype.defaultValue;
    /** @type {?} */
    FabSpinButtonComponent.prototype.value;
    /** @type {?} */
    FabSpinButtonComponent.prototype.min;
    /** @type {?} */
    FabSpinButtonComponent.prototype.max;
    /** @type {?} */
    FabSpinButtonComponent.prototype.step;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabSpinButtonComponent.prototype.title;
    /** @type {?} */
    FabSpinButtonComponent.prototype.disabled;
    /** @type {?} */
    FabSpinButtonComponent.prototype.className;
    /** @type {?} */
    FabSpinButtonComponent.prototype.label;
    /** @type {?} */
    FabSpinButtonComponent.prototype.labelPosition;
    /** @type {?} */
    FabSpinButtonComponent.prototype.iconProps;
    /** @type {?} */
    FabSpinButtonComponent.prototype.incrementButtonIcon;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrementButtonIcon;
    /** @type {?} */
    FabSpinButtonComponent.prototype.styles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.getClassNames;
    /** @type {?} */
    FabSpinButtonComponent.prototype.upArrowButtonStyles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.downArrowButtonStyles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.theme;
    /** @type {?} */
    FabSpinButtonComponent.prototype.incrementButtonAriaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrementButtonAriaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.precision;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaPositionInSet;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaSetSize;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaValueNow;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaValueText;
    /** @type {?} */
    FabSpinButtonComponent.prototype.keytipProps;
    /** @type {?} */
    FabSpinButtonComponent.prototype.validate;
    /** @type {?} */
    FabSpinButtonComponent.prototype.increment;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrement;
    /** @type {?} */
    FabSpinButtonComponent.prototype.onFocus;
    /** @type {?} */
    FabSpinButtonComponent.prototype.onBlur;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabSpinButtonComponent];
var FabSpinButtonModule = /** @class */ (function () {
    function FabSpinButtonModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SpinButton', (/**
         * @return {?}
         */
        function () { return SpinButton; }));
    }
    FabSpinButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabSpinButtonModule.ctorParameters = function () { return []; };
    return FabSpinButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabSpinButtonComponent, FabSpinButtonModule };
//# sourceMappingURL=angular-react-fabric-lib-components-spin-button.js.map
