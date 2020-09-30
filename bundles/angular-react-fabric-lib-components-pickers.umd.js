(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('@angular-react/fabric/lib/utils'), require('@angular/common'), require('office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss'), require('office-ui-fabric-react/lib/Pickers'), require('office-ui-fabric-react'), require('office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/pickers', ['exports', '@angular-react/core', '@angular/core', '@angular-react/fabric/lib/utils', '@angular/common', 'office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss', 'office-ui-fabric-react/lib/Pickers', 'office-ui-fabric-react', 'office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components.pickers = {}), global.core, global.ng.core, global['angular-react'].fabric.lib.utils, global.ng.common, global.BasePickerCss, global.Pickers, global.officeUiFabricReact, global.PeoplePickerItemCss));
}(this, (function (exports, core, core$1, utils, common, BasePickerCss, Pickers, officeUiFabricReact, PeoplePickerItemCss) { 'use strict';

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
    var components = [FabTagPickerComponent];
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
                        declarations: components,
                        exports: components,
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
    var components$1 = [FabPeoplePickerComponent];
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
                        declarations: components$1,
                        exports: components$1,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabPeoplePickerModule.ctorParameters = function () { return []; };
        return FabPeoplePickerModule;
    }());

    exports.FabBasePickerComponent = FabBasePickerComponent;
    exports.FabBasePickerModule = FabBasePickerModule;
    exports.FabPeoplePickerComponent = FabPeoplePickerComponent;
    exports.FabPeoplePickerModule = FabPeoplePickerModule;
    exports.FabTagPickerComponent = FabTagPickerComponent;
    exports.FabTagPickerModule = FabTagPickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-pickers.umd.js.map
