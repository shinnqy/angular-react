(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular-react/core'), require('@angular/common'), require('office-ui-fabric-react/lib/ComboBox')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/combo-box', ['exports', '@angular/core', '@angular-react/core', '@angular/common', 'office-ui-fabric-react/lib/ComboBox'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components['combo-box'] = {}), global.ng.core, global.core$1, global.ng.common, global.ComboBox));
}(this, (function (exports, core, core$1, common, ComboBox) { 'use strict';

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
     * Wrapper directive for creating a ComboBoxOption
     * \@paramName optionKey Binds to React 'key' property.
     *                      Name change necessary because key is a reserved attribute in the wrapper component.
     */
    var ComboBoxOptionDirective = /** @class */ (function () {
        function ComboBoxOptionDirective() {
        }
        ComboBoxOptionDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'fab-combo-box-option' },] }
        ];
        ComboBoxOptionDirective.propDecorators = {
            optionKey: [{ type: core.Input }],
            text: [{ type: core.Input }],
            title: [{ type: core.Input }],
            itemType: [{ type: core.Input }],
            index: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            data: [{ type: core.Input }],
            styles: [{ type: core.Input }],
            useAriaLabelAsText: [{ type: core.Input }]
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
            { type: core.Directive, args: [{ selector: 'fab-combo-box > options' },] }
        ];
        ComboBoxOptionsDirective.propDecorators = {
            directiveItems: [{ type: core.ContentChildren, args: [ComboBoxOptionDirective,] }]
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
            _this.onItemClick = new core.EventEmitter();
            _this.onChange = new core.EventEmitter();
            _this.onPendingValueChanged = new core.EventEmitter();
            _this.onMenuOpen = new core.EventEmitter();
            _this.onMenuDismissed = new core.EventEmitter();
            _this.onMenuDismiss = new core.EventEmitter();
            _this.onScrollToItem = new core.EventEmitter();
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
            componentRef: [{ type: core.Input }],
            options: [{ type: core.Input }],
            allowFreeform: [{ type: core.Input }],
            autoComplete: [{ type: core.Input }],
            text: [{ type: core.Input }],
            buttonIconProps: [{ type: core.Input }],
            autofill: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            styles: [{ type: core.Input }],
            getClassNames: [{ type: core.Input }],
            caretDownButtonStyles: [{ type: core.Input }],
            comboBoxOptionStyles: [{ type: core.Input }],
            scrollSelectedToTop: [{ type: core.Input }],
            dropdownWidth: [{ type: core.Input }],
            useComboBoxAsMenuWidth: [{ type: core.Input }],
            multiSelect: [{ type: core.Input }],
            isButtonAriaHidden: [{ type: core.Input }],
            ariaDescribedBy: [{ type: core.Input }],
            keytipProps: [{ type: core.Input }],
            persistMenu: [{ type: core.Input }],
            shouldRestoreFocus: [{ type: core.Input }],
            resolveOptions: [{ type: core.Input }],
            renderLowerContent: [{ type: core.Input }],
            onItemClick: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onPendingValueChanged: [{ type: core.Output }],
            onMenuOpen: [{ type: core.Output }],
            onMenuDismissed: [{ type: core.Output }],
            onMenuDismiss: [{ type: core.Output }],
            onScrollToItem: [{ type: core.Output }],
            comboBoxOptionsDirective: [{ type: core.ContentChild, args: [ComboBoxOptionsDirective, { static: true },] }]
        };
        return FabBaseComboBoxComponent;
    }(core$1.ReactWrapperComponent));
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
            { type: core.Component, args: [{
                        selector: 'fab-combo-box',
                        exportAs: 'fabComboBox',
                        template: "\n    <ComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </ComboBox>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabComboBoxComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabComboBoxComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
            { type: core.Component, args: [{
                        selector: 'fab-virtualized-combo-box',
                        exportAs: 'fabVirtualizedComboBox',
                        template: "\n    <VirtualizedComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </VirtualizedComboBox>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ['react-renderer']
                    }] }
        ];
        /** @nocollapse */
        FabVirtualizedComboBoxComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        FabVirtualizedComboBoxComponent.propDecorators = {
            reactNodeRef: [{ type: core.ViewChild, args: ['reactNode', { static: true },] }]
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
    var declarations = [
        FabComboBoxComponent,
        FabVirtualizedComboBoxComponent,
        ComboBoxOptionDirective,
        ComboBoxOptionsDirective
    ];
    var FabComboBoxModule = /** @class */ (function () {
        function FabComboBoxModule() {
            // Add any React elements to the registry (used by the renderer).
            core$1.registerElement('ComboBox', (/**
             * @return {?}
             */
            function () { return ComboBox.ComboBox; }));
            core$1.registerElement('VirtualizedComboBox', (/**
             * @return {?}
             */
            function () { return ComboBox.VirtualizedComboBox; }));
        }
        FabComboBoxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: declarations,
                        exports: declarations,
                        schemas: [core.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabComboBoxModule.ctorParameters = function () { return []; };
        return FabComboBoxModule;
    }());

    exports.ComboBoxOptionDirective = ComboBoxOptionDirective;
    exports.ComboBoxOptionsDirective = ComboBoxOptionsDirective;
    exports.FabComboBoxComponent = FabComboBoxComponent;
    exports.FabComboBoxModule = FabComboBoxModule;
    exports.ɵa = FabBaseComboBoxComponent;
    exports.ɵb = FabVirtualizedComboBoxComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-combo-box.umd.js.map
