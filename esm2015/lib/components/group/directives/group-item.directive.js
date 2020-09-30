/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, } from '@angular/core';
import { ChangeableItemsHelper, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
export class GroupItemDirective extends ChangeableItemDirective {
    /**
     * @return {?}
     */
    get onChildItemChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
    }
    /**
     * @return {?}
     */
    get onItemsChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.changeableItemsHelper = new ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
         * @param {?} nonSelf
         * @return {?}
         */
        nonSelf => {
            this.children = (/** @type {?} */ (nonSelf));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.changeableItemsHelper.destroy();
    }
}
GroupItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-group-item' },] }
];
GroupItemDirective.propDecorators = {
    groupItemsDirectives: [{ type: ContentChildren, args: [GroupItemDirective,] }],
    name: [{ type: Input }],
    startIndex: [{ type: Input }],
    count: [{ type: Input }],
    children: [{ type: Input }],
    level: [{ type: Input }],
    isCollapsed: [{ type: Input }],
    isShowingAll: [{ type: Input }],
    isDropEnabled: [{ type: Input }],
    data: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    hasMoreData: [{ type: Input }],
    onChildItemChanged: [{ type: Output }],
    onItemsChanged: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GroupItemDirective.prototype.groupItemsDirectives;
    /** @type {?} */
    GroupItemDirective.prototype.name;
    /** @type {?} */
    GroupItemDirective.prototype.startIndex;
    /** @type {?} */
    GroupItemDirective.prototype.count;
    /** @type {?} */
    GroupItemDirective.prototype.children;
    /** @type {?} */
    GroupItemDirective.prototype.level;
    /** @type {?} */
    GroupItemDirective.prototype.isCollapsed;
    /** @type {?} */
    GroupItemDirective.prototype.isShowingAll;
    /** @type {?} */
    GroupItemDirective.prototype.isDropEnabled;
    /** @type {?} */
    GroupItemDirective.prototype.data;
    /** @type {?} */
    GroupItemDirective.prototype.ariaLabel;
    /** @type {?} */
    GroupItemDirective.prototype.hasMoreData;
    /**
     * @type {?}
     * @private
     */
    GroupItemDirective.prototype.changeableItemsHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ncm91cC9kaXJlY3RpdmVzL2dyb3VwLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXNCLHFCQUFxQixFQUE2Qix1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzFKLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSx1QkFBK0I7Ozs7SUFnQnJFLElBQ0ksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUNyRixDQUFDOzs7O0lBQ0QsSUFDSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7SUFDakYsQ0FBQzs7OztJQUlELGtCQUFrQjtRQUNoQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSTs7OztRQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsT0FBTyxFQUFPLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOzs7bUNBR3RDLGVBQWUsU0FBQyxrQkFBa0I7bUJBRWxDLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FFTCxNQUFNOzZCQUlOLEtBQUs7Ozs7SUFsQk4sa0RBQWtHOztJQUVsRyxrQ0FBOEI7O0lBQzlCLHdDQUEwQzs7SUFDMUMsbUNBQWdDOztJQUNoQyxzQ0FBdUM7O0lBQ3ZDLG1DQUFpQzs7SUFDakMseUNBQTZDOztJQUM3QywwQ0FBK0M7O0lBQy9DLDJDQUFpRDs7SUFDakQsa0NBQStCOztJQUMvQix1Q0FBeUM7O0lBQ3pDLHlDQUE2Qzs7Ozs7SUFXN0MsbURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUdyb3VwIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvR3JvdXBlZExpc3QnO1xyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlZFBheWxvYWQsIENoYW5nZWFibGVJdGVtc0hlbHBlciwgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lciwgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItZ3JvdXAtaXRlbScgfSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwSXRlbURpcmVjdGl2ZSBleHRlbmRzIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPElHcm91cD5cclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXI8SUdyb3VwPiwgSUdyb3VwLCBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oR3JvdXBJdGVtRGlyZWN0aXZlKSByZWFkb25seSBncm91cEl0ZW1zRGlyZWN0aXZlczogUXVlcnlMaXN0PEdyb3VwSXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IElHcm91cFsnbmFtZSddO1xyXG4gIEBJbnB1dCgpIHN0YXJ0SW5kZXg6IElHcm91cFsnc3RhcnRJbmRleCddO1xyXG4gIEBJbnB1dCgpIGNvdW50OiBJR3JvdXBbJ2NvdW50J107XHJcbiAgQElucHV0KCkgY2hpbGRyZW4/OiBJR3JvdXBbJ2NoaWxkcmVuJ107XHJcbiAgQElucHV0KCkgbGV2ZWw/OiBJR3JvdXBbJ2xldmVsJ107XHJcbiAgQElucHV0KCkgaXNDb2xsYXBzZWQ/OiBJR3JvdXBbJ2lzQ29sbGFwc2VkJ107XHJcbiAgQElucHV0KCkgaXNTaG93aW5nQWxsPzogSUdyb3VwWydpc1Nob3dpbmdBbGwnXTtcclxuICBASW5wdXQoKSBpc0Ryb3BFbmFibGVkPzogSUdyb3VwWydpc0Ryb3BFbmFibGVkJ107XHJcbiAgQElucHV0KCkgZGF0YT86IElHcm91cFsnZGF0YSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElHcm91cFsnYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgaGFzTW9yZURhdGE/OiBJR3JvdXBbJ2hhc01vcmVEYXRhJ107XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGdldCBvbkNoaWxkSXRlbUNoYW5nZWQoKTogRXZlbnRFbWl0dGVyPEl0ZW1DaGFuZ2VkUGF5bG9hZDxzdHJpbmcsIElHcm91cD4+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlciAmJiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlci5vbkNoaWxkSXRlbUNoYW5nZWQ7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG9uSXRlbXNDaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxRdWVyeUxpc3Q8Q2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8SUdyb3VwPj4+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlciAmJiB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlci5vbkl0ZW1zQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlYWJsZUl0ZW1zSGVscGVyOiBDaGFuZ2VhYmxlSXRlbXNIZWxwZXI8SUdyb3VwPjtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgPSBuZXcgQ2hhbmdlYWJsZUl0ZW1zSGVscGVyKHRoaXMuZ3JvdXBJdGVtc0RpcmVjdGl2ZXMsIHRoaXMsIG5vblNlbGYgPT4ge1xyXG4gICAgICB0aGlzLmNoaWxkcmVuID0gbm9uU2VsZiBhcyBhbnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=