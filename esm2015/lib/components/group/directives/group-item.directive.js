/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, } from '@angular/core';
import { ChangeableItemsHelper } from 'angular-react-toolkit/core/shared/changeable-helper';
import { ChangeableItemDirective } from 'angular-react-toolkit/core/shared/changeable-item.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvZ3JvdXAvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2dyb3VwLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0scURBQXFELENBQUM7QUFDdkgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHdEcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHVCQUErQjs7OztJQWdCckUsSUFDSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDO0lBQ3JGLENBQUM7Ozs7SUFDRCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztJQUNqRixDQUFDOzs7O0lBSUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJOzs7O1FBQUUsT0FBTyxDQUFDLEVBQUU7WUFDaEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxPQUFPLEVBQU8sQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQXBDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7OzttQ0FHdEMsZUFBZSxTQUFDLGtCQUFrQjttQkFFbEMsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUVMLE1BQU07NkJBSU4sS0FBSzs7OztJQWxCTixrREFBa0c7O0lBRWxHLGtDQUE4Qjs7SUFDOUIsd0NBQTBDOztJQUMxQyxtQ0FBZ0M7O0lBQ2hDLHNDQUF1Qzs7SUFDdkMsbUNBQWlDOztJQUNqQyx5Q0FBNkM7O0lBQzdDLDBDQUErQzs7SUFDL0MsMkNBQWlEOztJQUNqRCxrQ0FBK0I7O0lBQy9CLHVDQUF5Qzs7SUFDekMseUNBQTZDOzs7OztJQVc3QyxtREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJR3JvdXAgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Hcm91cGVkTGlzdCc7XHJcbmltcG9ydCB7IEl0ZW1DaGFuZ2VkUGF5bG9hZCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL2RlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0hlbHBlciwgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lciB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWhlbHBlcic7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvc2hhcmVkL2NoYW5nZWFibGUtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWdyb3VwLWl0ZW0nIH0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cEl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxJR3JvdXA+XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBJQ2hhbmdlYWJsZUl0ZW1zQ29udGFpbmVyPElHcm91cD4sIElHcm91cCwgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkcmVuKEdyb3VwSXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZ3JvdXBJdGVtc0RpcmVjdGl2ZXM6IFF1ZXJ5TGlzdDxHcm91cEl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBASW5wdXQoKSBuYW1lOiBJR3JvdXBbJ25hbWUnXTtcclxuICBASW5wdXQoKSBzdGFydEluZGV4OiBJR3JvdXBbJ3N0YXJ0SW5kZXgnXTtcclxuICBASW5wdXQoKSBjb3VudDogSUdyb3VwWydjb3VudCddO1xyXG4gIEBJbnB1dCgpIGNoaWxkcmVuPzogSUdyb3VwWydjaGlsZHJlbiddO1xyXG4gIEBJbnB1dCgpIGxldmVsPzogSUdyb3VwWydsZXZlbCddO1xyXG4gIEBJbnB1dCgpIGlzQ29sbGFwc2VkPzogSUdyb3VwWydpc0NvbGxhcHNlZCddO1xyXG4gIEBJbnB1dCgpIGlzU2hvd2luZ0FsbD86IElHcm91cFsnaXNTaG93aW5nQWxsJ107XHJcbiAgQElucHV0KCkgaXNEcm9wRW5hYmxlZD86IElHcm91cFsnaXNEcm9wRW5hYmxlZCddO1xyXG4gIEBJbnB1dCgpIGRhdGE/OiBJR3JvdXBbJ2RhdGEnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJR3JvdXBbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGhhc01vcmVEYXRhPzogSUdyb3VwWydoYXNNb3JlRGF0YSddO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBnZXQgb25DaGlsZEl0ZW1DaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxJdGVtQ2hhbmdlZFBheWxvYWQ8c3RyaW5nLCBJR3JvdXA+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25DaGlsZEl0ZW1DaGFuZ2VkO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGdldCBvbkl0ZW1zQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8UXVlcnlMaXN0PENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPElHcm91cD4+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25JdGVtc0NoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZWFibGVJdGVtc0hlbHBlcjogQ2hhbmdlYWJsZUl0ZW1zSGVscGVyPElHcm91cD47XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyID0gbmV3IENoYW5nZWFibGVJdGVtc0hlbHBlcih0aGlzLmdyb3VwSXRlbXNEaXJlY3RpdmVzLCB0aGlzLCBub25TZWxmID0+IHtcclxuICAgICAgdGhpcy5jaGlsZHJlbiA9IG5vblNlbGYgYXMgYW55O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19