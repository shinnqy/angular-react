import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSliderComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChange = new EventEmitter();
        this.onChanged = new EventEmitter();
        this.onChangedHandler = this.onChangedHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onChangedHandler(event, value) {
        this.onChanged.emit({
            event,
            value,
        });
    }
}
FabSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-slider',
                exportAs: 'fabSlider',
                template: `
    <Slider
      #reactNode
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [label]="label"
      [defaultValue]="defaultValue"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [showValue]="showValue"
      [ariaLabel]="ariaLabel"
      [ariaValueText]="ariaValueText"
      [vertical]="vertical"
      [disabled]="disabled"
      [className]="className"
      [buttonProps]="buttonProps"
      [valueFormat]="valueFormat"
      [originFromZero]="originFromZero"
      [Changed]="onChangedHandler"
      (onChange)="onChange.emit($event)"
    >
    </Slider>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSliderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
const components = [FabSliderComponent];
class FabSliderModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Slider', (/**
         * @return {?}
         */
        () => Slider));
    }
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
FabSliderModule.ctorParameters = () => [];

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
