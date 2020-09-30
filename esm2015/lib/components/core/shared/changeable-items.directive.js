/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { ChangeableItemsHelper } from './changeable-helper';
import { ChangeableItemDirective } from './changeable-item.directive';
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 * @abstract
 * @template TItem
 */
export class ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get onChildItemChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
    }
    /**
     * @return {?}
     */
    get onItemsChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.changeableItemsHelper = new ChangeableItemsHelper(this.directiveItems);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.changeableItemsHelper.destroy();
    }
}
ChangeableItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [ChangeableItemDirective,] }],
    onChildItemChanged: [{ type: Output }],
    onItemsChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ChangeableItemsDirective.prototype.directiveItems;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsDirective.prototype.changeableItemsHelper;
    /**
     * @abstract
     * @return {?}
     */
    ChangeableItemsDirective.prototype.items = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlYWJsZS1pdGVtcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZS8iLCJzb3VyY2VzIjpbInNoYXJlZC9jaGFuZ2VhYmxlLWl0ZW1zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc5RyxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0scUJBQXFCLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztBQUt0RSxNQUFNLE9BQWdCLHdCQUF3Qjs7OztJQUk1QyxJQUNJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7SUFDckYsQ0FBQzs7OztJQUNELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFNRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs2QkFyQkEsZUFBZSxTQUFDLHVCQUF1QjtpQ0FFdkMsTUFBTTs2QkFJTixNQUFNOzs7O0lBTlAsa0RBQTZHOzs7OztJQVc3Ryx5REFBNEQ7Ozs7O0lBRTVELDJEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSXRlbUNoYW5nZWRQYXlsb2FkIH0gZnJvbSAnLi4vZGVjbGFyYXRpdmUvaXRlbS1jaGFuZ2VkLnBheWxvYWQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIsIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXIgfSBmcm9tICcuL2NoYW5nZWFibGUtaGVscGVyJztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NoYW5nZWFibGUtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFBhcmVudCBjbGFzcyBmb3Igd3JhcHBlciBkaXJlY3RpdmUgZm9yIG11bHRpcGxlIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlc1xyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYW5nZWFibGVJdGVtc0RpcmVjdGl2ZTxUSXRlbT5cclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXI8VEl0ZW0+LCBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IGRpcmVjdGl2ZUl0ZW1zOiBRdWVyeUxpc3Q8Q2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8VEl0ZW0+PjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZ2V0IG9uQ2hpbGRJdGVtQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgVEl0ZW0+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25DaGlsZEl0ZW1DaGFuZ2VkO1xyXG4gIH1cclxuICBAT3V0cHV0KClcclxuICBnZXQgb25JdGVtc0NoYW5nZWQoKTogRXZlbnRFbWl0dGVyPFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxUSXRlbT4+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25JdGVtc0NoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZWFibGVJdGVtc0hlbHBlcjogQ2hhbmdlYWJsZUl0ZW1zSGVscGVyPFRJdGVtPjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0IGl0ZW1zKCk6IFRJdGVtW107XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlYWJsZUl0ZW1zSGVscGVyID0gbmV3IENoYW5nZWFibGVJdGVtc0hlbHBlcih0aGlzLmRpcmVjdGl2ZUl0ZW1zKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VhYmxlSXRlbXNIZWxwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=