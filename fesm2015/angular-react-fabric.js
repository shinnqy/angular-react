import { ReactWrapperComponent, registerElement, passProp } from '@angular-react/core';
import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, ViewChild, Input, NgModule, NO_ERRORS_SCHEMA, EventEmitter, Output, ContentChildren, NgZone, Directive, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { ChangeableItemsHelper, mergeItemChanges, ChangeableItemsDirective, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
import { omit, getDataAttributes, noop } from '@angular-react/fabric/lib/utils';
import { ContextualMenuItemDirective as ContextualMenuItemDirective$1, FabContextualMenuModule as FabContextualMenuModule$1 } from '@angular-react/fabric/lib/components/contextual-menu';
import { DefaultButton, ActionButton, CommandBarButton, CompoundButton, IconButton, MessageBarButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import * as CalendarCss from 'office-ui-fabric-react/lib-amd/components/Calendar/Calendar.scss';
import { Calendar } from 'office-ui-fabric-react/lib/Calendar';
import { Callout, FocusTrapCallout } from 'office-ui-fabric-react/lib/Callout';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { __rest, __decorate, __metadata } from 'tslib';
import { ComboBox, VirtualizedComboBox } from 'office-ui-fabric-react/lib/ComboBox';
import * as OverflowSetCss from 'office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { GroupItemDirective as GroupItemDirective$1, FabGroupModule as FabGroupModule$1 } from '@angular-react/fabric/lib/components/group';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { Dialog, DialogContent, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { GroupedList } from 'office-ui-fabric-react/lib/GroupedList';
import { ExpandingCard, HoverCard, PlainCard } from 'office-ui-fabric-react/lib/HoverCard';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { Persona, PersonaCoin } from 'office-ui-fabric-react/lib/Persona';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Shimmer, ShimmerElementsGroup } from 'office-ui-fabric-react/lib/Shimmer';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import * as BasePickerCss from 'office-ui-fabric-react/lib-amd/components/pickers/BasePicker.scss';
import { BasePicker, NormalPeoplePickerBase } from 'office-ui-fabric-react/lib/Pickers';
import { TagPicker } from 'office-ui-fabric-react';
import * as PeoplePickerItemCss from 'office-ui-fabric-react/lib-amd/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabBreadcrumbComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
    }
}
FabBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-breadcrumb',
                exportAs: 'fabBreadcrumb',
                template: `
    <Breadcrumb
      #reactNode
      [componentRef]="componentRef"
      [items]="items"
      [className]="className"
      [dividerAs]="dividerAs"
      [maxDisplayedItems]="maxDisplayedItems"
      [ariaLabel]="ariaLabel"
      [overflowAriaLabel]="overflowAriaLabel"
      [overflowIndex]="overflowIndex"
      [styles]="styles"
      [theme]="theme"
      [focusZoneProps]="focusZoneProps"
      [tooltipHostProps]="tooltipHostProps"
      [RenderItem]="renderItem && onRenderItem"
      [ReduceData]="onReduceData"
    >
    </Breadcrumb>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabBreadcrumbComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabBreadcrumbComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    items: [{ type: Input }],
    className: [{ type: Input }],
    dividerAs: [{ type: Input }],
    maxDisplayedItems: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    overflowAriaLabel: [{ type: Input }],
    overflowIndex: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    focusZoneProps: [{ type: Input }],
    tooltipHostProps: [{ type: Input }],
    renderItem: [{ type: Input }],
    onReduceData: [{ type: Input, args: ['reduceData',] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabBreadcrumbComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.componentRef;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.items;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.className;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.dividerAs;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.maxDisplayedItems;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.ariaLabel;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.overflowAriaLabel;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.overflowIndex;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.styles;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.theme;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.focusZoneProps;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.tooltipHostProps;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.renderItem;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.onReduceData;
    /** @type {?} */
    FabBreadcrumbComponent.prototype.onRenderItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [FabBreadcrumbComponent];
class FabBreadcrumbModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Breadcrumb', (/**
         * @return {?}
         */
        () => Breadcrumb));
    }
}
FabBreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabBreadcrumbModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FabBaseButtonComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onClick = new EventEmitter();
        this.onMenuClick = new EventEmitter();
        this.onAfterMenuDismiss = new EventEmitter();
        this._subscriptions = [];
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onMenuClickHandler = this.onMenuClickHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderIcon = this.createRenderPropHandler(this.renderIcon);
        this.onRenderText = this.createRenderPropHandler(this.renderText);
        this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
        this.onRenderAriaDescription = this.createRenderPropHandler(this.renderAriaDescription);
        this.onRenderChildren = this.createRenderPropHandler(this.renderChildren);
        this.onRenderMenuIcon = this.createRenderPropHandler(this.renderMenuIcon);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.menuItemsDirectives && this.menuItemsDirectives.length > 0) {
            /** @type {?} */
            const setItems = (/**
             * @param {?} directiveItems
             * @return {?}
             */
            (directiveItems) => {
                /** @type {?} */
                const items = directiveItems.map((/**
                 * @param {?} directive
                 * @return {?}
                 */
                directive => this._transformContextualMenuItemOptionsToProps(this._directiveToContextualMenuItem(directive))));
                if (!this.menuProps) {
                    this.menuProps = { items: items };
                }
                else {
                    this.menuProps.items = items;
                }
                this.markForCheck();
            });
            // @ts-ignore
            this._changeableItemsHelper = new ChangeableItemsHelper(this.menuItemsDirectives);
            this._subscriptions.push(this._changeableItemsHelper.onItemsChanged.subscribe((/**
             * @param {?} newItems
             * @return {?}
             */
            (newItems) => {
                setItems(newItems.toArray());
            })), this._changeableItemsHelper.onChildItemChanged.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key, changes }) => {
                /** @type {?} */
                const newItems = this.menuItemsDirectives.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.key === key ? mergeItemChanges(item, changes) : item));
                setItems(newItems);
                this.markForCheck();
            })));
            setItems(this.menuItemsDirectives.toArray());
        }
        super.ngAfterContentInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._changeableItemsHelper) {
            this._changeableItemsHelper.destroy();
        }
        if (this._subscriptions) {
            this._subscriptions.forEach((/**
             * @param {?} subscription
             * @return {?}
             */
            subscription => subscription.unsubscribe()));
        }
    }
    /**
     * @param {?=} ev
     * @param {?=} button
     * @return {?}
     */
    onMenuClickHandler(ev, button) {
        this.onMenuClick.emit({
            ev: ev && ev.nativeEvent,
            button,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onClickHandler(ev) {
        this.onClick.emit(ev.nativeEvent);
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _directiveToContextualMenuItem(directive) {
        return Object.assign({}, omit(directive, 'menuItemsDirectives', 'renderDirective', 'renderIconDirective', 'click', 'onItemChanged', 'onItemsChanged', 'onChildItemChanged', 'ngOnInit', 'ngOnChanges', 'ngOnDestroy', 'ngAfterContentInit'), getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
             * @param {?} ev
             * @param {?} item
             * @return {?}
             */
            (ev, item) => {
                directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
            }) });
    }
    /**
     * @private
     * @param {?} itemOptions
     * @return {?}
     */
    _transformContextualMenuItemOptionsToProps(itemOptions) {
        /** @type {?} */
        const sharedProperties = omit(itemOptions, 'renderIcon', 'render');
        // Legacy render mode is used for the icon because otherwise the icon is to the right of the text (instead of the usual left)
        /** @type {?} */
        const iconRenderer = this.createInputJsxRenderer(itemOptions.renderIcon, { legacyRenderMode: true });
        /** @type {?} */
        const renderer = this.createInputJsxRenderer(itemOptions.render);
        // @ts-ignore
        return (/** @type {?} */ (Object.assign({}, sharedProperties, iconRenderer && {
            onRenderIcon: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => iconRenderer({ contextualMenuItem: item })),
        }, renderer &&
            ((/** @type {?} */ ({
                onRender: (/**
                 * @param {?} item
                 * @param {?} dismissMenu
                 * @return {?}
                 */
                (item, dismissMenu) => renderer({ item, dismissMenu })),
            }))))));
    }
}
FabBaseButtonComponent.propDecorators = {
    componentRef: [{ type: Input }],
    href: [{ type: Input }],
    primary: [{ type: Input }],
    uniqueId: [{ type: Input }],
    disabled: [{ type: Input }],
    allowDisabledFocus: [{ type: Input }],
    primaryDisabled: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    checked: [{ type: Input }],
    className: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaDescription: [{ type: Input }],
    ariaHidden: [{ type: Input }],
    ariaSelected: [{ type: Input }],
    role: [{ type: Input }],
    tabIndex: [{ type: Input }],
    text: [{ type: Input }],
    iconProps: [{ type: Input }],
    menuProps: [{ type: Input }],
    split: [{ type: Input }],
    menuIconProps: [{ type: Input }],
    splitButtonAriaLabel: [{ type: Input }],
    menuAs: [{ type: Input }],
    secondaryText: [{ type: Input }],
    toggle: [{ type: Input }],
    data: [{ type: Input }],
    getClassNames: [{ type: Input }],
    getSplitButtonClassNames: [{ type: Input }],
    menuTriggerKeyCode: [{ type: Input }],
    keytipProps: [{ type: Input }],
    persistMenu: [{ type: Input }],
    renderIcon: [{ type: Input }],
    renderText: [{ type: Input }],
    renderDescription: [{ type: Input }],
    renderAriaDescription: [{ type: Input }],
    renderChildren: [{ type: Input }],
    renderMenuIcon: [{ type: Input }],
    onClick: [{ type: Output }],
    onMenuClick: [{ type: Output }],
    onAfterMenuDismiss: [{ type: Output }],
    menuItemsDirectives: [{ type: ContentChildren, args: [ContextualMenuItemDirective$1,] }]
};
if (false) {
    /** @type {?} */
    FabBaseButtonComponent.prototype.componentRef;
    /** @type {?} */
    FabBaseButtonComponent.prototype.href;
    /** @type {?} */
    FabBaseButtonComponent.prototype.primary;
    /** @type {?} */
    FabBaseButtonComponent.prototype.uniqueId;
    /** @type {?} */
    FabBaseButtonComponent.prototype.disabled;
    /** @type {?} */
    FabBaseButtonComponent.prototype.allowDisabledFocus;
    /** @type {?} */
    FabBaseButtonComponent.prototype.primaryDisabled;
    /** @type {?} */
    FabBaseButtonComponent.prototype.styles;
    /** @type {?} */
    FabBaseButtonComponent.prototype.theme;
    /** @type {?} */
    FabBaseButtonComponent.prototype.checked;
    /** @type {?} */
    FabBaseButtonComponent.prototype.className;
    /** @type {?} */
    FabBaseButtonComponent.prototype.ariaLabel;
    /** @type {?} */
    FabBaseButtonComponent.prototype.ariaDescription;
    /** @type {?} */
    FabBaseButtonComponent.prototype.ariaHidden;
    /** @type {?} */
    FabBaseButtonComponent.prototype.ariaSelected;
    /** @type {?} */
    FabBaseButtonComponent.prototype.role;
    /** @type {?} */
    FabBaseButtonComponent.prototype.tabIndex;
    /** @type {?} */
    FabBaseButtonComponent.prototype.text;
    /** @type {?} */
    FabBaseButtonComponent.prototype.iconProps;
    /** @type {?} */
    FabBaseButtonComponent.prototype.menuProps;
    /** @type {?} */
    FabBaseButtonComponent.prototype.split;
    /** @type {?} */
    FabBaseButtonComponent.prototype.menuIconProps;
    /** @type {?} */
    FabBaseButtonComponent.prototype.splitButtonAriaLabel;
    /** @type {?} */
    FabBaseButtonComponent.prototype.menuAs;
    /** @type {?} */
    FabBaseButtonComponent.prototype.secondaryText;
    /** @type {?} */
    FabBaseButtonComponent.prototype.toggle;
    /** @type {?} */
    FabBaseButtonComponent.prototype.data;
    /** @type {?} */
    FabBaseButtonComponent.prototype.getClassNames;
    /** @type {?} */
    FabBaseButtonComponent.prototype.getSplitButtonClassNames;
    /** @type {?} */
    FabBaseButtonComponent.prototype.menuTriggerKeyCode;
    /** @type {?} */
    FabBaseButtonComponent.prototype.keytipProps;
    /** @type {?} */
    FabBaseButtonComponent.prototype.persistMenu;
    /** @type {?} */
    FabBaseButtonComponent.prototype.renderIcon;
    /** @type {?} */
    FabBaseButtonComponent.prototype.renderText;
    /** @type {?} */
    FabBaseButtonComponent.prototype.renderDescription;
    /** @type {?} */
    FabBaseButtonComponent.prototype.renderAriaDescription;
    /** @type {?} */
    FabBaseButtonComponent.prototype.renderChildren;
    /** @type {?} */
    FabBaseButtonComponent.prototype.renderMenuIcon;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onClick;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onMenuClick;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onAfterMenuDismiss;
    /** @type {?} */
    FabBaseButtonComponent.prototype.menuItemsDirectives;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onRenderIcon;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onRenderText;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onRenderDescription;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onRenderAriaDescription;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onRenderChildren;
    /** @type {?} */
    FabBaseButtonComponent.prototype.onRenderMenuIcon;
    /**
     * @type {?}
     * @private
     */
    FabBaseButtonComponent.prototype._changeableItemsHelper;
    /**
     * @type {?}
     * @private
     */
    FabBaseButtonComponent.prototype._subscriptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabActionButtonComponent extends FabBaseButtonComponent {
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
FabActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-action-button',
                exportAs: 'fabActionButton',
                template: `
    <ActionButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </ActionButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabActionButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabActionButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabActionButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCommandBarButtonComponent extends FabBaseButtonComponent {
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
FabCommandBarButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-command-bar-button',
                exportAs: 'fabCommandBarButton',
                template: `
    <CommandBarButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </CommandBarButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCommandBarButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCommandBarButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCommandBarButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCompoundButtonComponent extends FabBaseButtonComponent {
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
FabCompoundButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-compound-button',
                exportAs: 'fabCompoundButton',
                template: `
    <CompoundButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </CompoundButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCompoundButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCompoundButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCompoundButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDefaultButtonComponent extends FabBaseButtonComponent {
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
FabDefaultButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-default-button',
                exportAs: 'fabDefaultButton',
                template: `
    <DefaultButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </DefaultButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDefaultButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabDefaultButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDefaultButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabIconButtonComponent extends FabBaseButtonComponent {
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
FabIconButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-icon-button',
                exportAs: 'fabIconButton',
                template: `
    <IconButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </IconButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabIconButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabIconButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabIconButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabMessageBarButtonComponent extends FabBaseButtonComponent {
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
FabMessageBarButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-messagebar-button',
                exportAs: 'fabMessageBarButton',
                template: `
    <MessageBarButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MessageBarButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMessageBarButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMessageBarButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMessageBarButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPrimaryButtonComponent extends FabBaseButtonComponent {
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
FabPrimaryButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-primary-button',
                exportAs: 'fabPrimaryButton',
                template: `
    <PrimaryButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PrimaryButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPrimaryButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPrimaryButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPrimaryButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSplitButtonComponent extends FabBaseButtonComponent {
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
FabSplitButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-split-button',
                exportAs: 'fabSplitButton',
                template: `
    <SplitButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </SplitButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSplitButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabSplitButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSplitButtonComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$1 = [
    FabDefaultButtonComponent,
    FabActionButtonComponent,
    FabCommandBarButtonComponent,
    FabCompoundButtonComponent,
    FabIconButtonComponent,
    FabMessageBarButtonComponent,
    FabPrimaryButtonComponent,
    FabSplitButtonComponent,
];
class FabButtonModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DefaultButton', (/**
         * @return {?}
         */
        () => DefaultButton));
        registerElement('ActionButton', (/**
         * @return {?}
         */
        () => ActionButton));
        registerElement('CommandBarButton', (/**
         * @return {?}
         */
        () => CommandBarButton));
        registerElement('CompoundButton', (/**
         * @return {?}
         */
        () => CompoundButton));
        registerElement('IconButton', (/**
         * @return {?}
         */
        () => IconButton));
        registerElement('MessageBarButton', (/**
         * @return {?}
         */
        () => MessageBarButton));
        registerElement('PrimaryButton', (/**
         * @return {?}
         */
        () => PrimaryButton));
    }
}
FabButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$1,
                exports: components$1,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabButtonModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for calendar strings
 */
class CalendarStringsDirective {
    /**
     * @return {?}
     */
    get strings() {
        return {
            months: this.months,
            shortMonths: this.shortMonths,
            days: this.days,
            shortDays: this.shortDays,
            goToToday: this.goToToday,
            prevMonthAriaLabel: this.prevMonthAriaLabel,
            nextMonthAriaLabel: this.nextMonthAriaLabel,
            prevYearAriaLabel: this.prevYearAriaLabel,
            nextYearAriaLabel: this.nextYearAriaLabel,
            prevYearRangeAriaLabel: this.prevYearRangeAriaLabel,
            nextYearRangeAriaLabel: this.nextYearRangeAriaLabel,
            closeButtonAriaLabel: this.closeButtonAriaLabel,
            weekNumberFormatString: this.weekNumberFormatString
        };
    }
}
CalendarStringsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-calendar > fab-calendar-strings' },] }
];
CalendarStringsDirective.propDecorators = {
    months: [{ type: Input }],
    shortMonths: [{ type: Input }],
    days: [{ type: Input }],
    shortDays: [{ type: Input }],
    goToToday: [{ type: Input }],
    prevMonthAriaLabel: [{ type: Input }],
    nextMonthAriaLabel: [{ type: Input }],
    prevYearAriaLabel: [{ type: Input }],
    nextYearAriaLabel: [{ type: Input }],
    prevYearRangeAriaLabel: [{ type: Input }],
    nextYearRangeAriaLabel: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    weekNumberFormatString: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CalendarStringsDirective.prototype.months;
    /** @type {?} */
    CalendarStringsDirective.prototype.shortMonths;
    /** @type {?} */
    CalendarStringsDirective.prototype.days;
    /** @type {?} */
    CalendarStringsDirective.prototype.shortDays;
    /** @type {?} */
    CalendarStringsDirective.prototype.goToToday;
    /** @type {?} */
    CalendarStringsDirective.prototype.prevMonthAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.nextMonthAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.prevYearAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.nextYearAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.prevYearRangeAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.nextYearRangeAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.closeButtonAriaLabel;
    /** @type {?} */
    CalendarStringsDirective.prototype.weekNumberFormatString;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCalendarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onSelectDate = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onSelectDateHandler = this.onSelectDateHandler.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.calendarStringsDirective) {
            this._initDirective(this.calendarStringsDirective);
            super.ngAfterContentInit();
        }
    }
    /**
     * @param {?} date
     * @param {?=} selectedDateRangeArray
     * @return {?}
     */
    onSelectDateHandler(date, selectedDateRangeArray) {
        this.onSelectDate.emit({
            date,
            selectedDateRangeArray,
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
     * @param {?} calendarStringsDirective
     * @return {?}
     */
    _initDirective(calendarStringsDirective) {
        this.strings = calendarStringsDirective.strings;
    }
}
FabCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-calendar',
                exportAs: 'fabCalendar',
                template: `
    <Calendar
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [isMonthPickerVisible]="isMonthPickerVisible"
      [isDayPickerVisible]="isDayPickerVisible"
      [showMonthPickerAsOverlay]="showMonthPickerAsOverlay"
      [today]="today"
      [value]="value"
      [firstDayOfWeek]="firstDayOfWeek"
      [dateRangeType]="dateRangeType"
      [autoNavigateOnSelection]="autoNavigateOnSelection"
      [showGoToToday]="showGoToToday"
      [strings]="strings"
      [highlightCurrentMonth]="highlightCurrentMonth"
      [highlightSelectedMonth]="highlightSelectedMonth"
      [navigationIcons]="navigationIcons"
      [showWeekNumbers]="showWeekNumbers"
      [firstWeekOfYear]="firstWeekOfYear"
      [dateTimeFormatter]="dateTimeFormatter"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [maxDate]="restrictedDates"
      [restrictedDates]="restrictedDates"
      [showSixWeeksByDefault]="showSixWeeksByDefault"
      [workWeekDays]="workWeekDays"
      [selectDateOnClick]="selectDateOnClick"
      [showCloseButton]="showCloseButton"
      [allFocusable]="allFocusable"
      [yearPickerHidden]="yearPickerHidden"
      [SelectDate]="onSelectDateHandler"
      [Dismiss]="onDismissHandler"
    >
    </Calendar>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabCalendarComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    isMonthPickerVisible: [{ type: Input }],
    isDayPickerVisible: [{ type: Input }],
    showMonthPickerAsOverlay: [{ type: Input }],
    today: [{ type: Input }],
    value: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    dateRangeType: [{ type: Input }],
    autoNavigateOnSelection: [{ type: Input }],
    showGoToToday: [{ type: Input }],
    strings: [{ type: Input }],
    highlightCurrentMonth: [{ type: Input }],
    highlightSelectedMonth: [{ type: Input }],
    navigationIcons: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    firstWeekOfYear: [{ type: Input }],
    dateTimeFormatter: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    restrictedDates: [{ type: Input }],
    showSixWeeksByDefault: [{ type: Input }],
    workWeekDays: [{ type: Input }],
    selectDateOnClick: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    allFocusable: [{ type: Input }],
    yearPickerHidden: [{ type: Input }],
    onSelectDate: [{ type: Output }],
    onDismiss: [{ type: Output }],
    calendarStringsDirective: [{ type: ContentChild, args: [CalendarStringsDirective, { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCalendarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCalendarComponent.prototype.componentRef;
    /** @type {?} */
    FabCalendarComponent.prototype.className;
    /** @type {?} */
    FabCalendarComponent.prototype.isMonthPickerVisible;
    /** @type {?} */
    FabCalendarComponent.prototype.isDayPickerVisible;
    /** @type {?} */
    FabCalendarComponent.prototype.showMonthPickerAsOverlay;
    /** @type {?} */
    FabCalendarComponent.prototype.today;
    /** @type {?} */
    FabCalendarComponent.prototype.value;
    /** @type {?} */
    FabCalendarComponent.prototype.firstDayOfWeek;
    /** @type {?} */
    FabCalendarComponent.prototype.dateRangeType;
    /** @type {?} */
    FabCalendarComponent.prototype.autoNavigateOnSelection;
    /** @type {?} */
    FabCalendarComponent.prototype.showGoToToday;
    /** @type {?} */
    FabCalendarComponent.prototype.strings;
    /** @type {?} */
    FabCalendarComponent.prototype.highlightCurrentMonth;
    /** @type {?} */
    FabCalendarComponent.prototype.highlightSelectedMonth;
    /** @type {?} */
    FabCalendarComponent.prototype.navigationIcons;
    /** @type {?} */
    FabCalendarComponent.prototype.showWeekNumbers;
    /** @type {?} */
    FabCalendarComponent.prototype.firstWeekOfYear;
    /** @type {?} */
    FabCalendarComponent.prototype.dateTimeFormatter;
    /** @type {?} */
    FabCalendarComponent.prototype.minDate;
    /** @type {?} */
    FabCalendarComponent.prototype.maxDate;
    /** @type {?} */
    FabCalendarComponent.prototype.restrictedDates;
    /** @type {?} */
    FabCalendarComponent.prototype.showSixWeeksByDefault;
    /** @type {?} */
    FabCalendarComponent.prototype.workWeekDays;
    /** @type {?} */
    FabCalendarComponent.prototype.selectDateOnClick;
    /** @type {?} */
    FabCalendarComponent.prototype.showCloseButton;
    /** @type {?} */
    FabCalendarComponent.prototype.allFocusable;
    /** @type {?} */
    FabCalendarComponent.prototype.yearPickerHidden;
    /** @type {?} */
    FabCalendarComponent.prototype.onSelectDate;
    /** @type {?} */
    FabCalendarComponent.prototype.onDismiss;
    /** @type {?} */
    FabCalendarComponent.prototype.calendarStringsDirective;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force CalendarCss to load and not be tree-shaken away.
noop(CalendarCss);
/** @type {?} */
const declarations = [FabCalendarComponent, CalendarStringsDirective];
class FabCalendarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Calendar', (/**
         * @return {?}
         */
        () => Calendar));
    }
}
FabCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: declarations,
                exports: declarations,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCalendarModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCalloutComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLayerMounted = new EventEmitter();
        this.onPositioned = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onScroll = new EventEmitter();
    }
}
FabCalloutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-callout',
                exportAs: 'fabCallout',
                template: `
    <Callout
      #reactNode
      [target]="target"
      [directionalHint]="directionalHint"
      [directionalHintForRTL]="directionalHintForRTL"
      [gapSpace]="gapSpace"
      [beakWidth]="beakWidth"
      [calloutWidth]="calloutWidth"
      [backgroundColor]="backgroundColor"
      [bounds]="bounds"
      [minPagePadding]="minPagePadding"
      [isBeakVisible]="isBeakVisible"
      [preventDismissOnScroll]="preventDismissOnScroll"
      [preventDismissOnResize]="preventDismissOnResize"
      [preventDismissOnLostFocus]="preventDismissOnLostFocus"
      [coverTarget]="coverTarget"
      [alignTargetEdge]="alignTargetEdge"
      [role]="role"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [ariaDescribedBy]="ariaDescribedBy"
      [className]="className"
      [layerProps]="layerProps"
      [doNotLayer]="doNotLayer"
      [directionalHintFixed]="directionalHintFixed"
      [finalHeight]="finalHeight"
      [hideOverflow]="hideOverflow"
      [setInitialFocus]="setInitialFocus"
      [calloutMaxHeight]="calloutMaxHeight"
      [theme]="theme"
      [styles]="styles"
      [hidden]="hidden"
      [shouldRestoreFocus]="shouldRestoreFocus"
      (onLayerMounted)="onLayerMounted.emit()"
      (onPositioned)="onPositioned.emit($event)"
      (onDismiss)="onDismiss.emit($event)"
      (onScroll)="onScroll.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Callout>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCalloutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabCalloutComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    target: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintForRTL: [{ type: Input }],
    gapSpace: [{ type: Input }],
    beakWidth: [{ type: Input }],
    calloutWidth: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    bounds: [{ type: Input }],
    minPagePadding: [{ type: Input }],
    isBeakVisible: [{ type: Input }],
    preventDismissOnScroll: [{ type: Input }],
    preventDismissOnResize: [{ type: Input }],
    preventDismissOnLostFocus: [{ type: Input }],
    coverTarget: [{ type: Input }],
    alignTargetEdge: [{ type: Input }],
    role: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    className: [{ type: Input }],
    layerProps: [{ type: Input }],
    doNotLayer: [{ type: Input }],
    directionalHintFixed: [{ type: Input }],
    finalHeight: [{ type: Input }],
    hideOverflow: [{ type: Input }],
    setInitialFocus: [{ type: Input }],
    calloutMaxHeight: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    hidden: [{ type: Input }],
    shouldRestoreFocus: [{ type: Input }],
    onLayerMounted: [{ type: Output }],
    onPositioned: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onScroll: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCalloutComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCalloutComponent.prototype.target;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHint;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabCalloutComponent.prototype.gapSpace;
    /** @type {?} */
    FabCalloutComponent.prototype.beakWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutWidth;
    /** @type {?} */
    FabCalloutComponent.prototype.backgroundColor;
    /** @type {?} */
    FabCalloutComponent.prototype.bounds;
    /** @type {?} */
    FabCalloutComponent.prototype.minPagePadding;
    /** @type {?} */
    FabCalloutComponent.prototype.isBeakVisible;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnScroll;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnResize;
    /** @type {?} */
    FabCalloutComponent.prototype.preventDismissOnLostFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.coverTarget;
    /** @type {?} */
    FabCalloutComponent.prototype.alignTargetEdge;
    /** @type {?} */
    FabCalloutComponent.prototype.role;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCalloutComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCalloutComponent.prototype.className;
    /** @type {?} */
    FabCalloutComponent.prototype.layerProps;
    /** @type {?} */
    FabCalloutComponent.prototype.doNotLayer;
    /** @type {?} */
    FabCalloutComponent.prototype.directionalHintFixed;
    /** @type {?} */
    FabCalloutComponent.prototype.finalHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.hideOverflow;
    /** @type {?} */
    FabCalloutComponent.prototype.setInitialFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.calloutMaxHeight;
    /** @type {?} */
    FabCalloutComponent.prototype.theme;
    /** @type {?} */
    FabCalloutComponent.prototype.styles;
    /** @type {?} */
    FabCalloutComponent.prototype.hidden;
    /** @type {?} */
    FabCalloutComponent.prototype.shouldRestoreFocus;
    /** @type {?} */
    FabCalloutComponent.prototype.onLayerMounted;
    /** @type {?} */
    FabCalloutComponent.prototype.onPositioned;
    /** @type {?} */
    FabCalloutComponent.prototype.onDismiss;
    /** @type {?} */
    FabCalloutComponent.prototype.onScroll;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$2 = [FabCalloutComponent];
class FabCalloutModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Callout', (/**
         * @return {?}
         */
        () => Callout));
        registerElement('FocusTrapCallout', (/**
         * @return {?}
         */
        () => FocusTrapCallout));
    }
}
FabCalloutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$2,
                exports: components$2,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCalloutModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCheckboxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onChange = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        this.checkedChange = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
    }
    /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    onChangeHandler(ev, checked) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            checked,
        });
        this.checkedChange.emit(checked);
    }
}
FabCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-checkbox',
                exportAs: 'fabCheckbox',
                template: `
    <Checkbox
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [checked]="checked"
      [defaultChecked]="defaultChecked"
      [label]="label"
      [disabled]="disabled"
      [inputProps]="inputProps"
      [boxSide]="boxSide"
      [theme]="theme"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [ariaDescribedBy]="ariaDescribedBy"
      [ariaPositionInSet]="ariaPositionInSet"
      [ariaSetSize]="ariaSetSize"
      [checkmarkIconProps]="checkmarkIconProps"
      [keytipProps]="keytipProps"
      [styles]="styles"
      [RenderLabel]="renderLabel && onRenderLabel"
      [Change]="onChangeHandler"
    >
    </Checkbox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCheckboxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    checked: [{ type: Input }],
    defaultChecked: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    inputProps: [{ type: Input }],
    boxSide: [{ type: Input }],
    theme: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    ariaPositionInSet: [{ type: Input }],
    ariaSetSize: [{ type: Input }],
    checkmarkIconProps: [{ type: Input }],
    keytipProps: [{ type: Input }],
    styles: [{ type: Input }],
    renderLabel: [{ type: Input }],
    onChange: [{ type: Output }],
    checkedChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCheckboxComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCheckboxComponent.prototype.componentRef;
    /** @type {?} */
    FabCheckboxComponent.prototype.className;
    /** @type {?} */
    FabCheckboxComponent.prototype.checked;
    /** @type {?} */
    FabCheckboxComponent.prototype.defaultChecked;
    /** @type {?} */
    FabCheckboxComponent.prototype.label;
    /** @type {?} */
    FabCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabCheckboxComponent.prototype.inputProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.boxSide;
    /** @type {?} */
    FabCheckboxComponent.prototype.theme;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaPositionInSet;
    /** @type {?} */
    FabCheckboxComponent.prototype.ariaSetSize;
    /** @type {?} */
    FabCheckboxComponent.prototype.checkmarkIconProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.keytipProps;
    /** @type {?} */
    FabCheckboxComponent.prototype.styles;
    /** @type {?} */
    FabCheckboxComponent.prototype.renderLabel;
    /** @type {?} */
    FabCheckboxComponent.prototype.onChange;
    /** @type {?} */
    FabCheckboxComponent.prototype.checkedChange;
    /** @type {?} */
    FabCheckboxComponent.prototype.onRenderLabel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$3 = [FabCheckboxComponent];
class FabCheckboxModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Checkbox', (/**
         * @return {?}
         */
        () => Checkbox));
    }
}
FabCheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$3,
                exports: components$3,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCheckboxModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabChoiceGroupComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChanged = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangedHandler = this.onChangedHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    onChangedHandler(option, evt) {
        this.onChanged.emit({
            option,
            evt: evt && evt.nativeEvent,
        });
    }
    /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    onChangeHandler(ev, option) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            option,
        });
    }
}
FabChoiceGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-choice-group',
                exportAs: 'fabChoiceGroup',
                template: `
    <ChoiceGroup
      #reactNode
      [componentRef]="componentRef"
      [options]="options"
      [defaultSelectedKey]="defaultSelectedKey"
      [selectedKey]="selectedKey"
      [label]="label"
      [required]="required"
      [theme]="theme"
      [styles]="styles"
      [ariaLabelledBy]="ariaLabelledBy"
      [Changed]="onChangedHandler"
      [Change]="onChangeHandler"
    >
    </ChoiceGroup>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabChoiceGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabChoiceGroupComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    options: [{ type: Input }],
    defaultSelectedKey: [{ type: Input }],
    selectedKey: [{ type: Input }],
    label: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    required: [{ type: Input }],
    onChanged: [{ type: Output }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabChoiceGroupComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.componentRef;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.options;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.selectedKey;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.label;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.theme;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.styles;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.ariaLabelledBy;
    /**
     * HTML Input props
     * @type {?}
     */
    FabChoiceGroupComponent.prototype.required;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChanged;
    /** @type {?} */
    FabChoiceGroupComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$4 = [FabChoiceGroupComponent];
class FabChoiceGroupModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ChoiceGroup', (/**
         * @return {?}
         */
        () => ChoiceGroup));
    }
}
FabChoiceGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$4,
                exports: components$4,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabChoiceGroupModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
const declarations$1 = [
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
                declarations: declarations$1,
                exports: declarations$1,
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
/**
 * Wrapper directive to allow rendering a custom item to a CommandBarItem.
 */
class CommandBarItemRenderDirective {
}
CommandBarItemRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
];
CommandBarItemRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    CommandBarItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a CommandBarItem.
 */
class CommandBarItemRenderIconDirective {
}
CommandBarItemRenderIconDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
];
CommandBarItemRenderIconDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    CommandBarItemRenderIconDirective.prototype.templateRef;
}
class CommandBarItemDirective extends ContextualMenuItemDirective$1 {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
}
CommandBarItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item' },] }
];
/** @nocollapse */
CommandBarItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
CommandBarItemDirective.propDecorators = {
    iconOnly: [{ type: Input }],
    tooltipHostProps: [{ type: Input }],
    buttonStyles: [{ type: Input }],
    cacheKey: [{ type: Input }],
    renderedInOverflow: [{ type: Input }],
    commandBarButtonAs: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CommandBarItemDirective.prototype.iconOnly;
    /** @type {?} */
    CommandBarItemDirective.prototype.tooltipHostProps;
    /** @type {?} */
    CommandBarItemDirective.prototype.buttonStyles;
    /** @type {?} */
    CommandBarItemDirective.prototype.cacheKey;
    /** @type {?} */
    CommandBarItemDirective.prototype.renderedInOverflow;
    /** @type {?} */
    CommandBarItemDirective.prototype.commandBarButtonAs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CommandBarItemsDirectiveBase extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return (this.directiveItems &&
            this.directiveItems.map((/**
             * @param {?} directiveItem
             * @return {?}
             */
            (directiveItem) => (Object.assign({}, directiveItem, getDataAttributes(directiveItem.elementRef.nativeElement, true), { onClick: (/**
                 * @param {?} ev
                 * @param {?} item
                 * @return {?}
                 */
                (ev, item) => {
                    directiveItem.click.emit({
                        ev: ev && ev.nativeEvent,
                        item: item,
                    });
                }) })))));
    }
}
if (false) {
    /** @type {?} */
    CommandBarItemsDirectiveBase.prototype.directiveItems;
}
class CommandBarItemsDirective extends CommandBarItemsDirectiveBase {
}
CommandBarItemsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar > items' },] }
];
CommandBarItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
};
if (false) {
    /** @type {?} */
    CommandBarItemsDirective.prototype.directiveItems;
}
class CommandBarFarItemsDirective extends CommandBarItemsDirectiveBase {
}
CommandBarFarItemsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar > far-items' },] }
];
CommandBarFarItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
};
if (false) {
    /** @type {?} */
    CommandBarFarItemsDirective.prototype.directiveItems;
}
class CommandBarOverflowItemsDirective extends CommandBarItemsDirectiveBase {
}
CommandBarOverflowItemsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar > overflow-items' },] }
];
CommandBarOverflowItemsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
};
if (false) {
    /** @type {?} */
    CommandBarOverflowItemsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabCommandBarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onDataReduced = new EventEmitter();
        this.onDataGrown = new EventEmitter();
        this._subscriptions = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['items'] &&
            changes['items'].previousValue !== changes['items'].currentValue &&
            changes['items'].currentValue)
            this._createTransformedItems(changes['items'].currentValue);
        if (changes['farItems'] &&
            changes['farItems'].previousValue !== changes['farItems'].currentValue &&
            changes['farItems'].currentValue)
            this._createTransformedFarItems(changes['farItems'].currentValue);
        if (changes['overflowItems'] &&
            changes['overflowItems'].previousValue !== changes['overflowItems'].currentValue &&
            changes['overflowItems'].currentValue)
            this._createTransformedOverflowItems(changes['overflowItems'].currentValue);
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.itemsDirective)
            this._initDirective(this.itemsDirective, 'items');
        if (this.farItemsDirective)
            this._initDirective(this.farItemsDirective, 'farItems');
        if (this.overflowItemsDirective)
            this._initDirective(this.overflowItemsDirective, 'overflowItems');
        super.ngAfterContentInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        subscription => subscription.unsubscribe()));
    }
    /**
     * @private
     * @template TCommandBarItemsDirective
     * @param {?} directive
     * @param {?} itemsPropertyKey
     * @return {?}
     */
    _initDirective(directive, itemsPropertyKey) {
        /** @type {?} */
        const transformItemsFunc = (directive instanceof CommandBarItemsDirective && ((/**
         * @param {?} newItems
         * @return {?}
         */
        newItems => this._createTransformedItems(newItems)))) ||
            (directive instanceof CommandBarFarItemsDirective && ((/**
             * @param {?} newItems
             * @return {?}
             */
            newItems => this._createTransformedFarItems(newItems)))) ||
            (directive instanceof CommandBarOverflowItemsDirective &&
                ((/**
                 * @param {?} newItems
                 * @return {?}
                 */
                newItems => this._createTransformedOverflowItems(newItems))));
        null;
        if (!transformItemsFunc) {
            throw new Error('Invalid directive given');
        }
        /** @type {?} */
        const setItems = (/**
         * @param {?} mapper
         * @return {?}
         */
        (mapper) => {
            this[itemsPropertyKey] = mapper(this[itemsPropertyKey]);
            transformItemsFunc(this[itemsPropertyKey]);
            this.markForCheck();
        });
        // Initial items
        setItems((/**
         * @return {?}
         */
        () => directive.items));
        // Subscribe to adding/removing items
        this._subscriptions.push(directive.onItemsChanged.subscribe((/**
         * @param {?} newItems
         * @return {?}
         */
        (newItems) => {
            setItems((/**
             * @return {?}
             */
            () => newItems.map((/**
             * @param {?} directive
             * @return {?}
             */
            directive => directive))));
        })));
        // Subscribe for existing items changes
        this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, changes }) => {
            setItems((/**
             * @param {?} items
             * @return {?}
             */
            items => items.map((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.key === key ? mergeItemChanges(item, changes) : item)))));
            this.markForCheck();
        })));
    }
    /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    _createTransformedItems(newItems) {
        this.transformedItems_ = newItems.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this._transformCommandBarItemOptionsToProps(item)));
    }
    /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    _createTransformedFarItems(newItems) {
        this.transformedFarItems_ = newItems.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this._transformCommandBarItemOptionsToProps(item)));
    }
    /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    _createTransformedOverflowItems(newItems) {
        this.transformedOverflowItems_ = newItems.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this._transformCommandBarItemOptionsToProps(item)));
    }
    /**
     * @private
     * @param {?} itemOptions
     * @return {?}
     */
    _transformCommandBarItemOptionsToProps(itemOptions) {
        /** @type {?} */
        const sharedProperties = omit(itemOptions, 'renderIcon', 'render');
        // Legacy render mode is used for the icon because otherwise the icon is to the right of the text (instead of the usual left)
        /** @type {?} */
        const iconRenderer = this.createInputJsxRenderer(itemOptions.renderIcon, { legacyRenderMode: true });
        /** @type {?} */
        const renderer = this.createInputJsxRenderer(itemOptions.render);
        // @ts-ignore
        return (/** @type {?} */ (Object.assign({}, sharedProperties, iconRenderer && {
            onRenderIcon: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => iconRenderer({ contextualMenuItem: item })),
        }, renderer &&
            ((/** @type {?} */ ({ onRender: (/**
                 * @param {?} item
                 * @param {?} dismissMenu
                 * @return {?}
                 */
                (item, dismissMenu) => renderer({ item, dismissMenu })) }))))));
    }
}
FabCommandBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-command-bar',
                exportAs: 'fabCommandBar',
                template: `
    <CommandBar
      #reactNode
      [componentRef]="componentRef"
      [items]="transformedItems_"
      [farItems]="transformedFarItems_"
      [overflowItems]="transformedOverflowItems_"
      [overflowButtonProps]="overflowButtonProps"
      [overflowButtonAs]="overflowButtonAs"
      [buttonAs]="buttonAs"
      [shiftOnReduce]="shiftOnReduce"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [styles]="styles"
      [theme]="theme"
      [ReduceData]="onReduceData"
      [GrowData]="onGrowData"
      (onDataReduced)="(onDataReduced)"
      (onDataGrown)="(onDataGrown)"
    >
    </CommandBar>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCommandBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCommandBarComponent.propDecorators = {
    itemsDirective: [{ type: ContentChild, args: [CommandBarItemsDirective, { static: true },] }],
    farItemsDirective: [{ type: ContentChild, args: [CommandBarFarItemsDirective, { static: true },] }],
    overflowItemsDirective: [{ type: ContentChild, args: [CommandBarOverflowItemsDirective, { static: true },] }],
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    overflowButtonProps: [{ type: Input }],
    overflowButtonAs: [{ type: Input }],
    buttonAs: [{ type: Input }],
    shiftOnReduce: [{ type: Input }],
    className: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    onReduceData: [{ type: Input }],
    onGrowData: [{ type: Input }],
    items: [{ type: Input }],
    farItems: [{ type: Input }],
    overflowItems: [{ type: Input }],
    onDataReduced: [{ type: Output }],
    onDataGrown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabCommandBarComponent.prototype.itemsDirective;
    /** @type {?} */
    FabCommandBarComponent.prototype.farItemsDirective;
    /** @type {?} */
    FabCommandBarComponent.prototype.overflowItemsDirective;
    /**
     * @type {?}
     * @protected
     */
    FabCommandBarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabCommandBarComponent.prototype.componentRef;
    /** @type {?} */
    FabCommandBarComponent.prototype.overflowButtonProps;
    /** @type {?} */
    FabCommandBarComponent.prototype.overflowButtonAs;
    /** @type {?} */
    FabCommandBarComponent.prototype.buttonAs;
    /** @type {?} */
    FabCommandBarComponent.prototype.shiftOnReduce;
    /** @type {?} */
    FabCommandBarComponent.prototype.className;
    /** @type {?} */
    FabCommandBarComponent.prototype.ariaLabel;
    /** @type {?} */
    FabCommandBarComponent.prototype.styles;
    /** @type {?} */
    FabCommandBarComponent.prototype.theme;
    /** @type {?} */
    FabCommandBarComponent.prototype.onReduceData;
    /** @type {?} */
    FabCommandBarComponent.prototype.onGrowData;
    /** @type {?} */
    FabCommandBarComponent.prototype.items;
    /** @type {?} */
    FabCommandBarComponent.prototype.farItems;
    /** @type {?} */
    FabCommandBarComponent.prototype.overflowItems;
    /** @type {?} */
    FabCommandBarComponent.prototype.onDataReduced;
    /** @type {?} */
    FabCommandBarComponent.prototype.onDataGrown;
    /**
     * \@internal
     * @type {?}
     */
    FabCommandBarComponent.prototype.transformedItems_;
    /**
     * \@internal
     * @type {?}
     */
    FabCommandBarComponent.prototype.transformedFarItems_;
    /**
     * \@internal
     * @type {?}
     */
    FabCommandBarComponent.prototype.transformedOverflowItems_;
    /**
     * @type {?}
     * @private
     */
    FabCommandBarComponent.prototype._subscriptions;
}
/**
 * @record
 * @template TData
 */
function ICommandBarItemOptions() { }
if (false) {
    /** @type {?|undefined} */
    ICommandBarItemOptions.prototype.renderIcon;
    /** @type {?|undefined} */
    ICommandBarItemOptions.prototype.render;
    /** @type {?|undefined} */
    ICommandBarItemOptions.prototype.data;
}
/**
 * @record
 */
function ICommandBarItemOptionsRenderContext() { }
if (false) {
    /** @type {?} */
    ICommandBarItemOptionsRenderContext.prototype.item;
    /** @type {?} */
    ICommandBarItemOptionsRenderContext.prototype.dismissMenu;
}
/**
 * @record
 */
function ICommandBarItemOptionsRenderIconContext() { }
if (false) {
    /** @type {?} */
    ICommandBarItemOptionsRenderIconContext.prototype.contextualMenuItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force OverflowSetCss to load and not be tree-shaken away.
noop(OverflowSetCss);
/** @type {?} */
const components$5 = [
    FabCommandBarComponent,
    CommandBarItemsDirective,
    CommandBarFarItemsDirective,
    CommandBarOverflowItemsDirective,
    CommandBarItemDirective,
    CommandBarItemRenderDirective,
    CommandBarItemRenderIconDirective,
];
class FabCommandBarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('CommandBar', (/**
         * @return {?}
         */
        () => CommandBar));
    }
}
FabCommandBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabContextualMenuModule$1],
                declarations: components$5,
                exports: [...components$5, FabContextualMenuModule$1],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabCommandBarModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive to allow rendering a custom item to a ContextualMenuItem.
 */
class ContextualMenuItemRenderDirective {
}
ContextualMenuItemRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
];
ContextualMenuItemRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a ContextualMenuItem.
 */
class ContextualMenuItemRenderIconDirective {
}
ContextualMenuItemRenderIconDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
];
ContextualMenuItemRenderIconDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderIconDirective.prototype.templateRef;
}
class ContextualMenuItemDirective extends ChangeableItemDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get onChildItemChanged() {
        return this._changeableItemsHelper && this._changeableItemsHelper.onChildItemChanged;
    }
    /**
     * @return {?}
     */
    get onItemsChanged() {
        return this._changeableItemsHelper && this._changeableItemsHelper.onItemsChanged;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
        if (this.renderIconDirective && this.renderIconDirective.templateRef) {
            this.renderIcon = this.renderIconDirective.templateRef;
        }
        this._changeableItemsHelper = new ChangeableItemsHelper(this.menuItemsDirectives, this, (/**
         * @param {?} nonSelfDirective
         * @return {?}
         */
        nonSelfDirective => {
            /** @type {?} */
            const items = nonSelfDirective.map((/**
             * @param {?} directive
             * @return {?}
             */
            directive => this._directiveToContextualMenuItem((/** @type {?} */ (directive)))));
            if (!this.subMenuProps) {
                this.subMenuProps = { items: items };
            }
            else {
                this.subMenuProps.items = items;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._changeableItemsHelper.destroy();
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _directiveToContextualMenuItem(directive) {
        return Object.assign({}, directive, getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
             * @param {?} ev
             * @param {?} item
             * @return {?}
             */
            (ev, item) => {
                directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
            }) });
    }
}
ContextualMenuItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'contextual-menu-item' },] }
];
/** @nocollapse */
ContextualMenuItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
ContextualMenuItemDirective.propDecorators = {
    menuItemsDirectives: [{ type: ContentChildren, args: [ContextualMenuItemDirective,] }],
    renderDirective: [{ type: ContentChild, args: [ContextualMenuItemRenderDirective, { static: false },] }],
    renderIconDirective: [{ type: ContentChild, args: [ContextualMenuItemRenderIconDirective, { static: false },] }],
    componentRef: [{ type: Input }],
    text: [{ type: Input }],
    secondaryText: [{ type: Input }],
    itemType: [{ type: Input }],
    iconProps: [{ type: Input }],
    submenuIconProps: [{ type: Input }],
    disabled: [{ type: Input }],
    primaryDisabled: [{ type: Input }],
    shortCut: [{ type: Input }],
    canCheck: [{ type: Input }],
    checked: [{ type: Input }],
    split: [{ type: Input }],
    data: [{ type: Input }],
    href: [{ type: Input }],
    target: [{ type: Input }],
    rel: [{ type: Input }],
    subMenuProps: [{ type: Input }],
    getItemClassNames: [{ type: Input }],
    itemProps: [{ type: Input }],
    getSplitButtonVerticalDividerClassNames: [{ type: Input }],
    sectionProps: [{ type: Input }],
    className: [{ type: Input }],
    style: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    title: [{ type: Input }],
    onMouseDown: [{ type: Input }],
    role: [{ type: Input }],
    customOnRenderListLength: [{ type: Input }],
    keytipProps: [{ type: Input }],
    inactive: [{ type: Input }],
    name: [{ type: Input }],
    render: [{ type: Input }],
    renderIcon: [{ type: Input }],
    click: [{ type: Output }],
    onChildItemChanged: [{ type: Output }],
    onItemsChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ContextualMenuItemDirective.prototype.menuItemsDirectives;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.renderDirective;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.renderIconDirective;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.componentRef;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.text;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.secondaryText;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.itemType;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.iconProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.submenuIconProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.disabled;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.primaryDisabled;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.shortCut;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.canCheck;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.checked;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.split;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.data;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.href;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.target;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.rel;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.subMenuProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.getItemClassNames;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.itemProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.getSplitButtonVerticalDividerClassNames;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.sectionProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.className;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.style;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.ariaLabel;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.title;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.onMouseDown;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.role;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.customOnRenderListLength;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.keytipProps;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.inactive;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.name;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.render;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.renderIcon;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.click;
    /**
     * @type {?}
     * @private
     */
    ContextualMenuItemDirective.prototype._changeableItemsHelper;
    /** @type {?} */
    ContextualMenuItemDirective.prototype.elementRef;
}
/**
 * @record
 * @template TData
 */
function IContextualMenuItemOptions() { }
if (false) {
    /** @type {?|undefined} */
    IContextualMenuItemOptions.prototype.renderIcon;
    /** @type {?|undefined} */
    IContextualMenuItemOptions.prototype.render;
    /** @type {?|undefined} */
    IContextualMenuItemOptions.prototype.data;
    /* Skipping unhandled member: [propertyName: string]: any;*/
}
/**
 * @record
 */
function IContextualMenuItemOptionsRenderContext() { }
if (false) {
    /** @type {?} */
    IContextualMenuItemOptionsRenderContext.prototype.item;
    /** @type {?} */
    IContextualMenuItemOptionsRenderContext.prototype.dismissMenu;
}
/**
 * @record
 */
function IContextualMenuItemOptionsRenderIconContext() { }
if (false) {
    /** @type {?} */
    IContextualMenuItemOptionsRenderIconContext.prototype.contextualMenuItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$6 = [
    ContextualMenuItemDirective,
    ContextualMenuItemRenderDirective,
    ContextualMenuItemRenderIconDirective,
];
class FabContextualMenuModule {
}
FabContextualMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$6,
                exports: components$6,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDatePickerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onSelectDate = new EventEmitter();
        this.onAfterMenuDismiss = new EventEmitter();
        this.onSelectDateHandler = this.onSelectDateHandler.bind(this);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDateHandler(date) {
        this.onSelectDate.emit({
            date,
        });
    }
}
FabDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-date-picker',
                exportAs: 'fabDatePicker',
                template: `
    <DatePicker
      #reactNode
      [componentRef]="componentRef"
      [theme]="theme"
      [calendarProps]="calendarProps"
      [textField]="textField"
      [calloutProps]="calloutProps"
      [calendarAs]="calendarAs"
      [label]="label"
      [isRequired]="isRequired"
      [disabled]="disabled"
      [ariaLabel]="ariaLabel"
      [underlined]="underlined"
      [pickerAriaLabel]="pickerAriaLabel"
      [isMonthPickerVisible]="isMonthPickerVisible"
      [showMonthPickerAsOverlay]="showMonthPickerAsOverlay"
      [allowTextInput]="allowTextInput"
      [disableAutoFocus]="disableAutoFocus"
      [placeholder]="placeholder"
      [today]="today"
      [value]="value"
      [formatDate]="formatDate"
      [parseDateFromString]="parseDateFromString"
      [firstDayOfWeek]="firstDayOfWeek"
      [strings]="strings"
      [highlightCurrentMonth]="highlightCurrentMonth"
      [highlightSelectedMonth]="highlightSelectedMonth"
      [showWeekNumbers]="showWeekNumbers"
      [firstWeekOfYear]="firstWeekOfYear"
      [showGoToToday]="showGoToToday"
      [borderless]="borderless"
      [className]="className"
      [dateTimeFormatter]="dateTimeFormatter"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [initialPickerDate]="initialPickerDate"
      [allFocusable]="allFocusable"
      [showCloseButton]="showCloseButton"
      [SelectDate]="onSelectDateHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit()"
    >
    </DatePicker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDatePickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    theme: [{ type: Input }],
    calloutProps: [{ type: Input }],
    calendarProps: [{ type: Input }],
    textField: [{ type: Input }],
    calendarAs: [{ type: Input }],
    label: [{ type: Input }],
    isRequired: [{ type: Input }],
    disabled: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    underlined: [{ type: Input }],
    pickerAriaLabel: [{ type: Input }],
    isMonthPickerVisible: [{ type: Input }],
    showMonthPickerAsOverlay: [{ type: Input }],
    allowTextInput: [{ type: Input }],
    disableAutoFocus: [{ type: Input }],
    placeholder: [{ type: Input }],
    today: [{ type: Input }],
    value: [{ type: Input }],
    formatDate: [{ type: Input }],
    parseDateFromString: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    strings: [{ type: Input }],
    highlightCurrentMonth: [{ type: Input }],
    highlightSelectedMonth: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    firstWeekOfYear: [{ type: Input }],
    showGoToToday: [{ type: Input }],
    borderless: [{ type: Input }],
    className: [{ type: Input }],
    dateTimeFormatter: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    initialPickerDate: [{ type: Input }],
    allFocusable: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    tabIndex: [{ type: Input }],
    onSelectDate: [{ type: Output }],
    onAfterMenuDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDatePickerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDatePickerComponent.prototype.componentRef;
    /** @type {?} */
    FabDatePickerComponent.prototype.theme;
    /** @type {?} */
    FabDatePickerComponent.prototype.calloutProps;
    /** @type {?} */
    FabDatePickerComponent.prototype.calendarProps;
    /** @type {?} */
    FabDatePickerComponent.prototype.textField;
    /** @type {?} */
    FabDatePickerComponent.prototype.calendarAs;
    /** @type {?} */
    FabDatePickerComponent.prototype.label;
    /** @type {?} */
    FabDatePickerComponent.prototype.isRequired;
    /** @type {?} */
    FabDatePickerComponent.prototype.disabled;
    /** @type {?} */
    FabDatePickerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabDatePickerComponent.prototype.underlined;
    /** @type {?} */
    FabDatePickerComponent.prototype.pickerAriaLabel;
    /** @type {?} */
    FabDatePickerComponent.prototype.isMonthPickerVisible;
    /** @type {?} */
    FabDatePickerComponent.prototype.showMonthPickerAsOverlay;
    /** @type {?} */
    FabDatePickerComponent.prototype.allowTextInput;
    /** @type {?} */
    FabDatePickerComponent.prototype.disableAutoFocus;
    /** @type {?} */
    FabDatePickerComponent.prototype.placeholder;
    /** @type {?} */
    FabDatePickerComponent.prototype.today;
    /** @type {?} */
    FabDatePickerComponent.prototype.value;
    /** @type {?} */
    FabDatePickerComponent.prototype.formatDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.parseDateFromString;
    /** @type {?} */
    FabDatePickerComponent.prototype.firstDayOfWeek;
    /** @type {?} */
    FabDatePickerComponent.prototype.strings;
    /** @type {?} */
    FabDatePickerComponent.prototype.highlightCurrentMonth;
    /** @type {?} */
    FabDatePickerComponent.prototype.highlightSelectedMonth;
    /** @type {?} */
    FabDatePickerComponent.prototype.showWeekNumbers;
    /** @type {?} */
    FabDatePickerComponent.prototype.firstWeekOfYear;
    /** @type {?} */
    FabDatePickerComponent.prototype.showGoToToday;
    /** @type {?} */
    FabDatePickerComponent.prototype.borderless;
    /** @type {?} */
    FabDatePickerComponent.prototype.className;
    /** @type {?} */
    FabDatePickerComponent.prototype.dateTimeFormatter;
    /** @type {?} */
    FabDatePickerComponent.prototype.minDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.maxDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.initialPickerDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.allFocusable;
    /** @type {?} */
    FabDatePickerComponent.prototype.showCloseButton;
    /** @type {?} */
    FabDatePickerComponent.prototype.tabIndex;
    /** @type {?} */
    FabDatePickerComponent.prototype.onSelectDate;
    /** @type {?} */
    FabDatePickerComponent.prototype.onAfterMenuDismiss;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Dummy action to force CalendarCss to load and not be tree-shaken away.
noop(CalendarCss);
/** @type {?} */
const components$7 = [FabDatePickerComponent];
class FabDatePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DatePicker', (/**
         * @return {?}
         */
        () => DatePicker));
    }
}
FabDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$7,
                exports: components$7,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDatePickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for rendering a custom column to a DetailsListColumn
 */
class DetailsListColumnRenderDirective {
}
DetailsListColumnRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list-column > render' },] }
];
DetailsListColumnRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
class DetailsListColumnDirective extends ChangeableItemDirective {
    constructor() {
        super(...arguments);
        // Callback members
        this.onColumnClick = new EventEmitter();
        this.onColumnContextMenu = new EventEmitter();
        this.onColumnResize = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
    }
}
DetailsListColumnDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list-column' },] }
];
DetailsListColumnDirective.propDecorators = {
    renderDirective: [{ type: ContentChild, args: [DetailsListColumnRenderDirective, { static: false },] }],
    name: [{ type: Input }],
    fieldName: [{ type: Input }],
    className: [{ type: Input }],
    minWidth: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    isRowHeader: [{ type: Input }],
    maxWidth: [{ type: Input }],
    columnActionsMode: [{ type: Input }],
    iconName: [{ type: Input }],
    isIconOnly: [{ type: Input }],
    iconClassName: [{ type: Input }],
    isCollapsable: [{ type: Input }],
    isSorted: [{ type: Input }],
    isSortedDescending: [{ type: Input }],
    isResizable: [{ type: Input }],
    isMultiline: [{ type: Input }],
    onRender: [{ type: Input }],
    getValueKey: [{ type: Input }],
    onRenderDivider: [{ type: Input }],
    isFiltered: [{ type: Input }],
    isGrouped: [{ type: Input }],
    data: [{ type: Input }],
    calculatedWidth: [{ type: Input }],
    currentWidth: [{ type: Input }],
    headerClassName: [{ type: Input }],
    isPadded: [{ type: Input }],
    sortAscendingAriaLabel: [{ type: Input }],
    sortDescendingAriaLabel: [{ type: Input }],
    groupAriaLabel: [{ type: Input }],
    filterAriaLabel: [{ type: Input }],
    render: [{ type: Input }],
    onColumnClick: [{ type: Output }],
    onColumnContextMenu: [{ type: Output }],
    onColumnResize: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnDirective.prototype.renderDirective;
    /** @type {?} */
    DetailsListColumnDirective.prototype.name;
    /** @type {?} */
    DetailsListColumnDirective.prototype.fieldName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.className;
    /** @type {?} */
    DetailsListColumnDirective.prototype.minWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.ariaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isRowHeader;
    /** @type {?} */
    DetailsListColumnDirective.prototype.maxWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.columnActionsMode;
    /** @type {?} */
    DetailsListColumnDirective.prototype.iconName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isIconOnly;
    /** @type {?} */
    DetailsListColumnDirective.prototype.iconClassName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isCollapsable;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isSorted;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isSortedDescending;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isResizable;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isMultiline;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onRender;
    /** @type {?} */
    DetailsListColumnDirective.prototype.getValueKey;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onRenderDivider;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isFiltered;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isGrouped;
    /** @type {?} */
    DetailsListColumnDirective.prototype.data;
    /** @type {?} */
    DetailsListColumnDirective.prototype.calculatedWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.currentWidth;
    /** @type {?} */
    DetailsListColumnDirective.prototype.headerClassName;
    /** @type {?} */
    DetailsListColumnDirective.prototype.isPadded;
    /** @type {?} */
    DetailsListColumnDirective.prototype.sortAscendingAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.sortDescendingAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.groupAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.filterAriaLabel;
    /** @type {?} */
    DetailsListColumnDirective.prototype.render;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnClick;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnContextMenu;
    /** @type {?} */
    DetailsListColumnDirective.prototype.onColumnResize;
}
/**
 * @record
 * @template TData
 */
function IDetailsListColumnOptions() { }
if (false) {
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.render;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnClick;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnContextMenu;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.onColumnResize;
    /** @type {?|undefined} */
    IDetailsListColumnOptions.prototype.data;
}
/**
 * @record
 */
function IDetailsListColumnOptionsRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.item;
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.index;
    /** @type {?|undefined} */
    IDetailsListColumnOptionsRenderContext.prototype.column;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating multiple DetailsListColumns
 */
class DetailsListColumnsDirective extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.map((/**
         * @param {?} directiveItem
         * @return {?}
         */
        directiveItem => (Object.assign({}, directiveItem, { onColumnClick: (/**
             * @param {?} ev
             * @param {?} column
             * @return {?}
             */
            (ev, column) => {
                directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column });
            }), onColumnContextMenu: (/**
             * @param {?=} column
             * @param {?=} ev
             * @return {?}
             */
            (column, ev) => {
                directiveItem.onColumnContextMenu.emit({ column, ev: ev && ev.nativeEvent });
            }), onColumnResize: (/**
             * @param {?=} width
             * @return {?}
             */
            (width) => {
                directiveItem.onColumnResize.emit({ width });
            }) }))));
    }
}
DetailsListColumnsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list > columns' },] }
];
DetailsListColumnsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [DetailsListColumnDirective,] }]
};
if (false) {
    /** @type {?} */
    DetailsListColumnsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
class DetailsListGroupsDirective extends ChangeableItemsDirective {
    /**
     * @return {?}
     */
    get items() {
        return this.directiveItems.toArray();
    }
}
DetailsListGroupsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-details-list > groups' },] }
];
DetailsListGroupsDirective.propDecorators = {
    directiveItems: [{ type: ContentChildren, args: [GroupItemDirective$1,] }]
};
if (false) {
    /** @type {?} */
    DetailsListGroupsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDetailsListComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        // Callback members
        this.onActiveItemChanged = new EventEmitter();
        this.onColumnHeaderClick = new EventEmitter();
        this.onColumnHeaderContextMenu = new EventEmitter();
        this.onColumnResize = new EventEmitter();
        this.onDidUpdate = new EventEmitter();
        this.onItemContextMenu = new EventEmitter();
        this.onItemInvoked = new EventEmitter();
        this.onRowDidMount = new EventEmitter();
        this.onRowWillUnmount = new EventEmitter();
        this._subscriptions = [];
        // Bind this to access Angular component properties
        this.onActiveItemChangedHandler = this.onActiveItemChangedHandler.bind(this);
        this.onColumnHeaderClickHandler = this.onColumnHeaderClickHandler.bind(this);
        this.onColumnHeaderContextMenuHandler = this.onColumnHeaderContextMenuHandler.bind(this);
        this.onColumnResizeHandler = this.onColumnResizeHandler.bind(this);
        this.onDidUpdateHandler = this.onDidUpdateHandler.bind(this);
        this.onItemContextMenuHandler = this.onItemContextMenuHandler.bind(this);
        this.onItemInvokedHandler = this.onItemInvokedHandler.bind(this);
        this.onRowDidMountHandler = this.onRowDidMountHandler.bind(this);
        this.onRowWillUnmountHandler = this.onRowWillUnmountHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCheckbox = this.createRenderPropHandler(this.renderCheckbox);
        this.onRenderDetailsFooter = this.createRenderPropHandler(this.renderDetailsFooter);
        this.onRenderDetailsHeader = this.createRenderPropHandler(this.renderDetailsHeader);
        this.onRenderRow = this.createRenderPropHandler(this.renderRow);
        /** @type {?} */
        const missingItemRenderer = this.createInputJsxRenderer(this.renderMissingItem);
        this.onRenderMissingItem = (/**
         * @param {?} index
         * @param {?} rowProps
         * @return {?}
         */
        (index, rowProps) => missingItemRenderer({ index, rowProps }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['columns'] &&
            changes['columns'].currentValue &&
            changes['columns'].previousValue !== changes['columns'].currentValue) {
            this._createTransformedColumns(changes['columns'].currentValue);
        }
        if (changes['groups'] &&
            changes['groups'].currentValue &&
            changes['groups'].previousValue !== changes['groups'].currentValue) {
            this._createTransformedGroups(changes['groups'].currentValue);
        }
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.columnsDirective) {
            this._initDirective(this.columnsDirective, 'columns');
        }
        if (this.groupsDirective) {
            this._initDirective(this.groupsDirective, 'groups');
        }
        super.ngAfterContentInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    onActiveItemChangedHandler(item, index, ev) {
        this.onActiveItemChanged.emit({ item, index, ev: ev.nativeEvent });
    }
    /**
     * @param {?=} ev
     * @param {?=} column
     * @return {?}
     */
    onColumnHeaderClickHandler(ev, column) {
        this.onColumnHeaderClick.emit({ ev: ev.nativeEvent, column });
    }
    /**
     * @param {?=} column
     * @param {?=} ev
     * @return {?}
     */
    onColumnHeaderContextMenuHandler(column, ev) {
        this.onColumnHeaderContextMenu.emit({ column, ev: ev.nativeEvent });
    }
    /**
     * @param {?=} column
     * @param {?=} newWidth
     * @param {?=} columnIndex
     * @return {?}
     */
    onColumnResizeHandler(column, newWidth, columnIndex) {
        this.onColumnResize.emit({ column, newWidth, columnIndex });
    }
    /**
     * @param {?=} detailsList
     * @return {?}
     */
    onDidUpdateHandler(detailsList) {
        this.onDidUpdate.emit({ detailsList });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    onItemContextMenuHandler(item, index, ev) {
        this.onItemContextMenu.emit({ item, index, ev });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    onItemInvokedHandler(item, index, ev) {
        this.onItemInvoked.emit({ item, index, ev });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    onRowDidMountHandler(item, index) {
        this.onRowDidMount.emit({ item, index });
    }
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    onRowWillUnmountHandler(item, index) {
        this.onRowWillUnmount.emit({ item, index });
    }
    /**
     * @private
     * @param {?} directive
     * @param {?} propertyKey
     * @return {?}
     */
    _initDirective(directive, propertyKey) {
        /** @type {?} */
        const transformItemsFunc = this._transformItemsFunction(directive);
        /** @type {?} */
        const setItems = (/**
         * @param {?} mapper
         * @return {?}
         */
        (mapper) => {
            this[propertyKey] = mapper(this[propertyKey]);
            transformItemsFunc(this[propertyKey]);
            this.markForCheck();
        });
        setItems((/**
         * @return {?}
         */
        () => directive.items));
        // Subscribe to adding/removing items
        this._subscriptions.push(directive.onItemsChanged.subscribe((/**
         * @param {?} newItems
         * @return {?}
         */
        (newItems) => {
            setItems((/**
             * @return {?}
             */
            () => newItems.map((/**
             * @param {?} directive
             * @return {?}
             */
            directive => directive))));
        })));
        // Subscribe for existing item changes
        this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, changes }) => {
            setItems((/**
             * @param {?} items
             * @return {?}
             */
            items => items.map((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.key === key ? mergeItemChanges(item, changes) : item)))));
            this.markForCheck();
        })));
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _transformItemsFunction(directive) {
        if (directive instanceof DetailsListColumnsDirective) {
            return (/**
             * @param {?} newColumns
             * @return {?}
             */
            (newColumns) => this._createTransformedColumns(newColumns));
        }
        else if (directive instanceof DetailsListGroupsDirective) {
            return (/**
             * @param {?} newGroups
             * @return {?}
             */
            (newGroups) => this._createTransformedGroups(newGroups));
        }
        else {
            throw new Error('Invalid directive given');
        }
    }
    /**
     * @private
     * @param {?} newColumns
     * @return {?}
     */
    _createTransformedColumns(newColumns) {
        this.transformedColumns_ = newColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        column => this._transformDetailsListColumnOptionsToProps(column)));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformDetailsListColumnOptionsToProps(options) {
        /** @type {?} */
        const renderer = this.createInputJsxRenderer(options.render);
        return (/** @type {?} */ (Object.assign({}, omit(options, 'render'), renderer &&
            ((/** @type {?} */ ({
                onRender: (/**
                 * @param {?=} item
                 * @param {?=} index
                 * @param {?=} column
                 * @return {?}
                 */
                (item, index, column) => renderer({ item, index, column })),
            }))))));
    }
    /**
     * @private
     * @param {?} newGroups
     * @return {?}
     */
    _createTransformedGroups(newGroups) {
        this.transformedGroups_ = newGroups;
    }
}
FabDetailsListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-details-list',
                exportAs: 'fabDetailsList',
                template: `
    <DetailsList
      #reactNode
      [items]="items"
      [ariaLabel]="ariaLabel"
      [ariaLabelForGrid]="ariaLabelForGrid"
      [ariaLabelForListHeader]="ariaLabelForListHeader"
      [ariaLabelForSelectAllCheckbox]="ariaLabelForSelectAllCheckbox"
      [ariaLabelForSelectionColumn]="ariaLabelForSelectionColumn"
      [cellStyleProps]="cellStyleProps"
      [checkButtonAriaLabel]="checkButtonAriaLabel"
      [checkboxCellClassName]="checkboxCellClassName"
      [checkboxVisibility]="checkboxVisibility"
      [className]="className"
      [columnReorderOptions]="columnReorderOptions"
      [columns]="transformedColumns_"
      [compact]="compact"
      [componentRef]="componentRef"
      [constrainMode]="constrainMode"
      [disableSelectionZone]="disableSelectionZone"
      [dragDropEvents]="dragDropEvents"
      [enableUpdateAnimations]="enableUpdateAnimations"
      [enterModalSelectionOnTouch]="enterModalSelectionOnTouch"
      [getCellValueKey]="getCellValueKey"
      [getGroupHeight]="getGroupHeight"
      [getKey]="getKey"
      [getRowAriaDescribedBy]="getRowAriaDescribedBy"
      [getRowAriaLabel]="getRowAriaLabel"
      [groupProps]="groupProps"
      [groups]="transformedGroups_"
      [indentWidth]="indentWidth"
      [initialFocusedIndex]="initialFocusedIndex"
      [isHeaderVisible]="isHeaderVisible"
      [layoutMode]="layoutMode"
      [listProps]="listProps"
      [minimumPixelsForDrag]="minimumPixelsForDrag"
      [rowElementEventMap]="rowElementEventMap"
      [selection]="selection"
      [selectionMode]="selectionMode"
      [selectionPreservedOnEmptyClick]="selectionPreservedOnEmptyClick"
      [selectionZoneProps]="selectionZoneProps"
      [setKey]="setKey"
      [shouldApplyApplicationRole]="shouldApplyApplicationRole"
      [skipViewportMeasures]="skipViewportMeasures"
      [styles]="styles"
      [theme]="theme"
      [useFastIcons]="useFastIcons"
      [usePageCache]="usePageCache"
      [useReducedRowRenderer]="useReducedRowRenderer"
      [viewport]="viewport"
      [RenderCheckbox]="renderCheckbox && onRenderCheckbox"
      [RenderDetailsFooter]="renderDetailsFooter && onRenderDetailsFooter"
      [RenderDetailsHeader]="renderDetailsHeader && onRenderDetailsHeader"
      [RenderMissingItem]="renderMissingItem && onRenderMissingItem"
      [RenderRow]="renderDetailsHeader && onRenderRow"
      [ActiveItemChanged]="onActiveItemChangedHandler"
      [ColumnHeaderClick]="onColumnHeaderClickHandler"
      [ColumnHeaderContextMenu]="onColumnHeaderContextMenuHandler"
      [ColumnResize]="onColumnResizeHandler"
      [DidUpdate]="onDidUpdateHandler"
      [ItemContextMenu]="onItemContextMenuHandler"
      [ItemInvoked]="onItemInvokedHandler"
      [RowDidMount]="onRowDidMountHandler"
      [RowWillUnmount]="onRowWillUnmountHandler"
      [ShouldVirtualize]="onShouldVirtualize"
    >
    </DetailsList>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDetailsListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabDetailsListComponent.propDecorators = {
    columnsDirective: [{ type: ContentChild, args: [DetailsListColumnsDirective, { static: true },] }],
    groupsDirective: [{ type: ContentChild, args: [DetailsListGroupsDirective, { static: true },] }],
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    componentRef: [{ type: Input }],
    setKey: [{ type: Input }],
    items: [{ type: Input }],
    listProps: [{ type: Input }],
    initialFocusedIndex: [{ type: Input }],
    className: [{ type: Input }],
    groupProps: [{ type: Input }],
    indentWidth: [{ type: Input }],
    selection: [{ type: Input }],
    selectionMode: [{ type: Input }],
    selectionPreservedOnEmptyClick: [{ type: Input }],
    selectionZoneProps: [{ type: Input }],
    layoutMode: [{ type: Input }],
    checkboxVisibility: [{ type: Input }],
    isHeaderVisible: [{ type: Input }],
    constrainMode: [{ type: Input }],
    rowElementEventMap: [{ type: Input }],
    getCellValueKey: [{ type: Input }],
    dragDropEvents: [{ type: Input }],
    viewport: [{ type: Input }],
    ariaLabelForListHeader: [{ type: Input }],
    ariaLabelForSelectAllCheckbox: [{ type: Input }],
    ariaLabelForSelectionColumn: [{ type: Input }],
    getRowAriaLabel: [{ type: Input }],
    getRowAriaDescribedBy: [{ type: Input }],
    getKey: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    checkButtonAriaLabel: [{ type: Input }],
    ariaLabelForGrid: [{ type: Input }],
    shouldApplyApplicationRole: [{ type: Input }],
    minimumPixelsForDrag: [{ type: Input }],
    compact: [{ type: Input }],
    usePageCache: [{ type: Input }],
    onShouldVirtualize: [{ type: Input }],
    checkboxCellClassName: [{ type: Input }],
    enterModalSelectionOnTouch: [{ type: Input }],
    columnReorderOptions: [{ type: Input }],
    getGroupHeight: [{ type: Input }],
    useReducedRowRenderer: [{ type: Input }],
    cellStyleProps: [{ type: Input }],
    disableSelectionZone: [{ type: Input }],
    enableUpdateAnimations: [{ type: Input }],
    useFastIcons: [{ type: Input }],
    skipViewportMeasures: [{ type: Input }],
    renderCheckbox: [{ type: Input }],
    renderDetailsFooter: [{ type: Input }],
    renderDetailsHeader: [{ type: Input }],
    renderMissingItem: [{ type: Input }],
    renderRow: [{ type: Input }],
    onActiveItemChanged: [{ type: Output }],
    onColumnHeaderClick: [{ type: Output }],
    onColumnHeaderContextMenu: [{ type: Output }],
    onColumnResize: [{ type: Output }],
    onDidUpdate: [{ type: Output }],
    onItemContextMenu: [{ type: Output }],
    onItemInvoked: [{ type: Output }],
    onRowDidMount: [{ type: Output }],
    onRowWillUnmount: [{ type: Output }],
    columns: [{ type: Input }],
    groups: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabDetailsListComponent.prototype.columnsDirective;
    /** @type {?} */
    FabDetailsListComponent.prototype.groupsDirective;
    /**
     * @type {?}
     * @protected
     */
    FabDetailsListComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDetailsListComponent.prototype.theme;
    /** @type {?} */
    FabDetailsListComponent.prototype.styles;
    /** @type {?} */
    FabDetailsListComponent.prototype.componentRef;
    /** @type {?} */
    FabDetailsListComponent.prototype.setKey;
    /** @type {?} */
    FabDetailsListComponent.prototype.items;
    /** @type {?} */
    FabDetailsListComponent.prototype.listProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.initialFocusedIndex;
    /** @type {?} */
    FabDetailsListComponent.prototype.className;
    /** @type {?} */
    FabDetailsListComponent.prototype.groupProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.indentWidth;
    /** @type {?} */
    FabDetailsListComponent.prototype.selection;
    /** @type {?} */
    FabDetailsListComponent.prototype.selectionMode;
    /** @type {?} */
    FabDetailsListComponent.prototype.selectionPreservedOnEmptyClick;
    /** @type {?} */
    FabDetailsListComponent.prototype.selectionZoneProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.layoutMode;
    /** @type {?} */
    FabDetailsListComponent.prototype.checkboxVisibility;
    /** @type {?} */
    FabDetailsListComponent.prototype.isHeaderVisible;
    /** @type {?} */
    FabDetailsListComponent.prototype.constrainMode;
    /** @type {?} */
    FabDetailsListComponent.prototype.rowElementEventMap;
    /** @type {?} */
    FabDetailsListComponent.prototype.getCellValueKey;
    /** @type {?} */
    FabDetailsListComponent.prototype.dragDropEvents;
    /** @type {?} */
    FabDetailsListComponent.prototype.viewport;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForListHeader;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForSelectAllCheckbox;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForSelectionColumn;
    /** @type {?} */
    FabDetailsListComponent.prototype.getRowAriaLabel;
    /** @type {?} */
    FabDetailsListComponent.prototype.getRowAriaDescribedBy;
    /** @type {?} */
    FabDetailsListComponent.prototype.getKey;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabel;
    /** @type {?} */
    FabDetailsListComponent.prototype.checkButtonAriaLabel;
    /** @type {?} */
    FabDetailsListComponent.prototype.ariaLabelForGrid;
    /** @type {?} */
    FabDetailsListComponent.prototype.shouldApplyApplicationRole;
    /** @type {?} */
    FabDetailsListComponent.prototype.minimumPixelsForDrag;
    /** @type {?} */
    FabDetailsListComponent.prototype.compact;
    /** @type {?} */
    FabDetailsListComponent.prototype.usePageCache;
    /** @type {?} */
    FabDetailsListComponent.prototype.onShouldVirtualize;
    /** @type {?} */
    FabDetailsListComponent.prototype.checkboxCellClassName;
    /** @type {?} */
    FabDetailsListComponent.prototype.enterModalSelectionOnTouch;
    /** @type {?} */
    FabDetailsListComponent.prototype.columnReorderOptions;
    /** @type {?} */
    FabDetailsListComponent.prototype.getGroupHeight;
    /** @type {?} */
    FabDetailsListComponent.prototype.useReducedRowRenderer;
    /** @type {?} */
    FabDetailsListComponent.prototype.cellStyleProps;
    /** @type {?} */
    FabDetailsListComponent.prototype.disableSelectionZone;
    /** @type {?} */
    FabDetailsListComponent.prototype.enableUpdateAnimations;
    /** @type {?} */
    FabDetailsListComponent.prototype.useFastIcons;
    /** @type {?} */
    FabDetailsListComponent.prototype.skipViewportMeasures;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderCheckbox;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderDetailsFooter;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderDetailsHeader;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderMissingItem;
    /** @type {?} */
    FabDetailsListComponent.prototype.renderRow;
    /** @type {?} */
    FabDetailsListComponent.prototype.onActiveItemChanged;
    /** @type {?} */
    FabDetailsListComponent.prototype.onColumnHeaderClick;
    /** @type {?} */
    FabDetailsListComponent.prototype.onColumnHeaderContextMenu;
    /** @type {?} */
    FabDetailsListComponent.prototype.onColumnResize;
    /** @type {?} */
    FabDetailsListComponent.prototype.onDidUpdate;
    /** @type {?} */
    FabDetailsListComponent.prototype.onItemContextMenu;
    /** @type {?} */
    FabDetailsListComponent.prototype.onItemInvoked;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRowDidMount;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRowWillUnmount;
    /** @type {?} */
    FabDetailsListComponent.prototype.columns;
    /** @type {?} */
    FabDetailsListComponent.prototype.groups;
    /**
     * \@internal
     * @type {?}
     */
    FabDetailsListComponent.prototype.transformedColumns_;
    /** @type {?} */
    FabDetailsListComponent.prototype.transformedGroups_;
    /**
     * @type {?}
     * @private
     */
    FabDetailsListComponent.prototype._subscriptions;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderCheckbox;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderDetailsFooter;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderDetailsHeader;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderMissingItem;
    /** @type {?} */
    FabDetailsListComponent.prototype.onRenderRow;
}
/**
 * @record
 */
function IMissingItemRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.index;
    /** @type {?|undefined} */
    IMissingItemRenderContext.prototype.rowProps;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$8 = [
    DetailsListColumnDirective,
    DetailsListColumnRenderDirective,
    DetailsListColumnsDirective,
    DetailsListGroupsDirective,
    FabDetailsListComponent,
];
class FabDetailsListModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DetailsList', (/**
         * @return {?}
         */
        () => DetailsList));
    }
}
FabDetailsListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabGroupModule$1],
                declarations: components$8,
                exports: [...components$8, FabGroupModule$1],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDetailsListModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDialogComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onDismiss = new EventEmitter();
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    }
}
FabDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dialog',
                exportAs: 'fabDialog',
                template: `
    <!-- prettier-ignore -->
    <Dialog
      #reactNode
      [responsiveMode]="responsiveMode"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [isClickableOutsideFocusTrap]="isClickableOutsideFocusTrap"
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [dialogContentProps]="dialogContentProps"
      [hidden]="hidden"
      [modalProps]="modalProps"
      [minWidth]="minWidth"
      [maxWidth]="maxWidth"
      (onDismiss)="onDismissHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Dialog>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDialogComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDialogComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    responsiveMode: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    isClickableOutsideFocusTrap: [{ type: Input }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    dialogContentProps: [{ type: Input }],
    hidden: [{ type: Input }],
    modalProps: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    onDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDialogComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabDialogComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabDialogComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabDialogComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabDialogComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabDialogComponent.prototype.isClickableOutsideFocusTrap;
    /** @type {?} */
    FabDialogComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogComponent.prototype.styles;
    /** @type {?} */
    FabDialogComponent.prototype.theme;
    /** @type {?} */
    FabDialogComponent.prototype.dialogContentProps;
    /** @type {?} */
    FabDialogComponent.prototype.hidden;
    /** @type {?} */
    FabDialogComponent.prototype.modalProps;
    /** @type {?} */
    FabDialogComponent.prototype.minWidth;
    /** @type {?} */
    FabDialogComponent.prototype.maxWidth;
    /** @type {?} */
    FabDialogComponent.prototype.onDismiss;
}
class FabDialogFooterComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabDialogFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dialog-footer',
                exportAs: 'fabDialogFooter',
                template: `
    <DialogFooter #reactNode [componentRef]="componentRef" [styles]="styles" [theme]="theme" [className]="className">
      <ReactContent><ng-content></ng-content></ReactContent>
    </DialogFooter>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDialogFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDialogFooterComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogFooterComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogFooterComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogFooterComponent.prototype.styles;
    /** @type {?} */
    FabDialogFooterComponent.prototype.theme;
    /** @type {?} */
    FabDialogFooterComponent.prototype.className;
}
class FabDialogContentComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onDismiss = new EventEmitter();
    }
}
FabDialogContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dialog-content',
                exportAs: 'fabDialogContent',
                template: `
    <DialogContent
      #reactNode
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [isMultiline]="isMultiline"
      [showCloseButton]="showCloseButton"
      [topButtonsProps]="topButtonsProps"
      [className]="className"
      [subTextId]="subTextId"
      [subText]="subText"
      [titleId]="titleId"
      [title]="title"
      [responsiveMode]="responsiveMode"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [type]="type"
      [draggableHeaderClassName]="draggableHeaderClassName"
      (onDismiss)="onDismiss.emit($event && $event.nativeEvent)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </DialogContent>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDialogContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDialogContentComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    isMultiline: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    topButtonsProps: [{ type: Input }],
    className: [{ type: Input }],
    subTextId: [{ type: Input }],
    subText: [{ type: Input }],
    titleId: [{ type: Input }],
    title: [{ type: Input }],
    responsiveMode: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    type: [{ type: Input }],
    draggableHeaderClassName: [{ type: Input }],
    onDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDialogContentComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDialogContentComponent.prototype.componentRef;
    /** @type {?} */
    FabDialogContentComponent.prototype.styles;
    /** @type {?} */
    FabDialogContentComponent.prototype.theme;
    /** @type {?} */
    FabDialogContentComponent.prototype.isMultiline;
    /** @type {?} */
    FabDialogContentComponent.prototype.showCloseButton;
    /** @type {?} */
    FabDialogContentComponent.prototype.topButtonsProps;
    /** @type {?} */
    FabDialogContentComponent.prototype.className;
    /** @type {?} */
    FabDialogContentComponent.prototype.subTextId;
    /** @type {?} */
    FabDialogContentComponent.prototype.subText;
    /** @type {?} */
    FabDialogContentComponent.prototype.titleId;
    /** @type {?} */
    FabDialogContentComponent.prototype.title;
    /** @type {?} */
    FabDialogContentComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDialogContentComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabDialogContentComponent.prototype.type;
    /** @type {?} */
    FabDialogContentComponent.prototype.draggableHeaderClassName;
    /** @type {?} */
    FabDialogContentComponent.prototype.onDismiss;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$9 = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];
class FabDialogModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dialog', (/**
         * @return {?}
         */
        () => Dialog));
        registerElement('DialogContent', (/**
         * @return {?}
         */
        () => DialogContent));
        registerElement('DialogFooter', (/**
         * @return {?}
         */
        () => DialogFooter));
    }
}
FabDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$9,
                exports: components$9,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDialogModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabDividerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-vertical-divider',
                exportAs: 'fabVerticalDivider',
                template: `
    <VerticalDivider
      #reactNode
      [getClassNames]="getClassNames"
      [theme]="theme"
      [styles]="styles"
      [className]="className"
    >
    </VerticalDivider>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabDividerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    getClassNames: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDividerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDividerComponent.prototype.getClassNames;
    /** @type {?} */
    FabDividerComponent.prototype.theme;
    /** @type {?} */
    FabDividerComponent.prototype.styles;
    /** @type {?} */
    FabDividerComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$a = [FabDividerComponent];
class FabDividerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('VerticalDivider', (/**
         * @return {?}
         */
        () => VerticalDivider));
    }
}
FabDividerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$a,
                exports: components$a,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabDividerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
const declarations$2 = [
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
                declarations: declarations$2,
                exports: declarations$2,
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
class FabFabricComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabFabricComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-fabric',
                exportAs: 'fabFabric',
                template: `
    <Fabric #reactNode [componentRef]="componentRef" [theme]="theme">
      <ReactContent><ng-content></ng-content></ReactContent>
    </Fabric>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabFabricComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabFabricComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    theme: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabFabricComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabFabricComponent.prototype.componentRef;
    /** @type {?} */
    FabFabricComponent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$b = [FabFabricComponent];
class FabFabricModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Fabric', (/**
         * @return {?}
         */
        () => Fabric));
    }
}
FabFabricModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$b,
                exports: components$b,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabFabricModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GroupItemDirective extends ChangeableItemDirective {
    /**
     * @return {?}
     */
    get onChildItemChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
    }
    /**
     * @return {?}
     */
    get onItemsChanged() {
        return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.changeableItemsHelper = new ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
         * @param {?} nonSelf
         * @return {?}
         */
        nonSelf => {
            this.children = (/** @type {?} */ (nonSelf));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.changeableItemsHelper.destroy();
    }
}
GroupItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-group-item' },] }
];
GroupItemDirective.propDecorators = {
    groupItemsDirectives: [{ type: ContentChildren, args: [GroupItemDirective,] }],
    name: [{ type: Input }],
    startIndex: [{ type: Input }],
    count: [{ type: Input }],
    children: [{ type: Input }],
    level: [{ type: Input }],
    isCollapsed: [{ type: Input }],
    isShowingAll: [{ type: Input }],
    isDropEnabled: [{ type: Input }],
    data: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    hasMoreData: [{ type: Input }],
    onChildItemChanged: [{ type: Output }],
    onItemsChanged: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GroupItemDirective.prototype.groupItemsDirectives;
    /** @type {?} */
    GroupItemDirective.prototype.name;
    /** @type {?} */
    GroupItemDirective.prototype.startIndex;
    /** @type {?} */
    GroupItemDirective.prototype.count;
    /** @type {?} */
    GroupItemDirective.prototype.children;
    /** @type {?} */
    GroupItemDirective.prototype.level;
    /** @type {?} */
    GroupItemDirective.prototype.isCollapsed;
    /** @type {?} */
    GroupItemDirective.prototype.isShowingAll;
    /** @type {?} */
    GroupItemDirective.prototype.isDropEnabled;
    /** @type {?} */
    GroupItemDirective.prototype.data;
    /** @type {?} */
    GroupItemDirective.prototype.ariaLabel;
    /** @type {?} */
    GroupItemDirective.prototype.hasMoreData;
    /**
     * @type {?}
     * @private
     */
    GroupItemDirective.prototype.changeableItemsHelper;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$c = [GroupItemDirective];
class FabGroupModule {
}
FabGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$c,
                exports: components$c,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabGroupedListComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onGroupExpandStateChanged = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onRenderCell = this.onRenderCell.bind(this);
        this.onGroupExpandStateChangedHandler = this.onGroupExpandStateChangedHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderCell = this.createInputJsxRenderer(this.renderCell);
    }
    /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    onRenderCell(nestingDepth, item, index) {
        return this._renderCell({ nestingDepth, item, index });
    }
    /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    onGroupExpandStateChangedHandler(isSomeGroupExpanded) {
        this.onGroupExpandStateChanged.emit({
            isSomeGroupExpanded,
        });
    }
}
FabGroupedListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-grouped-list',
                exportAs: 'fabGroupedList',
                template: `
    <GroupedList
      #reactNode
      [componentRef]="componentRef"
      [theme]="theme"
      [styles]="styles"
      [className]="className"
      [compact]="compact"
      [dragDropEvents]="dragDropEvents"
      [dragDropHelper]="dragDropHelper"
      [eventsToRegister]="eventsToRegister"
      [groupProps]="groupProps"
      [groups]="groups"
      [items]="items"
      [listProps]="listProps"
      [selection]="selection"
      [selectionMode]="selectionMode"
      [viewport]="viewport"
      [usePageCache]="usePageCache"
      [shouldVirtualize]="shouldVirtualize"
      [getGroupHeight]="getGroupHeight"
      [RenderCell]="renderCell && onRenderCell"
      [GroupExpandStateChanged]="onGroupExpandStateChangedHandler"
    >
    </GroupedList>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabGroupedListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabGroupedListComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }],
    compact: [{ type: Input }],
    dragDropEvents: [{ type: Input }],
    dragDropHelper: [{ type: Input }],
    eventsToRegister: [{ type: Input }],
    groupProps: [{ type: Input }],
    groups: [{ type: Input }],
    items: [{ type: Input }],
    listProps: [{ type: Input }],
    selection: [{ type: Input }],
    selectionMode: [{ type: Input }],
    viewport: [{ type: Input }],
    usePageCache: [{ type: Input }],
    shouldVirtualize: [{ type: Input }],
    getGroupHeight: [{ type: Input }],
    renderCell: [{ type: Input }],
    onGroupExpandStateChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabGroupedListComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.componentRef;
    /** @type {?} */
    FabGroupedListComponent.prototype.theme;
    /** @type {?} */
    FabGroupedListComponent.prototype.styles;
    /** @type {?} */
    FabGroupedListComponent.prototype.className;
    /** @type {?} */
    FabGroupedListComponent.prototype.compact;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropEvents;
    /** @type {?} */
    FabGroupedListComponent.prototype.dragDropHelper;
    /** @type {?} */
    FabGroupedListComponent.prototype.eventsToRegister;
    /** @type {?} */
    FabGroupedListComponent.prototype.groupProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.groups;
    /** @type {?} */
    FabGroupedListComponent.prototype.items;
    /** @type {?} */
    FabGroupedListComponent.prototype.listProps;
    /** @type {?} */
    FabGroupedListComponent.prototype.selection;
    /** @type {?} */
    FabGroupedListComponent.prototype.selectionMode;
    /** @type {?} */
    FabGroupedListComponent.prototype.viewport;
    /** @type {?} */
    FabGroupedListComponent.prototype.usePageCache;
    /** @type {?} */
    FabGroupedListComponent.prototype.shouldVirtualize;
    /** @type {?} */
    FabGroupedListComponent.prototype.getGroupHeight;
    /** @type {?} */
    FabGroupedListComponent.prototype.renderCell;
    /** @type {?} */
    FabGroupedListComponent.prototype.onGroupExpandStateChanged;
    /**
     * @type {?}
     * @private
     */
    FabGroupedListComponent.prototype._renderCell;
}
/**
 * @record
 */
function ICellRenderContext() { }
if (false) {
    /** @type {?|undefined} */
    ICellRenderContext.prototype.nestingDepth;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.item;
    /** @type {?|undefined} */
    ICellRenderContext.prototype.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$d = [FabGroupedListComponent];
class FabGroupedListModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('GroupedList', (/**
         * @return {?}
         */
        () => GroupedList));
    }
}
FabGroupedListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$d,
                exports: components$d,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabGroupedListModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabExpandingCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onEnter = new EventEmitter();
        this.onLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
        this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
    }
}
FabExpandingCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-expanding-card',
                exportAs: 'fabExpandingCard',
                template: `
    <ExpandingCard
      [componentRef]="componentRef"
      [className]="className"
      [directionalHint]="directionalHint"
      [directionalHintFixed]="directionalHintFixed"
      [firstFocus]="firstFocus"
      [gapSpace]="gapSpace"
      [renderData]="renderData"
      [styles]="styles"
      [targetElement]="targetElement"
      [theme]="theme"
      [trapFocus]="trapFocus"
      [compactCardHeight]="compactCardHeight"
      [expandedCardHeight]="expandedCardHeight"
      [mode]="mode"
      [RenderCompactCard]="renderCompactCard && onRenderCompactCard"
      [RenderExpandedCard]="renderExpandedCard && onRenderExpandedCard"
      (onEnter)="onEnter.emit()"
      (onLeave)="onLeave.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </ExpandingCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabExpandingCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabExpandingCardComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: false },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintFixed: [{ type: Input }],
    firstFocus: [{ type: Input }],
    gapSpace: [{ type: Input }],
    renderData: [{ type: Input }],
    styles: [{ type: Input }],
    targetElement: [{ type: Input }],
    theme: [{ type: Input }],
    trapFocus: [{ type: Input }],
    compactCardHeight: [{ type: Input }],
    expandedCardHeight: [{ type: Input }],
    mode: [{ type: Input }],
    renderCompactCard: [{ type: Input }],
    renderExpandedCard: [{ type: Input }],
    onEnter: [{ type: Output }],
    onLeave: [{ type: Output }]
};
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
class FabHoverCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onCardVisible = new EventEmitter();
        this.onCardHide = new EventEmitter();
        this.onCardExpand = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandingCardOptions(value) {
        this._expandingCardOptions = value;
        if (value) {
            this.transformedExpandingCardProps = this._transformExpandingCardOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get expandingCardOptions() {
        return this._expandingCardOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set plainCardOptions(value) {
        this._plainCardOptions = value;
        if (value) {
            this.transformedPlainCardProps = this._transformPlainCardOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get plainCardOptions() {
        return this._plainCardOptions;
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformExpandingCardOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderCompactCard', 'renderExpandedCard');
        /** @type {?} */
        const compactCardRenderer = this.createInputJsxRenderer(options.renderCompactCard);
        /** @type {?} */
        const expandedCardRenderer = this.createInputJsxRenderer(options.renderExpandedCard);
        return Object.assign({}, sharedProperties, compactCardRenderer &&
            ((/** @type {?} */ ({ onRenderCompactCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => compactCardRenderer({ data })) }))), expandedCardRenderer &&
            ((/** @type {?} */ ({ onRenderExpandedCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => expandedCardRenderer({ data })) }))));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformPlainCardOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderPlainCard');
        /** @type {?} */
        const plainCardRenderer = this.createInputJsxRenderer(options.renderPlainCard);
        return Object.assign({}, sharedProperties, plainCardRenderer &&
            ((/** @type {?} */ ({ onRenderPlainCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                data => plainCardRenderer({ data })) }))));
    }
}
FabHoverCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-hover-card',
                exportAs: 'fabHoverCard',
                template: `
    <HoverCard
      #reactNode
      [componentRef]="componentRef"
      [className]="className"
      [theme]="theme"
      [type]="type"
      [expandingCardProps]="transformedExpandingCardProps"
      [plainCardProps]="transformedPlainCardProps"
      [setAriaDescribedBy]="setAriaDescribedBy"
      [cardOpenDelay]="cardOpenDelay"
      [cardDismissDelay]="cardDismissDelay"
      [expandedCardOpenDelay]="expandedCardOpenDelay"
      [sticky]="sticky"
      [instantOpenOnClick]="instantOpenOnClick"
      [styles]="styles"
      [target]="target"
      [eventListenerTarget]="eventListenerTarget"
      [trapFocus]="trapFocus"
      [shouldBlockHoverCard]="shouldBlockHoverCard"
      [setInitialFocus]="setInitialFocus"
      [openHotKey]="openHotKey"
      (onCardVisible)="onCardVisible.emit()"
      (onCardHide)="onCardHide.emit()"
      (onCardExpand)="onCardExpand.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </HoverCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabHoverCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabHoverCardComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    type: [{ type: Input }],
    setAriaDescribedBy: [{ type: Input }],
    cardOpenDelay: [{ type: Input }],
    cardDismissDelay: [{ type: Input }],
    expandedCardOpenDelay: [{ type: Input }],
    sticky: [{ type: Input }],
    instantOpenOnClick: [{ type: Input }],
    styles: [{ type: Input }],
    target: [{ type: Input }],
    eventListenerTarget: [{ type: Input }],
    trapFocus: [{ type: Input }],
    shouldBlockHoverCard: [{ type: Input }],
    setInitialFocus: [{ type: Input }],
    openHotKey: [{ type: Input }],
    expandingCardOptions: [{ type: Input }],
    plainCardOptions: [{ type: Input }],
    onCardVisible: [{ type: Output }],
    onCardHide: [{ type: Output }],
    onCardExpand: [{ type: Output }]
};
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
class FabPlainCardComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onEnter = new EventEmitter();
        this.onLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
    }
}
FabPlainCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-plain-card',
                exportAs: 'fabPlainCard',
                template: `
    <PlainCard
      [componentRef]="componentRef"
      [className]="className"
      [directionalHint]="directionalHint"
      [directionalHintFixed]="directionalHintFixed"
      [firstFocus]="firstFocus"
      [gapSpace]="gapSpace"
      [renderData]="renderData"
      [styles]="styles"
      [targetElement]="targetElement"
      [theme]="theme"
      [trapFocus]="trapFocus"
      [RenderPlainCard]="renderPlainCard && onRenderPlainCard"
      (onEnter)="onEnter.emit()"
      (onLeave)="onLeave.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PlainCard>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPlainCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPlainCardComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: false },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintFixed: [{ type: Input }],
    firstFocus: [{ type: Input }],
    gapSpace: [{ type: Input }],
    renderData: [{ type: Input }],
    styles: [{ type: Input }],
    targetElement: [{ type: Input }],
    theme: [{ type: Input }],
    trapFocus: [{ type: Input }],
    renderPlainCard: [{ type: Input }],
    onEnter: [{ type: Output }],
    onLeave: [{ type: Output }]
};
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
const components$e = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
class FabHoverCardModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ExpandingCard', (/**
         * @return {?}
         */
        () => ExpandingCard));
        registerElement('HoverCard', (/**
         * @return {?}
         */
        () => HoverCard));
        registerElement('PlainCard', (/**
         * @return {?}
         */
        () => PlainCard));
    }
}
FabHoverCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$e,
                exports: components$e,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabHoverCardModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabIconComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
    }
}
FabIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-icon',
                exportAs: 'fabIcon',
                template: `
    <Icon
      #reactNode
      [iconName]="iconName"
      [ariaLabel]="ariaLabel"
      [iconType]="iconType"
      [imageProps]="imageProps"
      [imageErrorAs]="imageErrorAs"
      [styles]="styles"
      [theme]="theme"
    >
    </Icon>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabIconComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    iconName: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    iconType: [{ type: Input }],
    imageProps: [{ type: Input }],
    imageErrorAs: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabIconComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabIconComponent.prototype.componentRef;
    /** @type {?} */
    FabIconComponent.prototype.iconName;
    /** @type {?} */
    FabIconComponent.prototype.ariaLabel;
    /** @type {?} */
    FabIconComponent.prototype.iconType;
    /** @type {?} */
    FabIconComponent.prototype.imageProps;
    /** @type {?} */
    FabIconComponent.prototype.imageErrorAs;
    /** @type {?} */
    FabIconComponent.prototype.styles;
    /** @type {?} */
    FabIconComponent.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$f = [FabIconComponent];
class FabIconModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Icon', (/**
         * @return {?}
         */
        () => Icon));
    }
}
FabIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$f,
                exports: components$f,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabIconModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabImageComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLoadingStateChange = new EventEmitter();
    }
}
FabImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-image',
                exportAs: 'fabImage',
                template: `
    <!-- prettier-ignore -->
    <Image
      #reactNode
      [alt]="alt"
      [crossOrigin]="crossOrigin"
      [height]="height"
      [sizes]="sizes"
      [src]="src"
      [srcSet]="srcSet"
      [useMap]="useMap"
      [width]="width"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [shouldFadeIn]="shouldFadeIn"
      [shouldStartVisible]="shouldStartVisible"
      [imageFit]="imageFit"
      [errorSrc]="errorSrc"
      [maximizeFrame]="maximizeFrame"
      (onLoadingStateChange)="onLoadingStateChange.emit($event)"
      [coverStyle]="coverStyle"
    >
    </Image>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabImageComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabImageComponent.propDecorators = {
    alt: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    height: [{ type: Input }],
    sizes: [{ type: Input }],
    src: [{ type: Input }],
    srcSet: [{ type: Input }],
    useMap: [{ type: Input }],
    width: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    shouldFadeIn: [{ type: Input }],
    shouldStartVisible: [{ type: Input }],
    imageFit: [{ type: Input }],
    errorSrc: [{ type: Input }],
    maximizeFrame: [{ type: Input }],
    coverStyle: [{ type: Input }],
    onLoadingStateChange: [{ type: Output }],
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /** @type {?} */
    FabImageComponent.prototype.alt;
    /** @type {?} */
    FabImageComponent.prototype.crossOrigin;
    /** @type {?} */
    FabImageComponent.prototype.height;
    /** @type {?} */
    FabImageComponent.prototype.sizes;
    /** @type {?} */
    FabImageComponent.prototype.src;
    /** @type {?} */
    FabImageComponent.prototype.srcSet;
    /** @type {?} */
    FabImageComponent.prototype.useMap;
    /** @type {?} */
    FabImageComponent.prototype.width;
    /** @type {?} */
    FabImageComponent.prototype.styles;
    /** @type {?} */
    FabImageComponent.prototype.theme;
    /** @type {?} */
    FabImageComponent.prototype.className;
    /** @type {?} */
    FabImageComponent.prototype.shouldFadeIn;
    /** @type {?} */
    FabImageComponent.prototype.shouldStartVisible;
    /** @type {?} */
    FabImageComponent.prototype.imageFit;
    /** @type {?} */
    FabImageComponent.prototype.errorSrc;
    /** @type {?} */
    FabImageComponent.prototype.maximizeFrame;
    /** @type {?} */
    FabImageComponent.prototype.coverStyle;
    /** @type {?} */
    FabImageComponent.prototype.onLoadingStateChange;
    /**
     * @type {?}
     * @protected
     */
    FabImageComponent.prototype.reactNodeRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$g = [FabImageComponent];
class FabImageModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Image', (/**
         * @return {?}
         */
        () => Image));
    }
}
FabImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$g,
                exports: components$g,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabImageModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabLinkComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.LinkType = Link;
    }
}
FabLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-link',
                exportAs: 'fabLink',
                template: `
    <Disguise
      #reactNode
      [disguiseRootAs]="LinkType"
      [href]="href"
      [type]="type"
      [download]="download"
      [hrefLang]="hrefLang"
      [media]="media"
      [rel]="rel"
      [target]="target"
      [autoFocus]="autoFocus"
      [form]="form"
      [formAction]="formAction"
      [formEncType]="formEncType"
      [formMethod]="formMethod"
      [formNoValidate]="formNoValidate"
      [formTarget]="formTarget"
      [name]="name"
      [value]="value"
      [as]="linkAs"
      [componentRef]="componentRef"
      [disabled]="disabled"
      [styles]="styles"
      [theme]="theme"
      [keytipProps]="keytipProps"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Disguise>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabLinkComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    href: [{ type: Input }],
    type: [{ type: Input }],
    download: [{ type: Input }],
    hrefLang: [{ type: Input }],
    media: [{ type: Input }],
    rel: [{ type: Input }],
    target: [{ type: Input }],
    autoFocus: [{ type: Input }],
    form: [{ type: Input }],
    formAction: [{ type: Input }],
    formEncType: [{ type: Input }],
    formMethod: [{ type: Input }],
    formNoValidate: [{ type: Input }],
    formTarget: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    componentRef: [{ type: Input }],
    disabled: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    linkAs: [{ type: Input, args: ['as',] }],
    keytipProps: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabLinkComponent.prototype.LinkType;
    /**
     * @type {?}
     * @protected
     */
    FabLinkComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabLinkComponent.prototype.href;
    /** @type {?} */
    FabLinkComponent.prototype.type;
    /** @type {?} */
    FabLinkComponent.prototype.download;
    /** @type {?} */
    FabLinkComponent.prototype.hrefLang;
    /** @type {?} */
    FabLinkComponent.prototype.media;
    /** @type {?} */
    FabLinkComponent.prototype.rel;
    /** @type {?} */
    FabLinkComponent.prototype.target;
    /** @type {?} */
    FabLinkComponent.prototype.autoFocus;
    /** @type {?} */
    FabLinkComponent.prototype.form;
    /** @type {?} */
    FabLinkComponent.prototype.formAction;
    /** @type {?} */
    FabLinkComponent.prototype.formEncType;
    /** @type {?} */
    FabLinkComponent.prototype.formMethod;
    /** @type {?} */
    FabLinkComponent.prototype.formNoValidate;
    /** @type {?} */
    FabLinkComponent.prototype.formTarget;
    /** @type {?} */
    FabLinkComponent.prototype.name;
    /** @type {?} */
    FabLinkComponent.prototype.value;
    /** @type {?} */
    FabLinkComponent.prototype.componentRef;
    /** @type {?} */
    FabLinkComponent.prototype.disabled;
    /** @type {?} */
    FabLinkComponent.prototype.styles;
    /** @type {?} */
    FabLinkComponent.prototype.theme;
    /** @type {?} */
    FabLinkComponent.prototype.linkAs;
    /** @type {?} */
    FabLinkComponent.prototype.keytipProps;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$h = [FabLinkComponent];
class FabLinkModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Link', (/**
         * @return {?}
         */
        () => Link));
    }
}
FabLinkModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$h,
                exports: components$h,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabLinkModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabMarqueeSelectionComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
    }
}
FabMarqueeSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-marquee-selection',
                exportAs: 'fabMarqueeSelection',
                template: `
    <MarqueeSelection
      #reactNode
      [selection]="selection"
      [className]="className"
      [componentRef]="componentRef"
      [isDraggingConstrainedToRoot]="isDraggingConstrainedToRoot"
      [isEnabled]="isEnabled"
      [rootProps]="rootProps"
      [styles]="styles"
      [theme]="theme"
      [ShouldStartSelection]="onShouldStartSelection"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MarqueeSelection>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMarqueeSelectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMarqueeSelectionComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    selection: [{ type: Input }],
    rootProps: [{ type: Input }],
    onShouldStartSelection: [{ type: Input }],
    isEnabled: [{ type: Input }],
    isDraggingConstrainedToRoot: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMarqueeSelectionComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.componentRef;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.selection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.rootProps;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.onShouldStartSelection;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isEnabled;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.isDraggingConstrainedToRoot;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.className;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.theme;
    /** @type {?} */
    FabMarqueeSelectionComponent.prototype.styles;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$i = [FabMarqueeSelectionComponent];
class FabMarqueeSelectionModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MarqueeSelection', (/**
         * @return {?}
         */
        () => MarqueeSelection));
    }
}
FabMarqueeSelectionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$i,
                exports: [...components$i],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabMarqueeSelectionModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabMessageBarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
        this.dismissable = null;
        this.onDismiss = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const onRenderActions = this.createRenderPropHandler(this.renderActions);
        this.actions = onRenderActions();
    }
    /**
     * @return {?}
     */
    get onDismissInternal() {
        if (!this.dismissable) {
            return null;
        }
        return (/**
         * @param {?} ev
         * @return {?}
         */
        ev => {
            this.onDismiss.emit(ev && ev.nativeEvent);
        });
    }
}
FabMessageBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-message-bar',
                exportAs: 'fabMessageBar',
                template: `
    <MessageBar
      #reactNode
      [componentRef]="componentRef"
      [messageBarType]="messageBarType"
      [isMultiline]="isMultiline"
      [dismissButtonAriaLabel]="dismissButtonAriaLabel"
      [truncated]="truncated"
      [overflowButtonAriaLabel]="overflowButtonAriaLabel"
      [className]="className"
      [theme]="theme"
      [styles]="styles"
      [Dismiss]="onDismissInternal"
      [actions]="renderActions && actions"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </MessageBar>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMessageBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMessageBarComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    messageBarType: [{ type: Input }],
    isMultiline: [{ type: Input }],
    dismissButtonAriaLabel: [{ type: Input }],
    truncated: [{ type: Input }],
    overflowButtonAriaLabel: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    renderActions: [{ type: Input }],
    dismissable: [{ type: Input }],
    onDismiss: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMessageBarComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.componentRef;
    /** @type {?} */
    FabMessageBarComponent.prototype.messageBarType;
    /** @type {?} */
    FabMessageBarComponent.prototype.isMultiline;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.truncated;
    /** @type {?} */
    FabMessageBarComponent.prototype.overflowButtonAriaLabel;
    /** @type {?} */
    FabMessageBarComponent.prototype.className;
    /** @type {?} */
    FabMessageBarComponent.prototype.theme;
    /** @type {?} */
    FabMessageBarComponent.prototype.styles;
    /** @type {?} */
    FabMessageBarComponent.prototype.renderActions;
    /** @type {?} */
    FabMessageBarComponent.prototype.dismissable;
    /** @type {?} */
    FabMessageBarComponent.prototype.onDismiss;
    /** @type {?} */
    FabMessageBarComponent.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$j = [FabMessageBarComponent];
class FabMessageBarModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MessageBar', (/**
         * @return {?}
         */
        () => MessageBar));
    }
}
FabMessageBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$j,
                exports: components$j,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabMessageBarModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabModalComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLayerDidMount = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onDismissed = new EventEmitter();
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    }
}
FabModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal',
                exportAs: 'fabModal',
                template: `
    <Modal
      #reactNode
      [responsiveMode]="responsiveMode"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [isClickableOutsideFocusTrap]="isClickableOutsideFocusTrap"
      [componentRef]="componentRef"
      [isOpen]="isOpen"
      [isDarkOverlay]="isDarkOverlay"
      [layerProps]="layerProps"
      [isBlocking]="isBlocking"
      [isModeless]="isModeless"
      [className]="className"
      [containerClassName]="containerClassName"
      [scrollableContentClassName]="scrollableContentClassName"
      [titleAriaId]="titleAriaId"
      [subtitleAriaId]="subtitleAriaId"
      [topOffsetFixed]="topOffsetFixed"
      [dragOptions]="dragOptions"
      [Dismiss]="onDismissHandler"
      (onLayerDidMount)="onLayerDidMount.emit()"
      (onDismissed)="onDismissed.emit()"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Modal>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabModalComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    responsiveMode: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    isClickableOutsideFocusTrap: [{ type: Input }],
    componentRef: [{ type: Input }],
    isOpen: [{ type: Input }],
    isDarkOverlay: [{ type: Input }],
    layerProps: [{ type: Input }],
    isBlocking: [{ type: Input }],
    isModeless: [{ type: Input }],
    className: [{ type: Input }],
    containerClassName: [{ type: Input }],
    scrollableContentClassName: [{ type: Input }],
    titleAriaId: [{ type: Input }],
    subtitleAriaId: [{ type: Input }],
    topOffsetFixed: [{ type: Input }],
    dragOptions: [{ type: Input }],
    onLayerDidMount: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onDismissed: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabModalComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabModalComponent.prototype.responsiveMode;
    /** @type {?} */
    FabModalComponent.prototype.elementToFocusOnDismiss;
    /** @type {?} */
    FabModalComponent.prototype.ignoreExternalFocusing;
    /** @type {?} */
    FabModalComponent.prototype.forceFocusInsideTrap;
    /** @type {?} */
    FabModalComponent.prototype.firstFocusableSelector;
    /** @type {?} */
    FabModalComponent.prototype.closeButtonAriaLabel;
    /** @type {?} */
    FabModalComponent.prototype.isClickableOutsideFocusTrap;
    /** @type {?} */
    FabModalComponent.prototype.componentRef;
    /** @type {?} */
    FabModalComponent.prototype.isOpen;
    /** @type {?} */
    FabModalComponent.prototype.isDarkOverlay;
    /** @type {?} */
    FabModalComponent.prototype.layerProps;
    /** @type {?} */
    FabModalComponent.prototype.isBlocking;
    /** @type {?} */
    FabModalComponent.prototype.isModeless;
    /** @type {?} */
    FabModalComponent.prototype.className;
    /** @type {?} */
    FabModalComponent.prototype.containerClassName;
    /** @type {?} */
    FabModalComponent.prototype.scrollableContentClassName;
    /** @type {?} */
    FabModalComponent.prototype.titleAriaId;
    /** @type {?} */
    FabModalComponent.prototype.subtitleAriaId;
    /** @type {?} */
    FabModalComponent.prototype.topOffsetFixed;
    /** @type {?} */
    FabModalComponent.prototype.dragOptions;
    /** @type {?} */
    FabModalComponent.prototype.onLayerDidMount;
    /** @type {?} */
    FabModalComponent.prototype.onDismiss;
    /** @type {?} */
    FabModalComponent.prototype.onDismissed;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$k = [FabModalComponent];
class FabModalModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Modal', (/**
         * @return {?}
         */
        () => Modal));
    }
}
FabModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$k,
                exports: components$k,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabModalModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPanelComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onLightDismissClick = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpened = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onDismissed = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        this.onRenderHeader = this.onRenderHeader.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderNavigation = this.createRenderPropHandler(this.renderNavigation);
        this.onRenderNavigationContent = this.createRenderPropHandler(this.renderNavigationContent);
        this._renderHeader = this.createInputJsxRenderer(this.renderHeader);
        this.onRenderBody = this.createRenderPropHandler(this.renderBody);
        this.onRenderFooter = this.createRenderPropHandler(this.renderFooter);
        this.onRenderFooterContent = this.createRenderPropHandler(this.renderFooterContent);
    }
    /**
     * @param {?=} props
     * @param {?=} defaultRender
     * @param {?=} headerTextId
     * @return {?}
     */
    onRenderHeader(props, defaultRender, headerTextId) {
        if (!this.renderHeader) {
            return typeof defaultRender === 'function' ? defaultRender(props, defaultRender, headerTextId) : null;
        }
        return this._renderHeader({ props, headerTextId });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onDismissHandler(ev) {
        this.onDismiss.emit({
            ev: ev && ev.nativeEvent,
        });
    }
}
FabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-panel',
                exportAs: 'fabPanel',
                template: `
    <Panel
      #reactNode
      [componentRef]="componentRef"
      [isOpen]="isOpen"
      [hasCloseButton]="hasCloseButton"
      [isLightDismiss]="isLightDismiss"
      [isHiddenOnDismiss]="isHiddenOnDismiss"
      [isBlocking]="isBlocking"
      [isFooterAtBottom]="isFooterAtBottom"
      [headerText]="headerText"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [type]="type"
      [customWidth]="customWidth"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [headerClassName]="headerClassName"
      [elementToFocusOnDismiss]="elementToFocusOnDismiss"
      [ignoreExternalFocusing]="ignoreExternalFocusing"
      [forceFocusInsideTrap]="forceFocusInsideTrap"
      [firstFocusableSelector]="firstFocusableSelector"
      [focusTrapZoneProps]="focusTrapZoneProps"
      [layerProps]="layerProps"
      [componentId]="componentId"
      [RenderHeader]="renderHeader && onRenderHeader"
      [RenderNavigation]="renderNavigation && onRenderNavigation"
      [RenderNavigationContent]="renderNavigationContent && onRenderNavigationContent"
      [RenderBody]="renderBody && onRenderBody"
      [RenderFooter]="renderFooter && onRenderFooter"
      [RenderFooterContent]="renderFooterContent && onRenderFooterContent"
      [Dismiss]="onDismissHandler"
      (onOpen)="onOpen.emit($event)"
      (onOpened)="onOpened.emit($event)"
      (onDismissed)="onDismissed.emit($event)"
      (onLightDismissClick)="onLightDismissClick.emit($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Panel>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPanelComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    isOpen: [{ type: Input }],
    hasCloseButton: [{ type: Input }],
    isLightDismiss: [{ type: Input }],
    isHiddenOnDismiss: [{ type: Input }],
    isBlocking: [{ type: Input }],
    isFooterAtBottom: [{ type: Input }],
    headerText: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    type: [{ type: Input }],
    customWidth: [{ type: Input }],
    closeButtonAriaLabel: [{ type: Input }],
    headerClassName: [{ type: Input }],
    elementToFocusOnDismiss: [{ type: Input }],
    ignoreExternalFocusing: [{ type: Input }],
    forceFocusInsideTrap: [{ type: Input }],
    firstFocusableSelector: [{ type: Input }],
    focusTrapZoneProps: [{ type: Input }],
    layerProps: [{ type: Input }],
    componentId: [{ type: Input }],
    renderNavigation: [{ type: Input }],
    renderNavigationContent: [{ type: Input }],
    renderHeader: [{ type: Input }],
    renderBody: [{ type: Input }],
    renderFooter: [{ type: Input }],
    renderFooterContent: [{ type: Input }],
    onLightDismissClick: [{ type: Output }],
    onOpen: [{ type: Output }],
    onOpened: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onDismissed: [{ type: Output }]
};
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
const components$l = [FabPanelComponent];
class FabPanelModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Panel', (/**
         * @return {?}
         */
        () => Panel));
    }
}
FabPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$l,
                exports: components$l,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPanelModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TProps
 */
class FabPersonaBaseComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onPhotoLoadingStateChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
        this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
    }
}
FabPersonaBaseComponent.propDecorators = {
    text: [{ type: Input }],
    size: [{ type: Input }],
    imageShouldFadeIn: [{ type: Input }],
    imageShouldStartVisible: [{ type: Input }],
    imageUrl: [{ type: Input }],
    imageAlt: [{ type: Input }],
    imageInitials: [{ type: Input }],
    allowPhoneInitials: [{ type: Input }],
    initialsColor: [{ type: Input }],
    presence: [{ type: Input }],
    isOutOfOffice: [{ type: Input }],
    secondaryText: [{ type: Input }],
    tertiaryText: [{ type: Input }],
    optionalText: [{ type: Input }],
    hidePersonaDetails: [{ type: Input }],
    showSecondaryText: [{ type: Input }],
    showUnknownPersonaCoin: [{ type: Input }],
    showInitialsUntilImageLoads: [{ type: Input }],
    coinSize: [{ type: Input }],
    theme: [{ type: Input }],
    renderCoin: [{ type: Input }],
    renderInitials: [{ type: Input }],
    onPhotoLoadingStateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabPersonaBaseComponent.prototype.text;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.size;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageShouldFadeIn;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageShouldStartVisible;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageUrl;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageAlt;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.imageInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.allowPhoneInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.initialsColor;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.presence;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.isOutOfOffice;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.secondaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.tertiaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.optionalText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.hidePersonaDetails;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showSecondaryText;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showUnknownPersonaCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.showInitialsUntilImageLoads;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.coinSize;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.theme;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.renderCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.renderInitials;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onPhotoLoadingStateChange;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onRenderCoin;
    /** @type {?} */
    FabPersonaBaseComponent.prototype.onRenderInitials;
}
class FabPersonaComponent extends FabPersonaBaseComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
        this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
        this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
        this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
    }
}
FabPersonaComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-persona',
                exportAs: 'fabPersona',
                template: `
    <Persona
      #reactNode
      [text]="text"
      [size]="size"
      [imageShouldFadeIn]="imageShouldFadeIn"
      [imageShouldStartVisible]="imageShouldStartVisible"
      [imageUrl]="imageUrl"
      [imageAlt]="imageAlt"
      [imageInitials]="imageInitials"
      [allowPhoneInitials]="allowPhoneInitials"
      [initialsColor]="initialsColor"
      [presence]="presence"
      [isOutOfOffice]="isOutOfOffice"
      [secondaryText]="secondaryText"
      [tertiaryText]="tertiaryText"
      [optionalText]="optionalText"
      [hidePersonaDetails]="hidePersonaDetails"
      [showSecondaryText]="showSecondaryText"
      [showUnknownPersonaCoin]="showUnknownPersonaCoin"
      [showInitialsUntilImageLoads]="showInitialsUntilImageLoads"
      [coinSize]="coinSize"
      [theme]="theme"
      [componentRef]="componentRef"
      [className]="className"
      [styles]="styles"
      [coinProps]="coinProps"
      [RenderInitials]="renderInitials && onRenderInitials"
      [RenderCoin]="renderCoin && onRenderCoin"
      [RenderPrimaryText]="renderPrimaryText && onRenderPrimaryText"
      [RenderSecondaryText]="renderSecondaryText && onRenderSecondaryText"
      [RenderTertiaryText]="renderTertiaryText && onRenderTertiaryText"
      [RenderOptionalText]="renderOptionalText && onRenderOptionalText"
      (onPhotoLoadingStateChange)="onPhotoLoadingStateChange.emit($event)"
    >
    </Persona>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPersonaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPersonaComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    className: [{ type: Input }],
    styles: [{ type: Input }],
    coinProps: [{ type: Input }],
    renderPrimaryText: [{ type: Input }],
    renderSecondaryText: [{ type: Input }],
    renderTertiaryText: [{ type: Input }],
    renderOptionalText: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPersonaComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPersonaComponent.prototype.componentRef;
    /** @type {?} */
    FabPersonaComponent.prototype.className;
    /** @type {?} */
    FabPersonaComponent.prototype.styles;
    /** @type {?} */
    FabPersonaComponent.prototype.coinProps;
    /** @type {?} */
    FabPersonaComponent.prototype.renderPrimaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderSecondaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderTertiaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.renderOptionalText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderPrimaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderSecondaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderTertiaryText;
    /** @type {?} */
    FabPersonaComponent.prototype.onRenderOptionalText;
}
class FabPersonaCoinComponent extends FabPersonaBaseComponent {
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
FabPersonaCoinComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-persona-coin',
                exportAs: 'fabPersonaCoin',
                template: `
    <PersonaCoin
      #reactNode
      [text]="text"
      [size]="size"
      [imageShouldFadeIn]="imageShouldFadeIn"
      [imageShouldStartVisible]="imageShouldStartVisible"
      [imageUrl]="imageUrl"
      [imageAlt]="imageAlt"
      [imageInitials]="imageInitials"
      [allowPhoneInitials]="allowPhoneInitials"
      [initialsColor]="initialsColor"
      [presence]="presence"
      [isOutOfOffice]="isOutOfOffice"
      [secondaryText]="secondaryText"
      [tertiaryText]="tertiaryText"
      [optionalText]="optionalText"
      [hidePersonaDetails]="hidePersonaDetails"
      [showUnknownPersonaCoin]="showUnknownPersonaCoin"
      [showInitialsUntilImageLoads]="showInitialsUntilImageLoads"
      [coinSize]="coinSize"
      [theme]="theme"
      [componentRef]="componentRef"
      [styles]="styles"
      [className]="className"
      [RenderInitials]="renderInitials && onRenderInitials"
      [RenderCoin]="renderCoin && onRenderCoin"
      (onPhotoLoadingStateChange)="onPhotoLoadingStateChange.emit($event)"
    >
    </PersonaCoin>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPersonaCoinComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPersonaCoinComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPersonaCoinComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.componentRef;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.styles;
    /** @type {?} */
    FabPersonaCoinComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$m = [FabPersonaComponent, FabPersonaCoinComponent];
class FabPersonaModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Persona', (/**
         * @return {?}
         */
        () => Persona));
        registerElement('PersonaCoin', (/**
         * @return {?}
         */
        () => PersonaCoin));
    }
}
FabPersonaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$m,
                exports: components$m,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPersonaModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPivotItemComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItemLink = this.createRenderPropHandler(this.renderItemLink);
    }
}
FabPivotItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-pivot-item',
                exportAs: 'fabPivotItem',
                template: `
    <PivotItem
      #reactNode
      [componentRef]="componentRef"
      [headerText]="headerText"
      [headerButtonProps]="headerButtonProps"
      [itemKey]="itemKey"
      [ariaLabel]="ariaLabel"
      [itemCount]="itemCount"
      [itemIcon]="itemIcon"
      [keytipProps]="keytipProps"
      [RenderItemLink]="renderItemLink && onRenderItemLink"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </PivotItem>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPivotItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPivotItemComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    disabled: [{ type: Input }],
    componentRef: [{ type: Input }],
    headerText: [{ type: Input }],
    headerButtonProps: [{ type: Input }],
    itemKey: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    itemCount: [{ type: Input }],
    itemIcon: [{ type: Input }],
    keytipProps: [{ type: Input }],
    renderItemLink: [{ type: Input }]
};
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "componentRef", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "headerText", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "headerButtonProps", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "itemKey", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "ariaLabel", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "itemCount", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "itemIcon", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "keytipProps", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Object)
], FabPivotItemComponent.prototype, "renderItemLink", void 0);
__decorate([
    passProp(),
    __metadata("design:type", Function)
], FabPivotItemComponent.prototype, "onRenderItemLink", void 0);
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
class FabPivotComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.PivotType = Pivot;
        this.PivotItemType = PivotItem;
        this.onLinkClick = new EventEmitter();
        this.onLinkClickHandler = this.onLinkClickHandler.bind(this);
    }
    /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    onLinkClickHandler(item, ev) {
        this.onLinkClick.emit({
            ev: ev && ev.nativeEvent,
            item: item,
        });
    }
}
FabPivotComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-pivot',
                exportAs: 'fabPivot',
                template: `
    <Disguise
      #reactNode
      [disguiseRootAs]="PivotType"
      [disguiseChildrenAs]="PivotItemType"
      [ngChildComponents]="children || pivotItems?.toArray()"
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [className]="className"
      [defaultSelectedKey]="defaultSelectedKey"
      [defaultSelectedIndex]="defaultSelectedIndex"
      [selectedKey]="selectedKey"
      [linkSize]="linkSize"
      [linkFormat]="linkFormat"
      [headersOnly]="headersOnly"
      [getTabId]="getTabId"
      [LinkClick]="onLinkClickHandler"
    >
      <ReactContent><ng-content select="fab-pivot-item"></ng-content></ReactContent>
    </Disguise>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPivotComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabPivotComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    pivotItems: [{ type: ContentChildren, args: [FabPivotItemComponent,] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    className: [{ type: Input }],
    defaultSelectedKey: [{ type: Input }],
    defaultSelectedIndex: [{ type: Input }],
    selectedKey: [{ type: Input }],
    linkSize: [{ type: Input }],
    linkFormat: [{ type: Input }],
    headersOnly: [{ type: Input }],
    getTabId: [{ type: Input }],
    children: [{ type: Input }],
    onLinkClick: [{ type: Output }]
};
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
const components$n = [FabPivotComponent, FabPivotItemComponent];
class FabPivotModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Pivot', (/**
         * @return {?}
         */
        () => Pivot));
        registerElement('PivotItem', (/**
         * @return {?}
         */
        () => PivotItem));
    }
}
FabPivotModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$n,
                exports: components$n,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPivotModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSearchBoxComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone });
        this.onChange = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onEscape = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onClearHandler = this.onClearHandler.bind(this);
        this.onEscapeHandler = this.onEscapeHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clearButtonOptions(value) {
        this._clearButtonOptions = value;
        if (value) {
            this.clearButtonProps = this._transformButtonOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get clearButtonOptions() {
        return this._clearButtonOptions;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onChangeHandler(newValue) {
        this.onChange.emit({
            newValue,
        });
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onSearchHandler(newValue) {
        this.onSearch.emit({
            newValue,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onClearHandler(ev) {
        this.onClear.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onEscapeHandler(ev) {
        this.onEscape.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformButtonOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
        /** @type {?} */
        const iconRenderer = this.createInputJsxRenderer(options.renderIcon);
        /** @type {?} */
        const textRenderer = this.createInputJsxRenderer(options.renderText);
        /** @type {?} */
        const descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
        /** @type {?} */
        const ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
        /** @type {?} */
        const childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
        /** @type {?} */
        const menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
        return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
             * @param {?} props
             * @return {?}
             */
            props => iconRenderer(props)) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
             * @param {?} props
             * @return {?}
             */
            props => textRenderer(props)) }))), descriptionRenderer &&
            ((/** @type {?} */ ({ onRenderDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => descriptionRenderer(props)) }))), ariaDescriptionRenderer &&
            ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => ariaDescriptionRenderer(props)) }))), childrenRenderer &&
            ((/** @type {?} */ ({ onRenderChildren: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => childrenRenderer(props)) }))), menuIconRenderer &&
            ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                props => menuIconRenderer(props)) }))));
    }
}
FabSearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-search-box',
                exportAs: 'fabSearchBox',
                template: `
    <SearchBox
      #reactNode
      [componentRef]="componentRef"
      [placeholder]="placeholder"
      [value]="value"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [clearButtonProps]="clearButtonProps"
      [iconProps]="iconProps"
      [underlined]="underlined"
      [theme]="theme"
      [styles]="styles"
      [disableAnimation]="disableAnimation"
      [Change]="onChangeHandler"
      [Search]="onSearchHandler"
      [Clear]="onClearHandler"
      [Escape]="onEscapeHandler"
    >
    </SearchBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSearchBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabSearchBoxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    className: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    underlined: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    disableAnimation: [{ type: Input }],
    clearButtonOptions: [{ type: Input }],
    iconProps: [{ type: Input }],
    onChange: [{ type: Output }],
    onSearch: [{ type: Output }],
    onClear: [{ type: Output }],
    onEscape: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSearchBoxComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSearchBoxComponent.prototype.componentRef;
    /** @type {?} */
    FabSearchBoxComponent.prototype.placeholder;
    /** @type {?} */
    FabSearchBoxComponent.prototype.value;
    /** @type {?} */
    FabSearchBoxComponent.prototype.className;
    /** @type {?} */
    FabSearchBoxComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSearchBoxComponent.prototype.underlined;
    /** @type {?} */
    FabSearchBoxComponent.prototype.theme;
    /** @type {?} */
    FabSearchBoxComponent.prototype.styles;
    /** @type {?} */
    FabSearchBoxComponent.prototype.disableAnimation;
    /** @type {?} */
    FabSearchBoxComponent.prototype.iconProps;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onChange;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onSearch;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onClear;
    /** @type {?} */
    FabSearchBoxComponent.prototype.onEscape;
    /** @type {?} */
    FabSearchBoxComponent.prototype.clearButtonProps;
    /**
     * @type {?}
     * @private
     */
    FabSearchBoxComponent.prototype._clearButtonOptions;
}
/**
 * @record
 */
function IButtonOptions() { }
if (false) {
    /** @type {?} */
    IButtonOptions.prototype.renderIcon;
    /** @type {?} */
    IButtonOptions.prototype.renderText;
    /** @type {?} */
    IButtonOptions.prototype.renderDescription;
    /** @type {?} */
    IButtonOptions.prototype.renderAriaDescription;
    /** @type {?} */
    IButtonOptions.prototype.renderChildren;
    /** @type {?} */
    IButtonOptions.prototype.renderMenuIcon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$o = [FabSearchBoxComponent];
class FabSearchBoxModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SearchBox', (/**
         * @return {?}
         */
        () => SearchBox));
    }
}
FabSearchBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$o,
                exports: components$o,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabSearchBoxModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabShimmerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderCustomElementsGroup(value) {
        this._renderCustomElementsGroup = value;
        if (value) {
            this.customElementsGroup = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderCustomElementsGroup() {
        return this._renderCustomElementsGroup;
    }
}
FabShimmerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-shimmer',
                exportAs: 'fabShimmer',
                template: `
    <Shimmer
      #reactNode
      [componentRef]="componentRef"
      [width]="width"
      [isDataLoaded]="isDataLoaded"
      [shimmerElements]="shimmerElements"
      [ariaLabel]="ariaLabel"
      [styles]="styles"
      [className]="className"
      [theme]="theme"
      [shimmerColors]="shimmerColors"
      [customElementsGroup]="customElementsGroup"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Shimmer>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabShimmerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabShimmerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    width: [{ type: Input }],
    isDataLoaded: [{ type: Input }],
    shimmerElements: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    styles: [{ type: Input }],
    className: [{ type: Input }],
    theme: [{ type: Input }],
    shimmerColors: [{ type: Input }],
    renderCustomElementsGroup: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabShimmerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabShimmerComponent.prototype.componentRef;
    /** @type {?} */
    FabShimmerComponent.prototype.width;
    /** @type {?} */
    FabShimmerComponent.prototype.isDataLoaded;
    /** @type {?} */
    FabShimmerComponent.prototype.shimmerElements;
    /** @type {?} */
    FabShimmerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabShimmerComponent.prototype.styles;
    /** @type {?} */
    FabShimmerComponent.prototype.className;
    /** @type {?} */
    FabShimmerComponent.prototype.theme;
    /** @type {?} */
    FabShimmerComponent.prototype.shimmerColors;
    /** @type {?} */
    FabShimmerComponent.prototype.customElementsGroup;
    /**
     * @type {?}
     * @private
     */
    FabShimmerComponent.prototype._renderCustomElementsGroup;
}
class FabShimmerElementsGroupComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
    }
}
FabShimmerElementsGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-shimmer-elements-group',
                exportAs: 'fabShimmerElementsGroup',
                template: `
    <ShimmerElementsGroup
      #reactNode
      [componentRef]="componentRef"
      [rowHeight]="rowHeight"
      [shimmerElements]="shimmerElements"
      [flexWrap]="flexWrap"
      [width]="width"
      [theme]="theme"
      [backgroundColor]="backgroundColor"
      [styles]="styles"
    >
    </ShimmerElementsGroup>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabShimmerElementsGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabShimmerElementsGroupComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    rowHeight: [{ type: Input }],
    shimmerElements: [{ type: Input }],
    flexWrap: [{ type: Input }],
    width: [{ type: Input }],
    theme: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    styles: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabShimmerElementsGroupComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.componentRef;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.rowHeight;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.shimmerElements;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.flexWrap;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.width;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.theme;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.backgroundColor;
    /** @type {?} */
    FabShimmerElementsGroupComponent.prototype.styles;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$p = [FabShimmerComponent, FabShimmerElementsGroupComponent];
class FabShimmerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Shimmer', (/**
         * @return {?}
         */
        () => Shimmer));
        registerElement('ShimmerElementsGroup', (/**
         * @return {?}
         */
        () => ShimmerElementsGroup));
    }
}
FabShimmerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$p,
                exports: components$p,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabShimmerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSliderComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChange = new EventEmitter();
        this.onChanged = new EventEmitter();
        this.onChangedHandler = this.onChangedHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onChangedHandler(event, value) {
        this.onChanged.emit({
            event,
            value,
        });
    }
}
FabSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-slider',
                exportAs: 'fabSlider',
                template: `
    <Slider
      #reactNode
      [componentRef]="componentRef"
      [styles]="styles"
      [theme]="theme"
      [label]="label"
      [defaultValue]="defaultValue"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [showValue]="showValue"
      [ariaLabel]="ariaLabel"
      [ariaValueText]="ariaValueText"
      [vertical]="vertical"
      [disabled]="disabled"
      [className]="className"
      [buttonProps]="buttonProps"
      [valueFormat]="valueFormat"
      [originFromZero]="originFromZero"
      [Changed]="onChangedHandler"
      (onChange)="onChange.emit($event)"
    >
    </Slider>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSliderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabSliderComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    label: [{ type: Input }],
    defaultValue: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    showValue: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaValueText: [{ type: Input }],
    vertical: [{ type: Input }],
    disabled: [{ type: Input }],
    className: [{ type: Input }],
    buttonProps: [{ type: Input }],
    valueFormat: [{ type: Input }],
    originFromZero: [{ type: Input }],
    onChange: [{ type: Output }],
    onChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSliderComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSliderComponent.prototype.componentRef;
    /** @type {?} */
    FabSliderComponent.prototype.styles;
    /** @type {?} */
    FabSliderComponent.prototype.theme;
    /** @type {?} */
    FabSliderComponent.prototype.label;
    /** @type {?} */
    FabSliderComponent.prototype.defaultValue;
    /** @type {?} */
    FabSliderComponent.prototype.value;
    /** @type {?} */
    FabSliderComponent.prototype.min;
    /** @type {?} */
    FabSliderComponent.prototype.max;
    /** @type {?} */
    FabSliderComponent.prototype.step;
    /** @type {?} */
    FabSliderComponent.prototype.showValue;
    /** @type {?} */
    FabSliderComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSliderComponent.prototype.ariaValueText;
    /** @type {?} */
    FabSliderComponent.prototype.vertical;
    /** @type {?} */
    FabSliderComponent.prototype.disabled;
    /** @type {?} */
    FabSliderComponent.prototype.className;
    /** @type {?} */
    FabSliderComponent.prototype.buttonProps;
    /** @type {?} */
    FabSliderComponent.prototype.valueFormat;
    /** @type {?} */
    FabSliderComponent.prototype.originFromZero;
    /** @type {?} */
    FabSliderComponent.prototype.onChange;
    /** @type {?} */
    FabSliderComponent.prototype.onChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$q = [FabSliderComponent];
class FabSliderModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Slider', (/**
         * @return {?}
         */
        () => Slider));
    }
}
FabSliderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$q,
                exports: components$q,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabSliderModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSpinButtonComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
}
FabSpinButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-spin-button',
                exportAs: 'fabSpinButton',
                template: `
    <SpinButton
      #reactNode
      [componentRef]="componentRef"
      [defaultValue]="defaultValue"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [ariaLabel]="ariaLabel"
      [ariaDescribedBy]="ariaDescribedBy"
      [title]="title"
      [disabled]="disabled"
      [className]="className"
      [label]="label"
      [labelPosition]="labelPosition"
      [iconProps]="iconProps"
      [incrementButtonIcon]="incrementButtonIcon"
      [decrementButtonIcon]="decrementButtonIcon"
      [styles]="styles"
      [getClassNames]="getClassNames"
      [upArrowButtonStyles]="upArrowButtonStyles"
      [downArrowButtonStyles]="downArrowButtonStyles"
      [theme]="theme"
      [incrementButtonAriaLabel]="incrementButtonAriaLabel"
      [decrementButtonAriaLabel]="decrementButtonAriaLabel"
      [precision]="precision"
      [ariaPositionInSet]="ariaPositionInSet"
      [ariaSetSize]="ariaSetSize"
      [ariaValueNow]="ariaValueNow"
      [ariaValueText]="ariaValueText"
      [keytipProps]="keytipProps"
      [Validate]="validate"
      [Increment]="increment"
      [Decrement]="decrement"
      (onFocus)="onFocus.emit($event)"
      (onBlur)="onBlur.emit($event)"
    >
    </SpinButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSpinButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabSpinButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    defaultValue: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    className: [{ type: Input }],
    label: [{ type: Input }],
    labelPosition: [{ type: Input }],
    iconProps: [{ type: Input }],
    incrementButtonIcon: [{ type: Input }],
    decrementButtonIcon: [{ type: Input }],
    styles: [{ type: Input }],
    getClassNames: [{ type: Input }],
    upArrowButtonStyles: [{ type: Input }],
    downArrowButtonStyles: [{ type: Input }],
    theme: [{ type: Input }],
    incrementButtonAriaLabel: [{ type: Input }],
    decrementButtonAriaLabel: [{ type: Input }],
    precision: [{ type: Input }],
    ariaPositionInSet: [{ type: Input }],
    ariaSetSize: [{ type: Input }],
    ariaValueNow: [{ type: Input }],
    ariaValueText: [{ type: Input }],
    keytipProps: [{ type: Input }],
    validate: [{ type: Input }],
    increment: [{ type: Input }],
    decrement: [{ type: Input }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSpinButtonComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSpinButtonComponent.prototype.componentRef;
    /** @type {?} */
    FabSpinButtonComponent.prototype.defaultValue;
    /** @type {?} */
    FabSpinButtonComponent.prototype.value;
    /** @type {?} */
    FabSpinButtonComponent.prototype.min;
    /** @type {?} */
    FabSpinButtonComponent.prototype.max;
    /** @type {?} */
    FabSpinButtonComponent.prototype.step;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    FabSpinButtonComponent.prototype.title;
    /** @type {?} */
    FabSpinButtonComponent.prototype.disabled;
    /** @type {?} */
    FabSpinButtonComponent.prototype.className;
    /** @type {?} */
    FabSpinButtonComponent.prototype.label;
    /** @type {?} */
    FabSpinButtonComponent.prototype.labelPosition;
    /** @type {?} */
    FabSpinButtonComponent.prototype.iconProps;
    /** @type {?} */
    FabSpinButtonComponent.prototype.incrementButtonIcon;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrementButtonIcon;
    /** @type {?} */
    FabSpinButtonComponent.prototype.styles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.getClassNames;
    /** @type {?} */
    FabSpinButtonComponent.prototype.upArrowButtonStyles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.downArrowButtonStyles;
    /** @type {?} */
    FabSpinButtonComponent.prototype.theme;
    /** @type {?} */
    FabSpinButtonComponent.prototype.incrementButtonAriaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrementButtonAriaLabel;
    /** @type {?} */
    FabSpinButtonComponent.prototype.precision;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaPositionInSet;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaSetSize;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaValueNow;
    /** @type {?} */
    FabSpinButtonComponent.prototype.ariaValueText;
    /** @type {?} */
    FabSpinButtonComponent.prototype.keytipProps;
    /** @type {?} */
    FabSpinButtonComponent.prototype.validate;
    /** @type {?} */
    FabSpinButtonComponent.prototype.increment;
    /** @type {?} */
    FabSpinButtonComponent.prototype.decrement;
    /** @type {?} */
    FabSpinButtonComponent.prototype.onFocus;
    /** @type {?} */
    FabSpinButtonComponent.prototype.onBlur;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$r = [FabSpinButtonComponent];
class FabSpinButtonModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SpinButton', (/**
         * @return {?}
         */
        () => SpinButton));
    }
}
FabSpinButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$r,
                exports: components$r,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabSpinButtonModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabSpinnerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-spinner',
                exportAs: 'fabSpinner',
                template: `
    <Spinner
      #reactNode
      [componentRef]="componentRef"
      [type]="type"
      [size]="size"
      [label]="label"
      [className]="className"
      [ariaLive]="ariaLive"
      [ariaLabel]="ariaLabel"
      [theme]="theme"
      [styles]="styles"
      [labelPosition]="labelPosition"
    >
    </Spinner>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabSpinnerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    type: [{ type: Input }],
    size: [{ type: Input }],
    label: [{ type: Input }],
    className: [{ type: Input }],
    ariaLive: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    labelPosition: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSpinnerComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabSpinnerComponent.prototype.componentRef;
    /** @type {?} */
    FabSpinnerComponent.prototype.type;
    /** @type {?} */
    FabSpinnerComponent.prototype.size;
    /** @type {?} */
    FabSpinnerComponent.prototype.label;
    /** @type {?} */
    FabSpinnerComponent.prototype.className;
    /** @type {?} */
    FabSpinnerComponent.prototype.ariaLive;
    /** @type {?} */
    FabSpinnerComponent.prototype.ariaLabel;
    /** @type {?} */
    FabSpinnerComponent.prototype.theme;
    /** @type {?} */
    FabSpinnerComponent.prototype.styles;
    /** @type {?} */
    FabSpinnerComponent.prototype.labelPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$s = [FabSpinnerComponent];
class FabSpinnerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Spinner', (/**
         * @return {?}
         */
        () => Spinner));
    }
}
FabSpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$s,
                exports: components$s,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabSpinnerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabBaseTextFieldComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onBeforeChange = new EventEmitter();
        this.onNotifyValidationResult = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        this.valueChange = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBeforeChangeHandler = this.onBeforeChangeHandler.bind(this);
        this.onNotifyValidationResultHandler = this.onNotifyValidationResultHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
        this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
        this.onRenderPrefix = this.createRenderPropHandler(this.renderPrefix);
        this.onRenderSuffix = this.createRenderPropHandler(this.renderSuffix);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onClickHandler(ev) {
        this.onClick.emit(ev && ev.nativeEvent);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onFocusHandler(ev) {
        this.onFocus.emit(ev && ev.nativeEvent);
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    onBlurHandler(ev) {
        this.onBlur.emit(ev && ev.nativeEvent);
    }
    /**
     * @param {?} event
     * @param {?=} newValue
     * @return {?}
     */
    onChangeHandler(event, newValue) {
        this.onChange.emit({ event: event.nativeEvent, newValue });
        this.valueChange.emit(newValue);
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    onBeforeChangeHandler(newValue) {
        this.onBeforeChange.emit({ newValue });
    }
    /**
     * @param {?} errorMessage
     * @param {?} value
     * @return {?}
     */
    onNotifyValidationResultHandler(errorMessage, value) {
        this.onNotifyValidationResult.emit({ errorMessage, value });
    }
}
FabBaseTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    required: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    cols: [{ type: Input }],
    colSpan: [{ type: Input }],
    rows: [{ type: Input }],
    rowSpan: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    pattern: [{ type: Input }],
    htmlFor: [{ type: Input, args: ['for',] }],
    componentRef: [{ type: Input }],
    multiline: [{ type: Input }],
    resizable: [{ type: Input }],
    autoAdjustHeight: [{ type: Input }],
    underlined: [{ type: Input }],
    borderless: [{ type: Input }],
    label: [{ type: Input }],
    description: [{ type: Input }],
    prefix: [{ type: Input }],
    suffix: [{ type: Input }],
    iconProps: [{ type: Input }],
    defaultValue: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    readOnly: [{ type: Input }],
    errorMessage: [{ type: Input }],
    deferredValidationTime: [{ type: Input }],
    className: [{ type: Input }],
    inputClassName: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    validateOnFocusIn: [{ type: Input }],
    validateOnFocusOut: [{ type: Input }],
    validateOnLoad: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    autoComplete: [{ type: Input }],
    mask: [{ type: Input }],
    maskChar: [{ type: Input }],
    maskFormat: [{ type: Input }],
    getErrorMessage: [{ type: Input }],
    renderLabel: [{ type: Input }],
    renderDescription: [{ type: Input }],
    renderPrefix: [{ type: Input }],
    renderSuffix: [{ type: Input }],
    maxLength: [{ type: Input }],
    onClick: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onChange: [{ type: Output }],
    onBeforeChange: [{ type: Output }],
    onNotifyValidationResult: [{ type: Output }],
    valueChange: [{ type: Output }]
};
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
class FabTextFieldComponent extends FabBaseTextFieldComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-text-field',
                exportAs: 'fabTextField',
                template: `
    <TextField
      #reactNode
      [required]="required"
      [placeholder]="placeholder"
      [type]="type"
      [cols]="cols"
      [colSpan]="colSpan"
      [rows]="rows"
      [rowSpan]="rowSpan"
      [min]="min"
      [max]="max"
      [pattern]="pattern"
      [htmlFor]="htmlFor"
      [componentRef]="componentRef"
      [multiline]="multiline"
      [resizable]="resizable"
      [autoAdjustHeight]="autoAdjustHeight"
      [underlined]="underlined"
      [borderless]="borderless"
      [label]="label"
      [description]="description"
      [prefix]="prefix"
      [suffix]="suffix"
      [iconProps]="iconProps"
      [defaultValue]="defaultValue"
      [value]="value"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [errorMessage]="errorMessage"
      [deferredValidationTime]="deferredValidationTime"
      [className]="className"
      [inputClassName]="inputClassName"
      [ariaLabel]="ariaLabel"
      [validateOnFocusIn]="validateOnFocusIn"
      [validateOnFocusOut]="validateOnFocusOut"
      [validateOnLoad]="validateOnLoad"
      [theme]="theme"
      [styles]="styles"
      [autoComplete]="autoComplete"
      [mask]="mask"
      [maskChar]="maskChar"
      [maskFormat]="maskFormat"
      [GetErrorMessage]="getErrorMessage"
      [RenderLabel]="renderLabel"
      [RenderDescription]="renderDescription"
      [RenderPrefix]="renderPrefix"
      [RenderSuffix]="renderSuffix"
      [Change]="onChangeHandler"
      [BeforeChange]="onBeforeChangeHandler"
      [maxLength]="maxLength"
      [NotifyValidationResult]="onNotifyValidationResultHandler"
      (onClick)="onClickHandler($event)"
      (onFocus)="onFocusHandler($event)"
      (onBlur)="onBlurHandler($event)"
    >
    </TextField>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTextFieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
class FabMaskedTextFieldComponent extends FabBaseTextFieldComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
FabMaskedTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-masked-text-field',
                exportAs: 'fabMaskedTextField',
                template: `
    <MaskedTextField
      #reactNode
      [required]="required"
      [placeholder]="placeholder"
      [type]="type"
      [cols]="cols"
      [colSpan]="colSpan"
      [rows]="rows"
      [rowSpan]="rowSpan"
      [min]="min"
      [max]="max"
      [pattern]="pattern"
      [htmlFor]="htmlFor"
      [componentRef]="componentRef"
      [multiline]="multiline"
      [resizable]="resizable"
      [autoAdjustHeight]="autoAdjustHeight"
      [underlined]="underlined"
      [borderless]="borderless"
      [label]="label"
      [description]="description"
      [prefix]="prefix"
      [suffix]="suffix"
      [iconProps]="iconProps"
      [defaultValue]="defaultValue"
      [value]="value"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [errorMessage]="errorMessage"
      [deferredValidationTime]="deferredValidationTime"
      [className]="className"
      [inputClassName]="inputClassName"
      [ariaLabel]="ariaLabel"
      [validateOnFocusIn]="validateOnFocusIn"
      [validateOnFocusOut]="validateOnFocusOut"
      [validateOnLoad]="validateOnLoad"
      [theme]="theme"
      [styles]="styles"
      [autoComplete]="autoComplete"
      [mask]="mask"
      [maskChar]="maskChar"
      [maskFormat]="maskFormat"
      [GetErrorMessage]="getErrorMessage"
      [RenderLabel]="renderLabel"
      [RenderDescription]="renderDescription"
      [RenderPrefix]="renderPrefix"
      [RenderSuffix]="renderSuffix"
      [Change]="onChangeHandler"
      [BeforeChange]="onBeforeChangeHandler"
      [NotifyValidationResult]="onNotifyValidationResultHandler"
      (onClick)="onClickHandler($event)"
      (onFocus)="onFocusHandler($event)"
      (onBlur)="onBlurHandler($event)"
    >
    </MaskedTextField>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMaskedTextFieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabMaskedTextFieldComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
const components$t = [FabTextFieldComponent, FabMaskedTextFieldComponent];
class FabTextFieldModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TextField', (/**
         * @return {?}
         */
        () => TextField));
        registerElement('MaskedTextField', (/**
         * @return {?}
         */
        () => MaskedTextField));
    }
}
FabTextFieldModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$t,
                exports: components$t,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabTextFieldModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabToggleComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onChange = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    onChangeHandler(event, checked) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            checked,
        });
    }
}
FabToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toggle',
                exportAs: 'fabToggle',
                template: `
    <Toggle
      #reactNode
      [componentRef]="componentRef"
      [label]="label"
      [Text]="onText"
      [offText]="offText"
      [ariaLabel]="ariaLabel"
      [checked]="checked"
      [defaultChecked]="defaultChecked"
      [disabled]="disabled"
      [inlineLabel]="inlineLabel"
      [theme]="theme"
      [styles]="styles"
      [keytipProps]="keytipProps"
      [Change]="onChangeHandler"
    >
    </Toggle>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabToggleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabToggleComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    as: [{ type: Input }],
    componentRef: [{ type: Input }],
    label: [{ type: Input }],
    onText: [{ type: Input, args: ['onnText',] }],
    offText: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    checked: [{ type: Input }],
    defaultChecked: [{ type: Input }],
    disabled: [{ type: Input }],
    inlineLabel: [{ type: Input }],
    theme: [{ type: Input }],
    styles: [{ type: Input }],
    keytipProps: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabToggleComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabToggleComponent.prototype.as;
    /** @type {?} */
    FabToggleComponent.prototype.componentRef;
    /** @type {?} */
    FabToggleComponent.prototype.label;
    /**
     * Counterpart of `IToggleProps['onText']`.
     * Angular doesn't allow Inputs to be prefixed with "on", so this is misspelled as "onn".
     * @type {?}
     */
    FabToggleComponent.prototype.onText;
    /** @type {?} */
    FabToggleComponent.prototype.offText;
    /** @type {?} */
    FabToggleComponent.prototype.ariaLabel;
    /** @type {?} */
    FabToggleComponent.prototype.checked;
    /** @type {?} */
    FabToggleComponent.prototype.defaultChecked;
    /** @type {?} */
    FabToggleComponent.prototype.disabled;
    /** @type {?} */
    FabToggleComponent.prototype.inlineLabel;
    /** @type {?} */
    FabToggleComponent.prototype.theme;
    /** @type {?} */
    FabToggleComponent.prototype.styles;
    /** @type {?} */
    FabToggleComponent.prototype.keytipProps;
    /** @type {?} */
    FabToggleComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$u = [FabToggleComponent];
class FabToggleModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Toggle', (/**
         * @return {?}
         */
        () => Toggle));
    }
}
FabToggleModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$u,
                exports: components$u,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabToggleModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabTooltipHostComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onTooltipToggle = new EventEmitter();
        this.onTooltipToggleHandler = this.onTooltipToggleHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltipOptions(value) {
        this._tooltipOptions = value;
        if (value) {
            this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get tooltipOptions() {
        return this._tooltipOptions;
    }
    /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    onTooltipToggleHandler(isTooltipVisible) {
        this.onTooltipToggle.emit({ isTooltipVisible });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformTooltipOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderContent');
        /** @type {?} */
        const contentRenderer = this.createInputJsxRenderer(options.renderContent);
        return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
             * @param {?} data
             * @return {?}
             */
            data => contentRenderer(data)) }))));
    }
}
FabTooltipHostComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tooltip-host',
                exportAs: 'fabTooltipHost',
                template: `
    <TooltipHost
      #reactNode
      [theme]="theme"
      [componentRef]="componentRef"
      [calloutProps]="calloutProps"
      [closeDelay]="closeDelay"
      [setAriaDescribedBy]="setAriaDescribedBy"
      [delay]="delay"
      [content]="content"
      [directionalHint]="directionalHint"
      [directionalHintForRTL]="directionalHintForRTL"
      [overflowMode]="overflowMode"
      [hostClassName]="hostClassName"
      [tooltipProps]="transformedTooltipProps"
      [TooltipToggle]="onTooltipToggleHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </TooltipHost>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTooltipHostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabTooltipHostComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    closeDelay: [{ type: Input }],
    calloutProps: [{ type: Input }],
    content: [{ type: Input }],
    delay: [{ type: Input }],
    directionalHint: [{ type: Input }],
    directionalHintForRTL: [{ type: Input }],
    hostClassName: [{ type: Input }],
    overflowMode: [{ type: Input }],
    setAriaDescribedBy: [{ type: Input }],
    theme: [{ type: Input }],
    tooltipOptions: [{ type: Input }],
    onTooltipToggle: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTooltipHostComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabTooltipHostComponent.prototype.componentRef;
    /** @type {?} */
    FabTooltipHostComponent.prototype.closeDelay;
    /** @type {?} */
    FabTooltipHostComponent.prototype.calloutProps;
    /** @type {?} */
    FabTooltipHostComponent.prototype.content;
    /** @type {?} */
    FabTooltipHostComponent.prototype.delay;
    /** @type {?} */
    FabTooltipHostComponent.prototype.directionalHint;
    /** @type {?} */
    FabTooltipHostComponent.prototype.directionalHintForRTL;
    /** @type {?} */
    FabTooltipHostComponent.prototype.hostClassName;
    /** @type {?} */
    FabTooltipHostComponent.prototype.overflowMode;
    /** @type {?} */
    FabTooltipHostComponent.prototype.setAriaDescribedBy;
    /** @type {?} */
    FabTooltipHostComponent.prototype.theme;
    /** @type {?} */
    FabTooltipHostComponent.prototype.onTooltipToggle;
    /** @type {?} */
    FabTooltipHostComponent.prototype.transformedTooltipProps;
    /**
     * @type {?}
     * @private
     */
    FabTooltipHostComponent.prototype._tooltipOptions;
}
/**
 * Counterpart of `ITooltipProps`, with Angular adjustments.
 * @record
 */
function ITooltipOptions() { }
if (false) {
    /** @type {?|undefined} */
    ITooltipOptions.prototype.renderContent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$v = [FabTooltipHostComponent];
class FabTooltipModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TooltipHost', (/**
         * @return {?}
         */
        () => TooltipHost));
    }
}
FabTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$v,
                exports: components$v,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabTooltipModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabNavComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
        this.onLinkClick = new EventEmitter();
        this.onLinkExpandClick = new EventEmitter();
        this.onLinkClickHandler = this.onLinkClickHandler.bind(this);
        this.onLinkExpandClickHandler = this.onLinkExpandClickHandler.bind(this);
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    onLinkClickHandler(event, link) {
        this.onLinkClick.emit({
            event: event.nativeEvent,
            link: link
        });
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    onLinkExpandClickHandler(event, link) {
        this.onLinkExpandClick.emit({
            event: event.nativeEvent,
            link: link
        });
    }
}
FabNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-nav',
                exportAs: 'fabNav',
                template: `
    <Nav
      #reactNode
      [groups]="groups"
      [LinkClick]="onLinkClickHandler"
      [selectedKey]="selectedKey"
      [expandButtonAriaLabel]="expandButtonAriaLabel"
      [LinkExpandClick]="onLinkExpandClickHandler"
      [isOnTop]="isOnTop"
      [initialSelectedKey]="initialSelectedKey"
      [ariaLabel]="ariaLabel"
      [selectedAriaLabel]="selectedAriaLabel"
    >
    </Nav>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabNavComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    componentRef: [{ type: Input }],
    groups: [{ type: Input }],
    selectedKey: [{ type: Input }],
    isOnTop: [{ type: Input }],
    initialSelectedKey: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    expandButtonAriaLabel: [{ type: Input }],
    selectedAriaLabel: [{ type: Input }],
    onLinkClick: [{ type: Output }],
    onLinkExpandClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabNavComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabNavComponent.prototype.componentRef;
    /** @type {?} */
    FabNavComponent.prototype.groups;
    /** @type {?} */
    FabNavComponent.prototype.selectedKey;
    /** @type {?} */
    FabNavComponent.prototype.isOnTop;
    /** @type {?} */
    FabNavComponent.prototype.initialSelectedKey;
    /** @type {?} */
    FabNavComponent.prototype.ariaLabel;
    /** @type {?} */
    FabNavComponent.prototype.expandButtonAriaLabel;
    /** @type {?} */
    FabNavComponent.prototype.selectedAriaLabel;
    /** @type {?} */
    FabNavComponent.prototype.onLinkClick;
    /** @type {?} */
    FabNavComponent.prototype.onLinkExpandClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabNavModule {
    constructor() {
        registerElement('Nav', (/**
         * @return {?}
         */
        () => Nav));
    }
}
FabNavModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FabNavComponent],
                exports: [FabNavComponent],
                schemas: [NO_ERRORS_SCHEMA]
            },] }
];
/** @nocollapse */
FabNavModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T, TProps
 */
class FabBasePickerComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, { ngZone, setHostDisplay: true });
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onRemoveSuggestion = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
        this.onRemoveSuggestionHandler = this.onRemoveSuggestionHandler.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pickerSuggestionsOptions(value) {
        this._pickerSuggestionsOptions = value;
        if (value) {
            this.pickerSuggestionsProps = this._transformBasePickerSuggestionsOptionsToProps(value);
        }
    }
    /**
     * @return {?}
     */
    get pickerSuggestionsOptions() {
        return this._pickerSuggestionsOptions;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        this.onRenderSuggestionsItem = this.createRenderPropHandler(this.renderSuggestionsItem);
    }
    /**
     * @param {?=} items
     * @return {?}
     */
    onChangeHandler(items) {
        this.onChange.emit({
            items,
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusHandler(event) {
        this.onFocus.emit(event.nativeEvent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlurHandler(event) {
        this.onBlur.emit(event.nativeEvent);
    }
    /**
     * @param {?=} ev
     * @param {?=} selectedItem
     * @return {?}
     */
    onDismissHandler(ev, selectedItem) {
        this.onDismiss.emit({
            ev: (ev && ev.nativeEvent) || ev,
            selectedItem,
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onRemoveSuggestionHandler(item) {
        this.onRemoveSuggestion.emit({
            item,
        });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _transformBasePickerSuggestionsOptionsToProps(options) {
        /** @type {?} */
        const sharedProperties = omit(options, 'renderNoResultFound', 'renderResultsFooterFull', 'renderResultsFooter');
        /** @type {?} */
        const noResultFoundRenderer = this.createInputJsxRenderer(options.renderNoResultFound);
        /** @type {?} */
        const resultsFooterFullRenderer = this.createInputJsxRenderer(options.renderResultsFooterFull);
        /** @type {?} */
        const resultsFooterRenderer = this.createInputJsxRenderer(options.renderResultsFooter);
        return Object.assign({}, sharedProperties, noResultFoundRenderer &&
            ((/** @type {?} */ ({ onRenderNoResultFound: (/**
                 * @return {?}
                 */
                () => noResultFoundRenderer({})) }))), resultsFooterFullRenderer &&
            ((/** @type {?} */ ({ resultsFooterFull: (/**
                 * @return {?}
                 */
                () => resultsFooterFullRenderer({})) }))), resultsFooterRenderer &&
            ((/** @type {?} */ ({ resultsFooter: (/**
                 * @return {?}
                 */
                () => resultsFooterRenderer({})) }))));
    }
}
FabBasePickerComponent.propDecorators = {
    componentRef: [{ type: Input }],
    resolveDelay: [{ type: Input }],
    defaultSelectedItems: [{ type: Input }],
    getTextFromItem: [{ type: Input }],
    className: [{ type: Input }],
    pickerCalloutProps: [{ type: Input }],
    searchingText: [{ type: Input }],
    disabled: [{ type: Input }],
    itemLimit: [{ type: Input }],
    createGenericItem: [{ type: Input }],
    removeButtonAriaLabel: [{ type: Input }],
    selectedItems: [{ type: Input }],
    enableSelectedSuggestionAlert: [{ type: Input }],
    inputProps: [{ type: Input }],
    onItemSelected: [{ type: Input, args: ['itemSelected',] }],
    onInputChange: [{ type: Input, args: ['inputChange',] }],
    onEmptyInputFocus: [{ type: Input, args: ['emptyInputFocus',] }],
    onResolveSuggestions: [{ type: Input, args: ['resolveSuggestions',] }],
    onGetMoreResults: [{ type: Input, args: ['getMoreResults',] }],
    onValidateInput: [{ type: Input, args: ['validateInput',] }],
    pickerSuggestionsOptions: [{ type: Input }],
    renderItem: [{ type: Input }],
    renderSuggestionsItem: [{ type: Input }],
    onChange: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onDismiss: [{ type: Output }],
    onRemoveSuggestion: [{ type: Output }]
};
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
noop(BasePickerCss);
class FabBasePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('BasePicker', (/**
         * @return {?}
         */
        () => BasePicker));
    }
}
FabBasePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabBasePickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabTagPickerComponent extends FabBasePickerComponent {
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
FabTagPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag-picker',
                exportAs: 'fabTagPicker',
                template: `
    <TagPicker
      #reactNode
      [componentRef]="componentRef"
      [resolveDelay]="resolveDelay"
      [defaultSelectedItems]="defaultSelectedItems"
      [getTextFromItem]="getTextFromItem"
      [className]="className"
      [pickerCalloutProps]="pickerCalloutProps"
      [searchingText]="searchingText"
      [disabled]="disabled"
      [itemLimit]="itemLimit"
      [createGenericItem]="createGenericItem"
      [removeButtonAriaLabel]="removeButtonAriaLabel"
      [selectedItems]="selectedItems"
      [enableSelectedSuggestionAlert]="enableSelectedSuggestionAlert"
      [inputProps]="inputProps"
      [pickerSuggestionsProps]="pickerSuggestionsProps"
      [ItemSelected]="onItemSelected"
      [InputChange]="onInputChange"
      [EmptyInputFocus]="onEmptyInputFocus"
      [ResolveSuggestions]="onResolveSuggestions"
      [GetMoreResults]="onGetMoreResults"
      [ValidateInput]="onValidateInput"
      [RenderItem]="renderItem && onRenderItem"
      [RenderSuggestionsItem]="renderSuggestionsItem && onRenderSuggestionsItem"
      [Change]="onChangeHandler"
      [Focus]="onFocusHandler"
      [Blur]="onBlurHandler"
      [Dismiss]="onDismissHandler"
      [RemoveSuggestion]="onRemoveSuggestionHandler"
    >
    </TagPicker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTagPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabTagPickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
const components$w = [FabTagPickerComponent];
class FabTagPickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TagPicker', (/**
         * @return {?}
         */
        () => (/** @type {?} */ (TagPicker))));
    }
}
FabTagPickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabBasePickerModule],
                declarations: components$w,
                exports: components$w,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabTagPickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabPeoplePickerComponent extends FabBasePickerComponent {
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
FabPeoplePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-people-picker',
                exportAs: 'fabPeoplePicker',
                template: `
      <PeoplePicker
        #reactNode
        [componentRef]="componentRef"
        [resolveDelay]="resolveDelay"
        [defaultSelectedItems]="defaultSelectedItems"
        [getTextFromItem]="getTextFromItem"
        [className]="className"
        [pickerCalloutProps]="pickerCalloutProps"
        [searchingText]="searchingText"
        [disabled]="disabled"
        [itemLimit]="itemLimit"
        [createGenericItem]="createGenericItem"
        [removeButtonAriaLabel]="removeButtonAriaLabel"
        [selectedItems]="selectedItems"
        [enableSelectedSuggestionAlert]="enableSelectedSuggestionAlert"
        [inputProps]="inputProps"
        [pickerSuggestionsProps]="pickerSuggestionsProps"
        [ItemSelected]="onItemSelected"
        [InputChange]="onInputChange"
        [EmptyInputFocus]="onEmptyInputFocus"
        [ResolveSuggestions]="onResolveSuggestions"
        [GetMoreResults]="onGetMoreResults"
        [ValidateInput]="onValidateInput"
        [RenderItem]="renderItem && onRenderItem"
        [RenderSuggestionsItem]="renderSuggestionsItem && onRenderSuggestionsItem"
        [Change]="onChangeHandler"
        [Focus]="onFocusHandler"
        [Blur]="onBlurHandler"
        [Dismiss]="onDismissHandler"
        [RemoveSuggestion]="onRemoveSuggestionHandler"
      >
      </PeoplePicker>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPeoplePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPeoplePickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
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
noop(PeoplePickerItemCss);
/** @type {?} */
const components$x = [FabPeoplePickerComponent];
class FabPeoplePickerModule {
    constructor() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('PeoplePicker', (/**
         * @return {?}
         */
        () => (/** @type {?} */ (NormalPeoplePickerBase))));
    }
}
FabPeoplePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FabBasePickerModule],
                declarations: components$x,
                exports: components$x,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabPeoplePickerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabProgressIndicatorComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderDescription(value) {
        this._renderDescription = value;
        if (value) {
            this.description = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderDescription() {
        return this._renderDescription;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set renderLabel(value) {
        this._renderLabel = value;
        if (value) {
            this.label = this.createInputJsxRenderer(value)({});
        }
    }
    /**
     * @return {?}
     */
    get renderLabel() {
        return this._renderLabel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
    }
}
FabProgressIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-progress-indicator',
                exportAs: 'fabProgressIndicator',
                template: `
    <ProgressIndicator
      #reactNode
      [ariaValueText]="ariaValueText"
      [barHeight]="barHeight"
      [className]="className"
      [description]="description"
      [label]="label"
      [RenderProgress]="renderProgress && onRenderProgress"
      [percentComplete]="percentComplete"
      [progressHidden]="progressHidden"
      [styles]="styles"
      [theme]="theme"
    >
    </ProgressIndicator>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabProgressIndicatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
FabProgressIndicatorComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
    ariaValueText: [{ type: Input }],
    barHeight: [{ type: Input }],
    className: [{ type: Input }],
    renderProgress: [{ type: Input }],
    percentComplete: [{ type: Input }],
    progressHidden: [{ type: Input }],
    styles: [{ type: Input }],
    theme: [{ type: Input }],
    renderDescription: [{ type: Input }],
    renderLabel: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabProgressIndicatorComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.ariaValueText;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.barHeight;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.className;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.renderProgress;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.percentComplete;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.progressHidden;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.styles;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.theme;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.description;
    /**
     * @type {?}
     * @private
     */
    FabProgressIndicatorComponent.prototype._renderDescription;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.label;
    /**
     * @type {?}
     * @private
     */
    FabProgressIndicatorComponent.prototype._renderLabel;
    /** @type {?} */
    FabProgressIndicatorComponent.prototype.onRenderProgress;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$y = [FabProgressIndicatorComponent];
class FabProgressIndicatorModule {
    constructor() {
        registerElement('ProgressIndicator', (/**
         * @return {?}
         */
        () => ProgressIndicator));
    }
}
FabProgressIndicatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: components$y,
                exports: components$y,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
/** @nocollapse */
FabProgressIndicatorModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @record
 * @template T
 */
function TypedChange() { }
if (false) {
    /** @type {?} */
    TypedChange.prototype.previousValue;
    /** @type {?} */
    TypedChange.prototype.currentValue;
}
/**
 * @record
 * @template TComponent
 */
function OnChanges() { }
if (false) {
    /**
     * @param {?} changes
     * @return {?}
     */
    OnChanges.prototype.ngOnChanges = function (changes) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalendarStringsDirective, ComboBoxOptionDirective, ComboBoxOptionsDirective, CommandBarFarItemsDirective, CommandBarItemDirective, CommandBarItemRenderDirective, CommandBarItemRenderIconDirective, CommandBarItemsDirective, CommandBarItemsDirectiveBase, CommandBarOverflowItemsDirective, ContextualMenuItemDirective, ContextualMenuItemRenderDirective, ContextualMenuItemRenderIconDirective, DetailsListColumnDirective, DetailsListColumnRenderDirective, DetailsListColumnsDirective, DetailsListGroupsDirective, DropdownOptionDirective, DropdownOptionsDirective, FabActionButtonComponent, FabBasePickerComponent, FabBasePickerModule, FabBreadcrumbComponent, FabBreadcrumbModule, FabButtonModule, FabCalendarComponent, FabCalendarModule, FabCalloutComponent, FabCalloutModule, FabCheckboxComponent, FabCheckboxModule, FabChoiceGroupComponent, FabChoiceGroupModule, FabComboBoxComponent, FabComboBoxModule, FabCommandBarButtonComponent, FabCommandBarComponent, FabCommandBarModule, FabCompoundButtonComponent, FabContextualMenuModule, FabDatePickerComponent, FabDatePickerModule, FabDefaultButtonComponent, FabDetailsListComponent, FabDetailsListModule, FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent, FabDialogModule, FabDividerComponent, FabDividerModule, FabDropdownComponent, FabDropdownModule, FabExpandingCardComponent, FabFabricComponent, FabFabricModule, FabGroupModule, FabGroupedListComponent, FabGroupedListModule, FabHoverCardComponent, FabHoverCardModule, FabIconButtonComponent, FabIconComponent, FabIconModule, FabImageComponent, FabImageModule, FabLinkComponent, FabLinkModule, FabMarqueeSelectionModule, FabMaskedTextFieldComponent, FabMessageBarButtonComponent, FabMessageBarComponent, FabMessageBarModule, FabModalComponent, FabModalModule, FabNavComponent, FabNavModule, FabPanelComponent, FabPanelModule, FabPeoplePickerComponent, FabPeoplePickerModule, FabPersonaBaseComponent, FabPersonaCoinComponent, FabPersonaComponent, FabPersonaModule, FabPivotComponent, FabPivotItemComponent, FabPivotModule, FabPlainCardComponent, FabPrimaryButtonComponent, FabProgressIndicatorComponent, FabProgressIndicatorModule, FabSearchBoxComponent, FabSearchBoxModule, FabShimmerComponent, FabShimmerElementsGroupComponent, FabShimmerModule, FabSliderComponent, FabSliderModule, FabSpinButtonComponent, FabSpinButtonModule, FabSpinnerComponent, FabSpinnerModule, FabSplitButtonComponent, FabTagPickerComponent, FabTagPickerModule, FabTextFieldComponent, FabTextFieldModule, FabToggleComponent, FabToggleModule, FabTooltipHostComponent, FabTooltipModule, GroupItemDirective, FabBaseButtonComponent as ɵa, FabBaseComboBoxComponent as ɵb, FabVirtualizedComboBoxComponent as ɵc, FabMarqueeSelectionComponent as ɵd, FabBaseTextFieldComponent as ɵe };
//# sourceMappingURL=angular-react-fabric.js.map
