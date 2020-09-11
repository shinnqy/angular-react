/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGV0YWlscy1saXN0L2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFeEcsT0FBTyxFQUFFLDBCQUEwQixFQUE2QixNQUFNLGlDQUFpQyxDQUFDOzs7O0FBS3hHO0lBQ2lELHVEQUFtRDtJQURwRzs7SUFrQkEsQ0FBQztJQWRDLHNCQUFJLDhDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUE0QixVQUFBLGFBQWEsSUFBSSxPQUFBLHNCQUN0RSxhQUFhLElBQ2hCLGFBQWE7Ozs7O2dCQUFFLFVBQUMsRUFBb0IsRUFBRSxNQUFlO29CQUNuRCxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ3pFLENBQUMsR0FDRCxtQkFBbUI7Ozs7O2dCQUFFLFVBQUMsTUFBZ0IsRUFBRSxFQUFxQjtvQkFDM0QsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FDRCxjQUFjOzs7O2dCQUFFLFVBQUMsS0FBYztvQkFDN0IsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLENBQUMsS0FDRCxFQVh5RSxDQVd6RSxFQUFDLENBQUM7UUFDTixDQUFDOzs7T0FBQTs7Z0JBakJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTs7O2lDQUVsRCxlQUFlLFNBQUMsMEJBQTBCOztJQWdCN0Msa0NBQUM7Q0FBQSxBQWxCRCxDQUNpRCx3QkFBd0IsR0FpQnhFO1NBakJZLDJCQUEyQjs7O0lBQ3RDLHFEQUE0RyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EZXRhaWxzTGlzdCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWl0ZW1zLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBEZXRhaWxzTGlzdENvbHVtbkRpcmVjdGl2ZSwgSURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucyB9IGZyb20gJy4vZGV0YWlscy1saXN0LWNvbHVtbi5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIGZvciBjcmVhdGluZyBtdWx0aXBsZSBEZXRhaWxzTGlzdENvbHVtbnNcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kZXRhaWxzLWxpc3QgPiBjb2x1bW5zJyB9KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0xpc3RDb2x1bW5zRGlyZWN0aXZlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlPElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnM+IHtcclxuICBAQ29udGVudENoaWxkcmVuKERldGFpbHNMaXN0Q29sdW1uRGlyZWN0aXZlKSByZWFkb25seSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PERldGFpbHNMaXN0Q29sdW1uRGlyZWN0aXZlPjtcclxuXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlSXRlbXMubWFwPElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnM+KGRpcmVjdGl2ZUl0ZW0gPT4gKHtcclxuICAgICAgLi4uZGlyZWN0aXZlSXRlbSxcclxuICAgICAgb25Db2x1bW5DbGljazogKGV2OiBSZWFjdC5Nb3VzZUV2ZW50LCBjb2x1bW46IElDb2x1bW4pID0+IHtcclxuICAgICAgICBkaXJlY3RpdmVJdGVtLm9uQ29sdW1uQ2xpY2suZW1pdCh7IGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCwgY29sdW1uIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbHVtbkNvbnRleHRNZW51OiAoY29sdW1uPzogSUNvbHVtbiwgZXY/OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aXZlSXRlbS5vbkNvbHVtbkNvbnRleHRNZW51LmVtaXQoeyBjb2x1bW4sIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25Db2x1bW5SZXNpemU6ICh3aWR0aD86IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZUl0ZW0ub25Db2x1bW5SZXNpemUuZW1pdCh7IHdpZHRoIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=