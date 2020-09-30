(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular-react/core'), require('@angular-react/fabric/lib/utils'), require('@angular-react/fabric/lib/components/core'), require('@angular-react/fabric/lib/components/group'), require('@angular/common'), require('office-ui-fabric-react/lib/DetailsList')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/details-list', ['exports', '@angular/core', '@angular-react/core', '@angular-react/fabric/lib/utils', '@angular-react/fabric/lib/components/core', '@angular-react/fabric/lib/components/group', '@angular/common', 'office-ui-fabric-react/lib/DetailsList'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components['details-list'] = {}), global.ng.core, global.core$1, global['angular-react'].fabric.lib.utils, global['angular-react'].fabric.lib.components.core, global['angular-react'].fabric.lib.components.group, global.ng.common, global.DetailsList));
}(this, (function (exports, core, core$1, utils, core$2, group, common, DetailsList) { 'use strict';

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
     * Wrapper directive for rendering a custom column to a DetailsListColumn
     */
    var DetailsListColumnRenderDirective = /** @class */ (function () {
        function DetailsListColumnRenderDirective() {
        }
        DetailsListColumnRenderDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'fab-details-list-column > render' },] }
        ];
        DetailsListColumnRenderDirective.propDecorators = {
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
        };
        return DetailsListColumnRenderDirective;
    }());
    if (false) {
        /** @type {?} */
        DetailsListColumnRenderDirective.prototype.templateRef;
    }
    /**
     * Wrapper directive for creating a DetailsListColumn
     */
    var DetailsListColumnDirective = /** @class */ (function (_super) {
        __extends(DetailsListColumnDirective, _super);
        function DetailsListColumnDirective() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Callback members
            _this.onColumnClick = new core.EventEmitter();
            _this.onColumnContextMenu = new core.EventEmitter();
            _this.onColumnResize = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        DetailsListColumnDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.renderDirective && this.renderDirective.templateRef) {
                this.render = this.renderDirective.templateRef;
            }
        };
        DetailsListColumnDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'fab-details-list-column' },] }
        ];
        DetailsListColumnDirective.propDecorators = {
            renderDirective: [{ type: core.ContentChild, args: [DetailsListColumnRenderDirective, { static: false },] }],
            name: [{ type: core.Input }],
            fieldName: [{ type: core.Input }],
            className: [{ type: core.Input }],
            minWidth: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input }],
            isRowHeader: [{ type: core.Input }],
            maxWidth: [{ type: core.Input }],
            columnActionsMode: [{ type: core.Input }],
            iconName: [{ type: core.Input }],
            isIconOnly: [{ type: core.Input }],
            iconClassName: [{ type: core.Input }],
            isCollapsable: [{ type: core.Input }],
            isSorted: [{ type: core.Input }],
            isSortedDescending: [{ type: core.Input }],
            isResizable: [{ type: core.Input }],
            isMultiline: [{ type: core.Input }],
            onRender: [{ type: core.Input }],
            getValueKey: [{ type: core.Input }],
            onRenderDivider: [{ type: core.Input }],
            isFiltered: [{ type: core.Input }],
            isGrouped: [{ type: core.Input }],
            data: [{ type: core.Input }],
            calculatedWidth: [{ type: core.Input }],
            currentWidth: [{ type: core.Input }],
            headerClassName: [{ type: core.Input }],
            isPadded: [{ type: core.Input }],
            sortAscendingAriaLabel: [{ type: core.Input }],
            sortDescendingAriaLabel: [{ type: core.Input }],
            groupAriaLabel: [{ type: core.Input }],
            filterAriaLabel: [{ type: core.Input }],
            render: [{ type: core.Input }],
            onColumnClick: [{ type: core.Output }],
            onColumnContextMenu: [{ type: core.Output }],
            onColumnResize: [{ type: core.Output }]
        };
        return DetailsListColumnDirective;
    }(core$2.ChangeableItemDirective));
    if (false) {
        /** @type {?} */
        DetailsListColumnDirective.prototype.renderDirective;
        /** @type {?} */
        DetailsListColumnDirective.prototype.name;
        /** @type {?} */
        DetailsListColumnDirective.prototype.fieldName;
        /** @type {?} */
        DetailsListColumnDirective.prototype.className;
        /** @type {?} */
        DetailsListColumnDirective.prototype.minWidth;
        /** @type {?} */
        DetailsListColumnDirective.prototype.ariaLabel;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isRowHeader;
        /** @type {?} */
        DetailsListColumnDirective.prototype.maxWidth;
        /** @type {?} */
        DetailsListColumnDirective.prototype.columnActionsMode;
        /** @type {?} */
        DetailsListColumnDirective.prototype.iconName;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isIconOnly;
        /** @type {?} */
        DetailsListColumnDirective.prototype.iconClassName;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isCollapsable;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isSorted;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isSortedDescending;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isResizable;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isMultiline;
        /** @type {?} */
        DetailsListColumnDirective.prototype.onRender;
        /** @type {?} */
        DetailsListColumnDirective.prototype.getValueKey;
        /** @type {?} */
        DetailsListColumnDirective.prototype.onRenderDivider;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isFiltered;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isGrouped;
        /** @type {?} */
        DetailsListColumnDirective.prototype.data;
        /** @type {?} */
        DetailsListColumnDirective.prototype.calculatedWidth;
        /** @type {?} */
        DetailsListColumnDirective.prototype.currentWidth;
        /** @type {?} */
        DetailsListColumnDirective.prototype.headerClassName;
        /** @type {?} */
        DetailsListColumnDirective.prototype.isPadded;
        /** @type {?} */
        DetailsListColumnDirective.prototype.sortAscendingAriaLabel;
        /** @type {?} */
        DetailsListColumnDirective.prototype.sortDescendingAriaLabel;
        /** @type {?} */
        DetailsListColumnDirective.prototype.groupAriaLabel;
        /** @type {?} */
        DetailsListColumnDirective.prototype.filterAriaLabel;
        /** @type {?} */
        DetailsListColumnDirective.prototype.render;
        /** @type {?} */
        DetailsListColumnDirective.prototype.onColumnClick;
        /** @type {?} */
        DetailsListColumnDirective.prototype.onColumnContextMenu;
        /** @type {?} */
        DetailsListColumnDirective.prototype.onColumnResize;
    }
    /**
     * @record
     * @template TData
     */
    function IDetailsListColumnOptions() { }
    if (false) {
        /** @type {?|undefined} */
        IDetailsListColumnOptions.prototype.render;
        /** @type {?|undefined} */
        IDetailsListColumnOptions.prototype.onColumnClick;
        /** @type {?|undefined} */
        IDetailsListColumnOptions.prototype.onColumnContextMenu;
        /** @type {?|undefined} */
        IDetailsListColumnOptions.prototype.onColumnResize;
        /** @type {?|undefined} */
        IDetailsListColumnOptions.prototype.data;
    }
    /**
     * @record
     */
    function IDetailsListColumnOptionsRenderContext() { }
    if (false) {
        /** @type {?|undefined} */
        IDetailsListColumnOptionsRenderContext.prototype.item;
        /** @type {?|undefined} */
        IDetailsListColumnOptionsRenderContext.prototype.index;
        /** @type {?|undefined} */
        IDetailsListColumnOptionsRenderContext.prototype.column;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for creating multiple DetailsListColumns
     */
    var DetailsListColumnsDirective = /** @class */ (function (_super) {
        __extends(DetailsListColumnsDirective, _super);
        function DetailsListColumnsDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DetailsListColumnsDirective.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this.directiveItems.map((/**
                 * @param {?} directiveItem
                 * @return {?}
                 */
                function (directiveItem) { return (__assign({}, directiveItem, { onColumnClick: (/**
                     * @param {?} ev
                     * @param {?} column
                     * @return {?}
                     */
                    function (ev, column) {
                        directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column: column });
                    }), onColumnContextMenu: (/**
                     * @param {?=} column
                     * @param {?=} ev
                     * @return {?}
                     */
                    function (column, ev) {
                        directiveItem.onColumnContextMenu.emit({ column: column, ev: ev && ev.nativeEvent });
                    }), onColumnResize: (/**
                     * @param {?=} width
                     * @return {?}
                     */
                    function (width) {
                        directiveItem.onColumnResize.emit({ width: width });
                    }) })); }));
            },
            enumerable: true,
            configurable: true
        });
        DetailsListColumnsDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'fab-details-list > columns' },] }
        ];
        DetailsListColumnsDirective.propDecorators = {
            directiveItems: [{ type: core.ContentChildren, args: [DetailsListColumnDirective,] }]
        };
        return DetailsListColumnsDirective;
    }(core$2.ChangeableItemsDirective));
    if (false) {
        /** @type {?} */
        DetailsListColumnsDirective.prototype.directiveItems;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for creating multiple DetailsList Groups
     */
    var DetailsListGroupsDirective = /** @class */ (function (_super) {
        __extends(DetailsListGroupsDirective, _super);
        function DetailsListGroupsDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DetailsListGroupsDirective.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this.directiveItems.toArray();
            },
            enumerable: true,
            configurable: true
        });
        DetailsListGroupsDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'fab-details-list > groups' },] }
        ];
        DetailsListGroupsDirective.propDecorators = {
            directiveItems: [{ type: core.ContentChildren, args: [group.GroupItemDirective,] }]
        };
        return DetailsListGroupsDirective;
    }(core$2.ChangeableItemsDirective));
    if (false) {
        /** @type {?} */
        DetailsListGroupsDirective.prototype.directiveItems;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabDetailsListComponent = /** @class */ (function (_super) {
        __extends(FabDetailsListComponent, _super);
        function FabDetailsListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            // Callback members
            _this.onActiveItemChanged = new core.EventEmitter();
            _this.onColumnHeaderClick = new core.EventEmitter();
            _this.onColumnHeaderContextMenu = new core.EventEmitter();
            _this.onColumnResize = new core.EventEmitter();
            _this.onDidUpdate = new core.EventEmitter();
            _this.onItemContextMenu = new core.EventEmitter();
            _this.onItemInvoked = new core.EventEmitter();
            _this.onRowDidMount = new core.EventEmitter();
            _this.onRowWillUnmount = new core.EventEmitter();
            _this._subscriptions = [];
            // Bind this to access Angular component properties
            _this.onActiveItemChangedHandler = _this.onActiveItemChangedHandler.bind(_this);
            _this.onColumnHeaderClickHandler = _this.onColumnHeaderClickHandler.bind(_this);
            _this.onColumnHeaderContextMenuHandler = _this.onColumnHeaderContextMenuHandler.bind(_this);
            _this.onColumnResizeHandler = _this.onColumnResizeHandler.bind(_this);
            _this.onDidUpdateHandler = _this.onDidUpdateHandler.bind(_this);
            _this.onItemContextMenuHandler = _this.onItemContextMenuHandler.bind(_this);
            _this.onItemInvokedHandler = _this.onItemInvokedHandler.bind(_this);
            _this.onRowDidMountHandler = _this.onRowDidMountHandler.bind(_this);
            _this.onRowWillUnmountHandler = _this.onRowWillUnmountHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabDetailsListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderCheckbox = this.createRenderPropHandler(this.renderCheckbox);
            this.onRenderDetailsFooter = this.createRenderPropHandler(this.renderDetailsFooter);
            this.onRenderDetailsHeader = this.createRenderPropHandler(this.renderDetailsHeader);
            this.onRenderRow = this.createRenderPropHandler(this.renderRow);
            /** @type {?} */
            var missingItemRenderer = this.createInputJsxRenderer(this.renderMissingItem);
            this.onRenderMissingItem = (/**
             * @param {?} index
             * @param {?} rowProps
             * @return {?}
             */
            function (index, rowProps) { return missingItemRenderer({ index: index, rowProps: rowProps }); });
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        FabDetailsListComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes['columns'] &&
                changes['columns'].currentValue &&
                changes['columns'].previousValue !== changes['columns'].currentValue) {
                this._createTransformedColumns(changes['columns'].currentValue);
            }
            if (changes['groups'] &&
                changes['groups'].currentValue &&
                changes['groups'].previousValue !== changes['groups'].currentValue) {
                this._createTransformedGroups(changes['groups'].currentValue);
            }
            _super.prototype.ngOnChanges.call(this, changes);
        };
        /**
         * @return {?}
         */
        FabDetailsListComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.columnsDirective) {
                this._initDirective(this.columnsDirective, 'columns');
            }
            if (this.groupsDirective) {
                this._initDirective(this.groupsDirective, 'groups');
            }
            _super.prototype.ngAfterContentInit.call(this);
        };
        /**
         * @return {?}
         */
        FabDetailsListComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._subscriptions.forEach((/**
             * @param {?} sub
             * @return {?}
             */
            function (sub) { return sub.unsubscribe(); }));
        };
        /**
         * @param {?=} item
         * @param {?=} index
         * @param {?=} ev
         * @return {?}
         */
        FabDetailsListComponent.prototype.onActiveItemChangedHandler = /**
         * @param {?=} item
         * @param {?=} index
         * @param {?=} ev
         * @return {?}
         */
        function (item, index, ev) {
            this.onActiveItemChanged.emit({ item: item, index: index, ev: ev.nativeEvent });
        };
        /**
         * @param {?=} ev
         * @param {?=} column
         * @return {?}
         */
        FabDetailsListComponent.prototype.onColumnHeaderClickHandler = /**
         * @param {?=} ev
         * @param {?=} column
         * @return {?}
         */
        function (ev, column) {
            this.onColumnHeaderClick.emit({ ev: ev.nativeEvent, column: column });
        };
        /**
         * @param {?=} column
         * @param {?=} ev
         * @return {?}
         */
        FabDetailsListComponent.prototype.onColumnHeaderContextMenuHandler = /**
         * @param {?=} column
         * @param {?=} ev
         * @return {?}
         */
        function (column, ev) {
            this.onColumnHeaderContextMenu.emit({ column: column, ev: ev.nativeEvent });
        };
        /**
         * @param {?=} column
         * @param {?=} newWidth
         * @param {?=} columnIndex
         * @return {?}
         */
        FabDetailsListComponent.prototype.onColumnResizeHandler = /**
         * @param {?=} column
         * @param {?=} newWidth
         * @param {?=} columnIndex
         * @return {?}
         */
        function (column, newWidth, columnIndex) {
            this.onColumnResize.emit({ column: column, newWidth: newWidth, columnIndex: columnIndex });
        };
        /**
         * @param {?=} detailsList
         * @return {?}
         */
        FabDetailsListComponent.prototype.onDidUpdateHandler = /**
         * @param {?=} detailsList
         * @return {?}
         */
        function (detailsList) {
            this.onDidUpdate.emit({ detailsList: detailsList });
        };
        /**
         * @param {?=} item
         * @param {?=} index
         * @param {?=} ev
         * @return {?}
         */
        FabDetailsListComponent.prototype.onItemContextMenuHandler = /**
         * @param {?=} item
         * @param {?=} index
         * @param {?=} ev
         * @return {?}
         */
        function (item, index, ev) {
            this.onItemContextMenu.emit({ item: item, index: index, ev: ev });
        };
        /**
         * @param {?=} item
         * @param {?=} index
         * @param {?=} ev
         * @return {?}
         */
        FabDetailsListComponent.prototype.onItemInvokedHandler = /**
         * @param {?=} item
         * @param {?=} index
         * @param {?=} ev
         * @return {?}
         */
        function (item, index, ev) {
            this.onItemInvoked.emit({ item: item, index: index, ev: ev });
        };
        /**
         * @param {?=} item
         * @param {?=} index
         * @return {?}
         */
        FabDetailsListComponent.prototype.onRowDidMountHandler = /**
         * @param {?=} item
         * @param {?=} index
         * @return {?}
         */
        function (item, index) {
            this.onRowDidMount.emit({ item: item, index: index });
        };
        /**
         * @param {?=} item
         * @param {?=} index
         * @return {?}
         */
        FabDetailsListComponent.prototype.onRowWillUnmountHandler = /**
         * @param {?=} item
         * @param {?=} index
         * @return {?}
         */
        function (item, index) {
            this.onRowWillUnmount.emit({ item: item, index: index });
        };
        /**
         * @private
         * @param {?} directive
         * @param {?} propertyKey
         * @return {?}
         */
        FabDetailsListComponent.prototype._initDirective = /**
         * @private
         * @param {?} directive
         * @param {?} propertyKey
         * @return {?}
         */
        function (directive, propertyKey) {
            var _this = this;
            /** @type {?} */
            var transformItemsFunc = this._transformItemsFunction(directive);
            /** @type {?} */
            var setItems = (/**
             * @param {?} mapper
             * @return {?}
             */
            function (mapper) {
                _this[propertyKey] = mapper(_this[propertyKey]);
                transformItemsFunc(_this[propertyKey]);
                _this.markForCheck();
            });
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
            // Subscribe for existing item changes
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
         * @param {?} directive
         * @return {?}
         */
        FabDetailsListComponent.prototype._transformItemsFunction = /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            var _this = this;
            if (directive instanceof DetailsListColumnsDirective) {
                return (/**
                 * @param {?} newColumns
                 * @return {?}
                 */
                function (newColumns) { return _this._createTransformedColumns(newColumns); });
            }
            else if (directive instanceof DetailsListGroupsDirective) {
                return (/**
                 * @param {?} newGroups
                 * @return {?}
                 */
                function (newGroups) { return _this._createTransformedGroups(newGroups); });
            }
            else {
                throw new Error('Invalid directive given');
            }
        };
        /**
         * @private
         * @param {?} newColumns
         * @return {?}
         */
        FabDetailsListComponent.prototype._createTransformedColumns = /**
         * @private
         * @param {?} newColumns
         * @return {?}
         */
        function (newColumns) {
            var _this = this;
            this.transformedColumns_ = newColumns.map((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return _this._transformDetailsListColumnOptionsToProps(column); }));
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        FabDetailsListComponent.prototype._transformDetailsListColumnOptionsToProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var renderer = this.createInputJsxRenderer(options.render);
            return (/** @type {?} */ (Object.assign({}, utils.omit(options, 'render'), renderer &&
                ((/** @type {?} */ ({
                    onRender: (/**
                     * @param {?=} item
                     * @param {?=} index
                     * @param {?=} column
                     * @return {?}
                     */
                    function (item, index, column) { return renderer({ item: item, index: index, column: column }); }),
                }))))));
        };
        /**
         * @private
         * @param {?} newGroups
         * @return {?}
         */
        FabDetailsListComponent.prototype._createTransformedGroups = /**
         * @private
         * @param {?} newGroups
         * @return {?}
         */
        function (newGroups) {
            this.transformedGroups_ = newGroups;
        };
        FabDetailsListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'fab-details-list',
                        exportAs: 'fabDetailsList',
                        template: "\n    <DetailsList\n      #reactNode\n      [items]=\"items\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelForGrid]=\"ariaLabelForGrid\"\n      [ariaLabelForListHeader]=\"ariaLabelForListHeader\"\n      [ariaLabelForSelectAllCheckbox]=\"ariaLabelForSelectAllCheckbox\"\n      [ariaLabelForSelectionColumn]=\"ariaLabelForSelectionColumn\"\n      [cellStyleProps]=\"cellStyleProps\"\n      [checkButtonAriaLabel]=\"checkButtonAriaLabel\"\n      [checkboxCellClassName]=\"checkboxCellClassName\"\n      [checkboxVisibility]=\"checkboxVisibility\"\n      [className]=\"className\"\n      [columnReorderOptions]=\"columnReorderOptions\"\n      [columns]=\"transformedColumns_\"\n      [compact]=\"compact\"\n      [componentRef]=\"componentRef\"\n      [constrainMode]=\"constrainMode\"\n      [disableSelectionZone]=\"disableSelectionZone\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [enableUpdateAnimations]=\"enableUpdateAnimations\"\n      [enterModalSelectionOnTouch]=\"enterModalSelectionOnTouch\"\n      [getCellValueKey]=\"getCellValueKey\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [getKey]=\"getKey\"\n      [getRowAriaDescribedBy]=\"getRowAriaDescribedBy\"\n      [getRowAriaLabel]=\"getRowAriaLabel\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"transformedGroups_\"\n      [indentWidth]=\"indentWidth\"\n      [initialFocusedIndex]=\"initialFocusedIndex\"\n      [isHeaderVisible]=\"isHeaderVisible\"\n      [layoutMode]=\"layoutMode\"\n      [listProps]=\"listProps\"\n      [minimumPixelsForDrag]=\"minimumPixelsForDrag\"\n      [rowElementEventMap]=\"rowElementEventMap\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [selectionPreservedOnEmptyClick]=\"selectionPreservedOnEmptyClick\"\n      [selectionZoneProps]=\"selectionZoneProps\"\n      [setKey]=\"setKey\"\n      [shouldApplyApplicationRole]=\"shouldApplyApplicationRole\"\n      [skipViewportMeasures]=\"skipViewportMeasures\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [useFastIcons]=\"useFastIcons\"\n      [usePageCache]=\"usePageCache\"\n      [useReducedRowRenderer]=\"useReducedRowRenderer\"\n      [viewport]=\"viewport\"\n      [RenderCheckbox]=\"renderCheckbox && onRenderCheckbox\"\n      [RenderDetailsFooter]=\"renderDetailsFooter && onRenderDetailsFooter\"\n      [RenderDetailsHeader]=\"renderDetailsHeader && onRenderDetailsHeader\"\n      [RenderMissingItem]=\"renderMissingItem && onRenderMissingItem\"\n      [RenderRow]=\"renderDetailsHeader && onRenderRow\"\n      [ActiveItemChanged]=\"onActiveItemChangedHandler\"\n      [ColumnHeaderClick]=\"onColumnHeaderClickHandler\"\n      [ColumnHeaderContextMenu]=\"onColumnHeaderContextMenuHandler\"\n      [ColumnResize]=\"onColumnResizeHandler\"\n      [DidUpdate]=\"onDidUpdateHandler\"\n      [ItemContextMenu]=\"onItemContextMenuHandler\"\n      [ItemInvoked]=\"onItemInvokedHandler\"\n      [RowDidMount]=\"onRowDidMountHandler\"\n      [RowWillUnmount]=\"onRowWillUnmountHandler\"\n      [ShouldVirtualize]=\"onShouldVirtualize\"\n    >\n    </DetailsList>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDetailsListComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabDetailsListComponent.propDecorators = {
            columnsDirective: [{ type: core.ContentChild, args: [DetailsListColumnsDirective, { static: true },] }],
            groupsDirective: [{ type: core.ContentChild, args: [DetailsListGroupsDirective, { static: true },] }],
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }],
            theme: [{ type: core.Input }],
            styles: [{ type: core.Input }],
            componentRef: [{ type: core.Input }],
            setKey: [{ type: core.Input }],
            items: [{ type: core.Input }],
            listProps: [{ type: core.Input }],
            initialFocusedIndex: [{ type: core.Input }],
            className: [{ type: core.Input }],
            groupProps: [{ type: core.Input }],
            indentWidth: [{ type: core.Input }],
            selection: [{ type: core.Input }],
            selectionMode: [{ type: core.Input }],
            selectionPreservedOnEmptyClick: [{ type: core.Input }],
            selectionZoneProps: [{ type: core.Input }],
            layoutMode: [{ type: core.Input }],
            checkboxVisibility: [{ type: core.Input }],
            isHeaderVisible: [{ type: core.Input }],
            constrainMode: [{ type: core.Input }],
            rowElementEventMap: [{ type: core.Input }],
            getCellValueKey: [{ type: core.Input }],
            dragDropEvents: [{ type: core.Input }],
            viewport: [{ type: core.Input }],
            ariaLabelForListHeader: [{ type: core.Input }],
            ariaLabelForSelectAllCheckbox: [{ type: core.Input }],
            ariaLabelForSelectionColumn: [{ type: core.Input }],
            getRowAriaLabel: [{ type: core.Input }],
            getRowAriaDescribedBy: [{ type: core.Input }],
            getKey: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input }],
            checkButtonAriaLabel: [{ type: core.Input }],
            ariaLabelForGrid: [{ type: core.Input }],
            shouldApplyApplicationRole: [{ type: core.Input }],
            minimumPixelsForDrag: [{ type: core.Input }],
            compact: [{ type: core.Input }],
            usePageCache: [{ type: core.Input }],
            onShouldVirtualize: [{ type: core.Input }],
            checkboxCellClassName: [{ type: core.Input }],
            enterModalSelectionOnTouch: [{ type: core.Input }],
            columnReorderOptions: [{ type: core.Input }],
            getGroupHeight: [{ type: core.Input }],
            useReducedRowRenderer: [{ type: core.Input }],
            cellStyleProps: [{ type: core.Input }],
            disableSelectionZone: [{ type: core.Input }],
            enableUpdateAnimations: [{ type: core.Input }],
            useFastIcons: [{ type: core.Input }],
            skipViewportMeasures: [{ type: core.Input }],
            renderCheckbox: [{ type: core.Input }],
            renderDetailsFooter: [{ type: core.Input }],
            renderDetailsHeader: [{ type: core.Input }],
            renderMissingItem: [{ type: core.Input }],
            renderRow: [{ type: core.Input }],
            onActiveItemChanged: [{ type: core.Output }],
            onColumnHeaderClick: [{ type: core.Output }],
            onColumnHeaderContextMenu: [{ type: core.Output }],
            onColumnResize: [{ type: core.Output }],
            onDidUpdate: [{ type: core.Output }],
            onItemContextMenu: [{ type: core.Output }],
            onItemInvoked: [{ type: core.Output }],
            onRowDidMount: [{ type: core.Output }],
            onRowWillUnmount: [{ type: core.Output }],
            columns: [{ type: core.Input }],
            groups: [{ type: core.Input }]
        };
        return FabDetailsListComponent;
    }(core$1.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabDetailsListComponent.prototype.columnsDirective;
        /** @type {?} */
        FabDetailsListComponent.prototype.groupsDirective;
        /**
         * @type {?}
         * @protected
         */
        FabDetailsListComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDetailsListComponent.prototype.theme;
        /** @type {?} */
        FabDetailsListComponent.prototype.styles;
        /** @type {?} */
        FabDetailsListComponent.prototype.componentRef;
        /** @type {?} */
        FabDetailsListComponent.prototype.setKey;
        /** @type {?} */
        FabDetailsListComponent.prototype.items;
        /** @type {?} */
        FabDetailsListComponent.prototype.listProps;
        /** @type {?} */
        FabDetailsListComponent.prototype.initialFocusedIndex;
        /** @type {?} */
        FabDetailsListComponent.prototype.className;
        /** @type {?} */
        FabDetailsListComponent.prototype.groupProps;
        /** @type {?} */
        FabDetailsListComponent.prototype.indentWidth;
        /** @type {?} */
        FabDetailsListComponent.prototype.selection;
        /** @type {?} */
        FabDetailsListComponent.prototype.selectionMode;
        /** @type {?} */
        FabDetailsListComponent.prototype.selectionPreservedOnEmptyClick;
        /** @type {?} */
        FabDetailsListComponent.prototype.selectionZoneProps;
        /** @type {?} */
        FabDetailsListComponent.prototype.layoutMode;
        /** @type {?} */
        FabDetailsListComponent.prototype.checkboxVisibility;
        /** @type {?} */
        FabDetailsListComponent.prototype.isHeaderVisible;
        /** @type {?} */
        FabDetailsListComponent.prototype.constrainMode;
        /** @type {?} */
        FabDetailsListComponent.prototype.rowElementEventMap;
        /** @type {?} */
        FabDetailsListComponent.prototype.getCellValueKey;
        /** @type {?} */
        FabDetailsListComponent.prototype.dragDropEvents;
        /** @type {?} */
        FabDetailsListComponent.prototype.viewport;
        /** @type {?} */
        FabDetailsListComponent.prototype.ariaLabelForListHeader;
        /** @type {?} */
        FabDetailsListComponent.prototype.ariaLabelForSelectAllCheckbox;
        /** @type {?} */
        FabDetailsListComponent.prototype.ariaLabelForSelectionColumn;
        /** @type {?} */
        FabDetailsListComponent.prototype.getRowAriaLabel;
        /** @type {?} */
        FabDetailsListComponent.prototype.getRowAriaDescribedBy;
        /** @type {?} */
        FabDetailsListComponent.prototype.getKey;
        /** @type {?} */
        FabDetailsListComponent.prototype.ariaLabel;
        /** @type {?} */
        FabDetailsListComponent.prototype.checkButtonAriaLabel;
        /** @type {?} */
        FabDetailsListComponent.prototype.ariaLabelForGrid;
        /** @type {?} */
        FabDetailsListComponent.prototype.shouldApplyApplicationRole;
        /** @type {?} */
        FabDetailsListComponent.prototype.minimumPixelsForDrag;
        /** @type {?} */
        FabDetailsListComponent.prototype.compact;
        /** @type {?} */
        FabDetailsListComponent.prototype.usePageCache;
        /** @type {?} */
        FabDetailsListComponent.prototype.onShouldVirtualize;
        /** @type {?} */
        FabDetailsListComponent.prototype.checkboxCellClassName;
        /** @type {?} */
        FabDetailsListComponent.prototype.enterModalSelectionOnTouch;
        /** @type {?} */
        FabDetailsListComponent.prototype.columnReorderOptions;
        /** @type {?} */
        FabDetailsListComponent.prototype.getGroupHeight;
        /** @type {?} */
        FabDetailsListComponent.prototype.useReducedRowRenderer;
        /** @type {?} */
        FabDetailsListComponent.prototype.cellStyleProps;
        /** @type {?} */
        FabDetailsListComponent.prototype.disableSelectionZone;
        /** @type {?} */
        FabDetailsListComponent.prototype.enableUpdateAnimations;
        /** @type {?} */
        FabDetailsListComponent.prototype.useFastIcons;
        /** @type {?} */
        FabDetailsListComponent.prototype.skipViewportMeasures;
        /** @type {?} */
        FabDetailsListComponent.prototype.renderCheckbox;
        /** @type {?} */
        FabDetailsListComponent.prototype.renderDetailsFooter;
        /** @type {?} */
        FabDetailsListComponent.prototype.renderDetailsHeader;
        /** @type {?} */
        FabDetailsListComponent.prototype.renderMissingItem;
        /** @type {?} */
        FabDetailsListComponent.prototype.renderRow;
        /** @type {?} */
        FabDetailsListComponent.prototype.onActiveItemChanged;
        /** @type {?} */
        FabDetailsListComponent.prototype.onColumnHeaderClick;
        /** @type {?} */
        FabDetailsListComponent.prototype.onColumnHeaderContextMenu;
        /** @type {?} */
        FabDetailsListComponent.prototype.onColumnResize;
        /** @type {?} */
        FabDetailsListComponent.prototype.onDidUpdate;
        /** @type {?} */
        FabDetailsListComponent.prototype.onItemContextMenu;
        /** @type {?} */
        FabDetailsListComponent.prototype.onItemInvoked;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRowDidMount;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRowWillUnmount;
        /** @type {?} */
        FabDetailsListComponent.prototype.columns;
        /** @type {?} */
        FabDetailsListComponent.prototype.groups;
        /**
         * \@internal
         * @type {?}
         */
        FabDetailsListComponent.prototype.transformedColumns_;
        /** @type {?} */
        FabDetailsListComponent.prototype.transformedGroups_;
        /**
         * @type {?}
         * @private
         */
        FabDetailsListComponent.prototype._subscriptions;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRenderCheckbox;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRenderDetailsFooter;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRenderDetailsHeader;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRenderMissingItem;
        /** @type {?} */
        FabDetailsListComponent.prototype.onRenderRow;
    }
    /**
     * @record
     */
    function IMissingItemRenderContext() { }
    if (false) {
        /** @type {?|undefined} */
        IMissingItemRenderContext.prototype.index;
        /** @type {?|undefined} */
        IMissingItemRenderContext.prototype.rowProps;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [
        DetailsListColumnDirective,
        DetailsListColumnRenderDirective,
        DetailsListColumnsDirective,
        DetailsListGroupsDirective,
        FabDetailsListComponent,
    ];
    var FabDetailsListModule = /** @class */ (function () {
        function FabDetailsListModule() {
            // Add any React elements to the registry (used by the renderer).
            core$1.registerElement('DetailsList', (/**
             * @return {?}
             */
            function () { return DetailsList.DetailsList; }));
        }
        FabDetailsListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, group.FabGroupModule],
                        declarations: components,
                        exports: __spread(components, [group.FabGroupModule]),
                        schemas: [core.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDetailsListModule.ctorParameters = function () { return []; };
        return FabDetailsListModule;
    }());

    exports.DetailsListColumnDirective = DetailsListColumnDirective;
    exports.DetailsListColumnRenderDirective = DetailsListColumnRenderDirective;
    exports.DetailsListColumnsDirective = DetailsListColumnsDirective;
    exports.DetailsListGroupsDirective = DetailsListGroupsDirective;
    exports.FabDetailsListComponent = FabDetailsListComponent;
    exports.FabDetailsListModule = FabDetailsListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-details-list.umd.js.map
