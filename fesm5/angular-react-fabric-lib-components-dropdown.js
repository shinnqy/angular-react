import { __rest, __assign, __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Directive, Input, ContentChildren, EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, ContentChild, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

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
        { type: Directive, args: [{ selector: 'fab-dropdown-option' },] }
    ];
    DropdownOptionDirective.propDecorators = {
        optionKey: [{ type: Input }],
        text: [{ type: Input }],
        title: [{ type: Input }],
        itemType: [{ type: Input }],
        index: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        selected: [{ type: Input }],
        disabled: [{ type: Input }],
        hidden: [{ type: Input }],
        data: [{ type: Input }]
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
        { type: Directive, args: [{ selector: 'fab-dropdown > options' },] }
    ];
    DropdownOptionsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [DropdownOptionDirective,] }]
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
        _this.onChange = new EventEmitter();
        _this.onDismiss = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'fab-dropdown',
                    exportAs: 'fabDropdown',
                    template: "\n    <Dropdown\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [ariaLabel]=\"ariaLabel\"\n      [id]=\"id\"\n      [className]=\"className\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [disabled]=\"disabled\"\n      [required]=\"required\"\n      [calloutProps]=\"calloutProps\"\n      [panelProps]=\"panelProps\"\n      [errorMessage]=\"errorMessage\"\n      [placeholder]=\"placeholder\"\n      [openOnKeyboardFocus]=\"openOnKeyboardFocus\"\n      [options]=\"options\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [responsiveMode]=\"responsiveMode\"\n      [multiSelect]=\"multiSelect\"\n      [defaultSelectedKeys]=\"defaultSelectedKeys\"\n      [selectedKeys]=\"selectedKeys\"\n      [multiSelectDelimiter]=\"multiSelectDelimiter\"\n      [notifyOnReselect]=\"notifyOnReselect\"\n      [keytipProps]=\"keytipProps\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [RenderContainer]=\"renderContainer && onRenderContainer\"\n      [RenderList]=\"renderList && onRenderList\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderOption]=\"renderOption && onRenderOption\"\n      [RenderPlaceholder]=\"renderPlaceholder && onRenderPlaceholder\"\n      [RenderPlaceHolder]=\"renderPlaceHolder && onRenderPlaceHolder\"\n      [RenderTitle]=\"renderTitle && onRenderTitle\"\n      [RenderCaretDown]=\"renderCaretDown && onRenderCaretDown\"\n      [Change]=\"onChangeHandler\"\n      [Dismiss]=\"onDismissHandler\"\n    ></Dropdown>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDropdownComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        dropdownOptionsDirective: [{ type: ContentChild, args: [DropdownOptionsDirective, { static: true },] }],
        componentRef: [{ type: Input }],
        label: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        id: [{ type: Input }],
        className: [{ type: Input }],
        defaultSelectedKey: [{ type: Input }],
        selectedKey: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        calloutProps: [{ type: Input }],
        panelProps: [{ type: Input }],
        errorMessage: [{ type: Input }],
        placeholder: [{ type: Input }],
        openOnKeyboardFocus: [{ type: Input }],
        options: [{ type: Input }],
        dropdownWidth: [{ type: Input }],
        responsiveMode: [{ type: Input }],
        multiSelect: [{ type: Input }],
        defaultSelectedKeys: [{ type: Input }],
        selectedKeys: [{ type: Input }],
        multiSelectDelimiter: [{ type: Input }],
        notifyOnReselect: [{ type: Input }],
        keytipProps: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        renderContainer: [{ type: Input }],
        renderList: [{ type: Input }],
        renderItem: [{ type: Input }],
        renderOption: [{ type: Input }],
        renderPlaceholder: [{ type: Input }],
        renderPlaceHolder: [{ type: Input }],
        renderTitle: [{ type: Input }],
        renderCaretDown: [{ type: Input }],
        onChange: [{ type: Output }],
        onDismiss: [{ type: Output }]
    };
    return FabDropdownComponent;
}(ReactWrapperComponent));
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
        registerElement('Dropdown', (/**
         * @return {?}
         */
        function () { return Dropdown; }));
    }
    FabDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: declarations,
                    exports: declarations,
                    schemas: [NO_ERRORS_SCHEMA],
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

export { DropdownOptionDirective, DropdownOptionsDirective, FabDropdownComponent, FabDropdownModule };
//# sourceMappingURL=angular-react-fabric-lib-components-dropdown.js.map
