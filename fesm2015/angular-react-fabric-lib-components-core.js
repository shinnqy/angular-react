import { EventEmitter, Input, Output, ContentChildren } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @record
 * @template TValue
 */
function PropertyChange() { }
if (false) {
    /** @type {?} */
    PropertyChange.prototype.currentValue;
}
/**
 * @record
 * @template TKey, TItem
 */
function ItemChangedPayload() { }
if (false) {
    /** @type {?} */
    ItemChangedPayload.prototype.key;
    /** @type {?} */
    ItemChangedPayload.prototype.changes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @template T
 * @param {?} target
 * @param {?} changes
 * @return {?}
 */
function mergeItemChanges(target, changes) {
    /** @type {?} */
    const itemChangesOverrides = ((/** @type {?} */ (Object.entries(changes)))).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    (acc, [propertyKey, change]) => Object.assign(acc, { [propertyKey]: change.currentValue })), {});
    return Object.assign({}, target, itemChangesOverrides);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper class for single changeable item
 * @template TItem
 */
class ChangeableItemHelper {
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
class ChangeableItemsHelper {
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
function IChangeableItemsContainer() { }
if (false) {
    /** @type {?} */
    IChangeableItemsContainer.prototype.onChildItemChanged;
    /** @type {?|undefined} */
    IChangeableItemsContainer.prototype.onItemChanged;
    /** @type {?} */
    IChangeableItemsContainer.prototype.onItemsChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
;
/**
 * Parent class for wrapper directive for single item with OnChanges
 * @abstract
 * @template TItem
 */
class ChangeableItemDirective {
    /**
     * @return {?}
     */
    get onItemChanged() {
        return this.changeableItemHelper && this.changeableItemHelper.onItemChanged;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changeableItemHelper = new ChangeableItemHelper(this.key);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.changeableItemHelper) {
            this.changeableItemHelper.emitChanges(changes);
        }
    }
}
ChangeableItemDirective.propDecorators = {
    key: [{ type: Input }],
    onItemChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ChangeableItemDirective.prototype.key;
    /**
     * @type {?}
     * @private
     */
    ChangeableItemDirective.prototype.changeableItemHelper;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Parent class for wrapper directive for multiple ChangeableItemDirectives
 * @abstract
 * @template TItem
 */
class ChangeableItemsDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChangeableItemDirective, ChangeableItemHelper, ChangeableItemsDirective, ChangeableItemsHelper, mergeItemChanges };
//# sourceMappingURL=angular-react-fabric-lib-components-core.js.map
