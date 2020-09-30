/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { GroupItemDirective } from '@angular-react/fabric/lib/components/group';
/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
var DetailsListGroupsDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListGroupsDirective, _super);
    function DetailsListGroupsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsListGroupsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.toArray();
        },
        enumerable: true,
        configurable: true
    });
    DetailsListGroupsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list > groups' },] }
    ];
    DetailsListGroupsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [GroupItemDirective,] }]
    };
    return DetailsListGroupsDirective;
}(ChangeableItemsDirective));
export { DetailsListGroupsDirective };
if (false) {
    /** @type {?} */
    DetailsListGroupsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWdyb3Vwcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXRhaWxzLWxpc3QvZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtZ3JvdXBzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXJGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBS2hGO0lBQ2dELHNEQUFnQztJQURoRjs7SUFPQSxDQUFDO0lBSEMsc0JBQUksNkNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTs7Z0JBTkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFOzs7aUNBRWpELGVBQWUsU0FBQyxrQkFBa0I7O0lBS3JDLGlDQUFDO0NBQUEsQUFQRCxDQUNnRCx3QkFBd0IsR0FNdkU7U0FOWSwwQkFBMEI7OztJQUNyQyxvREFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJR3JvdXAgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EZXRhaWxzTGlzdCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyb3VwSXRlbURpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9ncm91cCc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIG11bHRpcGxlIERldGFpbHNMaXN0IEdyb3Vwc1xyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdCA+IGdyb3VwcycgfSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPElHcm91cD4ge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oR3JvdXBJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PEdyb3VwSXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZUl0ZW1zLnRvQXJyYXkoKTtcclxuICB9XHJcbn1cclxuIl19