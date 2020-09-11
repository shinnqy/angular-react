import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabProgressIndicatorComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderDescription(value) {
        this._renderDescription = value;
        if (value) {
            this.description = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderDescription() {
        return this._renderDescription;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderLabel(value) {
        this._renderLabel = value;
        if (value) {
            this.label = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderLabel() {
        return this._renderLabel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
    }
}
FabProgressIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-progress-indicator',
                exportAs: 'fabProgressIndicator',
                template: `
    <ProgressIndicator
      #reactNode
      [ariaValueText]="ariaValueText"
      [barHeight]="barHeight"
      [className]="className"
      [description]="description"
      [label]="label"
      [RenderProgress]="renderProgress && onRenderProgress"
      [percentComplete]="percentComplete"
      [progressHidden]="progressHidden"
      [styles]="styles"
      [theme]="theme"
    >
    </ProgressIndicator>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabProgressIndicatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabProgressIndicatorComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    ariaValueText: [{ type: Input }],
    barHeight: [{ type: Input }],
    className: [{ type: Input }],
    renderProgress: [{ type: Input }],
    percentComplete: [{ type: Input }],
    progressHidden: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    renderDescription: [{ type: Input }],
    renderLabel: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabProgressIndicatorComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.ariaValueText;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.barHeight;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.className;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.renderProgress;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.percentComplete;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.progressHidden;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.styles;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.theme;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.description;
    /**
     * @type {?}
     * @private
     */
    FabProgressIndicatorComponent.prototype._renderDescription;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.label;
    /**
     * @type {?}
     * @private
     */
    FabProgressIndicatorComponent.prototype._renderLabel;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.onRenderProgress;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabProgressIndicatorComponent];
class FabProgressIndicatorModule {
    constructor() {
        registerElement('ProgressIndicator', (/**
         * @return {?}
         */
        () => ProgressIndicator));
    }
}
FabProgressIndicatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabProgressIndicatorModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabProgressIndicatorComponent, FabProgressIndicatorModule };
//# sourceMappingURL=angular-react-fabric-lib-components-progress-indicator.js.map
