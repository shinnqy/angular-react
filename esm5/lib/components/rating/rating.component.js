/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
var FabRatingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabRatingComponent, _super);
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
export { FabRatingComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUE4QixxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BJO0lBMEJ3Qyw4Q0FBbUM7SUF3QnpFLDRCQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQTdHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsU0FJM0Q7O1FBVGtCLG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7O1FBRTFFLHFCQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFLM0UsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxxQ0FBUTs7Ozs7SUFBUixVQUFTLEVBQWtDLEVBQUUsTUFBZTtRQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXO1lBQ3hCLE1BQU0sUUFBQTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsc0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWU7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw2aUJBb0JUOzZCQUNRLGdCQUFnQjtpQkFDMUI7Ozs7Z0JBNUJzQyxVQUFVO2dCQUF4QyxpQkFBaUI7Z0JBQWdELFNBQVM7Z0JBQXpCLE1BQU07OzsrQkE4QjdELFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO3VCQUNMLEtBQUs7a0NBRUwsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7aUNBR0wsTUFBTTtrQ0FFTixNQUFNOztJQXFCVCx5QkFBQztDQUFBLEFBckVELENBMEJ3QyxxQkFBcUIsR0EyQzVEO1NBM0NZLGtCQUFrQjs7Ozs7O0lBQzdCLDBDQUE2RTs7SUFFN0UsMENBQXFEOztJQUNyRCxvQ0FBeUM7O0lBQ3pDLGlDQUFtQzs7SUFDbkMsaUNBQW1DOztJQUNuQyw0Q0FBeUQ7O0lBQ3pELGtDQUFxQzs7SUFDckMsNENBQXlEOztJQUN6RCxrQ0FBcUM7O0lBRXJDLDZDQUEyRDs7SUFDM0QseUNBQW1EOztJQUNuRCxzQ0FBNkM7O0lBQzdDLDBDQUFxRDs7SUFDckQsb0NBQXlDOztJQUN6QyxtQ0FBdUM7O0lBR3ZDLDRDQUE2Rjs7SUFFN0YsNkNBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIE9taXQsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVJhdGluZ1Byb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUmF0aW5nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXJhdGluZycsXHJcbiAgZXhwb3J0QXM6ICdmYWJSYXRpbmcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8UmF0aW5nXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbcmF0aW5nXT1cInJhdGluZ1wiXHJcbiAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgW21heF09XCJtYXhcIlxyXG4gICAgICBbYWxsb3daZXJvU3RhcnNdPVwiYWxsb3daZXJvU3RhcnNcIlxyXG4gICAgICBbaWNvbl09XCJpY29uXCJcclxuICAgICAgW3Vuc2VsZWN0ZWRJY29uXT1cInVuc2VsZWN0ZWRJY29uXCJcclxuICAgICAgW3NpemVdPVwic2l6ZVwiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VcIlxyXG4gICAgICBbQ2hhbmdlZF09XCJvbkNoYW5nZWRcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9ybWF0XT1cImFyaWFMYWJlbEZvcm1hdFwiXHJcbiAgICAgIFthcmlhTGFiZWxJZF09XCJhcmlhTGFiZWxJZFwiXHJcbiAgICAgIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgICAgIFtnZXRBcmlhTGFiZWxdPVwiZ2V0QXJpYUxhYmVsXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgPjwvUmF0aW5nPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJSYXRpbmdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVJhdGluZ1Byb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVJhdGluZ1Byb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSByYXRpbmc/OiBJUmF0aW5nUHJvcHNbJ3JhdGluZyddO1xyXG4gIEBJbnB1dCgpIG1pbj86IElSYXRpbmdQcm9wc1snbWluJ107XHJcbiAgQElucHV0KCkgbWF4PzogSVJhdGluZ1Byb3BzWydtYXgnXTtcclxuICBASW5wdXQoKSBhbGxvd1plcm9TdGFycz86IElSYXRpbmdQcm9wc1snYWxsb3daZXJvU3RhcnMnXTtcclxuICBASW5wdXQoKSBpY29uPzogSVJhdGluZ1Byb3BzWydpY29uJ107XHJcbiAgQElucHV0KCkgdW5zZWxlY3RlZEljb24/OiBJUmF0aW5nUHJvcHNbJ3Vuc2VsZWN0ZWRJY29uJ107XHJcbiAgQElucHV0KCkgc2l6ZT86IElSYXRpbmdQcm9wc1snc2l6ZSddO1xyXG4gIC8vIEBJbnB1dCgpIG9uQ2hhbmdlZD86IElSYXRpbmdQcm9wc1snb25DaGFuZ2VkJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsRm9ybWF0PzogSVJhdGluZ1Byb3BzWydhcmlhTGFiZWxGb3JtYXQnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxJZD86IElSYXRpbmdQcm9wc1snYXJpYUxhYmVsSWQnXTtcclxuICBASW5wdXQoKSByZWFkT25seT86IElSYXRpbmdQcm9wc1sncmVhZE9ubHknXTtcclxuICBASW5wdXQoKSBnZXRBcmlhTGFiZWw/OiBJUmF0aW5nUHJvcHNbJ2dldEFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElSYXRpbmdQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJUmF0aW5nUHJvcHNbJ3RoZW1lJ107XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IEZvY3VzRXZlbnQsIHJhdGluZz86IG51bWJlciB9PigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJhdGluZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcmF0aW5nPzogbnVtYmVyIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VkID0gdGhpcy5vbkNoYW5nZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2PzogUmVhY3QuRm9jdXNFdmVudDxIVE1MRWxlbWVudD4sIHJhdGluZz86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJhdGluZ0NoYW5nZS5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICByYXRpbmdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VkKHJhdGluZz86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJhdGluZ0NoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHJhdGluZ1xyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=