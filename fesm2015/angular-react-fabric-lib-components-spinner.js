import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSpinnerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-spinner',
                exportAs: 'fabSpinner',
                template: `
    <Spinner
      #reactNode
      [componentRef]="componentRef"
      [type]="type"
      [size]="size"
      [label]="label"
      [className]="className"
      [ariaLive]="ariaLive"
      [ariaLabel]="ariaLabel"
      [theme]="theme"
      [styles]="styles"
      [labelPosition]="labelPosition"
    >
    </Spinner>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabSpinnerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    type: [{ type: Input }],
    size: [{ type: Input }],
    label: [{ type: Input }],
    className: [{ type: Input }],
    ariaLive: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    labelPosition: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSpinnerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSpinnerComponent.prototype.componentRef;
    /** @type {?} */
    FabSpinnerComponent.prototype.type;
    /** @type {?} */
    FabSpinnerComponent.prototype.size;
    /** @type {?} */
    FabSpinnerComponent.prototype.label;
    /** @type {?} */
    FabSpinnerComponent.prototype.className;
    /** @type {?} */
    FabSpinnerComponent.prototype.ariaLive;
    /** @type {?} */
    FabSpinnerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSpinnerComponent.prototype.theme;
    /** @type {?} */
    FabSpinnerComponent.prototype.styles;
    /** @type {?} */
    FabSpinnerComponent.prototype.labelPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabSpinnerComponent];
class FabSpinnerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Spinner', (/**
         * @return {?}
         */
        () => Spinner));
    }
}
FabSpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabSpinnerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabSpinnerComponent, FabSpinnerModule };
//# sourceMappingURL=angular-react-fabric-lib-components-spinner.js.map
