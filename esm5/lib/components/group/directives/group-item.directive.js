/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, } from '@angular/core';
import { ChangeableItemsHelper, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
var GroupItemDirective = /** @class */ (function (_super) {
    tslib_1.__extends(GroupItemDirective, _super);
    function GroupItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GroupItemDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupItemDirective.prototype, "onItemsChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GroupItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changeableItemsHelper = new ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
         * @param {?} nonSelf
         * @return {?}
         */
        function (nonSelf) {
            _this.children = (/** @type {?} */ (nonSelf));
        }));
    };
    /**
     * @return {?}
     */
    GroupItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper.destroy();
    };
    GroupItemDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-group-item' },] }
    ];
    GroupItemDirective.propDecorators = {
        groupItemsDirectives: [{ type: ContentChildren, args: [GroupItemDirective,] }],
        name: [{ type: Input }],
        startIndex: [{ type: Input }],
        count: [{ type: Input }],
        children: [{ type: Input }],
        level: [{ type: Input }],
        isCollapsed: [{ type: Input }],
        isShowingAll: [{ type: Input }],
        isDropEnabled: [{ type: Input }],
        data: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        hasMoreData: [{ type: Input }],
        onChildItemChanged: [{ type: Output }],
        onItemsChanged: [{ type: Input }]
    };
    return GroupItemDirective;
}(ChangeableItemDirective));
export { GroupItemDirective };
if (false) {
    /** @type {?} */
    GroupItemDirective.prototype.groupItemsDirectives;
    /** @type {?} */
    GroupItemDirective.prototype.name;
    /** @type {?} */
    GroupItemDirective.prototype.startIndex;
    /** @type {?} */
    GroupItemDirective.prototype.count;
    /** @type {?} */
    GroupItemDirective.prototype.children;
    /** @type {?} */
    GroupItemDirective.prototype.level;
    /** @type {?} */
    GroupItemDirective.prototype.isCollapsed;
    /** @type {?} */
    GroupItemDirective.prototype.isShowingAll;
    /** @type {?} */
    GroupItemDirective.prototype.isDropEnabled;
    /** @type {?} */
    GroupItemDirective.prototype.data;
    /** @type {?} */
    GroupItemDirective.prototype.ariaLabel;
    /** @type {?} */
    GroupItemDirective.prototype.hasMoreData;
    /**
     * @type {?}
     * @private
     */
    GroupItemDirective.prototype.changeableItemsHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ncm91cC9kaXJlY3RpdmVzL2dyb3VwLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFzQixxQkFBcUIsRUFBNkIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUxSjtJQUN3Qyw4Q0FBK0I7SUFEdkU7O0lBcUNBLENBQUM7SUFwQkMsc0JBQ0ksa0RBQWtCOzs7O1FBRHRCO1lBRUUsT0FBTyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDO1FBQ3JGLENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0ksOENBQWM7Ozs7UUFEbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO1FBQ2pGLENBQUM7OztPQUFBOzs7O0lBSUQsK0NBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJOzs7O1FBQUUsVUFBQSxPQUFPO1lBQzdGLEtBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsT0FBTyxFQUFPLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O2dCQXBDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7Ozt1Q0FHdEMsZUFBZSxTQUFDLGtCQUFrQjt1QkFFbEMsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FDQUVMLE1BQU07aUNBSU4sS0FBSzs7SUFnQlIseUJBQUM7Q0FBQSxBQXJDRCxDQUN3Qyx1QkFBdUIsR0FvQzlEO1NBcENZLGtCQUFrQjs7O0lBRTdCLGtEQUFrRzs7SUFFbEcsa0NBQThCOztJQUM5Qix3Q0FBMEM7O0lBQzFDLG1DQUFnQzs7SUFDaEMsc0NBQXVDOztJQUN2QyxtQ0FBaUM7O0lBQ2pDLHlDQUE2Qzs7SUFDN0MsMENBQStDOztJQUMvQywyQ0FBaUQ7O0lBQ2pELGtDQUErQjs7SUFDL0IsdUNBQXlDOztJQUN6Qyx5Q0FBNkM7Ozs7O0lBVzdDLG1EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElHcm91cCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0dyb3VwZWRMaXN0JztcclxuaW1wb3J0IHsgSXRlbUNoYW5nZWRQYXlsb2FkLCBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIsIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXIsIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWdyb3VwLWl0ZW0nIH0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cEl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxJR3JvdXA+XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBJQ2hhbmdlYWJsZUl0ZW1zQ29udGFpbmVyPElHcm91cD4sIElHcm91cCwgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkcmVuKEdyb3VwSXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgZ3JvdXBJdGVtc0RpcmVjdGl2ZXM6IFF1ZXJ5TGlzdDxHcm91cEl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBASW5wdXQoKSBuYW1lOiBJR3JvdXBbJ25hbWUnXTtcclxuICBASW5wdXQoKSBzdGFydEluZGV4OiBJR3JvdXBbJ3N0YXJ0SW5kZXgnXTtcclxuICBASW5wdXQoKSBjb3VudDogSUdyb3VwWydjb3VudCddO1xyXG4gIEBJbnB1dCgpIGNoaWxkcmVuPzogSUdyb3VwWydjaGlsZHJlbiddO1xyXG4gIEBJbnB1dCgpIGxldmVsPzogSUdyb3VwWydsZXZlbCddO1xyXG4gIEBJbnB1dCgpIGlzQ29sbGFwc2VkPzogSUdyb3VwWydpc0NvbGxhcHNlZCddO1xyXG4gIEBJbnB1dCgpIGlzU2hvd2luZ0FsbD86IElHcm91cFsnaXNTaG93aW5nQWxsJ107XHJcbiAgQElucHV0KCkgaXNEcm9wRW5hYmxlZD86IElHcm91cFsnaXNEcm9wRW5hYmxlZCddO1xyXG4gIEBJbnB1dCgpIGRhdGE/OiBJR3JvdXBbJ2RhdGEnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJR3JvdXBbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGhhc01vcmVEYXRhPzogSUdyb3VwWydoYXNNb3JlRGF0YSddO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBnZXQgb25DaGlsZEl0ZW1DaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxJdGVtQ2hhbmdlZFBheWxvYWQ8c3RyaW5nLCBJR3JvdXA+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25DaGlsZEl0ZW1DaGFuZ2VkO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGdldCBvbkl0ZW1zQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8UXVlcnlMaXN0PENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPElHcm91cD4+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25JdGVtc0NoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZWFibGVJdGVtc0hlbHBlcjogQ2hhbmdlYWJsZUl0ZW1zSGVscGVyPElHcm91cD47XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyID0gbmV3IENoYW5nZWFibGVJdGVtc0hlbHBlcih0aGlzLmdyb3VwSXRlbXNEaXJlY3RpdmVzLCB0aGlzLCBub25TZWxmID0+IHtcclxuICAgICAgdGhpcy5jaGlsZHJlbiA9IG5vblNlbGYgYXMgYW55O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19