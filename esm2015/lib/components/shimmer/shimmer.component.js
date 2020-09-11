/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
export class FabShimmerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderCustomElementsGroup(value) {
        this._renderCustomElementsGroup = value;
        if (value) {
            this.customElementsGroup = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderCustomElementsGroup() {
        return this._renderCustomElementsGroup;
    }
}
FabShimmerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-shimmer',
                exportAs: 'fabShimmer',
                template: `
    <Shimmer
      #reactNode
      [componentRef]="componentRef"
      [width]="width"
      [isDataLoaded]="isDataLoaded"
      [shimmerElements]="shimmerElements"
      [ariaLabel]="ariaLabel"
      [styles]="styles"
      [className]="className"
      [theme]="theme"
      [shimmerColors]="shimmerColors"
      [customElementsGroup]="customElementsGroup"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Shimmer>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabShimmerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
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
export class FabShimmerElementsGroupComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
    }
}
FabShimmerElementsGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-shimmer-elements-group',
                exportAs: 'fabShimmerElementsGroup',
                template: `
    <ShimmerElementsGroup
      #reactNode
      [componentRef]="componentRef"
      [rowHeight]="rowHeight"
      [shimmerElements]="shimmerElements"
      [flexWrap]="flexWrap"
      [width]="width"
      [theme]="theme"
      [backgroundColor]="backgroundColor"
      [styles]="styles"
    >
    </ShimmerElementsGroup>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabShimmerElementsGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpbW1lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvc2hpbW1lci8iLCJzb3VyY2VzIjpbInNoaW1tZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBd0IscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQTJCdkIsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHFCQUFvQzs7Ozs7OztJQThCM0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQW5CRCxJQUNJLHlCQUF5QixDQUFDLEtBQStCO1FBQzNELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFFeEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7OztJQUVELElBQUkseUJBQXlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQ3pDLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQS9CQyxVQUFVO1lBRlYsaUJBQWlCO1lBS2pCLFNBQVM7WUFEVCxNQUFNOzs7MkJBK0JMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUV2QyxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzt3Q0FFTCxLQUFLOzs7Ozs7O0lBWk4sMkNBQTZFOztJQUU3RSwyQ0FBc0Q7O0lBQ3RELG9DQUF3Qzs7SUFDeEMsMkNBQXNEOztJQUN0RCw4Q0FBNEQ7O0lBQzVELHdDQUFnRDs7SUFDaEQscUNBQTBDOztJQUMxQyx3Q0FBZ0Q7O0lBQ2hELG9DQUF3Qzs7SUFDeEMsNENBQXdEOztJQWV4RCxrREFBc0M7Ozs7O0lBRXRDLHlEQUE4RDs7QUEyQmhFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxxQkFBaUQ7Ozs7OztJQVlyRyxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUI7UUFDM0YsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUF0RkMsVUFBVTtZQUZWLGlCQUFpQjtZQUtqQixTQUFTOzs7MkJBcUZSLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUV2QyxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7Ozs7Ozs7SUFUTix3REFBNkU7O0lBRTdFLHdEQUFtRTs7SUFDbkUscURBQTZEOztJQUM3RCwyREFBeUU7O0lBQ3pFLG9EQUEyRDs7SUFDM0QsaURBQXFEOztJQUNyRCxpREFBcUQ7O0lBQ3JELDJEQUF5RTs7SUFDekUsa0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVNoaW1tZXJFbGVtZW50c0dyb3VwUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9jb21wb25lbnRzL1NoaW1tZXIvU2hpbW1lckVsZW1lbnRzR3JvdXAvU2hpbW1lckVsZW1lbnRzR3JvdXAudHlwZXMnO1xyXG5pbXBvcnQgeyBJU2hpbW1lclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvU2hpbW1lcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1zaGltbWVyJyxcclxuICBleHBvcnRBczogJ2ZhYlNoaW1tZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U2hpbW1lclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgICAgW2lzRGF0YUxvYWRlZF09XCJpc0RhdGFMb2FkZWRcIlxyXG4gICAgICBbc2hpbW1lckVsZW1lbnRzXT1cInNoaW1tZXJFbGVtZW50c1wiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzaGltbWVyQ29sb3JzXT1cInNoaW1tZXJDb2xvcnNcIlxyXG4gICAgICBbY3VzdG9tRWxlbWVudHNHcm91cF09XCJjdXN0b21FbGVtZW50c0dyb3VwXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L1NoaW1tZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlNoaW1tZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SVNoaW1tZXJQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElTaGltbWVyUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHdpZHRoPzogSVNoaW1tZXJQcm9wc1snd2lkdGgnXTtcclxuICBASW5wdXQoKSBpc0RhdGFMb2FkZWQ/OiBJU2hpbW1lclByb3BzWydpc0RhdGFMb2FkZWQnXTtcclxuICBASW5wdXQoKSBzaGltbWVyRWxlbWVudHM/OiBJU2hpbW1lclByb3BzWydzaGltbWVyRWxlbWVudHMnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJU2hpbW1lclByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJU2hpbW1lclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJU2hpbW1lclByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElTaGltbWVyUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgc2hpbW1lckNvbG9ycz86IElTaGltbWVyUHJvcHNbJ3NoaW1tZXJDb2xvcnMnXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcmVuZGVyQ3VzdG9tRWxlbWVudHNHcm91cCh2YWx1ZTogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+KSB7XHJcbiAgICB0aGlzLl9yZW5kZXJDdXN0b21FbGVtZW50c0dyb3VwID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tRWxlbWVudHNHcm91cCA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcih2YWx1ZSkoe30pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHJlbmRlckN1c3RvbUVsZW1lbnRzR3JvdXAoKTogSW5wdXRSZW5kZXJlck9wdGlvbnM8e30+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJDdXN0b21FbGVtZW50c0dyb3VwO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tRWxlbWVudHNHcm91cD86IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHJcbiAgcHJpdmF0ZSBfcmVuZGVyQ3VzdG9tRWxlbWVudHNHcm91cD86IElucHV0UmVuZGVyZXJPcHRpb25zPHt9PjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1zaGltbWVyLWVsZW1lbnRzLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2ZhYlNoaW1tZXJFbGVtZW50c0dyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFNoaW1tZXJFbGVtZW50c0dyb3VwXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbcm93SGVpZ2h0XT1cInJvd0hlaWdodFwiXHJcbiAgICAgIFtzaGltbWVyRWxlbWVudHNdPVwic2hpbW1lckVsZW1lbnRzXCJcclxuICAgICAgW2ZsZXhXcmFwXT1cImZsZXhXcmFwXCJcclxuICAgICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2JhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICA+XHJcbiAgICA8L1NoaW1tZXJFbGVtZW50c0dyb3VwPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJTaGltbWVyRWxlbWVudHNHcm91cENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wcz4ge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSByb3dIZWlnaHQ/OiBJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wc1sncm93SGVpZ2h0J107XHJcbiAgQElucHV0KCkgc2hpbW1lckVsZW1lbnRzPzogSVNoaW1tZXJFbGVtZW50c0dyb3VwUHJvcHNbJ3NoaW1tZXJFbGVtZW50cyddO1xyXG4gIEBJbnB1dCgpIGZsZXhXcmFwPzogSVNoaW1tZXJFbGVtZW50c0dyb3VwUHJvcHNbJ2ZsZXhXcmFwJ107XHJcbiAgQElucHV0KCkgd2lkdGg/OiBJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wc1snd2lkdGgnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcj86IElTaGltbWVyRWxlbWVudHNHcm91cFByb3BzWydiYWNrZ3JvdW5kQ29sb3InXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJU2hpbW1lckVsZW1lbnRzR3JvdXBQcm9wc1snc3R5bGVzJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=