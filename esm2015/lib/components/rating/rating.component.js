/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { passProp, ReactWrapperComponent } from '@angular-react/core';
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
tslib_1.__decorate([
    passProp(),
    tslib_1.__metadata("design:type", Function)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF3QixRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQThCNUksTUFBTSxPQUFPLGtCQUFtQixTQUFRLHFCQUFtQzs7Ozs7OztJQTJCekUsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7O1FBTDFDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7O1FBRTFFLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFLM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxFQUFrQyxFQUFFLE1BQWU7UUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVztZQUN4QixNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUN4QixNQUFNO1NBQ1AsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO3lCQUNRLGdCQUFnQjthQUMxQjs7OztZQTdCc0MsVUFBVTtZQUF4QyxpQkFBaUI7WUFBZ0QsU0FBUztZQUF6QixNQUFNOzs7MkJBK0I3RCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFdkMsS0FBSztxQkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzs2QkFDTCxLQUFLO21CQUNMLEtBQUs7NkJBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUVMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBS0wsTUFBTTs4QkFFTixNQUFNOztBQUxLO0lBQVgsUUFBUSxFQUFFOzt3REFBeUQ7Ozs7OztJQW5CcEUsMENBQTZFOztJQUU3RSwwQ0FBcUQ7O0lBQ3JELG9DQUF5Qzs7SUFDekMsaUNBQW1DOztJQUNuQyxpQ0FBbUM7O0lBQ25DLDRDQUF5RDs7SUFDekQsa0NBQXFDOztJQUNyQyw0Q0FBeUQ7O0lBQ3pELGtDQUFxQzs7SUFFckMsNkNBQTJEOztJQUMzRCx5Q0FBbUQ7O0lBQ25ELHNDQUE2Qzs7SUFDN0MsMENBQXFEOztJQUNyRCxvQ0FBeUM7O0lBQ3pDLG1DQUF1Qzs7SUFDdkMsd0NBQTZEOztJQUU3RCwwQ0FBb0U7O0lBR3BFLDRDQUE2Rjs7SUFFN0YsNkNBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIHBhc3NQcm9wLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVJhdGluZ1Byb3BzLCBJUmF0aW5nU3RhclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUmF0aW5nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXJhdGluZycsXHJcbiAgZXhwb3J0QXM6ICdmYWJSYXRpbmcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8UmF0aW5nXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbcmF0aW5nXT1cInJhdGluZ1wiXHJcbiAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgW21heF09XCJtYXhcIlxyXG4gICAgICBbYWxsb3daZXJvU3RhcnNdPVwiYWxsb3daZXJvU3RhcnNcIlxyXG4gICAgICBbaWNvbl09XCJpY29uXCJcclxuICAgICAgW3Vuc2VsZWN0ZWRJY29uXT1cInVuc2VsZWN0ZWRJY29uXCJcclxuICAgICAgW3NpemVdPVwic2l6ZVwiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VcIlxyXG4gICAgICBbQ2hhbmdlZF09XCJvbkNoYW5nZWRcIlxyXG4gICAgICBbYXJpYUxhYmVsRm9ybWF0XT1cImFyaWFMYWJlbEZvcm1hdFwiXHJcbiAgICAgIFthcmlhTGFiZWxJZF09XCJhcmlhTGFiZWxJZFwiXHJcbiAgICAgIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgICAgIFtnZXRBcmlhTGFiZWxdPVwiZ2V0QXJpYUxhYmVsXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbUmVuZGVyU3Rhcl09XCJyZW5kZXJTdGFyICYmIG9uUmVuZGVyU3RhclwiXHJcbiAgICA+PC9SYXRpbmc+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlJhdGluZ0NvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJUmF0aW5nUHJvcHM+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJUmF0aW5nUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHJhdGluZz86IElSYXRpbmdQcm9wc1sncmF0aW5nJ107XHJcbiAgQElucHV0KCkgbWluPzogSVJhdGluZ1Byb3BzWydtaW4nXTtcclxuICBASW5wdXQoKSBtYXg/OiBJUmF0aW5nUHJvcHNbJ21heCddO1xyXG4gIEBJbnB1dCgpIGFsbG93WmVyb1N0YXJzPzogSVJhdGluZ1Byb3BzWydhbGxvd1plcm9TdGFycyddO1xyXG4gIEBJbnB1dCgpIGljb24/OiBJUmF0aW5nUHJvcHNbJ2ljb24nXTtcclxuICBASW5wdXQoKSB1bnNlbGVjdGVkSWNvbj86IElSYXRpbmdQcm9wc1sndW5zZWxlY3RlZEljb24nXTtcclxuICBASW5wdXQoKSBzaXplPzogSVJhdGluZ1Byb3BzWydzaXplJ107XHJcbiAgLy8gQElucHV0KCkgb25DaGFuZ2VkPzogSVJhdGluZ1Byb3BzWydvbkNoYW5nZWQnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWxGb3JtYXQ/OiBJUmF0aW5nUHJvcHNbJ2FyaWFMYWJlbEZvcm1hdCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbElkPzogSVJhdGluZ1Byb3BzWydhcmlhTGFiZWxJZCddO1xyXG4gIEBJbnB1dCgpIHJlYWRPbmx5PzogSVJhdGluZ1Byb3BzWydyZWFkT25seSddO1xyXG4gIEBJbnB1dCgpIGdldEFyaWFMYWJlbD86IElSYXRpbmdQcm9wc1snZ2V0QXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSVJhdGluZ1Byb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElSYXRpbmdQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSByZW5kZXJTdGFyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVJhdGluZ1N0YXJQcm9wcz47XHJcblxyXG4gIEBwYXNzUHJvcCgpIG9uUmVuZGVyU3RhcjogKHByb3BzPzogSVJhdGluZ1N0YXJQcm9wcykgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IEZvY3VzRXZlbnQsIHJhdGluZz86IG51bWJlciB9PigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblJhdGluZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcmF0aW5nPzogbnVtYmVyIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VkID0gdGhpcy5vbkNoYW5nZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlclN0YXIgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyU3Rhcik7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShldj86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTEVsZW1lbnQ+LCByYXRpbmc/OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25SYXRpbmdDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCxcclxuICAgICAgcmF0aW5nXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlZChyYXRpbmc/OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25SYXRpbmdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICByYXRpbmdcclxuICAgIH0pXHJcbiAgfVxyXG59Il19