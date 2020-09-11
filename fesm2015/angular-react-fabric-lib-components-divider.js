import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDividerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-vertical-divider',
                exportAs: 'fabVerticalDivider',
                template: `
    <VerticalDivider
      #reactNode
      [getClassNames]="getClassNames"
      [theme]="theme"
      [styles]="styles"
      [className]="className"
    >
    </VerticalDivider>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDividerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    getClassNames: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDividerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDividerComponent.prototype.getClassNames;
    /** @type {?} */
    FabDividerComponent.prototype.theme;
    /** @type {?} */
    FabDividerComponent.prototype.styles;
    /** @type {?} */
    FabDividerComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabDividerComponent];
class FabDividerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('VerticalDivider', (/**
         * @return {?}
         */
        () => VerticalDivider));
    }
}
FabDividerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDividerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabDividerComponent, FabDividerModule };
//# sourceMappingURL=angular-react-fabric-lib-components-divider.js.map
