(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/common'), require('@angular/core'), require('office-ui-fabric-react/lib/TextField')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/text-field', ['exports', '@angular-react/core', '@angular/common', '@angular/core', 'office-ui-fabric-react/lib/TextField'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components['text-field'] = {}), global.core, global.ng.common, global.ng.core, global.TextField));
}(this, (function (exports, core, common, core$1, TextField) { 'use strict';

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
    var components = [FabTextFieldComponent, FabMaskedTextFieldComponent];
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
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabTextFieldModule.ctorParameters = function () { return []; };
        return FabTextFieldModule;
    }());

    exports.FabMaskedTextFieldComponent = FabMaskedTextFieldComponent;
    exports.FabTextFieldComponent = FabTextFieldComponent;
    exports.FabTextFieldModule = FabTextFieldModule;
    exports.ɵa = FabBaseTextFieldComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-text-field.umd.js.map
