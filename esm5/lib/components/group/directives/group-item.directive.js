/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, } from '@angular/core';
import { ChangeableItemsHelper } from 'angular-react-toolkit/core/shared/changeable-helper';
import { ChangeableItemDirective } from 'angular-react-toolkit/core/shared/changeable-item.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvZ3JvdXAvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2dyb3VwLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRXRHO0lBQ3dDLDhDQUErQjtJQUR2RTs7SUFxQ0EsQ0FBQztJQXBCQyxzQkFDSSxrREFBa0I7Ozs7UUFEdEI7WUFFRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSw4Q0FBYzs7OztRQURsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7UUFDakYsQ0FBQzs7O09BQUE7Ozs7SUFJRCwrQ0FBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUk7Ozs7UUFBRSxVQUFBLE9BQU87WUFDN0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxPQUFPLEVBQU8sQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7O3VDQUd0QyxlQUFlLFNBQUMsa0JBQWtCO3VCQUVsQyxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUNBRUwsTUFBTTtpQ0FJTixLQUFLOztJQWdCUix5QkFBQztDQUFBLEFBckNELENBQ3dDLHVCQUF1QixHQW9DOUQ7U0FwQ1ksa0JBQWtCOzs7SUFFN0Isa0RBQWtHOztJQUVsRyxrQ0FBOEI7O0lBQzlCLHdDQUEwQzs7SUFDMUMsbUNBQWdDOztJQUNoQyxzQ0FBdUM7O0lBQ3ZDLG1DQUFpQzs7SUFDakMseUNBQTZDOztJQUM3QywwQ0FBK0M7O0lBQy9DLDJDQUFpRDs7SUFDakQsa0NBQStCOztJQUMvQix1Q0FBeUM7O0lBQ3pDLHlDQUE2Qzs7Ozs7SUFXN0MsbURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUdyb3VwIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvR3JvdXBlZExpc3QnO1xyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlZFBheWxvYWQgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9kZWNsYXJhdGl2ZS9pdGVtLWNoYW5nZWQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIsIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXIgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1oZWxwZXInO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZSB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1ncm91cC1pdGVtJyB9KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBJdGVtRGlyZWN0aXZlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8SUdyb3VwPlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lcjxJR3JvdXA+LCBJR3JvdXAsIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihHcm91cEl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IGdyb3VwSXRlbXNEaXJlY3RpdmVzOiBRdWVyeUxpc3Q8R3JvdXBJdGVtRGlyZWN0aXZlPjtcclxuXHJcbiAgQElucHV0KCkgbmFtZTogSUdyb3VwWyduYW1lJ107XHJcbiAgQElucHV0KCkgc3RhcnRJbmRleDogSUdyb3VwWydzdGFydEluZGV4J107XHJcbiAgQElucHV0KCkgY291bnQ6IElHcm91cFsnY291bnQnXTtcclxuICBASW5wdXQoKSBjaGlsZHJlbj86IElHcm91cFsnY2hpbGRyZW4nXTtcclxuICBASW5wdXQoKSBsZXZlbD86IElHcm91cFsnbGV2ZWwnXTtcclxuICBASW5wdXQoKSBpc0NvbGxhcHNlZD86IElHcm91cFsnaXNDb2xsYXBzZWQnXTtcclxuICBASW5wdXQoKSBpc1Nob3dpbmdBbGw/OiBJR3JvdXBbJ2lzU2hvd2luZ0FsbCddO1xyXG4gIEBJbnB1dCgpIGlzRHJvcEVuYWJsZWQ/OiBJR3JvdXBbJ2lzRHJvcEVuYWJsZWQnXTtcclxuICBASW5wdXQoKSBkYXRhPzogSUdyb3VwWydkYXRhJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSUdyb3VwWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBoYXNNb3JlRGF0YT86IElHcm91cFsnaGFzTW9yZURhdGEnXTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZ2V0IG9uQ2hpbGRJdGVtQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgSUdyb3VwPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyICYmIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyLm9uQ2hpbGRJdGVtQ2hhbmdlZDtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBnZXQgb25JdGVtc0NoYW5nZWQoKTogRXZlbnRFbWl0dGVyPFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxJR3JvdXA+Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyICYmIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyLm9uSXRlbXNDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VhYmxlSXRlbXNIZWxwZXI6IENoYW5nZWFibGVJdGVtc0hlbHBlcjxJR3JvdXA+O1xyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlciA9IG5ldyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIodGhpcy5ncm91cEl0ZW1zRGlyZWN0aXZlcywgdGhpcywgbm9uU2VsZiA9PiB7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBub25TZWxmIGFzIGFueTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNoYW5nZWFibGVJdGVtc0hlbHBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==