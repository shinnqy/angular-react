/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
var FabBreadcrumbComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabBreadcrumbComponent, _super);
    function FabBreadcrumbComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    /**
     * @return {?}
     */
    FabBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
    };
    FabBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-breadcrumb',
                    exportAs: 'fabBreadcrumb',
                    template: "\n    <Breadcrumb\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [items]=\"items\"\n      [className]=\"className\"\n      [dividerAs]=\"dividerAs\"\n      [maxDisplayedItems]=\"maxDisplayedItems\"\n      [ariaLabel]=\"ariaLabel\"\n      [overflowAriaLabel]=\"overflowAriaLabel\"\n      [overflowIndex]=\"overflowIndex\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [focusZoneProps]=\"focusZoneProps\"\n      [tooltipHostProps]=\"tooltipHostProps\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [ReduceData]=\"onReduceData\"\n    >\n    </Breadcrumb>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabBreadcrumbComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabBreadcrumbComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        items: [{ type: Input }],
        className: [{ type: Input }],
        dividerAs: [{ type: Input }],
        maxDisplayedItems: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        overflowAriaLabel: [{ type: Input }],
        overflowIndex: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        focusZoneProps: [{ type: Input }],
        tooltipHostProps: [{ type: Input }],
        renderItem: [{ type: Input }],
        onReduceData: [{ type: Input, args: ['reduceData',] }]
    };
    return FabBreadcrumbComponent;
}(ReactWrapperComponent));
export { FabBreadcrumbComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabBreadcrumbComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.componentRef;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.items;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.className;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.dividerAs;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.maxDisplayedItems;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.ariaLabel;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.overflowAriaLabel;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.overflowIndex;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.styles;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.theme;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.focusZoneProps;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.tooltipHostProps;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.renderItem;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.onReduceData;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.onRenderItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQTBCNEMsa0RBQXVDO0lBcUJqRixnQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CO2VBQzNGLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsdWxCQW1CVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkFqQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBS2pCLFNBQVM7OzsrQkFnQ1IsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBRXZDLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7aUNBQ0wsS0FBSzttQ0FDTCxLQUFLOzZCQUVMLEtBQUs7K0JBQ0wsS0FBSyxTQUFDLFlBQVk7O0lBV3JCLDZCQUFDO0NBQUEsQUF0REQsQ0EwQjRDLHFCQUFxQixHQTRCaEU7U0E1Qlksc0JBQXNCOzs7Ozs7SUFDakMsOENBQTZFOztJQUU3RSw4Q0FBeUQ7O0lBQ3pELHVDQUEwQzs7SUFDMUMsMkNBQW1EOztJQUNuRCwyQ0FBbUQ7O0lBQ25ELG1EQUFtRTs7SUFDbkUsMkNBQW1EOztJQUNuRCxtREFBbUU7O0lBQ25FLCtDQUEyRDs7SUFDM0Qsd0NBQTZDOztJQUM3Qyx1Q0FBMkM7O0lBQzNDLGdEQUE2RDs7SUFDN0Qsa0RBQWlFOztJQUVqRSw0Q0FBNEQ7O0lBQzVELDhDQUFxRTs7SUFFckUsOENBQXVHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUJyZWFkY3J1bWJJdGVtLCBJQnJlYWRjcnVtYlByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQnJlYWRjcnVtYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1icmVhZGNydW1iJyxcclxuICBleHBvcnRBczogJ2ZhYkJyZWFkY3J1bWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8QnJlYWRjcnVtYlxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2l0ZW1zXT1cIml0ZW1zXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbZGl2aWRlckFzXT1cImRpdmlkZXJBc1wiXHJcbiAgICAgIFttYXhEaXNwbGF5ZWRJdGVtc109XCJtYXhEaXNwbGF5ZWRJdGVtc1wiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW292ZXJmbG93QXJpYUxhYmVsXT1cIm92ZXJmbG93QXJpYUxhYmVsXCJcclxuICAgICAgW292ZXJmbG93SW5kZXhdPVwib3ZlcmZsb3dJbmRleFwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2ZvY3VzWm9uZVByb3BzXT1cImZvY3VzWm9uZVByb3BzXCJcclxuICAgICAgW3Rvb2x0aXBIb3N0UHJvcHNdPVwidG9vbHRpcEhvc3RQcm9wc1wiXHJcbiAgICAgIFtSZW5kZXJJdGVtXT1cInJlbmRlckl0ZW0gJiYgb25SZW5kZXJJdGVtXCJcclxuICAgICAgW1JlZHVjZURhdGFdPVwib25SZWR1Y2VEYXRhXCJcclxuICAgID5cclxuICAgIDwvQnJlYWRjcnVtYj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiQnJlYWRjcnVtYkNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJQnJlYWRjcnVtYlByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUJyZWFkY3J1bWJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgaXRlbXM6IElCcmVhZGNydW1iUHJvcHNbJ2l0ZW1zJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUJyZWFkY3J1bWJQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgZGl2aWRlckFzPzogSUJyZWFkY3J1bWJQcm9wc1snZGl2aWRlckFzJ107XHJcbiAgQElucHV0KCkgbWF4RGlzcGxheWVkSXRlbXM/OiBJQnJlYWRjcnVtYlByb3BzWydtYXhEaXNwbGF5ZWRJdGVtcyddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElCcmVhZGNydW1iUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIG92ZXJmbG93QXJpYUxhYmVsPzogSUJyZWFkY3J1bWJQcm9wc1snb3ZlcmZsb3dBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBvdmVyZmxvd0luZGV4PzogSUJyZWFkY3J1bWJQcm9wc1snb3ZlcmZsb3dJbmRleCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElCcmVhZGNydW1iUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUJyZWFkY3J1bWJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBmb2N1c1pvbmVQcm9wcz86IElCcmVhZGNydW1iUHJvcHNbJ2ZvY3VzWm9uZVByb3BzJ107XHJcbiAgQElucHV0KCkgdG9vbHRpcEhvc3RQcm9wcz86IElCcmVhZGNydW1iUHJvcHNbJ3Rvb2x0aXBIb3N0UHJvcHMnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVySXRlbT86IElucHV0UmVuZGVyZXJPcHRpb25zPElCcmVhZGNydW1iSXRlbT47XHJcbiAgQElucHV0KCdyZWR1Y2VEYXRhJykgb25SZWR1Y2VEYXRhPzogSUJyZWFkY3J1bWJQcm9wc1snb25SZWR1Y2VEYXRhJ107XHJcblxyXG4gIG9uUmVuZGVySXRlbTogKHByb3BzPzogSUJyZWFkY3J1bWJJdGVtLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnJlYWRjcnVtYkl0ZW0+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVySXRlbSA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJJdGVtKTtcclxuICB9XHJcbn1cclxuIl19