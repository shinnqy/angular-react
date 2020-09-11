import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabProgressIndicatorComponent = /** @class */ (function (_super) {
    __extends(FabProgressIndicatorComponent, _super);
    function FabProgressIndicatorComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderDescription;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderDescription = value;
            if (value) {
                this.description = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderLabel = value;
            if (value) {
                this.label = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FabProgressIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
    };
    FabProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-progress-indicator',
                    exportAs: 'fabProgressIndicator',
                    template: "\n    <ProgressIndicator\n      #reactNode\n      [ariaValueText]=\"ariaValueText\"\n      [barHeight]=\"barHeight\"\n      [className]=\"className\"\n      [description]=\"description\"\n      [label]=\"label\"\n      [RenderProgress]=\"renderProgress && onRenderProgress\"\n      [percentComplete]=\"percentComplete\"\n      [progressHidden]=\"progressHidden\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </ProgressIndicator>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabProgressIndicatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabProgressIndicatorComponent;
}(ReactWrapperComponent));
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
var components = [FabProgressIndicatorComponent];
var FabProgressIndicatorModule = /** @class */ (function () {
    function FabProgressIndicatorModule() {
        registerElement('ProgressIndicator', (/**
         * @return {?}
         */
        function () { return ProgressIndicator; }));
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
    FabProgressIndicatorModule.ctorParameters = function () { return []; };
    return FabProgressIndicatorModule;
}());

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
