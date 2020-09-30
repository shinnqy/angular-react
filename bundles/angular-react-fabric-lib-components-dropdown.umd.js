(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/core'), require('@angular/common'), require('office-ui-fabric-react/lib/Dropdown')) :
    typeof define === 'function' && define.amd ? define('@angular-react/fabric/lib/components/dropdown', ['exports', '@angular-react/core', '@angular/core', '@angular/common', 'office-ui-fabric-react/lib/Dropdown'], factory) :
    (global = global || self, factory((global['angular-react'] = global['angular-react'] || {}, global['angular-react'].fabric = global['angular-react'].fabric || {}, global['angular-react'].fabric.lib = global['angular-react'].fabric.lib || {}, global['angular-react'].fabric.lib.components = global['angular-react'].fabric.lib.components || {}, global['angular-react'].fabric.lib.components.dropdown = {}), global.core, global.ng.core, global.ng.common, global.Dropdown));
}(this, (function (exports, core, core$1, common, Dropdown) { 'use strict';

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
    var declarations = [
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
                        declarations: declarations,
                        exports: declarations,
                        schemas: [core$1.NO_ERRORS_SCHEMA],
                    },] }
        ];
        /** @nocollapse */
        FabDropdownModule.ctorParameters = function () { return []; };
        return FabDropdownModule;
    }());

    exports.DropdownOptionDirective = DropdownOptionDirective;
    exports.DropdownOptionsDirective = DropdownOptionsDirective;
    exports.FabDropdownComponent = FabDropdownComponent;
    exports.FabDropdownModule = FabDropdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-react-fabric-lib-components-dropdown.umd.js.map
