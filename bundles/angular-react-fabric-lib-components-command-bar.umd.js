(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('@angular-react/fabric/lib/components/core'), require('@angular-react/fabric/lib/utils'), require('@angular-react/fabric/lib/components/contextual-menu'), require('@angular/common'), require('office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss'), require('office-ui-fabric-react/lib/CommandBar')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/command-bar', ['exports', '@angular-react/core', '@angular/core', '@angular-react/fabric/lib/components/core', '@angular-react/fabric/lib/utils', '@angular-react/fabric/lib/components/contextual-menu', '@angular/common', 'office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss', 'office-ui-fabric-react/lib/CommandBar'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components['command-bar'] = {}), global.core, global.ng.core, global['angular-react'].fabric.lib.components.core, global['angular-react'].fabric.lib.utils, global['angular-react'].fabric.lib.components['contextual-menu'], global.ng.common, global.OverflowSetCss, global.CommandBar));
}(this, (function (exports, core, core$1, core$2, utils, contextualMenu, common, OverflowSetCss, CommandBar) { 'use strict';

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
    /**
     * Wrapper directive to allow rendering a custom item to a CommandBarItem.
     */
    var CommandBarItemRenderDirective = /** @class */ (function () {
        function CommandBarItemRenderDirective() {
        }
        CommandBarItemRenderDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
        ];
        CommandBarItemRenderDirective.propDecorators = {
            templateRef: [{ type: core$1.ContentChild, args: [core$1.TemplateRef, { static: false },] }]
        };
        return CommandBarItemRenderDirective;
    }());
    if (false) {
        /** @type {?} */
        CommandBarItemRenderDirective.prototype.templateRef;
    }
    /**
     * Wrapper directive to allow rendering a custom icon to a CommandBarItem.
     */
    var CommandBarItemRenderIconDirective = /** @class */ (function () {
        function CommandBarItemRenderIconDirective() {
        }
        CommandBarItemRenderIconDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
        ];
        CommandBarItemRenderIconDirective.propDecorators = {
            templateRef: [{ type: core$1.ContentChild, args: [core$1.TemplateRef, { static: false },] }]
        };
        return CommandBarItemRenderIconDirective;
    }());
    if (false) {
        /** @type {?} */
        CommandBarItemRenderIconDirective.prototype.templateRef;
    }
    var CommandBarItemDirective = /** @class */ (function (_super) {
        __extends(CommandBarItemDirective, _super);
        function CommandBarItemDirective(elementRef) {
            return _super.call(this, elementRef) || this;
        }
        CommandBarItemDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar-item' },] }
        ];
        /** @nocollapse */
        CommandBarItemDirective.ctorParameters = function () { return [
            { type: core$1.ElementRef }
        ]; };
        CommandBarItemDirective.propDecorators = {
            iconOnly: [{ type: core$1.Input }],
            tooltipHostProps: [{ type: core$1.Input }],
            buttonStyles: [{ type: core$1.Input }],
            cacheKey: [{ type: core$1.Input }],
            renderedInOverflow: [{ type: core$1.Input }],
            commandBarButtonAs: [{ type: core$1.Input }]
        };
        return CommandBarItemDirective;
    }(contextualMenu.ContextualMenuItemDirective));
    if (false) {
        /** @type {?} */
        CommandBarItemDirective.prototype.iconOnly;
        /** @type {?} */
        CommandBarItemDirective.prototype.tooltipHostProps;
        /** @type {?} */
        CommandBarItemDirective.prototype.buttonStyles;
        /** @type {?} */
        CommandBarItemDirective.prototype.cacheKey;
        /** @type {?} */
        CommandBarItemDirective.prototype.renderedInOverflow;
        /** @type {?} */
        CommandBarItemDirective.prototype.commandBarButtonAs;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    CommandBarItemsDirectiveBase = /** @class */ (function (_super) {
        __extends(CommandBarItemsDirectiveBase, _super);
        function CommandBarItemsDirectiveBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CommandBarItemsDirectiveBase.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.directiveItems &&
                    this.directiveItems.map((/**
                     * @param {?} directiveItem
                     * @return {?}
                     */
                    function (directiveItem) { return (__assign({}, directiveItem, utils.getDataAttributes(directiveItem.elementRef.nativeElement, true), { onClick: (/**
                         * @param {?} ev
                         * @param {?} item
                         * @return {?}
                         */
                        function (ev, item) {
                            directiveItem.click.emit({
                                ev: ev && ev.nativeEvent,
                                item: item,
                            });
                        }) })); })));
            },
            enumerable: true,
            configurable: true
        });
        return CommandBarItemsDirectiveBase;
    }(core$2.ChangeableItemsDirective));
    if (false) {
        /** @type {?} */
        CommandBarItemsDirectiveBase.prototype.directiveItems;
    }
    var CommandBarItemsDirective = /** @class */ (function (_super) {
        __extends(CommandBarItemsDirective, _super);
        function CommandBarItemsDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandBarItemsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar > items' },] }
        ];
        CommandBarItemsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [CommandBarItemDirective,] }]
        };
        return CommandBarItemsDirective;
    }(CommandBarItemsDirectiveBase));
    if (false) {
        /** @type {?} */
        CommandBarItemsDirective.prototype.directiveItems;
    }
    var CommandBarFarItemsDirective = /** @class */ (function (_super) {
        __extends(CommandBarFarItemsDirective, _super);
        function CommandBarFarItemsDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandBarFarItemsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar > far-items' },] }
        ];
        CommandBarFarItemsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [CommandBarItemDirective,] }]
        };
        return CommandBarFarItemsDirective;
    }(CommandBarItemsDirectiveBase));
    if (false) {
        /** @type {?} */
        CommandBarFarItemsDirective.prototype.directiveItems;
    }
    var CommandBarOverflowItemsDirective = /** @class */ (function (_super) {
        __extends(CommandBarOverflowItemsDirective, _super);
        function CommandBarOverflowItemsDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandBarOverflowItemsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar > overflow-items' },] }
        ];
        CommandBarOverflowItemsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [CommandBarItemDirective,] }]
        };
        return CommandBarOverflowItemsDirective;
    }(CommandBarItemsDirectiveBase));
    if (false) {
        /** @type {?} */
        CommandBarOverflowItemsDirective.prototype.directiveItems;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabCommandBarComponent = /** @class */ (function (_super) {
        __extends(FabCommandBarComponent, _super);
        function FabCommandBarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            _this.onDataReduced = new core$1.EventEmitter();
            _this.onDataGrown = new core$1.EventEmitter();
            _this._subscriptions = [];
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FabCommandBarComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes['items'] &&
                changes['items'].previousValue !== changes['items'].currentValue &&
                changes['items'].currentValue)
                this._createTransformedItems(changes['items'].currentValue);
            if (changes['farItems'] &&
                changes['farItems'].previousValue !== changes['farItems'].currentValue &&
                changes['farItems'].currentValue)
                this._createTransformedFarItems(changes['farItems'].currentValue);
            if (changes['overflowItems'] &&
                changes['overflowItems'].previousValue !== changes['overflowItems'].currentValue &&
                changes['overflowItems'].currentValue)
                this._createTransformedOverflowItems(changes['overflowItems'].currentValue);
            _super.prototype.ngOnChanges.call(this, changes);
        };
        /**
         * @return {?}
         */
        FabCommandBarComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.itemsDirective)
                this._initDirective(this.itemsDirective, 'items');
            if (this.farItemsDirective)
                this._initDirective(this.farItemsDirective, 'farItems');
            if (this.overflowItemsDirective)
                this._initDirective(this.overflowItemsDirective, 'overflowItems');
            _super.prototype.ngAfterContentInit.call(this);
        };
        /**
         * @return {?}
         */
        FabCommandBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._subscriptions.forEach((/**
             * @param {?} subscription
             * @return {?}
             */
            function (subscription) { return subscription.unsubscribe(); }));
        };
        /**
         * @private
         * @template TCommandBarItemsDirective
         * @param {?} directive
         * @param {?} itemsPropertyKey
         * @return {?}
         */
        FabCommandBarComponent.prototype._initDirective = /**
         * @private
         * @template TCommandBarItemsDirective
         * @param {?} directive
         * @param {?} itemsPropertyKey
         * @return {?}
         */
        function (directive, itemsPropertyKey) {
            var _this = this;
            /** @type {?} */
            var transformItemsFunc = (directive instanceof CommandBarItemsDirective && ((/**
             * @param {?} newItems
             * @return {?}
             */
            function (newItems) { return _this._createTransformedItems(newItems); }))) ||
                (directive instanceof CommandBarFarItemsDirective && ((/**
                 * @param {?} newItems
                 * @return {?}
                 */
                function (newItems) { return _this._createTransformedFarItems(newItems); }))) ||
                (directive instanceof CommandBarOverflowItemsDirective &&
                    ((/**
                     * @param {?} newItems
                     * @return {?}
                     */
                    function (newItems) { return _this._createTransformedOverflowItems(newItems); })));
            null;
            if (!transformItemsFunc) {
                throw new Error('Invalid directive given');
            }
            /** @type {?} */
            var setItems = (/**
             * @param {?} mapper
             * @return {?}
             */
            function (mapper) {
                _this[itemsPropertyKey] = mapper(_this[itemsPropertyKey]);
                transformItemsFunc(_this[itemsPropertyKey]);
                _this.markForCheck();
            });
            // Initial items
            setItems((/**
             * @return {?}
             */
            function () { return directive.items; }));
            // Subscribe to adding/removing items
            this._subscriptions.push(directive.onItemsChanged.subscribe((/**
             * @param {?} newItems
             * @return {?}
             */
            function (newItems) {
                setItems((/**
                 * @return {?}
                 */
                function () { return newItems.map((/**
                 * @param {?} directive
                 * @return {?}
                 */
                function (directive) { return directive; })); }));
            })));
            // Subscribe for existing items changes
            this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key, changes = _a.changes;
                setItems((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) { return items.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return (item.key === key ? core$2.mergeItemChanges(item, changes) : item); })); }));
                _this.markForCheck();
            })));
        };
        /**
         * @private
         * @param {?} newItems
         * @return {?}
         */
        FabCommandBarComponent.prototype._createTransformedItems = /**
         * @private
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) {
            var _this = this;
            this.transformedItems_ = newItems.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this._transformCommandBarItemOptionsToProps(item); }));
        };
        /**
         * @private
         * @param {?} newItems
         * @return {?}
         */
        FabCommandBarComponent.prototype._createTransformedFarItems = /**
         * @private
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) {
            var _this = this;
            this.transformedFarItems_ = newItems.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this._transformCommandBarItemOptionsToProps(item); }));
        };
        /**
         * @private
         * @param {?} newItems
         * @return {?}
         */
        FabCommandBarComponent.prototype._createTransformedOverflowItems = /**
         * @private
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) {
            var _this = this;
            this.transformedOverflowItems_ = newItems.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this._transformCommandBarItemOptionsToProps(item); }));
        };
        /**
         * @private
         * @param {?} itemOptions
         * @return {?}
         */
        FabCommandBarComponent.prototype._transformCommandBarItemOptionsToProps = /**
         * @private
         * @param {?} itemOptions
         * @return {?}
         */
        function (itemOptions) {
            /** @type {?} */
            var sharedProperties = utils.omit(itemOptions, 'renderIcon', 'render');
            // Legacy render mode is used for the icon because otherwise the icon is to the right of the text (instead of the usual left)
            /** @type {?} */
            var iconRenderer = this.createInputJsxRenderer(itemOptions.renderIcon, { legacyRenderMode: true });
            /** @type {?} */
            var renderer = this.createInputJsxRenderer(itemOptions.render);
            // @ts-ignore
            return (/** @type {?} */ (Object.assign({}, sharedProperties, iconRenderer && {
                onRenderIcon: (/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return iconRenderer({ contextualMenuItem: item }); }),
            }, renderer &&
                ((/** @type {?} */ ({ onRender: (/**
                     * @param {?} item
                     * @param {?} dismissMenu
                     * @return {?}
                     */
                    function (item, dismissMenu) { return renderer({ item: item, dismissMenu: dismissMenu }); }) }))))));
        };
        FabCommandBarComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-command-bar',
                        exportAs: 'fabCommandBar',
                        template: "\n    <CommandBar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [items]=\"transformedItems_\"\n      [farItems]=\"transformedFarItems_\"\n      [overflowItems]=\"transformedOverflowItems_\"\n      [overflowButtonProps]=\"overflowButtonProps\"\n      [overflowButtonAs]=\"overflowButtonAs\"\n      [buttonAs]=\"buttonAs\"\n      [shiftOnReduce]=\"shiftOnReduce\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [ReduceData]=\"onReduceData\"\n      [GrowData]=\"onGrowData\"\n      (onDataReduced)=\"(onDataReduced)\"\n      (onDataGrown)=\"(onDataGrown)\"\n    >\n    </CommandBar>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCommandBarComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabCommandBarComponent.propDecorators = {
            itemsDirective: [{ type: core$1.ContentChild, args: [CommandBarItemsDirective, { static: true },] }],
            farItemsDirective: [{ type: core$1.ContentChild, args: [CommandBarFarItemsDirective, { static: true },] }],
            overflowItemsDirective: [{ type: core$1.ContentChild, args: [CommandBarOverflowItemsDirective, { static: true },] }],
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            overflowButtonProps: [{ type: core$1.Input }],
            overflowButtonAs: [{ type: core$1.Input }],
            buttonAs: [{ type: core$1.Input }],
            shiftOnReduce: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            onReduceData: [{ type: core$1.Input }],
            onGrowData: [{ type: core$1.Input }],
            items: [{ type: core$1.Input }],
            farItems: [{ type: core$1.Input }],
            overflowItems: [{ type: core$1.Input }],
            onDataReduced: [{ type: core$1.Output }],
            onDataGrown: [{ type: core$1.Output }]
        };
        return FabCommandBarComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabCommandBarComponent.prototype.itemsDirective;
        /** @type {?} */
        FabCommandBarComponent.prototype.farItemsDirective;
        /** @type {?} */
        FabCommandBarComponent.prototype.overflowItemsDirective;
        /**
         * @type {?}
         * @protected
         */
        FabCommandBarComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabCommandBarComponent.prototype.componentRef;
        /** @type {?} */
        FabCommandBarComponent.prototype.overflowButtonProps;
        /** @type {?} */
        FabCommandBarComponent.prototype.overflowButtonAs;
        /** @type {?} */
        FabCommandBarComponent.prototype.buttonAs;
        /** @type {?} */
        FabCommandBarComponent.prototype.shiftOnReduce;
        /** @type {?} */
        FabCommandBarComponent.prototype.className;
        /** @type {?} */
        FabCommandBarComponent.prototype.ariaLabel;
        /** @type {?} */
        FabCommandBarComponent.prototype.styles;
        /** @type {?} */
        FabCommandBarComponent.prototype.theme;
        /** @type {?} */
        FabCommandBarComponent.prototype.onReduceData;
        /** @type {?} */
        FabCommandBarComponent.prototype.onGrowData;
        /** @type {?} */
        FabCommandBarComponent.prototype.items;
        /** @type {?} */
        FabCommandBarComponent.prototype.farItems;
        /** @type {?} */
        FabCommandBarComponent.prototype.overflowItems;
        /** @type {?} */
        FabCommandBarComponent.prototype.onDataReduced;
        /** @type {?} */
        FabCommandBarComponent.prototype.onDataGrown;
        /**
         * \@internal
         * @type {?}
         */
        FabCommandBarComponent.prototype.transformedItems_;
        /**
         * \@internal
         * @type {?}
         */
        FabCommandBarComponent.prototype.transformedFarItems_;
        /**
         * \@internal
         * @type {?}
         */
        FabCommandBarComponent.prototype.transformedOverflowItems_;
        /**
         * @type {?}
         * @private
         */
        FabCommandBarComponent.prototype._subscriptions;
    }
    /**
     * @record
     * @template TData
     */
    function ICommandBarItemOptions() { }
    if (false) {
        /** @type {?|undefined} */
        ICommandBarItemOptions.prototype.renderIcon;
        /** @type {?|undefined} */
        ICommandBarItemOptions.prototype.render;
        /** @type {?|undefined} */
        ICommandBarItemOptions.prototype.data;
    }
    /**
     * @record
     */
    function ICommandBarItemOptionsRenderContext() { }
    if (false) {
        /** @type {?} */
        ICommandBarItemOptionsRenderContext.prototype.item;
        /** @type {?} */
        ICommandBarItemOptionsRenderContext.prototype.dismissMenu;
    }
    /**
     * @record
     */
    function ICommandBarItemOptionsRenderIconContext() { }
    if (false) {
        /** @type {?} */
        ICommandBarItemOptionsRenderIconContext.prototype.contextualMenuItem;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Dummy action to force OverflowSetCss to load and not be tree-shaken away.
    utils.noop(OverflowSetCss);
    /** @type {?} */
    var components = [
        FabCommandBarComponent,
        CommandBarItemsDirective,
        CommandBarFarItemsDirective,
        CommandBarOverflowItemsDirective,
        CommandBarItemDirective,
        CommandBarItemRenderDirective,
        CommandBarItemRenderIconDirective,
    ];
    var FabCommandBarModule = /** @class */ (function () {
        function FabCommandBarModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('CommandBar', (/**
             * @return {?}
             */
            function () { return CommandBar.CommandBar; }));
        }
        FabCommandBarModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule, contextualMenu.FabContextualMenuModule],
                        declarations: components,
                        exports: __spread(components, [contextualMenu.FabContextualMenuModule]),
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabCommandBarModule.ctorParameters = function () { return []; };
        return FabCommandBarModule;
    }());

    exports.CommandBarFarItemsDirective = CommandBarFarItemsDirective;
    exports.CommandBarItemDirective = CommandBarItemDirective;
    exports.CommandBarItemRenderDirective = CommandBarItemRenderDirective;
    exports.CommandBarItemRenderIconDirective = CommandBarItemRenderIconDirective;
    exports.CommandBarItemsDirective = CommandBarItemsDirective;
    exports.CommandBarItemsDirectiveBase = CommandBarItemsDirectiveBase;
    exports.CommandBarOverflowItemsDirective = CommandBarOverflowItemsDirective;
    exports.FabCommandBarComponent = FabCommandBarComponent;
    exports.FabCommandBarModule = FabCommandBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-command-bar.umd.js.map
