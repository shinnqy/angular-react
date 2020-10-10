import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rating } from 'office-ui-fabric-react/lib/Rating';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabRatingComponent = /** @class */ (function (_super) {
    __extends(FabRatingComponent, _super);
    function FabRatingComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        // tslint:disable-next-line: no-output-on-prefix
        _this.onRatingChange = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        _this.onRatingChanged = new EventEmitter();
        _this.onChange = _this.onChange.bind(_this);
        _this.onChanged = _this.onChanged.bind(_this);
        return _this;
    }
    /**
     * @param {?=} ev
     * @param {?=} rating
     * @return {?}
     */
    FabRatingComponent.prototype.onChange = /**
     * @param {?=} ev
     * @param {?=} rating
     * @return {?}
     */
    function (ev, rating) {
        this.onRatingChange.emit({
            ev: ev && ev.nativeEvent,
            rating: rating
        });
    };
    /**
     * @param {?=} rating
     * @return {?}
     */
    FabRatingComponent.prototype.onChanged = /**
     * @param {?=} rating
     * @return {?}
     */
    function (rating) {
        this.onRatingChanged.emit({
            rating: rating
        });
    };
    FabRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-rating',
                    exportAs: 'fabRating',
                    template: "\n    <Rating\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rating]=\"rating\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [allowZeroStars]=\"allowZeroStars\"\n      [icon]=\"icon\"\n      [unselectedIcon]=\"unselectedIcon\"\n      [size]=\"size\"\n      [Change]=\"onChange\"\n      [Changed]=\"onChanged\"\n      [ariaLabelFormat]=\"ariaLabelFormat\"\n      [ariaLabelId]=\"ariaLabelId\"\n      [readOnly]=\"readOnly\"\n      [getAriaLabel]=\"getAriaLabel\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    ></Rating>\n  ",
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabRatingComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        rating: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        allowZeroStars: [{ type: Input }],
        icon: [{ type: Input }],
        unselectedIcon: [{ type: Input }],
        size: [{ type: Input }],
        ariaLabelFormat: [{ type: Input }],
        ariaLabelId: [{ type: Input }],
        readOnly: [{ type: Input }],
        getAriaLabel: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        onRatingChange: [{ type: Output }],
        onRatingChanged: [{ type: Output }]
    };
    return FabRatingComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabRatingComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabRatingComponent.prototype.componentRef;
    /** @type {?} */
    FabRatingComponent.prototype.rating;
    /** @type {?} */
    FabRatingComponent.prototype.min;
    /** @type {?} */
    FabRatingComponent.prototype.max;
    /** @type {?} */
    FabRatingComponent.prototype.allowZeroStars;
    /** @type {?} */
    FabRatingComponent.prototype.icon;
    /** @type {?} */
    FabRatingComponent.prototype.unselectedIcon;
    /** @type {?} */
    FabRatingComponent.prototype.size;
    /** @type {?} */
    FabRatingComponent.prototype.ariaLabelFormat;
    /** @type {?} */
    FabRatingComponent.prototype.ariaLabelId;
    /** @type {?} */
    FabRatingComponent.prototype.readOnly;
    /** @type {?} */
    FabRatingComponent.prototype.getAriaLabel;
    /** @type {?} */
    FabRatingComponent.prototype.styles;
    /** @type {?} */
    FabRatingComponent.prototype.theme;
    /** @type {?} */
    FabRatingComponent.prototype.onRatingChange;
    /** @type {?} */
    FabRatingComponent.prototype.onRatingChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [FabRatingComponent];
var FabRatingModule = /** @class */ (function () {
    function FabRatingModule() {
        registerElement('Rating', (/**
         * @return {?}
         */
        function () { return Rating; }));
    }
    FabRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabRatingModule.ctorParameters = function () { return []; };
    return FabRatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabRatingComponent, FabRatingModule };
//# sourceMappingURL=angular-react-fabric-lib-components-rating.js.map
