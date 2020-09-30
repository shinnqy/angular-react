(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/core', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components.core = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var   /**
     * Helper class for single changeable item
     * @template TItem
     */
    ChangeableItemHelper = /** @class */ (function () {
        function ChangeableItemHelper(key) {
            this.key = key;
            this.onItemChanged = new core.EventEmitter();
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
    var   /**
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
            this.onChildItemChanged = new core.EventEmitter();
            this.onItemsChanged = new core.EventEmitter();
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
            key: [{ type: core.Input }],
            onItemChanged: [{ type: core.Output }]
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
            directiveItems: [{ type: core.ContentChildren, args: [ChangeableItemDirective,] }],
            onChildItemChanged: [{ type: core.Output }],
            onItemsChanged: [{ type: core.Output }]
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

    exports.ChangeableItemDirective = ChangeableItemDirective;
    exports.ChangeableItemHelper = ChangeableItemHelper;
    exports.ChangeableItemsDirective = ChangeableItemsDirective;
    exports.ChangeableItemsHelper = ChangeableItemsHelper;
    exports.mergeItemChanges = mergeItemChanges;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-core.umd.js.map
