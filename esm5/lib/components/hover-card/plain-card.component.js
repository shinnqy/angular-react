/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef, Renderer2, NgZone, } from '@angular/core';
var FabPlainCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabPlainCardComponent, _super);
    function FabPlainCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onEnter = new EventEmitter();
        _this.onLeave = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabPlainCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
    };
    FabPlainCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-plain-card',
                    exportAs: 'fabPlainCard',
                    template: "\n    <PlainCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [RenderPlainCard]=\"renderPlainCard && onRenderPlainCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PlainCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPlainCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPlainCardComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: false },] }],
        componentRef: [{ type: Input }],
        className: [{ type: Input }],
        directionalHint: [{ type: Input }],
        directionalHintFixed: [{ type: Input }],
        firstFocus: [{ type: Input }],
        gapSpace: [{ type: Input }],
        renderData: [{ type: Input }],
        styles: [{ type: Input }],
        targetElement: [{ type: Input }],
        theme: [{ type: Input }],
        trapFocus: [{ type: Input }],
        renderPlainCard: [{ type: Input }],
        onEnter: [{ type: Output }],
        onLeave: [{ type: Output }]
    };
    return FabPlainCardComponent;
}(ReactWrapperComponent));
export { FabPlainCardComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPlainCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPlainCardComponent.prototype.componentRef;
    /** @type {?} */
    FabPlainCardComponent.prototype.className;
    /** @type {?} */
    FabPlainCardComponent.prototype.directionalHint;
    /** @type {?} */
    FabPlainCardComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabPlainCardComponent.prototype.firstFocus;
    /** @type {?} */
    FabPlainCardComponent.prototype.gapSpace;
    /** @type {?} */
    FabPlainCardComponent.prototype.renderData;
    /** @type {?} */
    FabPlainCardComponent.prototype.styles;
    /** @type {?} */
    FabPlainCardComponent.prototype.targetElement;
    /** @type {?} */
    FabPlainCardComponent.prototype.theme;
    /** @type {?} */
    FabPlainCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabPlainCardComponent.prototype.renderPlainCard;
    /** @type {?} */
    FabPlainCardComponent.prototype.onEnter;
    /** @type {?} */
    FabPlainCardComponent.prototype.onLeave;
    /** @type {?} */
    FabPlainCardComponent.prototype.onRenderPlainCard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhaW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvaG92ZXItY2FyZC8iLCJzb3VyY2VzIjpbInBsYWluLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXdCLHFCQUFxQixFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUEwQjJDLGlEQUFzQztJQXFCL0UsK0JBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFBN0csWUFDRSxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxTQUMzRDtRQVBrQixhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7SUFNdEQsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxzb0JBbUJUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQXJDQyxVQUFVO2dCQU1WLGlCQUFpQjtnQkFDakIsU0FBUztnQkFDVCxNQUFNOzs7K0JBK0JMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOytCQUV4QyxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzt1Q0FDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzswQkFFTCxNQUFNOzBCQUNOLE1BQU07O0lBV1QsNEJBQUM7Q0FBQSxBQXRERCxDQTBCMkMscUJBQXFCLEdBNEIvRDtTQTVCWSxxQkFBcUI7Ozs7OztJQUNoQyw2Q0FBOEU7O0lBRTlFLDZDQUF1RDs7SUFDdkQsMENBQWlEOztJQUNqRCxnREFBNkQ7O0lBQzdELHFEQUF1RTs7SUFDdkUsMkNBQW1EOztJQUNuRCx5Q0FBK0M7O0lBQy9DLDJDQUFtRDs7SUFDbkQsdUNBQTJDOztJQUMzQyw4Q0FBeUQ7O0lBQ3pELHNDQUF5Qzs7SUFDekMsMENBQWlEOztJQUNqRCxnREFBaUU7O0lBRWpFLHdDQUFzRDs7SUFDdEQsd0NBQXNEOztJQUV0RCxrREFBNEciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCwgSnN4UmVuZGVyRnVuYyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uSW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgTmdab25lLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGxhaW5DYXJkUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Ib3ZlckNhcmQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItcGxhaW4tY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJQbGFpbkNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8UGxhaW5DYXJkXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50XT1cImRpcmVjdGlvbmFsSGludFwiXHJcbiAgICAgIFtkaXJlY3Rpb25hbEhpbnRGaXhlZF09XCJkaXJlY3Rpb25hbEhpbnRGaXhlZFwiXHJcbiAgICAgIFtmaXJzdEZvY3VzXT1cImZpcnN0Rm9jdXNcIlxyXG4gICAgICBbZ2FwU3BhY2VdPVwiZ2FwU3BhY2VcIlxyXG4gICAgICBbcmVuZGVyRGF0YV09XCJyZW5kZXJEYXRhXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGFyZ2V0RWxlbWVudF09XCJ0YXJnZXRFbGVtZW50XCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3RyYXBGb2N1c109XCJ0cmFwRm9jdXNcIlxyXG4gICAgICBbUmVuZGVyUGxhaW5DYXJkXT1cInJlbmRlclBsYWluQ2FyZCAmJiBvblJlbmRlclBsYWluQ2FyZFwiXHJcbiAgICAgIChvbkVudGVyKT1cIm9uRW50ZXIuZW1pdCgpXCJcclxuICAgICAgKG9uTGVhdmUpPVwib25MZWF2ZS5lbWl0KClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvUGxhaW5DYXJkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJQbGFpbkNhcmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVBsYWluQ2FyZFByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZjogSVBsYWluQ2FyZFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU6IElQbGFpbkNhcmRQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uYWxIaW50OiBJUGxhaW5DYXJkUHJvcHNbJ2RpcmVjdGlvbmFsSGludCddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludEZpeGVkOiBJUGxhaW5DYXJkUHJvcHNbJ2RpcmVjdGlvbmFsSGludEZpeGVkJ107XHJcbiAgQElucHV0KCkgZmlyc3RGb2N1czogSVBsYWluQ2FyZFByb3BzWydmaXJzdEZvY3VzJ107XHJcbiAgQElucHV0KCkgZ2FwU3BhY2U6IElQbGFpbkNhcmRQcm9wc1snZ2FwU3BhY2UnXTtcclxuICBASW5wdXQoKSByZW5kZXJEYXRhOiBJUGxhaW5DYXJkUHJvcHNbJ3JlbmRlckRhdGEnXTtcclxuICBASW5wdXQoKSBzdHlsZXM6IElQbGFpbkNhcmRQcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGFyZ2V0RWxlbWVudDogSVBsYWluQ2FyZFByb3BzWyd0YXJnZXRFbGVtZW50J107XHJcbiAgQElucHV0KCkgdGhlbWU6IElQbGFpbkNhcmRQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSB0cmFwRm9jdXM6IElQbGFpbkNhcmRQcm9wc1sndHJhcEZvY3VzJ107XHJcbiAgQElucHV0KCkgcmVuZGVyUGxhaW5DYXJkPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVBsYWluQ2FyZFByb3BzPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIG9uUmVuZGVyUGxhaW5DYXJkOiAocHJvcHM/OiBJUGxhaW5DYXJkUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElQbGFpbkNhcmRQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVyUGxhaW5DYXJkID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclBsYWluQ2FyZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==