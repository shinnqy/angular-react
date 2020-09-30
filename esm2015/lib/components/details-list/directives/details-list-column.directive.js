/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
/**
 * Wrapper directive for rendering a custom column to a DetailsListColumn
 */
export class DetailsListColumnRenderDirective {
}
DetailsListColumnRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list-column > render' },] }
];
DetailsListColumnRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
export class DetailsListColumnDirective extends ChangeableItemDirective {
    constructor() {
        super(...arguments);
        // Callback members
        this.onColumnClick = new EventEmitter();
        this.onColumnContextMenu = new EventEmitter();
        this.onColumnResize = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
    }
}
DetailsListColumnDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list-column' },] }
];
DetailsListColumnDirective.propDecorators = {
    renderDirective: [{ type: ContentChild, args: [DetailsListColumnRenderDirective, { static: false },] }],
    name: [{ type: Input }],
    fieldName: [{ type: Input }],
    className: [{ type: Input }],
    minWidth: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    isRowHeader: [{ type: Input }],
    maxWidth: [{ type: Input }],
    columnActionsMode: [{ type: Input }],
    iconName: [{ type: Input }],
    isIconOnly: [{ type: Input }],
    iconClassName: [{ type: Input }],
    isCollapsable: [{ type: Input }],
    isSorted: [{ type: Input }],
    isSortedDescending: [{ type: Input }],
    isResizable: [{ type: Input }],
    isMultiline: [{ type: Input }],
    onRender: [{ type: Input }],
    getValueKey: [{ type: Input }],
    onRenderDivider: [{ type: Input }],
    isFiltered: [{ type: Input }],
    isGrouped: [{ type: Input }],
    data: [{ type: Input }],
    calculatedWidth: [{ type: Input }],
    currentWidth: [{ type: Input }],
    headerClassName: [{ type: Input }],
    isPadded: [{ type: Input }],
    sortAscendingAriaLabel: [{ type: Input }],
    sortDescendingAriaLabel: [{ type: Input }],
    groupAriaLabel: [{ type: Input }],
    filterAriaLabel: [{ type: Input }],
    render: [{ type: Input }],
    onColumnClick: [{ type: Output }],
    onColumnContextMenu: [{ type: Output }],
    onColumnResize: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnDirective.prototype.renderDirective;
    /** @type {?} */
    DetailsListColumnDirective.prototype.name;
    /** @type {?} */
    DetailsListColumnDirective.prototype.fieldName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.className;
    /** @type {?} */
    DetailsListColumnDirective.prototype.minWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.ariaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isRowHeader;
    /** @type {?} */
    DetailsListColumnDirective.prototype.maxWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.columnActionsMode;
    /** @type {?} */
    DetailsListColumnDirective.prototype.iconName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isIconOnly;
    /** @type {?} */
    DetailsListColumnDirective.prototype.iconClassName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isCollapsable;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isSorted;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isSortedDescending;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isResizable;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isMultiline;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onRender;
    /** @type {?} */
    DetailsListColumnDirective.prototype.getValueKey;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onRenderDivider;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isFiltered;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isGrouped;
    /** @type {?} */
    DetailsListColumnDirective.prototype.data;
    /** @type {?} */
    DetailsListColumnDirective.prototype.calculatedWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.currentWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.headerClassName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isPadded;
    /** @type {?} */
    DetailsListColumnDirective.prototype.sortAscendingAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.sortDescendingAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.groupAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.filterAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.render;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnClick;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnContextMenu;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnResize;
}
/**
 * @record
 * @template TData
 */
export function IDetailsListColumnOptions() { }
if (false) {
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.render;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnClick;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnContextMenu;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnResize;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.data;
}
/**
 * @record
 */
export function IDetailsListColumnOptionsRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.item;
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.index;
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWNvbHVtbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXRhaWxzLWxpc3QvZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQW9CLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBTXBGLE1BQU0sT0FBTyxnQ0FBZ0M7OztZQUQ1QyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsa0NBQWtDLEVBQUU7OzswQkFFeEQsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBNUMsdURBQXdIOzs7OztBQU8xSCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsdUJBQWtEO0lBRGxHOzs7UUF3Q3FCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDbkUsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQW9DLENBQUM7UUFDM0UsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztJQU83RSxDQUFDOzs7O0lBTEMsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTs7OzhCQUcvQyxZQUFZLFNBQUMsZ0NBQWdDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO21CQUVoRSxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO2lDQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUNBQ0wsS0FBSztzQ0FDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFHTCxLQUFLOzRCQUdMLE1BQU07a0NBQ04sTUFBTTs2QkFDTixNQUFNOzs7O0lBdkNQLHFEQUE4SDs7SUFFOUgsMENBQStCOztJQUMvQiwrQ0FBMEM7O0lBQzFDLCtDQUEwQzs7SUFDMUMsOENBQXVDOztJQUN2QywrQ0FBMEM7O0lBQzFDLGlEQUE4Qzs7SUFDOUMsOENBQXdDOztJQUN4Qyx1REFBMEQ7O0lBQzFELDhDQUF3Qzs7SUFDeEMsZ0RBQTRDOztJQUM1QyxtREFBa0Q7O0lBQ2xELG1EQUFrRDs7SUFDbEQsOENBQXdDOztJQUN4Qyx3REFBNEQ7O0lBQzVELGlEQUE4Qzs7SUFDOUMsaURBQThDOztJQUM5Qyw4Q0FBd0M7O0lBQ3hDLGlEQUE4Qzs7SUFDOUMscURBQXNEOztJQUN0RCxnREFBNEM7O0lBQzVDLCtDQUEwQzs7SUFDMUMsMENBQWdDOztJQUNoQyxxREFBc0Q7O0lBQ3RELGtEQUFnRDs7SUFDaEQscURBQXNEOztJQUN0RCw4Q0FBd0M7O0lBQ3hDLDREQUFvRTs7SUFDcEUsNkRBQXNFOztJQUN0RSxvREFBb0Q7O0lBQ3BELHFEQUFzRDs7SUFHdEQsNENBQXFEOztJQUdyRCxtREFBc0Y7O0lBQ3RGLHlEQUE4Rjs7SUFDOUYsb0RBQTJFOzs7Ozs7QUFTN0UsK0NBTUM7OztJQUxDLDJDQUErRTs7SUFDL0Usa0RBQTZCOztJQUM3Qix3REFBbUM7O0lBQ25DLG1EQUE4Qjs7SUFDOUIseUNBQXNCOzs7OztBQUd4Qiw0REFJQzs7O0lBSEMsc0RBQVc7O0lBQ1gsdURBQWU7O0lBQ2Ysd0RBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBLbm93bktleXMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0RldGFpbHNMaXN0JztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIHJlbmRlcmluZyBhIGN1c3RvbSBjb2x1bW4gdG8gYSBEZXRhaWxzTGlzdENvbHVtblxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdC1jb2x1bW4gPiByZW5kZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdENvbHVtblJlbmRlckRpcmVjdGl2ZSB7XHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSBmb3IgY3JlYXRpbmcgYSBEZXRhaWxzTGlzdENvbHVtblxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWRldGFpbHMtbGlzdC1jb2x1bW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdENvbHVtbkRpcmVjdGl2ZSBleHRlbmRzIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnM+XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkKERldGFpbHNMaXN0Q29sdW1uUmVuZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgcmVuZGVyRGlyZWN0aXZlOiBEZXRhaWxzTGlzdENvbHVtblJlbmRlckRpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCkgbmFtZTogSUNvbHVtblsnbmFtZSddO1xyXG4gIEBJbnB1dCgpIGZpZWxkTmFtZT86IElDb2x1bW5bJ2ZpZWxkTmFtZSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElDb2x1bW5bJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBJQ29sdW1uWydtaW5XaWR0aCddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElDb2x1bW5bJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGlzUm93SGVhZGVyPzogSUNvbHVtblsnaXNSb3dIZWFkZXInXTtcclxuICBASW5wdXQoKSBtYXhXaWR0aD86IElDb2x1bW5bJ21heFdpZHRoJ107XHJcbiAgQElucHV0KCkgY29sdW1uQWN0aW9uc01vZGU/OiBJQ29sdW1uWydjb2x1bW5BY3Rpb25zTW9kZSddO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lPzogSUNvbHVtblsnaWNvbk5hbWUnXTtcclxuICBASW5wdXQoKSBpc0ljb25Pbmx5PzogSUNvbHVtblsnaXNJY29uT25seSddO1xyXG4gIEBJbnB1dCgpIGljb25DbGFzc05hbWU/OiBJQ29sdW1uWydpY29uQ2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgaXNDb2xsYXBzYWJsZT86IElDb2x1bW5bJ2lzQ29sbGFwc2FibGUnXTtcclxuICBASW5wdXQoKSBpc1NvcnRlZD86IElDb2x1bW5bJ2lzU29ydGVkJ107XHJcbiAgQElucHV0KCkgaXNTb3J0ZWREZXNjZW5kaW5nPzogSUNvbHVtblsnaXNTb3J0ZWREZXNjZW5kaW5nJ107XHJcbiAgQElucHV0KCkgaXNSZXNpemFibGU/OiBJQ29sdW1uWydpc1Jlc2l6YWJsZSddO1xyXG4gIEBJbnB1dCgpIGlzTXVsdGlsaW5lPzogSUNvbHVtblsnaXNNdWx0aWxpbmUnXTtcclxuICBASW5wdXQoKSBvblJlbmRlcj86IElDb2x1bW5bJ29uUmVuZGVyJ107XHJcbiAgQElucHV0KCkgZ2V0VmFsdWVLZXk/OiBJQ29sdW1uWydnZXRWYWx1ZUtleSddO1xyXG4gIEBJbnB1dCgpIG9uUmVuZGVyRGl2aWRlcj86IElDb2x1bW5bJ29uUmVuZGVyRGl2aWRlciddO1xyXG4gIEBJbnB1dCgpIGlzRmlsdGVyZWQ/OiBJQ29sdW1uWydpc0ZpbHRlcmVkJ107XHJcbiAgQElucHV0KCkgaXNHcm91cGVkPzogSUNvbHVtblsnaXNHcm91cGVkJ107XHJcbiAgQElucHV0KCkgZGF0YT86IElDb2x1bW5bJ2RhdGEnXTtcclxuICBASW5wdXQoKSBjYWxjdWxhdGVkV2lkdGg/OiBJQ29sdW1uWydjYWxjdWxhdGVkV2lkdGgnXTtcclxuICBASW5wdXQoKSBjdXJyZW50V2lkdGg/OiBJQ29sdW1uWydjdXJyZW50V2lkdGgnXTtcclxuICBASW5wdXQoKSBoZWFkZXJDbGFzc05hbWU/OiBJQ29sdW1uWydoZWFkZXJDbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBpc1BhZGRlZD86IElDb2x1bW5bJ2lzUGFkZGVkJ107XHJcbiAgQElucHV0KCkgc29ydEFzY2VuZGluZ0FyaWFMYWJlbD86IElDb2x1bW5bJ3NvcnRBc2NlbmRpbmdBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzb3J0RGVzY2VuZGluZ0FyaWFMYWJlbD86IElDb2x1bW5bJ3NvcnREZXNjZW5kaW5nQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgZ3JvdXBBcmlhTGFiZWw/OiBJQ29sdW1uWydncm91cEFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGZpbHRlckFyaWFMYWJlbD86IElDb2x1bW5bJ2ZpbHRlckFyaWFMYWJlbCddO1xyXG5cclxuICAvLyBSZW5kZXIgbWVtYmVyc1xyXG4gIEBJbnB1dCgpIHJlbmRlcjogSURldGFpbHNMaXN0Q29sdW1uT3B0aW9uc1sncmVuZGVyJ107XHJcblxyXG4gIC8vIENhbGxiYWNrIG1lbWJlcnNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Db2x1bW5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldjogRXZlbnQ7IGNvbHVtbjogSUNvbHVtbiB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNvbHVtbkNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNvbHVtbj86IElDb2x1bW47IGV2PzogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Db2x1bW5SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgd2lkdGg/OiBudW1iZXIgfT4oKTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMucmVuZGVyRGlyZWN0aXZlICYmIHRoaXMucmVuZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXJEaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnM8VERhdGEgPSBhbnk+IGV4dGVuZHMgUGljazxJQ29sdW1uLCBFeGNsdWRlPEtub3duS2V5czxJQ29sdW1uPiwgJ29uUmVuZGVyJz4+IHtcclxuICByZWFkb25seSByZW5kZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbiAgcmVhZG9ubHkgb25Db2x1bW5DbGljaz86IGFueTtcclxuICByZWFkb25seSBvbkNvbHVtbkNvbnRleHRNZW51PzogYW55O1xyXG4gIHJlYWRvbmx5IG9uQ29sdW1uUmVzaXplPzogYW55O1xyXG4gIHJlYWRvbmx5IGRhdGE/OiBURGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zUmVuZGVyQ29udGV4dCB7XHJcbiAgaXRlbT86IGFueTtcclxuICBpbmRleD86IG51bWJlcjtcclxuICBjb2x1bW4/OiBJQ29sdW1uO1xyXG59XHJcbiJdfQ==