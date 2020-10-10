(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('@angular/common'), require('office-ui-fabric-react/lib/Breadcrumb'), require('@angular-react/fabric/lib/components/core'), require('@angular-react/fabric/lib/utils'), require('@angular-react/fabric/lib/components/contextual-menu'), require('office-ui-fabric-react/lib/Button'), require('office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss'), require('office-ui-fabric-react/lib/Calendar'), require('office-ui-fabric-react/lib/Callout'), require('office-ui-fabric-react/lib/Checkbox'), require('office-ui-fabric-react/lib/ChoiceGroup'), require('office-ui-fabric-react/lib/ComboBox'), require('office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss'), require('office-ui-fabric-react/lib/CommandBar'), require('office-ui-fabric-react/lib/DatePicker'), require('@angular-react/fabric/lib/components/group'), require('office-ui-fabric-react/lib/DetailsList'), require('office-ui-fabric-react/lib/Dialog'), require('office-ui-fabric-react/lib/Divider'), require('office-ui-fabric-react/lib/Dropdown'), require('office-ui-fabric-react/lib/Fabric'), require('office-ui-fabric-react/lib/GroupedList'), require('office-ui-fabric-react/lib/HoverCard'), require('office-ui-fabric-react/lib/Icon'), require('office-ui-fabric-react/lib/Image'), require('office-ui-fabric-react/lib/Link'), require('office-ui-fabric-react/lib/MarqueeSelection'), require('office-ui-fabric-react/lib/MessageBar'), require('office-ui-fabric-react/lib/Modal'), require('office-ui-fabric-react/lib/Panel'), require('office-ui-fabric-react/lib/Persona'), require('office-ui-fabric-react/lib/Pivot'), require('office-ui-fabric-react/lib/SearchBox'), require('office-ui-fabric-react/lib/Shimmer'), require('office-ui-fabric-react/lib/Slider'), require('office-ui-fabric-react/lib/SpinButton'), require('office-ui-fabric-react/lib/Spinner'), require('office-ui-fabric-react/lib/TextField'), require('office-ui-fabric-react/lib/Toggle'), require('office-ui-fabric-react/lib/Tooltip'), require('office-ui-fabric-react/lib/Nav'), require('office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss'), require('office-ui-fabric-react/lib/Pickers'), require('office-ui-fabric-react'), require('office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss'), require('office-ui-fabric-react/lib/ProgressIndicator'), require('office-ui-fabric-react/lib/Rating')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric', ['exports', '@angular-react/core', '@angular/core', '@angular/common', 'office-ui-fabric-react/lib/Breadcrumb', '@angular-react/fabric/lib/components/core', '@angular-react/fabric/lib/utils', '@angular-react/fabric/lib/components/contextual-menu', 'office-ui-fabric-react/lib/Button', 'office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss', 'office-ui-fabric-react/lib/Calendar', 'office-ui-fabric-react/lib/Callout', 'office-ui-fabric-react/lib/Checkbox', 'office-ui-fabric-react/lib/ChoiceGroup', 'office-ui-fabric-react/lib/ComboBox', 'office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss', 'office-ui-fabric-react/lib/CommandBar', 'office-ui-fabric-react/lib/DatePicker', '@angular-react/fabric/lib/components/group', 'office-ui-fabric-react/lib/DetailsList', 'office-ui-fabric-react/lib/Dialog', 'office-ui-fabric-react/lib/Divider', 'office-ui-fabric-react/lib/Dropdown', 'office-ui-fabric-react/lib/Fabric', 'office-ui-fabric-react/lib/GroupedList', 'office-ui-fabric-react/lib/HoverCard', 'office-ui-fabric-react/lib/Icon', 'office-ui-fabric-react/lib/Image', 'office-ui-fabric-react/lib/Link', 'office-ui-fabric-react/lib/MarqueeSelection', 'office-ui-fabric-react/lib/MessageBar', 'office-ui-fabric-react/lib/Modal', 'office-ui-fabric-react/lib/Panel', 'office-ui-fabric-react/lib/Persona', 'office-ui-fabric-react/lib/Pivot', 'office-ui-fabric-react/lib/SearchBox', 'office-ui-fabric-react/lib/Shimmer', 'office-ui-fabric-react/lib/Slider', 'office-ui-fabric-react/lib/SpinButton', 'office-ui-fabric-react/lib/Spinner', 'office-ui-fabric-react/lib/TextField', 'office-ui-fabric-react/lib/Toggle', 'office-ui-fabric-react/lib/Tooltip', 'office-ui-fabric-react/lib/Nav', 'office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss', 'office-ui-fabric-react/lib/Pickers', 'office-ui-fabric-react', 'office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss', 'office-ui-fabric-react/lib/ProgressIndicator', 'office-ui-fabric-react/lib/Rating'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = {}), global['ɵa'], global.ng.core, global.ng.common, global.Breadcrumb, global['angular-react'].fabric.lib.components.core, global['angular-react'].fabric.lib.utils, global['angular-react'].fabric.lib.components['contextual-menu'], global.Button, global.CalendarCss, global.Calendar, global.Callout, global.Checkbox, global.ChoiceGroup, global.ComboBox, global.OverflowSetCss, global.CommandBar, global.DatePicker, global['angular-react'].fabric.lib.components.group, global.DetailsList, global.Dialog, global.Divider, global.Dropdown, global.Fabric, global.GroupedList, global.HoverCard, global.Icon, global.Image, global.Link, global.MarqueeSelection, global.MessageBar, global.Modal, global.Panel, global.Persona, global.Pivot, global.SearchBox, global.Shimmer, global.Slider, global.SpinButton, global.Spinner, global.TextField, global.Toggle, global.Tooltip, global.Nav, global.BasePickerCss, global.Pickers, global.Fabric, global.PeoplePickerItemCss, global.ProgressIndicator, global.Rating));
}(this, (function (exports, core, core$1, common, Breadcrumb, core$2, utils, contextualMenu, Button, CalendarCss, Calendar, Callout, Checkbox, ChoiceGroup, ComboBox, OverflowSetCss, CommandBar, DatePicker, group, DetailsList, Dialog, Divider, Dropdown, Fabric, GroupedList, HoverCard, Icon, Image, Link, MarqueeSelection, MessageBar, Modal, Panel, Persona, Pivot, SearchBox, Shimmer, Slider, SpinButton, Spinner, TextField, Toggle, Tooltip, Nav, BasePickerCss, Pickers, officeUiFabricReact, PeoplePickerItemCss, ProgressIndicator, Rating) { 'use strict';

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
    var FabBreadcrumbComponent = /** @class */ (function (_super) {
        __extends(FabBreadcrumbComponent, _super);
        function FabBreadcrumbComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        /**
         * @return {?}
         */
        FabBreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        };
        FabBreadcrumbComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-breadcrumb',
                        exportAs: 'fabBreadcrumb',
                        template: "\n    <Breadcrumb\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [items]=\"items\"\n      [className]=\"className\"\n      [dividerAs]=\"dividerAs\"\n      [maxDisplayedItems]=\"maxDisplayedItems\"\n      [ariaLabel]=\"ariaLabel\"\n      [overflowAriaLabel]=\"overflowAriaLabel\"\n      [overflowIndex]=\"overflowIndex\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [focusZoneProps]=\"focusZoneProps\"\n      [tooltipHostProps]=\"tooltipHostProps\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [ReduceData]=\"onReduceData\"\n    >\n    </Breadcrumb>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabBreadcrumbComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabBreadcrumbComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            items: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            dividerAs: [{ type: core$1.Input }],
            maxDisplayedItems: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            overflowAriaLabel: [{ type: core$1.Input }],
            overflowIndex: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            focusZoneProps: [{ type: core$1.Input }],
            tooltipHostProps: [{ type: core$1.Input }],
            renderItem: [{ type: core$1.Input }],
            onReduceData: [{ type: core$1.Input, args: ['reduceData',] }]
        };
        return FabBreadcrumbComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabBreadcrumbComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.componentRef;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.items;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.className;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.dividerAs;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.maxDisplayedItems;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.ariaLabel;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.overflowAriaLabel;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.overflowIndex;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.styles;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.theme;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.focusZoneProps;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.tooltipHostProps;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.renderItem;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.onReduceData;
        /** @type {?} */
        FabBreadcrumbComponent.prototype.onRenderItem;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [FabBreadcrumbComponent];
    var FabBreadcrumbModule = /** @class */ (function () {
        function FabBreadcrumbModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Breadcrumb', (/**
             * @return {?}
             */
            function () { return Breadcrumb.Breadcrumb; }));
        }
        FabBreadcrumbModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabBreadcrumbModule.ctorParameters = function () { return []; };
        return FabBreadcrumbModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var FabBaseButtonComponent = /** @class */ (function (_super) {
        __extends(FabBaseButtonComponent, _super);
        function FabBaseButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            _this.onClick = new core$1.EventEmitter();
            _this.onMenuClick = new core$1.EventEmitter();
            _this.onAfterMenuDismiss = new core$1.EventEmitter();
            _this._subscriptions = [];
            // coming from React context - we need to bind to this so we can access the Angular Component properties
            _this.onMenuClickHandler = _this.onMenuClickHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabBaseButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderIcon = this.createRenderPropHandler(this.renderIcon);
            this.onRenderText = this.createRenderPropHandler(this.renderText);
            this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
            this.onRenderAriaDescription = this.createRenderPropHandler(this.renderAriaDescription);
            this.onRenderChildren = this.createRenderPropHandler(this.renderChildren);
            this.onRenderMenuIcon = this.createRenderPropHandler(this.renderMenuIcon);
        };
        /**
         * @return {?}
         */
        FabBaseButtonComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.menuItemsDirectives && this.menuItemsDirectives.length > 0) {
                /** @type {?} */
                var setItems_1 = (/**
                 * @param {?} directiveItems
                 * @return {?}
                 */
                function (directiveItems) {
                    /** @type {?} */
                    var items = directiveItems.map((/**
                     * @param {?} directive
                     * @return {?}
                     */
                    function (directive) {
                        return _this._transformContextualMenuItemOptionsToProps(_this._directiveToContextualMenuItem(directive));
                    }));
                    if (!_this.menuProps) {
                        _this.menuProps = { items: items };
                    }
                    else {
                        _this.menuProps.items = items;
                    }
                    _this.markForCheck();
                });
                // @ts-ignore
                this._changeableItemsHelper = new core$2.ChangeableItemsHelper(this.menuItemsDirectives);
                this._subscriptions.push(this._changeableItemsHelper.onItemsChanged.subscribe((/**
                 * @param {?} newItems
                 * @return {?}
                 */
                function (newItems) {
                    setItems_1(newItems.toArray());
                })), this._changeableItemsHelper.onChildItemChanged.subscribe((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var key = _a.key, changes = _a.changes;
                    /** @type {?} */
                    var newItems = _this.menuItemsDirectives.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.key === key ? core$2.mergeItemChanges(item, changes) : item;
                    }));
                    setItems_1(newItems);
                    _this.markForCheck();
                })));
                setItems_1(this.menuItemsDirectives.toArray());
            }
            _super.prototype.ngAfterContentInit.call(this);
        };
        /**
         * @return {?}
         */
        FabBaseButtonComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._changeableItemsHelper) {
                this._changeableItemsHelper.destroy();
            }
            if (this._subscriptions) {
                this._subscriptions.forEach((/**
                 * @param {?} subscription
                 * @return {?}
                 */
                function (subscription) { return subscription.unsubscribe(); }));
            }
        };
        /**
         * @param {?=} ev
         * @param {?=} button
         * @return {?}
         */
        FabBaseButtonComponent.prototype.onMenuClickHandler = /**
         * @param {?=} ev
         * @param {?=} button
         * @return {?}
         */
        function (ev, button) {
            this.onMenuClick.emit({
                ev: ev && ev.nativeEvent,
                button: button,
            });
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabBaseButtonComponent.prototype.onClickHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onClick.emit(ev.nativeEvent);
        };
        /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        FabBaseButtonComponent.prototype._directiveToContextualMenuItem = /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            return __assign({}, utils.omit(directive, 'menuItemsDirectives', 'renderDirective', 'renderIconDirective', 'click', 'onItemChanged', 'onItemsChanged', 'onChildItemChanged', 'ngOnInit', 'ngOnChanges', 'ngOnDestroy', 'ngAfterContentInit'), utils.getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
                 * @param {?} ev
                 * @param {?} item
                 * @return {?}
                 */
                function (ev, item) {
                    directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
                }) });
        };
        /**
         * @private
         * @param {?} itemOptions
         * @return {?}
         */
        FabBaseButtonComponent.prototype._transformContextualMenuItemOptionsToProps = /**
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
                ((/** @type {?} */ ({
                    onRender: (/**
                     * @param {?} item
                     * @param {?} dismissMenu
                     * @return {?}
                     */
                    function (item, dismissMenu) { return renderer({ item: item, dismissMenu: dismissMenu }); }),
                }))))));
        };
        FabBaseButtonComponent.propDecorators = {
            componentRef: [{ type: core$1.Input }],
            href: [{ type: core$1.Input }],
            primary: [{ type: core$1.Input }],
            uniqueId: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            allowDisabledFocus: [{ type: core$1.Input }],
            primaryDisabled: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            checked: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            ariaDescription: [{ type: core$1.Input }],
            ariaHidden: [{ type: core$1.Input }],
            ariaSelected: [{ type: core$1.Input }],
            role: [{ type: core$1.Input }],
            tabIndex: [{ type: core$1.Input }],
            text: [{ type: core$1.Input }],
            iconProps: [{ type: core$1.Input }],
            menuProps: [{ type: core$1.Input }],
            split: [{ type: core$1.Input }],
            menuIconProps: [{ type: core$1.Input }],
            splitButtonAriaLabel: [{ type: core$1.Input }],
            menuAs: [{ type: core$1.Input }],
            secondaryText: [{ type: core$1.Input }],
            toggle: [{ type: core$1.Input }],
            data: [{ type: core$1.Input }],
            getClassNames: [{ type: core$1.Input }],
            getSplitButtonClassNames: [{ type: core$1.Input }],
            menuTriggerKeyCode: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            persistMenu: [{ type: core$1.Input }],
            renderIcon: [{ type: core$1.Input }],
            renderText: [{ type: core$1.Input }],
            renderDescription: [{ type: core$1.Input }],
            renderAriaDescription: [{ type: core$1.Input }],
            renderChildren: [{ type: core$1.Input }],
            renderMenuIcon: [{ type: core$1.Input }],
            onClick: [{ type: core$1.Output }],
            onMenuClick: [{ type: core$1.Output }],
            onAfterMenuDismiss: [{ type: core$1.Output }],
            menuItemsDirectives: [{ type: core$1.ContentChildren, args: [contextualMenu.ContextualMenuItemDirective,] }]
        };
        return FabBaseButtonComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabBaseButtonComponent.prototype.componentRef;
        /** @type {?} */
        FabBaseButtonComponent.prototype.href;
        /** @type {?} */
        FabBaseButtonComponent.prototype.primary;
        /** @type {?} */
        FabBaseButtonComponent.prototype.uniqueId;
        /** @type {?} */
        FabBaseButtonComponent.prototype.disabled;
        /** @type {?} */
        FabBaseButtonComponent.prototype.allowDisabledFocus;
        /** @type {?} */
        FabBaseButtonComponent.prototype.primaryDisabled;
        /** @type {?} */
        FabBaseButtonComponent.prototype.styles;
        /** @type {?} */
        FabBaseButtonComponent.prototype.theme;
        /** @type {?} */
        FabBaseButtonComponent.prototype.checked;
        /** @type {?} */
        FabBaseButtonComponent.prototype.className;
        /** @type {?} */
        FabBaseButtonComponent.prototype.ariaLabel;
        /** @type {?} */
        FabBaseButtonComponent.prototype.ariaDescription;
        /** @type {?} */
        FabBaseButtonComponent.prototype.ariaHidden;
        /** @type {?} */
        FabBaseButtonComponent.prototype.ariaSelected;
        /** @type {?} */
        FabBaseButtonComponent.prototype.role;
        /** @type {?} */
        FabBaseButtonComponent.prototype.tabIndex;
        /** @type {?} */
        FabBaseButtonComponent.prototype.text;
        /** @type {?} */
        FabBaseButtonComponent.prototype.iconProps;
        /** @type {?} */
        FabBaseButtonComponent.prototype.menuProps;
        /** @type {?} */
        FabBaseButtonComponent.prototype.split;
        /** @type {?} */
        FabBaseButtonComponent.prototype.menuIconProps;
        /** @type {?} */
        FabBaseButtonComponent.prototype.splitButtonAriaLabel;
        /** @type {?} */
        FabBaseButtonComponent.prototype.menuAs;
        /** @type {?} */
        FabBaseButtonComponent.prototype.secondaryText;
        /** @type {?} */
        FabBaseButtonComponent.prototype.toggle;
        /** @type {?} */
        FabBaseButtonComponent.prototype.data;
        /** @type {?} */
        FabBaseButtonComponent.prototype.getClassNames;
        /** @type {?} */
        FabBaseButtonComponent.prototype.getSplitButtonClassNames;
        /** @type {?} */
        FabBaseButtonComponent.prototype.menuTriggerKeyCode;
        /** @type {?} */
        FabBaseButtonComponent.prototype.keytipProps;
        /** @type {?} */
        FabBaseButtonComponent.prototype.persistMenu;
        /** @type {?} */
        FabBaseButtonComponent.prototype.renderIcon;
        /** @type {?} */
        FabBaseButtonComponent.prototype.renderText;
        /** @type {?} */
        FabBaseButtonComponent.prototype.renderDescription;
        /** @type {?} */
        FabBaseButtonComponent.prototype.renderAriaDescription;
        /** @type {?} */
        FabBaseButtonComponent.prototype.renderChildren;
        /** @type {?} */
        FabBaseButtonComponent.prototype.renderMenuIcon;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onClick;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onMenuClick;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onAfterMenuDismiss;
        /** @type {?} */
        FabBaseButtonComponent.prototype.menuItemsDirectives;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onRenderIcon;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onRenderText;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onRenderDescription;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onRenderAriaDescription;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onRenderChildren;
        /** @type {?} */
        FabBaseButtonComponent.prototype.onRenderMenuIcon;
        /**
         * @type {?}
         * @private
         */
        FabBaseButtonComponent.prototype._changeableItemsHelper;
        /**
         * @type {?}
         * @private
         */
        FabBaseButtonComponent.prototype._subscriptions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabActionButtonComponent = /** @class */ (function (_super) {
        __extends(FabActionButtonComponent, _super);
        function FabActionButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabActionButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-action-button',
                        exportAs: 'fabActionButton',
                        template: "\n    <ActionButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ActionButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabActionButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabActionButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabActionButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabActionButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabCommandBarButtonComponent = /** @class */ (function (_super) {
        __extends(FabCommandBarButtonComponent, _super);
        function FabCommandBarButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabCommandBarButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-command-bar-button',
                        exportAs: 'fabCommandBarButton',
                        template: "\n    <CommandBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CommandBarButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCommandBarButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabCommandBarButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabCommandBarButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabCommandBarButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabCompoundButtonComponent = /** @class */ (function (_super) {
        __extends(FabCompoundButtonComponent, _super);
        function FabCompoundButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabCompoundButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-compound-button',
                        exportAs: 'fabCompoundButton',
                        template: "\n    <CompoundButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CompoundButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCompoundButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabCompoundButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabCompoundButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabCompoundButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabDefaultButtonComponent = /** @class */ (function (_super) {
        __extends(FabDefaultButtonComponent, _super);
        function FabDefaultButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabDefaultButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-default-button',
                        exportAs: 'fabDefaultButton',
                        template: "\n    <DefaultButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DefaultButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDefaultButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabDefaultButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabDefaultButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDefaultButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabIconButtonComponent = /** @class */ (function (_super) {
        __extends(FabIconButtonComponent, _super);
        function FabIconButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabIconButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-icon-button',
                        exportAs: 'fabIconButton',
                        template: "\n    <IconButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </IconButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabIconButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabIconButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabIconButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabIconButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabMessageBarButtonComponent = /** @class */ (function (_super) {
        __extends(FabMessageBarButtonComponent, _super);
        function FabMessageBarButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabMessageBarButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-messagebar-button',
                        exportAs: 'fabMessageBarButton',
                        template: "\n    <MessageBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBarButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabMessageBarButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabMessageBarButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabMessageBarButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabMessageBarButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabPrimaryButtonComponent = /** @class */ (function (_super) {
        __extends(FabPrimaryButtonComponent, _super);
        function FabPrimaryButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabPrimaryButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-primary-button',
                        exportAs: 'fabPrimaryButton',
                        template: "\n    <PrimaryButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PrimaryButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPrimaryButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPrimaryButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabPrimaryButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPrimaryButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabSplitButtonComponent = /** @class */ (function (_super) {
        __extends(FabSplitButtonComponent, _super);
        function FabSplitButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabSplitButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-split-button',
                        exportAs: 'fabSplitButton',
                        template: "\n    <SplitButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </SplitButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabSplitButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabSplitButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabSplitButtonComponent;
    }(FabBaseButtonComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabSplitButtonComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$1 = [
        FabDefaultButtonComponent,
        FabActionButtonComponent,
        FabCommandBarButtonComponent,
        FabCompoundButtonComponent,
        FabIconButtonComponent,
        FabMessageBarButtonComponent,
        FabPrimaryButtonComponent,
        FabSplitButtonComponent,
    ];
    var FabButtonModule = /** @class */ (function () {
        function FabButtonModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('DefaultButton', (/**
             * @return {?}
             */
            function () { return Button.DefaultButton; }));
            core.registerElement('ActionButton', (/**
             * @return {?}
             */
            function () { return Button.ActionButton; }));
            core.registerElement('CommandBarButton', (/**
             * @return {?}
             */
            function () { return Button.CommandBarButton; }));
            core.registerElement('CompoundButton', (/**
             * @return {?}
             */
            function () { return Button.CompoundButton; }));
            core.registerElement('IconButton', (/**
             * @return {?}
             */
            function () { return Button.IconButton; }));
            core.registerElement('MessageBarButton', (/**
             * @return {?}
             */
            function () { return Button.MessageBarButton; }));
            core.registerElement('PrimaryButton', (/**
             * @return {?}
             */
            function () { return Button.PrimaryButton; }));
        }
        FabButtonModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$1,
                        exports: components$1,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabButtonModule.ctorParameters = function () { return []; };
        return FabButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for calendar strings
     */
    var CalendarStringsDirective = /** @class */ (function () {
        function CalendarStringsDirective() {
        }
        Object.defineProperty(CalendarStringsDirective.prototype, "strings", {
            get: /**
             * @return {?}
             */
            function () {
                return {
                    months: this.months,
                    shortMonths: this.shortMonths,
                    days: this.days,
                    shortDays: this.shortDays,
                    goToToday: this.goToToday,
                    prevMonthAriaLabel: this.prevMonthAriaLabel,
                    nextMonthAriaLabel: this.nextMonthAriaLabel,
                    prevYearAriaLabel: this.prevYearAriaLabel,
                    nextYearAriaLabel: this.nextYearAriaLabel,
                    prevYearRangeAriaLabel: this.prevYearRangeAriaLabel,
                    nextYearRangeAriaLabel: this.nextYearRangeAriaLabel,
                    closeButtonAriaLabel: this.closeButtonAriaLabel,
                    weekNumberFormatString: this.weekNumberFormatString
                };
            },
            enumerable: true,
            configurable: true
        });
        CalendarStringsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-calendar > fab-calendar-strings' },] }
        ];
        CalendarStringsDirective.propDecorators = {
            months: [{ type: core$1.Input }],
            shortMonths: [{ type: core$1.Input }],
            days: [{ type: core$1.Input }],
            shortDays: [{ type: core$1.Input }],
            goToToday: [{ type: core$1.Input }],
            prevMonthAriaLabel: [{ type: core$1.Input }],
            nextMonthAriaLabel: [{ type: core$1.Input }],
            prevYearAriaLabel: [{ type: core$1.Input }],
            nextYearAriaLabel: [{ type: core$1.Input }],
            prevYearRangeAriaLabel: [{ type: core$1.Input }],
            nextYearRangeAriaLabel: [{ type: core$1.Input }],
            closeButtonAriaLabel: [{ type: core$1.Input }],
            weekNumberFormatString: [{ type: core$1.Input }]
        };
        return CalendarStringsDirective;
    }());
    if (false) {
        /** @type {?} */
        CalendarStringsDirective.prototype.months;
        /** @type {?} */
        CalendarStringsDirective.prototype.shortMonths;
        /** @type {?} */
        CalendarStringsDirective.prototype.days;
        /** @type {?} */
        CalendarStringsDirective.prototype.shortDays;
        /** @type {?} */
        CalendarStringsDirective.prototype.goToToday;
        /** @type {?} */
        CalendarStringsDirective.prototype.prevMonthAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.nextMonthAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.prevYearAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.nextYearAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.prevYearRangeAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.nextYearRangeAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.closeButtonAriaLabel;
        /** @type {?} */
        CalendarStringsDirective.prototype.weekNumberFormatString;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabCalendarComponent = /** @class */ (function (_super) {
        __extends(FabCalendarComponent, _super);
        function FabCalendarComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onSelectDate = new core$1.EventEmitter();
            _this.onDismiss = new core$1.EventEmitter();
            // coming from React context - we need to bind to this so we can access the Angular Component properties
            _this.onSelectDateHandler = _this.onSelectDateHandler.bind(_this);
            _this.onDismissHandler = _this.onDismissHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabCalendarComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.calendarStringsDirective) {
                this._initDirective(this.calendarStringsDirective);
                _super.prototype.ngAfterContentInit.call(this);
            }
        };
        /**
         * @param {?} date
         * @param {?=} selectedDateRangeArray
         * @return {?}
         */
        FabCalendarComponent.prototype.onSelectDateHandler = /**
         * @param {?} date
         * @param {?=} selectedDateRangeArray
         * @return {?}
         */
        function (date, selectedDateRangeArray) {
            this.onSelectDate.emit({
                date: date,
                selectedDateRangeArray: selectedDateRangeArray,
            });
        };
        /**
         * @return {?}
         */
        FabCalendarComponent.prototype.onDismissHandler = /**
         * @return {?}
         */
        function () {
            this.onDismiss.emit();
        };
        /**
         * @private
         * @param {?} calendarStringsDirective
         * @return {?}
         */
        FabCalendarComponent.prototype._initDirective = /**
         * @private
         * @param {?} calendarStringsDirective
         * @return {?}
         */
        function (calendarStringsDirective) {
            this.strings = calendarStringsDirective.strings;
        };
        FabCalendarComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-calendar',
                        exportAs: 'fabCalendar',
                        template: "\n    <Calendar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [isMonthPickerVisible]=\"isMonthPickerVisible\"\n      [isDayPickerVisible]=\"isDayPickerVisible\"\n      [showMonthPickerAsOverlay]=\"showMonthPickerAsOverlay\"\n      [today]=\"today\"\n      [value]=\"value\"\n      [firstDayOfWeek]=\"firstDayOfWeek\"\n      [dateRangeType]=\"dateRangeType\"\n      [autoNavigateOnSelection]=\"autoNavigateOnSelection\"\n      [showGoToToday]=\"showGoToToday\"\n      [strings]=\"strings\"\n      [highlightCurrentMonth]=\"highlightCurrentMonth\"\n      [highlightSelectedMonth]=\"highlightSelectedMonth\"\n      [navigationIcons]=\"navigationIcons\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [firstWeekOfYear]=\"firstWeekOfYear\"\n      [dateTimeFormatter]=\"dateTimeFormatter\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [maxDate]=\"restrictedDates\"\n      [restrictedDates]=\"restrictedDates\"\n      [showSixWeeksByDefault]=\"showSixWeeksByDefault\"\n      [workWeekDays]=\"workWeekDays\"\n      [selectDateOnClick]=\"selectDateOnClick\"\n      [showCloseButton]=\"showCloseButton\"\n      [allFocusable]=\"allFocusable\"\n      [yearPickerHidden]=\"yearPickerHidden\"\n      [SelectDate]=\"onSelectDateHandler\"\n      [Dismiss]=\"onDismissHandler\"\n    >\n    </Calendar>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCalendarComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabCalendarComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            isMonthPickerVisible: [{ type: core$1.Input }],
            isDayPickerVisible: [{ type: core$1.Input }],
            showMonthPickerAsOverlay: [{ type: core$1.Input }],
            today: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            firstDayOfWeek: [{ type: core$1.Input }],
            dateRangeType: [{ type: core$1.Input }],
            autoNavigateOnSelection: [{ type: core$1.Input }],
            showGoToToday: [{ type: core$1.Input }],
            strings: [{ type: core$1.Input }],
            highlightCurrentMonth: [{ type: core$1.Input }],
            highlightSelectedMonth: [{ type: core$1.Input }],
            navigationIcons: [{ type: core$1.Input }],
            showWeekNumbers: [{ type: core$1.Input }],
            firstWeekOfYear: [{ type: core$1.Input }],
            dateTimeFormatter: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            restrictedDates: [{ type: core$1.Input }],
            showSixWeeksByDefault: [{ type: core$1.Input }],
            workWeekDays: [{ type: core$1.Input }],
            selectDateOnClick: [{ type: core$1.Input }],
            showCloseButton: [{ type: core$1.Input }],
            allFocusable: [{ type: core$1.Input }],
            yearPickerHidden: [{ type: core$1.Input }],
            onSelectDate: [{ type: core$1.Output }],
            onDismiss: [{ type: core$1.Output }],
            calendarStringsDirective: [{ type: core$1.ContentChild, args: [CalendarStringsDirective, { static: true },] }]
        };
        return FabCalendarComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabCalendarComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabCalendarComponent.prototype.componentRef;
        /** @type {?} */
        FabCalendarComponent.prototype.className;
        /** @type {?} */
        FabCalendarComponent.prototype.isMonthPickerVisible;
        /** @type {?} */
        FabCalendarComponent.prototype.isDayPickerVisible;
        /** @type {?} */
        FabCalendarComponent.prototype.showMonthPickerAsOverlay;
        /** @type {?} */
        FabCalendarComponent.prototype.today;
        /** @type {?} */
        FabCalendarComponent.prototype.value;
        /** @type {?} */
        FabCalendarComponent.prototype.firstDayOfWeek;
        /** @type {?} */
        FabCalendarComponent.prototype.dateRangeType;
        /** @type {?} */
        FabCalendarComponent.prototype.autoNavigateOnSelection;
        /** @type {?} */
        FabCalendarComponent.prototype.showGoToToday;
        /** @type {?} */
        FabCalendarComponent.prototype.strings;
        /** @type {?} */
        FabCalendarComponent.prototype.highlightCurrentMonth;
        /** @type {?} */
        FabCalendarComponent.prototype.highlightSelectedMonth;
        /** @type {?} */
        FabCalendarComponent.prototype.navigationIcons;
        /** @type {?} */
        FabCalendarComponent.prototype.showWeekNumbers;
        /** @type {?} */
        FabCalendarComponent.prototype.firstWeekOfYear;
        /** @type {?} */
        FabCalendarComponent.prototype.dateTimeFormatter;
        /** @type {?} */
        FabCalendarComponent.prototype.minDate;
        /** @type {?} */
        FabCalendarComponent.prototype.maxDate;
        /** @type {?} */
        FabCalendarComponent.prototype.restrictedDates;
        /** @type {?} */
        FabCalendarComponent.prototype.showSixWeeksByDefault;
        /** @type {?} */
        FabCalendarComponent.prototype.workWeekDays;
        /** @type {?} */
        FabCalendarComponent.prototype.selectDateOnClick;
        /** @type {?} */
        FabCalendarComponent.prototype.showCloseButton;
        /** @type {?} */
        FabCalendarComponent.prototype.allFocusable;
        /** @type {?} */
        FabCalendarComponent.prototype.yearPickerHidden;
        /** @type {?} */
        FabCalendarComponent.prototype.onSelectDate;
        /** @type {?} */
        FabCalendarComponent.prototype.onDismiss;
        /** @type {?} */
        FabCalendarComponent.prototype.calendarStringsDirective;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Dummy action to force CalendarCss to load and not be tree-shaken away.
    utils.noop(CalendarCss);
    /** @type {?} */
    var declarations = [FabCalendarComponent, CalendarStringsDirective];
    var FabCalendarModule = /** @class */ (function () {
        function FabCalendarModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Calendar', (/**
             * @return {?}
             */
            function () { return Calendar.Calendar; }));
        }
        FabCalendarModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: declarations,
                        exports: declarations,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabCalendarModule.ctorParameters = function () { return []; };
        return FabCalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabCalloutComponent = /** @class */ (function (_super) {
        __extends(FabCalloutComponent, _super);
        function FabCalloutComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onLayerMounted = new core$1.EventEmitter();
            _this.onPositioned = new core$1.EventEmitter();
            _this.onDismiss = new core$1.EventEmitter();
            _this.onScroll = new core$1.EventEmitter();
            return _this;
        }
        FabCalloutComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-callout',
                        exportAs: 'fabCallout',
                        template: "\n    <Callout\n      #reactNode\n      [target]=\"target\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [gapSpace]=\"gapSpace\"\n      [beakWidth]=\"beakWidth\"\n      [calloutWidth]=\"calloutWidth\"\n      [backgroundColor]=\"backgroundColor\"\n      [bounds]=\"bounds\"\n      [minPagePadding]=\"minPagePadding\"\n      [isBeakVisible]=\"isBeakVisible\"\n      [preventDismissOnScroll]=\"preventDismissOnScroll\"\n      [preventDismissOnResize]=\"preventDismissOnResize\"\n      [preventDismissOnLostFocus]=\"preventDismissOnLostFocus\"\n      [coverTarget]=\"coverTarget\"\n      [alignTargetEdge]=\"alignTargetEdge\"\n      [role]=\"role\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [className]=\"className\"\n      [layerProps]=\"layerProps\"\n      [doNotLayer]=\"doNotLayer\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [finalHeight]=\"finalHeight\"\n      [hideOverflow]=\"hideOverflow\"\n      [setInitialFocus]=\"setInitialFocus\"\n      [calloutMaxHeight]=\"calloutMaxHeight\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [hidden]=\"hidden\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      (onLayerMounted)=\"onLayerMounted.emit()\"\n      (onPositioned)=\"onPositioned.emit($event)\"\n      (onDismiss)=\"onDismiss.emit($event)\"\n      (onScroll)=\"onScroll.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Callout>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCalloutComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabCalloutComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            target: [{ type: core$1.Input }],
            directionalHint: [{ type: core$1.Input }],
            directionalHintForRTL: [{ type: core$1.Input }],
            gapSpace: [{ type: core$1.Input }],
            beakWidth: [{ type: core$1.Input }],
            calloutWidth: [{ type: core$1.Input }],
            backgroundColor: [{ type: core$1.Input }],
            bounds: [{ type: core$1.Input }],
            minPagePadding: [{ type: core$1.Input }],
            isBeakVisible: [{ type: core$1.Input }],
            preventDismissOnScroll: [{ type: core$1.Input }],
            preventDismissOnResize: [{ type: core$1.Input }],
            preventDismissOnLostFocus: [{ type: core$1.Input }],
            coverTarget: [{ type: core$1.Input }],
            alignTargetEdge: [{ type: core$1.Input }],
            role: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            ariaLabelledBy: [{ type: core$1.Input }],
            ariaDescribedBy: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            layerProps: [{ type: core$1.Input }],
            doNotLayer: [{ type: core$1.Input }],
            directionalHintFixed: [{ type: core$1.Input }],
            finalHeight: [{ type: core$1.Input }],
            hideOverflow: [{ type: core$1.Input }],
            setInitialFocus: [{ type: core$1.Input }],
            calloutMaxHeight: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            hidden: [{ type: core$1.Input }],
            shouldRestoreFocus: [{ type: core$1.Input }],
            onLayerMounted: [{ type: core$1.Output }],
            onPositioned: [{ type: core$1.Output }],
            onDismiss: [{ type: core$1.Output }],
            onScroll: [{ type: core$1.Output }]
        };
        return FabCalloutComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabCalloutComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabCalloutComponent.prototype.target;
        /** @type {?} */
        FabCalloutComponent.prototype.directionalHint;
        /** @type {?} */
        FabCalloutComponent.prototype.directionalHintForRTL;
        /** @type {?} */
        FabCalloutComponent.prototype.gapSpace;
        /** @type {?} */
        FabCalloutComponent.prototype.beakWidth;
        /** @type {?} */
        FabCalloutComponent.prototype.calloutWidth;
        /** @type {?} */
        FabCalloutComponent.prototype.backgroundColor;
        /** @type {?} */
        FabCalloutComponent.prototype.bounds;
        /** @type {?} */
        FabCalloutComponent.prototype.minPagePadding;
        /** @type {?} */
        FabCalloutComponent.prototype.isBeakVisible;
        /** @type {?} */
        FabCalloutComponent.prototype.preventDismissOnScroll;
        /** @type {?} */
        FabCalloutComponent.prototype.preventDismissOnResize;
        /** @type {?} */
        FabCalloutComponent.prototype.preventDismissOnLostFocus;
        /** @type {?} */
        FabCalloutComponent.prototype.coverTarget;
        /** @type {?} */
        FabCalloutComponent.prototype.alignTargetEdge;
        /** @type {?} */
        FabCalloutComponent.prototype.role;
        /** @type {?} */
        FabCalloutComponent.prototype.ariaLabel;
        /** @type {?} */
        FabCalloutComponent.prototype.ariaLabelledBy;
        /** @type {?} */
        FabCalloutComponent.prototype.ariaDescribedBy;
        /** @type {?} */
        FabCalloutComponent.prototype.className;
        /** @type {?} */
        FabCalloutComponent.prototype.layerProps;
        /** @type {?} */
        FabCalloutComponent.prototype.doNotLayer;
        /** @type {?} */
        FabCalloutComponent.prototype.directionalHintFixed;
        /** @type {?} */
        FabCalloutComponent.prototype.finalHeight;
        /** @type {?} */
        FabCalloutComponent.prototype.hideOverflow;
        /** @type {?} */
        FabCalloutComponent.prototype.setInitialFocus;
        /** @type {?} */
        FabCalloutComponent.prototype.calloutMaxHeight;
        /** @type {?} */
        FabCalloutComponent.prototype.theme;
        /** @type {?} */
        FabCalloutComponent.prototype.styles;
        /** @type {?} */
        FabCalloutComponent.prototype.hidden;
        /** @type {?} */
        FabCalloutComponent.prototype.shouldRestoreFocus;
        /** @type {?} */
        FabCalloutComponent.prototype.onLayerMounted;
        /** @type {?} */
        FabCalloutComponent.prototype.onPositioned;
        /** @type {?} */
        FabCalloutComponent.prototype.onDismiss;
        /** @type {?} */
        FabCalloutComponent.prototype.onScroll;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$2 = [FabCalloutComponent];
    var FabCalloutModule = /** @class */ (function () {
        function FabCalloutModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Callout', (/**
             * @return {?}
             */
            function () { return Callout.Callout; }));
            core.registerElement('FocusTrapCallout', (/**
             * @return {?}
             */
            function () { return Callout.FocusTrapCallout; }));
        }
        FabCalloutModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$2,
                        exports: components$2,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabCalloutModule.ctorParameters = function () { return []; };
        return FabCalloutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabCheckboxComponent = /** @class */ (function (_super) {
        __extends(FabCheckboxComponent, _super);
        function FabCheckboxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onChange = new core$1.EventEmitter();
            /* Non-React props, more native support for Angular */
            // support for two-way data binding for `@Input() checked`.
            _this.checkedChange = new core$1.EventEmitter();
            // coming from React context - we need to bind to this so we can access the Angular Component properties
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabCheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
        };
        /**
         * @param {?=} ev
         * @param {?=} checked
         * @return {?}
         */
        FabCheckboxComponent.prototype.onChangeHandler = /**
         * @param {?=} ev
         * @param {?=} checked
         * @return {?}
         */
        function (ev, checked) {
            this.onChange.emit({
                ev: ev && ev.nativeEvent,
                checked: checked,
            });
            this.checkedChange.emit(checked);
        };
        FabCheckboxComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-checkbox',
                        exportAs: 'fabCheckbox',
                        template: "\n    <Checkbox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [label]=\"label\"\n      [disabled]=\"disabled\"\n      [inputProps]=\"inputProps\"\n      [boxSide]=\"boxSide\"\n      [theme]=\"theme\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [checkmarkIconProps]=\"checkmarkIconProps\"\n      [keytipProps]=\"keytipProps\"\n      [styles]=\"styles\"\n      [RenderLabel]=\"renderLabel && onRenderLabel\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Checkbox>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCheckboxComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabCheckboxComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            checked: [{ type: core$1.Input }],
            defaultChecked: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            inputProps: [{ type: core$1.Input }],
            boxSide: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            ariaLabelledBy: [{ type: core$1.Input }],
            ariaDescribedBy: [{ type: core$1.Input }],
            ariaPositionInSet: [{ type: core$1.Input }],
            ariaSetSize: [{ type: core$1.Input }],
            checkmarkIconProps: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            renderLabel: [{ type: core$1.Input }],
            onChange: [{ type: core$1.Output }],
            checkedChange: [{ type: core$1.Output }]
        };
        return FabCheckboxComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabCheckboxComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabCheckboxComponent.prototype.componentRef;
        /** @type {?} */
        FabCheckboxComponent.prototype.className;
        /** @type {?} */
        FabCheckboxComponent.prototype.checked;
        /** @type {?} */
        FabCheckboxComponent.prototype.defaultChecked;
        /** @type {?} */
        FabCheckboxComponent.prototype.label;
        /** @type {?} */
        FabCheckboxComponent.prototype.disabled;
        /** @type {?} */
        FabCheckboxComponent.prototype.inputProps;
        /** @type {?} */
        FabCheckboxComponent.prototype.boxSide;
        /** @type {?} */
        FabCheckboxComponent.prototype.theme;
        /** @type {?} */
        FabCheckboxComponent.prototype.ariaLabel;
        /** @type {?} */
        FabCheckboxComponent.prototype.ariaLabelledBy;
        /** @type {?} */
        FabCheckboxComponent.prototype.ariaDescribedBy;
        /** @type {?} */
        FabCheckboxComponent.prototype.ariaPositionInSet;
        /** @type {?} */
        FabCheckboxComponent.prototype.ariaSetSize;
        /** @type {?} */
        FabCheckboxComponent.prototype.checkmarkIconProps;
        /** @type {?} */
        FabCheckboxComponent.prototype.keytipProps;
        /** @type {?} */
        FabCheckboxComponent.prototype.styles;
        /** @type {?} */
        FabCheckboxComponent.prototype.renderLabel;
        /** @type {?} */
        FabCheckboxComponent.prototype.onChange;
        /** @type {?} */
        FabCheckboxComponent.prototype.checkedChange;
        /** @type {?} */
        FabCheckboxComponent.prototype.onRenderLabel;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$3 = [FabCheckboxComponent];
    var FabCheckboxModule = /** @class */ (function () {
        function FabCheckboxModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Checkbox', (/**
             * @return {?}
             */
            function () { return Checkbox.Checkbox; }));
        }
        FabCheckboxModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$3,
                        exports: components$3,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabCheckboxModule.ctorParameters = function () { return []; };
        return FabCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabChoiceGroupComponent = /** @class */ (function (_super) {
        __extends(FabChoiceGroupComponent, _super);
        function FabChoiceGroupComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onChanged = new core$1.EventEmitter();
            _this.onChange = new core$1.EventEmitter();
            _this.onChangedHandler = _this.onChangedHandler.bind(_this);
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?} option
         * @param {?=} evt
         * @return {?}
         */
        FabChoiceGroupComponent.prototype.onChangedHandler = /**
         * @param {?} option
         * @param {?=} evt
         * @return {?}
         */
        function (option, evt) {
            this.onChanged.emit({
                option: option,
                evt: evt && evt.nativeEvent,
            });
        };
        /**
         * @param {?=} ev
         * @param {?=} option
         * @return {?}
         */
        FabChoiceGroupComponent.prototype.onChangeHandler = /**
         * @param {?=} ev
         * @param {?=} option
         * @return {?}
         */
        function (ev, option) {
            this.onChange.emit({
                ev: ev && ev.nativeEvent,
                option: option,
            });
        };
        FabChoiceGroupComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-choice-group',
                        exportAs: 'fabChoiceGroup',
                        template: "\n    <ChoiceGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [label]=\"label\"\n      [required]=\"required\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [Changed]=\"onChangedHandler\"\n      [Change]=\"onChangeHandler\"\n    >\n    </ChoiceGroup>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabChoiceGroupComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabChoiceGroupComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            options: [{ type: core$1.Input }],
            defaultSelectedKey: [{ type: core$1.Input }],
            selectedKey: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            ariaLabelledBy: [{ type: core$1.Input }],
            required: [{ type: core$1.Input }],
            onChanged: [{ type: core$1.Output }],
            onChange: [{ type: core$1.Output }]
        };
        return FabChoiceGroupComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabChoiceGroupComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.componentRef;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.options;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.defaultSelectedKey;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.selectedKey;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.label;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.theme;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.styles;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.ariaLabelledBy;
        /**
         * HTML Input props
         * @type {?}
         */
        FabChoiceGroupComponent.prototype.required;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.onChanged;
        /** @type {?} */
        FabChoiceGroupComponent.prototype.onChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$4 = [FabChoiceGroupComponent];
    var FabChoiceGroupModule = /** @class */ (function () {
        function FabChoiceGroupModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('ChoiceGroup', (/**
             * @return {?}
             */
            function () { return ChoiceGroup.ChoiceGroup; }));
        }
        FabChoiceGroupModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$4,
                        exports: components$4,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabChoiceGroupModule.ctorParameters = function () { return []; };
        return FabChoiceGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for creating a ComboBoxOption
     * \@paramName optionKey Binds to React 'key' property.
     *                      Name change necessary because key is a reserved attribute in the wrapper component.
     */
    var ComboBoxOptionDirective = /** @class */ (function () {
        function ComboBoxOptionDirective() {
        }
        ComboBoxOptionDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-combo-box-option' },] }
        ];
        ComboBoxOptionDirective.propDecorators = {
            optionKey: [{ type: core$1.Input }],
            text: [{ type: core$1.Input }],
            title: [{ type: core$1.Input }],
            itemType: [{ type: core$1.Input }],
            index: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            data: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            useAriaLabelAsText: [{ type: core$1.Input }]
        };
        return ComboBoxOptionDirective;
    }());
    if (false) {
        /** @type {?} */
        ComboBoxOptionDirective.prototype.optionKey;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.text;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.title;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.itemType;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.index;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.ariaLabel;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.selected;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.disabled;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.data;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.styles;
        /** @type {?} */
        ComboBoxOptionDirective.prototype.useAriaLabelAsText;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for creating multiple ComboBoxOptions
     * Note that if you use this, it will override the imperative [options] binding.
     */
    var ComboBoxOptionsDirective = /** @class */ (function () {
        function ComboBoxOptionsDirective() {
        }
        Object.defineProperty(ComboBoxOptionsDirective.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this.directiveItems.map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var optionKey = _a.optionKey, otherDirectiveProps = __rest(_a, ["optionKey"]);
                    return (__assign({ key: optionKey }, otherDirectiveProps));
                }));
            },
            enumerable: true,
            configurable: true
        });
        ComboBoxOptionsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-combo-box > options' },] }
        ];
        ComboBoxOptionsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [ComboBoxOptionDirective,] }]
        };
        return ComboBoxOptionsDirective;
    }());
    if (false) {
        /** @type {?} */
        ComboBoxOptionsDirective.prototype.directiveItems;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var FabBaseComboBoxComponent = /** @class */ (function (_super) {
        __extends(FabBaseComboBoxComponent, _super);
        function FabBaseComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onItemClick = new core$1.EventEmitter();
            _this.onChange = new core$1.EventEmitter();
            _this.onPendingValueChanged = new core$1.EventEmitter();
            _this.onMenuOpen = new core$1.EventEmitter();
            _this.onMenuDismissed = new core$1.EventEmitter();
            _this.onMenuDismiss = new core$1.EventEmitter();
            _this.onScrollToItem = new core$1.EventEmitter();
            // coming from React context - we need to bind to this so we can access the Angular Component properties
            _this.onItemClickHandler = _this.onItemClickHandler.bind(_this);
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            _this.onPendingValueChangedHandler = _this.onPendingValueChangedHandler.bind(_this);
            _this.onScrollToItemHandler = _this.onScrollToItemHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderLowerContent = this.createRenderPropHandler(this.renderLowerContent);
        };
        /**
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.comboBoxOptionsDirective) {
                this._initDirective(this.comboBoxOptionsDirective);
            }
            _super.prototype.ngAfterContentInit.call(this);
        };
        /**
         * @param {?} event
         * @param {?=} option
         * @param {?=} index
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype.onItemClickHandler = /**
         * @param {?} event
         * @param {?=} option
         * @param {?=} index
         * @return {?}
         */
        function (event, option, index) {
            this.onItemClick.emit({
                event: event.nativeEvent,
                option: option,
                index: index,
            });
        };
        /**
         * @param {?} event
         * @param {?=} option
         * @param {?=} index
         * @param {?=} value
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype.onChangeHandler = /**
         * @param {?} event
         * @param {?=} option
         * @param {?=} index
         * @param {?=} value
         * @return {?}
         */
        function (event, option, index, value) {
            this.onChange.emit({
                event: event.nativeEvent,
                option: option,
                index: index,
                value: value,
            });
        };
        /**
         * @param {?=} option
         * @param {?=} index
         * @param {?=} value
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype.onPendingValueChangedHandler = /**
         * @param {?=} option
         * @param {?=} index
         * @param {?=} value
         * @return {?}
         */
        function (option, index, value) {
            this.onPendingValueChanged.emit({
                option: option,
                index: index,
                value: value,
            });
        };
        /**
         * @param {?} itemIndex
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype.onScrollToItemHandler = /**
         * @param {?} itemIndex
         * @return {?}
         */
        function (itemIndex) {
            this.onScrollToItem.emit({
                itemIndex: itemIndex,
            });
        };
        /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        FabBaseComboBoxComponent.prototype._initDirective = /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            this.options = directive.items;
            this.markForCheck();
        };
        FabBaseComboBoxComponent.propDecorators = {
            componentRef: [{ type: core$1.Input }],
            options: [{ type: core$1.Input }],
            allowFreeform: [{ type: core$1.Input }],
            autoComplete: [{ type: core$1.Input }],
            text: [{ type: core$1.Input }],
            buttonIconProps: [{ type: core$1.Input }],
            autofill: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            getClassNames: [{ type: core$1.Input }],
            caretDownButtonStyles: [{ type: core$1.Input }],
            comboBoxOptionStyles: [{ type: core$1.Input }],
            scrollSelectedToTop: [{ type: core$1.Input }],
            dropdownWidth: [{ type: core$1.Input }],
            useComboBoxAsMenuWidth: [{ type: core$1.Input }],
            multiSelect: [{ type: core$1.Input }],
            isButtonAriaHidden: [{ type: core$1.Input }],
            ariaDescribedBy: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            persistMenu: [{ type: core$1.Input }],
            shouldRestoreFocus: [{ type: core$1.Input }],
            resolveOptions: [{ type: core$1.Input }],
            renderLowerContent: [{ type: core$1.Input }],
            onItemClick: [{ type: core$1.Output }],
            onChange: [{ type: core$1.Output }],
            onPendingValueChanged: [{ type: core$1.Output }],
            onMenuOpen: [{ type: core$1.Output }],
            onMenuDismissed: [{ type: core$1.Output }],
            onMenuDismiss: [{ type: core$1.Output }],
            onScrollToItem: [{ type: core$1.Output }],
            comboBoxOptionsDirective: [{ type: core$1.ContentChild, args: [ComboBoxOptionsDirective, { static: true },] }]
        };
        return FabBaseComboBoxComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.componentRef;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.options;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.allowFreeform;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.autoComplete;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.text;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.buttonIconProps;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.autofill;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.theme;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.styles;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.getClassNames;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.caretDownButtonStyles;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.comboBoxOptionStyles;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.scrollSelectedToTop;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.dropdownWidth;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.useComboBoxAsMenuWidth;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.multiSelect;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.isButtonAriaHidden;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.ariaDescribedBy;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.keytipProps;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.persistMenu;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.shouldRestoreFocus;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.resolveOptions;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.renderLowerContent;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onItemClick;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onChange;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onPendingValueChanged;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onMenuOpen;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onMenuDismissed;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onMenuDismiss;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onScrollToItem;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.comboBoxOptionsDirective;
        /** @type {?} */
        FabBaseComboBoxComponent.prototype.onRenderLowerContent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabComboBoxComponent = /** @class */ (function (_super) {
        __extends(FabComboBoxComponent, _super);
        function FabComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabComboBoxComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-combo-box',
                        exportAs: 'fabComboBox',
                        template: "\n    <ComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </ComboBox>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabComboBoxComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabComboBoxComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabComboBoxComponent;
    }(FabBaseComboBoxComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabComboBoxComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabVirtualizedComboBoxComponent = /** @class */ (function (_super) {
        __extends(FabVirtualizedComboBoxComponent, _super);
        function FabVirtualizedComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabVirtualizedComboBoxComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-virtualized-combo-box',
                        exportAs: 'fabVirtualizedComboBox',
                        template: "\n    <VirtualizedComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </VirtualizedComboBox>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabVirtualizedComboBoxComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabVirtualizedComboBoxComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabVirtualizedComboBoxComponent;
    }(FabBaseComboBoxComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabVirtualizedComboBoxComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var declarations$1 = [
        FabComboBoxComponent,
        FabVirtualizedComboBoxComponent,
        ComboBoxOptionDirective,
        ComboBoxOptionsDirective
    ];
    var FabComboBoxModule = /** @class */ (function () {
        function FabComboBoxModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('ComboBox', (/**
             * @return {?}
             */
            function () { return ComboBox.ComboBox; }));
            core.registerElement('VirtualizedComboBox', (/**
             * @return {?}
             */
            function () { return ComboBox.VirtualizedComboBox; }));
        }
        FabComboBoxModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: declarations$1,
                        exports: declarations$1,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabComboBoxModule.ctorParameters = function () { return []; };
        return FabComboBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
    var components$5 = [
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
                        declarations: components$5,
                        exports: __spread(components$5, [contextualMenu.FabContextualMenuModule]),
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabCommandBarModule.ctorParameters = function () { return []; };
        return FabCommandBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive to allow rendering a custom item to a ContextualMenuItem.
     */
    var ContextualMenuItemRenderDirective = /** @class */ (function () {
        function ContextualMenuItemRenderDirective() {
        }
        ContextualMenuItemRenderDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
        ];
        ContextualMenuItemRenderDirective.propDecorators = {
            templateRef: [{ type: core$1.ContentChild, args: [core$1.TemplateRef, { static: false },] }]
        };
        return ContextualMenuItemRenderDirective;
    }());
    if (false) {
        /** @type {?} */
        ContextualMenuItemRenderDirective.prototype.templateRef;
    }
    /**
     * Wrapper directive to allow rendering a custom icon to a ContextualMenuItem.
     */
    var ContextualMenuItemRenderIconDirective = /** @class */ (function () {
        function ContextualMenuItemRenderIconDirective() {
        }
        ContextualMenuItemRenderIconDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
        ];
        ContextualMenuItemRenderIconDirective.propDecorators = {
            templateRef: [{ type: core$1.ContentChild, args: [core$1.TemplateRef, { static: false },] }]
        };
        return ContextualMenuItemRenderIconDirective;
    }());
    if (false) {
        /** @type {?} */
        ContextualMenuItemRenderIconDirective.prototype.templateRef;
    }
    var ContextualMenuItemDirective = /** @class */ (function (_super) {
        __extends(ContextualMenuItemDirective, _super);
        function ContextualMenuItemDirective(elementRef) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.click = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(ContextualMenuItemDirective.prototype, "onChildItemChanged", {
            get: /**
             * @return {?}
             */
            function () {
                return this._changeableItemsHelper && this._changeableItemsHelper.onChildItemChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContextualMenuItemDirective.prototype, "onItemsChanged", {
            get: /**
             * @return {?}
             */
            function () {
                return this._changeableItemsHelper && this._changeableItemsHelper.onItemsChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ContextualMenuItemDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.renderDirective && this.renderDirective.templateRef) {
                this.render = this.renderDirective.templateRef;
            }
            if (this.renderIconDirective && this.renderIconDirective.templateRef) {
                this.renderIcon = this.renderIconDirective.templateRef;
            }
            this._changeableItemsHelper = new core$2.ChangeableItemsHelper(this.menuItemsDirectives, this, (/**
             * @param {?} nonSelfDirective
             * @return {?}
             */
            function (nonSelfDirective) {
                /** @type {?} */
                var items = nonSelfDirective.map((/**
                 * @param {?} directive
                 * @return {?}
                 */
                function (directive) { return _this._directiveToContextualMenuItem((/** @type {?} */ (directive))); }));
                if (!_this.subMenuProps) {
                    _this.subMenuProps = { items: items };
                }
                else {
                    _this.subMenuProps.items = items;
                }
            }));
        };
        /**
         * @return {?}
         */
        ContextualMenuItemDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._changeableItemsHelper.destroy();
        };
        /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        ContextualMenuItemDirective.prototype._directiveToContextualMenuItem = /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            return __assign({}, directive, utils.getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
                 * @param {?} ev
                 * @param {?} item
                 * @return {?}
                 */
                function (ev, item) {
                    directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
                }) });
        };
        ContextualMenuItemDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'contextual-menu-item' },] }
        ];
        /** @nocollapse */
        ContextualMenuItemDirective.ctorParameters = function () { return [
            { type: core$1.ElementRef }
        ]; };
        ContextualMenuItemDirective.propDecorators = {
            menuItemsDirectives: [{ type: core$1.ContentChildren, args: [ContextualMenuItemDirective,] }],
            renderDirective: [{ type: core$1.ContentChild, args: [ContextualMenuItemRenderDirective, { static: false },] }],
            renderIconDirective: [{ type: core$1.ContentChild, args: [ContextualMenuItemRenderIconDirective, { static: false },] }],
            componentRef: [{ type: core$1.Input }],
            text: [{ type: core$1.Input }],
            secondaryText: [{ type: core$1.Input }],
            itemType: [{ type: core$1.Input }],
            iconProps: [{ type: core$1.Input }],
            submenuIconProps: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            primaryDisabled: [{ type: core$1.Input }],
            shortCut: [{ type: core$1.Input }],
            canCheck: [{ type: core$1.Input }],
            checked: [{ type: core$1.Input }],
            split: [{ type: core$1.Input }],
            data: [{ type: core$1.Input }],
            href: [{ type: core$1.Input }],
            target: [{ type: core$1.Input }],
            rel: [{ type: core$1.Input }],
            subMenuProps: [{ type: core$1.Input }],
            getItemClassNames: [{ type: core$1.Input }],
            itemProps: [{ type: core$1.Input }],
            getSplitButtonVerticalDividerClassNames: [{ type: core$1.Input }],
            sectionProps: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            style: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            title: [{ type: core$1.Input }],
            onMouseDown: [{ type: core$1.Input }],
            role: [{ type: core$1.Input }],
            customOnRenderListLength: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            inactive: [{ type: core$1.Input }],
            name: [{ type: core$1.Input }],
            render: [{ type: core$1.Input }],
            renderIcon: [{ type: core$1.Input }],
            click: [{ type: core$1.Output }],
            onChildItemChanged: [{ type: core$1.Output }],
            onItemsChanged: [{ type: core$1.Output }]
        };
        return ContextualMenuItemDirective;
    }(core$2.ChangeableItemDirective));
    if (false) {
        /** @type {?} */
        ContextualMenuItemDirective.prototype.menuItemsDirectives;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.renderDirective;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.renderIconDirective;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.componentRef;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.text;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.secondaryText;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.itemType;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.iconProps;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.submenuIconProps;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.disabled;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.primaryDisabled;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.shortCut;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.canCheck;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.checked;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.split;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.data;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.href;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.target;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.rel;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.subMenuProps;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.getItemClassNames;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.itemProps;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.getSplitButtonVerticalDividerClassNames;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.sectionProps;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.className;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.style;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.ariaLabel;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.title;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.onMouseDown;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.role;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.customOnRenderListLength;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.keytipProps;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.inactive;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.name;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.render;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.renderIcon;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.click;
        /**
         * @type {?}
         * @private
         */
        ContextualMenuItemDirective.prototype._changeableItemsHelper;
        /** @type {?} */
        ContextualMenuItemDirective.prototype.elementRef;
    }
    /**
     * @record
     * @template TData
     */
    function IContextualMenuItemOptions() { }
    if (false) {
        /** @type {?|undefined} */
        IContextualMenuItemOptions.prototype.renderIcon;
        /** @type {?|undefined} */
        IContextualMenuItemOptions.prototype.render;
        /** @type {?|undefined} */
        IContextualMenuItemOptions.prototype.data;
        /* Skipping unhandled member: [propertyName: string]: any;*/
    }
    /**
     * @record
     */
    function IContextualMenuItemOptionsRenderContext() { }
    if (false) {
        /** @type {?} */
        IContextualMenuItemOptionsRenderContext.prototype.item;
        /** @type {?} */
        IContextualMenuItemOptionsRenderContext.prototype.dismissMenu;
    }
    /**
     * @record
     */
    function IContextualMenuItemOptionsRenderIconContext() { }
    if (false) {
        /** @type {?} */
        IContextualMenuItemOptionsRenderIconContext.prototype.contextualMenuItem;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$6 = [
        ContextualMenuItemDirective,
        ContextualMenuItemRenderDirective,
        ContextualMenuItemRenderIconDirective,
    ];
    var FabContextualMenuModule = /** @class */ (function () {
        function FabContextualMenuModule() {
        }
        FabContextualMenuModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$6,
                        exports: components$6,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        return FabContextualMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabDatePickerComponent = /** @class */ (function (_super) {
        __extends(FabDatePickerComponent, _super);
        function FabDatePickerComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onSelectDate = new core$1.EventEmitter();
            _this.onAfterMenuDismiss = new core$1.EventEmitter();
            _this.onSelectDateHandler = _this.onSelectDateHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?} date
         * @return {?}
         */
        FabDatePickerComponent.prototype.onSelectDateHandler = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this.onSelectDate.emit({
                date: date,
            });
        };
        FabDatePickerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-date-picker',
                        exportAs: 'fabDatePicker',
                        template: "\n    <DatePicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [calendarProps]=\"calendarProps\"\n      [textField]=\"textField\"\n      [calloutProps]=\"calloutProps\"\n      [calendarAs]=\"calendarAs\"\n      [label]=\"label\"\n      [isRequired]=\"isRequired\"\n      [disabled]=\"disabled\"\n      [ariaLabel]=\"ariaLabel\"\n      [underlined]=\"underlined\"\n      [pickerAriaLabel]=\"pickerAriaLabel\"\n      [isMonthPickerVisible]=\"isMonthPickerVisible\"\n      [showMonthPickerAsOverlay]=\"showMonthPickerAsOverlay\"\n      [allowTextInput]=\"allowTextInput\"\n      [disableAutoFocus]=\"disableAutoFocus\"\n      [placeholder]=\"placeholder\"\n      [today]=\"today\"\n      [value]=\"value\"\n      [formatDate]=\"formatDate\"\n      [parseDateFromString]=\"parseDateFromString\"\n      [firstDayOfWeek]=\"firstDayOfWeek\"\n      [strings]=\"strings\"\n      [highlightCurrentMonth]=\"highlightCurrentMonth\"\n      [highlightSelectedMonth]=\"highlightSelectedMonth\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [firstWeekOfYear]=\"firstWeekOfYear\"\n      [showGoToToday]=\"showGoToToday\"\n      [borderless]=\"borderless\"\n      [className]=\"className\"\n      [dateTimeFormatter]=\"dateTimeFormatter\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [initialPickerDate]=\"initialPickerDate\"\n      [allFocusable]=\"allFocusable\"\n      [showCloseButton]=\"showCloseButton\"\n      [SelectDate]=\"onSelectDateHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit()\"\n    >\n    </DatePicker>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDatePickerComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabDatePickerComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            calloutProps: [{ type: core$1.Input }],
            calendarProps: [{ type: core$1.Input }],
            textField: [{ type: core$1.Input }],
            calendarAs: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            isRequired: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            underlined: [{ type: core$1.Input }],
            pickerAriaLabel: [{ type: core$1.Input }],
            isMonthPickerVisible: [{ type: core$1.Input }],
            showMonthPickerAsOverlay: [{ type: core$1.Input }],
            allowTextInput: [{ type: core$1.Input }],
            disableAutoFocus: [{ type: core$1.Input }],
            placeholder: [{ type: core$1.Input }],
            today: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            formatDate: [{ type: core$1.Input }],
            parseDateFromString: [{ type: core$1.Input }],
            firstDayOfWeek: [{ type: core$1.Input }],
            strings: [{ type: core$1.Input }],
            highlightCurrentMonth: [{ type: core$1.Input }],
            highlightSelectedMonth: [{ type: core$1.Input }],
            showWeekNumbers: [{ type: core$1.Input }],
            firstWeekOfYear: [{ type: core$1.Input }],
            showGoToToday: [{ type: core$1.Input }],
            borderless: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            dateTimeFormatter: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            initialPickerDate: [{ type: core$1.Input }],
            allFocusable: [{ type: core$1.Input }],
            showCloseButton: [{ type: core$1.Input }],
            tabIndex: [{ type: core$1.Input }],
            onSelectDate: [{ type: core$1.Output }],
            onAfterMenuDismiss: [{ type: core$1.Output }]
        };
        return FabDatePickerComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDatePickerComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDatePickerComponent.prototype.componentRef;
        /** @type {?} */
        FabDatePickerComponent.prototype.theme;
        /** @type {?} */
        FabDatePickerComponent.prototype.calloutProps;
        /** @type {?} */
        FabDatePickerComponent.prototype.calendarProps;
        /** @type {?} */
        FabDatePickerComponent.prototype.textField;
        /** @type {?} */
        FabDatePickerComponent.prototype.calendarAs;
        /** @type {?} */
        FabDatePickerComponent.prototype.label;
        /** @type {?} */
        FabDatePickerComponent.prototype.isRequired;
        /** @type {?} */
        FabDatePickerComponent.prototype.disabled;
        /** @type {?} */
        FabDatePickerComponent.prototype.ariaLabel;
        /** @type {?} */
        FabDatePickerComponent.prototype.underlined;
        /** @type {?} */
        FabDatePickerComponent.prototype.pickerAriaLabel;
        /** @type {?} */
        FabDatePickerComponent.prototype.isMonthPickerVisible;
        /** @type {?} */
        FabDatePickerComponent.prototype.showMonthPickerAsOverlay;
        /** @type {?} */
        FabDatePickerComponent.prototype.allowTextInput;
        /** @type {?} */
        FabDatePickerComponent.prototype.disableAutoFocus;
        /** @type {?} */
        FabDatePickerComponent.prototype.placeholder;
        /** @type {?} */
        FabDatePickerComponent.prototype.today;
        /** @type {?} */
        FabDatePickerComponent.prototype.value;
        /** @type {?} */
        FabDatePickerComponent.prototype.formatDate;
        /** @type {?} */
        FabDatePickerComponent.prototype.parseDateFromString;
        /** @type {?} */
        FabDatePickerComponent.prototype.firstDayOfWeek;
        /** @type {?} */
        FabDatePickerComponent.prototype.strings;
        /** @type {?} */
        FabDatePickerComponent.prototype.highlightCurrentMonth;
        /** @type {?} */
        FabDatePickerComponent.prototype.highlightSelectedMonth;
        /** @type {?} */
        FabDatePickerComponent.prototype.showWeekNumbers;
        /** @type {?} */
        FabDatePickerComponent.prototype.firstWeekOfYear;
        /** @type {?} */
        FabDatePickerComponent.prototype.showGoToToday;
        /** @type {?} */
        FabDatePickerComponent.prototype.borderless;
        /** @type {?} */
        FabDatePickerComponent.prototype.className;
        /** @type {?} */
        FabDatePickerComponent.prototype.dateTimeFormatter;
        /** @type {?} */
        FabDatePickerComponent.prototype.minDate;
        /** @type {?} */
        FabDatePickerComponent.prototype.maxDate;
        /** @type {?} */
        FabDatePickerComponent.prototype.initialPickerDate;
        /** @type {?} */
        FabDatePickerComponent.prototype.allFocusable;
        /** @type {?} */
        FabDatePickerComponent.prototype.showCloseButton;
        /** @type {?} */
        FabDatePickerComponent.prototype.tabIndex;
        /** @type {?} */
        FabDatePickerComponent.prototype.onSelectDate;
        /** @type {?} */
        FabDatePickerComponent.prototype.onAfterMenuDismiss;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Dummy action to force CalendarCss to load and not be tree-shaken away.
    utils.noop(CalendarCss);
    /** @type {?} */
    var components$7 = [FabDatePickerComponent];
    var FabDatePickerModule = /** @class */ (function () {
        function FabDatePickerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('DatePicker', (/**
             * @return {?}
             */
            function () { return DatePicker.DatePicker; }));
        }
        FabDatePickerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$7,
                        exports: components$7,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDatePickerModule.ctorParameters = function () { return []; };
        return FabDatePickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
            { type: core$1.Directive, args: [{ selector: 'fab-details-list-column > render' },] }
        ];
        DetailsListColumnRenderDirective.propDecorators = {
            templateRef: [{ type: core$1.ContentChild, args: [core$1.TemplateRef, { static: false },] }]
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
            _this.onColumnClick = new core$1.EventEmitter();
            _this.onColumnContextMenu = new core$1.EventEmitter();
            _this.onColumnResize = new core$1.EventEmitter();
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
            { type: core$1.Directive, args: [{ selector: 'fab-details-list-column' },] }
        ];
        DetailsListColumnDirective.propDecorators = {
            renderDirective: [{ type: core$1.ContentChild, args: [DetailsListColumnRenderDirective, { static: false },] }],
            name: [{ type: core$1.Input }],
            fieldName: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            minWidth: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            isRowHeader: [{ type: core$1.Input }],
            maxWidth: [{ type: core$1.Input }],
            columnActionsMode: [{ type: core$1.Input }],
            iconName: [{ type: core$1.Input }],
            isIconOnly: [{ type: core$1.Input }],
            iconClassName: [{ type: core$1.Input }],
            isCollapsable: [{ type: core$1.Input }],
            isSorted: [{ type: core$1.Input }],
            isSortedDescending: [{ type: core$1.Input }],
            isResizable: [{ type: core$1.Input }],
            isMultiline: [{ type: core$1.Input }],
            onRender: [{ type: core$1.Input }],
            getValueKey: [{ type: core$1.Input }],
            onRenderDivider: [{ type: core$1.Input }],
            isFiltered: [{ type: core$1.Input }],
            isGrouped: [{ type: core$1.Input }],
            data: [{ type: core$1.Input }],
            calculatedWidth: [{ type: core$1.Input }],
            currentWidth: [{ type: core$1.Input }],
            headerClassName: [{ type: core$1.Input }],
            isPadded: [{ type: core$1.Input }],
            sortAscendingAriaLabel: [{ type: core$1.Input }],
            sortDescendingAriaLabel: [{ type: core$1.Input }],
            groupAriaLabel: [{ type: core$1.Input }],
            filterAriaLabel: [{ type: core$1.Input }],
            render: [{ type: core$1.Input }],
            onColumnClick: [{ type: core$1.Output }],
            onColumnContextMenu: [{ type: core$1.Output }],
            onColumnResize: [{ type: core$1.Output }]
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
            { type: core$1.Directive, args: [{ selector: 'fab-details-list > columns' },] }
        ];
        DetailsListColumnsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [DetailsListColumnDirective,] }]
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
            { type: core$1.Directive, args: [{ selector: 'fab-details-list > groups' },] }
        ];
        DetailsListGroupsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [group.GroupItemDirective,] }]
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
            _this.onActiveItemChanged = new core$1.EventEmitter();
            _this.onColumnHeaderClick = new core$1.EventEmitter();
            _this.onColumnHeaderContextMenu = new core$1.EventEmitter();
            _this.onColumnResize = new core$1.EventEmitter();
            _this.onDidUpdate = new core$1.EventEmitter();
            _this.onItemContextMenu = new core$1.EventEmitter();
            _this.onItemInvoked = new core$1.EventEmitter();
            _this.onRowDidMount = new core$1.EventEmitter();
            _this.onRowWillUnmount = new core$1.EventEmitter();
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
            { type: core$1.Component, args: [{
                        selector: 'fab-details-list',
                        exportAs: 'fabDetailsList',
                        template: "\n    <DetailsList\n      #reactNode\n      [items]=\"items\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelForGrid]=\"ariaLabelForGrid\"\n      [ariaLabelForListHeader]=\"ariaLabelForListHeader\"\n      [ariaLabelForSelectAllCheckbox]=\"ariaLabelForSelectAllCheckbox\"\n      [ariaLabelForSelectionColumn]=\"ariaLabelForSelectionColumn\"\n      [cellStyleProps]=\"cellStyleProps\"\n      [checkButtonAriaLabel]=\"checkButtonAriaLabel\"\n      [checkboxCellClassName]=\"checkboxCellClassName\"\n      [checkboxVisibility]=\"checkboxVisibility\"\n      [className]=\"className\"\n      [columnReorderOptions]=\"columnReorderOptions\"\n      [columns]=\"transformedColumns_\"\n      [compact]=\"compact\"\n      [componentRef]=\"componentRef\"\n      [constrainMode]=\"constrainMode\"\n      [disableSelectionZone]=\"disableSelectionZone\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [enableUpdateAnimations]=\"enableUpdateAnimations\"\n      [enterModalSelectionOnTouch]=\"enterModalSelectionOnTouch\"\n      [getCellValueKey]=\"getCellValueKey\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [getKey]=\"getKey\"\n      [getRowAriaDescribedBy]=\"getRowAriaDescribedBy\"\n      [getRowAriaLabel]=\"getRowAriaLabel\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"transformedGroups_\"\n      [indentWidth]=\"indentWidth\"\n      [initialFocusedIndex]=\"initialFocusedIndex\"\n      [isHeaderVisible]=\"isHeaderVisible\"\n      [layoutMode]=\"layoutMode\"\n      [listProps]=\"listProps\"\n      [minimumPixelsForDrag]=\"minimumPixelsForDrag\"\n      [rowElementEventMap]=\"rowElementEventMap\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [selectionPreservedOnEmptyClick]=\"selectionPreservedOnEmptyClick\"\n      [selectionZoneProps]=\"selectionZoneProps\"\n      [setKey]=\"setKey\"\n      [shouldApplyApplicationRole]=\"shouldApplyApplicationRole\"\n      [skipViewportMeasures]=\"skipViewportMeasures\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [useFastIcons]=\"useFastIcons\"\n      [usePageCache]=\"usePageCache\"\n      [useReducedRowRenderer]=\"useReducedRowRenderer\"\n      [viewport]=\"viewport\"\n      [RenderCheckbox]=\"renderCheckbox && onRenderCheckbox\"\n      [RenderDetailsFooter]=\"renderDetailsFooter && onRenderDetailsFooter\"\n      [RenderDetailsHeader]=\"renderDetailsHeader && onRenderDetailsHeader\"\n      [RenderMissingItem]=\"renderMissingItem && onRenderMissingItem\"\n      [RenderRow]=\"renderDetailsHeader && onRenderRow\"\n      [ActiveItemChanged]=\"onActiveItemChangedHandler\"\n      [ColumnHeaderClick]=\"onColumnHeaderClickHandler\"\n      [ColumnHeaderContextMenu]=\"onColumnHeaderContextMenuHandler\"\n      [ColumnResize]=\"onColumnResizeHandler\"\n      [DidUpdate]=\"onDidUpdateHandler\"\n      [ItemContextMenu]=\"onItemContextMenuHandler\"\n      [ItemInvoked]=\"onItemInvokedHandler\"\n      [RowDidMount]=\"onRowDidMountHandler\"\n      [RowWillUnmount]=\"onRowWillUnmountHandler\"\n      [ShouldVirtualize]=\"onShouldVirtualize\"\n    >\n    </DetailsList>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDetailsListComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabDetailsListComponent.propDecorators = {
            columnsDirective: [{ type: core$1.ContentChild, args: [DetailsListColumnsDirective, { static: true },] }],
            groupsDirective: [{ type: core$1.ContentChild, args: [DetailsListGroupsDirective, { static: true },] }],
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            componentRef: [{ type: core$1.Input }],
            setKey: [{ type: core$1.Input }],
            items: [{ type: core$1.Input }],
            listProps: [{ type: core$1.Input }],
            initialFocusedIndex: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            groupProps: [{ type: core$1.Input }],
            indentWidth: [{ type: core$1.Input }],
            selection: [{ type: core$1.Input }],
            selectionMode: [{ type: core$1.Input }],
            selectionPreservedOnEmptyClick: [{ type: core$1.Input }],
            selectionZoneProps: [{ type: core$1.Input }],
            layoutMode: [{ type: core$1.Input }],
            checkboxVisibility: [{ type: core$1.Input }],
            isHeaderVisible: [{ type: core$1.Input }],
            constrainMode: [{ type: core$1.Input }],
            rowElementEventMap: [{ type: core$1.Input }],
            getCellValueKey: [{ type: core$1.Input }],
            dragDropEvents: [{ type: core$1.Input }],
            viewport: [{ type: core$1.Input }],
            ariaLabelForListHeader: [{ type: core$1.Input }],
            ariaLabelForSelectAllCheckbox: [{ type: core$1.Input }],
            ariaLabelForSelectionColumn: [{ type: core$1.Input }],
            getRowAriaLabel: [{ type: core$1.Input }],
            getRowAriaDescribedBy: [{ type: core$1.Input }],
            getKey: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            checkButtonAriaLabel: [{ type: core$1.Input }],
            ariaLabelForGrid: [{ type: core$1.Input }],
            shouldApplyApplicationRole: [{ type: core$1.Input }],
            minimumPixelsForDrag: [{ type: core$1.Input }],
            compact: [{ type: core$1.Input }],
            usePageCache: [{ type: core$1.Input }],
            onShouldVirtualize: [{ type: core$1.Input }],
            checkboxCellClassName: [{ type: core$1.Input }],
            enterModalSelectionOnTouch: [{ type: core$1.Input }],
            columnReorderOptions: [{ type: core$1.Input }],
            getGroupHeight: [{ type: core$1.Input }],
            useReducedRowRenderer: [{ type: core$1.Input }],
            cellStyleProps: [{ type: core$1.Input }],
            disableSelectionZone: [{ type: core$1.Input }],
            enableUpdateAnimations: [{ type: core$1.Input }],
            useFastIcons: [{ type: core$1.Input }],
            skipViewportMeasures: [{ type: core$1.Input }],
            renderCheckbox: [{ type: core$1.Input }],
            renderDetailsFooter: [{ type: core$1.Input }],
            renderDetailsHeader: [{ type: core$1.Input }],
            renderMissingItem: [{ type: core$1.Input }],
            renderRow: [{ type: core$1.Input }],
            onActiveItemChanged: [{ type: core$1.Output }],
            onColumnHeaderClick: [{ type: core$1.Output }],
            onColumnHeaderContextMenu: [{ type: core$1.Output }],
            onColumnResize: [{ type: core$1.Output }],
            onDidUpdate: [{ type: core$1.Output }],
            onItemContextMenu: [{ type: core$1.Output }],
            onItemInvoked: [{ type: core$1.Output }],
            onRowDidMount: [{ type: core$1.Output }],
            onRowWillUnmount: [{ type: core$1.Output }],
            columns: [{ type: core$1.Input }],
            groups: [{ type: core$1.Input }]
        };
        return FabDetailsListComponent;
    }(core.ReactWrapperComponent));
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
    var components$8 = [
        DetailsListColumnDirective,
        DetailsListColumnRenderDirective,
        DetailsListColumnsDirective,
        DetailsListGroupsDirective,
        FabDetailsListComponent,
    ];
    var FabDetailsListModule = /** @class */ (function () {
        function FabDetailsListModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('DetailsList', (/**
             * @return {?}
             */
            function () { return DetailsList.DetailsList; }));
        }
        FabDetailsListModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule, group.FabGroupModule],
                        declarations: components$8,
                        exports: __spread(components$8, [group.FabGroupModule]),
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDetailsListModule.ctorParameters = function () { return []; };
        return FabDetailsListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabDialogComponent = /** @class */ (function (_super) {
        __extends(FabDialogComponent, _super);
        function FabDialogComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onDismiss = new core$1.EventEmitter();
            _this.onDismissHandler = _this.onDismissHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?} ev
         * @return {?}
         */
        FabDialogComponent.prototype.onDismissHandler = /**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            this.onDismiss.emit(ev && ev.nativeEvent);
        };
        FabDialogComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-dialog',
                        exportAs: 'fabDialog',
                        template: "\n    <!-- prettier-ignore -->\n    <Dialog\n      #reactNode\n      [responsiveMode]=\"responsiveMode\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [isClickableOutsideFocusTrap]=\"isClickableOutsideFocusTrap\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [dialogContentProps]=\"dialogContentProps\"\n      [hidden]=\"hidden\"\n      [modalProps]=\"modalProps\"\n      [minWidth]=\"minWidth\"\n      [maxWidth]=\"maxWidth\"\n      (onDismiss)=\"onDismissHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Dialog>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDialogComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabDialogComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            responsiveMode: [{ type: core$1.Input }],
            elementToFocusOnDismiss: [{ type: core$1.Input }],
            ignoreExternalFocusing: [{ type: core$1.Input }],
            forceFocusInsideTrap: [{ type: core$1.Input }],
            firstFocusableSelector: [{ type: core$1.Input }],
            closeButtonAriaLabel: [{ type: core$1.Input }],
            isClickableOutsideFocusTrap: [{ type: core$1.Input }],
            componentRef: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            dialogContentProps: [{ type: core$1.Input }],
            hidden: [{ type: core$1.Input }],
            modalProps: [{ type: core$1.Input }],
            minWidth: [{ type: core$1.Input }],
            maxWidth: [{ type: core$1.Input }],
            onDismiss: [{ type: core$1.Output }]
        };
        return FabDialogComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDialogComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDialogComponent.prototype.responsiveMode;
        /** @type {?} */
        FabDialogComponent.prototype.elementToFocusOnDismiss;
        /** @type {?} */
        FabDialogComponent.prototype.ignoreExternalFocusing;
        /** @type {?} */
        FabDialogComponent.prototype.forceFocusInsideTrap;
        /** @type {?} */
        FabDialogComponent.prototype.firstFocusableSelector;
        /** @type {?} */
        FabDialogComponent.prototype.closeButtonAriaLabel;
        /** @type {?} */
        FabDialogComponent.prototype.isClickableOutsideFocusTrap;
        /** @type {?} */
        FabDialogComponent.prototype.componentRef;
        /** @type {?} */
        FabDialogComponent.prototype.styles;
        /** @type {?} */
        FabDialogComponent.prototype.theme;
        /** @type {?} */
        FabDialogComponent.prototype.dialogContentProps;
        /** @type {?} */
        FabDialogComponent.prototype.hidden;
        /** @type {?} */
        FabDialogComponent.prototype.modalProps;
        /** @type {?} */
        FabDialogComponent.prototype.minWidth;
        /** @type {?} */
        FabDialogComponent.prototype.maxWidth;
        /** @type {?} */
        FabDialogComponent.prototype.onDismiss;
    }
    var FabDialogFooterComponent = /** @class */ (function (_super) {
        __extends(FabDialogFooterComponent, _super);
        function FabDialogFooterComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        FabDialogFooterComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-dialog-footer',
                        exportAs: 'fabDialogFooter',
                        template: "\n    <DialogFooter #reactNode [componentRef]=\"componentRef\" [styles]=\"styles\" [theme]=\"theme\" [className]=\"className\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DialogFooter>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDialogFooterComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabDialogFooterComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }]
        };
        return FabDialogFooterComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDialogFooterComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDialogFooterComponent.prototype.componentRef;
        /** @type {?} */
        FabDialogFooterComponent.prototype.styles;
        /** @type {?} */
        FabDialogFooterComponent.prototype.theme;
        /** @type {?} */
        FabDialogFooterComponent.prototype.className;
    }
    var FabDialogContentComponent = /** @class */ (function (_super) {
        __extends(FabDialogContentComponent, _super);
        function FabDialogContentComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onDismiss = new core$1.EventEmitter();
            return _this;
        }
        FabDialogContentComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-dialog-content',
                        exportAs: 'fabDialogContent',
                        template: "\n    <DialogContent\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [isMultiline]=\"isMultiline\"\n      [showCloseButton]=\"showCloseButton\"\n      [topButtonsProps]=\"topButtonsProps\"\n      [className]=\"className\"\n      [subTextId]=\"subTextId\"\n      [subText]=\"subText\"\n      [titleId]=\"titleId\"\n      [title]=\"title\"\n      [responsiveMode]=\"responsiveMode\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [type]=\"type\"\n      [draggableHeaderClassName]=\"draggableHeaderClassName\"\n      (onDismiss)=\"onDismiss.emit($event && $event.nativeEvent)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DialogContent>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDialogContentComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabDialogContentComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            isMultiline: [{ type: core$1.Input }],
            showCloseButton: [{ type: core$1.Input }],
            topButtonsProps: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            subTextId: [{ type: core$1.Input }],
            subText: [{ type: core$1.Input }],
            titleId: [{ type: core$1.Input }],
            title: [{ type: core$1.Input }],
            responsiveMode: [{ type: core$1.Input }],
            closeButtonAriaLabel: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            draggableHeaderClassName: [{ type: core$1.Input }],
            onDismiss: [{ type: core$1.Output }]
        };
        return FabDialogContentComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDialogContentComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDialogContentComponent.prototype.componentRef;
        /** @type {?} */
        FabDialogContentComponent.prototype.styles;
        /** @type {?} */
        FabDialogContentComponent.prototype.theme;
        /** @type {?} */
        FabDialogContentComponent.prototype.isMultiline;
        /** @type {?} */
        FabDialogContentComponent.prototype.showCloseButton;
        /** @type {?} */
        FabDialogContentComponent.prototype.topButtonsProps;
        /** @type {?} */
        FabDialogContentComponent.prototype.className;
        /** @type {?} */
        FabDialogContentComponent.prototype.subTextId;
        /** @type {?} */
        FabDialogContentComponent.prototype.subText;
        /** @type {?} */
        FabDialogContentComponent.prototype.titleId;
        /** @type {?} */
        FabDialogContentComponent.prototype.title;
        /** @type {?} */
        FabDialogContentComponent.prototype.responsiveMode;
        /** @type {?} */
        FabDialogContentComponent.prototype.closeButtonAriaLabel;
        /** @type {?} */
        FabDialogContentComponent.prototype.type;
        /** @type {?} */
        FabDialogContentComponent.prototype.draggableHeaderClassName;
        /** @type {?} */
        FabDialogContentComponent.prototype.onDismiss;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$9 = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];
    var FabDialogModule = /** @class */ (function () {
        function FabDialogModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Dialog', (/**
             * @return {?}
             */
            function () { return Dialog.Dialog; }));
            core.registerElement('DialogContent', (/**
             * @return {?}
             */
            function () { return Dialog.DialogContent; }));
            core.registerElement('DialogFooter', (/**
             * @return {?}
             */
            function () { return Dialog.DialogFooter; }));
        }
        FabDialogModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$9,
                        exports: components$9,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDialogModule.ctorParameters = function () { return []; };
        return FabDialogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabDividerComponent = /** @class */ (function (_super) {
        __extends(FabDividerComponent, _super);
        function FabDividerComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        FabDividerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-vertical-divider',
                        exportAs: 'fabVerticalDivider',
                        template: "\n    <VerticalDivider\n      #reactNode\n      [getClassNames]=\"getClassNames\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n    >\n    </VerticalDivider>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDividerComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabDividerComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            getClassNames: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }]
        };
        return FabDividerComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDividerComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDividerComponent.prototype.getClassNames;
        /** @type {?} */
        FabDividerComponent.prototype.theme;
        /** @type {?} */
        FabDividerComponent.prototype.styles;
        /** @type {?} */
        FabDividerComponent.prototype.className;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$a = [FabDividerComponent];
    var FabDividerModule = /** @class */ (function () {
        function FabDividerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('VerticalDivider', (/**
             * @return {?}
             */
            function () { return Divider.VerticalDivider; }));
        }
        FabDividerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$a,
                        exports: components$a,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDividerModule.ctorParameters = function () { return []; };
        return FabDividerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for creating a DropdownOption
     * \@paramName optionKey Binds to React 'key' property.
     *                      Name change necessary because key is a reserved attribute in the wrapper component.
     */
    var DropdownOptionDirective = /** @class */ (function () {
        function DropdownOptionDirective() {
        }
        DropdownOptionDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-dropdown-option' },] }
        ];
        DropdownOptionDirective.propDecorators = {
            optionKey: [{ type: core$1.Input }],
            text: [{ type: core$1.Input }],
            title: [{ type: core$1.Input }],
            itemType: [{ type: core$1.Input }],
            index: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            hidden: [{ type: core$1.Input }],
            data: [{ type: core$1.Input }]
        };
        return DropdownOptionDirective;
    }());
    if (false) {
        /** @type {?} */
        DropdownOptionDirective.prototype.optionKey;
        /** @type {?} */
        DropdownOptionDirective.prototype.text;
        /** @type {?} */
        DropdownOptionDirective.prototype.title;
        /** @type {?} */
        DropdownOptionDirective.prototype.itemType;
        /** @type {?} */
        DropdownOptionDirective.prototype.index;
        /** @type {?} */
        DropdownOptionDirective.prototype.ariaLabel;
        /** @type {?} */
        DropdownOptionDirective.prototype.selected;
        /** @type {?} */
        DropdownOptionDirective.prototype.disabled;
        /** @type {?} */
        DropdownOptionDirective.prototype.hidden;
        /** @type {?} */
        DropdownOptionDirective.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper directive for creating multiple DropdownOptions
     * Note that if you use this, it will override the imperative [options] binding.
     */
    var DropdownOptionsDirective = /** @class */ (function () {
        function DropdownOptionsDirective() {
        }
        Object.defineProperty(DropdownOptionsDirective.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this.directiveItems.map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var optionKey = _a.optionKey, otherDirectiveProps = __rest(_a, ["optionKey"]);
                    return (__assign({ key: optionKey }, otherDirectiveProps));
                }));
            },
            enumerable: true,
            configurable: true
        });
        DropdownOptionsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'fab-dropdown > options' },] }
        ];
        DropdownOptionsDirective.propDecorators = {
            directiveItems: [{ type: core$1.ContentChildren, args: [DropdownOptionDirective,] }]
        };
        return DropdownOptionsDirective;
    }());
    if (false) {
        /** @type {?} */
        DropdownOptionsDirective.prototype.directiveItems;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabDropdownComponent = /** @class */ (function (_super) {
        __extends(FabDropdownComponent, _super);
        function FabDropdownComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
            _this.onChange = new core$1.EventEmitter();
            _this.onDismiss = new core$1.EventEmitter();
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            _this.onDismissHandler = _this.onDismissHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderContainer = this.createRenderPropHandler(this.renderContainer);
            this.onRenderList = this.createRenderPropHandler(this.renderList);
            this.onRenderItem = this.createRenderPropHandler(this.renderItem);
            this.onRenderOption = this.createRenderPropHandler(this.renderOption);
            this.onRenderPlaceholder = this.createRenderPropHandler(this.renderPlaceholder);
            this.onRenderPlaceHolder = this.createRenderPropHandler(this.renderPlaceHolder);
            this.onRenderTitle = this.createRenderPropHandler(this.renderTitle);
            this.onRenderCaretDown = this.createRenderPropHandler(this.renderCaretDown);
        };
        /**
         * @return {?}
         */
        FabDropdownComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.dropdownOptionsDirective) {
                this._initDirective(this.dropdownOptionsDirective);
            }
            _super.prototype.ngAfterContentInit.call(this);
        };
        /**
         * @param {?} event
         * @param {?=} option
         * @param {?=} index
         * @return {?}
         */
        FabDropdownComponent.prototype.onChangeHandler = /**
         * @param {?} event
         * @param {?=} option
         * @param {?=} index
         * @return {?}
         */
        function (event, option, index) {
            this.onChange.emit({
                event: event && event.nativeEvent,
                option: option,
                index: index,
            });
        };
        /**
         * @return {?}
         */
        FabDropdownComponent.prototype.onDismissHandler = /**
         * @return {?}
         */
        function () {
            this.onDismiss.emit();
        };
        /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        FabDropdownComponent.prototype._initDirective = /**
         * @private
         * @param {?} directive
         * @return {?}
         */
        function (directive) {
            this.options = directive.items;
            this.markForCheck();
        };
        FabDropdownComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-dropdown',
                        exportAs: 'fabDropdown',
                        template: "\n    <Dropdown\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [ariaLabel]=\"ariaLabel\"\n      [id]=\"id\"\n      [className]=\"className\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [disabled]=\"disabled\"\n      [required]=\"required\"\n      [calloutProps]=\"calloutProps\"\n      [panelProps]=\"panelProps\"\n      [errorMessage]=\"errorMessage\"\n      [placeholder]=\"placeholder\"\n      [openOnKeyboardFocus]=\"openOnKeyboardFocus\"\n      [options]=\"options\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [responsiveMode]=\"responsiveMode\"\n      [multiSelect]=\"multiSelect\"\n      [defaultSelectedKeys]=\"defaultSelectedKeys\"\n      [selectedKeys]=\"selectedKeys\"\n      [multiSelectDelimiter]=\"multiSelectDelimiter\"\n      [notifyOnReselect]=\"notifyOnReselect\"\n      [keytipProps]=\"keytipProps\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [RenderContainer]=\"renderContainer && onRenderContainer\"\n      [RenderList]=\"renderList && onRenderList\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderOption]=\"renderOption && onRenderOption\"\n      [RenderPlaceholder]=\"renderPlaceholder && onRenderPlaceholder\"\n      [RenderPlaceHolder]=\"renderPlaceHolder && onRenderPlaceHolder\"\n      [RenderTitle]=\"renderTitle && onRenderTitle\"\n      [RenderCaretDown]=\"renderCaretDown && onRenderCaretDown\"\n      [Change]=\"onChangeHandler\"\n      [Dismiss]=\"onDismissHandler\"\n    ></Dropdown>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDropdownComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabDropdownComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            dropdownOptionsDirective: [{ type: core$1.ContentChild, args: [DropdownOptionsDirective, { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            id: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            defaultSelectedKey: [{ type: core$1.Input }],
            selectedKey: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            required: [{ type: core$1.Input }],
            calloutProps: [{ type: core$1.Input }],
            panelProps: [{ type: core$1.Input }],
            errorMessage: [{ type: core$1.Input }],
            placeholder: [{ type: core$1.Input }],
            openOnKeyboardFocus: [{ type: core$1.Input }],
            options: [{ type: core$1.Input }],
            dropdownWidth: [{ type: core$1.Input }],
            responsiveMode: [{ type: core$1.Input }],
            multiSelect: [{ type: core$1.Input }],
            defaultSelectedKeys: [{ type: core$1.Input }],
            selectedKeys: [{ type: core$1.Input }],
            multiSelectDelimiter: [{ type: core$1.Input }],
            notifyOnReselect: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            renderContainer: [{ type: core$1.Input }],
            renderList: [{ type: core$1.Input }],
            renderItem: [{ type: core$1.Input }],
            renderOption: [{ type: core$1.Input }],
            renderPlaceholder: [{ type: core$1.Input }],
            renderPlaceHolder: [{ type: core$1.Input }],
            renderTitle: [{ type: core$1.Input }],
            renderCaretDown: [{ type: core$1.Input }],
            onChange: [{ type: core$1.Output }],
            onDismiss: [{ type: core$1.Output }]
        };
        return FabDropdownComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabDropdownComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabDropdownComponent.prototype.dropdownOptionsDirective;
        /** @type {?} */
        FabDropdownComponent.prototype.componentRef;
        /** @type {?} */
        FabDropdownComponent.prototype.label;
        /** @type {?} */
        FabDropdownComponent.prototype.ariaLabel;
        /** @type {?} */
        FabDropdownComponent.prototype.id;
        /** @type {?} */
        FabDropdownComponent.prototype.className;
        /** @type {?} */
        FabDropdownComponent.prototype.defaultSelectedKey;
        /** @type {?} */
        FabDropdownComponent.prototype.selectedKey;
        /** @type {?} */
        FabDropdownComponent.prototype.disabled;
        /** @type {?} */
        FabDropdownComponent.prototype.required;
        /** @type {?} */
        FabDropdownComponent.prototype.calloutProps;
        /** @type {?} */
        FabDropdownComponent.prototype.panelProps;
        /** @type {?} */
        FabDropdownComponent.prototype.errorMessage;
        /** @type {?} */
        FabDropdownComponent.prototype.placeholder;
        /** @type {?} */
        FabDropdownComponent.prototype.openOnKeyboardFocus;
        /** @type {?} */
        FabDropdownComponent.prototype.options;
        /** @type {?} */
        FabDropdownComponent.prototype.dropdownWidth;
        /** @type {?} */
        FabDropdownComponent.prototype.responsiveMode;
        /** @type {?} */
        FabDropdownComponent.prototype.multiSelect;
        /** @type {?} */
        FabDropdownComponent.prototype.defaultSelectedKeys;
        /** @type {?} */
        FabDropdownComponent.prototype.selectedKeys;
        /** @type {?} */
        FabDropdownComponent.prototype.multiSelectDelimiter;
        /** @type {?} */
        FabDropdownComponent.prototype.notifyOnReselect;
        /** @type {?} */
        FabDropdownComponent.prototype.keytipProps;
        /** @type {?} */
        FabDropdownComponent.prototype.theme;
        /** @type {?} */
        FabDropdownComponent.prototype.styles;
        /** @type {?} */
        FabDropdownComponent.prototype.renderContainer;
        /** @type {?} */
        FabDropdownComponent.prototype.renderList;
        /** @type {?} */
        FabDropdownComponent.prototype.renderItem;
        /** @type {?} */
        FabDropdownComponent.prototype.renderOption;
        /** @type {?} */
        FabDropdownComponent.prototype.renderPlaceholder;
        /** @type {?} */
        FabDropdownComponent.prototype.renderPlaceHolder;
        /** @type {?} */
        FabDropdownComponent.prototype.renderTitle;
        /** @type {?} */
        FabDropdownComponent.prototype.renderCaretDown;
        /** @type {?} */
        FabDropdownComponent.prototype.onChange;
        /** @type {?} */
        FabDropdownComponent.prototype.onDismiss;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderContainer;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderList;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderItem;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderOption;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderPlaceholder;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderPlaceHolder;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderTitle;
        /** @type {?} */
        FabDropdownComponent.prototype.onRenderCaretDown;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var declarations$2 = [
        FabDropdownComponent,
        DropdownOptionDirective,
        DropdownOptionsDirective
    ];
    var FabDropdownModule = /** @class */ (function () {
        function FabDropdownModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Dropdown', (/**
             * @return {?}
             */
            function () { return Dropdown.Dropdown; }));
        }
        FabDropdownModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: declarations$2,
                        exports: declarations$2,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDropdownModule.ctorParameters = function () { return []; };
        return FabDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabFabricComponent = /** @class */ (function (_super) {
        __extends(FabFabricComponent, _super);
        function FabFabricComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        FabFabricComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-fabric',
                        exportAs: 'fabFabric',
                        template: "\n    <Fabric #reactNode [componentRef]=\"componentRef\" [theme]=\"theme\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Fabric>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabFabricComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabFabricComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }]
        };
        return FabFabricComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabFabricComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabFabricComponent.prototype.componentRef;
        /** @type {?} */
        FabFabricComponent.prototype.theme;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$b = [FabFabricComponent];
    var FabFabricModule = /** @class */ (function () {
        function FabFabricModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Fabric', (/**
             * @return {?}
             */
            function () { return Fabric.Fabric; }));
        }
        FabFabricModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$b,
                        exports: components$b,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabFabricModule.ctorParameters = function () { return []; };
        return FabFabricModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GroupItemDirective = /** @class */ (function (_super) {
        __extends(GroupItemDirective, _super);
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
            this.changeableItemsHelper = new core$2.ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
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
            { type: core$1.Directive, args: [{ selector: 'fab-group-item' },] }
        ];
        GroupItemDirective.propDecorators = {
            groupItemsDirectives: [{ type: core$1.ContentChildren, args: [GroupItemDirective,] }],
            name: [{ type: core$1.Input }],
            startIndex: [{ type: core$1.Input }],
            count: [{ type: core$1.Input }],
            children: [{ type: core$1.Input }],
            level: [{ type: core$1.Input }],
            isCollapsed: [{ type: core$1.Input }],
            isShowingAll: [{ type: core$1.Input }],
            isDropEnabled: [{ type: core$1.Input }],
            data: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            hasMoreData: [{ type: core$1.Input }],
            onChildItemChanged: [{ type: core$1.Output }],
            onItemsChanged: [{ type: core$1.Input }]
        };
        return GroupItemDirective;
    }(core$2.ChangeableItemDirective));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$c = [GroupItemDirective];
    var FabGroupModule = /** @class */ (function () {
        function FabGroupModule() {
        }
        FabGroupModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$c,
                        exports: components$c,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        return FabGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabGroupedListComponent = /** @class */ (function (_super) {
        __extends(FabGroupedListComponent, _super);
        function FabGroupedListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onGroupExpandStateChanged = new core$1.EventEmitter();
            // coming from React context - we need to bind to this so we can access the Angular Component properties
            _this.onRenderCell = _this.onRenderCell.bind(_this);
            _this.onGroupExpandStateChangedHandler = _this.onGroupExpandStateChangedHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabGroupedListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._renderCell = this.createInputJsxRenderer(this.renderCell);
        };
        /**
         * @param {?=} nestingDepth
         * @param {?=} item
         * @param {?=} index
         * @return {?}
         */
        FabGroupedListComponent.prototype.onRenderCell = /**
         * @param {?=} nestingDepth
         * @param {?=} item
         * @param {?=} index
         * @return {?}
         */
        function (nestingDepth, item, index) {
            return this._renderCell({ nestingDepth: nestingDepth, item: item, index: index });
        };
        /**
         * @param {?} isSomeGroupExpanded
         * @return {?}
         */
        FabGroupedListComponent.prototype.onGroupExpandStateChangedHandler = /**
         * @param {?} isSomeGroupExpanded
         * @return {?}
         */
        function (isSomeGroupExpanded) {
            this.onGroupExpandStateChanged.emit({
                isSomeGroupExpanded: isSomeGroupExpanded,
            });
        };
        FabGroupedListComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-grouped-list',
                        exportAs: 'fabGroupedList',
                        template: "\n    <GroupedList\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [compact]=\"compact\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [dragDropHelper]=\"dragDropHelper\"\n      [eventsToRegister]=\"eventsToRegister\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"groups\"\n      [items]=\"items\"\n      [listProps]=\"listProps\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [viewport]=\"viewport\"\n      [usePageCache]=\"usePageCache\"\n      [shouldVirtualize]=\"shouldVirtualize\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [RenderCell]=\"renderCell && onRenderCell\"\n      [GroupExpandStateChanged]=\"onGroupExpandStateChangedHandler\"\n    >\n    </GroupedList>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabGroupedListComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabGroupedListComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            compact: [{ type: core$1.Input }],
            dragDropEvents: [{ type: core$1.Input }],
            dragDropHelper: [{ type: core$1.Input }],
            eventsToRegister: [{ type: core$1.Input }],
            groupProps: [{ type: core$1.Input }],
            groups: [{ type: core$1.Input }],
            items: [{ type: core$1.Input }],
            listProps: [{ type: core$1.Input }],
            selection: [{ type: core$1.Input }],
            selectionMode: [{ type: core$1.Input }],
            viewport: [{ type: core$1.Input }],
            usePageCache: [{ type: core$1.Input }],
            shouldVirtualize: [{ type: core$1.Input }],
            getGroupHeight: [{ type: core$1.Input }],
            renderCell: [{ type: core$1.Input }],
            onGroupExpandStateChanged: [{ type: core$1.Output }]
        };
        return FabGroupedListComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabGroupedListComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabGroupedListComponent.prototype.componentRef;
        /** @type {?} */
        FabGroupedListComponent.prototype.theme;
        /** @type {?} */
        FabGroupedListComponent.prototype.styles;
        /** @type {?} */
        FabGroupedListComponent.prototype.className;
        /** @type {?} */
        FabGroupedListComponent.prototype.compact;
        /** @type {?} */
        FabGroupedListComponent.prototype.dragDropEvents;
        /** @type {?} */
        FabGroupedListComponent.prototype.dragDropHelper;
        /** @type {?} */
        FabGroupedListComponent.prototype.eventsToRegister;
        /** @type {?} */
        FabGroupedListComponent.prototype.groupProps;
        /** @type {?} */
        FabGroupedListComponent.prototype.groups;
        /** @type {?} */
        FabGroupedListComponent.prototype.items;
        /** @type {?} */
        FabGroupedListComponent.prototype.listProps;
        /** @type {?} */
        FabGroupedListComponent.prototype.selection;
        /** @type {?} */
        FabGroupedListComponent.prototype.selectionMode;
        /** @type {?} */
        FabGroupedListComponent.prototype.viewport;
        /** @type {?} */
        FabGroupedListComponent.prototype.usePageCache;
        /** @type {?} */
        FabGroupedListComponent.prototype.shouldVirtualize;
        /** @type {?} */
        FabGroupedListComponent.prototype.getGroupHeight;
        /** @type {?} */
        FabGroupedListComponent.prototype.renderCell;
        /** @type {?} */
        FabGroupedListComponent.prototype.onGroupExpandStateChanged;
        /**
         * @type {?}
         * @private
         */
        FabGroupedListComponent.prototype._renderCell;
    }
    /**
     * @record
     */
    function ICellRenderContext() { }
    if (false) {
        /** @type {?|undefined} */
        ICellRenderContext.prototype.nestingDepth;
        /** @type {?|undefined} */
        ICellRenderContext.prototype.item;
        /** @type {?|undefined} */
        ICellRenderContext.prototype.index;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$d = [FabGroupedListComponent];
    var FabGroupedListModule = /** @class */ (function () {
        function FabGroupedListModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('GroupedList', (/**
             * @return {?}
             */
            function () { return GroupedList.GroupedList; }));
        }
        FabGroupedListModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$d,
                        exports: components$d,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabGroupedListModule.ctorParameters = function () { return []; };
        return FabGroupedListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabExpandingCardComponent = /** @class */ (function (_super) {
        __extends(FabExpandingCardComponent, _super);
        function FabExpandingCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onEnter = new core$1.EventEmitter();
            _this.onLeave = new core$1.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        FabExpandingCardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
            this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
        };
        FabExpandingCardComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-expanding-card',
                        exportAs: 'fabExpandingCard',
                        template: "\n    <ExpandingCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [compactCardHeight]=\"compactCardHeight\"\n      [expandedCardHeight]=\"expandedCardHeight\"\n      [mode]=\"mode\"\n      [RenderCompactCard]=\"renderCompactCard && onRenderCompactCard\"\n      [RenderExpandedCard]=\"renderExpandedCard && onRenderExpandedCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ExpandingCard>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabExpandingCardComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabExpandingCardComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: false },] }],
            componentRef: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            directionalHint: [{ type: core$1.Input }],
            directionalHintFixed: [{ type: core$1.Input }],
            firstFocus: [{ type: core$1.Input }],
            gapSpace: [{ type: core$1.Input }],
            renderData: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            targetElement: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            trapFocus: [{ type: core$1.Input }],
            compactCardHeight: [{ type: core$1.Input }],
            expandedCardHeight: [{ type: core$1.Input }],
            mode: [{ type: core$1.Input }],
            renderCompactCard: [{ type: core$1.Input }],
            renderExpandedCard: [{ type: core$1.Input }],
            onEnter: [{ type: core$1.Output }],
            onLeave: [{ type: core$1.Output }]
        };
        return FabExpandingCardComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabExpandingCardComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabExpandingCardComponent.prototype.componentRef;
        /** @type {?} */
        FabExpandingCardComponent.prototype.className;
        /** @type {?} */
        FabExpandingCardComponent.prototype.directionalHint;
        /** @type {?} */
        FabExpandingCardComponent.prototype.directionalHintFixed;
        /** @type {?} */
        FabExpandingCardComponent.prototype.firstFocus;
        /** @type {?} */
        FabExpandingCardComponent.prototype.gapSpace;
        /** @type {?} */
        FabExpandingCardComponent.prototype.renderData;
        /** @type {?} */
        FabExpandingCardComponent.prototype.styles;
        /** @type {?} */
        FabExpandingCardComponent.prototype.targetElement;
        /** @type {?} */
        FabExpandingCardComponent.prototype.theme;
        /** @type {?} */
        FabExpandingCardComponent.prototype.trapFocus;
        /** @type {?} */
        FabExpandingCardComponent.prototype.compactCardHeight;
        /** @type {?} */
        FabExpandingCardComponent.prototype.expandedCardHeight;
        /** @type {?} */
        FabExpandingCardComponent.prototype.mode;
        /** @type {?} */
        FabExpandingCardComponent.prototype.renderCompactCard;
        /** @type {?} */
        FabExpandingCardComponent.prototype.renderExpandedCard;
        /** @type {?} */
        FabExpandingCardComponent.prototype.onEnter;
        /** @type {?} */
        FabExpandingCardComponent.prototype.onLeave;
        /** @type {?} */
        FabExpandingCardComponent.prototype.onRenderCompactCard;
        /** @type {?} */
        FabExpandingCardComponent.prototype.onRenderExpandedCard;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabHoverCardComponent = /** @class */ (function (_super) {
        __extends(FabHoverCardComponent, _super);
        function FabHoverCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onCardVisible = new core$1.EventEmitter();
            _this.onCardHide = new core$1.EventEmitter();
            _this.onCardExpand = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(FabHoverCardComponent.prototype, "expandingCardOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._expandingCardOptions;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._expandingCardOptions = value;
                if (value) {
                    this.transformedExpandingCardProps = this._transformExpandingCardOptionsToProps(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FabHoverCardComponent.prototype, "plainCardOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._plainCardOptions;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._plainCardOptions = value;
                if (value) {
                    this.transformedPlainCardProps = this._transformPlainCardOptionsToProps(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        FabHoverCardComponent.prototype._transformExpandingCardOptionsToProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var sharedProperties = utils.omit(options, 'renderCompactCard', 'renderExpandedCard');
            /** @type {?} */
            var compactCardRenderer = this.createInputJsxRenderer(options.renderCompactCard);
            /** @type {?} */
            var expandedCardRenderer = this.createInputJsxRenderer(options.renderExpandedCard);
            return Object.assign({}, sharedProperties, compactCardRenderer &&
                ((/** @type {?} */ ({ onRenderCompactCard: (/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return compactCardRenderer({ data: data }); }) }))), expandedCardRenderer &&
                ((/** @type {?} */ ({ onRenderExpandedCard: (/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return expandedCardRenderer({ data: data }); }) }))));
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        FabHoverCardComponent.prototype._transformPlainCardOptionsToProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var sharedProperties = utils.omit(options, 'renderPlainCard');
            /** @type {?} */
            var plainCardRenderer = this.createInputJsxRenderer(options.renderPlainCard);
            return Object.assign({}, sharedProperties, plainCardRenderer &&
                ((/** @type {?} */ ({ onRenderPlainCard: (/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return plainCardRenderer({ data: data }); }) }))));
        };
        FabHoverCardComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-hover-card',
                        exportAs: 'fabHoverCard',
                        template: "\n    <HoverCard\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [type]=\"type\"\n      [expandingCardProps]=\"transformedExpandingCardProps\"\n      [plainCardProps]=\"transformedPlainCardProps\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [cardOpenDelay]=\"cardOpenDelay\"\n      [cardDismissDelay]=\"cardDismissDelay\"\n      [expandedCardOpenDelay]=\"expandedCardOpenDelay\"\n      [sticky]=\"sticky\"\n      [instantOpenOnClick]=\"instantOpenOnClick\"\n      [styles]=\"styles\"\n      [target]=\"target\"\n      [eventListenerTarget]=\"eventListenerTarget\"\n      [trapFocus]=\"trapFocus\"\n      [shouldBlockHoverCard]=\"shouldBlockHoverCard\"\n      [setInitialFocus]=\"setInitialFocus\"\n      [openHotKey]=\"openHotKey\"\n      (onCardVisible)=\"onCardVisible.emit()\"\n      (onCardHide)=\"onCardHide.emit()\"\n      (onCardExpand)=\"onCardExpand.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </HoverCard>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabHoverCardComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabHoverCardComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            setAriaDescribedBy: [{ type: core$1.Input }],
            cardOpenDelay: [{ type: core$1.Input }],
            cardDismissDelay: [{ type: core$1.Input }],
            expandedCardOpenDelay: [{ type: core$1.Input }],
            sticky: [{ type: core$1.Input }],
            instantOpenOnClick: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            target: [{ type: core$1.Input }],
            eventListenerTarget: [{ type: core$1.Input }],
            trapFocus: [{ type: core$1.Input }],
            shouldBlockHoverCard: [{ type: core$1.Input }],
            setInitialFocus: [{ type: core$1.Input }],
            openHotKey: [{ type: core$1.Input }],
            expandingCardOptions: [{ type: core$1.Input }],
            plainCardOptions: [{ type: core$1.Input }],
            onCardVisible: [{ type: core$1.Output }],
            onCardHide: [{ type: core$1.Output }],
            onCardExpand: [{ type: core$1.Output }]
        };
        return FabHoverCardComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabHoverCardComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabHoverCardComponent.prototype.componentRef;
        /** @type {?} */
        FabHoverCardComponent.prototype.className;
        /** @type {?} */
        FabHoverCardComponent.prototype.theme;
        /** @type {?} */
        FabHoverCardComponent.prototype.type;
        /** @type {?} */
        FabHoverCardComponent.prototype.setAriaDescribedBy;
        /** @type {?} */
        FabHoverCardComponent.prototype.cardOpenDelay;
        /** @type {?} */
        FabHoverCardComponent.prototype.cardDismissDelay;
        /** @type {?} */
        FabHoverCardComponent.prototype.expandedCardOpenDelay;
        /** @type {?} */
        FabHoverCardComponent.prototype.sticky;
        /** @type {?} */
        FabHoverCardComponent.prototype.instantOpenOnClick;
        /** @type {?} */
        FabHoverCardComponent.prototype.styles;
        /** @type {?} */
        FabHoverCardComponent.prototype.target;
        /** @type {?} */
        FabHoverCardComponent.prototype.eventListenerTarget;
        /** @type {?} */
        FabHoverCardComponent.prototype.trapFocus;
        /** @type {?} */
        FabHoverCardComponent.prototype.shouldBlockHoverCard;
        /** @type {?} */
        FabHoverCardComponent.prototype.setInitialFocus;
        /** @type {?} */
        FabHoverCardComponent.prototype.openHotKey;
        /** @type {?} */
        FabHoverCardComponent.prototype.onCardVisible;
        /** @type {?} */
        FabHoverCardComponent.prototype.onCardHide;
        /** @type {?} */
        FabHoverCardComponent.prototype.onCardExpand;
        /** @type {?} */
        FabHoverCardComponent.prototype.transformedExpandingCardProps;
        /**
         * @type {?}
         * @private
         */
        FabHoverCardComponent.prototype._expandingCardOptions;
        /** @type {?} */
        FabHoverCardComponent.prototype.transformedPlainCardProps;
        /**
         * @type {?}
         * @private
         */
        FabHoverCardComponent.prototype._plainCardOptions;
    }
    /**
     * Counterpart of `IExpandingCardProps`, with Angular adjustments.
     * @record
     */
    function IExpandingCardOptions() { }
    if (false) {
        /** @type {?|undefined} */
        IExpandingCardOptions.prototype.renderCompactCard;
        /** @type {?|undefined} */
        IExpandingCardOptions.prototype.renderExpandedCard;
    }
    /**
     * @record
     */
    function IPlainCardOptions() { }
    if (false) {
        /** @type {?|undefined} */
        IPlainCardOptions.prototype.renderPlainCard;
    }
    /**
     * @record
     * @template T
     */
    function RenderCardContext() { }
    if (false) {
        /** @type {?} */
        RenderCardContext.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabPlainCardComponent = /** @class */ (function (_super) {
        __extends(FabPlainCardComponent, _super);
        function FabPlainCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onEnter = new core$1.EventEmitter();
            _this.onLeave = new core$1.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        FabPlainCardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
        };
        FabPlainCardComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-plain-card',
                        exportAs: 'fabPlainCard',
                        template: "\n    <PlainCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [RenderPlainCard]=\"renderPlainCard && onRenderPlainCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PlainCard>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPlainCardComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPlainCardComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: false },] }],
            componentRef: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            directionalHint: [{ type: core$1.Input }],
            directionalHintFixed: [{ type: core$1.Input }],
            firstFocus: [{ type: core$1.Input }],
            gapSpace: [{ type: core$1.Input }],
            renderData: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            targetElement: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            trapFocus: [{ type: core$1.Input }],
            renderPlainCard: [{ type: core$1.Input }],
            onEnter: [{ type: core$1.Output }],
            onLeave: [{ type: core$1.Output }]
        };
        return FabPlainCardComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPlainCardComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabPlainCardComponent.prototype.componentRef;
        /** @type {?} */
        FabPlainCardComponent.prototype.className;
        /** @type {?} */
        FabPlainCardComponent.prototype.directionalHint;
        /** @type {?} */
        FabPlainCardComponent.prototype.directionalHintFixed;
        /** @type {?} */
        FabPlainCardComponent.prototype.firstFocus;
        /** @type {?} */
        FabPlainCardComponent.prototype.gapSpace;
        /** @type {?} */
        FabPlainCardComponent.prototype.renderData;
        /** @type {?} */
        FabPlainCardComponent.prototype.styles;
        /** @type {?} */
        FabPlainCardComponent.prototype.targetElement;
        /** @type {?} */
        FabPlainCardComponent.prototype.theme;
        /** @type {?} */
        FabPlainCardComponent.prototype.trapFocus;
        /** @type {?} */
        FabPlainCardComponent.prototype.renderPlainCard;
        /** @type {?} */
        FabPlainCardComponent.prototype.onEnter;
        /** @type {?} */
        FabPlainCardComponent.prototype.onLeave;
        /** @type {?} */
        FabPlainCardComponent.prototype.onRenderPlainCard;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$e = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
    var FabHoverCardModule = /** @class */ (function () {
        function FabHoverCardModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('ExpandingCard', (/**
             * @return {?}
             */
            function () { return HoverCard.ExpandingCard; }));
            core.registerElement('HoverCard', (/**
             * @return {?}
             */
            function () { return HoverCard.HoverCard; }));
            core.registerElement('PlainCard', (/**
             * @return {?}
             */
            function () { return HoverCard.PlainCard; }));
        }
        FabHoverCardModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$e,
                        exports: components$e,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabHoverCardModule.ctorParameters = function () { return []; };
        return FabHoverCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabIconComponent = /** @class */ (function (_super) {
        __extends(FabIconComponent, _super);
        function FabIconComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        }
        FabIconComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-icon',
                        exportAs: 'fabIcon',
                        template: "\n    <Icon\n      #reactNode\n      [iconName]=\"iconName\"\n      [ariaLabel]=\"ariaLabel\"\n      [iconType]=\"iconType\"\n      [imageProps]=\"imageProps\"\n      [imageErrorAs]=\"imageErrorAs\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </Icon>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabIconComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabIconComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            iconName: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            iconType: [{ type: core$1.Input }],
            imageProps: [{ type: core$1.Input }],
            imageErrorAs: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }]
        };
        return FabIconComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabIconComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabIconComponent.prototype.componentRef;
        /** @type {?} */
        FabIconComponent.prototype.iconName;
        /** @type {?} */
        FabIconComponent.prototype.ariaLabel;
        /** @type {?} */
        FabIconComponent.prototype.iconType;
        /** @type {?} */
        FabIconComponent.prototype.imageProps;
        /** @type {?} */
        FabIconComponent.prototype.imageErrorAs;
        /** @type {?} */
        FabIconComponent.prototype.styles;
        /** @type {?} */
        FabIconComponent.prototype.theme;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$f = [FabIconComponent];
    var FabIconModule = /** @class */ (function () {
        function FabIconModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Icon', (/**
             * @return {?}
             */
            function () { return Icon.Icon; }));
        }
        FabIconModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$f,
                        exports: components$f,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabIconModule.ctorParameters = function () { return []; };
        return FabIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabImageComponent = /** @class */ (function (_super) {
        __extends(FabImageComponent, _super);
        function FabImageComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onLoadingStateChange = new core$1.EventEmitter();
            return _this;
        }
        FabImageComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-image',
                        exportAs: 'fabImage',
                        template: "\n    <!-- prettier-ignore -->\n    <Image\n      #reactNode\n      [alt]=\"alt\"\n      [crossOrigin]=\"crossOrigin\"\n      [height]=\"height\"\n      [sizes]=\"sizes\"\n      [src]=\"src\"\n      [srcSet]=\"srcSet\"\n      [useMap]=\"useMap\"\n      [width]=\"width\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [shouldFadeIn]=\"shouldFadeIn\"\n      [shouldStartVisible]=\"shouldStartVisible\"\n      [imageFit]=\"imageFit\"\n      [errorSrc]=\"errorSrc\"\n      [maximizeFrame]=\"maximizeFrame\"\n      (onLoadingStateChange)=\"onLoadingStateChange.emit($event)\"\n      [coverStyle]=\"coverStyle\"\n    >\n    </Image>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabImageComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabImageComponent.propDecorators = {
            alt: [{ type: core$1.Input }],
            crossOrigin: [{ type: core$1.Input }],
            height: [{ type: core$1.Input }],
            sizes: [{ type: core$1.Input }],
            src: [{ type: core$1.Input }],
            srcSet: [{ type: core$1.Input }],
            useMap: [{ type: core$1.Input }],
            width: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            shouldFadeIn: [{ type: core$1.Input }],
            shouldStartVisible: [{ type: core$1.Input }],
            imageFit: [{ type: core$1.Input }],
            errorSrc: [{ type: core$1.Input }],
            maximizeFrame: [{ type: core$1.Input }],
            coverStyle: [{ type: core$1.Input }],
            onLoadingStateChange: [{ type: core$1.Output }],
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabImageComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabImageComponent.prototype.alt;
        /** @type {?} */
        FabImageComponent.prototype.crossOrigin;
        /** @type {?} */
        FabImageComponent.prototype.height;
        /** @type {?} */
        FabImageComponent.prototype.sizes;
        /** @type {?} */
        FabImageComponent.prototype.src;
        /** @type {?} */
        FabImageComponent.prototype.srcSet;
        /** @type {?} */
        FabImageComponent.prototype.useMap;
        /** @type {?} */
        FabImageComponent.prototype.width;
        /** @type {?} */
        FabImageComponent.prototype.styles;
        /** @type {?} */
        FabImageComponent.prototype.theme;
        /** @type {?} */
        FabImageComponent.prototype.className;
        /** @type {?} */
        FabImageComponent.prototype.shouldFadeIn;
        /** @type {?} */
        FabImageComponent.prototype.shouldStartVisible;
        /** @type {?} */
        FabImageComponent.prototype.imageFit;
        /** @type {?} */
        FabImageComponent.prototype.errorSrc;
        /** @type {?} */
        FabImageComponent.prototype.maximizeFrame;
        /** @type {?} */
        FabImageComponent.prototype.coverStyle;
        /** @type {?} */
        FabImageComponent.prototype.onLoadingStateChange;
        /**
         * @type {?}
         * @protected
         */
        FabImageComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$g = [FabImageComponent];
    var FabImageModule = /** @class */ (function () {
        function FabImageModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Image', (/**
             * @return {?}
             */
            function () { return Image.Image; }));
        }
        FabImageModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$g,
                        exports: components$g,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabImageModule.ctorParameters = function () { return []; };
        return FabImageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabLinkComponent = /** @class */ (function (_super) {
        __extends(FabLinkComponent, _super);
        function FabLinkComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.LinkType = Link.Link;
            return _this;
        }
        FabLinkComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-link',
                        exportAs: 'fabLink',
                        template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"LinkType\"\n      [href]=\"href\"\n      [type]=\"type\"\n      [download]=\"download\"\n      [hrefLang]=\"hrefLang\"\n      [media]=\"media\"\n      [rel]=\"rel\"\n      [target]=\"target\"\n      [autoFocus]=\"autoFocus\"\n      [form]=\"form\"\n      [formAction]=\"formAction\"\n      [formEncType]=\"formEncType\"\n      [formMethod]=\"formMethod\"\n      [formNoValidate]=\"formNoValidate\"\n      [formTarget]=\"formTarget\"\n      [name]=\"name\"\n      [value]=\"value\"\n      [as]=\"linkAs\"\n      [componentRef]=\"componentRef\"\n      [disabled]=\"disabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [keytipProps]=\"keytipProps\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Disguise>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabLinkComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabLinkComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            href: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            download: [{ type: core$1.Input }],
            hrefLang: [{ type: core$1.Input }],
            media: [{ type: core$1.Input }],
            rel: [{ type: core$1.Input }],
            target: [{ type: core$1.Input }],
            autoFocus: [{ type: core$1.Input }],
            form: [{ type: core$1.Input }],
            formAction: [{ type: core$1.Input }],
            formEncType: [{ type: core$1.Input }],
            formMethod: [{ type: core$1.Input }],
            formNoValidate: [{ type: core$1.Input }],
            formTarget: [{ type: core$1.Input }],
            name: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            componentRef: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            linkAs: [{ type: core$1.Input, args: ['as',] }],
            keytipProps: [{ type: core$1.Input }]
        };
        return FabLinkComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabLinkComponent.prototype.LinkType;
        /**
         * @type {?}
         * @protected
         */
        FabLinkComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabLinkComponent.prototype.href;
        /** @type {?} */
        FabLinkComponent.prototype.type;
        /** @type {?} */
        FabLinkComponent.prototype.download;
        /** @type {?} */
        FabLinkComponent.prototype.hrefLang;
        /** @type {?} */
        FabLinkComponent.prototype.media;
        /** @type {?} */
        FabLinkComponent.prototype.rel;
        /** @type {?} */
        FabLinkComponent.prototype.target;
        /** @type {?} */
        FabLinkComponent.prototype.autoFocus;
        /** @type {?} */
        FabLinkComponent.prototype.form;
        /** @type {?} */
        FabLinkComponent.prototype.formAction;
        /** @type {?} */
        FabLinkComponent.prototype.formEncType;
        /** @type {?} */
        FabLinkComponent.prototype.formMethod;
        /** @type {?} */
        FabLinkComponent.prototype.formNoValidate;
        /** @type {?} */
        FabLinkComponent.prototype.formTarget;
        /** @type {?} */
        FabLinkComponent.prototype.name;
        /** @type {?} */
        FabLinkComponent.prototype.value;
        /** @type {?} */
        FabLinkComponent.prototype.componentRef;
        /** @type {?} */
        FabLinkComponent.prototype.disabled;
        /** @type {?} */
        FabLinkComponent.prototype.styles;
        /** @type {?} */
        FabLinkComponent.prototype.theme;
        /** @type {?} */
        FabLinkComponent.prototype.linkAs;
        /** @type {?} */
        FabLinkComponent.prototype.keytipProps;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$h = [FabLinkComponent];
    var FabLinkModule = /** @class */ (function () {
        function FabLinkModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Link', (/**
             * @return {?}
             */
            function () { return Link.Link; }));
        }
        FabLinkModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$h,
                        exports: components$h,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabLinkModule.ctorParameters = function () { return []; };
        return FabLinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabMarqueeSelectionComponent = /** @class */ (function (_super) {
        __extends(FabMarqueeSelectionComponent, _super);
        function FabMarqueeSelectionComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        }
        FabMarqueeSelectionComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-marquee-selection',
                        exportAs: 'fabMarqueeSelection',
                        template: "\n    <MarqueeSelection\n      #reactNode\n      [selection]=\"selection\"\n      [className]=\"className\"\n      [componentRef]=\"componentRef\"\n      [isDraggingConstrainedToRoot]=\"isDraggingConstrainedToRoot\"\n      [isEnabled]=\"isEnabled\"\n      [rootProps]=\"rootProps\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [ShouldStartSelection]=\"onShouldStartSelection\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MarqueeSelection>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabMarqueeSelectionComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabMarqueeSelectionComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            selection: [{ type: core$1.Input }],
            rootProps: [{ type: core$1.Input }],
            onShouldStartSelection: [{ type: core$1.Input }],
            isEnabled: [{ type: core$1.Input }],
            isDraggingConstrainedToRoot: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }]
        };
        return FabMarqueeSelectionComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabMarqueeSelectionComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.componentRef;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.selection;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.rootProps;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.onShouldStartSelection;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.isEnabled;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.isDraggingConstrainedToRoot;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.className;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.theme;
        /** @type {?} */
        FabMarqueeSelectionComponent.prototype.styles;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$i = [FabMarqueeSelectionComponent];
    var FabMarqueeSelectionModule = /** @class */ (function () {
        function FabMarqueeSelectionModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('MarqueeSelection', (/**
             * @return {?}
             */
            function () { return MarqueeSelection.MarqueeSelection; }));
        }
        FabMarqueeSelectionModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$i,
                        exports: __spread(components$i),
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabMarqueeSelectionModule.ctorParameters = function () { return []; };
        return FabMarqueeSelectionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabMessageBarComponent = /** @class */ (function (_super) {
        __extends(FabMessageBarComponent, _super);
        function FabMessageBarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
            _this.dismissable = null;
            _this.onDismiss = new core$1.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        FabMessageBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var onRenderActions = this.createRenderPropHandler(this.renderActions);
            this.actions = onRenderActions();
        };
        Object.defineProperty(FabMessageBarComponent.prototype, "onDismissInternal", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (!this.dismissable) {
                    return null;
                }
                return (/**
                 * @param {?} ev
                 * @return {?}
                 */
                function (ev) {
                    _this.onDismiss.emit(ev && ev.nativeEvent);
                });
            },
            enumerable: true,
            configurable: true
        });
        FabMessageBarComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-message-bar',
                        exportAs: 'fabMessageBar',
                        template: "\n    <MessageBar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [messageBarType]=\"messageBarType\"\n      [isMultiline]=\"isMultiline\"\n      [dismissButtonAriaLabel]=\"dismissButtonAriaLabel\"\n      [truncated]=\"truncated\"\n      [overflowButtonAriaLabel]=\"overflowButtonAriaLabel\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [Dismiss]=\"onDismissInternal\"\n      [actions]=\"renderActions && actions\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBar>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabMessageBarComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabMessageBarComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            messageBarType: [{ type: core$1.Input }],
            isMultiline: [{ type: core$1.Input }],
            dismissButtonAriaLabel: [{ type: core$1.Input }],
            truncated: [{ type: core$1.Input }],
            overflowButtonAriaLabel: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            renderActions: [{ type: core$1.Input }],
            dismissable: [{ type: core$1.Input }],
            onDismiss: [{ type: core$1.Output }]
        };
        return FabMessageBarComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabMessageBarComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabMessageBarComponent.prototype.componentRef;
        /** @type {?} */
        FabMessageBarComponent.prototype.messageBarType;
        /** @type {?} */
        FabMessageBarComponent.prototype.isMultiline;
        /** @type {?} */
        FabMessageBarComponent.prototype.dismissButtonAriaLabel;
        /** @type {?} */
        FabMessageBarComponent.prototype.truncated;
        /** @type {?} */
        FabMessageBarComponent.prototype.overflowButtonAriaLabel;
        /** @type {?} */
        FabMessageBarComponent.prototype.className;
        /** @type {?} */
        FabMessageBarComponent.prototype.theme;
        /** @type {?} */
        FabMessageBarComponent.prototype.styles;
        /** @type {?} */
        FabMessageBarComponent.prototype.renderActions;
        /** @type {?} */
        FabMessageBarComponent.prototype.dismissable;
        /** @type {?} */
        FabMessageBarComponent.prototype.onDismiss;
        /** @type {?} */
        FabMessageBarComponent.prototype.actions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$j = [FabMessageBarComponent];
    var FabMessageBarModule = /** @class */ (function () {
        function FabMessageBarModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('MessageBar', (/**
             * @return {?}
             */
            function () { return MessageBar.MessageBar; }));
        }
        FabMessageBarModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$j,
                        exports: components$j,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabMessageBarModule.ctorParameters = function () { return []; };
        return FabMessageBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabModalComponent = /** @class */ (function (_super) {
        __extends(FabModalComponent, _super);
        function FabModalComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onLayerDidMount = new core$1.EventEmitter();
            _this.onDismiss = new core$1.EventEmitter();
            _this.onDismissed = new core$1.EventEmitter();
            _this.onDismissHandler = _this.onDismissHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabModalComponent.prototype.onDismissHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onDismiss.emit(ev && ev.nativeEvent);
        };
        FabModalComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-modal',
                        exportAs: 'fabModal',
                        template: "\n    <Modal\n      #reactNode\n      [responsiveMode]=\"responsiveMode\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [isClickableOutsideFocusTrap]=\"isClickableOutsideFocusTrap\"\n      [componentRef]=\"componentRef\"\n      [isOpen]=\"isOpen\"\n      [isDarkOverlay]=\"isDarkOverlay\"\n      [layerProps]=\"layerProps\"\n      [isBlocking]=\"isBlocking\"\n      [isModeless]=\"isModeless\"\n      [className]=\"className\"\n      [containerClassName]=\"containerClassName\"\n      [scrollableContentClassName]=\"scrollableContentClassName\"\n      [titleAriaId]=\"titleAriaId\"\n      [subtitleAriaId]=\"subtitleAriaId\"\n      [topOffsetFixed]=\"topOffsetFixed\"\n      [dragOptions]=\"dragOptions\"\n      [Dismiss]=\"onDismissHandler\"\n      (onLayerDidMount)=\"onLayerDidMount.emit()\"\n      (onDismissed)=\"onDismissed.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Modal>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabModalComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabModalComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            responsiveMode: [{ type: core$1.Input }],
            elementToFocusOnDismiss: [{ type: core$1.Input }],
            ignoreExternalFocusing: [{ type: core$1.Input }],
            forceFocusInsideTrap: [{ type: core$1.Input }],
            firstFocusableSelector: [{ type: core$1.Input }],
            closeButtonAriaLabel: [{ type: core$1.Input }],
            isClickableOutsideFocusTrap: [{ type: core$1.Input }],
            componentRef: [{ type: core$1.Input }],
            isOpen: [{ type: core$1.Input }],
            isDarkOverlay: [{ type: core$1.Input }],
            layerProps: [{ type: core$1.Input }],
            isBlocking: [{ type: core$1.Input }],
            isModeless: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            containerClassName: [{ type: core$1.Input }],
            scrollableContentClassName: [{ type: core$1.Input }],
            titleAriaId: [{ type: core$1.Input }],
            subtitleAriaId: [{ type: core$1.Input }],
            topOffsetFixed: [{ type: core$1.Input }],
            dragOptions: [{ type: core$1.Input }],
            onLayerDidMount: [{ type: core$1.Output }],
            onDismiss: [{ type: core$1.Output }],
            onDismissed: [{ type: core$1.Output }]
        };
        return FabModalComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabModalComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabModalComponent.prototype.responsiveMode;
        /** @type {?} */
        FabModalComponent.prototype.elementToFocusOnDismiss;
        /** @type {?} */
        FabModalComponent.prototype.ignoreExternalFocusing;
        /** @type {?} */
        FabModalComponent.prototype.forceFocusInsideTrap;
        /** @type {?} */
        FabModalComponent.prototype.firstFocusableSelector;
        /** @type {?} */
        FabModalComponent.prototype.closeButtonAriaLabel;
        /** @type {?} */
        FabModalComponent.prototype.isClickableOutsideFocusTrap;
        /** @type {?} */
        FabModalComponent.prototype.componentRef;
        /** @type {?} */
        FabModalComponent.prototype.isOpen;
        /** @type {?} */
        FabModalComponent.prototype.isDarkOverlay;
        /** @type {?} */
        FabModalComponent.prototype.layerProps;
        /** @type {?} */
        FabModalComponent.prototype.isBlocking;
        /** @type {?} */
        FabModalComponent.prototype.isModeless;
        /** @type {?} */
        FabModalComponent.prototype.className;
        /** @type {?} */
        FabModalComponent.prototype.containerClassName;
        /** @type {?} */
        FabModalComponent.prototype.scrollableContentClassName;
        /** @type {?} */
        FabModalComponent.prototype.titleAriaId;
        /** @type {?} */
        FabModalComponent.prototype.subtitleAriaId;
        /** @type {?} */
        FabModalComponent.prototype.topOffsetFixed;
        /** @type {?} */
        FabModalComponent.prototype.dragOptions;
        /** @type {?} */
        FabModalComponent.prototype.onLayerDidMount;
        /** @type {?} */
        FabModalComponent.prototype.onDismiss;
        /** @type {?} */
        FabModalComponent.prototype.onDismissed;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$k = [FabModalComponent];
    var FabModalModule = /** @class */ (function () {
        function FabModalModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Modal', (/**
             * @return {?}
             */
            function () { return Modal.Modal; }));
        }
        FabModalModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$k,
                        exports: components$k,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabModalModule.ctorParameters = function () { return []; };
        return FabModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabPanelComponent = /** @class */ (function (_super) {
        __extends(FabPanelComponent, _super);
        function FabPanelComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onLightDismissClick = new core$1.EventEmitter();
            _this.onOpen = new core$1.EventEmitter();
            _this.onOpened = new core$1.EventEmitter();
            _this.onDismiss = new core$1.EventEmitter();
            _this.onDismissed = new core$1.EventEmitter();
            // coming from React context - we need to bind to this so we can access the Angular Component properties
            _this.onRenderHeader = _this.onRenderHeader.bind(_this);
            _this.onDismissHandler = _this.onDismissHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderNavigation = this.createRenderPropHandler(this.renderNavigation);
            this.onRenderNavigationContent = this.createRenderPropHandler(this.renderNavigationContent);
            this._renderHeader = this.createInputJsxRenderer(this.renderHeader);
            this.onRenderBody = this.createRenderPropHandler(this.renderBody);
            this.onRenderFooter = this.createRenderPropHandler(this.renderFooter);
            this.onRenderFooterContent = this.createRenderPropHandler(this.renderFooterContent);
        };
        /**
         * @param {?=} props
         * @param {?=} defaultRender
         * @param {?=} headerTextId
         * @return {?}
         */
        FabPanelComponent.prototype.onRenderHeader = /**
         * @param {?=} props
         * @param {?=} defaultRender
         * @param {?=} headerTextId
         * @return {?}
         */
        function (props, defaultRender, headerTextId) {
            if (!this.renderHeader) {
                return typeof defaultRender === 'function' ? defaultRender(props, defaultRender, headerTextId) : null;
            }
            return this._renderHeader({ props: props, headerTextId: headerTextId });
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabPanelComponent.prototype.onDismissHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onDismiss.emit({
                ev: ev && ev.nativeEvent,
            });
        };
        FabPanelComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-panel',
                        exportAs: 'fabPanel',
                        template: "\n    <Panel\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [isOpen]=\"isOpen\"\n      [hasCloseButton]=\"hasCloseButton\"\n      [isLightDismiss]=\"isLightDismiss\"\n      [isHiddenOnDismiss]=\"isHiddenOnDismiss\"\n      [isBlocking]=\"isBlocking\"\n      [isFooterAtBottom]=\"isFooterAtBottom\"\n      [headerText]=\"headerText\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [type]=\"type\"\n      [customWidth]=\"customWidth\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [headerClassName]=\"headerClassName\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [focusTrapZoneProps]=\"focusTrapZoneProps\"\n      [layerProps]=\"layerProps\"\n      [componentId]=\"componentId\"\n      [RenderHeader]=\"renderHeader && onRenderHeader\"\n      [RenderNavigation]=\"renderNavigation && onRenderNavigation\"\n      [RenderNavigationContent]=\"renderNavigationContent && onRenderNavigationContent\"\n      [RenderBody]=\"renderBody && onRenderBody\"\n      [RenderFooter]=\"renderFooter && onRenderFooter\"\n      [RenderFooterContent]=\"renderFooterContent && onRenderFooterContent\"\n      [Dismiss]=\"onDismissHandler\"\n      (onOpen)=\"onOpen.emit($event)\"\n      (onOpened)=\"onOpened.emit($event)\"\n      (onDismissed)=\"onDismissed.emit($event)\"\n      (onLightDismissClick)=\"onLightDismissClick.emit($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Panel>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPanelComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPanelComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            isOpen: [{ type: core$1.Input }],
            hasCloseButton: [{ type: core$1.Input }],
            isLightDismiss: [{ type: core$1.Input }],
            isHiddenOnDismiss: [{ type: core$1.Input }],
            isBlocking: [{ type: core$1.Input }],
            isFooterAtBottom: [{ type: core$1.Input }],
            headerText: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            customWidth: [{ type: core$1.Input }],
            closeButtonAriaLabel: [{ type: core$1.Input }],
            headerClassName: [{ type: core$1.Input }],
            elementToFocusOnDismiss: [{ type: core$1.Input }],
            ignoreExternalFocusing: [{ type: core$1.Input }],
            forceFocusInsideTrap: [{ type: core$1.Input }],
            firstFocusableSelector: [{ type: core$1.Input }],
            focusTrapZoneProps: [{ type: core$1.Input }],
            layerProps: [{ type: core$1.Input }],
            componentId: [{ type: core$1.Input }],
            renderNavigation: [{ type: core$1.Input }],
            renderNavigationContent: [{ type: core$1.Input }],
            renderHeader: [{ type: core$1.Input }],
            renderBody: [{ type: core$1.Input }],
            renderFooter: [{ type: core$1.Input }],
            renderFooterContent: [{ type: core$1.Input }],
            onLightDismissClick: [{ type: core$1.Output }],
            onOpen: [{ type: core$1.Output }],
            onOpened: [{ type: core$1.Output }],
            onDismiss: [{ type: core$1.Output }],
            onDismissed: [{ type: core$1.Output }]
        };
        return FabPanelComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPanelComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabPanelComponent.prototype.componentRef;
        /** @type {?} */
        FabPanelComponent.prototype.isOpen;
        /** @type {?} */
        FabPanelComponent.prototype.hasCloseButton;
        /** @type {?} */
        FabPanelComponent.prototype.isLightDismiss;
        /** @type {?} */
        FabPanelComponent.prototype.isHiddenOnDismiss;
        /** @type {?} */
        FabPanelComponent.prototype.isBlocking;
        /** @type {?} */
        FabPanelComponent.prototype.isFooterAtBottom;
        /** @type {?} */
        FabPanelComponent.prototype.headerText;
        /** @type {?} */
        FabPanelComponent.prototype.styles;
        /** @type {?} */
        FabPanelComponent.prototype.theme;
        /** @type {?} */
        FabPanelComponent.prototype.className;
        /** @type {?} */
        FabPanelComponent.prototype.type;
        /** @type {?} */
        FabPanelComponent.prototype.customWidth;
        /** @type {?} */
        FabPanelComponent.prototype.closeButtonAriaLabel;
        /** @type {?} */
        FabPanelComponent.prototype.headerClassName;
        /** @type {?} */
        FabPanelComponent.prototype.elementToFocusOnDismiss;
        /** @type {?} */
        FabPanelComponent.prototype.ignoreExternalFocusing;
        /** @type {?} */
        FabPanelComponent.prototype.forceFocusInsideTrap;
        /** @type {?} */
        FabPanelComponent.prototype.firstFocusableSelector;
        /** @type {?} */
        FabPanelComponent.prototype.focusTrapZoneProps;
        /** @type {?} */
        FabPanelComponent.prototype.layerProps;
        /** @type {?} */
        FabPanelComponent.prototype.componentId;
        /** @type {?} */
        FabPanelComponent.prototype.renderNavigation;
        /** @type {?} */
        FabPanelComponent.prototype.renderNavigationContent;
        /** @type {?} */
        FabPanelComponent.prototype.renderHeader;
        /** @type {?} */
        FabPanelComponent.prototype.renderBody;
        /** @type {?} */
        FabPanelComponent.prototype.renderFooter;
        /** @type {?} */
        FabPanelComponent.prototype.renderFooterContent;
        /** @type {?} */
        FabPanelComponent.prototype.onLightDismissClick;
        /** @type {?} */
        FabPanelComponent.prototype.onOpen;
        /** @type {?} */
        FabPanelComponent.prototype.onOpened;
        /** @type {?} */
        FabPanelComponent.prototype.onDismiss;
        /** @type {?} */
        FabPanelComponent.prototype.onDismissed;
        /**
         * @type {?}
         * @private
         */
        FabPanelComponent.prototype._renderHeader;
        /** @type {?} */
        FabPanelComponent.prototype.onRenderNavigation;
        /** @type {?} */
        FabPanelComponent.prototype.onRenderNavigationContent;
        /** @type {?} */
        FabPanelComponent.prototype.onRenderBody;
        /** @type {?} */
        FabPanelComponent.prototype.onRenderFooter;
        /** @type {?} */
        FabPanelComponent.prototype.onRenderFooterContent;
    }
    /**
     * Counterpart of `IPanelHeaderRenderer`.
     * @record
     */
    function IPanelHeaderRenderContext() { }
    if (false) {
        /** @type {?|undefined} */
        IPanelHeaderRenderContext.prototype.props;
        /** @type {?|undefined} */
        IPanelHeaderRenderContext.prototype.headerTextId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$l = [FabPanelComponent];
    var FabPanelModule = /** @class */ (function () {
        function FabPanelModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Panel', (/**
             * @return {?}
             */
            function () { return Panel.Panel; }));
        }
        FabPanelModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$l,
                        exports: components$l,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPanelModule.ctorParameters = function () { return []; };
        return FabPanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template TProps
     */
    var FabPersonaBaseComponent = /** @class */ (function (_super) {
        __extends(FabPersonaBaseComponent, _super);
        function FabPersonaBaseComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onPhotoLoadingStateChange = new core$1.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        FabPersonaBaseComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
            this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
        };
        FabPersonaBaseComponent.propDecorators = {
            text: [{ type: core$1.Input }],
            size: [{ type: core$1.Input }],
            imageShouldFadeIn: [{ type: core$1.Input }],
            imageShouldStartVisible: [{ type: core$1.Input }],
            imageUrl: [{ type: core$1.Input }],
            imageAlt: [{ type: core$1.Input }],
            imageInitials: [{ type: core$1.Input }],
            allowPhoneInitials: [{ type: core$1.Input }],
            initialsColor: [{ type: core$1.Input }],
            presence: [{ type: core$1.Input }],
            isOutOfOffice: [{ type: core$1.Input }],
            secondaryText: [{ type: core$1.Input }],
            tertiaryText: [{ type: core$1.Input }],
            optionalText: [{ type: core$1.Input }],
            hidePersonaDetails: [{ type: core$1.Input }],
            showSecondaryText: [{ type: core$1.Input }],
            showUnknownPersonaCoin: [{ type: core$1.Input }],
            showInitialsUntilImageLoads: [{ type: core$1.Input }],
            coinSize: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            renderCoin: [{ type: core$1.Input }],
            renderInitials: [{ type: core$1.Input }],
            onPhotoLoadingStateChange: [{ type: core$1.Output }]
        };
        return FabPersonaBaseComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabPersonaBaseComponent.prototype.text;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.size;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.imageShouldFadeIn;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.imageShouldStartVisible;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.imageUrl;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.imageAlt;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.imageInitials;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.allowPhoneInitials;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.initialsColor;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.presence;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.isOutOfOffice;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.secondaryText;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.tertiaryText;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.optionalText;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.hidePersonaDetails;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.showSecondaryText;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.showUnknownPersonaCoin;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.showInitialsUntilImageLoads;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.coinSize;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.theme;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.renderCoin;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.renderInitials;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.onPhotoLoadingStateChange;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.onRenderCoin;
        /** @type {?} */
        FabPersonaBaseComponent.prototype.onRenderInitials;
    }
    var FabPersonaComponent = /** @class */ (function (_super) {
        __extends(FabPersonaComponent, _super);
        function FabPersonaComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        /**
         * @return {?}
         */
        FabPersonaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
            this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
            this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
            this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
        };
        FabPersonaComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-persona',
                        exportAs: 'fabPersona',
                        template: "\n    <Persona\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showSecondaryText]=\"showSecondaryText\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [styles]=\"styles\"\n      [coinProps]=\"coinProps\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      [RenderPrimaryText]=\"renderPrimaryText && onRenderPrimaryText\"\n      [RenderSecondaryText]=\"renderSecondaryText && onRenderSecondaryText\"\n      [RenderTertiaryText]=\"renderTertiaryText && onRenderTertiaryText\"\n      [RenderOptionalText]=\"renderOptionalText && onRenderOptionalText\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </Persona>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPersonaComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPersonaComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            coinProps: [{ type: core$1.Input }],
            renderPrimaryText: [{ type: core$1.Input }],
            renderSecondaryText: [{ type: core$1.Input }],
            renderTertiaryText: [{ type: core$1.Input }],
            renderOptionalText: [{ type: core$1.Input }]
        };
        return FabPersonaComponent;
    }(FabPersonaBaseComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPersonaComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabPersonaComponent.prototype.componentRef;
        /** @type {?} */
        FabPersonaComponent.prototype.className;
        /** @type {?} */
        FabPersonaComponent.prototype.styles;
        /** @type {?} */
        FabPersonaComponent.prototype.coinProps;
        /** @type {?} */
        FabPersonaComponent.prototype.renderPrimaryText;
        /** @type {?} */
        FabPersonaComponent.prototype.renderSecondaryText;
        /** @type {?} */
        FabPersonaComponent.prototype.renderTertiaryText;
        /** @type {?} */
        FabPersonaComponent.prototype.renderOptionalText;
        /** @type {?} */
        FabPersonaComponent.prototype.onRenderPrimaryText;
        /** @type {?} */
        FabPersonaComponent.prototype.onRenderSecondaryText;
        /** @type {?} */
        FabPersonaComponent.prototype.onRenderTertiaryText;
        /** @type {?} */
        FabPersonaComponent.prototype.onRenderOptionalText;
    }
    var FabPersonaCoinComponent = /** @class */ (function (_super) {
        __extends(FabPersonaCoinComponent, _super);
        function FabPersonaCoinComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabPersonaCoinComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-persona-coin',
                        exportAs: 'fabPersonaCoin',
                        template: "\n    <PersonaCoin\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </PersonaCoin>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPersonaCoinComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPersonaCoinComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }]
        };
        return FabPersonaCoinComponent;
    }(FabPersonaBaseComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPersonaCoinComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabPersonaCoinComponent.prototype.componentRef;
        /** @type {?} */
        FabPersonaCoinComponent.prototype.styles;
        /** @type {?} */
        FabPersonaCoinComponent.prototype.className;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$m = [FabPersonaComponent, FabPersonaCoinComponent];
    var FabPersonaModule = /** @class */ (function () {
        function FabPersonaModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Persona', (/**
             * @return {?}
             */
            function () { return Persona.Persona; }));
            core.registerElement('PersonaCoin', (/**
             * @return {?}
             */
            function () { return Persona.PersonaCoin; }));
        }
        FabPersonaModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$m,
                        exports: components$m,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPersonaModule.ctorParameters = function () { return []; };
        return FabPersonaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabPivotItemComponent = /** @class */ (function (_super) {
        __extends(FabPivotItemComponent, _super);
        function FabPivotItemComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            _this.disabled = false;
            return _this;
        }
        /**
         * @return {?}
         */
        FabPivotItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderItemLink = this.createRenderPropHandler(this.renderItemLink);
        };
        FabPivotItemComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-pivot-item',
                        exportAs: 'fabPivotItem',
                        template: "\n    <PivotItem\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [headerText]=\"headerText\"\n      [headerButtonProps]=\"headerButtonProps\"\n      [itemKey]=\"itemKey\"\n      [ariaLabel]=\"ariaLabel\"\n      [itemCount]=\"itemCount\"\n      [itemIcon]=\"itemIcon\"\n      [keytipProps]=\"keytipProps\"\n      [RenderItemLink]=\"renderItemLink && onRenderItemLink\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PivotItem>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPivotItemComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPivotItemComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            disabled: [{ type: core$1.Input }],
            componentRef: [{ type: core$1.Input }],
            headerText: [{ type: core$1.Input }],
            headerButtonProps: [{ type: core$1.Input }],
            itemKey: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            itemCount: [{ type: core$1.Input }],
            itemIcon: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            renderItemLink: [{ type: core$1.Input }]
        };
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "componentRef", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "headerText", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "headerButtonProps", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "itemKey", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "ariaLabel", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "itemCount", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "itemIcon", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "keytipProps", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Object)
        ], FabPivotItemComponent.prototype, "renderItemLink", void 0);
        __decorate([
            core.passProp(),
            __metadata("design:type", Function)
        ], FabPivotItemComponent.prototype, "onRenderItemLink", void 0);
        return FabPivotItemComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPivotItemComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabPivotItemComponent.prototype.disabled;
        /** @type {?} */
        FabPivotItemComponent.prototype.componentRef;
        /** @type {?} */
        FabPivotItemComponent.prototype.headerText;
        /** @type {?} */
        FabPivotItemComponent.prototype.headerButtonProps;
        /** @type {?} */
        FabPivotItemComponent.prototype.itemKey;
        /** @type {?} */
        FabPivotItemComponent.prototype.ariaLabel;
        /** @type {?} */
        FabPivotItemComponent.prototype.itemCount;
        /** @type {?} */
        FabPivotItemComponent.prototype.itemIcon;
        /** @type {?} */
        FabPivotItemComponent.prototype.keytipProps;
        /** @type {?} */
        FabPivotItemComponent.prototype.renderItemLink;
        /** @type {?} */
        FabPivotItemComponent.prototype.onRenderItemLink;
    }
    var FabPivotComponent = /** @class */ (function (_super) {
        __extends(FabPivotComponent, _super);
        function FabPivotComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
            _this.PivotType = Pivot.Pivot;
            _this.PivotItemType = Pivot.PivotItem;
            _this.onLinkClick = new core$1.EventEmitter();
            _this.onLinkClickHandler = _this.onLinkClickHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?=} item
         * @param {?=} ev
         * @return {?}
         */
        FabPivotComponent.prototype.onLinkClickHandler = /**
         * @param {?=} item
         * @param {?=} ev
         * @return {?}
         */
        function (item, ev) {
            this.onLinkClick.emit({
                ev: ev && ev.nativeEvent,
                item: item,
            });
        };
        FabPivotComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-pivot',
                        exportAs: 'fabPivot',
                        template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"PivotType\"\n      [disguiseChildrenAs]=\"PivotItemType\"\n      [ngChildComponents]=\"children || pivotItems?.toArray()\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [defaultSelectedIndex]=\"defaultSelectedIndex\"\n      [selectedKey]=\"selectedKey\"\n      [linkSize]=\"linkSize\"\n      [linkFormat]=\"linkFormat\"\n      [headersOnly]=\"headersOnly\"\n      [getTabId]=\"getTabId\"\n      [LinkClick]=\"onLinkClickHandler\"\n    >\n      <ReactContent><ng-content select=\"fab-pivot-item\"></ng-content></ReactContent>\n    </Disguise>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPivotComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabPivotComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            pivotItems: [{ type: core$1.ContentChildren, args: [FabPivotItemComponent,] }],
            componentRef: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            defaultSelectedKey: [{ type: core$1.Input }],
            defaultSelectedIndex: [{ type: core$1.Input }],
            selectedKey: [{ type: core$1.Input }],
            linkSize: [{ type: core$1.Input }],
            linkFormat: [{ type: core$1.Input }],
            headersOnly: [{ type: core$1.Input }],
            getTabId: [{ type: core$1.Input }],
            children: [{ type: core$1.Input }],
            onLinkClick: [{ type: core$1.Output }]
        };
        return FabPivotComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabPivotComponent.prototype.PivotType;
        /** @type {?} */
        FabPivotComponent.prototype.PivotItemType;
        /**
         * @type {?}
         * @protected
         */
        FabPivotComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabPivotComponent.prototype.pivotItems;
        /** @type {?} */
        FabPivotComponent.prototype.componentRef;
        /** @type {?} */
        FabPivotComponent.prototype.styles;
        /** @type {?} */
        FabPivotComponent.prototype.theme;
        /** @type {?} */
        FabPivotComponent.prototype.className;
        /** @type {?} */
        FabPivotComponent.prototype.defaultSelectedKey;
        /** @type {?} */
        FabPivotComponent.prototype.defaultSelectedIndex;
        /** @type {?} */
        FabPivotComponent.prototype.selectedKey;
        /** @type {?} */
        FabPivotComponent.prototype.linkSize;
        /** @type {?} */
        FabPivotComponent.prototype.linkFormat;
        /** @type {?} */
        FabPivotComponent.prototype.headersOnly;
        /** @type {?} */
        FabPivotComponent.prototype.getTabId;
        /** @type {?} */
        FabPivotComponent.prototype.children;
        /** @type {?} */
        FabPivotComponent.prototype.onLinkClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$n = [FabPivotComponent, FabPivotItemComponent];
    var FabPivotModule = /** @class */ (function () {
        function FabPivotModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Pivot', (/**
             * @return {?}
             */
            function () { return Pivot.Pivot; }));
            core.registerElement('PivotItem', (/**
             * @return {?}
             */
            function () { return Pivot.PivotItem; }));
        }
        FabPivotModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$n,
                        exports: components$n,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPivotModule.ctorParameters = function () { return []; };
        return FabPivotModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabSearchBoxComponent = /** @class */ (function (_super) {
        __extends(FabSearchBoxComponent, _super);
        function FabSearchBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            _this.onChange = new core$1.EventEmitter();
            _this.onSearch = new core$1.EventEmitter();
            _this.onClear = new core$1.EventEmitter();
            _this.onEscape = new core$1.EventEmitter();
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            _this.onSearchHandler = _this.onSearchHandler.bind(_this);
            _this.onClearHandler = _this.onClearHandler.bind(_this);
            _this.onEscapeHandler = _this.onEscapeHandler.bind(_this);
            return _this;
        }
        Object.defineProperty(FabSearchBoxComponent.prototype, "clearButtonOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._clearButtonOptions;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._clearButtonOptions = value;
                if (value) {
                    this.clearButtonProps = this._transformButtonOptionsToProps(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        FabSearchBoxComponent.prototype.onChangeHandler = /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.onChange.emit({
                newValue: newValue,
            });
        };
        /**
         * @param {?} newValue
         * @return {?}
         */
        FabSearchBoxComponent.prototype.onSearchHandler = /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.onSearch.emit({
                newValue: newValue,
            });
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabSearchBoxComponent.prototype.onClearHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onClear.emit({
                ev: (ev && ev.nativeElement) || ev,
            });
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabSearchBoxComponent.prototype.onEscapeHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onEscape.emit({
                ev: (ev && ev.nativeElement) || ev,
            });
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        FabSearchBoxComponent.prototype._transformButtonOptionsToProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var sharedProperties = utils.omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
            /** @type {?} */
            var iconRenderer = this.createInputJsxRenderer(options.renderIcon);
            /** @type {?} */
            var textRenderer = this.createInputJsxRenderer(options.renderText);
            /** @type {?} */
            var descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
            /** @type {?} */
            var ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
            /** @type {?} */
            var childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
            /** @type {?} */
            var menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
            return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return iconRenderer(props); }) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return textRenderer(props); }) }))), descriptionRenderer &&
                ((/** @type {?} */ ({ onRenderDescription: (/**
                     * @param {?} props
                     * @return {?}
                     */
                    function (props) { return descriptionRenderer(props); }) }))), ariaDescriptionRenderer &&
                ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                     * @param {?} props
                     * @return {?}
                     */
                    function (props) { return ariaDescriptionRenderer(props); }) }))), childrenRenderer &&
                ((/** @type {?} */ ({ onRenderChildren: (/**
                     * @param {?} props
                     * @return {?}
                     */
                    function (props) { return childrenRenderer(props); }) }))), menuIconRenderer &&
                ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                     * @param {?} props
                     * @return {?}
                     */
                    function (props) { return menuIconRenderer(props); }) }))));
        };
        FabSearchBoxComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-search-box',
                        exportAs: 'fabSearchBox',
                        template: "\n    <SearchBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [clearButtonProps]=\"clearButtonProps\"\n      [iconProps]=\"iconProps\"\n      [underlined]=\"underlined\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [disableAnimation]=\"disableAnimation\"\n      [Change]=\"onChangeHandler\"\n      [Search]=\"onSearchHandler\"\n      [Clear]=\"onClearHandler\"\n      [Escape]=\"onEscapeHandler\"\n    >\n    </SearchBox>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabSearchBoxComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabSearchBoxComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            placeholder: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            underlined: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            disableAnimation: [{ type: core$1.Input }],
            clearButtonOptions: [{ type: core$1.Input }],
            iconProps: [{ type: core$1.Input }],
            onChange: [{ type: core$1.Output }],
            onSearch: [{ type: core$1.Output }],
            onClear: [{ type: core$1.Output }],
            onEscape: [{ type: core$1.Output }]
        };
        return FabSearchBoxComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabSearchBoxComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabSearchBoxComponent.prototype.componentRef;
        /** @type {?} */
        FabSearchBoxComponent.prototype.placeholder;
        /** @type {?} */
        FabSearchBoxComponent.prototype.value;
        /** @type {?} */
        FabSearchBoxComponent.prototype.className;
        /** @type {?} */
        FabSearchBoxComponent.prototype.ariaLabel;
        /** @type {?} */
        FabSearchBoxComponent.prototype.underlined;
        /** @type {?} */
        FabSearchBoxComponent.prototype.theme;
        /** @type {?} */
        FabSearchBoxComponent.prototype.styles;
        /** @type {?} */
        FabSearchBoxComponent.prototype.disableAnimation;
        /** @type {?} */
        FabSearchBoxComponent.prototype.iconProps;
        /** @type {?} */
        FabSearchBoxComponent.prototype.onChange;
        /** @type {?} */
        FabSearchBoxComponent.prototype.onSearch;
        /** @type {?} */
        FabSearchBoxComponent.prototype.onClear;
        /** @type {?} */
        FabSearchBoxComponent.prototype.onEscape;
        /** @type {?} */
        FabSearchBoxComponent.prototype.clearButtonProps;
        /**
         * @type {?}
         * @private
         */
        FabSearchBoxComponent.prototype._clearButtonOptions;
    }
    /**
     * @record
     */
    function IButtonOptions() { }
    if (false) {
        /** @type {?} */
        IButtonOptions.prototype.renderIcon;
        /** @type {?} */
        IButtonOptions.prototype.renderText;
        /** @type {?} */
        IButtonOptions.prototype.renderDescription;
        /** @type {?} */
        IButtonOptions.prototype.renderAriaDescription;
        /** @type {?} */
        IButtonOptions.prototype.renderChildren;
        /** @type {?} */
        IButtonOptions.prototype.renderMenuIcon;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$o = [FabSearchBoxComponent];
    var FabSearchBoxModule = /** @class */ (function () {
        function FabSearchBoxModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('SearchBox', (/**
             * @return {?}
             */
            function () { return SearchBox.SearchBox; }));
        }
        FabSearchBoxModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$o,
                        exports: components$o,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabSearchBoxModule.ctorParameters = function () { return []; };
        return FabSearchBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabShimmerComponent = /** @class */ (function (_super) {
        __extends(FabShimmerComponent, _super);
        function FabShimmerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        }
        Object.defineProperty(FabShimmerComponent.prototype, "renderCustomElementsGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return this._renderCustomElementsGroup;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._renderCustomElementsGroup = value;
                if (value) {
                    this.customElementsGroup = this.createInputJsxRenderer(value)({});
                }
            },
            enumerable: true,
            configurable: true
        });
        FabShimmerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-shimmer',
                        exportAs: 'fabShimmer',
                        template: "\n    <Shimmer\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [width]=\"width\"\n      [isDataLoaded]=\"isDataLoaded\"\n      [shimmerElements]=\"shimmerElements\"\n      [ariaLabel]=\"ariaLabel\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [shimmerColors]=\"shimmerColors\"\n      [customElementsGroup]=\"customElementsGroup\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Shimmer>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabShimmerComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabShimmerComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            width: [{ type: core$1.Input }],
            isDataLoaded: [{ type: core$1.Input }],
            shimmerElements: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            shimmerColors: [{ type: core$1.Input }],
            renderCustomElementsGroup: [{ type: core$1.Input }]
        };
        return FabShimmerComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabShimmerComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabShimmerComponent.prototype.componentRef;
        /** @type {?} */
        FabShimmerComponent.prototype.width;
        /** @type {?} */
        FabShimmerComponent.prototype.isDataLoaded;
        /** @type {?} */
        FabShimmerComponent.prototype.shimmerElements;
        /** @type {?} */
        FabShimmerComponent.prototype.ariaLabel;
        /** @type {?} */
        FabShimmerComponent.prototype.styles;
        /** @type {?} */
        FabShimmerComponent.prototype.className;
        /** @type {?} */
        FabShimmerComponent.prototype.theme;
        /** @type {?} */
        FabShimmerComponent.prototype.shimmerColors;
        /** @type {?} */
        FabShimmerComponent.prototype.customElementsGroup;
        /**
         * @type {?}
         * @private
         */
        FabShimmerComponent.prototype._renderCustomElementsGroup;
    }
    var FabShimmerElementsGroupComponent = /** @class */ (function (_super) {
        __extends(FabShimmerElementsGroupComponent, _super);
        function FabShimmerElementsGroupComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        }
        FabShimmerElementsGroupComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-shimmer-elements-group',
                        exportAs: 'fabShimmerElementsGroup',
                        template: "\n    <ShimmerElementsGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rowHeight]=\"rowHeight\"\n      [shimmerElements]=\"shimmerElements\"\n      [flexWrap]=\"flexWrap\"\n      [width]=\"width\"\n      [theme]=\"theme\"\n      [backgroundColor]=\"backgroundColor\"\n      [styles]=\"styles\"\n    >\n    </ShimmerElementsGroup>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabShimmerElementsGroupComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabShimmerElementsGroupComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            rowHeight: [{ type: core$1.Input }],
            shimmerElements: [{ type: core$1.Input }],
            flexWrap: [{ type: core$1.Input }],
            width: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            backgroundColor: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }]
        };
        return FabShimmerElementsGroupComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabShimmerElementsGroupComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.componentRef;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.rowHeight;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.shimmerElements;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.flexWrap;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.width;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.theme;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.backgroundColor;
        /** @type {?} */
        FabShimmerElementsGroupComponent.prototype.styles;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$p = [FabShimmerComponent, FabShimmerElementsGroupComponent];
    var FabShimmerModule = /** @class */ (function () {
        function FabShimmerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Shimmer', (/**
             * @return {?}
             */
            function () { return Shimmer.Shimmer; }));
            core.registerElement('ShimmerElementsGroup', (/**
             * @return {?}
             */
            function () { return Shimmer.ShimmerElementsGroup; }));
        }
        FabShimmerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$p,
                        exports: components$p,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabShimmerModule.ctorParameters = function () { return []; };
        return FabShimmerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabSliderComponent = /** @class */ (function (_super) {
        __extends(FabSliderComponent, _super);
        function FabSliderComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onChange = new core$1.EventEmitter();
            _this.onChanged = new core$1.EventEmitter();
            _this.onChangedHandler = _this.onChangedHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        FabSliderComponent.prototype.onChangedHandler = /**
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        function (event, value) {
            this.onChanged.emit({
                event: event,
                value: value,
            });
        };
        FabSliderComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-slider',
                        exportAs: 'fabSlider',
                        template: "\n    <Slider\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [label]=\"label\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [showValue]=\"showValue\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaValueText]=\"ariaValueText\"\n      [vertical]=\"vertical\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [buttonProps]=\"buttonProps\"\n      [valueFormat]=\"valueFormat\"\n      [originFromZero]=\"originFromZero\"\n      [Changed]=\"onChangedHandler\"\n      (onChange)=\"onChange.emit($event)\"\n    >\n    </Slider>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabSliderComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabSliderComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            defaultValue: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            min: [{ type: core$1.Input }],
            max: [{ type: core$1.Input }],
            step: [{ type: core$1.Input }],
            showValue: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            ariaValueText: [{ type: core$1.Input }],
            vertical: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            buttonProps: [{ type: core$1.Input }],
            valueFormat: [{ type: core$1.Input }],
            originFromZero: [{ type: core$1.Input }],
            onChange: [{ type: core$1.Output }],
            onChanged: [{ type: core$1.Output }]
        };
        return FabSliderComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabSliderComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabSliderComponent.prototype.componentRef;
        /** @type {?} */
        FabSliderComponent.prototype.styles;
        /** @type {?} */
        FabSliderComponent.prototype.theme;
        /** @type {?} */
        FabSliderComponent.prototype.label;
        /** @type {?} */
        FabSliderComponent.prototype.defaultValue;
        /** @type {?} */
        FabSliderComponent.prototype.value;
        /** @type {?} */
        FabSliderComponent.prototype.min;
        /** @type {?} */
        FabSliderComponent.prototype.max;
        /** @type {?} */
        FabSliderComponent.prototype.step;
        /** @type {?} */
        FabSliderComponent.prototype.showValue;
        /** @type {?} */
        FabSliderComponent.prototype.ariaLabel;
        /** @type {?} */
        FabSliderComponent.prototype.ariaValueText;
        /** @type {?} */
        FabSliderComponent.prototype.vertical;
        /** @type {?} */
        FabSliderComponent.prototype.disabled;
        /** @type {?} */
        FabSliderComponent.prototype.className;
        /** @type {?} */
        FabSliderComponent.prototype.buttonProps;
        /** @type {?} */
        FabSliderComponent.prototype.valueFormat;
        /** @type {?} */
        FabSliderComponent.prototype.originFromZero;
        /** @type {?} */
        FabSliderComponent.prototype.onChange;
        /** @type {?} */
        FabSliderComponent.prototype.onChanged;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$q = [FabSliderComponent];
    var FabSliderModule = /** @class */ (function () {
        function FabSliderModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Slider', (/**
             * @return {?}
             */
            function () { return Slider.Slider; }));
        }
        FabSliderModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$q,
                        exports: components$q,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabSliderModule.ctorParameters = function () { return []; };
        return FabSliderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabSpinButtonComponent = /** @class */ (function (_super) {
        __extends(FabSpinButtonComponent, _super);
        function FabSpinButtonComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onFocus = new core$1.EventEmitter();
            _this.onBlur = new core$1.EventEmitter();
            return _this;
        }
        FabSpinButtonComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-spin-button',
                        exportAs: 'fabSpinButton',
                        template: "\n    <SpinButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [title]=\"title\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [label]=\"label\"\n      [labelPosition]=\"labelPosition\"\n      [iconProps]=\"iconProps\"\n      [incrementButtonIcon]=\"incrementButtonIcon\"\n      [decrementButtonIcon]=\"decrementButtonIcon\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [upArrowButtonStyles]=\"upArrowButtonStyles\"\n      [downArrowButtonStyles]=\"downArrowButtonStyles\"\n      [theme]=\"theme\"\n      [incrementButtonAriaLabel]=\"incrementButtonAriaLabel\"\n      [decrementButtonAriaLabel]=\"decrementButtonAriaLabel\"\n      [precision]=\"precision\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [ariaValueNow]=\"ariaValueNow\"\n      [ariaValueText]=\"ariaValueText\"\n      [keytipProps]=\"keytipProps\"\n      [Validate]=\"validate\"\n      [Increment]=\"increment\"\n      [Decrement]=\"decrement\"\n      (onFocus)=\"onFocus.emit($event)\"\n      (onBlur)=\"onBlur.emit($event)\"\n    >\n    </SpinButton>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabSpinButtonComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabSpinButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            defaultValue: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            min: [{ type: core$1.Input }],
            max: [{ type: core$1.Input }],
            step: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            ariaDescribedBy: [{ type: core$1.Input }],
            title: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            labelPosition: [{ type: core$1.Input }],
            iconProps: [{ type: core$1.Input }],
            incrementButtonIcon: [{ type: core$1.Input }],
            decrementButtonIcon: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            getClassNames: [{ type: core$1.Input }],
            upArrowButtonStyles: [{ type: core$1.Input }],
            downArrowButtonStyles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            incrementButtonAriaLabel: [{ type: core$1.Input }],
            decrementButtonAriaLabel: [{ type: core$1.Input }],
            precision: [{ type: core$1.Input }],
            ariaPositionInSet: [{ type: core$1.Input }],
            ariaSetSize: [{ type: core$1.Input }],
            ariaValueNow: [{ type: core$1.Input }],
            ariaValueText: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            validate: [{ type: core$1.Input }],
            increment: [{ type: core$1.Input }],
            decrement: [{ type: core$1.Input }],
            onFocus: [{ type: core$1.Output }],
            onBlur: [{ type: core$1.Output }]
        };
        return FabSpinButtonComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabSpinButtonComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabSpinButtonComponent.prototype.componentRef;
        /** @type {?} */
        FabSpinButtonComponent.prototype.defaultValue;
        /** @type {?} */
        FabSpinButtonComponent.prototype.value;
        /** @type {?} */
        FabSpinButtonComponent.prototype.min;
        /** @type {?} */
        FabSpinButtonComponent.prototype.max;
        /** @type {?} */
        FabSpinButtonComponent.prototype.step;
        /** @type {?} */
        FabSpinButtonComponent.prototype.ariaLabel;
        /** @type {?} */
        FabSpinButtonComponent.prototype.ariaDescribedBy;
        /** @type {?} */
        FabSpinButtonComponent.prototype.title;
        /** @type {?} */
        FabSpinButtonComponent.prototype.disabled;
        /** @type {?} */
        FabSpinButtonComponent.prototype.className;
        /** @type {?} */
        FabSpinButtonComponent.prototype.label;
        /** @type {?} */
        FabSpinButtonComponent.prototype.labelPosition;
        /** @type {?} */
        FabSpinButtonComponent.prototype.iconProps;
        /** @type {?} */
        FabSpinButtonComponent.prototype.incrementButtonIcon;
        /** @type {?} */
        FabSpinButtonComponent.prototype.decrementButtonIcon;
        /** @type {?} */
        FabSpinButtonComponent.prototype.styles;
        /** @type {?} */
        FabSpinButtonComponent.prototype.getClassNames;
        /** @type {?} */
        FabSpinButtonComponent.prototype.upArrowButtonStyles;
        /** @type {?} */
        FabSpinButtonComponent.prototype.downArrowButtonStyles;
        /** @type {?} */
        FabSpinButtonComponent.prototype.theme;
        /** @type {?} */
        FabSpinButtonComponent.prototype.incrementButtonAriaLabel;
        /** @type {?} */
        FabSpinButtonComponent.prototype.decrementButtonAriaLabel;
        /** @type {?} */
        FabSpinButtonComponent.prototype.precision;
        /** @type {?} */
        FabSpinButtonComponent.prototype.ariaPositionInSet;
        /** @type {?} */
        FabSpinButtonComponent.prototype.ariaSetSize;
        /** @type {?} */
        FabSpinButtonComponent.prototype.ariaValueNow;
        /** @type {?} */
        FabSpinButtonComponent.prototype.ariaValueText;
        /** @type {?} */
        FabSpinButtonComponent.prototype.keytipProps;
        /** @type {?} */
        FabSpinButtonComponent.prototype.validate;
        /** @type {?} */
        FabSpinButtonComponent.prototype.increment;
        /** @type {?} */
        FabSpinButtonComponent.prototype.decrement;
        /** @type {?} */
        FabSpinButtonComponent.prototype.onFocus;
        /** @type {?} */
        FabSpinButtonComponent.prototype.onBlur;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$r = [FabSpinButtonComponent];
    var FabSpinButtonModule = /** @class */ (function () {
        function FabSpinButtonModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('SpinButton', (/**
             * @return {?}
             */
            function () { return SpinButton.SpinButton; }));
        }
        FabSpinButtonModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$r,
                        exports: components$r,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabSpinButtonModule.ctorParameters = function () { return []; };
        return FabSpinButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabSpinnerComponent = /** @class */ (function (_super) {
        __extends(FabSpinnerComponent, _super);
        function FabSpinnerComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        FabSpinnerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-spinner',
                        exportAs: 'fabSpinner',
                        template: "\n    <Spinner\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [type]=\"type\"\n      [size]=\"size\"\n      [label]=\"label\"\n      [className]=\"className\"\n      [ariaLive]=\"ariaLive\"\n      [ariaLabel]=\"ariaLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [labelPosition]=\"labelPosition\"\n    >\n    </Spinner>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabSpinnerComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabSpinnerComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            size: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            ariaLive: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            labelPosition: [{ type: core$1.Input }]
        };
        return FabSpinnerComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabSpinnerComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabSpinnerComponent.prototype.componentRef;
        /** @type {?} */
        FabSpinnerComponent.prototype.type;
        /** @type {?} */
        FabSpinnerComponent.prototype.size;
        /** @type {?} */
        FabSpinnerComponent.prototype.label;
        /** @type {?} */
        FabSpinnerComponent.prototype.className;
        /** @type {?} */
        FabSpinnerComponent.prototype.ariaLive;
        /** @type {?} */
        FabSpinnerComponent.prototype.ariaLabel;
        /** @type {?} */
        FabSpinnerComponent.prototype.theme;
        /** @type {?} */
        FabSpinnerComponent.prototype.styles;
        /** @type {?} */
        FabSpinnerComponent.prototype.labelPosition;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$s = [FabSpinnerComponent];
    var FabSpinnerModule = /** @class */ (function () {
        function FabSpinnerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Spinner', (/**
             * @return {?}
             */
            function () { return Spinner.Spinner; }));
        }
        FabSpinnerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$s,
                        exports: components$s,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabSpinnerModule.ctorParameters = function () { return []; };
        return FabSpinnerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabBaseTextFieldComponent = /** @class */ (function (_super) {
        __extends(FabBaseTextFieldComponent, _super);
        function FabBaseTextFieldComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
            _this.onClick = new core$1.EventEmitter();
            _this.onFocus = new core$1.EventEmitter();
            _this.onBlur = new core$1.EventEmitter();
            _this.onChange = new core$1.EventEmitter();
            _this.onBeforeChange = new core$1.EventEmitter();
            _this.onNotifyValidationResult = new core$1.EventEmitter();
            /* Non-React props, more native support for Angular */
            // support for two-way data binding for `@Input() checked`.
            _this.valueChange = new core$1.EventEmitter();
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            _this.onBeforeChangeHandler = _this.onBeforeChangeHandler.bind(_this);
            _this.onNotifyValidationResultHandler = _this.onNotifyValidationResultHandler.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
            this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
            this.onRenderPrefix = this.createRenderPropHandler(this.renderPrefix);
            this.onRenderSuffix = this.createRenderPropHandler(this.renderSuffix);
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.onClickHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onClick.emit(ev && ev.nativeEvent);
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.onFocusHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onFocus.emit(ev && ev.nativeEvent);
        };
        /**
         * @param {?=} ev
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.onBlurHandler = /**
         * @param {?=} ev
         * @return {?}
         */
        function (ev) {
            this.onBlur.emit(ev && ev.nativeEvent);
        };
        /**
         * @param {?} event
         * @param {?=} newValue
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.onChangeHandler = /**
         * @param {?} event
         * @param {?=} newValue
         * @return {?}
         */
        function (event, newValue) {
            this.onChange.emit({ event: event.nativeEvent, newValue: newValue });
            this.valueChange.emit(newValue);
        };
        /**
         * @param {?} newValue
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.onBeforeChangeHandler = /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.onBeforeChange.emit({ newValue: newValue });
        };
        /**
         * @param {?} errorMessage
         * @param {?} value
         * @return {?}
         */
        FabBaseTextFieldComponent.prototype.onNotifyValidationResultHandler = /**
         * @param {?} errorMessage
         * @param {?} value
         * @return {?}
         */
        function (errorMessage, value) {
            this.onNotifyValidationResult.emit({ errorMessage: errorMessage, value: value });
        };
        FabBaseTextFieldComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            required: [{ type: core$1.Input }],
            placeholder: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            cols: [{ type: core$1.Input }],
            colSpan: [{ type: core$1.Input }],
            rows: [{ type: core$1.Input }],
            rowSpan: [{ type: core$1.Input }],
            min: [{ type: core$1.Input }],
            max: [{ type: core$1.Input }],
            pattern: [{ type: core$1.Input }],
            htmlFor: [{ type: core$1.Input, args: ['for',] }],
            componentRef: [{ type: core$1.Input }],
            multiline: [{ type: core$1.Input }],
            resizable: [{ type: core$1.Input }],
            autoAdjustHeight: [{ type: core$1.Input }],
            underlined: [{ type: core$1.Input }],
            borderless: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            description: [{ type: core$1.Input }],
            prefix: [{ type: core$1.Input }],
            suffix: [{ type: core$1.Input }],
            iconProps: [{ type: core$1.Input }],
            defaultValue: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            readOnly: [{ type: core$1.Input }],
            errorMessage: [{ type: core$1.Input }],
            deferredValidationTime: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            inputClassName: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            validateOnFocusIn: [{ type: core$1.Input }],
            validateOnFocusOut: [{ type: core$1.Input }],
            validateOnLoad: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            autoComplete: [{ type: core$1.Input }],
            mask: [{ type: core$1.Input }],
            maskChar: [{ type: core$1.Input }],
            maskFormat: [{ type: core$1.Input }],
            getErrorMessage: [{ type: core$1.Input }],
            renderLabel: [{ type: core$1.Input }],
            renderDescription: [{ type: core$1.Input }],
            renderPrefix: [{ type: core$1.Input }],
            renderSuffix: [{ type: core$1.Input }],
            maxLength: [{ type: core$1.Input }],
            onClick: [{ type: core$1.Output }],
            onFocus: [{ type: core$1.Output }],
            onBlur: [{ type: core$1.Output }],
            onChange: [{ type: core$1.Output }],
            onBeforeChange: [{ type: core$1.Output }],
            onNotifyValidationResult: [{ type: core$1.Output }],
            valueChange: [{ type: core$1.Output }]
        };
        return FabBaseTextFieldComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabBaseTextFieldComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.required;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.placeholder;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.type;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.cols;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.colSpan;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.rows;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.rowSpan;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.min;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.max;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.pattern;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.htmlFor;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.componentRef;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.multiline;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.resizable;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.autoAdjustHeight;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.underlined;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.borderless;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.label;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.description;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.prefix;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.suffix;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.iconProps;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.defaultValue;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.value;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.disabled;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.readOnly;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.errorMessage;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.deferredValidationTime;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.className;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.inputClassName;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.ariaLabel;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.validateOnFocusIn;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.validateOnFocusOut;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.validateOnLoad;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.theme;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.styles;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.autoComplete;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.mask;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.maskChar;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.maskFormat;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.getErrorMessage;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.renderLabel;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.renderDescription;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.renderPrefix;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.renderSuffix;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.maxLength;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onClick;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onFocus;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onBlur;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onChange;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onBeforeChange;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onNotifyValidationResult;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.valueChange;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onRenderLabel;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onRenderDescription;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onRenderPrefix;
        /** @type {?} */
        FabBaseTextFieldComponent.prototype.onRenderSuffix;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabTextFieldComponent = /** @class */ (function (_super) {
        __extends(FabTextFieldComponent, _super);
        function FabTextFieldComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        FabTextFieldComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-text-field',
                        exportAs: 'fabTextField',
                        template: "\n    <TextField\n      #reactNode\n      [required]=\"required\"\n      [placeholder]=\"placeholder\"\n      [type]=\"type\"\n      [cols]=\"cols\"\n      [colSpan]=\"colSpan\"\n      [rows]=\"rows\"\n      [rowSpan]=\"rowSpan\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [pattern]=\"pattern\"\n      [htmlFor]=\"htmlFor\"\n      [componentRef]=\"componentRef\"\n      [multiline]=\"multiline\"\n      [resizable]=\"resizable\"\n      [autoAdjustHeight]=\"autoAdjustHeight\"\n      [underlined]=\"underlined\"\n      [borderless]=\"borderless\"\n      [label]=\"label\"\n      [description]=\"description\"\n      [prefix]=\"prefix\"\n      [suffix]=\"suffix\"\n      [iconProps]=\"iconProps\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"readOnly\"\n      [errorMessage]=\"errorMessage\"\n      [deferredValidationTime]=\"deferredValidationTime\"\n      [className]=\"className\"\n      [inputClassName]=\"inputClassName\"\n      [ariaLabel]=\"ariaLabel\"\n      [validateOnFocusIn]=\"validateOnFocusIn\"\n      [validateOnFocusOut]=\"validateOnFocusOut\"\n      [validateOnLoad]=\"validateOnLoad\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [autoComplete]=\"autoComplete\"\n      [mask]=\"mask\"\n      [maskChar]=\"maskChar\"\n      [maskFormat]=\"maskFormat\"\n      [GetErrorMessage]=\"getErrorMessage\"\n      [RenderLabel]=\"renderLabel\"\n      [RenderDescription]=\"renderDescription\"\n      [RenderPrefix]=\"renderPrefix\"\n      [RenderSuffix]=\"renderSuffix\"\n      [Change]=\"onChangeHandler\"\n      [BeforeChange]=\"onBeforeChangeHandler\"\n      [maxLength]=\"maxLength\"\n      [NotifyValidationResult]=\"onNotifyValidationResultHandler\"\n      (onClick)=\"onClickHandler($event)\"\n      (onFocus)=\"onFocusHandler($event)\"\n      (onBlur)=\"onBlurHandler($event)\"\n    >\n    </TextField>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabTextFieldComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabTextFieldComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabTextFieldComponent;
    }(FabBaseTextFieldComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabTextFieldComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabMaskedTextFieldComponent = /** @class */ (function (_super) {
        __extends(FabMaskedTextFieldComponent, _super);
        function FabMaskedTextFieldComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        FabMaskedTextFieldComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-masked-text-field',
                        exportAs: 'fabMaskedTextField',
                        template: "\n    <MaskedTextField\n      #reactNode\n      [required]=\"required\"\n      [placeholder]=\"placeholder\"\n      [type]=\"type\"\n      [cols]=\"cols\"\n      [colSpan]=\"colSpan\"\n      [rows]=\"rows\"\n      [rowSpan]=\"rowSpan\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [pattern]=\"pattern\"\n      [htmlFor]=\"htmlFor\"\n      [componentRef]=\"componentRef\"\n      [multiline]=\"multiline\"\n      [resizable]=\"resizable\"\n      [autoAdjustHeight]=\"autoAdjustHeight\"\n      [underlined]=\"underlined\"\n      [borderless]=\"borderless\"\n      [label]=\"label\"\n      [description]=\"description\"\n      [prefix]=\"prefix\"\n      [suffix]=\"suffix\"\n      [iconProps]=\"iconProps\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"readOnly\"\n      [errorMessage]=\"errorMessage\"\n      [deferredValidationTime]=\"deferredValidationTime\"\n      [className]=\"className\"\n      [inputClassName]=\"inputClassName\"\n      [ariaLabel]=\"ariaLabel\"\n      [validateOnFocusIn]=\"validateOnFocusIn\"\n      [validateOnFocusOut]=\"validateOnFocusOut\"\n      [validateOnLoad]=\"validateOnLoad\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [autoComplete]=\"autoComplete\"\n      [mask]=\"mask\"\n      [maskChar]=\"maskChar\"\n      [maskFormat]=\"maskFormat\"\n      [GetErrorMessage]=\"getErrorMessage\"\n      [RenderLabel]=\"renderLabel\"\n      [RenderDescription]=\"renderDescription\"\n      [RenderPrefix]=\"renderPrefix\"\n      [RenderSuffix]=\"renderSuffix\"\n      [Change]=\"onChangeHandler\"\n      [BeforeChange]=\"onBeforeChangeHandler\"\n      [NotifyValidationResult]=\"onNotifyValidationResultHandler\"\n      (onClick)=\"onClickHandler($event)\"\n      (onFocus)=\"onFocusHandler($event)\"\n      (onBlur)=\"onBlurHandler($event)\"\n    >\n    </MaskedTextField>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabMaskedTextFieldComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabMaskedTextFieldComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabMaskedTextFieldComponent;
    }(FabBaseTextFieldComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabMaskedTextFieldComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$t = [FabTextFieldComponent, FabMaskedTextFieldComponent];
    var FabTextFieldModule = /** @class */ (function () {
        function FabTextFieldModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('TextField', (/**
             * @return {?}
             */
            function () { return TextField.TextField; }));
            core.registerElement('MaskedTextField', (/**
             * @return {?}
             */
            function () { return TextField.MaskedTextField; }));
        }
        FabTextFieldModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$t,
                        exports: components$t,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabTextFieldModule.ctorParameters = function () { return []; };
        return FabTextFieldModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabToggleComponent = /** @class */ (function (_super) {
        __extends(FabToggleComponent, _super);
        function FabToggleComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onChange = new core$1.EventEmitter();
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?} event
         * @param {?=} checked
         * @return {?}
         */
        FabToggleComponent.prototype.onChangeHandler = /**
         * @param {?} event
         * @param {?=} checked
         * @return {?}
         */
        function (event, checked) {
            this.onChange.emit({
                event: event && event.nativeEvent,
                checked: checked,
            });
        };
        FabToggleComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-toggle',
                        exportAs: 'fabToggle',
                        template: "\n    <Toggle\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [Text]=\"onText\"\n      [offText]=\"offText\"\n      [ariaLabel]=\"ariaLabel\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [disabled]=\"disabled\"\n      [inlineLabel]=\"inlineLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [keytipProps]=\"keytipProps\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Toggle>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabToggleComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabToggleComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            as: [{ type: core$1.Input }],
            componentRef: [{ type: core$1.Input }],
            label: [{ type: core$1.Input }],
            onText: [{ type: core$1.Input, args: ['onnText',] }],
            offText: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            checked: [{ type: core$1.Input }],
            defaultChecked: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            inlineLabel: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            keytipProps: [{ type: core$1.Input }],
            onChange: [{ type: core$1.Output }]
        };
        return FabToggleComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabToggleComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabToggleComponent.prototype.as;
        /** @type {?} */
        FabToggleComponent.prototype.componentRef;
        /** @type {?} */
        FabToggleComponent.prototype.label;
        /**
         * Counterpart of `IToggleProps['onText']`.
         * Angular doesn't allow Inputs to be prefixed with "on", so this is misspelled as "onn".
         * @type {?}
         */
        FabToggleComponent.prototype.onText;
        /** @type {?} */
        FabToggleComponent.prototype.offText;
        /** @type {?} */
        FabToggleComponent.prototype.ariaLabel;
        /** @type {?} */
        FabToggleComponent.prototype.checked;
        /** @type {?} */
        FabToggleComponent.prototype.defaultChecked;
        /** @type {?} */
        FabToggleComponent.prototype.disabled;
        /** @type {?} */
        FabToggleComponent.prototype.inlineLabel;
        /** @type {?} */
        FabToggleComponent.prototype.theme;
        /** @type {?} */
        FabToggleComponent.prototype.styles;
        /** @type {?} */
        FabToggleComponent.prototype.keytipProps;
        /** @type {?} */
        FabToggleComponent.prototype.onChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$u = [FabToggleComponent];
    var FabToggleModule = /** @class */ (function () {
        function FabToggleModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('Toggle', (/**
             * @return {?}
             */
            function () { return Toggle.Toggle; }));
        }
        FabToggleModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$u,
                        exports: components$u,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabToggleModule.ctorParameters = function () { return []; };
        return FabToggleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabTooltipHostComponent = /** @class */ (function (_super) {
        __extends(FabTooltipHostComponent, _super);
        function FabTooltipHostComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            _this.onTooltipToggle = new core$1.EventEmitter();
            _this.onTooltipToggleHandler = _this.onTooltipToggleHandler.bind(_this);
            return _this;
        }
        Object.defineProperty(FabTooltipHostComponent.prototype, "tooltipOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._tooltipOptions;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._tooltipOptions = value;
                if (value) {
                    this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} isTooltipVisible
         * @return {?}
         */
        FabTooltipHostComponent.prototype.onTooltipToggleHandler = /**
         * @param {?} isTooltipVisible
         * @return {?}
         */
        function (isTooltipVisible) {
            this.onTooltipToggle.emit({ isTooltipVisible: isTooltipVisible });
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        FabTooltipHostComponent.prototype._transformTooltipOptionsToProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var sharedProperties = utils.omit(options, 'renderContent');
            /** @type {?} */
            var contentRenderer = this.createInputJsxRenderer(options.renderContent);
            return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return contentRenderer(data); }) }))));
        };
        FabTooltipHostComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-tooltip-host',
                        exportAs: 'fabTooltipHost',
                        template: "\n    <TooltipHost\n      #reactNode\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [calloutProps]=\"calloutProps\"\n      [closeDelay]=\"closeDelay\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [delay]=\"delay\"\n      [content]=\"content\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [overflowMode]=\"overflowMode\"\n      [hostClassName]=\"hostClassName\"\n      [tooltipProps]=\"transformedTooltipProps\"\n      [TooltipToggle]=\"onTooltipToggleHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </TooltipHost>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabTooltipHostComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabTooltipHostComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            closeDelay: [{ type: core$1.Input }],
            calloutProps: [{ type: core$1.Input }],
            content: [{ type: core$1.Input }],
            delay: [{ type: core$1.Input }],
            directionalHint: [{ type: core$1.Input }],
            directionalHintForRTL: [{ type: core$1.Input }],
            hostClassName: [{ type: core$1.Input }],
            overflowMode: [{ type: core$1.Input }],
            setAriaDescribedBy: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            tooltipOptions: [{ type: core$1.Input }],
            onTooltipToggle: [{ type: core$1.Output }]
        };
        return FabTooltipHostComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabTooltipHostComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabTooltipHostComponent.prototype.componentRef;
        /** @type {?} */
        FabTooltipHostComponent.prototype.closeDelay;
        /** @type {?} */
        FabTooltipHostComponent.prototype.calloutProps;
        /** @type {?} */
        FabTooltipHostComponent.prototype.content;
        /** @type {?} */
        FabTooltipHostComponent.prototype.delay;
        /** @type {?} */
        FabTooltipHostComponent.prototype.directionalHint;
        /** @type {?} */
        FabTooltipHostComponent.prototype.directionalHintForRTL;
        /** @type {?} */
        FabTooltipHostComponent.prototype.hostClassName;
        /** @type {?} */
        FabTooltipHostComponent.prototype.overflowMode;
        /** @type {?} */
        FabTooltipHostComponent.prototype.setAriaDescribedBy;
        /** @type {?} */
        FabTooltipHostComponent.prototype.theme;
        /** @type {?} */
        FabTooltipHostComponent.prototype.onTooltipToggle;
        /** @type {?} */
        FabTooltipHostComponent.prototype.transformedTooltipProps;
        /**
         * @type {?}
         * @private
         */
        FabTooltipHostComponent.prototype._tooltipOptions;
    }
    /**
     * Counterpart of `ITooltipProps`, with Angular adjustments.
     * @record
     */
    function ITooltipOptions() { }
    if (false) {
        /** @type {?|undefined} */
        ITooltipOptions.prototype.renderContent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$v = [FabTooltipHostComponent];
    var FabTooltipModule = /** @class */ (function () {
        function FabTooltipModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('TooltipHost', (/**
             * @return {?}
             */
            function () { return Tooltip.TooltipHost; }));
        }
        FabTooltipModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$v,
                        exports: components$v,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabTooltipModule.ctorParameters = function () { return []; };
        return FabTooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabNavComponent = /** @class */ (function (_super) {
        __extends(FabNavComponent, _super);
        function FabNavComponent(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
            _this.onLinkClick = new core$1.EventEmitter();
            _this.onLinkExpandClick = new core$1.EventEmitter();
            _this.onLinkClickHandler = _this.onLinkClickHandler.bind(_this);
            _this.onLinkExpandClickHandler = _this.onLinkExpandClickHandler.bind(_this);
            return _this;
        }
        /**
         * @param {?} event
         * @param {?=} link
         * @return {?}
         */
        FabNavComponent.prototype.onLinkClickHandler = /**
         * @param {?} event
         * @param {?=} link
         * @return {?}
         */
        function (event, link) {
            this.onLinkClick.emit({
                event: event.nativeEvent,
                link: link
            });
        };
        /**
         * @param {?} event
         * @param {?=} link
         * @return {?}
         */
        FabNavComponent.prototype.onLinkExpandClickHandler = /**
         * @param {?} event
         * @param {?=} link
         * @return {?}
         */
        function (event, link) {
            this.onLinkExpandClick.emit({
                event: event.nativeEvent,
                link: link
            });
        };
        FabNavComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-nav',
                        exportAs: 'fabNav',
                        template: "\n    <Nav\n      #reactNode\n      [groups]=\"groups\"\n      [LinkClick]=\"onLinkClickHandler\"\n      [selectedKey]=\"selectedKey\"\n      [expandButtonAriaLabel]=\"expandButtonAriaLabel\"\n      [LinkExpandClick]=\"onLinkExpandClickHandler\"\n      [isOnTop]=\"isOnTop\"\n      [initialSelectedKey]=\"initialSelectedKey\"\n      [ariaLabel]=\"ariaLabel\"\n      [selectedAriaLabel]=\"selectedAriaLabel\"\n    >\n    </Nav>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabNavComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabNavComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            groups: [{ type: core$1.Input }],
            selectedKey: [{ type: core$1.Input }],
            isOnTop: [{ type: core$1.Input }],
            initialSelectedKey: [{ type: core$1.Input }],
            ariaLabel: [{ type: core$1.Input }],
            expandButtonAriaLabel: [{ type: core$1.Input }],
            selectedAriaLabel: [{ type: core$1.Input }],
            onLinkClick: [{ type: core$1.Output }],
            onLinkExpandClick: [{ type: core$1.Output }]
        };
        return FabNavComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabNavComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabNavComponent.prototype.componentRef;
        /** @type {?} */
        FabNavComponent.prototype.groups;
        /** @type {?} */
        FabNavComponent.prototype.selectedKey;
        /** @type {?} */
        FabNavComponent.prototype.isOnTop;
        /** @type {?} */
        FabNavComponent.prototype.initialSelectedKey;
        /** @type {?} */
        FabNavComponent.prototype.ariaLabel;
        /** @type {?} */
        FabNavComponent.prototype.expandButtonAriaLabel;
        /** @type {?} */
        FabNavComponent.prototype.selectedAriaLabel;
        /** @type {?} */
        FabNavComponent.prototype.onLinkClick;
        /** @type {?} */
        FabNavComponent.prototype.onLinkExpandClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabNavModule = /** @class */ (function () {
        function FabNavModule() {
            core.registerElement('Nav', (/**
             * @return {?}
             */
            function () { return Nav.Nav; }));
        }
        FabNavModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [FabNavComponent],
                        exports: [FabNavComponent],
                        schemas: [core$1.NO_ERRORS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        FabNavModule.ctorParameters = function () { return []; };
        return FabNavModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T, TProps
     */
    var FabBasePickerComponent = /** @class */ (function (_super) {
        __extends(FabBasePickerComponent, _super);
        function FabBasePickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            _this.onChange = new core$1.EventEmitter();
            _this.onFocus = new core$1.EventEmitter();
            _this.onBlur = new core$1.EventEmitter();
            _this.onDismiss = new core$1.EventEmitter();
            _this.onRemoveSuggestion = new core$1.EventEmitter();
            _this.onChangeHandler = _this.onChangeHandler.bind(_this);
            _this.onFocusHandler = _this.onFocusHandler.bind(_this);
            _this.onBlurHandler = _this.onBlurHandler.bind(_this);
            _this.onDismissHandler = _this.onDismissHandler.bind(_this);
            _this.onRemoveSuggestionHandler = _this.onRemoveSuggestionHandler.bind(_this);
            return _this;
        }
        Object.defineProperty(FabBasePickerComponent.prototype, "pickerSuggestionsOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pickerSuggestionsOptions;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._pickerSuggestionsOptions = value;
                if (value) {
                    this.pickerSuggestionsProps = this._transformBasePickerSuggestionsOptionsToProps(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FabBasePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderItem = this.createRenderPropHandler(this.renderItem);
            this.onRenderSuggestionsItem = this.createRenderPropHandler(this.renderSuggestionsItem);
        };
        /**
         * @param {?=} items
         * @return {?}
         */
        FabBasePickerComponent.prototype.onChangeHandler = /**
         * @param {?=} items
         * @return {?}
         */
        function (items) {
            this.onChange.emit({
                items: items,
            });
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabBasePickerComponent.prototype.onFocusHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onFocus.emit(event.nativeEvent);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FabBasePickerComponent.prototype.onBlurHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onBlur.emit(event.nativeEvent);
        };
        /**
         * @param {?=} ev
         * @param {?=} selectedItem
         * @return {?}
         */
        FabBasePickerComponent.prototype.onDismissHandler = /**
         * @param {?=} ev
         * @param {?=} selectedItem
         * @return {?}
         */
        function (ev, selectedItem) {
            this.onDismiss.emit({
                ev: (ev && ev.nativeEvent) || ev,
                selectedItem: selectedItem,
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        FabBasePickerComponent.prototype.onRemoveSuggestionHandler = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.onRemoveSuggestion.emit({
                item: item,
            });
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        FabBasePickerComponent.prototype._transformBasePickerSuggestionsOptionsToProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var sharedProperties = utils.omit(options, 'renderNoResultFound', 'renderResultsFooterFull', 'renderResultsFooter');
            /** @type {?} */
            var noResultFoundRenderer = this.createInputJsxRenderer(options.renderNoResultFound);
            /** @type {?} */
            var resultsFooterFullRenderer = this.createInputJsxRenderer(options.renderResultsFooterFull);
            /** @type {?} */
            var resultsFooterRenderer = this.createInputJsxRenderer(options.renderResultsFooter);
            return Object.assign({}, sharedProperties, noResultFoundRenderer &&
                ((/** @type {?} */ ({ onRenderNoResultFound: (/**
                     * @return {?}
                     */
                    function () { return noResultFoundRenderer({}); }) }))), resultsFooterFullRenderer &&
                ((/** @type {?} */ ({ resultsFooterFull: (/**
                     * @return {?}
                     */
                    function () { return resultsFooterFullRenderer({}); }) }))), resultsFooterRenderer &&
                ((/** @type {?} */ ({ resultsFooter: (/**
                     * @return {?}
                     */
                    function () { return resultsFooterRenderer({}); }) }))));
        };
        FabBasePickerComponent.propDecorators = {
            componentRef: [{ type: core$1.Input }],
            resolveDelay: [{ type: core$1.Input }],
            defaultSelectedItems: [{ type: core$1.Input }],
            getTextFromItem: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            pickerCalloutProps: [{ type: core$1.Input }],
            searchingText: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            itemLimit: [{ type: core$1.Input }],
            createGenericItem: [{ type: core$1.Input }],
            removeButtonAriaLabel: [{ type: core$1.Input }],
            selectedItems: [{ type: core$1.Input }],
            enableSelectedSuggestionAlert: [{ type: core$1.Input }],
            inputProps: [{ type: core$1.Input }],
            onItemSelected: [{ type: core$1.Input, args: ['itemSelected',] }],
            onInputChange: [{ type: core$1.Input, args: ['inputChange',] }],
            onEmptyInputFocus: [{ type: core$1.Input, args: ['emptyInputFocus',] }],
            onResolveSuggestions: [{ type: core$1.Input, args: ['resolveSuggestions',] }],
            onGetMoreResults: [{ type: core$1.Input, args: ['getMoreResults',] }],
            onValidateInput: [{ type: core$1.Input, args: ['validateInput',] }],
            pickerSuggestionsOptions: [{ type: core$1.Input }],
            renderItem: [{ type: core$1.Input }],
            renderSuggestionsItem: [{ type: core$1.Input }],
            onChange: [{ type: core$1.Output }],
            onFocus: [{ type: core$1.Output }],
            onBlur: [{ type: core$1.Output }],
            onDismiss: [{ type: core$1.Output }],
            onRemoveSuggestion: [{ type: core$1.Output }]
        };
        return FabBasePickerComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /** @type {?} */
        FabBasePickerComponent.prototype.componentRef;
        /** @type {?} */
        FabBasePickerComponent.prototype.resolveDelay;
        /** @type {?} */
        FabBasePickerComponent.prototype.defaultSelectedItems;
        /** @type {?} */
        FabBasePickerComponent.prototype.getTextFromItem;
        /** @type {?} */
        FabBasePickerComponent.prototype.className;
        /** @type {?} */
        FabBasePickerComponent.prototype.pickerCalloutProps;
        /** @type {?} */
        FabBasePickerComponent.prototype.searchingText;
        /** @type {?} */
        FabBasePickerComponent.prototype.disabled;
        /** @type {?} */
        FabBasePickerComponent.prototype.itemLimit;
        /** @type {?} */
        FabBasePickerComponent.prototype.createGenericItem;
        /** @type {?} */
        FabBasePickerComponent.prototype.removeButtonAriaLabel;
        /** @type {?} */
        FabBasePickerComponent.prototype.selectedItems;
        /** @type {?} */
        FabBasePickerComponent.prototype.enableSelectedSuggestionAlert;
        /** @type {?} */
        FabBasePickerComponent.prototype.inputProps;
        /** @type {?} */
        FabBasePickerComponent.prototype.onItemSelected;
        /** @type {?} */
        FabBasePickerComponent.prototype.onInputChange;
        /** @type {?} */
        FabBasePickerComponent.prototype.onEmptyInputFocus;
        /** @type {?} */
        FabBasePickerComponent.prototype.onResolveSuggestions;
        /** @type {?} */
        FabBasePickerComponent.prototype.onGetMoreResults;
        /** @type {?} */
        FabBasePickerComponent.prototype.onValidateInput;
        /** @type {?} */
        FabBasePickerComponent.prototype.renderItem;
        /** @type {?} */
        FabBasePickerComponent.prototype.renderSuggestionsItem;
        /** @type {?} */
        FabBasePickerComponent.prototype.onChange;
        /** @type {?} */
        FabBasePickerComponent.prototype.onFocus;
        /** @type {?} */
        FabBasePickerComponent.prototype.onBlur;
        /** @type {?} */
        FabBasePickerComponent.prototype.onDismiss;
        /** @type {?} */
        FabBasePickerComponent.prototype.onRemoveSuggestion;
        /** @type {?} */
        FabBasePickerComponent.prototype.pickerSuggestionsProps;
        /** @type {?} */
        FabBasePickerComponent.prototype.onRenderSuggestionsItem;
        /** @type {?} */
        FabBasePickerComponent.prototype.onRenderItem;
        /**
         * @type {?}
         * @private
         */
        FabBasePickerComponent.prototype._pickerSuggestionsOptions;
    }
    /**
     * @record
     */
    function IBasePickerSuggestionsOptions() { }
    if (false) {
        /** @type {?} */
        IBasePickerSuggestionsOptions.prototype.renderNoResultFound;
        /** @type {?} */
        IBasePickerSuggestionsOptions.prototype.renderResultsFooterFull;
        /** @type {?} */
        IBasePickerSuggestionsOptions.prototype.renderResultsFooter;
    }
    /**
     * @record
     * @template T
     */
    function IRenderSuggestionItemContext() { }
    if (false) {
        /** @type {?} */
        IRenderSuggestionItemContext.prototype.props;
        /** @type {?} */
        IRenderSuggestionItemContext.prototype.itemProps;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Dummy action to force BasePickerCss to load and not be tree-shaken away.
    utils.noop(BasePickerCss);
    var FabBasePickerModule = /** @class */ (function () {
        function FabBasePickerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('BasePicker', (/**
             * @return {?}
             */
            function () { return Pickers.BasePicker; }));
        }
        FabBasePickerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabBasePickerModule.ctorParameters = function () { return []; };
        return FabBasePickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabTagPickerComponent = /** @class */ (function (_super) {
        __extends(FabTagPickerComponent, _super);
        function FabTagPickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabTagPickerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-tag-picker',
                        exportAs: 'fabTagPicker',
                        template: "\n    <TagPicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [resolveDelay]=\"resolveDelay\"\n      [defaultSelectedItems]=\"defaultSelectedItems\"\n      [getTextFromItem]=\"getTextFromItem\"\n      [className]=\"className\"\n      [pickerCalloutProps]=\"pickerCalloutProps\"\n      [searchingText]=\"searchingText\"\n      [disabled]=\"disabled\"\n      [itemLimit]=\"itemLimit\"\n      [createGenericItem]=\"createGenericItem\"\n      [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n      [selectedItems]=\"selectedItems\"\n      [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n      [inputProps]=\"inputProps\"\n      [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n      [ItemSelected]=\"onItemSelected\"\n      [InputChange]=\"onInputChange\"\n      [EmptyInputFocus]=\"onEmptyInputFocus\"\n      [ResolveSuggestions]=\"onResolveSuggestions\"\n      [GetMoreResults]=\"onGetMoreResults\"\n      [ValidateInput]=\"onValidateInput\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n      [Change]=\"onChangeHandler\"\n      [Focus]=\"onFocusHandler\"\n      [Blur]=\"onBlurHandler\"\n      [Dismiss]=\"onDismissHandler\"\n      [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n    >\n    </TagPicker>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabTagPickerComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabTagPickerComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabTagPickerComponent;
    }(FabBasePickerComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabTagPickerComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$w = [FabTagPickerComponent];
    var FabTagPickerModule = /** @class */ (function () {
        function FabTagPickerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('TagPicker', (/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (officeUiFabricReact.TagPicker)); }));
        }
        FabTagPickerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule, FabBasePickerModule],
                        declarations: components$w,
                        exports: components$w,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabTagPickerModule.ctorParameters = function () { return []; };
        return FabTagPickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabPeoplePickerComponent = /** @class */ (function (_super) {
        __extends(FabPeoplePickerComponent, _super);
        function FabPeoplePickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
        }
        FabPeoplePickerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-people-picker',
                        exportAs: 'fabPeoplePicker',
                        template: "\n      <PeoplePicker\n        #reactNode\n        [componentRef]=\"componentRef\"\n        [resolveDelay]=\"resolveDelay\"\n        [defaultSelectedItems]=\"defaultSelectedItems\"\n        [getTextFromItem]=\"getTextFromItem\"\n        [className]=\"className\"\n        [pickerCalloutProps]=\"pickerCalloutProps\"\n        [searchingText]=\"searchingText\"\n        [disabled]=\"disabled\"\n        [itemLimit]=\"itemLimit\"\n        [createGenericItem]=\"createGenericItem\"\n        [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n        [selectedItems]=\"selectedItems\"\n        [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n        [inputProps]=\"inputProps\"\n        [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n        [ItemSelected]=\"onItemSelected\"\n        [InputChange]=\"onInputChange\"\n        [EmptyInputFocus]=\"onEmptyInputFocus\"\n        [ResolveSuggestions]=\"onResolveSuggestions\"\n        [GetMoreResults]=\"onGetMoreResults\"\n        [ValidateInput]=\"onValidateInput\"\n        [RenderItem]=\"renderItem && onRenderItem\"\n        [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n        [Change]=\"onChangeHandler\"\n        [Focus]=\"onFocusHandler\"\n        [Blur]=\"onBlurHandler\"\n        [Dismiss]=\"onDismissHandler\"\n        [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n      >\n      </PeoplePicker>\n    ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPeoplePickerComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabPeoplePickerComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }]
        };
        return FabPeoplePickerComponent;
    }(FabBasePickerComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabPeoplePickerComponent.prototype.reactNodeRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Dummy action to force PeoplePickerItemCss to load and not be tree-shaken away.
    utils.noop(PeoplePickerItemCss);
    /** @type {?} */
    var components$x = [FabPeoplePickerComponent];
    var FabPeoplePickerModule = /** @class */ (function () {
        function FabPeoplePickerModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement('PeoplePicker', (/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (Pickers.NormalPeoplePickerBase)); }));
        }
        FabPeoplePickerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule, FabBasePickerModule],
                        declarations: components$x,
                        exports: components$x,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPeoplePickerModule.ctorParameters = function () { return []; };
        return FabPeoplePickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabProgressIndicatorComponent = /** @class */ (function (_super) {
        __extends(FabProgressIndicatorComponent, _super);
        function FabProgressIndicatorComponent(elementRef, changeDetectorRef, renderer) {
            return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        }
        Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderDescription", {
            get: /**
             * @return {?}
             */
            function () {
                return this._renderDescription;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._renderDescription = value;
                if (value) {
                    this.description = this.createInputJsxRenderer(value)({});
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderLabel", {
            get: /**
             * @return {?}
             */
            function () {
                return this._renderLabel;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._renderLabel = value;
                if (value) {
                    this.label = this.createInputJsxRenderer(value)({});
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FabProgressIndicatorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
        };
        FabProgressIndicatorComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-progress-indicator',
                        exportAs: 'fabProgressIndicator',
                        template: "\n    <ProgressIndicator\n      #reactNode\n      [ariaValueText]=\"ariaValueText\"\n      [barHeight]=\"barHeight\"\n      [className]=\"className\"\n      [description]=\"description\"\n      [label]=\"label\"\n      [RenderProgress]=\"renderProgress && onRenderProgress\"\n      [percentComplete]=\"percentComplete\"\n      [progressHidden]=\"progressHidden\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </ProgressIndicator>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabProgressIndicatorComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 }
        ]; };
        FabProgressIndicatorComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            ariaValueText: [{ type: core$1.Input }],
            barHeight: [{ type: core$1.Input }],
            className: [{ type: core$1.Input }],
            renderProgress: [{ type: core$1.Input }],
            percentComplete: [{ type: core$1.Input }],
            progressHidden: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            renderDescription: [{ type: core$1.Input }],
            renderLabel: [{ type: core$1.Input }]
        };
        return FabProgressIndicatorComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabProgressIndicatorComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.ariaValueText;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.barHeight;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.className;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.renderProgress;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.percentComplete;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.progressHidden;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.styles;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.theme;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.description;
        /**
         * @type {?}
         * @private
         */
        FabProgressIndicatorComponent.prototype._renderDescription;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.label;
        /**
         * @type {?}
         * @private
         */
        FabProgressIndicatorComponent.prototype._renderLabel;
        /** @type {?} */
        FabProgressIndicatorComponent.prototype.onRenderProgress;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$y = [FabProgressIndicatorComponent];
    var FabProgressIndicatorModule = /** @class */ (function () {
        function FabProgressIndicatorModule() {
            core.registerElement('ProgressIndicator', (/**
             * @return {?}
             */
            function () { return ProgressIndicator.ProgressIndicator; }));
        }
        FabProgressIndicatorModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$y,
                        exports: components$y,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabProgressIndicatorModule.ctorParameters = function () { return []; };
        return FabProgressIndicatorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabRatingComponent = /** @class */ (function (_super) {
        __extends(FabRatingComponent, _super);
        function FabRatingComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
            // tslint:disable-next-line: no-output-on-prefix
            _this.onRatingChange = new core$1.EventEmitter();
            // tslint:disable-next-line: no-output-on-prefix
            _this.onRatingChanged = new core$1.EventEmitter();
            _this.onChange = _this.onChange.bind(_this);
            _this.onChanged = _this.onChanged.bind(_this);
            return _this;
        }
        /**
         * @param {?=} ev
         * @param {?=} rating
         * @return {?}
         */
        FabRatingComponent.prototype.onChange = /**
         * @param {?=} ev
         * @param {?=} rating
         * @return {?}
         */
        function (ev, rating) {
            this.onRatingChange.emit({
                ev: ev && ev.nativeEvent,
                rating: rating
            });
        };
        /**
         * @param {?=} rating
         * @return {?}
         */
        FabRatingComponent.prototype.onChanged = /**
         * @param {?=} rating
         * @return {?}
         */
        function (rating) {
            this.onRatingChanged.emit({
                rating: rating
            });
        };
        FabRatingComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'fab-rating',
                        exportAs: 'fabRating',
                        template: "\n    <Rating\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rating]=\"rating\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [allowZeroStars]=\"allowZeroStars\"\n      [icon]=\"icon\"\n      [unselectedIcon]=\"unselectedIcon\"\n      [size]=\"size\"\n      [Change]=\"onChange\"\n      [Changed]=\"onChanged\"\n      [ariaLabelFormat]=\"ariaLabelFormat\"\n      [ariaLabelId]=\"ariaLabelId\"\n      [readOnly]=\"readOnly\"\n      [getAriaLabel]=\"getAriaLabel\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    ></Rating>\n  ",
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabRatingComponent.ctorParameters = function () { return [
            { type: core$1.ElementRef },
            { type: core$1.ChangeDetectorRef },
            { type: core$1.Renderer2 },
            { type: core$1.NgZone }
        ]; };
        FabRatingComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ['reactNode', { static: true },] }],
            componentRef: [{ type: core$1.Input }],
            rating: [{ type: core$1.Input }],
            min: [{ type: core$1.Input }],
            max: [{ type: core$1.Input }],
            allowZeroStars: [{ type: core$1.Input }],
            icon: [{ type: core$1.Input }],
            unselectedIcon: [{ type: core$1.Input }],
            size: [{ type: core$1.Input }],
            ariaLabelFormat: [{ type: core$1.Input }],
            ariaLabelId: [{ type: core$1.Input }],
            readOnly: [{ type: core$1.Input }],
            getAriaLabel: [{ type: core$1.Input }],
            styles: [{ type: core$1.Input }],
            theme: [{ type: core$1.Input }],
            onRatingChange: [{ type: core$1.Output }],
            onRatingChanged: [{ type: core$1.Output }]
        };
        return FabRatingComponent;
    }(core.ReactWrapperComponent));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        FabRatingComponent.prototype.reactNodeRef;
        /** @type {?} */
        FabRatingComponent.prototype.componentRef;
        /** @type {?} */
        FabRatingComponent.prototype.rating;
        /** @type {?} */
        FabRatingComponent.prototype.min;
        /** @type {?} */
        FabRatingComponent.prototype.max;
        /** @type {?} */
        FabRatingComponent.prototype.allowZeroStars;
        /** @type {?} */
        FabRatingComponent.prototype.icon;
        /** @type {?} */
        FabRatingComponent.prototype.unselectedIcon;
        /** @type {?} */
        FabRatingComponent.prototype.size;
        /** @type {?} */
        FabRatingComponent.prototype.ariaLabelFormat;
        /** @type {?} */
        FabRatingComponent.prototype.ariaLabelId;
        /** @type {?} */
        FabRatingComponent.prototype.readOnly;
        /** @type {?} */
        FabRatingComponent.prototype.getAriaLabel;
        /** @type {?} */
        FabRatingComponent.prototype.styles;
        /** @type {?} */
        FabRatingComponent.prototype.theme;
        /** @type {?} */
        FabRatingComponent.prototype.onRatingChange;
        /** @type {?} */
        FabRatingComponent.prototype.onRatingChanged;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$z = [FabRatingComponent];
    var FabRatingModule = /** @class */ (function () {
        function FabRatingModule() {
            core.registerElement('Rating', (/**
             * @return {?}
             */
            function () { return Rating.Rating; }));
        }
        FabRatingModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components$z,
                        exports: components$z,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabRatingModule.ctorParameters = function () { return []; };
        return FabRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Copyright (c) Microsoft Corporation. All rights reserved.
    // Licensed under the MIT License.
    /**
     * @record
     * @template T
     */
    function TypedChange() { }
    if (false) {
        /** @type {?} */
        TypedChange.prototype.previousValue;
        /** @type {?} */
        TypedChange.prototype.currentValue;
    }
    /**
     * @record
     * @template TComponent
     */
    function OnChanges() { }
    if (false) {
        /**
         * @param {?} changes
         * @return {?}
         */
        OnChanges.prototype.ngOnChanges = function (changes) { };
    }

    exports.CalendarStringsDirective = CalendarStringsDirective;
    exports.ComboBoxOptionDirective = ComboBoxOptionDirective;
    exports.ComboBoxOptionsDirective = ComboBoxOptionsDirective;
    exports.CommandBarFarItemsDirective = CommandBarFarItemsDirective;
    exports.CommandBarItemDirective = CommandBarItemDirective;
    exports.CommandBarItemRenderDirective = CommandBarItemRenderDirective;
    exports.CommandBarItemRenderIconDirective = CommandBarItemRenderIconDirective;
    exports.CommandBarItemsDirective = CommandBarItemsDirective;
    exports.CommandBarItemsDirectiveBase = CommandBarItemsDirectiveBase;
    exports.CommandBarOverflowItemsDirective = CommandBarOverflowItemsDirective;
    exports.ContextualMenuItemDirective = ContextualMenuItemDirective;
    exports.ContextualMenuItemRenderDirective = ContextualMenuItemRenderDirective;
    exports.ContextualMenuItemRenderIconDirective = ContextualMenuItemRenderIconDirective;
    exports.DetailsListColumnDirective = DetailsListColumnDirective;
    exports.DetailsListColumnRenderDirective = DetailsListColumnRenderDirective;
    exports.DetailsListColumnsDirective = DetailsListColumnsDirective;
    exports.DetailsListGroupsDirective = DetailsListGroupsDirective;
    exports.DropdownOptionDirective = DropdownOptionDirective;
    exports.DropdownOptionsDirective = DropdownOptionsDirective;
    exports.FabActionButtonComponent = FabActionButtonComponent;
    exports.FabBasePickerComponent = FabBasePickerComponent;
    exports.FabBasePickerModule = FabBasePickerModule;
    exports.FabBreadcrumbComponent = FabBreadcrumbComponent;
    exports.FabBreadcrumbModule = FabBreadcrumbModule;
    exports.FabButtonModule = FabButtonModule;
    exports.FabCalendarComponent = FabCalendarComponent;
    exports.FabCalendarModule = FabCalendarModule;
    exports.FabCalloutComponent = FabCalloutComponent;
    exports.FabCalloutModule = FabCalloutModule;
    exports.FabCheckboxComponent = FabCheckboxComponent;
    exports.FabCheckboxModule = FabCheckboxModule;
    exports.FabChoiceGroupComponent = FabChoiceGroupComponent;
    exports.FabChoiceGroupModule = FabChoiceGroupModule;
    exports.FabComboBoxComponent = FabComboBoxComponent;
    exports.FabComboBoxModule = FabComboBoxModule;
    exports.FabCommandBarButtonComponent = FabCommandBarButtonComponent;
    exports.FabCommandBarComponent = FabCommandBarComponent;
    exports.FabCommandBarModule = FabCommandBarModule;
    exports.FabCompoundButtonComponent = FabCompoundButtonComponent;
    exports.FabContextualMenuModule = FabContextualMenuModule;
    exports.FabDatePickerComponent = FabDatePickerComponent;
    exports.FabDatePickerModule = FabDatePickerModule;
    exports.FabDefaultButtonComponent = FabDefaultButtonComponent;
    exports.FabDetailsListComponent = FabDetailsListComponent;
    exports.FabDetailsListModule = FabDetailsListModule;
    exports.FabDialogComponent = FabDialogComponent;
    exports.FabDialogContentComponent = FabDialogContentComponent;
    exports.FabDialogFooterComponent = FabDialogFooterComponent;
    exports.FabDialogModule = FabDialogModule;
    exports.FabDividerComponent = FabDividerComponent;
    exports.FabDividerModule = FabDividerModule;
    exports.FabDropdownComponent = FabDropdownComponent;
    exports.FabDropdownModule = FabDropdownModule;
    exports.FabExpandingCardComponent = FabExpandingCardComponent;
    exports.FabFabricComponent = FabFabricComponent;
    exports.FabFabricModule = FabFabricModule;
    exports.FabGroupModule = FabGroupModule;
    exports.FabGroupedListComponent = FabGroupedListComponent;
    exports.FabGroupedListModule = FabGroupedListModule;
    exports.FabHoverCardComponent = FabHoverCardComponent;
    exports.FabHoverCardModule = FabHoverCardModule;
    exports.FabIconButtonComponent = FabIconButtonComponent;
    exports.FabIconComponent = FabIconComponent;
    exports.FabIconModule = FabIconModule;
    exports.FabImageComponent = FabImageComponent;
    exports.FabImageModule = FabImageModule;
    exports.FabLinkComponent = FabLinkComponent;
    exports.FabLinkModule = FabLinkModule;
    exports.FabMarqueeSelectionModule = FabMarqueeSelectionModule;
    exports.FabMaskedTextFieldComponent = FabMaskedTextFieldComponent;
    exports.FabMessageBarButtonComponent = FabMessageBarButtonComponent;
    exports.FabMessageBarComponent = FabMessageBarComponent;
    exports.FabMessageBarModule = FabMessageBarModule;
    exports.FabModalComponent = FabModalComponent;
    exports.FabModalModule = FabModalModule;
    exports.FabNavComponent = FabNavComponent;
    exports.FabNavModule = FabNavModule;
    exports.FabPanelComponent = FabPanelComponent;
    exports.FabPanelModule = FabPanelModule;
    exports.FabPeoplePickerComponent = FabPeoplePickerComponent;
    exports.FabPeoplePickerModule = FabPeoplePickerModule;
    exports.FabPersonaBaseComponent = FabPersonaBaseComponent;
    exports.FabPersonaCoinComponent = FabPersonaCoinComponent;
    exports.FabPersonaComponent = FabPersonaComponent;
    exports.FabPersonaModule = FabPersonaModule;
    exports.FabPivotComponent = FabPivotComponent;
    exports.FabPivotItemComponent = FabPivotItemComponent;
    exports.FabPivotModule = FabPivotModule;
    exports.FabPlainCardComponent = FabPlainCardComponent;
    exports.FabPrimaryButtonComponent = FabPrimaryButtonComponent;
    exports.FabProgressIndicatorComponent = FabProgressIndicatorComponent;
    exports.FabProgressIndicatorModule = FabProgressIndicatorModule;
    exports.FabRatingComponent = FabRatingComponent;
    exports.FabRatingModule = FabRatingModule;
    exports.FabSearchBoxComponent = FabSearchBoxComponent;
    exports.FabSearchBoxModule = FabSearchBoxModule;
    exports.FabShimmerComponent = FabShimmerComponent;
    exports.FabShimmerElementsGroupComponent = FabShimmerElementsGroupComponent;
    exports.FabShimmerModule = FabShimmerModule;
    exports.FabSliderComponent = FabSliderComponent;
    exports.FabSliderModule = FabSliderModule;
    exports.FabSpinButtonComponent = FabSpinButtonComponent;
    exports.FabSpinButtonModule = FabSpinButtonModule;
    exports.FabSpinnerComponent = FabSpinnerComponent;
    exports.FabSpinnerModule = FabSpinnerModule;
    exports.FabSplitButtonComponent = FabSplitButtonComponent;
    exports.FabTagPickerComponent = FabTagPickerComponent;
    exports.FabTagPickerModule = FabTagPickerModule;
    exports.FabTextFieldComponent = FabTextFieldComponent;
    exports.FabTextFieldModule = FabTextFieldModule;
    exports.FabToggleComponent = FabToggleComponent;
    exports.FabToggleModule = FabToggleModule;
    exports.FabTooltipHostComponent = FabTooltipHostComponent;
    exports.FabTooltipModule = FabTooltipModule;
    exports.GroupItemDirective = GroupItemDirective;
    exports.ɵa = FabBaseButtonComponent;
    exports.ɵb = FabBaseComboBoxComponent;
    exports.ɵc = FabVirtualizedComboBoxComponent;
    exports.ɵd = FabMarqueeSelectionComponent;
    exports.ɵe = FabBaseTextFieldComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric.umd.js.map
