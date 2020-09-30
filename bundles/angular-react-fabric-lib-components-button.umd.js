(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular-react/core'), require('@angular-react/fabric/lib/components/core'), require('@angular-react/fabric/lib/utils'), require('@angular-react/fabric/lib/components/contextual-menu'), require('@angular/common'), require('office-ui-fabric-react/lib/Button')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/button', ['exports', '@angular/core', '@angular-react/core', '@angular-react/fabric/lib/components/core', '@angular-react/fabric/lib/utils', '@angular-react/fabric/lib/components/contextual-menu', '@angular/common', 'office-ui-fabric-react/lib/Button'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components.button = {}), global.ng.core, global.core$1, global['angular-react'].fabric.lib.components.core, global['angular-react'].fabric.lib.utils, global['angular-react'].fabric.lib.components['contextual-menu'], global.ng.common, global.Button));
}(this, (function (exports, core, core$1, core$2, utils, contextualMenu, common, Button) { 'use strict';

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
     * @abstract
     */
    var FabBaseButtonComponent = /** @class */ (function (_super) {
        __extends(FabBaseButtonComponent, _super);
        function FabBaseButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
            var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
            _this.onClick = new core.EventEmitter();
            _this.onMenuClick = new core.EventEmitter();
            _this.onAfterMenuDismiss = new core.EventEmitter();
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
            componentRef: [{ type: core.Input }],
            href: [{ type: core.Input }],
            primary: [{ type: core.Input }],
            uniqueId: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            allowDisabledFocus: [{ type: core.Input }],
            primaryDisabled: [{ type: core.Input }],
            styles: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            className: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input }],
            ariaDescription: [{ type: core.Input }],
            ariaHidden: [{ type: core.Input }],
            ariaSelected: [{ type: core.Input }],
            role: [{ type: core.Input }],
            tabIndex: [{ type: core.Input }],
            text: [{ type: core.Input }],
            iconProps: [{ type: core.Input }],
            menuProps: [{ type: core.Input }],
            split: [{ type: core.Input }],
            menuIconProps: [{ type: core.Input }],
            splitButtonAriaLabel: [{ type: core.Input }],
            menuAs: [{ type: core.Input }],
            secondaryText: [{ type: core.Input }],
            toggle: [{ type: core.Input }],
            data: [{ type: core.Input }],
            getClassNames: [{ type: core.Input }],
            getSplitButtonClassNames: [{ type: core.Input }],
            menuTriggerKeyCode: [{ type: core.Input }],
            keytipProps: [{ type: core.Input }],
            persistMenu: [{ type: core.Input }],
            renderIcon: [{ type: core.Input }],
            renderText: [{ type: core.Input }],
            renderDescription: [{ type: core.Input }],
            renderAriaDescription: [{ type: core.Input }],
            renderChildren: [{ type: core.Input }],
            renderMenuIcon: [{ type: core.Input }],
            onClick: [{ type: core.Output }],
            onMenuClick: [{ type: core.Output }],
            onAfterMenuDismiss: [{ type: core.Output }],
            menuItemsDirectives: [{ type: core.ContentChildren, args: [contextualMenu.ContextualMenuItemDirective,] }]
        };
        return FabBaseButtonComponent;
    }(core$1.ReactWrapperComponent));
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
            { type: core.Component, args: [{
                        selector: 'fab-action-button',
                        exportAs: 'fabActionButton',
                        template: "\n    <ActionButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ActionButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabActionButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabActionButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-command-bar-button',
                        exportAs: 'fabCommandBarButton',
                        template: "\n    <CommandBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CommandBarButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCommandBarButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabCommandBarButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-compound-button',
                        exportAs: 'fabCompoundButton',
                        template: "\n    <CompoundButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CompoundButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabCompoundButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabCompoundButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-default-button',
                        exportAs: 'fabDefaultButton',
                        template: "\n    <DefaultButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DefaultButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabDefaultButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabDefaultButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-icon-button',
                        exportAs: 'fabIconButton',
                        template: "\n    <IconButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </IconButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabIconButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabIconButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-messagebar-button',
                        exportAs: 'fabMessageBarButton',
                        template: "\n    <MessageBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBarButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabMessageBarButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabMessageBarButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-primary-button',
                        exportAs: 'fabPrimaryButton',
                        template: "\n    <PrimaryButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PrimaryButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabPrimaryButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabPrimaryButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-split-button',
                        exportAs: 'fabSplitButton',
                        template: "\n    <SplitButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </SplitButton>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabSplitButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabSplitButtonComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
    var components = [
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
            core$1.registerElement('DefaultButton', (/**
             * @return {?}
             */
            function () { return Button.DefaultButton; }));
            core$1.registerElement('ActionButton', (/**
             * @return {?}
             */
            function () { return Button.ActionButton; }));
            core$1.registerElement('CommandBarButton', (/**
             * @return {?}
             */
            function () { return Button.CommandBarButton; }));
            core$1.registerElement('CompoundButton', (/**
             * @return {?}
             */
            function () { return Button.CompoundButton; }));
            core$1.registerElement('IconButton', (/**
             * @return {?}
             */
            function () { return Button.IconButton; }));
            core$1.registerElement('MessageBarButton', (/**
             * @return {?}
             */
            function () { return Button.MessageBarButton; }));
            core$1.registerElement('PrimaryButton', (/**
             * @return {?}
             */
            function () { return Button.PrimaryButton; }));
        }
        FabButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components,
                        exports: components,
                        schemas: [core.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabButtonModule.ctorParameters = function () { return []; };
        return FabButtonModule;
    }());

    exports.FabActionButtonComponent = FabActionButtonComponent;
    exports.FabButtonModule = FabButtonModule;
    exports.FabCommandBarButtonComponent = FabCommandBarButtonComponent;
    exports.FabCompoundButtonComponent = FabCompoundButtonComponent;
    exports.FabDefaultButtonComponent = FabDefaultButtonComponent;
    exports.FabIconButtonComponent = FabIconButtonComponent;
    exports.FabMessageBarButtonComponent = FabMessageBarButtonComponent;
    exports.FabPrimaryButtonComponent = FabPrimaryButtonComponent;
    exports.FabSplitButtonComponent = FabSplitButtonComponent;
    exports.ɵa = FabBaseButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-button.umd.js.map
