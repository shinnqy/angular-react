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
export class ChangeableItemHelper {
    /**
     * @param {?} key
     */
    constructor(key) {
        this.key = key;
        this.onItemChanged = new EventEmitter();
    }
    /**
     * Action to be called by user of class when change is detected
     * (Typically called in ngOnChanges)
     * @param {?} changes TypedChanges that are to be emitted
     * @return {?}
     */
    emitChanges(changes) {
        this.onItemChanged.emit({ key: this.key, changes });
    }
}
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
export class ChangeableItemsHelper {
    /**
     * Initialize subscriptions to watch for changes to children ChangeableItemDirectives
     * (Typically called in ngAfterContentInit after \@ContentChildren are initialized)
     * @param {?} directiveItems List of children to watch for
     * @param {?=} self Reference to component using this helper. This component gets filtered out in case
     *  it appears in the list of children (i.e. when a component has children of its own type)
     * @param {?=} nonSelfHandler Callback to handle filtered list of children when updated
     */
    constructor(directiveItems, self, nonSelfHandler) {
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
        newValues => {
            this.onItemsChanged.emit(newValues);
            this._subscribeNewDirectives();
        }));
    }
    /**
     * Action to be called by user of class when directive/component is destroyed
     * (Typically called in ngOnDestroy)
     * @return {?}
     */
    destroy() {
        Object.values(this._subscriptionsMap).forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => value.unsubscribe()));
        this._changeSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeNewDirectives() {
        /** @type {?} */
        const nonSelfDirectives = this._handleNonSelfDirectives();
        nonSelfDirectives.forEach((/**
         * @param {?} directiveItem
         * @return {?}
         */
        directiveItem => {
            if (this._subscriptionsMap[directiveItem.key]) {
                this._subscriptionsMap[directiveItem.key].unsubscribe();
            }
            this._subscriptionsMap[directiveItem.key] = directiveItem.onItemChanged.subscribe((/**
             * @param {?} changes
             * @return {?}
             */
            changes => {
                this._handleNonSelfDirectives();
                this.onChildItemChanged.emit(changes);
                if (this.self && this.self.onItemChanged) {
                    this.self.onItemChanged.emit(changes);
                }
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _handleNonSelfDirectives() {
        /** @type {?} */
        const nonSelfDirectives = this.directiveItems.filter((/**
         * @param {?} directiveItem
         * @return {?}
         */
        directiveItem => directiveItem !== ((/** @type {?} */ (this.self)))));
        if (this.nonSelfHandler && nonSelfDirectives.length) {
            this.nonSelfHandler(nonSelfDirectives);
        }
        return nonSelfDirectives;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlYWJsZS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZS8iLCJzb3VyY2VzIjpbInNoYXJlZC9jaGFuZ2VhYmxlLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7OztBQVN4RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQTZCLEdBQVc7UUFBWCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBRi9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFDLENBQUM7SUFFcEMsQ0FBQzs7Ozs7OztJQU81QyxXQUFXLENBQUMsT0FBMkI7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjs7O0lBWkMsNkNBQStFOzs7OztJQUVuRSxtQ0FBNEI7Ozs7OztBQWUxQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7Ozs7SUFlaEMsWUFDVSxjQUF5RCxFQUN6RCxJQUF1QyxFQUN2QyxjQUE4RTtRQUY5RSxtQkFBYyxHQUFkLGNBQWMsQ0FBMkM7UUFDekQsU0FBSSxHQUFKLElBQUksQ0FBbUM7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdFO1FBakIvRSx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQztRQUMzRSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUE2QyxDQUFDO1FBRXZFLHNCQUFpQixHQUFvQyxFQUFFLENBQUM7UUFnQnZFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNRCxPQUFPO1FBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyx1QkFBdUI7O2NBQ3ZCLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtRQUN6RCxpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUYsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHdCQUF3Qjs7Y0FDeEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNOzs7O1FBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEtBQUssQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxFQUFPLENBQUMsRUFBQztRQUMzRyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFO1lBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztDQUNGOzs7SUExREMsbURBQW9GOztJQUNwRiwrQ0FBd0Y7Ozs7O0lBRXhGLGtEQUF5RTs7Ozs7SUFDekUsb0RBQTBDOzs7OztJQVd4QywrQ0FBaUU7Ozs7O0lBQ2pFLHFDQUErQzs7Ozs7SUFDL0MsK0NBQXNGOzs7Ozs7O0FBOEMxRiwrQ0FJQzs7O0lBSEMsdURBQW9FOztJQUNwRSxrREFBZ0U7O0lBQ2hFLG1EQUF3RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEl0ZW1DaGFuZ2VkUGF5bG9hZCwgSXRlbUNoYW5nZXMgfSBmcm9tICcuLi9kZWNsYXJhdGl2ZS9pdGVtLWNoYW5nZWQucGF5bG9hZCc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGFuZ2VhYmxlLWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHNpbmdsZSBjaGFuZ2VhYmxlIGl0ZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VhYmxlSXRlbUhlbHBlcjxUSXRlbT4ge1xyXG4gIHJlYWRvbmx5IG9uSXRlbUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1DaGFuZ2VkUGF5bG9hZDxzdHJpbmcsIFRJdGVtPj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBrZXk6IHN0cmluZykge31cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aW9uIHRvIGJlIGNhbGxlZCBieSB1c2VyIG9mIGNsYXNzIHdoZW4gY2hhbmdlIGlzIGRldGVjdGVkXHJcbiAgICogKFR5cGljYWxseSBjYWxsZWQgaW4gbmdPbkNoYW5nZXMpXHJcbiAgICogQHBhcmFtIGNoYW5nZXMgVHlwZWRDaGFuZ2VzIHRoYXQgYXJlIHRvIGJlIGVtaXR0ZWRcclxuICAgKi9cclxuICBlbWl0Q2hhbmdlcyhjaGFuZ2VzOiBJdGVtQ2hhbmdlczxUSXRlbT4pIHtcclxuICAgIHRoaXMub25JdGVtQ2hhbmdlZC5lbWl0KHsga2V5OiB0aGlzLmtleSwgY2hhbmdlcyB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJlbnQgY2xhc3MgZm9yIHdyYXBwZXIgZGlyZWN0aXZlIGZvciBtdWx0aXBsZSBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXI8VEl0ZW0+IHtcclxuICByZWFkb25seSBvbkNoaWxkSXRlbUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1DaGFuZ2VkUGF5bG9hZDxzdHJpbmcsIFRJdGVtPj4oKTtcclxuICByZWFkb25seSBvbkl0ZW1zQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UXVlcnlMaXN0PENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPFRJdGVtPj4+KCk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YnNjcmlwdGlvbnNNYXA6IHsgW2tleTogc3RyaW5nXTogU3Vic2NyaXB0aW9uIH0gPSB7fTtcclxuICBwcml2YXRlIF9jaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBzdWJzY3JpcHRpb25zIHRvIHdhdGNoIGZvciBjaGFuZ2VzIHRvIGNoaWxkcmVuIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlc1xyXG4gICAqIChUeXBpY2FsbHkgY2FsbGVkIGluIG5nQWZ0ZXJDb250ZW50SW5pdCBhZnRlciBAQ29udGVudENoaWxkcmVuIGFyZSBpbml0aWFsaXplZClcclxuICAgKiBAcGFyYW0gZGlyZWN0aXZlSXRlbXMgTGlzdCBvZiBjaGlsZHJlbiB0byB3YXRjaCBmb3JcclxuICAgKiBAcGFyYW0gc2VsZiBSZWZlcmVuY2UgdG8gY29tcG9uZW50IHVzaW5nIHRoaXMgaGVscGVyLiBUaGlzIGNvbXBvbmVudCBnZXRzIGZpbHRlcmVkIG91dCBpbiBjYXNlXHJcbiAgICogIGl0IGFwcGVhcnMgaW4gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gKGkuZS4gd2hlbiBhIGNvbXBvbmVudCBoYXMgY2hpbGRyZW4gb2YgaXRzIG93biB0eXBlKVxyXG4gICAqIEBwYXJhbSBub25TZWxmSGFuZGxlciBDYWxsYmFjayB0byBoYW5kbGUgZmlsdGVyZWQgbGlzdCBvZiBjaGlsZHJlbiB3aGVuIHVwZGF0ZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGlyZWN0aXZlSXRlbXM6IFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxUSXRlbT4+LFxyXG4gICAgcHJpdmF0ZSBzZWxmPzogSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lcjxUSXRlbT4sXHJcbiAgICBwcml2YXRlIG5vblNlbGZIYW5kbGVyPzogKG5vblNlbGZEaXJlY3RpdmVzOiBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxUSXRlbT5bXSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgdGhpcy5fc3Vic2NyaWJlTmV3RGlyZWN0aXZlcygpO1xyXG4gICAgdGhpcy5fY2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5kaXJlY3RpdmVJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZShuZXdWYWx1ZXMgPT4ge1xyXG4gICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkLmVtaXQobmV3VmFsdWVzKTtcclxuICAgICAgdGhpcy5fc3Vic2NyaWJlTmV3RGlyZWN0aXZlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3Rpb24gdG8gYmUgY2FsbGVkIGJ5IHVzZXIgb2YgY2xhc3Mgd2hlbiBkaXJlY3RpdmUvY29tcG9uZW50IGlzIGRlc3Ryb3llZFxyXG4gICAqIChUeXBpY2FsbHkgY2FsbGVkIGluIG5nT25EZXN0cm95KVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuX3N1YnNjcmlwdGlvbnNNYXApLmZvckVhY2godmFsdWUgPT4gdmFsdWUudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLl9jaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmliZU5ld0RpcmVjdGl2ZXMoKSB7XHJcbiAgICBjb25zdCBub25TZWxmRGlyZWN0aXZlcyA9IHRoaXMuX2hhbmRsZU5vblNlbGZEaXJlY3RpdmVzKCk7XHJcbiAgICBub25TZWxmRGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZUl0ZW0gPT4ge1xyXG4gICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uc01hcFtkaXJlY3RpdmVJdGVtLmtleV0pIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zTWFwW2RpcmVjdGl2ZUl0ZW0ua2V5XS51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNNYXBbZGlyZWN0aXZlSXRlbS5rZXldID0gZGlyZWN0aXZlSXRlbS5vbkl0ZW1DaGFuZ2VkLnN1YnNjcmliZShjaGFuZ2VzID0+IHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVOb25TZWxmRGlyZWN0aXZlcygpO1xyXG4gICAgICAgIHRoaXMub25DaGlsZEl0ZW1DaGFuZ2VkLmVtaXQoY2hhbmdlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZiAmJiB0aGlzLnNlbGYub25JdGVtQ2hhbmdlZCkge1xyXG4gICAgICAgICAgdGhpcy5zZWxmLm9uSXRlbUNoYW5nZWQuZW1pdChjaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVOb25TZWxmRGlyZWN0aXZlcygpIHtcclxuICAgIGNvbnN0IG5vblNlbGZEaXJlY3RpdmVzID0gdGhpcy5kaXJlY3RpdmVJdGVtcy5maWx0ZXIoZGlyZWN0aXZlSXRlbSA9PiBkaXJlY3RpdmVJdGVtICE9PSAodGhpcy5zZWxmIGFzIGFueSkpO1xyXG4gICAgaWYgKHRoaXMubm9uU2VsZkhhbmRsZXIgJiYgbm9uU2VsZkRpcmVjdGl2ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubm9uU2VsZkhhbmRsZXIobm9uU2VsZkRpcmVjdGl2ZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vblNlbGZEaXJlY3RpdmVzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZGlyZWN0aXZlcyB0aGF0IGNvbnRhaW4gY2hhbmdlYWJsZSBpdGVtc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhbmdlYWJsZUl0ZW1zQ29udGFpbmVyPFRJdGVtPiB7XHJcbiAgb25DaGlsZEl0ZW1DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgVEl0ZW0+PjtcclxuICBvbkl0ZW1DaGFuZ2VkPzogRXZlbnRFbWl0dGVyPEl0ZW1DaGFuZ2VkUGF5bG9hZDxzdHJpbmcsIFRJdGVtPj47XHJcbiAgb25JdGVtc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxRdWVyeUxpc3Q8Q2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8VEl0ZW0+Pj47XHJcbn1cclxuIl19