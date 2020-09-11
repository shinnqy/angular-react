import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabMarqueeSelectionComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
    }
}
FabMarqueeSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-marquee-selection',
                exportAs: 'fabMarqueeSelection',
                template: `
    <MarqueeSelection
      #reactNode
      [selection]="selection"
      [className]="className"
      [componentRef]="componentRef"
      [isDraggingConstrainedToRoot]="isDraggingConstrainedToRoot"
      [isEnabled]="isEnabled"
      [rootProps]="rootProps"
      [styles]="styles"
      [theme]="theme"
      [ShouldStartSelection]="onShouldStartSelection"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MarqueeSelection>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMarqueeSelectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMarqueeSelectionComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    selection: [{ type: Input }],
    rootProps: [{ type: Input }],
    onShouldStartSelection: [{ type: Input }],
    isEnabled: [{ type: Input }],
    isDraggingConstrainedToRoot: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMarqueeSelectionComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.componentRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.selection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.rootProps;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.onShouldStartSelection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isEnabled;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isDraggingConstrainedToRoot;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.className;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.theme;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.styles;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabMarqueeSelectionComponent];
class FabMarqueeSelectionModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MarqueeSelection', (/**
         * @return {?}
         */
        () => MarqueeSelection));
    }
}
FabMarqueeSelectionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: [...components],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabMarqueeSelectionModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabMarqueeSelectionModule, FabMarqueeSelectionComponent as ɵa };
//# sourceMappingURL=angular-react-fabric-lib-components-marquee-selection.js.map
