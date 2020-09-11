import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSpinnerComponent = /** @class */ (function (_super) {
    __extends(FabSpinnerComponent, _super);
    function FabSpinnerComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-spinner',
                    exportAs: 'fabSpinner',
                    template: "\n    <Spinner\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [type]=\"type\"\n      [size]=\"size\"\n      [label]=\"label\"\n      [className]=\"className\"\n      [ariaLive]=\"ariaLive\"\n      [ariaLabel]=\"ariaLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [labelPosition]=\"labelPosition\"\n    >\n    </Spinner>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabSpinnerComponent;
}(ReactWrapperComponent));
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
var components = [FabSpinnerComponent];
var FabSpinnerModule = /** @class */ (function () {
    function FabSpinnerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Spinner', (/**
         * @return {?}
         */
        function () { return Spinner; }));
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
    FabSpinnerModule.ctorParameters = function () { return []; };
    return FabSpinnerModule;
}());

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
