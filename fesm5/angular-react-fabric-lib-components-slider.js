import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSliderComponent = /** @class */ (function (_super) {
    __extends(FabSliderComponent, _super);
    function FabSliderComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChange = new EventEmitter();
        _this.onChanged = new EventEmitter();
        _this.onChangedHandler = _this.onChangedHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    FabSliderComponent.prototype.onChangedHandler = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        this.onChanged.emit({
            event: event,
            value: value,
        });
    };
    FabSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-slider',
                    exportAs: 'fabSlider',
                    template: "\n    <Slider\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [label]=\"label\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [showValue]=\"showValue\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaValueText]=\"ariaValueText\"\n      [vertical]=\"vertical\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [buttonProps]=\"buttonProps\"\n      [valueFormat]=\"valueFormat\"\n      [originFromZero]=\"originFromZero\"\n      [Changed]=\"onChangedHandler\"\n      (onChange)=\"onChange.emit($event)\"\n    >\n    </Slider>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSliderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabSliderComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        label: [{ type: Input }],
        defaultValue: [{ type: Input }],
        value: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        showValue: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        ariaValueText: [{ type: Input }],
        vertical: [{ type: Input }],
        disabled: [{ type: Input }],
        className: [{ type: Input }],
        buttonProps: [{ type: Input }],
        valueFormat: [{ type: Input }],
        originFromZero: [{ type: Input }],
        onChange: [{ type: Output }],
        onChanged: [{ type: Output }]
    };
    return FabSliderComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSliderComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSliderComponent.prototype.componentRef;
    /** @type {?} */
    FabSliderComponent.prototype.styles;
    /** @type {?} */
    FabSliderComponent.prototype.theme;
    /** @type {?} */
    FabSliderComponent.prototype.label;
    /** @type {?} */
    FabSliderComponent.prototype.defaultValue;
    /** @type {?} */
    FabSliderComponent.prototype.value;
    /** @type {?} */
    FabSliderComponent.prototype.min;
    /** @type {?} */
    FabSliderComponent.prototype.max;
    /** @type {?} */
    FabSliderComponent.prototype.step;
    /** @type {?} */
    FabSliderComponent.prototype.showValue;
    /** @type {?} */
    FabSliderComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSliderComponent.prototype.ariaValueText;
    /** @type {?} */
    FabSliderComponent.prototype.vertical;
    /** @type {?} */
    FabSliderComponent.prototype.disabled;
    /** @type {?} */
    FabSliderComponent.prototype.className;
    /** @type {?} */
    FabSliderComponent.prototype.buttonProps;
    /** @type {?} */
    FabSliderComponent.prototype.valueFormat;
    /** @type {?} */
    FabSliderComponent.prototype.originFromZero;
    /** @type {?} */
    FabSliderComponent.prototype.onChange;
    /** @type {?} */
    FabSliderComponent.prototype.onChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabSliderComponent];
var FabSliderModule = /** @class */ (function () {
    function FabSliderModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Slider', (/**
         * @return {?}
         */
        function () { return Slider; }));
    }
    FabSliderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabSliderModule.ctorParameters = function () { return []; };
    return FabSliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabSliderComponent, FabSliderModule };
//# sourceMappingURL=angular-react-fabric-lib-components-slider.js.map
