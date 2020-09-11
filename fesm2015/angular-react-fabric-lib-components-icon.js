import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabIconComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
    }
}
FabIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-icon',
                exportAs: 'fabIcon',
                template: `
    <Icon
      #reactNode
      [iconName]="iconName"
      [ariaLabel]="ariaLabel"
      [iconType]="iconType"
      [imageProps]="imageProps"
      [imageErrorAs]="imageErrorAs"
      [styles]="styles"
      [theme]="theme"
    >
    </Icon>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabIconComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    iconName: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    iconType: [{ type: Input }],
    imageProps: [{ type: Input }],
    imageErrorAs: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabIconComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabIconComponent.prototype.componentRef;
    /** @type {?} */
    FabIconComponent.prototype.iconName;
    /** @type {?} */
    FabIconComponent.prototype.ariaLabel;
    /** @type {?} */
    FabIconComponent.prototype.iconType;
    /** @type {?} */
    FabIconComponent.prototype.imageProps;
    /** @type {?} */
    FabIconComponent.prototype.imageErrorAs;
    /** @type {?} */
    FabIconComponent.prototype.styles;
    /** @type {?} */
    FabIconComponent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabIconComponent];
class FabIconModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Icon', (/**
         * @return {?}
         */
        () => Icon));
    }
}
FabIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabIconModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabIconComponent, FabIconModule };
//# sourceMappingURL=angular-react-fabric-lib-components-icon.js.map
