import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shimmer, ShimmerElementsGroup } from 'office-ui-fabric-react/lib/Shimmer';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabShimmerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderCustomElementsGroup(value) {
        this._renderCustomElementsGroup = value;
        if (value) {
            this.customElementsGroup = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderCustomElementsGroup() {
        return this._renderCustomElementsGroup;
    }
}
FabShimmerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-shimmer',
                exportAs: 'fabShimmer',
                template: `
    <Shimmer
      #reactNode
      [componentRef]="componentRef"
      [width]="width"
      [isDataLoaded]="isDataLoaded"
      [shimmerElements]="shimmerElements"
      [ariaLabel]="ariaLabel"
      [styles]="styles"
      [className]="className"
      [theme]="theme"
      [shimmerColors]="shimmerColors"
      [customElementsGroup]="customElementsGroup"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Shimmer>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabShimmerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabShimmerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    width: [{ type: Input }],
    isDataLoaded: [{ type: Input }],
    shimmerElements: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    shimmerColors: [{ type: Input }],
    renderCustomElementsGroup: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabShimmerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabShimmerComponent.prototype.componentRef;
    /** @type {?} */
    FabShimmerComponent.prototype.width;
    /** @type {?} */
    FabShimmerComponent.prototype.isDataLoaded;
    /** @type {?} */
    FabShimmerComponent.prototype.shimmerElements;
    /** @type {?} */
    FabShimmerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabShimmerComponent.prototype.styles;
    /** @type {?} */
    FabShimmerComponent.prototype.className;
    /** @type {?} */
    FabShimmerComponent.prototype.theme;
    /** @type {?} */
    FabShimmerComponent.prototype.shimmerColors;
    /** @type {?} */
    FabShimmerComponent.prototype.customElementsGroup;
    /**
     * @type {?}
     * @private
     */
    FabShimmerComponent.prototype._renderCustomElementsGroup;
}
class FabShimmerElementsGroupComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
    }
}
FabShimmerElementsGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-shimmer-elements-group',
                exportAs: 'fabShimmerElementsGroup',
                template: `
    <ShimmerElementsGroup
      #reactNode
      [componentRef]="componentRef"
      [rowHeight]="rowHeight"
      [shimmerElements]="shimmerElements"
      [flexWrap]="flexWrap"
      [width]="width"
      [theme]="theme"
      [backgroundColor]="backgroundColor"
      [styles]="styles"
    >
    </ShimmerElementsGroup>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabShimmerElementsGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabShimmerElementsGroupComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    rowHeight: [{ type: Input }],
    shimmerElements: [{ type: Input }],
    flexWrap: [{ type: Input }],
    width: [{ type: Input }],
    theme: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    styles: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabShimmerElementsGroupComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.componentRef;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.rowHeight;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.shimmerElements;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.flexWrap;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.width;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.theme;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.backgroundColor;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.styles;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabShimmerComponent, FabShimmerElementsGroupComponent];
class FabShimmerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Shimmer', (/**
         * @return {?}
         */
        () => Shimmer));
        registerElement('ShimmerElementsGroup', (/**
         * @return {?}
         */
        () => ShimmerElementsGroup));
    }
}
FabShimmerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabShimmerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabShimmerComponent, FabShimmerElementsGroupComponent, FabShimmerModule };
//# sourceMappingURL=angular-react-fabric-lib-components-shimmer.js.map
