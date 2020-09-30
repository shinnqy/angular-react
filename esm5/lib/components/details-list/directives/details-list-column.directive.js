/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
/**
 * Wrapper directive for rendering a custom column to a DetailsListColumn
 */
var DetailsListColumnRenderDirective = /** @class */ (function () {
    function DetailsListColumnRenderDirective() {
    }
    DetailsListColumnRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list-column > render' },] }
    ];
    DetailsListColumnRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return DetailsListColumnRenderDirective;
}());
export { DetailsListColumnRenderDirective };
if (false) {
    /** @type {?} */
    DetailsListColumnRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
var DetailsListColumnDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListColumnDirective, _super);
    function DetailsListColumnDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Callback members
        _this.onColumnClick = new EventEmitter();
        _this.onColumnContextMenu = new EventEmitter();
        _this.onColumnResize = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    DetailsListColumnDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
    };
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
    return DetailsListColumnDirective;
}(ChangeableItemDirective));
export { DetailsListColumnDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWNvbHVtbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXRhaWxzLWxpc3QvZGlyZWN0aXZlcy9kZXRhaWxzLWxpc3QtY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFvQixZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUtwRjtJQUFBO0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFFOzs7OEJBRXhELFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQUM5Qyx1Q0FBQztDQUFBLEFBSEQsSUFHQztTQUZZLGdDQUFnQzs7O0lBQzNDLHVEQUF3SDs7Ozs7QUFNMUg7SUFDZ0Qsc0RBQWtEO0lBRGxHO1FBQUEscUVBaURDOztRQVRvQixtQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBQ25FLHlCQUFtQixHQUFHLElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQzNFLG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7O0lBTzdFLENBQUM7Ozs7SUFMQyx1REFBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTs7O2tDQUcvQyxZQUFZLFNBQUMsZ0NBQWdDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQUVoRSxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO29DQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tDQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7eUNBQ0wsS0FBSzswQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFHTCxLQUFLO2dDQUdMLE1BQU07c0NBQ04sTUFBTTtpQ0FDTixNQUFNOztJQU9ULGlDQUFDO0NBQUEsQUFqREQsQ0FDZ0QsdUJBQXVCLEdBZ0R0RTtTQWhEWSwwQkFBMEI7OztJQUVyQyxxREFBOEg7O0lBRTlILDBDQUErQjs7SUFDL0IsK0NBQTBDOztJQUMxQywrQ0FBMEM7O0lBQzFDLDhDQUF1Qzs7SUFDdkMsK0NBQTBDOztJQUMxQyxpREFBOEM7O0lBQzlDLDhDQUF3Qzs7SUFDeEMsdURBQTBEOztJQUMxRCw4Q0FBd0M7O0lBQ3hDLGdEQUE0Qzs7SUFDNUMsbURBQWtEOztJQUNsRCxtREFBa0Q7O0lBQ2xELDhDQUF3Qzs7SUFDeEMsd0RBQTREOztJQUM1RCxpREFBOEM7O0lBQzlDLGlEQUE4Qzs7SUFDOUMsOENBQXdDOztJQUN4QyxpREFBOEM7O0lBQzlDLHFEQUFzRDs7SUFDdEQsZ0RBQTRDOztJQUM1QywrQ0FBMEM7O0lBQzFDLDBDQUFnQzs7SUFDaEMscURBQXNEOztJQUN0RCxrREFBZ0Q7O0lBQ2hELHFEQUFzRDs7SUFDdEQsOENBQXdDOztJQUN4Qyw0REFBb0U7O0lBQ3BFLDZEQUFzRTs7SUFDdEUsb0RBQW9EOztJQUNwRCxxREFBc0Q7O0lBR3RELDRDQUFxRDs7SUFHckQsbURBQXNGOztJQUN0Rix5REFBOEY7O0lBQzlGLG9EQUEyRTs7Ozs7O0FBUzdFLCtDQU1DOzs7SUFMQywyQ0FBK0U7O0lBQy9FLGtEQUE2Qjs7SUFDN0Isd0RBQW1DOztJQUNuQyxtREFBOEI7O0lBQzlCLHlDQUFzQjs7Ozs7QUFHeEIsNERBSUM7OztJQUhDLHNEQUFXOztJQUNYLHVEQUFlOztJQUNmLHdEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgS25vd25LZXlzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9EZXRhaWxzTGlzdCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIGZvciByZW5kZXJpbmcgYSBjdXN0b20gY29sdW1uIHRvIGEgRGV0YWlsc0xpc3RDb2x1bW5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kZXRhaWxzLWxpc3QtY29sdW1uID4gcmVuZGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0xpc3RDb2x1bW5SZW5kZXJEaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9uc1JlbmRlckNvbnRleHQ+O1xyXG59XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgZm9yIGNyZWF0aW5nIGEgRGV0YWlsc0xpc3RDb2x1bW5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1kZXRhaWxzLWxpc3QtY29sdW1uJyB9KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0xpc3RDb2x1bW5EaXJlY3RpdmUgZXh0ZW5kcyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zPlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZChEZXRhaWxzTGlzdENvbHVtblJlbmRlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHJlbmRlckRpcmVjdGl2ZTogRGV0YWlsc0xpc3RDb2x1bW5SZW5kZXJEaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IElDb2x1bW5bJ25hbWUnXTtcclxuICBASW5wdXQoKSBmaWVsZE5hbWU/OiBJQ29sdW1uWydmaWVsZE5hbWUnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQ29sdW1uWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogSUNvbHVtblsnbWluV2lkdGgnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQ29sdW1uWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBpc1Jvd0hlYWRlcj86IElDb2x1bW5bJ2lzUm93SGVhZGVyJ107XHJcbiAgQElucHV0KCkgbWF4V2lkdGg/OiBJQ29sdW1uWydtYXhXaWR0aCddO1xyXG4gIEBJbnB1dCgpIGNvbHVtbkFjdGlvbnNNb2RlPzogSUNvbHVtblsnY29sdW1uQWN0aW9uc01vZGUnXTtcclxuICBASW5wdXQoKSBpY29uTmFtZT86IElDb2x1bW5bJ2ljb25OYW1lJ107XHJcbiAgQElucHV0KCkgaXNJY29uT25seT86IElDb2x1bW5bJ2lzSWNvbk9ubHknXTtcclxuICBASW5wdXQoKSBpY29uQ2xhc3NOYW1lPzogSUNvbHVtblsnaWNvbkNsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGlzQ29sbGFwc2FibGU/OiBJQ29sdW1uWydpc0NvbGxhcHNhYmxlJ107XHJcbiAgQElucHV0KCkgaXNTb3J0ZWQ/OiBJQ29sdW1uWydpc1NvcnRlZCddO1xyXG4gIEBJbnB1dCgpIGlzU29ydGVkRGVzY2VuZGluZz86IElDb2x1bW5bJ2lzU29ydGVkRGVzY2VuZGluZyddO1xyXG4gIEBJbnB1dCgpIGlzUmVzaXphYmxlPzogSUNvbHVtblsnaXNSZXNpemFibGUnXTtcclxuICBASW5wdXQoKSBpc011bHRpbGluZT86IElDb2x1bW5bJ2lzTXVsdGlsaW5lJ107XHJcbiAgQElucHV0KCkgb25SZW5kZXI/OiBJQ29sdW1uWydvblJlbmRlciddO1xyXG4gIEBJbnB1dCgpIGdldFZhbHVlS2V5PzogSUNvbHVtblsnZ2V0VmFsdWVLZXknXTtcclxuICBASW5wdXQoKSBvblJlbmRlckRpdmlkZXI/OiBJQ29sdW1uWydvblJlbmRlckRpdmlkZXInXTtcclxuICBASW5wdXQoKSBpc0ZpbHRlcmVkPzogSUNvbHVtblsnaXNGaWx0ZXJlZCddO1xyXG4gIEBJbnB1dCgpIGlzR3JvdXBlZD86IElDb2x1bW5bJ2lzR3JvdXBlZCddO1xyXG4gIEBJbnB1dCgpIGRhdGE/OiBJQ29sdW1uWydkYXRhJ107XHJcbiAgQElucHV0KCkgY2FsY3VsYXRlZFdpZHRoPzogSUNvbHVtblsnY2FsY3VsYXRlZFdpZHRoJ107XHJcbiAgQElucHV0KCkgY3VycmVudFdpZHRoPzogSUNvbHVtblsnY3VycmVudFdpZHRoJ107XHJcbiAgQElucHV0KCkgaGVhZGVyQ2xhc3NOYW1lPzogSUNvbHVtblsnaGVhZGVyQ2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgaXNQYWRkZWQ/OiBJQ29sdW1uWydpc1BhZGRlZCddO1xyXG4gIEBJbnB1dCgpIHNvcnRBc2NlbmRpbmdBcmlhTGFiZWw/OiBJQ29sdW1uWydzb3J0QXNjZW5kaW5nQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgc29ydERlc2NlbmRpbmdBcmlhTGFiZWw/OiBJQ29sdW1uWydzb3J0RGVzY2VuZGluZ0FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGdyb3VwQXJpYUxhYmVsPzogSUNvbHVtblsnZ3JvdXBBcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBmaWx0ZXJBcmlhTGFiZWw/OiBJQ29sdW1uWydmaWx0ZXJBcmlhTGFiZWwnXTtcclxuXHJcbiAgLy8gUmVuZGVyIG1lbWJlcnNcclxuICBASW5wdXQoKSByZW5kZXI6IElEZXRhaWxzTGlzdENvbHVtbk9wdGlvbnNbJ3JlbmRlciddO1xyXG5cclxuICAvLyBDYWxsYmFjayBtZW1iZXJzXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ29sdW1uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY6IEV2ZW50OyBjb2x1bW46IElDb2x1bW4gfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25Db2x1bW5Db250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjb2x1bW4/OiBJQ29sdW1uOyBldj86IEV2ZW50IH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ29sdW1uUmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjx7IHdpZHRoPzogbnVtYmVyIH0+KCk7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnJlbmRlckRpcmVjdGl2ZSAmJiB0aGlzLnJlbmRlckRpcmVjdGl2ZS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGV0YWlsc0xpc3RDb2x1bW5PcHRpb25zPFREYXRhID0gYW55PiBleHRlbmRzIFBpY2s8SUNvbHVtbiwgRXhjbHVkZTxLbm93bktleXM8SUNvbHVtbj4sICdvblJlbmRlcic+PiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SURldGFpbHNMaXN0Q29sdW1uT3B0aW9uc1JlbmRlckNvbnRleHQ+O1xyXG4gIHJlYWRvbmx5IG9uQ29sdW1uQ2xpY2s/OiBhbnk7XHJcbiAgcmVhZG9ubHkgb25Db2x1bW5Db250ZXh0TWVudT86IGFueTtcclxuICByZWFkb25seSBvbkNvbHVtblJlc2l6ZT86IGFueTtcclxuICByZWFkb25seSBkYXRhPzogVERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURldGFpbHNMaXN0Q29sdW1uT3B0aW9uc1JlbmRlckNvbnRleHQge1xyXG4gIGl0ZW0/OiBhbnk7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbiAgY29sdW1uPzogSUNvbHVtbjtcclxufVxyXG4iXX0=