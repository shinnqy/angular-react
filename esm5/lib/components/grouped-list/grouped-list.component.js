/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
var FabGroupedListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabGroupedListComponent, _super);
    function FabGroupedListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onGroupExpandStateChanged = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onRenderCell = _this.onRenderCell.bind(_this);
        _this.onGroupExpandStateChangedHandler = _this.onGroupExpandStateChangedHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabGroupedListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderCell = this.createInputJsxRenderer(this.renderCell);
    };
    /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabGroupedListComponent.prototype.onRenderCell = /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (nestingDepth, item, index) {
        return this._renderCell({ nestingDepth: nestingDepth, item: item, index: index });
    };
    /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    FabGroupedListComponent.prototype.onGroupExpandStateChangedHandler = /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    function (isSomeGroupExpanded) {
        this.onGroupExpandStateChanged.emit({
            isSomeGroupExpanded: isSomeGroupExpanded,
        });
    };
    FabGroupedListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-grouped-list',
                    exportAs: 'fabGroupedList',
                    template: "\n    <GroupedList\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [compact]=\"compact\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [dragDropHelper]=\"dragDropHelper\"\n      [eventsToRegister]=\"eventsToRegister\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"groups\"\n      [items]=\"items\"\n      [listProps]=\"listProps\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [viewport]=\"viewport\"\n      [usePageCache]=\"usePageCache\"\n      [shouldVirtualize]=\"shouldVirtualize\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [RenderCell]=\"renderCell && onRenderCell\"\n      [GroupExpandStateChanged]=\"onGroupExpandStateChangedHandler\"\n    >\n    </GroupedList>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabGroupedListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabGroupedListComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }],
        compact: [{ type: Input }],
        dragDropEvents: [{ type: Input }],
        dragDropHelper: [{ type: Input }],
        eventsToRegister: [{ type: Input }],
        groupProps: [{ type: Input }],
        groups: [{ type: Input }],
        items: [{ type: Input }],
        listProps: [{ type: Input }],
        selection: [{ type: Input }],
        selectionMode: [{ type: Input }],
        viewport: [{ type: Input }],
        usePageCache: [{ type: Input }],
        shouldVirtualize: [{ type: Input }],
        getGroupHeight: [{ type: Input }],
        renderCell: [{ type: Input }],
        onGroupExpandStateChanged: [{ type: Output }]
    };
    return FabGroupedListComponent;
}(ReactWrapperComponent));
export { FabGroupedListComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabGroupedListComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.componentRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.theme;
    /** @type {?} */
    FabGroupedListComponent.prototype.styles;
    /** @type {?} */
    FabGroupedListComponent.prototype.className;
    /** @type {?} */
    FabGroupedListComponent.prototype.compact;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropEvents;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropHelper;
    /** @type {?} */
    FabGroupedListComponent.prototype.eventsToRegister;
    /** @type {?} */
    FabGroupedListComponent.prototype.groupProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.groups;
    /** @type {?} */
    FabGroupedListComponent.prototype.items;
    /** @type {?} */
    FabGroupedListComponent.prototype.listProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.selection;
    /** @type {?} */
    FabGroupedListComponent.prototype.selectionMode;
    /** @type {?} */
    FabGroupedListComponent.prototype.viewport;
    /** @type {?} */
    FabGroupedListComponent.prototype.usePageCache;
    /** @type {?} */
    FabGroupedListComponent.prototype.shouldVirtualize;
    /** @type {?} */
    FabGroupedListComponent.prototype.getGroupHeight;
    /** @type {?} */
    FabGroupedListComponent.prototype.renderCell;
    /** @type {?} */
    FabGroupedListComponent.prototype.onGroupExpandStateChanged;
    /**
     * @type {?}
     * @private
     */
    FabGroupedListComponent.prototype._renderCell;
}
/**
 * @record
 */
export function ICellRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    ICellRenderContext.prototype.nestingDepth;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.item;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBlZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dyb3VwZWQtbGlzdC9ncm91cGVkLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQWdDNkMsbURBQXdDO0lBNEJuRixpQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLFNBSzNEO1FBVmtCLCtCQUF5QixHQUFHLElBQUksWUFBWSxFQUFvQyxDQUFDO1FBT2xHLHdHQUF3RztRQUN4RyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ2pELEtBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMzRixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7Ozs7SUFFRCw4Q0FBWTs7Ozs7O0lBQVosVUFBYSxZQUFxQixFQUFFLElBQVUsRUFBRSxLQUFjO1FBQzVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksY0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELGtFQUFnQzs7OztJQUFoQyxVQUFpQyxtQkFBNEI7UUFDM0QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztZQUNsQyxtQkFBbUIscUJBQUE7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsOHpCQXlCVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkEzQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBUWpCLFNBQVM7Z0JBSFQsTUFBTTs7OytCQTBDTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFdkMsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzttQ0FDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzttQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NkJBRUwsS0FBSzs0Q0FFTCxNQUFNOztJQXlCVCw4QkFBQztDQUFBLEFBakZELENBZ0M2QyxxQkFBcUIsR0FpRGpFO1NBakRZLHVCQUF1Qjs7Ozs7O0lBQ2xDLCtDQUE2RTs7SUFFN0UsK0NBQTBEOztJQUMxRCx3Q0FBNEM7O0lBQzVDLHlDQUE4Qzs7SUFDOUMsNENBQW9EOztJQUNwRCwwQ0FBZ0Q7O0lBQ2hELGlEQUE4RDs7SUFDOUQsaURBQThEOztJQUM5RCxtREFBa0U7O0lBQ2xFLDZDQUF3Qzs7SUFDeEMseUNBQThDOztJQUM5Qyx3Q0FBMkM7O0lBQzNDLDRDQUFvRDs7SUFDcEQsNENBQW9EOztJQUNwRCxnREFBNEQ7O0lBQzVELDJDQUFrRDs7SUFDbEQsK0NBQTBEOztJQUMxRCxtREFBMkQ7O0lBQzNELGlEQUF3RTs7SUFFeEUsNkNBQThEOztJQUU5RCw0REFBb0c7Ozs7O0lBRXBHLDhDQUF1RDs7Ozs7QUF5QnpELHdDQUlDOzs7SUFIQywwQ0FBc0I7O0lBQ3RCLGtDQUFXOztJQUNYLG1DQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUdyb3VwLCBJR3JvdXBlZExpc3RQcm9wcywgSUdyb3VwUmVuZGVyUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Hcm91cGVkTGlzdCc7XHJcbmltcG9ydCB7IElMaXN0UHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9MaXN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWdyb3VwZWQtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJHcm91cGVkTGlzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxHcm91cGVkTGlzdFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtjb21wYWN0XT1cImNvbXBhY3RcIlxyXG4gICAgICBbZHJhZ0Ryb3BFdmVudHNdPVwiZHJhZ0Ryb3BFdmVudHNcIlxyXG4gICAgICBbZHJhZ0Ryb3BIZWxwZXJdPVwiZHJhZ0Ryb3BIZWxwZXJcIlxyXG4gICAgICBbZXZlbnRzVG9SZWdpc3Rlcl09XCJldmVudHNUb1JlZ2lzdGVyXCJcclxuICAgICAgW2dyb3VwUHJvcHNdPVwiZ3JvdXBQcm9wc1wiXHJcbiAgICAgIFtncm91cHNdPVwiZ3JvdXBzXCJcclxuICAgICAgW2l0ZW1zXT1cIml0ZW1zXCJcclxuICAgICAgW2xpc3RQcm9wc109XCJsaXN0UHJvcHNcIlxyXG4gICAgICBbc2VsZWN0aW9uXT1cInNlbGVjdGlvblwiXHJcbiAgICAgIFtzZWxlY3Rpb25Nb2RlXT1cInNlbGVjdGlvbk1vZGVcIlxyXG4gICAgICBbdmlld3BvcnRdPVwidmlld3BvcnRcIlxyXG4gICAgICBbdXNlUGFnZUNhY2hlXT1cInVzZVBhZ2VDYWNoZVwiXHJcbiAgICAgIFtzaG91bGRWaXJ0dWFsaXplXT1cInNob3VsZFZpcnR1YWxpemVcIlxyXG4gICAgICBbZ2V0R3JvdXBIZWlnaHRdPVwiZ2V0R3JvdXBIZWlnaHRcIlxyXG4gICAgICBbUmVuZGVyQ2VsbF09XCJyZW5kZXJDZWxsICYmIG9uUmVuZGVyQ2VsbFwiXHJcbiAgICAgIFtHcm91cEV4cGFuZFN0YXRlQ2hhbmdlZF09XCJvbkdyb3VwRXhwYW5kU3RhdGVDaGFuZ2VkSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICA8L0dyb3VwZWRMaXN0PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJHcm91cGVkTGlzdENvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJR3JvdXBlZExpc3RQcm9wcz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElHcm91cGVkTGlzdFByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElHcm91cGVkTGlzdFByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElHcm91cGVkTGlzdFByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJR3JvdXBlZExpc3RQcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgY29tcGFjdD86IElHcm91cGVkTGlzdFByb3BzWydjb21wYWN0J107XHJcbiAgQElucHV0KCkgZHJhZ0Ryb3BFdmVudHM/OiBJR3JvdXBlZExpc3RQcm9wc1snZHJhZ0Ryb3BFdmVudHMnXTtcclxuICBASW5wdXQoKSBkcmFnRHJvcEhlbHBlcj86IElHcm91cGVkTGlzdFByb3BzWydkcmFnRHJvcEhlbHBlciddO1xyXG4gIEBJbnB1dCgpIGV2ZW50c1RvUmVnaXN0ZXI/OiBJR3JvdXBlZExpc3RQcm9wc1snZXZlbnRzVG9SZWdpc3RlciddO1xyXG4gIEBJbnB1dCgpIGdyb3VwUHJvcHM/OiBJR3JvdXBSZW5kZXJQcm9wcztcclxuICBASW5wdXQoKSBncm91cHM/OiBJR3JvdXBlZExpc3RQcm9wc1snZ3JvdXBzJ107XHJcbiAgQElucHV0KCkgaXRlbXM6IElHcm91cGVkTGlzdFByb3BzWydpdGVtcyddO1xyXG4gIEBJbnB1dCgpIGxpc3RQcm9wcz86IElHcm91cGVkTGlzdFByb3BzWydsaXN0UHJvcHMnXTtcclxuICBASW5wdXQoKSBzZWxlY3Rpb24/OiBJR3JvdXBlZExpc3RQcm9wc1snc2VsZWN0aW9uJ107XHJcbiAgQElucHV0KCkgc2VsZWN0aW9uTW9kZT86IElHcm91cGVkTGlzdFByb3BzWydzZWxlY3Rpb25Nb2RlJ107XHJcbiAgQElucHV0KCkgdmlld3BvcnQ/OiBJR3JvdXBlZExpc3RQcm9wc1sndmlld3BvcnQnXTtcclxuICBASW5wdXQoKSB1c2VQYWdlQ2FjaGU/OiBJR3JvdXBlZExpc3RQcm9wc1sndXNlUGFnZUNhY2hlJ107XHJcbiAgQElucHV0KCkgc2hvdWxkVmlydHVhbGl6ZT86IChwcm9wczogSUxpc3RQcm9wcykgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBnZXRHcm91cEhlaWdodD86IChncm91cDogSUdyb3VwLCBncm91cEluZGV4OiBudW1iZXIpID0+IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyQ2VsbDogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUNlbGxSZW5kZXJDb250ZXh0PjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uR3JvdXBFeHBhbmRTdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXNTb21lR3JvdXBFeHBhbmRlZDogYm9vbGVhbiB9PigpO1xyXG5cclxuICBwcml2YXRlIF9yZW5kZXJDZWxsOiBKc3hSZW5kZXJGdW5jPElDZWxsUmVuZGVyQ29udGV4dD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUgfSk7XHJcblxyXG4gICAgLy8gY29taW5nIGZyb20gUmVhY3QgY29udGV4dCAtIHdlIG5lZWQgdG8gYmluZCB0byB0aGlzIHNvIHdlIGNhbiBhY2Nlc3MgdGhlIEFuZ3VsYXIgQ29tcG9uZW50IHByb3BlcnRpZXNcclxuICAgIHRoaXMub25SZW5kZXJDZWxsID0gdGhpcy5vblJlbmRlckNlbGwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Hcm91cEV4cGFuZFN0YXRlQ2hhbmdlZEhhbmRsZXIgPSB0aGlzLm9uR3JvdXBFeHBhbmRTdGF0ZUNoYW5nZWRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3JlbmRlckNlbGwgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIodGhpcy5yZW5kZXJDZWxsKTtcclxuICB9XHJcblxyXG4gIG9uUmVuZGVyQ2VsbChuZXN0aW5nRGVwdGg/OiBudW1iZXIsIGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJDZWxsKHsgbmVzdGluZ0RlcHRoLCBpdGVtLCBpbmRleCB9KTtcclxuICB9XHJcblxyXG4gIG9uR3JvdXBFeHBhbmRTdGF0ZUNoYW5nZWRIYW5kbGVyKGlzU29tZUdyb3VwRXhwYW5kZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMub25Hcm91cEV4cGFuZFN0YXRlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgaXNTb21lR3JvdXBFeHBhbmRlZCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2VsbFJlbmRlckNvbnRleHQge1xyXG4gIG5lc3RpbmdEZXB0aD86IG51bWJlcjtcclxuICBpdGVtPzogYW55O1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG59XHJcbiJdfQ==