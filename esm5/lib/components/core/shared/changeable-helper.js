/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { EventEmitter } from '@angular/core';
/**
 * Helper class for single changeable item
 * @template TItem
 */
var /**
 * Helper class for single changeable item
 * @template TItem
 */
ChangeableItemHelper = /** @class */ (function () {
    function ChangeableItemHelper(key) {
        this.key = key;
        this.onItemChanged = new EventEmitter();
    }
    /**
     * Action to be called by user of class when change is detected
     * (Typically called in ngOnChanges)
     * @param changes TypedChanges that are to be emitted
     */
    /**
     * Action to be called by user of class when change is detected
     * (Typically called in ngOnChanges)
     * @param {?} changes TypedChanges that are to be emitted
     * @return {?}
     */
    ChangeableItemHelper.prototype.emitChanges = /**
     * Action to be called by user of class when change is detected
     * (Typically called in ngOnChanges)
     * @param {?} changes TypedChanges that are to be emitted
     * @return {?}
     */
    function (changes) {
        this.onItemChanged.emit({ key: this.key, changes: changes });
    };
    return ChangeableItemHelper;
}());
/**
 * Helper class for single changeable item
 * @template TItem
 */
export { ChangeableItemHelper };
if (false) {
    /** @type {?} */
    ChangeableItemHelper.prototype.onItemChanged;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemHelper.prototype.key;
}
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 * @template TItem
 */
var /**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 * @template TItem
 */
ChangeableItemsHelper = /** @class */ (function () {
    /**
     * Initialize subscriptions to watch for changes to children ChangeableItemDirectives
     * (Typically called in ngAfterContentInit after @ContentChildren are initialized)
     * @param directiveItems List of children to watch for
     * @param self Reference to component using this helper. This component gets filtered out in case
     *  it appears in the list of children (i.e. when a component has children of its own type)
     * @param nonSelfHandler Callback to handle filtered list of children when updated
     */
    function ChangeableItemsHelper(directiveItems, self, nonSelfHandler) {
        var _this = this;
        this.directiveItems = directiveItems;
        this.self = self;
        this.nonSelfHandler = nonSelfHandler;
        this.onChildItemChanged = new EventEmitter();
        this.onItemsChanged = new EventEmitter();
        this._subscriptionsMap = {};
        this._subscribeNewDirectives();
        this._changeSubscription = this.directiveItems.changes.subscribe((/**
         * @param {?} newValues
         * @return {?}
         */
        function (newValues) {
            _this.onItemsChanged.emit(newValues);
            _this._subscribeNewDirectives();
        }));
    }
    /**
     * Action to be called by user of class when directive/component is destroyed
     * (Typically called in ngOnDestroy)
     */
    /**
     * Action to be called by user of class when directive/component is destroyed
     * (Typically called in ngOnDestroy)
     * @return {?}
     */
    ChangeableItemsHelper.prototype.destroy = /**
     * Action to be called by user of class when directive/component is destroyed
     * (Typically called in ngOnDestroy)
     * @return {?}
     */
    function () {
        Object.values(this._subscriptionsMap).forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.unsubscribe(); }));
        this._changeSubscription.unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    ChangeableItemsHelper.prototype._subscribeNewDirectives = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var nonSelfDirectives = this._handleNonSelfDirectives();
        nonSelfDirectives.forEach((/**
         * @param {?} directiveItem
         * @return {?}
         */
        function (directiveItem) {
            if (_this._subscriptionsMap[directiveItem.key]) {
                _this._subscriptionsMap[directiveItem.key].unsubscribe();
            }
            _this._subscriptionsMap[directiveItem.key] = directiveItem.onItemChanged.subscribe((/**
             * @param {?} changes
             * @return {?}
             */
            function (changes) {
                _this._handleNonSelfDirectives();
                _this.onChildItemChanged.emit(changes);
                if (_this.self && _this.self.onItemChanged) {
                    _this.self.onItemChanged.emit(changes);
                }
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ChangeableItemsHelper.prototype._handleNonSelfDirectives = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var nonSelfDirectives = this.directiveItems.filter((/**
         * @param {?} directiveItem
         * @return {?}
         */
        function (directiveItem) { return directiveItem !== ((/** @type {?} */ (_this.self))); }));
        if (this.nonSelfHandler && nonSelfDirectives.length) {
            this.nonSelfHandler(nonSelfDirectives);
        }
        return nonSelfDirectives;
    };
    return ChangeableItemsHelper;
}());
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 * @template TItem
 */
export { ChangeableItemsHelper };
if (false) {
    /** @type {?} */
    ChangeableItemsHelper.prototype.onChildItemChanged;
    /** @type {?} */
    ChangeableItemsHelper.prototype.onItemsChanged;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsHelper.prototype._subscriptionsMap;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsHelper.prototype._changeSubscription;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsHelper.prototype.directiveItems;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsHelper.prototype.self;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemsHelper.prototype.nonSelfHandler;
}
/**
 * Interface for directives that contain changeable items
 * @record
 * @template TItem
 */
export function IChangeableItemsContainer() { }
if (false) {
    /** @type {?} */
    IChangeableItemsContainer.prototype.onChildItemChanged;
    /** @type {?|undefined} */
    IChangeableItemsContainer.prototype.onItemChanged;
    /** @type {?} */
    IChangeableItemsContainer.prototype.onItemsChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlYWJsZS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZS8iLCJzb3VyY2VzIjpbInNoYXJlZC9jaGFuZ2VhYmxlLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7OztBQVN4RDs7Ozs7SUFHRSw4QkFBNkIsR0FBVztRQUFYLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFGL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQztJQUVwQyxDQUFDO0lBRTVDOzs7O09BSUc7Ozs7Ozs7SUFDSCwwQ0FBVzs7Ozs7O0lBQVgsVUFBWSxPQUEyQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7Ozs7Ozs7SUFaQyw2Q0FBK0U7Ozs7O0lBRW5FLG1DQUE0Qjs7Ozs7O0FBZTFDOzs7OztJQU9FOzs7Ozs7O09BT0c7SUFDSCwrQkFDVSxjQUF5RCxFQUN6RCxJQUF1QyxFQUN2QyxjQUE4RTtRQUh4RixpQkFVQztRQVRTLG1CQUFjLEdBQWQsY0FBYyxDQUEyQztRQUN6RCxTQUFJLEdBQUosSUFBSSxDQUFtQztRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0U7UUFqQi9FLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBQzNFLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTZDLENBQUM7UUFFdkUsc0JBQWlCLEdBQW9DLEVBQUUsQ0FBQztRQWdCdkUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFNBQVM7WUFDeEUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1Q0FBTzs7Ozs7SUFBUDtRQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFuQixDQUFtQixFQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sdURBQXVCOzs7O0lBQS9CO1FBQUEsaUJBY0M7O1lBYk8saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1FBQ3pELGlCQUFpQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLGFBQWE7WUFDckMsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLE9BQU87Z0JBQ3ZGLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDdkM7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyx3REFBd0I7Ozs7SUFBaEM7UUFBQSxpQkFNQzs7WUFMTyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsS0FBSyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxJQUFJLEVBQU8sQ0FBQyxFQUFwQyxDQUFvQyxFQUFDO1FBQzNHLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDOzs7Ozs7OztJQTFEQyxtREFBb0Y7O0lBQ3BGLCtDQUF3Rjs7Ozs7SUFFeEYsa0RBQXlFOzs7OztJQUN6RSxvREFBMEM7Ozs7O0lBV3hDLCtDQUFpRTs7Ozs7SUFDakUscUNBQStDOzs7OztJQUMvQywrQ0FBc0Y7Ozs7Ozs7QUE4QzFGLCtDQUlDOzs7SUFIQyx1REFBb0U7O0lBQ3BFLGtEQUFnRTs7SUFDaEUsbURBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSXRlbUNoYW5nZWRQYXlsb2FkLCBJdGVtQ2hhbmdlcyB9IGZyb20gJy4uL2RlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZC5wYXlsb2FkJztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NoYW5nZWFibGUtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyBmb3Igc2luZ2xlIGNoYW5nZWFibGUgaXRlbVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoYW5nZWFibGVJdGVtSGVscGVyPFRJdGVtPiB7XHJcbiAgcmVhZG9ubHkgb25JdGVtQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgVEl0ZW0+PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGtleTogc3RyaW5nKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBBY3Rpb24gdG8gYmUgY2FsbGVkIGJ5IHVzZXIgb2YgY2xhc3Mgd2hlbiBjaGFuZ2UgaXMgZGV0ZWN0ZWRcclxuICAgKiAoVHlwaWNhbGx5IGNhbGxlZCBpbiBuZ09uQ2hhbmdlcylcclxuICAgKiBAcGFyYW0gY2hhbmdlcyBUeXBlZENoYW5nZXMgdGhhdCBhcmUgdG8gYmUgZW1pdHRlZFxyXG4gICAqL1xyXG4gIGVtaXRDaGFuZ2VzKGNoYW5nZXM6IEl0ZW1DaGFuZ2VzPFRJdGVtPikge1xyXG4gICAgdGhpcy5vbkl0ZW1DaGFuZ2VkLmVtaXQoeyBrZXk6IHRoaXMua2V5LCBjaGFuZ2VzIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcmVudCBjbGFzcyBmb3Igd3JhcHBlciBkaXJlY3RpdmUgZm9yIG11bHRpcGxlIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoYW5nZWFibGVJdGVtc0hlbHBlcjxUSXRlbT4ge1xyXG4gIHJlYWRvbmx5IG9uQ2hpbGRJdGVtQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgVEl0ZW0+PigpO1xyXG4gIHJlYWRvbmx5IG9uSXRlbXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxRdWVyeUxpc3Q8Q2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8VEl0ZW0+Pj4oKTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc3Vic2NyaXB0aW9uc01hcDogeyBba2V5OiBzdHJpbmddOiBTdWJzY3JpcHRpb24gfSA9IHt9O1xyXG4gIHByaXZhdGUgX2NoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHN1YnNjcmlwdGlvbnMgdG8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gY2hpbGRyZW4gQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmVzXHJcbiAgICogKFR5cGljYWxseSBjYWxsZWQgaW4gbmdBZnRlckNvbnRlbnRJbml0IGFmdGVyIEBDb250ZW50Q2hpbGRyZW4gYXJlIGluaXRpYWxpemVkKVxyXG4gICAqIEBwYXJhbSBkaXJlY3RpdmVJdGVtcyBMaXN0IG9mIGNoaWxkcmVuIHRvIHdhdGNoIGZvclxyXG4gICAqIEBwYXJhbSBzZWxmIFJlZmVyZW5jZSB0byBjb21wb25lbnQgdXNpbmcgdGhpcyBoZWxwZXIuIFRoaXMgY29tcG9uZW50IGdldHMgZmlsdGVyZWQgb3V0IGluIGNhc2VcclxuICAgKiAgaXQgYXBwZWFycyBpbiB0aGUgbGlzdCBvZiBjaGlsZHJlbiAoaS5lLiB3aGVuIGEgY29tcG9uZW50IGhhcyBjaGlsZHJlbiBvZiBpdHMgb3duIHR5cGUpXHJcbiAgICogQHBhcmFtIG5vblNlbGZIYW5kbGVyIENhbGxiYWNrIHRvIGhhbmRsZSBmaWx0ZXJlZCBsaXN0IG9mIGNoaWxkcmVuIHdoZW4gdXBkYXRlZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBkaXJlY3RpdmVJdGVtczogUXVlcnlMaXN0PENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPFRJdGVtPj4sXHJcbiAgICBwcml2YXRlIHNlbGY/OiBJQ2hhbmdlYWJsZUl0ZW1zQ29udGFpbmVyPFRJdGVtPixcclxuICAgIHByaXZhdGUgbm9uU2VsZkhhbmRsZXI/OiAobm9uU2VsZkRpcmVjdGl2ZXM6IENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPFRJdGVtPltdKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVOZXdEaXJlY3RpdmVzKCk7XHJcbiAgICB0aGlzLl9jaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmRpcmVjdGl2ZUl0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKG5ld1ZhbHVlcyA9PiB7XHJcbiAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQuZW1pdChuZXdWYWx1ZXMpO1xyXG4gICAgICB0aGlzLl9zdWJzY3JpYmVOZXdEaXJlY3RpdmVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGlvbiB0byBiZSBjYWxsZWQgYnkgdXNlciBvZiBjbGFzcyB3aGVuIGRpcmVjdGl2ZS9jb21wb25lbnQgaXMgZGVzdHJveWVkXHJcbiAgICogKFR5cGljYWxseSBjYWxsZWQgaW4gbmdPbkRlc3Ryb3kpXHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5fc3Vic2NyaXB0aW9uc01hcCkuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS51bnN1YnNjcmliZSgpKTtcclxuICAgIHRoaXMuX2NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlTmV3RGlyZWN0aXZlcygpIHtcclxuICAgIGNvbnN0IG5vblNlbGZEaXJlY3RpdmVzID0gdGhpcy5faGFuZGxlTm9uU2VsZkRpcmVjdGl2ZXMoKTtcclxuICAgIG5vblNlbGZEaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlSXRlbSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zTWFwW2RpcmVjdGl2ZUl0ZW0ua2V5XSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNNYXBbZGlyZWN0aXZlSXRlbS5rZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uc01hcFtkaXJlY3RpdmVJdGVtLmtleV0gPSBkaXJlY3RpdmVJdGVtLm9uSXRlbUNoYW5nZWQuc3Vic2NyaWJlKGNoYW5nZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZU5vblNlbGZEaXJlY3RpdmVzKCk7XHJcbiAgICAgICAgdGhpcy5vbkNoaWxkSXRlbUNoYW5nZWQuZW1pdChjaGFuZ2VzKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxmICYmIHRoaXMuc2VsZi5vbkl0ZW1DaGFuZ2VkKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGYub25JdGVtQ2hhbmdlZC5lbWl0KGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZU5vblNlbGZEaXJlY3RpdmVzKCkge1xyXG4gICAgY29uc3Qgbm9uU2VsZkRpcmVjdGl2ZXMgPSB0aGlzLmRpcmVjdGl2ZUl0ZW1zLmZpbHRlcihkaXJlY3RpdmVJdGVtID0+IGRpcmVjdGl2ZUl0ZW0gIT09ICh0aGlzLnNlbGYgYXMgYW55KSk7XHJcbiAgICBpZiAodGhpcy5ub25TZWxmSGFuZGxlciAmJiBub25TZWxmRGlyZWN0aXZlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5ub25TZWxmSGFuZGxlcihub25TZWxmRGlyZWN0aXZlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9uU2VsZkRpcmVjdGl2ZXM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkaXJlY3RpdmVzIHRoYXQgY29udGFpbiBjaGFuZ2VhYmxlIGl0ZW1zXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXI8VEl0ZW0+IHtcclxuICBvbkNoaWxkSXRlbUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJdGVtQ2hhbmdlZFBheWxvYWQ8c3RyaW5nLCBUSXRlbT4+O1xyXG4gIG9uSXRlbUNoYW5nZWQ/OiBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgVEl0ZW0+PjtcclxuICBvbkl0ZW1zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxUSXRlbT4+PjtcclxufVxyXG4iXX0=