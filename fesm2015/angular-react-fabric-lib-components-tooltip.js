import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { omit } from 'angular-react-toolkit/utils/omit';
import { CommonModule } from '@angular/common';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabTooltipHostComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onTooltipToggle = new EventEmitter();
        this.onTooltipToggleHandler = this.onTooltipToggleHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltipOptions(value) {
        this._tooltipOptions = value;
        if (value) {
            this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get tooltipOptions() {
        return this._tooltipOptions;
    }
    /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    onTooltipToggleHandler(isTooltipVisible) {
        this.onTooltipToggle.emit({ isTooltipVisible });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformTooltipOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderContent');
        /** @type {?} */
        const contentRenderer = this.createInputJsxRenderer(options.renderContent);
        return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
             * @param {?} data
             * @return {?}
             */
            data => contentRenderer(data)) }))));
    }
}
FabTooltipHostComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tooltip-host',
                exportAs: 'fabTooltipHost',
                template: `
    <TooltipHost
      #reactNode
      [theme]="theme"
      [componentRef]="componentRef"
      [calloutProps]="calloutProps"
      [closeDelay]="closeDelay"
      [setAriaDescribedBy]="setAriaDescribedBy"
      [delay]="delay"
      [content]="content"
      [directionalHint]="directionalHint"
      [directionalHintForRTL]="directionalHintForRTL"
      [overflowMode]="overflowMode"
      [hostClassName]="hostClassName"
      [tooltipProps]="transformedTooltipProps"
      [TooltipToggle]="onTooltipToggleHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </TooltipHost>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTooltipHostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabTooltipHostComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    closeDelay: [{ type: Input }],
    calloutProps: [{ type: Input }],
    content: [{ type: Input }],
    delay: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintForRTL: [{ type: Input }],
    hostClassName: [{ type: Input }],
    overflowMode: [{ type: Input }],
    setAriaDescribedBy: [{ type: Input }],
    theme: [{ type: Input }],
    tooltipOptions: [{ type: Input }],
    onTooltipToggle: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTooltipHostComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabTooltipHostComponent.prototype.componentRef;
    /** @type {?} */
    FabTooltipHostComponent.prototype.closeDelay;
    /** @type {?} */
    FabTooltipHostComponent.prototype.calloutProps;
    /** @type {?} */
    FabTooltipHostComponent.prototype.content;
    /** @type {?} */
    FabTooltipHostComponent.prototype.delay;
    /** @type {?} */
    FabTooltipHostComponent.prototype.directionalHint;
    /** @type {?} */
    FabTooltipHostComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabTooltipHostComponent.prototype.hostClassName;
    /** @type {?} */
    FabTooltipHostComponent.prototype.overflowMode;
    /** @type {?} */
    FabTooltipHostComponent.prototype.setAriaDescribedBy;
    /** @type {?} */
    FabTooltipHostComponent.prototype.theme;
    /** @type {?} */
    FabTooltipHostComponent.prototype.onTooltipToggle;
    /** @type {?} */
    FabTooltipHostComponent.prototype.transformedTooltipProps;
    /**
     * @type {?}
     * @private
     */
    FabTooltipHostComponent.prototype._tooltipOptions;
}
/**
 * Counterpart of `ITooltipProps`, with Angular adjustments.
 * @record
 */
function ITooltipOptions() { }
if (false) {
    /** @type {?|undefined} */
    ITooltipOptions.prototype.renderContent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabTooltipHostComponent];
class FabTooltipModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TooltipHost', (/**
         * @return {?}
         */
        () => TooltipHost));
    }
}
FabTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabTooltipModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabTooltipHostComponent, FabTooltipModule };
//# sourceMappingURL=angular-react-fabric-lib-components-tooltip.js.map
