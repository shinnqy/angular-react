import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabBreadcrumbComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
    }
}
FabBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-breadcrumb',
                exportAs: 'fabBreadcrumb',
                template: `
    <Breadcrumb
      #reactNode
      [componentRef]="componentRef"
      [items]="items"
      [className]="className"
      [dividerAs]="dividerAs"
      [maxDisplayedItems]="maxDisplayedItems"
      [ariaLabel]="ariaLabel"
      [overflowAriaLabel]="overflowAriaLabel"
      [overflowIndex]="overflowIndex"
      [styles]="styles"
      [theme]="theme"
      [focusZoneProps]="focusZoneProps"
      [tooltipHostProps]="tooltipHostProps"
      [RenderItem]="renderItem && onRenderItem"
      [ReduceData]="onReduceData"
    >
    </Breadcrumb>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabBreadcrumbComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabBreadcrumbComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    items: [{ type: Input }],
    className: [{ type: Input }],
    dividerAs: [{ type: Input }],
    maxDisplayedItems: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    overflowAriaLabel: [{ type: Input }],
    overflowIndex: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    focusZoneProps: [{ type: Input }],
    tooltipHostProps: [{ type: Input }],
    renderItem: [{ type: Input }],
    onReduceData: [{ type: Input, args: ['reduceData',] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabBreadcrumbComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.componentRef;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.items;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.className;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.dividerAs;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.maxDisplayedItems;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.ariaLabel;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.overflowAriaLabel;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.overflowIndex;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.styles;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.theme;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.focusZoneProps;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.tooltipHostProps;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.renderItem;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.onReduceData;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.onRenderItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabBreadcrumbComponent];
class FabBreadcrumbModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Breadcrumb', (/**
         * @return {?}
         */
        () => Breadcrumb));
    }
}
FabBreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabBreadcrumbModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabBreadcrumbComponent, FabBreadcrumbModule };
//# sourceMappingURL=angular-react-fabric-lib-components-breadcrumb.js.map
