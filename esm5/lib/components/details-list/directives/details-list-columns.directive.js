/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { DetailsListColumnDirective } from './details-list-column.directive';
/**
 * Wrapper directive for creating multiple DetailsListColumns
 */
var DetailsListColumnsDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListColumnsDirective, _super);
    function DetailsListColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsListColumnsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.map((/**
             * @param {?} directiveItem
             * @return {?}
             */
            function (directiveItem) { return (tslib_1.__assign({}, directiveItem, { onColumnClick: (/**
                 * @param {?} ev
                 * @param {?} column
                 * @return {?}
                 */
                function (ev, column) {
                    directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column: column });
                }), onColumnContextMenu: (/**
                 * @param {?=} column
                 * @param {?=} ev
                 * @return {?}
                 */
                function (column, ev) {
                    directiveItem.onColumnContextMenu.emit({ column: column, ev: ev && ev.nativeEvent });
                }), onColumnResize: (/**
                 * @param {?=} width
                 * @return {?}
                 */
                function (width) {
                    directiveItem.onColumnResize.emit({ width: width });
                }) })); }));
        },
        enumerable: true,
        configurable: true
    });
    DetailsListColumnsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list > columns' },] }
    ];
    DetailsListColumnsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [DetailsListColumnDirective,] }]
    };
    return DetailsListColumnsDirective;
}(ChangeableItemsDirective));
export { DetailsListColumnsDirective };
if (false) {
    /** @type {?} */
    DetailsListColumnsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGV0YWlscy1saXN0L2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLDBCQUEwQixFQUE2QixNQUFNLGlDQUFpQyxDQUFDOzs7O0FBS3hHO0lBQ2lELHVEQUFtRDtJQURwRzs7SUFrQkEsQ0FBQztJQWRDLHNCQUFJLDhDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUE0QixVQUFBLGFBQWEsSUFBSSxPQUFBLHNCQUN0RSxhQUFhLElBQ2hCLGFBQWE7Ozs7O2dCQUFFLFVBQUMsRUFBb0IsRUFBRSxNQUFlO29CQUNuRCxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ3pFLENBQUMsR0FDRCxtQkFBbUI7Ozs7O2dCQUFFLFVBQUMsTUFBZ0IsRUFBRSxFQUFxQjtvQkFDM0QsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FDRCxjQUFjOzs7O2dCQUFFLFVBQUMsS0FBYztvQkFDN0IsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLENBQUMsS0FDRCxFQVh5RSxDQVd6RSxFQUFDLENBQUM7UUFDTixDQUFDOzs7T0FBQTs7Z0JBakJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTs7O2lDQUVsRCxlQUFlLFNBQUMsMEJBQTBCOztJQWdCN0Msa0NBQUM7Q0FBQSxBQWxCRCxDQUNpRCx3QkFBd0IsR0FpQnhFO1NBakJZLDJCQUEyQjs7O0lBQ3RDLHFEQUE0RyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EZXRhaWxzTGlzdCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb3JlJztcclxuXHJcbmltcG9ydCB7IERldGFpbHNMaXN0Q29sdW1uRGlyZWN0aXZlLCBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi9kZXRhaWxzLWxpc3QtY29sdW1uLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIG11bHRpcGxlIERldGFpbHNMaXN0Q29sdW1uc1xyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdCA+IGNvbHVtbnMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdENvbHVtbnNEaXJlY3RpdmUgZXh0ZW5kcyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmU8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz4ge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRGV0YWlsc0xpc3RDb2x1bW5EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8RGV0YWlsc0xpc3RDb2x1bW5EaXJlY3RpdmU+O1xyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmVJdGVtcy5tYXA8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz4oZGlyZWN0aXZlSXRlbSA9PiAoe1xyXG4gICAgICAuLi5kaXJlY3RpdmVJdGVtLFxyXG4gICAgICBvbkNvbHVtbkNsaWNrOiAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQsIGNvbHVtbjogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZUl0ZW0ub25Db2x1bW5DbGljay5lbWl0KHsgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LCBjb2x1bW4gfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29sdW1uQ29udGV4dE1lbnU6IChjb2x1bW4/OiBJQ29sdW1uLCBldj86IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBkaXJlY3RpdmVJdGVtLm9uQ29sdW1uQ29udGV4dE1lbnUuZW1pdCh7IGNvbHVtbiwgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50IH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbHVtblJlc2l6ZTogKHdpZHRoPzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aXZlSXRlbS5vbkNvbHVtblJlc2l6ZS5lbWl0KHsgd2lkdGggfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==