import { Directive, Input, ContentChildren, EventEmitter, Output, ContentChild, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { __rest } from 'tslib';
import { CommonModule } from '@angular/common';
import { ComboBox, VirtualizedComboBox } from 'office-ui-fabric-react/lib/ComboBox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating a ComboBoxOption
 * \@paramName optionKey Binds to React 'key' property.
 *                      Name change necessary because key is a reserved attribute in the wrapper component.
 */
class ComboBoxOptionDirective {
}
ComboBoxOptionDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-combo-box-option' },] }
];
ComboBoxOptionDirective.propDecorators = {
    optionKey: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    itemType: [{ type: Input }],
    index: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    data: [{ type: Input }],
    styles: [{ type: Input }],
    useAriaLabelAsText: [{ type: Input }]
};
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
class ComboBoxOptionsDirective {
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
ComboBoxOptionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-combo-box > options' },] }
];
ComboBoxOptionsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [ComboBoxOptionDirective,] }]
};
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
class FabBaseComboBoxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onItemClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onPendingValueChanged = new EventEmitter();
        this.onMenuOpen = new EventEmitter();
        this.onMenuDismissed = new EventEmitter();
        this.onMenuDismiss = new EventEmitter();
        this.onScrollToItem = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onPendingValueChangedHandler = this.onPendingValueChangedHandler.bind(this);
        this.onScrollToItemHandler = this.onScrollToItemHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderLowerContent = this.createRenderPropHandler(this.renderLowerContent);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.comboBoxOptionsDirective) {
            this._initDirective(this.comboBoxOptionsDirective);
        }
        super.ngAfterContentInit();
    }
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    onItemClickHandler(event, option, index) {
        this.onItemClick.emit({
            event: event.nativeEvent,
            option,
            index,
        });
    }
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    onChangeHandler(event, option, index, value) {
        this.onChange.emit({
            event: event.nativeEvent,
            option,
            index,
            value,
        });
    }
    /**
     * @param {?=} option
     * @param {?=} index
     * @param {?=} value
     * @return {?}
     */
    onPendingValueChangedHandler(option, index, value) {
        this.onPendingValueChanged.emit({
            option,
            index,
            value,
        });
    }
    /**
     * @param {?} itemIndex
     * @return {?}
     */
    onScrollToItemHandler(itemIndex) {
        this.onScrollToItem.emit({
            itemIndex,
        });
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
FabBaseComboBoxComponent.propDecorators = {
    componentRef: [{ type: Input }],
    options: [{ type: Input }],
    allowFreeform: [{ type: Input }],
    autoComplete: [{ type: Input }],
    text: [{ type: Input }],
    buttonIconProps: [{ type: Input }],
    autofill: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    getClassNames: [{ type: Input }],
    caretDownButtonStyles: [{ type: Input }],
    comboBoxOptionStyles: [{ type: Input }],
    scrollSelectedToTop: [{ type: Input }],
    dropdownWidth: [{ type: Input }],
    useComboBoxAsMenuWidth: [{ type: Input }],
    multiSelect: [{ type: Input }],
    isButtonAriaHidden: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    keytipProps: [{ type: Input }],
    persistMenu: [{ type: Input }],
    shouldRestoreFocus: [{ type: Input }],
    resolveOptions: [{ type: Input }],
    renderLowerContent: [{ type: Input }],
    onItemClick: [{ type: Output }],
    onChange: [{ type: Output }],
    onPendingValueChanged: [{ type: Output }],
    onMenuOpen: [{ type: Output }],
    onMenuDismissed: [{ type: Output }],
    onMenuDismiss: [{ type: Output }],
    onScrollToItem: [{ type: Output }],
    comboBoxOptionsDirective: [{ type: ContentChild, args: [ComboBoxOptionsDirective, { static: true },] }]
};
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
class FabComboBoxComponent extends FabBaseComboBoxComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabComboBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-combo-box',
                exportAs: 'fabComboBox',
                template: `
    <ComboBox
      #reactNode
      [componentRef]="componentRef"
      [options]="options"
      [allowFreeform]="allowFreeform"
      [autoComplete]="autoComplete"
      [text]="text"
      [buttonIconProps]="buttonIconProps"
      [autofill]="autofill"
      [theme]="theme"
      [styles]="styles"
      [getClassNames]="getClassNames"
      [caretDownButtonStyles]="caretDownButtonStyles"
      [comboBoxOptionStyles]="comboBoxOptionStyles"
      [scrollSelectedToTop]="scrollSelectedToTop"
      [dropdownWidth]="dropdownWidth"
      [useComboBoxAsMenuWidth]="useComboBoxAsMenuWidth"
      [multiSelect]="multiSelect"
      [isButtonAriaHidden]="isButtonAriaHidden"
      [ariaDescribedBy]="ariaDescribedBy"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [shouldRestoreFocus]="shouldRestoreFocus"
      [RenderLowerContent]="renderLowerContent && onRenderLowerContent"
      [ItemClick]="onItemClickHandler"
      [Change]="onChangeHandler"
      [PendingValueChanged]="onPendingValueChangedHandler"
      [ResolveOptions]="resolveOptions"
      [ScrollToItem]="onScrollToItemHandler"
      (onMenuOpen)="onMenuOpen.emit()"
      (onMenuDismissed)="onMenuDismissed.emit()"
      (onMenuDismiss)="onMenuDismiss.emit()"
    >
    </ComboBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabComboBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabComboBoxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
class FabVirtualizedComboBoxComponent extends FabBaseComboBoxComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabVirtualizedComboBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-virtualized-combo-box',
                exportAs: 'fabVirtualizedComboBox',
                template: `
    <VirtualizedComboBox
      #reactNode
      [componentRef]="componentRef"
      [options]="options"
      [allowFreeform]="allowFreeform"
      [autoComplete]="autoComplete"
      [text]="text"
      [buttonIconProps]="buttonIconProps"
      [autofill]="autofill"
      [theme]="theme"
      [styles]="styles"
      [getClassNames]="getClassNames"
      [caretDownButtonStyles]="caretDownButtonStyles"
      [comboBoxOptionStyles]="comboBoxOptionStyles"
      [scrollSelectedToTop]="scrollSelectedToTop"
      [dropdownWidth]="dropdownWidth"
      [useComboBoxAsMenuWidth]="useComboBoxAsMenuWidth"
      [multiSelect]="multiSelect"
      [isButtonAriaHidden]="isButtonAriaHidden"
      [ariaDescribedBy]="ariaDescribedBy"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [shouldRestoreFocus]="shouldRestoreFocus"
      [RenderLowerContent]="renderLowerContent && onRenderLowerContent"
      [ItemClick]="onItemClickHandler"
      [Change]="onChangeHandler"
      [PendingValueChanged]="onPendingValueChangedHandler"
      [ResolveOptions]="resolveOptions"
      [ScrollToItem]="onScrollToItemHandler"
      (onMenuOpen)="onMenuOpen.emit()"
      (onMenuDismissed)="onMenuDismissed.emit()"
      (onMenuDismiss)="onMenuDismiss.emit()"
    >
    </VirtualizedComboBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabVirtualizedComboBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabVirtualizedComboBoxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
const declarations = [
    FabComboBoxComponent,
    FabVirtualizedComboBoxComponent,
    ComboBoxOptionDirective,
    ComboBoxOptionsDirective
];
class FabComboBoxModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ComboBox', (/**
         * @return {?}
         */
        () => ComboBox));
        registerElement('VirtualizedComboBox', (/**
         * @return {?}
         */
        () => VirtualizedComboBox));
    }
}
FabComboBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: declarations,
                exports: declarations,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabComboBoxModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComboBoxOptionDirective, ComboBoxOptionsDirective, FabComboBoxComponent, FabComboBoxModule, FabBaseComboBoxComponent as ɵa, FabVirtualizedComboBoxComponent as ɵb };
//# sourceMappingURL=angular-react-fabric-lib-components-combo-box.js.map
