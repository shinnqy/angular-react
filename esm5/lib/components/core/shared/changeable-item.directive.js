/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { EventEmitter, Input, Output } from '@angular/core';
;
import { ChangeableItemHelper } from './changeable-helper';
/**
 * Parent class for wrapper directive for single item with OnChanges
 * @abstract
 * @template TItem
 */
var ChangeableItemDirective = /** @class */ (function () {
    function ChangeableItemDirective() {
    }
    Object.defineProperty(ChangeableItemDirective.prototype, "onItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemHelper && this.changeableItemHelper.onItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChangeableItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.changeableItemHelper = new ChangeableItemHelper(this.key);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ChangeableItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.changeableItemHelper) {
            this.changeableItemHelper.emitChanges(changes);
        }
    };
    ChangeableItemDirective.propDecorators = {
        key: [{ type: Input }],
        onItemChanged: [{ type: Output }]
    };
    return ChangeableItemDirective;
}());
export { ChangeableItemDirective };
if (false) {
    /** @type {?} */
    ChangeableItemDirective.prototype.key;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemDirective.prototype.changeableItemHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlYWJsZS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb3JlLyIsInNvdXJjZXMiOlsic2hhcmVkL2NoYW5nZWFibGUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRUQsQ0FBQztBQUVwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBSzNEO0lBQUE7SUFtQkEsQ0FBQztJQWhCQyxzQkFDSSxrREFBYTs7OztRQURqQjtZQUVFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7UUFDOUUsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBMkI7UUFDckMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7O3NCQWpCQSxLQUFLO2dDQUVMLE1BQU07O0lBZ0JULDhCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQnFCLHVCQUF1Qjs7O0lBQzNDLHNDQUFxQjs7Ozs7SUFPckIsdURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2RlY2xhcmF0aW9ucyc7O1xyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlZFBheWxvYWQsIEl0ZW1DaGFuZ2VzIH0gZnJvbSAnLi4vZGVjbGFyYXRpdmUvaXRlbS1jaGFuZ2VkLnBheWxvYWQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbUhlbHBlciB9IGZyb20gJy4vY2hhbmdlYWJsZS1oZWxwZXInO1xyXG5cclxuLyoqXHJcbiAqIFBhcmVudCBjbGFzcyBmb3Igd3JhcHBlciBkaXJlY3RpdmUgZm9yIHNpbmdsZSBpdGVtIHdpdGggT25DaGFuZ2VzXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8VEl0ZW0+IGltcGxlbWVudHMgT25DaGFuZ2VzPENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPFRJdGVtPj4sIE9uSW5pdCB7XHJcbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGdldCBvbkl0ZW1DaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxJdGVtQ2hhbmdlZFBheWxvYWQ8c3RyaW5nLCBUSXRlbT4+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZWFibGVJdGVtSGVscGVyICYmIHRoaXMuY2hhbmdlYWJsZUl0ZW1IZWxwZXIub25JdGVtQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlYWJsZUl0ZW1IZWxwZXI6IENoYW5nZWFibGVJdGVtSGVscGVyPFRJdGVtPjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZWFibGVJdGVtSGVscGVyID0gbmV3IENoYW5nZWFibGVJdGVtSGVscGVyKHRoaXMua2V5KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IEl0ZW1DaGFuZ2VzPFRJdGVtPikge1xyXG4gICAgaWYgKHRoaXMuY2hhbmdlYWJsZUl0ZW1IZWxwZXIpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VhYmxlSXRlbUhlbHBlci5lbWl0Q2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19