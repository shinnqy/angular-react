import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabFabricComponent = /** @class */ (function (_super) {
    __extends(FabFabricComponent, _super);
    function FabFabricComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabFabricComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-fabric',
                    exportAs: 'fabFabric',
                    template: "\n    <Fabric #reactNode [componentRef]=\"componentRef\" [theme]=\"theme\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Fabric>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabFabricComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabFabricComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        theme: [{ type: Input }]
    };
    return FabFabricComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabFabricComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabFabricComponent.prototype.componentRef;
    /** @type {?} */
    FabFabricComponent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabFabricComponent];
var FabFabricModule = /** @class */ (function () {
    function FabFabricModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Fabric', (/**
         * @return {?}
         */
        function () { return Fabric; }));
    }
    FabFabricModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabFabricModule.ctorParameters = function () { return []; };
    return FabFabricModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabFabricComponent, FabFabricModule };
//# sourceMappingURL=angular-react-fabric-lib-components-fabric.js.map
