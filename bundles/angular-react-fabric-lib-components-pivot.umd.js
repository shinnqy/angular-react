(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('office-ui-fabric-react/lib/Pivot'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/pivot', ['exports', '@angular-react/core', '@angular/core', 'office-ui-fabric-react/lib/Pivot', '@angular/common'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components.pivot = {}), global.core, global.ng.core, global.Pivot, global.ng.common));
}(this, (function (exports, core, core$1, Pivot, common) { 'use strict';

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
    var components = [FabPivotComponent, FabPivotItemComponent];
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
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPivotModule.ctorParameters = function () { return []; };
        return FabPivotModule;
    }());

    exports.FabPivotComponent = FabPivotComponent;
    exports.FabPivotItemComponent = FabPivotItemComponent;
    exports.FabPivotModule = FabPivotModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-pivot.umd.js.map
