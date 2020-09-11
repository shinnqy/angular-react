(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('@angular/common'), require('office-ui-fabric-react/lib/Panel')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/panel', ['exports', '@angular-react/core', '@angular/core', '@angular/common', 'office-ui-fabric-react/lib/Panel'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components.panel = {}), global.core, global.ng.core, global.ng.common, global.Panel));
}(this, (function (exports, core, core$1, common, Panel) { 'use strict';

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
    var components = [FabPanelComponent];
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
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPanelModule.ctorParameters = function () { return []; };
        return FabPanelModule;
    }());

    exports.FabPanelComponent = FabPanelComponent;
    exports.FabPanelModule = FabPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-panel.umd.js.map
