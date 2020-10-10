/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
export class FabRatingComponent extends ReactWrapperComponent {
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
    onRatingChange: [{ type: Output }],
    onRatingChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQThCLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE2QnBJLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxxQkFBbUM7Ozs7Ozs7SUF3QnpFLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOztRQUwxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUF3QyxDQUFDOztRQUUxRSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBSzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBa0MsRUFBRSxNQUFlO1FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVc7WUFDeEIsTUFBTTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWU7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTTtTQUNQLENBQUMsQ0FBQTtJQUNKLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO3lCQUNRLGdCQUFnQjthQUMxQjs7OztZQTVCc0MsVUFBVTtZQUF4QyxpQkFBaUI7WUFBZ0QsU0FBUztZQUF6QixNQUFNOzs7MkJBOEI3RCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSztxQkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzs2QkFDTCxLQUFLO21CQUNMLEtBQUs7NkJBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUVMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzZCQUdMLE1BQU07OEJBRU4sTUFBTTs7Ozs7OztJQXJCUCwwQ0FBNkU7O0lBRTdFLDBDQUFxRDs7SUFDckQsb0NBQXlDOztJQUN6QyxpQ0FBbUM7O0lBQ25DLGlDQUFtQzs7SUFDbkMsNENBQXlEOztJQUN6RCxrQ0FBcUM7O0lBQ3JDLDRDQUF5RDs7SUFDekQsa0NBQXFDOztJQUVyQyw2Q0FBMkQ7O0lBQzNELHlDQUFtRDs7SUFDbkQsc0NBQTZDOztJQUM3QywwQ0FBcUQ7O0lBQ3JELG9DQUF5Qzs7SUFDekMsbUNBQXVDOztJQUd2Qyw0Q0FBNkY7O0lBRTdGLDZDQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBPbWl0LCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElSYXRpbmdQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1JhdGluZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1yYXRpbmcnLFxyXG4gIGV4cG9ydEFzOiAnZmFiUmF0aW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFJhdGluZ1xyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3JhdGluZ109XCJyYXRpbmdcIlxyXG4gICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgW2FsbG93WmVyb1N0YXJzXT1cImFsbG93WmVyb1N0YXJzXCJcclxuICAgICAgW2ljb25dPVwiaWNvblwiXHJcbiAgICAgIFt1bnNlbGVjdGVkSWNvbl09XCJ1bnNlbGVjdGVkSWNvblwiXHJcbiAgICAgIFtzaXplXT1cInNpemVcIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlXCJcclxuICAgICAgW0NoYW5nZWRdPVwib25DaGFuZ2VkXCJcclxuICAgICAgW2FyaWFMYWJlbEZvcm1hdF09XCJhcmlhTGFiZWxGb3JtYXRcIlxyXG4gICAgICBbYXJpYUxhYmVsSWRdPVwiYXJpYUxhYmVsSWRcIlxyXG4gICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICBbZ2V0QXJpYUxhYmVsXT1cImdldEFyaWFMYWJlbFwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgID48L1JhdGluZz5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElSYXRpbmdQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElSYXRpbmdQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgcmF0aW5nPzogSVJhdGluZ1Byb3BzWydyYXRpbmcnXTtcclxuICBASW5wdXQoKSBtaW4/OiBJUmF0aW5nUHJvcHNbJ21pbiddO1xyXG4gIEBJbnB1dCgpIG1heD86IElSYXRpbmdQcm9wc1snbWF4J107XHJcbiAgQElucHV0KCkgYWxsb3daZXJvU3RhcnM/OiBJUmF0aW5nUHJvcHNbJ2FsbG93WmVyb1N0YXJzJ107XHJcbiAgQElucHV0KCkgaWNvbj86IElSYXRpbmdQcm9wc1snaWNvbiddO1xyXG4gIEBJbnB1dCgpIHVuc2VsZWN0ZWRJY29uPzogSVJhdGluZ1Byb3BzWyd1bnNlbGVjdGVkSWNvbiddO1xyXG4gIEBJbnB1dCgpIHNpemU/OiBJUmF0aW5nUHJvcHNbJ3NpemUnXTtcclxuICAvLyBASW5wdXQoKSBvbkNoYW5nZWQ/OiBJUmF0aW5nUHJvcHNbJ29uQ2hhbmdlZCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbEZvcm1hdD86IElSYXRpbmdQcm9wc1snYXJpYUxhYmVsRm9ybWF0J107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsSWQ/OiBJUmF0aW5nUHJvcHNbJ2FyaWFMYWJlbElkJ107XHJcbiAgQElucHV0KCkgcmVhZE9ubHk/OiBJUmF0aW5nUHJvcHNbJ3JlYWRPbmx5J107XHJcbiAgQElucHV0KCkgZ2V0QXJpYUxhYmVsPzogSVJhdGluZ1Byb3BzWydnZXRBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJUmF0aW5nUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVJhdGluZ1Byb3BzWyd0aGVtZSddO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25SYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBGb2N1c0V2ZW50LCByYXRpbmc/OiBudW1iZXIgfT4oKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25SYXRpbmdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHJhdGluZz86IG51bWJlciB9PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IHRoaXMub25DaGFuZ2VkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShldj86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTEVsZW1lbnQ+LCByYXRpbmc/OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25SYXRpbmdDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCxcclxuICAgICAgcmF0aW5nXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlZChyYXRpbmc/OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25SYXRpbmdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICByYXRpbmdcclxuICAgIH0pXHJcbiAgfVxyXG59Il19