/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
// TODO:
import { GroupItemDirective } from '../../group/directives/group-item.directive';
/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
export class DetailsListGroupsDirective extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.toArray();
    }
}
DetailsListGroupsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list > groups' },] }
];
DetailsListGroupsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [GroupItemDirective,] }]
};
if (false) {
    /** @type {?} */
    DetailsListGroupsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWdyb3Vwcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXRhaWxzLWxpc3QvZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtZ3JvdXBzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7O0FBR3hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBTWpGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBZ0M7Ozs7SUFHOUUsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQU5GLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRTs7OzZCQUVqRCxlQUFlLFNBQUMsa0JBQWtCOzs7O0lBQW5DLG9EQUE0RiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElHcm91cCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RldGFpbHNMaXN0JztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvc2hhcmVkL2NoYW5nZWFibGUtaXRlbXMuZGlyZWN0aXZlJztcclxuXHJcbi8vIFRPRE86XHJcbmltcG9ydCB7IEdyb3VwSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2dyb3VwL2RpcmVjdGl2ZXMvZ3JvdXAtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIGZvciBjcmVhdGluZyBtdWx0aXBsZSBEZXRhaWxzTGlzdCBHcm91cHNcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kZXRhaWxzLWxpc3QgPiBncm91cHMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSBleHRlbmRzIENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxJR3JvdXA+IHtcclxuICBAQ29udGVudENoaWxkcmVuKEdyb3VwSXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxHcm91cEl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmVJdGVtcy50b0FycmF5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==