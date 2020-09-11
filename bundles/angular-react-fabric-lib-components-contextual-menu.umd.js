(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('angular-react-toolkit/core/shared/changeable-helper'), require('angular-react-toolkit/core/shared/changeable-item.directive'), require('angular-react-toolkit/utils/get-data-attributes')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/contextual-menu', ['exports', '@angular/common', '@angular/core', 'angular-react-toolkit/core/shared/changeable-helper', 'angular-react-toolkit/core/shared/changeable-item.directive', 'angular-react-toolkit/utils/get-data-attributes'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components['contextual-menu'] = {}), global.ng.common, global.ng.core, global.changeableHelper, global.changeableItem_directive, global.getDataAttributes));
}(this, (function (exports, common, core, changeableHelper, changeableItem_directive, getDataAttributes) { 'use strict';

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
     * Wrapper directive to allow rendering a custom item to a ContextualMenuItem.
     */
    var ContextualMenuItemRenderDirective = /** @class */ (function () {
        function ContextualMenuItemRenderDirective() {
        }
        ContextualMenuItemRenderDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
        ];
        ContextualMenuItemRenderDirective.propDecorators = {
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
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
            { type: core.Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
        ];
        ContextualMenuItemRenderIconDirective.propDecorators = {
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
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
            _this.click = new core.EventEmitter();
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
            this._changeableItemsHelper = new changeableHelper.ChangeableItemsHelper(this.menuItemsDirectives, this, (/**
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
            return __assign({}, directive, getDataAttributes.getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
                 * @param {?} ev
                 * @param {?} item
                 * @return {?}
                 */
                function (ev, item) {
                    directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
                }) });
        };
        ContextualMenuItemDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'contextual-menu-item' },] }
        ];
        /** @nocollapse */
        ContextualMenuItemDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ContextualMenuItemDirective.propDecorators = {
            menuItemsDirectives: [{ type: core.ContentChildren, args: [ContextualMenuItemDirective,] }],
            renderDirective: [{ type: core.ContentChild, args: [ContextualMenuItemRenderDirective, { static: false },] }],
            renderIconDirective: [{ type: core.ContentChild, args: [ContextualMenuItemRenderIconDirective, { static: false },] }],
            componentRef: [{ type: core.Input }],
            text: [{ type: core.Input }],
            secondaryText: [{ type: core.Input }],
            itemType: [{ type: core.Input }],
            iconProps: [{ type: core.Input }],
            submenuIconProps: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            primaryDisabled: [{ type: core.Input }],
            shortCut: [{ type: core.Input }],
            canCheck: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            split: [{ type: core.Input }],
            data: [{ type: core.Input }],
            href: [{ type: core.Input }],
            target: [{ type: core.Input }],
            rel: [{ type: core.Input }],
            subMenuProps: [{ type: core.Input }],
            getItemClassNames: [{ type: core.Input }],
            itemProps: [{ type: core.Input }],
            getSplitButtonVerticalDividerClassNames: [{ type: core.Input }],
            sectionProps: [{ type: core.Input }],
            className: [{ type: core.Input }],
            style: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input }],
            title: [{ type: core.Input }],
            onMouseDown: [{ type: core.Input }],
            role: [{ type: core.Input }],
            customOnRenderListLength: [{ type: core.Input }],
            keytipProps: [{ type: core.Input }],
            inactive: [{ type: core.Input }],
            name: [{ type: core.Input }],
            render: [{ type: core.Input }],
            renderIcon: [{ type: core.Input }],
            click: [{ type: core.Output }],
            onChildItemChanged: [{ type: core.Output }],
            onItemsChanged: [{ type: core.Output }]
        };
        return ContextualMenuItemDirective;
    }(changeableItem_directive.ChangeableItemDirective));
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
    var components = [
        ContextualMenuItemDirective,
        ContextualMenuItemRenderDirective,
        ContextualMenuItemRenderIconDirective,
    ];
    var FabContextualMenuModule = /** @class */ (function () {
        function FabContextualMenuModule() {
        }
        FabContextualMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components,
                        exports: components,
                        schemas: [core.NO_ERRORS_SCHEMA],
                    },] }
        ];
        return FabContextualMenuModule;
    }());

    exports.ContextualMenuItemDirective = ContextualMenuItemDirective;
    exports.ContextualMenuItemRenderDirective = ContextualMenuItemRenderDirective;
    exports.ContextualMenuItemRenderIconDirective = ContextualMenuItemRenderIconDirective;
    exports.FabContextualMenuModule = FabContextualMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-contextual-menu.umd.js.map
