/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
var FabShimmerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabShimmerComponent, _super);
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
export { FabShimmerComponent };
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
    tslib_1.__extends(FabShimmerElementsGroupComponent, _super);
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
export { FabShimmerElementsGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpbW1lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvc2hpbW1lci8iLCJzb3VyY2VzIjpbInNoaW1tZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXdCLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUF1QnlDLCtDQUFvQztJQThCM0UsNkJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7ZUFDM0csa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsRixDQUFDO0lBbkJELHNCQUNJLDBEQUF5Qjs7OztRQVE3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBWEQsVUFDOEIsS0FBK0I7WUFDM0QsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztZQUV4QyxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsbWVBZ0JUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQS9CQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFLakIsU0FBUztnQkFEVCxNQUFNOzs7K0JBK0JMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUV2QyxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0Q0FFTCxLQUFLOztJQW9CUiwwQkFBQztDQUFBLEFBeERELENBdUJ5QyxxQkFBcUIsR0FpQzdEO1NBakNZLG1CQUFtQjs7Ozs7O0lBQzlCLDJDQUE2RTs7SUFFN0UsMkNBQXNEOztJQUN0RCxvQ0FBd0M7O0lBQ3hDLDJDQUFzRDs7SUFDdEQsOENBQTREOztJQUM1RCx3Q0FBZ0Q7O0lBQ2hELHFDQUEwQzs7SUFDMUMsd0NBQWdEOztJQUNoRCxvQ0FBd0M7O0lBQ3hDLDRDQUF3RDs7SUFleEQsa0RBQXNDOzs7OztJQUV0Qyx5REFBOEQ7O0FBT2hFO0lBb0JzRCw0REFBaUQ7SUFZckcsMENBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtlQUMzRixrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFFLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHFXQWFUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQXRGQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFLakIsU0FBUzs7OytCQXFGUixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQUtSLHVDQUFDO0NBQUEsQUFuQ0QsQ0FvQnNELHFCQUFxQixHQWUxRTtTQWZZLGdDQUFnQzs7Ozs7O0lBQzNDLHdEQUE2RTs7SUFFN0Usd0RBQW1FOztJQUNuRSxxREFBNkQ7O0lBQzdELDJEQUF5RTs7SUFDekUsb0RBQTJEOztJQUMzRCxpREFBcUQ7O0lBQ3JELGlEQUFxRDs7SUFDckQsMkRBQXlFOztJQUN6RSxrREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL2NvbXBvbmVudHMvU2hpbW1lci9TaGltbWVyRWxlbWVudHNHcm91cC9TaGltbWVyRWxlbWVudHNHcm91cC50eXBlcyc7XHJcbmltcG9ydCB7IElTaGltbWVyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9TaGltbWVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXNoaW1tZXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiU2hpbW1lcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxTaGltbWVyXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbd2lkdGhdPVwid2lkdGhcIlxyXG4gICAgICBbaXNEYXRhTG9hZGVkXT1cImlzRGF0YUxvYWRlZFwiXHJcbiAgICAgIFtzaGltbWVyRWxlbWVudHNdPVwic2hpbW1lckVsZW1lbnRzXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3NoaW1tZXJDb2xvcnNdPVwic2hpbW1lckNvbG9yc1wiXHJcbiAgICAgIFtjdXN0b21FbGVtZW50c0dyb3VwXT1cImN1c3RvbUVsZW1lbnRzR3JvdXBcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvU2hpbW1lcj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiU2hpbW1lckNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJU2hpbW1lclByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVNoaW1tZXJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgd2lkdGg/OiBJU2hpbW1lclByb3BzWyd3aWR0aCddO1xyXG4gIEBJbnB1dCgpIGlzRGF0YUxvYWRlZD86IElTaGltbWVyUHJvcHNbJ2lzRGF0YUxvYWRlZCddO1xyXG4gIEBJbnB1dCgpIHNoaW1tZXJFbGVtZW50cz86IElTaGltbWVyUHJvcHNbJ3NoaW1tZXJFbGVtZW50cyddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElTaGltbWVyUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElTaGltbWVyUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElTaGltbWVyUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVNoaW1tZXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzaGltbWVyQ29sb3JzPzogSVNoaW1tZXJQcm9wc1snc2hpbW1lckNvbG9ycyddO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByZW5kZXJDdXN0b21FbGVtZW50c0dyb3VwKHZhbHVlOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT4pIHtcclxuICAgIHRoaXMuX3JlbmRlckN1c3RvbUVsZW1lbnRzR3JvdXAgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5jdXN0b21FbGVtZW50c0dyb3VwID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKHZhbHVlKSh7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmVuZGVyQ3VzdG9tRWxlbWVudHNHcm91cCgpOiBJbnB1dFJlbmRlcmVyT3B0aW9uczx7fT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlckN1c3RvbUVsZW1lbnRzR3JvdXA7XHJcbiAgfVxyXG5cclxuICBjdXN0b21FbGVtZW50c0dyb3VwPzogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxuICBwcml2YXRlIF9yZW5kZXJDdXN0b21FbGVtZW50c0dyb3VwPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lLCBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXNoaW1tZXItZWxlbWVudHMtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnZmFiU2hpbW1lckVsZW1lbnRzR3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U2hpbW1lckVsZW1lbnRzR3JvdXBcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtyb3dIZWlnaHRdPVwicm93SGVpZ2h0XCJcclxuICAgICAgW3NoaW1tZXJFbGVtZW50c109XCJzaGltbWVyRWxlbWVudHNcIlxyXG4gICAgICBbZmxleFdyYXBdPVwiZmxleFdyYXBcIlxyXG4gICAgICBbd2lkdGhdPVwid2lkdGhcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgID5cclxuICAgIDwvU2hpbW1lckVsZW1lbnRzR3JvdXA+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlNoaW1tZXJFbGVtZW50c0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSVNoaW1tZXJFbGVtZW50c0dyb3VwUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHJvd0hlaWdodD86IElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzWydyb3dIZWlnaHQnXTtcclxuICBASW5wdXQoKSBzaGltbWVyRWxlbWVudHM/OiBJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wc1snc2hpbW1lckVsZW1lbnRzJ107XHJcbiAgQElucHV0KCkgZmxleFdyYXA/OiBJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wc1snZmxleFdyYXAnXTtcclxuICBASW5wdXQoKSB3aWR0aD86IElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzWyd3aWR0aCddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSVNoaW1tZXJFbGVtZW50c0dyb3VwUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yPzogSVNoaW1tZXJFbGVtZW50c0dyb3VwUHJvcHNbJ2JhY2tncm91bmRDb2xvciddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzWydzdHlsZXMnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==