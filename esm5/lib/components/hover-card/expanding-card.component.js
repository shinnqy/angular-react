/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef, Renderer2, NgZone, } from '@angular/core';
var FabExpandingCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabExpandingCardComponent, _super);
    function FabExpandingCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onEnter = new EventEmitter();
        _this.onLeave = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabExpandingCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
        this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
    };
    FabExpandingCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-expanding-card',
                    exportAs: 'fabExpandingCard',
                    template: "\n    <ExpandingCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [compactCardHeight]=\"compactCardHeight\"\n      [expandedCardHeight]=\"expandedCardHeight\"\n      [mode]=\"mode\"\n      [RenderCompactCard]=\"renderCompactCard && onRenderCompactCard\"\n      [RenderExpandedCard]=\"renderExpandedCard && onRenderExpandedCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ExpandingCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabExpandingCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabExpandingCardComponent.propDecorators = {
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
        compactCardHeight: [{ type: Input }],
        expandedCardHeight: [{ type: Input }],
        mode: [{ type: Input }],
        renderCompactCard: [{ type: Input }],
        renderExpandedCard: [{ type: Input }],
        onEnter: [{ type: Output }],
        onLeave: [{ type: Output }]
    };
    return FabExpandingCardComponent;
}(ReactWrapperComponent));
export { FabExpandingCardComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabExpandingCardComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabExpandingCardComponent.prototype.componentRef;
    /** @type {?} */
    FabExpandingCardComponent.prototype.className;
    /** @type {?} */
    FabExpandingCardComponent.prototype.directionalHint;
    /** @type {?} */
    FabExpandingCardComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabExpandingCardComponent.prototype.firstFocus;
    /** @type {?} */
    FabExpandingCardComponent.prototype.gapSpace;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderData;
    /** @type {?} */
    FabExpandingCardComponent.prototype.styles;
    /** @type {?} */
    FabExpandingCardComponent.prototype.targetElement;
    /** @type {?} */
    FabExpandingCardComponent.prototype.theme;
    /** @type {?} */
    FabExpandingCardComponent.prototype.trapFocus;
    /** @type {?} */
    FabExpandingCardComponent.prototype.compactCardHeight;
    /** @type {?} */
    FabExpandingCardComponent.prototype.expandedCardHeight;
    /** @type {?} */
    FabExpandingCardComponent.prototype.mode;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderCompactCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.renderExpandedCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onEnter;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onLeave;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onRenderCompactCard;
    /** @type {?} */
    FabExpandingCardComponent.prototype.onRenderExpandedCard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kaW5nLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2hvdmVyLWNhcmQvIiwic291cmNlcyI6WyJleHBhbmRpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBd0IscUJBQXFCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQThCK0MscURBQTBDO0lBdUJ2RixtQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBQzNEO1FBTGtCLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ25DLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztJQUl0RCxDQUFDOzs7O0lBUUQsNENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDAxQkF1QlQ7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBekNDLFVBQVU7Z0JBTVYsaUJBQWlCO2dCQUNqQixTQUFTO2dCQUNULE1BQU07OzsrQkFtQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBRXhDLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLEtBQUs7dUJBQ0wsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLEtBQUs7MEJBRUwsTUFBTTswQkFDTixNQUFNOztJQWdCVCxnQ0FBQztDQUFBLEFBbkVELENBOEIrQyxxQkFBcUIsR0FxQ25FO1NBckNZLHlCQUF5Qjs7Ozs7O0lBQ3BDLGlEQUE4RTs7SUFFOUUsaURBQTREOztJQUM1RCw4Q0FBc0Q7O0lBQ3RELG9EQUFrRTs7SUFDbEUseURBQTRFOztJQUM1RSwrQ0FBd0Q7O0lBQ3hELDZDQUFvRDs7SUFDcEQsK0NBQXdEOztJQUN4RCwyQ0FBZ0Q7O0lBQ2hELGtEQUE4RDs7SUFDOUQsMENBQThDOztJQUM5Qyw4Q0FBc0Q7O0lBQ3RELHNEQUFzRTs7SUFDdEUsdURBQXdFOztJQUN4RSx5Q0FBNEM7O0lBQzVDLHNEQUF1RTs7SUFDdkUsdURBQXdFOztJQUV4RSw0Q0FBc0Q7O0lBQ3RELDRDQUFzRDs7SUFNdEQsd0RBQXNIOztJQUN0SCx5REFHaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCwgSnN4UmVuZGVyRnVuYyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uSW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgTmdab25lLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRXhwYW5kaW5nQ2FyZFByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvSG92ZXJDYXJkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWV4cGFuZGluZy1jYXJkJyxcclxuICBleHBvcnRBczogJ2ZhYkV4cGFuZGluZ0NhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8RXhwYW5kaW5nQ2FyZFxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2RpcmVjdGlvbmFsSGludF09XCJkaXJlY3Rpb25hbEhpbnRcIlxyXG4gICAgICBbZGlyZWN0aW9uYWxIaW50Rml4ZWRdPVwiZGlyZWN0aW9uYWxIaW50Rml4ZWRcIlxyXG4gICAgICBbZmlyc3RGb2N1c109XCJmaXJzdEZvY3VzXCJcclxuICAgICAgW2dhcFNwYWNlXT1cImdhcFNwYWNlXCJcclxuICAgICAgW3JlbmRlckRhdGFdPVwicmVuZGVyRGF0YVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RhcmdldEVsZW1lbnRdPVwidGFyZ2V0RWxlbWVudFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFt0cmFwRm9jdXNdPVwidHJhcEZvY3VzXCJcclxuICAgICAgW2NvbXBhY3RDYXJkSGVpZ2h0XT1cImNvbXBhY3RDYXJkSGVpZ2h0XCJcclxuICAgICAgW2V4cGFuZGVkQ2FyZEhlaWdodF09XCJleHBhbmRlZENhcmRIZWlnaHRcIlxyXG4gICAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgICAgW1JlbmRlckNvbXBhY3RDYXJkXT1cInJlbmRlckNvbXBhY3RDYXJkICYmIG9uUmVuZGVyQ29tcGFjdENhcmRcIlxyXG4gICAgICBbUmVuZGVyRXhwYW5kZWRDYXJkXT1cInJlbmRlckV4cGFuZGVkQ2FyZCAmJiBvblJlbmRlckV4cGFuZGVkQ2FyZFwiXHJcbiAgICAgIChvbkVudGVyKT1cIm9uRW50ZXIuZW1pdCgpXCJcclxuICAgICAgKG9uTGVhdmUpPVwib25MZWF2ZS5lbWl0KClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvRXhwYW5kaW5nQ2FyZD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiRXhwYW5kaW5nQ2FyZENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJRXhwYW5kaW5nQ2FyZFByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludD86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ2RpcmVjdGlvbmFsSGludCddO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbmFsSGludEZpeGVkPzogSUV4cGFuZGluZ0NhcmRQcm9wc1snZGlyZWN0aW9uYWxIaW50Rml4ZWQnXTtcclxuICBASW5wdXQoKSBmaXJzdEZvY3VzPzogSUV4cGFuZGluZ0NhcmRQcm9wc1snZmlyc3RGb2N1cyddO1xyXG4gIEBJbnB1dCgpIGdhcFNwYWNlPzogSUV4cGFuZGluZ0NhcmRQcm9wc1snZ2FwU3BhY2UnXTtcclxuICBASW5wdXQoKSByZW5kZXJEYXRhPzogSUV4cGFuZGluZ0NhcmRQcm9wc1sncmVuZGVyRGF0YSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRhcmdldEVsZW1lbnQ/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWyd0YXJnZXRFbGVtZW50J107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHRyYXBGb2N1cz86IElFeHBhbmRpbmdDYXJkUHJvcHNbJ3RyYXBGb2N1cyddO1xyXG4gIEBJbnB1dCgpIGNvbXBhY3RDYXJkSGVpZ2h0PzogSUV4cGFuZGluZ0NhcmRQcm9wc1snY29tcGFjdENhcmRIZWlnaHQnXTtcclxuICBASW5wdXQoKSBleHBhbmRlZENhcmRIZWlnaHQ/OiBJRXhwYW5kaW5nQ2FyZFByb3BzWydleHBhbmRlZENhcmRIZWlnaHQnXTtcclxuICBASW5wdXQoKSBtb2RlPzogSUV4cGFuZGluZ0NhcmRQcm9wc1snbW9kZSddO1xyXG4gIEBJbnB1dCgpIHJlbmRlckNvbXBhY3RDYXJkPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUV4cGFuZGluZ0NhcmRQcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyRXhwYW5kZWRDYXJkPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUV4cGFuZGluZ0NhcmRQcm9wcz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lIH0pO1xyXG4gIH1cclxuXHJcbiAgb25SZW5kZXJDb21wYWN0Q2FyZDogKHByb3BzPzogSUV4cGFuZGluZ0NhcmRQcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUV4cGFuZGluZ0NhcmRQcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyRXhwYW5kZWRDYXJkOiAoXHJcbiAgICBwcm9wcz86IElFeHBhbmRpbmdDYXJkUHJvcHMsXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRXhwYW5kaW5nQ2FyZFByb3BzPlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckNvbXBhY3RDYXJkID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckNvbXBhY3RDYXJkKTtcclxuICAgIHRoaXMub25SZW5kZXJFeHBhbmRlZENhcmQgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyRXhwYW5kZWRDYXJkKTtcclxuICB9XHJcbn1cclxuIl19