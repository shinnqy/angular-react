import { __read } from 'tslib';
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
    var itemChangesOverrides = ((/** @type {?} */ (Object.entries(changes)))).reduce((/**
     * @param {?} acc
     * @param {?} __1
     * @return {?}
     */
    function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), propertyKey = _c[0], change = _c[1];
        return Object.assign(acc, (_b = {}, _b[propertyKey] = change.currentValue, _b));
    }), {});
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
var  /**
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
var  /**
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
var ChangeableItemsDirective = /** @class */ (function () {
    function ChangeableItemsDirective() {
    }
    Object.defineProperty(ChangeableItemsDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeableItemsDirective.prototype, "onItemsChanged", {
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
    ChangeableItemsDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper = new ChangeableItemsHelper(this.directiveItems);
    };
    /**
     * @return {?}
     */
    ChangeableItemsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper.destroy();
    };
    ChangeableItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [ChangeableItemDirective,] }],
        onChildItemChanged: [{ type: Output }],
        onItemsChanged: [{ type: Output }]
    };
    return ChangeableItemsDirective;
}());
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
