import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shimmer, ShimmerElementsGroup } from 'office-ui-fabric-react/lib/Shimmer';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabShimmerComponent = /** @class */ (function (_super) {
    __extends(FabShimmerComponent, _super);
    function FabShimmerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
    }
    Object.defineProperty(FabShimmerComponent.prototype, "renderCustomElementsGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderCustomElementsGroup;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderCustomElementsGroup = value;
            if (value) {
                this.customElementsGroup = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    FabShimmerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-shimmer',
                    exportAs: 'fabShimmer',
                    template: "\n    <Shimmer\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [width]=\"width\"\n      [isDataLoaded]=\"isDataLoaded\"\n      [shimmerElements]=\"shimmerElements\"\n      [ariaLabel]=\"ariaLabel\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [shimmerColors]=\"shimmerColors\"\n      [customElementsGroup]=\"customElementsGroup\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Shimmer>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabShimmerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabShimmerComponent;
}(ReactWrapperComponent));
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
var FabShimmerElementsGroupComponent = /** @class */ (function (_super) {
    __extends(FabShimmerElementsGroupComponent, _super);
    function FabShimmerElementsGroupComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
    }
    FabShimmerElementsGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-shimmer-elements-group',
                    exportAs: 'fabShimmerElementsGroup',
                    template: "\n    <ShimmerElementsGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rowHeight]=\"rowHeight\"\n      [shimmerElements]=\"shimmerElements\"\n      [flexWrap]=\"flexWrap\"\n      [width]=\"width\"\n      [theme]=\"theme\"\n      [backgroundColor]=\"backgroundColor\"\n      [styles]=\"styles\"\n    >\n    </ShimmerElementsGroup>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabShimmerElementsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabShimmerElementsGroupComponent;
}(ReactWrapperComponent));
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
var components = [FabShimmerComponent, FabShimmerElementsGroupComponent];
var FabShimmerModule = /** @class */ (function () {
    function FabShimmerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Shimmer', (/**
         * @return {?}
         */
        function () { return Shimmer; }));
        registerElement('ShimmerElementsGroup', (/**
         * @return {?}
         */
        function () { return ShimmerElementsGroup; }));
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
    FabShimmerModule.ctorParameters = function () { return []; };
    return FabShimmerModule;
}());

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
