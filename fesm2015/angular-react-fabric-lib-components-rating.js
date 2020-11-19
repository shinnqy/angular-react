import { __decorate, __metadata } from 'tslib';
import { ReactWrapperComponent, passProp, registerElement } from '@angular-react/core';
import { EventEmitter, Component, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rating } from 'office-ui-fabric-react/lib/Rating';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabRatingComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        // tslint:disable-next-line: no-output-on-prefix
        this.onRatingChange = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        this.onRatingChanged = new EventEmitter();
        this.onChange = this.onChange.bind(this);
        this.onChanged = this.onChanged.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderStar = this.createRenderPropHandler(this.renderStar);
    }
    /**
     * @param {?=} ev
     * @param {?=} rating
     * @return {?}
     */
    onChange(ev, rating) {
        this.onRatingChange.emit({
            ev: ev && ev.nativeEvent,
            rating
        });
    }
    /**
     * @param {?=} rating
     * @return {?}
     */
    onChanged(rating) {
        this.onRatingChanged.emit({
            rating
        });
    }
}
FabRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-rating',
                exportAs: 'fabRating',
                template: `
    <Rating
      #reactNode
      [componentRef]="componentRef"
      [rating]="rating"
      [min]="min"
      [max]="max"
      [allowZeroStars]="allowZeroStars"
      [icon]="icon"
      [unselectedIcon]="unselectedIcon"
      [size]="size"
      [Change]="onChange"
      [Changed]="onChanged"
      [ariaLabelFormat]="ariaLabelFormat"
      [ariaLabelId]="ariaLabelId"
      [readOnly]="readOnly"
      [getAriaLabel]="getAriaLabel"
      [styles]="styles"
      [theme]="theme"
      [RenderStar]="renderStar && onRenderStar"
    ></Rating>
  `,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabRatingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
    renderStar: [{ type: Input }],
    onRatingChange: [{ type: Output }],
    onRatingChanged: [{ type: Output }]
};
__decorate([
    passProp(),
    __metadata("design:type", Function)
], FabRatingComponent.prototype, "onRenderStar", void 0);
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
    FabRatingComponent.prototype.renderStar;
    /** @type {?} */
    FabRatingComponent.prototype.onRenderStar;
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
const components = [FabRatingComponent];
class FabRatingModule {
    constructor() {
        registerElement('Rating', (/**
         * @return {?}
         */
        () => Rating));
    }
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
FabRatingModule.ctorParameters = () => [];

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
