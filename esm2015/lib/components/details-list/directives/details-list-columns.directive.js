/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from '@angular-react/fabric/lib/components/core';
import { DetailsListColumnDirective } from './details-list-column.directive';
/**
 * Wrapper directive for creating multiple DetailsListColumns
 */
export class DetailsListColumnsDirective extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.map((/**
         * @param {?} directiveItem
         * @return {?}
         */
        directiveItem => (Object.assign({}, directiveItem, { onColumnClick: (/**
             * @param {?} ev
             * @param {?} column
             * @return {?}
             */
            (ev, column) => {
                directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column });
            }), onColumnContextMenu: (/**
             * @param {?=} column
             * @param {?=} ev
             * @return {?}
             */
            (column, ev) => {
                directiveItem.onColumnContextMenu.emit({ column, ev: ev && ev.nativeEvent });
            }), onColumnResize: (/**
             * @param {?=} width
             * @return {?}
             */
            (width) => {
                directiveItem.onColumnResize.emit({ width });
            }) }))));
    }
}
DetailsListColumnsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list > columns' },] }
];
DetailsListColumnsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [DetailsListColumnDirective,] }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnsDirective.prototype.directiveItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGV0YWlscy1saXN0L2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVyRixPQUFPLEVBQUUsMEJBQTBCLEVBQTZCLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFNeEcsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHdCQUFtRDs7OztJQUdsRyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztRQUE0QixhQUFhLENBQUMsRUFBRSxDQUFDLG1CQUN0RSxhQUFhLElBQ2hCLGFBQWE7Ozs7O1lBQUUsQ0FBQyxFQUFvQixFQUFFLE1BQWUsRUFBRSxFQUFFO2dCQUN2RCxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsR0FDRCxtQkFBbUI7Ozs7O1lBQUUsQ0FBQyxNQUFnQixFQUFFLEVBQXFCLEVBQUUsRUFBRTtnQkFDL0QsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLENBQUMsR0FDRCxjQUFjOzs7O1lBQUUsQ0FBQyxLQUFjLEVBQUUsRUFBRTtnQkFDakMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLENBQUMsS0FDRCxFQUFDLENBQUM7SUFDTixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFOzs7NkJBRWxELGVBQWUsU0FBQywwQkFBMEI7Ozs7SUFBM0MscURBQTRHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RldGFpbHNMaXN0JztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGV0YWlsc0xpc3RDb2x1bW5EaXJlY3RpdmUsIElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnMgfSBmcm9tICcuL2RldGFpbHMtbGlzdC1jb2x1bW4uZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSBmb3IgY3JlYXRpbmcgbXVsdGlwbGUgRGV0YWlsc0xpc3RDb2x1bW5zXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItZGV0YWlscy1saXN0ID4gY29sdW1ucycgfSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNMaXN0Q29sdW1uc0RpcmVjdGl2ZSBleHRlbmRzIENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zPiB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihEZXRhaWxzTGlzdENvbHVtbkRpcmVjdGl2ZSkgcmVhZG9ubHkgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxEZXRhaWxzTGlzdENvbHVtbkRpcmVjdGl2ZT47XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZUl0ZW1zLm1hcDxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zPihkaXJlY3RpdmVJdGVtID0+ICh7XHJcbiAgICAgIC4uLmRpcmVjdGl2ZUl0ZW0sXHJcbiAgICAgIG9uQ29sdW1uQ2xpY2s6IChldjogUmVhY3QuTW91c2VFdmVudCwgY29sdW1uOiBJQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aXZlSXRlbS5vbkNvbHVtbkNsaWNrLmVtaXQoeyBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQsIGNvbHVtbiB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25Db2x1bW5Db250ZXh0TWVudTogKGNvbHVtbj86IElDb2x1bW4sIGV2PzogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZUl0ZW0ub25Db2x1bW5Db250ZXh0TWVudS5lbWl0KHsgY29sdW1uLCBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29sdW1uUmVzaXplOiAod2lkdGg/OiBudW1iZXIpID0+IHtcclxuICAgICAgICBkaXJlY3RpdmVJdGVtLm9uQ29sdW1uUmVzaXplLmVtaXQoeyB3aWR0aCB9KTtcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19