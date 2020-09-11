/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { ChangeableItemsDirective } from 'angular-react-toolkit/core/shared/changeable-items.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGV0YWlscy1saXN0L2RpcmVjdGl2ZXMvZGV0YWlscy1saXN0LWNvbHVtbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUV4RyxPQUFPLEVBQUUsMEJBQTBCLEVBQTZCLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFNeEcsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHdCQUFtRDs7OztJQUdsRyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztRQUE0QixhQUFhLENBQUMsRUFBRSxDQUFDLG1CQUN0RSxhQUFhLElBQ2hCLGFBQWE7Ozs7O1lBQUUsQ0FBQyxFQUFvQixFQUFFLE1BQWUsRUFBRSxFQUFFO2dCQUN2RCxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsR0FDRCxtQkFBbUI7Ozs7O1lBQUUsQ0FBQyxNQUFnQixFQUFFLEVBQXFCLEVBQUUsRUFBRTtnQkFDL0QsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLENBQUMsR0FDRCxjQUFjOzs7O1lBQUUsQ0FBQyxLQUFjLEVBQUUsRUFBRTtnQkFDakMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLENBQUMsS0FDRCxFQUFDLENBQUM7SUFDTixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFOzs7NkJBRWxELGVBQWUsU0FBQywwQkFBMEI7Ozs7SUFBM0MscURBQTRHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RldGFpbHNMaXN0JztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1zRGlyZWN0aXZlIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvc2hhcmVkL2NoYW5nZWFibGUtaXRlbXMuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IERldGFpbHNMaXN0Q29sdW1uRGlyZWN0aXZlLCBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi9kZXRhaWxzLWxpc3QtY29sdW1uLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIG11bHRpcGxlIERldGFpbHNMaXN0Q29sdW1uc1xyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdCA+IGNvbHVtbnMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdENvbHVtbnNEaXJlY3RpdmUgZXh0ZW5kcyBDaGFuZ2VhYmxlSXRlbXNEaXJlY3RpdmU8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz4ge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRGV0YWlsc0xpc3RDb2x1bW5EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8RGV0YWlsc0xpc3RDb2x1bW5EaXJlY3RpdmU+O1xyXG5cclxuICBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmVJdGVtcy5tYXA8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9ucz4oZGlyZWN0aXZlSXRlbSA9PiAoe1xyXG4gICAgICAuLi5kaXJlY3RpdmVJdGVtLFxyXG4gICAgICBvbkNvbHVtbkNsaWNrOiAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQsIGNvbHVtbjogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZUl0ZW0ub25Db2x1bW5DbGljay5lbWl0KHsgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LCBjb2x1bW4gfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29sdW1uQ29udGV4dE1lbnU6IChjb2x1bW4/OiBJQ29sdW1uLCBldj86IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBkaXJlY3RpdmVJdGVtLm9uQ29sdW1uQ29udGV4dE1lbnUuZW1pdCh7IGNvbHVtbiwgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50IH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbHVtblJlc2l6ZTogKHdpZHRoPzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aXZlSXRlbS5vbkNvbHVtblJlc2l6ZS5lbWl0KHsgd2lkdGggfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==