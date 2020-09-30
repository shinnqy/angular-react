(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('@angular-react/fabric/lib/utils'), require('@angular/common'), require('office-ui-fabric-react/lib/HoverCard')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/hover-card', ['exports', '@angular-react/core', '@angular/core', '@angular-react/fabric/lib/utils', '@angular/common', 'office-ui-fabric-react/lib/HoverCard'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components['hover-card'] = {}), global.core, global.ng.core, global['angular-react'].fabric.lib.utils, global.ng.common, global.HoverCard));
}(this, (function (exports, core, core$1, utils, common, HoverCard) { 'use strict';

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
    var components = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
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
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabHoverCardModule.ctorParameters = function () { return []; };
        return FabHoverCardModule;
    }());

    exports.FabExpandingCardComponent = FabExpandingCardComponent;
    exports.FabHoverCardComponent = FabHoverCardComponent;
    exports.FabHoverCardModule = FabHoverCardModule;
    exports.FabPlainCardComponent = FabPlainCardComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-hover-card.umd.js.map
