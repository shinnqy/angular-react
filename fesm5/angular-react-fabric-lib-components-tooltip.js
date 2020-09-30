import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { omit } from '@angular-react/fabric/lib/utils';
import { CommonModule } from '@angular/common';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabTooltipHostComponent = /** @class */ (function (_super) {
    __extends(FabTooltipHostComponent, _super);
    function FabTooltipHostComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onTooltipToggle = new EventEmitter();
        _this.onTooltipToggleHandler = _this.onTooltipToggleHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabTooltipHostComponent.prototype, "tooltipOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltipOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltipOptions = value;
            if (value) {
                this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    FabTooltipHostComponent.prototype.onTooltipToggleHandler = /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    function (isTooltipVisible) {
        this.onTooltipToggle.emit({ isTooltipVisible: isTooltipVisible });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabTooltipHostComponent.prototype._transformTooltipOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderContent');
        /** @type {?} */
        var contentRenderer = this.createInputJsxRenderer(options.renderContent);
        return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return contentRenderer(data); }) }))));
    };
    FabTooltipHostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tooltip-host',
                    exportAs: 'fabTooltipHost',
                    template: "\n    <TooltipHost\n      #reactNode\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [calloutProps]=\"calloutProps\"\n      [closeDelay]=\"closeDelay\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [delay]=\"delay\"\n      [content]=\"content\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [overflowMode]=\"overflowMode\"\n      [hostClassName]=\"hostClassName\"\n      [tooltipProps]=\"transformedTooltipProps\"\n      [TooltipToggle]=\"onTooltipToggleHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </TooltipHost>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTooltipHostComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabTooltipHostComponent;
}(ReactWrapperComponent));
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
var components = [FabTooltipHostComponent];
var FabTooltipModule = /** @class */ (function () {
    function FabTooltipModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TooltipHost', (/**
         * @return {?}
         */
        function () { return TooltipHost; }));
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
    FabTooltipModule.ctorParameters = function () { return []; };
    return FabTooltipModule;
}());

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
