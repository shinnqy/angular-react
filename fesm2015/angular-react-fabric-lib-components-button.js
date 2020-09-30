import { EventEmitter, Input, Output, ContentChildren, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { ChangeableItemsHelper, mergeItemChanges } from '@angular-react/fabric/lib/components/core';
import { omit, getDataAttributes } from '@angular-react/fabric/lib/utils';
import { ContextualMenuItemDirective } from '@angular-react/fabric/lib/components/contextual-menu';
import { CommonModule } from '@angular/common';
import { DefaultButton, ActionButton, CommandBarButton, CompoundButton, IconButton, MessageBarButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

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
    menuItemsDirectives: [{ type: ContentChildren, args: [ContextualMenuItemDirective,] }]
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
const components = [
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
                declarations: components,
                exports: components,
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

export { FabActionButtonComponent, FabButtonModule, FabCommandBarButtonComponent, FabCompoundButtonComponent, FabDefaultButtonComponent, FabIconButtonComponent, FabMessageBarButtonComponent, FabPrimaryButtonComponent, FabSplitButtonComponent, FabBaseButtonComponent as ɵa };
//# sourceMappingURL=angular-react-fabric-lib-components-button.js.map
