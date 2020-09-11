/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
// TODO:
import { GroupItemDirective } from '../../group/directives/group-item.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWdyb3Vwcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXRhaWxzLWxpc3QvZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtZ3JvdXBzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOztBQUd4RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUtqRjtJQUNnRCxzREFBZ0M7SUFEaEY7O0lBT0EsQ0FBQztJQUhDLHNCQUFJLDZDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7O2dCQU5GLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRTs7O2lDQUVqRCxlQUFlLFNBQUMsa0JBQWtCOztJQUtyQyxpQ0FBQztDQUFBLEFBUEQsQ0FDZ0Qsd0JBQXdCLEdBTXZFO1NBTlksMEJBQTBCOzs7SUFDckMsb0RBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUdyb3VwIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRGV0YWlsc0xpc3QnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmUgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1pdGVtcy5kaXJlY3RpdmUnO1xyXG5cclxuLy8gVE9ETzpcclxuaW1wb3J0IHsgR3JvdXBJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZ3JvdXAvZGlyZWN0aXZlcy9ncm91cC1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIG11bHRpcGxlIERldGFpbHNMaXN0IEdyb3Vwc1xyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdCA+IGdyb3VwcycgfSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNMaXN0R3JvdXBzRGlyZWN0aXZlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPElHcm91cD4ge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oR3JvdXBJdGVtRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PEdyb3VwSXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZUl0ZW1zLnRvQXJyYXkoKTtcclxuICB9XHJcbn1cclxuIl19