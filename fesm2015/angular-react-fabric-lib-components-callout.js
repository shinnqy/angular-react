import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Callout, FocusTrapCallout } from 'office-ui-fabric-react/lib/Callout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCalloutComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLayerMounted = new EventEmitter();
        this.onPositioned = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onScroll = new EventEmitter();
    }
}
FabCalloutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-callout',
                exportAs: 'fabCallout',
                template: `
    <Callout
      #reactNode
      [target]="target"
      [directionalHint]="directionalHint"
      [directionalHintForRTL]="directionalHintForRTL"
      [gapSpace]="gapSpace"
      [beakWidth]="beakWidth"
      [calloutWidth]="calloutWidth"
      [backgroundColor]="backgroundColor"
      [bounds]="bounds"
      [minPagePadding]="minPagePadding"
      [isBeakVisible]="isBeakVisible"
      [preventDismissOnScroll]="preventDismissOnScroll"
      [preventDismissOnResize]="preventDismissOnResize"
      [preventDismissOnLostFocus]="preventDismissOnLostFocus"
      [coverTarget]="coverTarget"
      [alignTargetEdge]="alignTargetEdge"
      [role]="role"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [ariaDescribedBy]="ariaDescribedBy"
      [className]="className"
      [layerProps]="layerProps"
      [doNotLayer]="doNotLayer"
      [directionalHintFixed]="directionalHintFixed"
      [finalHeight]="finalHeight"
      [hideOverflow]="hideOverflow"
      [setInitialFocus]="setInitialFocus"
      [calloutMaxHeight]="calloutMaxHeight"
      [theme]="theme"
      [styles]="styles"
      [hidden]="hidden"
      [shouldRestoreFocus]="shouldRestoreFocus"
      (onLayerMounted)="onLayerMounted.emit()"
      (onPositioned)="onPositioned.emit($event)"
      (onDismiss)="onDismiss.emit($event)"
      (onScroll)="onScroll.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Callout>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCalloutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabCalloutComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    target: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintForRTL: [{ type: Input }],
    gapSpace: [{ type: Input }],
    beakWidth: [{ type: Input }],
    calloutWidth: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    bounds: [{ type: Input }],
    minPagePadding: [{ type: Input }],
    isBeakVisible: [{ type: Input }],
    preventDismissOnScroll: [{ type: Input }],
    preventDismissOnResize: [{ type: Input }],
    preventDismissOnLostFocus: [{ type: Input }],
    coverTarget: [{ type: Input }],
    alignTargetEdge: [{ type: Input }],
    role: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    className: [{ type: Input }],
    layerProps: [{ type: Input }],
    doNotLayer: [{ type: Input }],
    directionalHintFixed: [{ type: Input }],
    finalHeight: [{ type: Input }],
    hideOverflow: [{ type: Input }],
    setInitialFocus: [{ type: Input }],
    calloutMaxHeight: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    hidden: [{ type: Input }],
    shouldRestoreFocus: [{ type: Input }],
    onLayerMounted: [{ type: Output }],
    onPositioned: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onScroll: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCalloutComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCalloutComponent.prototype.target;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHint;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabCalloutComponent.prototype.gapSpace;
    /** @type {?} */
    FabCalloutComponent.prototype.beakWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.backgroundColor;
    /** @type {?} */
    FabCalloutComponent.prototype.bounds;
    /** @type {?} */
    FabCalloutComponent.prototype.minPagePadding;
    /** @type {?} */
    FabCalloutComponent.prototype.isBeakVisible;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnScroll;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnResize;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnLostFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.coverTarget;
    /** @type {?} */
    FabCalloutComponent.prototype.alignTargetEdge;
    /** @type {?} */
    FabCalloutComponent.prototype.role;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCalloutComponent.prototype.className;
    /** @type {?} */
    FabCalloutComponent.prototype.layerProps;
    /** @type {?} */
    FabCalloutComponent.prototype.doNotLayer;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabCalloutComponent.prototype.finalHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.hideOverflow;
    /** @type {?} */
    FabCalloutComponent.prototype.setInitialFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutMaxHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.theme;
    /** @type {?} */
    FabCalloutComponent.prototype.styles;
    /** @type {?} */
    FabCalloutComponent.prototype.hidden;
    /** @type {?} */
    FabCalloutComponent.prototype.shouldRestoreFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.onLayerMounted;
    /** @type {?} */
    FabCalloutComponent.prototype.onPositioned;
    /** @type {?} */
    FabCalloutComponent.prototype.onDismiss;
    /** @type {?} */
    FabCalloutComponent.prototype.onScroll;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabCalloutComponent];
class FabCalloutModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Callout', (/**
         * @return {?}
         */
        () => Callout));
        registerElement('FocusTrapCallout', (/**
         * @return {?}
         */
        () => FocusTrapCallout));
    }
}
FabCalloutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCalloutModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabCalloutComponent, FabCalloutModule };
//# sourceMappingURL=angular-react-fabric-lib-components-callout.js.map
