/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { GroupItemDirective } from '@angular-react/fabric/lib/components/group';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWdyb3Vwcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXRhaWxzLWxpc3QvZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtZ3JvdXBzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFNaEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHdCQUFnQzs7OztJQUc5RSxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7O1lBTkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFOzs7NkJBRWpELGVBQWUsU0FBQyxrQkFBa0I7Ozs7SUFBbkMsb0RBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUdyb3VwIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGV0YWlsc0xpc3QnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cEl0ZW1EaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvZ3JvdXAnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIGZvciBjcmVhdGluZyBtdWx0aXBsZSBEZXRhaWxzTGlzdCBHcm91cHNcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kZXRhaWxzLWxpc3QgPiBncm91cHMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdEdyb3Vwc0RpcmVjdGl2ZSBleHRlbmRzIENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxJR3JvdXA+IHtcclxuICBAQ29udGVudENoaWxkcmVuKEdyb3VwSXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxHcm91cEl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmVJdGVtcy50b0FycmF5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==