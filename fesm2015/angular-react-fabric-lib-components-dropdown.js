import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Directive, Input, ContentChildren, EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, ContentChild, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { __rest } from 'tslib';
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
class DropdownOptionDirective {
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
class DropdownOptionsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.map((/**
         * @param {?} __0
         * @return {?}
         */
        (_a) => {
            var { optionKey } = _a, otherDirectiveProps = __rest(_a, ["optionKey"]);
            return (Object.assign({ key: optionKey }, otherDirectiveProps));
        }));
    }
}
DropdownOptionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-dropdown > options' },] }
];
DropdownOptionsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [DropdownOptionDirective,] }]
};
if (false) {
    /** @type {?} */
    DropdownOptionsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDropdownComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.onChange = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderContainer = this.createRenderPropHandler(this.renderContainer);
        this.onRenderList = this.createRenderPropHandler(this.renderList);
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        this.onRenderOption = this.createRenderPropHandler(this.renderOption);
        this.onRenderPlaceholder = this.createRenderPropHandler(this.renderPlaceholder);
        this.onRenderPlaceHolder = this.createRenderPropHandler(this.renderPlaceHolder);
        this.onRenderTitle = this.createRenderPropHandler(this.renderTitle);
        this.onRenderCaretDown = this.createRenderPropHandler(this.renderCaretDown);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.dropdownOptionsDirective) {
            this._initDirective(this.dropdownOptionsDirective);
        }
        super.ngAfterContentInit();
    }
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    onChangeHandler(event, option, index) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            option,
            index,
        });
    }
    /**
     * @return {?}
     */
    onDismissHandler() {
        this.onDismiss.emit();
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _initDirective(directive) {
        this.options = directive.items;
        this.markForCheck();
    }
}
FabDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown',
                exportAs: 'fabDropdown',
                template: `
    <Dropdown
      #reactNode
      [componentRef]="componentRef"
      [label]="label"
      [ariaLabel]="ariaLabel"
      [id]="id"
      [className]="className"
      [defaultSelectedKey]="defaultSelectedKey"
      [selectedKey]="selectedKey"
      [disabled]="disabled"
      [required]="required"
      [calloutProps]="calloutProps"
      [panelProps]="panelProps"
      [errorMessage]="errorMessage"
      [placeholder]="placeholder"
      [openOnKeyboardFocus]="openOnKeyboardFocus"
      [options]="options"
      [dropdownWidth]="dropdownWidth"
      [responsiveMode]="responsiveMode"
      [multiSelect]="multiSelect"
      [defaultSelectedKeys]="defaultSelectedKeys"
      [selectedKeys]="selectedKeys"
      [multiSelectDelimiter]="multiSelectDelimiter"
      [notifyOnReselect]="notifyOnReselect"
      [keytipProps]="keytipProps"
      [theme]="theme"
      [styles]="styles"
      [RenderContainer]="renderContainer && onRenderContainer"
      [RenderList]="renderList && onRenderList"
      [RenderItem]="renderItem && onRenderItem"
      [RenderOption]="renderOption && onRenderOption"
      [RenderPlaceholder]="renderPlaceholder && onRenderPlaceholder"
      [RenderPlaceHolder]="renderPlaceHolder && onRenderPlaceHolder"
      [RenderTitle]="renderTitle && onRenderTitle"
      [RenderCaretDown]="renderCaretDown && onRenderCaretDown"
      [Change]="onChangeHandler"
      [Dismiss]="onDismissHandler"
    ></Dropdown>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
const declarations = [
    FabDropdownComponent,
    DropdownOptionDirective,
    DropdownOptionsDirective
];
class FabDropdownModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dropdown', (/**
         * @return {?}
         */
        () => Dropdown));
    }
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
FabDropdownModule.ctorParameters = () => [];

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
