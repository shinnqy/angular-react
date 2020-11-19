/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { passProp, ReactWrapperComponent } from '@angular-react/core';
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
     * @return {?}
     */
    FabRatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderStar = this.createRenderPropHandler(this.renderStar);
    };
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
                    template: "\n    <Rating\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rating]=\"rating\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [allowZeroStars]=\"allowZeroStars\"\n      [icon]=\"icon\"\n      [unselectedIcon]=\"unselectedIcon\"\n      [size]=\"size\"\n      [Change]=\"onChange\"\n      [Changed]=\"onChanged\"\n      [ariaLabelFormat]=\"ariaLabelFormat\"\n      [ariaLabelId]=\"ariaLabelId\"\n      [readOnly]=\"readOnly\"\n      [getAriaLabel]=\"getAriaLabel\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [RenderStar]=\"renderStar && onRenderStar\"\n    ></Rating>\n  ",
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
        renderStar: [{ type: Input }],
        onRatingChange: [{ type: Output }],
        onRatingChanged: [{ type: Output }]
    };
    tslib_1.__decorate([
        passProp(),
        tslib_1.__metadata("design:type", Function)
    ], FabRatingComponent.prototype, "onRenderStar", void 0);
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
    FabRatingComponent.prototype.renderStar;
    /** @type {?} */
    FabRatingComponent.prototype.onRenderStar;
    /** @type {?} */
    FabRatingComponent.prototype.onRatingChange;
    /** @type {?} */
    FabRatingComponent.prototype.onRatingChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF3QixRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUc1STtJQTJCd0MsOENBQW1DO0lBMkJ6RSw0QkFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBSTNEOztRQVRrQixvQkFBYyxHQUFHLElBQUksWUFBWSxFQUF3QyxDQUFDOztRQUUxRSxxQkFBZSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBSzNFLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDN0MsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxxQ0FBUTs7Ozs7SUFBUixVQUFTLEVBQWtDLEVBQUUsTUFBZTtRQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXO1lBQ3hCLE1BQU0sUUFBQTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsc0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWU7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxnbUJBcUJUOzZCQUNRLGdCQUFnQjtpQkFDMUI7Ozs7Z0JBN0JzQyxVQUFVO2dCQUF4QyxpQkFBaUI7Z0JBQWdELFNBQVM7Z0JBQXpCLE1BQU07OzsrQkErQjdELFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO3VCQUNMLEtBQUs7a0NBRUwsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSztpQ0FLTCxNQUFNO2tDQUVOLE1BQU07O0lBTEs7UUFBWCxRQUFRLEVBQUU7OzREQUF5RDtJQThCdEUseUJBQUM7Q0FBQSxBQTdFRCxDQTJCd0MscUJBQXFCLEdBa0Q1RDtTQWxEWSxrQkFBa0I7Ozs7OztJQUM3QiwwQ0FBNkU7O0lBRTdFLDBDQUFxRDs7SUFDckQsb0NBQXlDOztJQUN6QyxpQ0FBbUM7O0lBQ25DLGlDQUFtQzs7SUFDbkMsNENBQXlEOztJQUN6RCxrQ0FBcUM7O0lBQ3JDLDRDQUF5RDs7SUFDekQsa0NBQXFDOztJQUVyQyw2Q0FBMkQ7O0lBQzNELHlDQUFtRDs7SUFDbkQsc0NBQTZDOztJQUM3QywwQ0FBcUQ7O0lBQ3JELG9DQUF5Qzs7SUFDekMsbUNBQXVDOztJQUN2Qyx3Q0FBNkQ7O0lBRTdELDBDQUFvRTs7SUFHcEUsNENBQTZGOztJQUU3Riw2Q0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgcGFzc1Byb3AsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUmF0aW5nUHJvcHMsIElSYXRpbmdTdGFyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9SYXRpbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItcmF0aW5nJyxcclxuICBleHBvcnRBczogJ2ZhYlJhdGluZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxSYXRpbmdcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtyYXRpbmddPVwicmF0aW5nXCJcclxuICAgICAgW21pbl09XCJtaW5cIlxyXG4gICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgIFthbGxvd1plcm9TdGFyc109XCJhbGxvd1plcm9TdGFyc1wiXHJcbiAgICAgIFtpY29uXT1cImljb25cIlxyXG4gICAgICBbdW5zZWxlY3RlZEljb25dPVwidW5zZWxlY3RlZEljb25cIlxyXG4gICAgICBbc2l6ZV09XCJzaXplXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZVwiXHJcbiAgICAgIFtDaGFuZ2VkXT1cIm9uQ2hhbmdlZFwiXHJcbiAgICAgIFthcmlhTGFiZWxGb3JtYXRdPVwiYXJpYUxhYmVsRm9ybWF0XCJcclxuICAgICAgW2FyaWFMYWJlbElkXT1cImFyaWFMYWJlbElkXCJcclxuICAgICAgW3JlYWRPbmx5XT1cInJlYWRPbmx5XCJcclxuICAgICAgW2dldEFyaWFMYWJlbF09XCJnZXRBcmlhTGFiZWxcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtSZW5kZXJTdGFyXT1cInJlbmRlclN0YXIgJiYgb25SZW5kZXJTdGFyXCJcclxuICAgID48L1JhdGluZz5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElSYXRpbmdQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElSYXRpbmdQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgcmF0aW5nPzogSVJhdGluZ1Byb3BzWydyYXRpbmcnXTtcclxuICBASW5wdXQoKSBtaW4/OiBJUmF0aW5nUHJvcHNbJ21pbiddO1xyXG4gIEBJbnB1dCgpIG1heD86IElSYXRpbmdQcm9wc1snbWF4J107XHJcbiAgQElucHV0KCkgYWxsb3daZXJvU3RhcnM/OiBJUmF0aW5nUHJvcHNbJ2FsbG93WmVyb1N0YXJzJ107XHJcbiAgQElucHV0KCkgaWNvbj86IElSYXRpbmdQcm9wc1snaWNvbiddO1xyXG4gIEBJbnB1dCgpIHVuc2VsZWN0ZWRJY29uPzogSVJhdGluZ1Byb3BzWyd1bnNlbGVjdGVkSWNvbiddO1xyXG4gIEBJbnB1dCgpIHNpemU/OiBJUmF0aW5nUHJvcHNbJ3NpemUnXTtcclxuICAvLyBASW5wdXQoKSBvbkNoYW5nZWQ/OiBJUmF0aW5nUHJvcHNbJ29uQ2hhbmdlZCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbEZvcm1hdD86IElSYXRpbmdQcm9wc1snYXJpYUxhYmVsRm9ybWF0J107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsSWQ/OiBJUmF0aW5nUHJvcHNbJ2FyaWFMYWJlbElkJ107XHJcbiAgQElucHV0KCkgcmVhZE9ubHk/OiBJUmF0aW5nUHJvcHNbJ3JlYWRPbmx5J107XHJcbiAgQElucHV0KCkgZ2V0QXJpYUxhYmVsPzogSVJhdGluZ1Byb3BzWydnZXRBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJUmF0aW5nUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVJhdGluZ1Byb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHJlbmRlclN0YXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJUmF0aW5nU3RhclByb3BzPjtcclxuXHJcbiAgQHBhc3NQcm9wKCkgb25SZW5kZXJTdGFyOiAocHJvcHM/OiBJUmF0aW5nU3RhclByb3BzKSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUmF0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogRm9jdXNFdmVudCwgcmF0aW5nPzogbnVtYmVyIH0+KCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUmF0aW5nQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyByYXRpbmc/OiBudW1iZXIgfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSB9KTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZWQgPSB0aGlzLm9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVyU3RhciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJTdGFyKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2PzogUmVhY3QuRm9jdXNFdmVudDxIVE1MRWxlbWVudD4sIHJhdGluZz86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJhdGluZ0NoYW5nZS5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICByYXRpbmdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VkKHJhdGluZz86IG51bWJlcikge1xyXG4gICAgdGhpcy5vblJhdGluZ0NoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHJhdGluZ1xyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=