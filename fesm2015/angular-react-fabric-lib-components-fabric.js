import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabFabricComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabFabricComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-fabric',
                exportAs: 'fabFabric',
                template: `
    <Fabric #reactNode [componentRef]="componentRef" [theme]="theme">
      <ReactContent><ng-content></ng-content></ReactContent>
    </Fabric>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabFabricComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabFabricComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    theme: [{ type: Input }]
};
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
const components = [FabFabricComponent];
class FabFabricModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Fabric', (/**
         * @return {?}
         */
        () => Fabric));
    }
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
FabFabricModule.ctorParameters = () => [];

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
