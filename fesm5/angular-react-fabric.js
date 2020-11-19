import { __extends, __assign, __rest, __spread, __decorate, __metadata } from 'tslib';
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
import { Rating } from 'office-ui-fabric-react/lib/Rating';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabBreadcrumbComponent = /** @class */ (function (_super) {
    __extends(FabBreadcrumbComponent, _super);
    function FabBreadcrumbComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    /**
     * @return {?}
     */
    FabBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
    };
    FabBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-breadcrumb',
                    exportAs: 'fabBreadcrumb',
                    template: "\n    <Breadcrumb\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [items]=\"items\"\n      [className]=\"className\"\n      [dividerAs]=\"dividerAs\"\n      [maxDisplayedItems]=\"maxDisplayedItems\"\n      [ariaLabel]=\"ariaLabel\"\n      [overflowAriaLabel]=\"overflowAriaLabel\"\n      [overflowIndex]=\"overflowIndex\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [focusZoneProps]=\"focusZoneProps\"\n      [tooltipHostProps]=\"tooltipHostProps\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [ReduceData]=\"onReduceData\"\n    >\n    </Breadcrumb>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabBreadcrumbComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabBreadcrumbComponent;
}(ReactWrapperComponent));
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
var components = [FabBreadcrumbComponent];
var FabBreadcrumbModule = /** @class */ (function () {
    function FabBreadcrumbModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Breadcrumb', (/**
         * @return {?}
         */
        function () { return Breadcrumb; }));
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
    FabBreadcrumbModule.ctorParameters = function () { return []; };
    return FabBreadcrumbModule;
}());

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
var FabBaseButtonComponent = /** @class */ (function (_super) {
    __extends(FabBaseButtonComponent, _super);
    function FabBaseButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onClick = new EventEmitter();
        _this.onMenuClick = new EventEmitter();
        _this.onAfterMenuDismiss = new EventEmitter();
        _this._subscriptions = [];
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onMenuClickHandler = _this.onMenuClickHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabBaseButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderIcon = this.createRenderPropHandler(this.renderIcon);
        this.onRenderText = this.createRenderPropHandler(this.renderText);
        this.onRenderDescription = this.createRenderPropHandler(this.renderDescription);
        this.onRenderAriaDescription = this.createRenderPropHandler(this.renderAriaDescription);
        this.onRenderChildren = this.createRenderPropHandler(this.renderChildren);
        this.onRenderMenuIcon = this.createRenderPropHandler(this.renderMenuIcon);
    };
    /**
     * @return {?}
     */
    FabBaseButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.menuItemsDirectives && this.menuItemsDirectives.length > 0) {
            /** @type {?} */
            var setItems_1 = (/**
             * @param {?} directiveItems
             * @return {?}
             */
            function (directiveItems) {
                /** @type {?} */
                var items = directiveItems.map((/**
                 * @param {?} directive
                 * @return {?}
                 */
                function (directive) {
                    return _this._transformContextualMenuItemOptionsToProps(_this._directiveToContextualMenuItem(directive));
                }));
                if (!_this.menuProps) {
                    _this.menuProps = { items: items };
                }
                else {
                    _this.menuProps.items = items;
                }
                _this.markForCheck();
            });
            // @ts-ignore
            this._changeableItemsHelper = new ChangeableItemsHelper(this.menuItemsDirectives);
            this._subscriptions.push(this._changeableItemsHelper.onItemsChanged.subscribe((/**
             * @param {?} newItems
             * @return {?}
             */
            function (newItems) {
                setItems_1(newItems.toArray());
            })), this._changeableItemsHelper.onChildItemChanged.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key, changes = _a.changes;
                /** @type {?} */
                var newItems = _this.menuItemsDirectives.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return item.key === key ? mergeItemChanges(item, changes) : item;
                }));
                setItems_1(newItems);
                _this.markForCheck();
            })));
            setItems_1(this.menuItemsDirectives.toArray());
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @return {?}
     */
    FabBaseButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._changeableItemsHelper) {
            this._changeableItemsHelper.destroy();
        }
        if (this._subscriptions) {
            this._subscriptions.forEach((/**
             * @param {?} subscription
             * @return {?}
             */
            function (subscription) { return subscription.unsubscribe(); }));
        }
    };
    /**
     * @param {?=} ev
     * @param {?=} button
     * @return {?}
     */
    FabBaseButtonComponent.prototype.onMenuClickHandler = /**
     * @param {?=} ev
     * @param {?=} button
     * @return {?}
     */
    function (ev, button) {
        this.onMenuClick.emit({
            ev: ev && ev.nativeEvent,
            button: button,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabBaseButtonComponent.prototype.onClickHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onClick.emit(ev.nativeEvent);
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    FabBaseButtonComponent.prototype._directiveToContextualMenuItem = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        return __assign({}, omit(directive, 'menuItemsDirectives', 'renderDirective', 'renderIconDirective', 'click', 'onItemChanged', 'onItemsChanged', 'onChildItemChanged', 'ngOnInit', 'ngOnChanges', 'ngOnDestroy', 'ngAfterContentInit'), getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
             * @param {?} ev
             * @param {?} item
             * @return {?}
             */
            function (ev, item) {
                directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
            }) });
    };
    /**
     * @private
     * @param {?} itemOptions
     * @return {?}
     */
    FabBaseButtonComponent.prototype._transformContextualMenuItemOptionsToProps = /**
     * @private
     * @param {?} itemOptions
     * @return {?}
     */
    function (itemOptions) {
        /** @type {?} */
        var sharedProperties = omit(itemOptions, 'renderIcon', 'render');
        // Legacy render mode is used for the icon because otherwise the icon is to the right of the text (instead of the usual left)
        /** @type {?} */
        var iconRenderer = this.createInputJsxRenderer(itemOptions.renderIcon, { legacyRenderMode: true });
        /** @type {?} */
        var renderer = this.createInputJsxRenderer(itemOptions.render);
        // @ts-ignore
        return (/** @type {?} */ (Object.assign({}, sharedProperties, iconRenderer && {
            onRenderIcon: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return iconRenderer({ contextualMenuItem: item }); }),
        }, renderer &&
            ((/** @type {?} */ ({
                onRender: (/**
                 * @param {?} item
                 * @param {?} dismissMenu
                 * @return {?}
                 */
                function (item, dismissMenu) { return renderer({ item: item, dismissMenu: dismissMenu }); }),
            }))))));
    };
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
    return FabBaseButtonComponent;
}(ReactWrapperComponent));
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
var FabActionButtonComponent = /** @class */ (function (_super) {
    __extends(FabActionButtonComponent, _super);
    function FabActionButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabActionButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-action-button',
                    exportAs: 'fabActionButton',
                    template: "\n    <ActionButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ActionButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabActionButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabActionButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabActionButtonComponent;
}(FabBaseButtonComponent));
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
var FabCommandBarButtonComponent = /** @class */ (function (_super) {
    __extends(FabCommandBarButtonComponent, _super);
    function FabCommandBarButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabCommandBarButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-command-bar-button',
                    exportAs: 'fabCommandBarButton',
                    template: "\n    <CommandBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CommandBarButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCommandBarButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabCommandBarButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabCommandBarButtonComponent;
}(FabBaseButtonComponent));
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
var FabCompoundButtonComponent = /** @class */ (function (_super) {
    __extends(FabCompoundButtonComponent, _super);
    function FabCompoundButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabCompoundButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-compound-button',
                    exportAs: 'fabCompoundButton',
                    template: "\n    <CompoundButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CompoundButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCompoundButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabCompoundButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabCompoundButtonComponent;
}(FabBaseButtonComponent));
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
var FabDefaultButtonComponent = /** @class */ (function (_super) {
    __extends(FabDefaultButtonComponent, _super);
    function FabDefaultButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabDefaultButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-default-button',
                    exportAs: 'fabDefaultButton',
                    template: "\n    <DefaultButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DefaultButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDefaultButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabDefaultButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabDefaultButtonComponent;
}(FabBaseButtonComponent));
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
var FabIconButtonComponent = /** @class */ (function (_super) {
    __extends(FabIconButtonComponent, _super);
    function FabIconButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabIconButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-icon-button',
                    exportAs: 'fabIconButton',
                    template: "\n    <IconButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </IconButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabIconButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabIconButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabIconButtonComponent;
}(FabBaseButtonComponent));
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
var FabMessageBarButtonComponent = /** @class */ (function (_super) {
    __extends(FabMessageBarButtonComponent, _super);
    function FabMessageBarButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabMessageBarButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-messagebar-button',
                    exportAs: 'fabMessageBarButton',
                    template: "\n    <MessageBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBarButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMessageBarButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabMessageBarButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabMessageBarButtonComponent;
}(FabBaseButtonComponent));
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
var FabPrimaryButtonComponent = /** @class */ (function (_super) {
    __extends(FabPrimaryButtonComponent, _super);
    function FabPrimaryButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPrimaryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-primary-button',
                    exportAs: 'fabPrimaryButton',
                    template: "\n    <PrimaryButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PrimaryButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPrimaryButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPrimaryButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabPrimaryButtonComponent;
}(FabBaseButtonComponent));
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
var FabSplitButtonComponent = /** @class */ (function (_super) {
    __extends(FabSplitButtonComponent, _super);
    function FabSplitButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabSplitButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-split-button',
                    exportAs: 'fabSplitButton',
                    template: "\n    <SplitButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </SplitButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSplitButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabSplitButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabSplitButtonComponent;
}(FabBaseButtonComponent));
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
var components$1 = [
    FabDefaultButtonComponent,
    FabActionButtonComponent,
    FabCommandBarButtonComponent,
    FabCompoundButtonComponent,
    FabIconButtonComponent,
    FabMessageBarButtonComponent,
    FabPrimaryButtonComponent,
    FabSplitButtonComponent,
];
var FabButtonModule = /** @class */ (function () {
    function FabButtonModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DefaultButton', (/**
         * @return {?}
         */
        function () { return DefaultButton; }));
        registerElement('ActionButton', (/**
         * @return {?}
         */
        function () { return ActionButton; }));
        registerElement('CommandBarButton', (/**
         * @return {?}
         */
        function () { return CommandBarButton; }));
        registerElement('CompoundButton', (/**
         * @return {?}
         */
        function () { return CompoundButton; }));
        registerElement('IconButton', (/**
         * @return {?}
         */
        function () { return IconButton; }));
        registerElement('MessageBarButton', (/**
         * @return {?}
         */
        function () { return MessageBarButton; }));
        registerElement('PrimaryButton', (/**
         * @return {?}
         */
        function () { return PrimaryButton; }));
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
    FabButtonModule.ctorParameters = function () { return []; };
    return FabButtonModule;
}());

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
var CalendarStringsDirective = /** @class */ (function () {
    function CalendarStringsDirective() {
    }
    Object.defineProperty(CalendarStringsDirective.prototype, "strings", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
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
    return CalendarStringsDirective;
}());
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
var FabCalendarComponent = /** @class */ (function (_super) {
    __extends(FabCalendarComponent, _super);
    function FabCalendarComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onSelectDate = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onSelectDateHandler = _this.onSelectDateHandler.bind(_this);
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabCalendarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.calendarStringsDirective) {
            this._initDirective(this.calendarStringsDirective);
            _super.prototype.ngAfterContentInit.call(this);
        }
    };
    /**
     * @param {?} date
     * @param {?=} selectedDateRangeArray
     * @return {?}
     */
    FabCalendarComponent.prototype.onSelectDateHandler = /**
     * @param {?} date
     * @param {?=} selectedDateRangeArray
     * @return {?}
     */
    function (date, selectedDateRangeArray) {
        this.onSelectDate.emit({
            date: date,
            selectedDateRangeArray: selectedDateRangeArray,
        });
    };
    /**
     * @return {?}
     */
    FabCalendarComponent.prototype.onDismissHandler = /**
     * @return {?}
     */
    function () {
        this.onDismiss.emit();
    };
    /**
     * @private
     * @param {?} calendarStringsDirective
     * @return {?}
     */
    FabCalendarComponent.prototype._initDirective = /**
     * @private
     * @param {?} calendarStringsDirective
     * @return {?}
     */
    function (calendarStringsDirective) {
        this.strings = calendarStringsDirective.strings;
    };
    FabCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-calendar',
                    exportAs: 'fabCalendar',
                    template: "\n    <Calendar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [isMonthPickerVisible]=\"isMonthPickerVisible\"\n      [isDayPickerVisible]=\"isDayPickerVisible\"\n      [showMonthPickerAsOverlay]=\"showMonthPickerAsOverlay\"\n      [today]=\"today\"\n      [value]=\"value\"\n      [firstDayOfWeek]=\"firstDayOfWeek\"\n      [dateRangeType]=\"dateRangeType\"\n      [autoNavigateOnSelection]=\"autoNavigateOnSelection\"\n      [showGoToToday]=\"showGoToToday\"\n      [strings]=\"strings\"\n      [highlightCurrentMonth]=\"highlightCurrentMonth\"\n      [highlightSelectedMonth]=\"highlightSelectedMonth\"\n      [navigationIcons]=\"navigationIcons\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [firstWeekOfYear]=\"firstWeekOfYear\"\n      [dateTimeFormatter]=\"dateTimeFormatter\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [maxDate]=\"restrictedDates\"\n      [restrictedDates]=\"restrictedDates\"\n      [showSixWeeksByDefault]=\"showSixWeeksByDefault\"\n      [workWeekDays]=\"workWeekDays\"\n      [selectDateOnClick]=\"selectDateOnClick\"\n      [showCloseButton]=\"showCloseButton\"\n      [allFocusable]=\"allFocusable\"\n      [yearPickerHidden]=\"yearPickerHidden\"\n      [SelectDate]=\"onSelectDateHandler\"\n      [Dismiss]=\"onDismissHandler\"\n    >\n    </Calendar>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabCalendarComponent;
}(ReactWrapperComponent));
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
var declarations = [FabCalendarComponent, CalendarStringsDirective];
var FabCalendarModule = /** @class */ (function () {
    function FabCalendarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Calendar', (/**
         * @return {?}
         */
        function () { return Calendar; }));
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
    FabCalendarModule.ctorParameters = function () { return []; };
    return FabCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabCalloutComponent = /** @class */ (function (_super) {
    __extends(FabCalloutComponent, _super);
    function FabCalloutComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLayerMounted = new EventEmitter();
        _this.onPositioned = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onScroll = new EventEmitter();
        return _this;
    }
    FabCalloutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-callout',
                    exportAs: 'fabCallout',
                    template: "\n    <Callout\n      #reactNode\n      [target]=\"target\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [gapSpace]=\"gapSpace\"\n      [beakWidth]=\"beakWidth\"\n      [calloutWidth]=\"calloutWidth\"\n      [backgroundColor]=\"backgroundColor\"\n      [bounds]=\"bounds\"\n      [minPagePadding]=\"minPagePadding\"\n      [isBeakVisible]=\"isBeakVisible\"\n      [preventDismissOnScroll]=\"preventDismissOnScroll\"\n      [preventDismissOnResize]=\"preventDismissOnResize\"\n      [preventDismissOnLostFocus]=\"preventDismissOnLostFocus\"\n      [coverTarget]=\"coverTarget\"\n      [alignTargetEdge]=\"alignTargetEdge\"\n      [role]=\"role\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [className]=\"className\"\n      [layerProps]=\"layerProps\"\n      [doNotLayer]=\"doNotLayer\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [finalHeight]=\"finalHeight\"\n      [hideOverflow]=\"hideOverflow\"\n      [setInitialFocus]=\"setInitialFocus\"\n      [calloutMaxHeight]=\"calloutMaxHeight\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [hidden]=\"hidden\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      (onLayerMounted)=\"onLayerMounted.emit()\"\n      (onPositioned)=\"onPositioned.emit($event)\"\n      (onDismiss)=\"onDismiss.emit($event)\"\n      (onScroll)=\"onScroll.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Callout>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCalloutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabCalloutComponent;
}(ReactWrapperComponent));
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
var components$2 = [FabCalloutComponent];
var FabCalloutModule = /** @class */ (function () {
    function FabCalloutModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Callout', (/**
         * @return {?}
         */
        function () { return Callout; }));
        registerElement('FocusTrapCallout', (/**
         * @return {?}
         */
        function () { return FocusTrapCallout; }));
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
    FabCalloutModule.ctorParameters = function () { return []; };
    return FabCalloutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabCheckboxComponent = /** @class */ (function (_super) {
    __extends(FabCheckboxComponent, _super);
    function FabCheckboxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onChange = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        _this.checkedChange = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderLabel = this.createRenderPropHandler(this.renderLabel);
    };
    /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    FabCheckboxComponent.prototype.onChangeHandler = /**
     * @param {?=} ev
     * @param {?=} checked
     * @return {?}
     */
    function (ev, checked) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            checked: checked,
        });
        this.checkedChange.emit(checked);
    };
    FabCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-checkbox',
                    exportAs: 'fabCheckbox',
                    template: "\n    <Checkbox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [label]=\"label\"\n      [disabled]=\"disabled\"\n      [inputProps]=\"inputProps\"\n      [boxSide]=\"boxSide\"\n      [theme]=\"theme\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [checkmarkIconProps]=\"checkmarkIconProps\"\n      [keytipProps]=\"keytipProps\"\n      [styles]=\"styles\"\n      [RenderLabel]=\"renderLabel && onRenderLabel\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Checkbox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabCheckboxComponent;
}(ReactWrapperComponent));
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
var components$3 = [FabCheckboxComponent];
var FabCheckboxModule = /** @class */ (function () {
    function FabCheckboxModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Checkbox', (/**
         * @return {?}
         */
        function () { return Checkbox; }));
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
    FabCheckboxModule.ctorParameters = function () { return []; };
    return FabCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabChoiceGroupComponent = /** @class */ (function (_super) {
    __extends(FabChoiceGroupComponent, _super);
    function FabChoiceGroupComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChanged = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onChangedHandler = _this.onChangedHandler.bind(_this);
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    FabChoiceGroupComponent.prototype.onChangedHandler = /**
     * @param {?} option
     * @param {?=} evt
     * @return {?}
     */
    function (option, evt) {
        this.onChanged.emit({
            option: option,
            evt: evt && evt.nativeEvent,
        });
    };
    /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    FabChoiceGroupComponent.prototype.onChangeHandler = /**
     * @param {?=} ev
     * @param {?=} option
     * @return {?}
     */
    function (ev, option) {
        this.onChange.emit({
            ev: ev && ev.nativeEvent,
            option: option,
        });
    };
    FabChoiceGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-choice-group',
                    exportAs: 'fabChoiceGroup',
                    template: "\n    <ChoiceGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [label]=\"label\"\n      [required]=\"required\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [ariaLabelledBy]=\"ariaLabelledBy\"\n      [Changed]=\"onChangedHandler\"\n      [Change]=\"onChangeHandler\"\n    >\n    </ChoiceGroup>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabChoiceGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabChoiceGroupComponent;
}(ReactWrapperComponent));
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
var components$4 = [FabChoiceGroupComponent];
var FabChoiceGroupModule = /** @class */ (function () {
    function FabChoiceGroupModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ChoiceGroup', (/**
         * @return {?}
         */
        function () { return ChoiceGroup; }));
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
    FabChoiceGroupModule.ctorParameters = function () { return []; };
    return FabChoiceGroupModule;
}());

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
var ComboBoxOptionDirective = /** @class */ (function () {
    function ComboBoxOptionDirective() {
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
        { type: Directive, args: [{ selector: 'fab-combo-box > options' },] }
    ];
    ComboBoxOptionsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [ComboBoxOptionDirective,] }]
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
        _this.onItemClick = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onPendingValueChanged = new EventEmitter();
        _this.onMenuOpen = new EventEmitter();
        _this.onMenuDismissed = new EventEmitter();
        _this.onMenuDismiss = new EventEmitter();
        _this.onScrollToItem = new EventEmitter();
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
    return FabBaseComboBoxComponent;
}(ReactWrapperComponent));
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
        { type: Component, args: [{
                    selector: 'fab-combo-box',
                    exportAs: 'fabComboBox',
                    template: "\n    <ComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </ComboBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabComboBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
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
        { type: Component, args: [{
                    selector: 'fab-virtualized-combo-box',
                    exportAs: 'fabVirtualizedComboBox',
                    template: "\n    <VirtualizedComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </VirtualizedComboBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabVirtualizedComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabVirtualizedComboBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
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
var declarations$1 = [
    FabComboBoxComponent,
    FabVirtualizedComboBoxComponent,
    ComboBoxOptionDirective,
    ComboBoxOptionsDirective
];
var FabComboBoxModule = /** @class */ (function () {
    function FabComboBoxModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ComboBox', (/**
         * @return {?}
         */
        function () { return ComboBox; }));
        registerElement('VirtualizedComboBox', (/**
         * @return {?}
         */
        function () { return VirtualizedComboBox; }));
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
    FabComboBoxModule.ctorParameters = function () { return []; };
    return FabComboBoxModule;
}());

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
var CommandBarItemRenderDirective = /** @class */ (function () {
    function CommandBarItemRenderDirective() {
    }
    CommandBarItemRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
    ];
    CommandBarItemRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return CommandBarItemRenderDirective;
}());
if (false) {
    /** @type {?} */
    CommandBarItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a CommandBarItem.
 */
var CommandBarItemRenderIconDirective = /** @class */ (function () {
    function CommandBarItemRenderIconDirective() {
    }
    CommandBarItemRenderIconDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
    ];
    CommandBarItemRenderIconDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return CommandBarItemRenderIconDirective;
}());
if (false) {
    /** @type {?} */
    CommandBarItemRenderIconDirective.prototype.templateRef;
}
var CommandBarItemDirective = /** @class */ (function (_super) {
    __extends(CommandBarItemDirective, _super);
    function CommandBarItemDirective(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    CommandBarItemDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item' },] }
    ];
    /** @nocollapse */
    CommandBarItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CommandBarItemDirective.propDecorators = {
        iconOnly: [{ type: Input }],
        tooltipHostProps: [{ type: Input }],
        buttonStyles: [{ type: Input }],
        cacheKey: [{ type: Input }],
        renderedInOverflow: [{ type: Input }],
        commandBarButtonAs: [{ type: Input }]
    };
    return CommandBarItemDirective;
}(ContextualMenuItemDirective$1));
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
var  /**
 * @abstract
 */
CommandBarItemsDirectiveBase = /** @class */ (function (_super) {
    __extends(CommandBarItemsDirectiveBase, _super);
    function CommandBarItemsDirectiveBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CommandBarItemsDirectiveBase.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.directiveItems &&
                this.directiveItems.map((/**
                 * @param {?} directiveItem
                 * @return {?}
                 */
                function (directiveItem) { return (__assign({}, directiveItem, getDataAttributes(directiveItem.elementRef.nativeElement, true), { onClick: (/**
                     * @param {?} ev
                     * @param {?} item
                     * @return {?}
                     */
                    function (ev, item) {
                        directiveItem.click.emit({
                            ev: ev && ev.nativeEvent,
                            item: item,
                        });
                    }) })); })));
        },
        enumerable: true,
        configurable: true
    });
    return CommandBarItemsDirectiveBase;
}(ChangeableItemsDirective));
if (false) {
    /** @type {?} */
    CommandBarItemsDirectiveBase.prototype.directiveItems;
}
var CommandBarItemsDirective = /** @class */ (function (_super) {
    __extends(CommandBarItemsDirective, _super);
    function CommandBarItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarItemsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar > items' },] }
    ];
    CommandBarItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
    };
    return CommandBarItemsDirective;
}(CommandBarItemsDirectiveBase));
if (false) {
    /** @type {?} */
    CommandBarItemsDirective.prototype.directiveItems;
}
var CommandBarFarItemsDirective = /** @class */ (function (_super) {
    __extends(CommandBarFarItemsDirective, _super);
    function CommandBarFarItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarFarItemsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar > far-items' },] }
    ];
    CommandBarFarItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
    };
    return CommandBarFarItemsDirective;
}(CommandBarItemsDirectiveBase));
if (false) {
    /** @type {?} */
    CommandBarFarItemsDirective.prototype.directiveItems;
}
var CommandBarOverflowItemsDirective = /** @class */ (function (_super) {
    __extends(CommandBarOverflowItemsDirective, _super);
    function CommandBarOverflowItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarOverflowItemsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar > overflow-items' },] }
    ];
    CommandBarOverflowItemsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [CommandBarItemDirective,] }]
    };
    return CommandBarOverflowItemsDirective;
}(CommandBarItemsDirectiveBase));
if (false) {
    /** @type {?} */
    CommandBarOverflowItemsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabCommandBarComponent = /** @class */ (function (_super) {
    __extends(FabCommandBarComponent, _super);
    function FabCommandBarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onDataReduced = new EventEmitter();
        _this.onDataGrown = new EventEmitter();
        _this._subscriptions = [];
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabCommandBarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    FabCommandBarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.itemsDirective)
            this._initDirective(this.itemsDirective, 'items');
        if (this.farItemsDirective)
            this._initDirective(this.farItemsDirective, 'farItems');
        if (this.overflowItemsDirective)
            this._initDirective(this.overflowItemsDirective, 'overflowItems');
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @return {?}
     */
    FabCommandBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
    };
    /**
     * @private
     * @template TCommandBarItemsDirective
     * @param {?} directive
     * @param {?} itemsPropertyKey
     * @return {?}
     */
    FabCommandBarComponent.prototype._initDirective = /**
     * @private
     * @template TCommandBarItemsDirective
     * @param {?} directive
     * @param {?} itemsPropertyKey
     * @return {?}
     */
    function (directive, itemsPropertyKey) {
        var _this = this;
        /** @type {?} */
        var transformItemsFunc = (directive instanceof CommandBarItemsDirective && ((/**
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) { return _this._createTransformedItems(newItems); }))) ||
            (directive instanceof CommandBarFarItemsDirective && ((/**
             * @param {?} newItems
             * @return {?}
             */
            function (newItems) { return _this._createTransformedFarItems(newItems); }))) ||
            (directive instanceof CommandBarOverflowItemsDirective &&
                ((/**
                 * @param {?} newItems
                 * @return {?}
                 */
                function (newItems) { return _this._createTransformedOverflowItems(newItems); })));
        null;
        if (!transformItemsFunc) {
            throw new Error('Invalid directive given');
        }
        /** @type {?} */
        var setItems = (/**
         * @param {?} mapper
         * @return {?}
         */
        function (mapper) {
            _this[itemsPropertyKey] = mapper(_this[itemsPropertyKey]);
            transformItemsFunc(_this[itemsPropertyKey]);
            _this.markForCheck();
        });
        // Initial items
        setItems((/**
         * @return {?}
         */
        function () { return directive.items; }));
        // Subscribe to adding/removing items
        this._subscriptions.push(directive.onItemsChanged.subscribe((/**
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) {
            setItems((/**
             * @return {?}
             */
            function () { return newItems.map((/**
             * @param {?} directive
             * @return {?}
             */
            function (directive) { return directive; })); }));
        })));
        // Subscribe for existing items changes
        this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, changes = _a.changes;
            setItems((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.key === key ? mergeItemChanges(item, changes) : item); })); }));
            _this.markForCheck();
        })));
    };
    /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    FabCommandBarComponent.prototype._createTransformedItems = /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    function (newItems) {
        var _this = this;
        this.transformedItems_ = newItems.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._transformCommandBarItemOptionsToProps(item); }));
    };
    /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    FabCommandBarComponent.prototype._createTransformedFarItems = /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    function (newItems) {
        var _this = this;
        this.transformedFarItems_ = newItems.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._transformCommandBarItemOptionsToProps(item); }));
    };
    /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    FabCommandBarComponent.prototype._createTransformedOverflowItems = /**
     * @private
     * @param {?} newItems
     * @return {?}
     */
    function (newItems) {
        var _this = this;
        this.transformedOverflowItems_ = newItems.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._transformCommandBarItemOptionsToProps(item); }));
    };
    /**
     * @private
     * @param {?} itemOptions
     * @return {?}
     */
    FabCommandBarComponent.prototype._transformCommandBarItemOptionsToProps = /**
     * @private
     * @param {?} itemOptions
     * @return {?}
     */
    function (itemOptions) {
        /** @type {?} */
        var sharedProperties = omit(itemOptions, 'renderIcon', 'render');
        // Legacy render mode is used for the icon because otherwise the icon is to the right of the text (instead of the usual left)
        /** @type {?} */
        var iconRenderer = this.createInputJsxRenderer(itemOptions.renderIcon, { legacyRenderMode: true });
        /** @type {?} */
        var renderer = this.createInputJsxRenderer(itemOptions.render);
        // @ts-ignore
        return (/** @type {?} */ (Object.assign({}, sharedProperties, iconRenderer && {
            onRenderIcon: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return iconRenderer({ contextualMenuItem: item }); }),
        }, renderer &&
            ((/** @type {?} */ ({ onRender: (/**
                 * @param {?} item
                 * @param {?} dismissMenu
                 * @return {?}
                 */
                function (item, dismissMenu) { return renderer({ item: item, dismissMenu: dismissMenu }); }) }))))));
    };
    FabCommandBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-command-bar',
                    exportAs: 'fabCommandBar',
                    template: "\n    <CommandBar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [items]=\"transformedItems_\"\n      [farItems]=\"transformedFarItems_\"\n      [overflowItems]=\"transformedOverflowItems_\"\n      [overflowButtonProps]=\"overflowButtonProps\"\n      [overflowButtonAs]=\"overflowButtonAs\"\n      [buttonAs]=\"buttonAs\"\n      [shiftOnReduce]=\"shiftOnReduce\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [ReduceData]=\"onReduceData\"\n      [GrowData]=\"onGrowData\"\n      (onDataReduced)=\"(onDataReduced)\"\n      (onDataGrown)=\"(onDataGrown)\"\n    >\n    </CommandBar>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCommandBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabCommandBarComponent;
}(ReactWrapperComponent));
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
var components$5 = [
    FabCommandBarComponent,
    CommandBarItemsDirective,
    CommandBarFarItemsDirective,
    CommandBarOverflowItemsDirective,
    CommandBarItemDirective,
    CommandBarItemRenderDirective,
    CommandBarItemRenderIconDirective,
];
var FabCommandBarModule = /** @class */ (function () {
    function FabCommandBarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('CommandBar', (/**
         * @return {?}
         */
        function () { return CommandBar; }));
    }
    FabCommandBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabContextualMenuModule$1],
                    declarations: components$5,
                    exports: __spread(components$5, [FabContextualMenuModule$1]),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabCommandBarModule.ctorParameters = function () { return []; };
    return FabCommandBarModule;
}());

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
var ContextualMenuItemRenderDirective = /** @class */ (function () {
    function ContextualMenuItemRenderDirective() {
    }
    ContextualMenuItemRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
    ];
    ContextualMenuItemRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return ContextualMenuItemRenderDirective;
}());
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a ContextualMenuItem.
 */
var ContextualMenuItemRenderIconDirective = /** @class */ (function () {
    function ContextualMenuItemRenderIconDirective() {
    }
    ContextualMenuItemRenderIconDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
    ];
    ContextualMenuItemRenderIconDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return ContextualMenuItemRenderIconDirective;
}());
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderIconDirective.prototype.templateRef;
}
var ContextualMenuItemDirective = /** @class */ (function (_super) {
    __extends(ContextualMenuItemDirective, _super);
    function ContextualMenuItemDirective(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.click = new EventEmitter();
        return _this;
    }
    Object.defineProperty(ContextualMenuItemDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changeableItemsHelper && this._changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextualMenuItemDirective.prototype, "onItemsChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changeableItemsHelper && this._changeableItemsHelper.onItemsChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ContextualMenuItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (nonSelfDirective) {
            /** @type {?} */
            var items = nonSelfDirective.map((/**
             * @param {?} directive
             * @return {?}
             */
            function (directive) { return _this._directiveToContextualMenuItem((/** @type {?} */ (directive))); }));
            if (!_this.subMenuProps) {
                _this.subMenuProps = { items: items };
            }
            else {
                _this.subMenuProps.items = items;
            }
        }));
    };
    /**
     * @return {?}
     */
    ContextualMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._changeableItemsHelper.destroy();
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    ContextualMenuItemDirective.prototype._directiveToContextualMenuItem = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        return __assign({}, directive, getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
             * @param {?} ev
             * @param {?} item
             * @return {?}
             */
            function (ev, item) {
                directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
            }) });
    };
    ContextualMenuItemDirective.decorators = [
        { type: Directive, args: [{ selector: 'contextual-menu-item' },] }
    ];
    /** @nocollapse */
    ContextualMenuItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return ContextualMenuItemDirective;
}(ChangeableItemDirective));
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
var components$6 = [
    ContextualMenuItemDirective,
    ContextualMenuItemRenderDirective,
    ContextualMenuItemRenderIconDirective,
];
var FabContextualMenuModule = /** @class */ (function () {
    function FabContextualMenuModule() {
    }
    FabContextualMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components$6,
                    exports: components$6,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    return FabContextualMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDatePickerComponent = /** @class */ (function (_super) {
    __extends(FabDatePickerComponent, _super);
    function FabDatePickerComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onSelectDate = new EventEmitter();
        _this.onAfterMenuDismiss = new EventEmitter();
        _this.onSelectDateHandler = _this.onSelectDateHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    FabDatePickerComponent.prototype.onSelectDateHandler = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.onSelectDate.emit({
            date: date,
        });
    };
    FabDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-date-picker',
                    exportAs: 'fabDatePicker',
                    template: "\n    <DatePicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [calendarProps]=\"calendarProps\"\n      [textField]=\"textField\"\n      [calloutProps]=\"calloutProps\"\n      [calendarAs]=\"calendarAs\"\n      [label]=\"label\"\n      [isRequired]=\"isRequired\"\n      [disabled]=\"disabled\"\n      [ariaLabel]=\"ariaLabel\"\n      [underlined]=\"underlined\"\n      [pickerAriaLabel]=\"pickerAriaLabel\"\n      [isMonthPickerVisible]=\"isMonthPickerVisible\"\n      [showMonthPickerAsOverlay]=\"showMonthPickerAsOverlay\"\n      [allowTextInput]=\"allowTextInput\"\n      [disableAutoFocus]=\"disableAutoFocus\"\n      [placeholder]=\"placeholder\"\n      [today]=\"today\"\n      [value]=\"value\"\n      [formatDate]=\"formatDate\"\n      [parseDateFromString]=\"parseDateFromString\"\n      [firstDayOfWeek]=\"firstDayOfWeek\"\n      [strings]=\"strings\"\n      [highlightCurrentMonth]=\"highlightCurrentMonth\"\n      [highlightSelectedMonth]=\"highlightSelectedMonth\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [firstWeekOfYear]=\"firstWeekOfYear\"\n      [showGoToToday]=\"showGoToToday\"\n      [borderless]=\"borderless\"\n      [className]=\"className\"\n      [dateTimeFormatter]=\"dateTimeFormatter\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [initialPickerDate]=\"initialPickerDate\"\n      [allFocusable]=\"allFocusable\"\n      [showCloseButton]=\"showCloseButton\"\n      [SelectDate]=\"onSelectDateHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit()\"\n    >\n    </DatePicker>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDatePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabDatePickerComponent;
}(ReactWrapperComponent));
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
var components$7 = [FabDatePickerComponent];
var FabDatePickerModule = /** @class */ (function () {
    function FabDatePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DatePicker', (/**
         * @return {?}
         */
        function () { return DatePicker; }));
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
    FabDatePickerModule.ctorParameters = function () { return []; };
    return FabDatePickerModule;
}());

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
var DetailsListColumnRenderDirective = /** @class */ (function () {
    function DetailsListColumnRenderDirective() {
    }
    DetailsListColumnRenderDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list-column > render' },] }
    ];
    DetailsListColumnRenderDirective.propDecorators = {
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return DetailsListColumnRenderDirective;
}());
if (false) {
    /** @type {?} */
    DetailsListColumnRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive for creating a DetailsListColumn
 */
var DetailsListColumnDirective = /** @class */ (function (_super) {
    __extends(DetailsListColumnDirective, _super);
    function DetailsListColumnDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Callback members
        _this.onColumnClick = new EventEmitter();
        _this.onColumnContextMenu = new EventEmitter();
        _this.onColumnResize = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    DetailsListColumnDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.renderDirective && this.renderDirective.templateRef) {
            this.render = this.renderDirective.templateRef;
        }
    };
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
    return DetailsListColumnDirective;
}(ChangeableItemDirective));
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
var DetailsListColumnsDirective = /** @class */ (function (_super) {
    __extends(DetailsListColumnsDirective, _super);
    function DetailsListColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsListColumnsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.map((/**
             * @param {?} directiveItem
             * @return {?}
             */
            function (directiveItem) { return (__assign({}, directiveItem, { onColumnClick: (/**
                 * @param {?} ev
                 * @param {?} column
                 * @return {?}
                 */
                function (ev, column) {
                    directiveItem.onColumnClick.emit({ ev: ev && ev.nativeEvent, column: column });
                }), onColumnContextMenu: (/**
                 * @param {?=} column
                 * @param {?=} ev
                 * @return {?}
                 */
                function (column, ev) {
                    directiveItem.onColumnContextMenu.emit({ column: column, ev: ev && ev.nativeEvent });
                }), onColumnResize: (/**
                 * @param {?=} width
                 * @return {?}
                 */
                function (width) {
                    directiveItem.onColumnResize.emit({ width: width });
                }) })); }));
        },
        enumerable: true,
        configurable: true
    });
    DetailsListColumnsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list > columns' },] }
    ];
    DetailsListColumnsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [DetailsListColumnDirective,] }]
    };
    return DetailsListColumnsDirective;
}(ChangeableItemsDirective));
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
var DetailsListGroupsDirective = /** @class */ (function (_super) {
    __extends(DetailsListGroupsDirective, _super);
    function DetailsListGroupsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsListGroupsDirective.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.directiveItems.toArray();
        },
        enumerable: true,
        configurable: true
    });
    DetailsListGroupsDirective.decorators = [
        { type: Directive, args: [{ selector: 'fab-details-list > groups' },] }
    ];
    DetailsListGroupsDirective.propDecorators = {
        directiveItems: [{ type: ContentChildren, args: [GroupItemDirective$1,] }]
    };
    return DetailsListGroupsDirective;
}(ChangeableItemsDirective));
if (false) {
    /** @type {?} */
    DetailsListGroupsDirective.prototype.directiveItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDetailsListComponent = /** @class */ (function (_super) {
    __extends(FabDetailsListComponent, _super);
    function FabDetailsListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        // Callback members
        _this.onActiveItemChanged = new EventEmitter();
        _this.onColumnHeaderClick = new EventEmitter();
        _this.onColumnHeaderContextMenu = new EventEmitter();
        _this.onColumnResize = new EventEmitter();
        _this.onDidUpdate = new EventEmitter();
        _this.onItemContextMenu = new EventEmitter();
        _this.onItemInvoked = new EventEmitter();
        _this.onRowDidMount = new EventEmitter();
        _this.onRowWillUnmount = new EventEmitter();
        _this._subscriptions = [];
        // Bind this to access Angular component properties
        _this.onActiveItemChangedHandler = _this.onActiveItemChangedHandler.bind(_this);
        _this.onColumnHeaderClickHandler = _this.onColumnHeaderClickHandler.bind(_this);
        _this.onColumnHeaderContextMenuHandler = _this.onColumnHeaderContextMenuHandler.bind(_this);
        _this.onColumnResizeHandler = _this.onColumnResizeHandler.bind(_this);
        _this.onDidUpdateHandler = _this.onDidUpdateHandler.bind(_this);
        _this.onItemContextMenuHandler = _this.onItemContextMenuHandler.bind(_this);
        _this.onItemInvokedHandler = _this.onItemInvokedHandler.bind(_this);
        _this.onRowDidMountHandler = _this.onRowDidMountHandler.bind(_this);
        _this.onRowWillUnmountHandler = _this.onRowWillUnmountHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCheckbox = this.createRenderPropHandler(this.renderCheckbox);
        this.onRenderDetailsFooter = this.createRenderPropHandler(this.renderDetailsFooter);
        this.onRenderDetailsHeader = this.createRenderPropHandler(this.renderDetailsHeader);
        this.onRenderRow = this.createRenderPropHandler(this.renderRow);
        /** @type {?} */
        var missingItemRenderer = this.createInputJsxRenderer(this.renderMissingItem);
        this.onRenderMissingItem = (/**
         * @param {?} index
         * @param {?} rowProps
         * @return {?}
         */
        function (index, rowProps) { return missingItemRenderer({ index: index, rowProps: rowProps }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.columnsDirective) {
            this._initDirective(this.columnsDirective, 'columns');
        }
        if (this.groupsDirective) {
            this._initDirective(this.groupsDirective, 'groups');
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @return {?}
     */
    FabDetailsListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onActiveItemChangedHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    function (item, index, ev) {
        this.onActiveItemChanged.emit({ item: item, index: index, ev: ev.nativeEvent });
    };
    /**
     * @param {?=} ev
     * @param {?=} column
     * @return {?}
     */
    FabDetailsListComponent.prototype.onColumnHeaderClickHandler = /**
     * @param {?=} ev
     * @param {?=} column
     * @return {?}
     */
    function (ev, column) {
        this.onColumnHeaderClick.emit({ ev: ev.nativeEvent, column: column });
    };
    /**
     * @param {?=} column
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onColumnHeaderContextMenuHandler = /**
     * @param {?=} column
     * @param {?=} ev
     * @return {?}
     */
    function (column, ev) {
        this.onColumnHeaderContextMenu.emit({ column: column, ev: ev.nativeEvent });
    };
    /**
     * @param {?=} column
     * @param {?=} newWidth
     * @param {?=} columnIndex
     * @return {?}
     */
    FabDetailsListComponent.prototype.onColumnResizeHandler = /**
     * @param {?=} column
     * @param {?=} newWidth
     * @param {?=} columnIndex
     * @return {?}
     */
    function (column, newWidth, columnIndex) {
        this.onColumnResize.emit({ column: column, newWidth: newWidth, columnIndex: columnIndex });
    };
    /**
     * @param {?=} detailsList
     * @return {?}
     */
    FabDetailsListComponent.prototype.onDidUpdateHandler = /**
     * @param {?=} detailsList
     * @return {?}
     */
    function (detailsList) {
        this.onDidUpdate.emit({ detailsList: detailsList });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onItemContextMenuHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    function (item, index, ev) {
        this.onItemContextMenu.emit({ item: item, index: index, ev: ev });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    FabDetailsListComponent.prototype.onItemInvokedHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @param {?=} ev
     * @return {?}
     */
    function (item, index, ev) {
        this.onItemInvoked.emit({ item: item, index: index, ev: ev });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabDetailsListComponent.prototype.onRowDidMountHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (item, index) {
        this.onRowDidMount.emit({ item: item, index: index });
    };
    /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabDetailsListComponent.prototype.onRowWillUnmountHandler = /**
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (item, index) {
        this.onRowWillUnmount.emit({ item: item, index: index });
    };
    /**
     * @private
     * @param {?} directive
     * @param {?} propertyKey
     * @return {?}
     */
    FabDetailsListComponent.prototype._initDirective = /**
     * @private
     * @param {?} directive
     * @param {?} propertyKey
     * @return {?}
     */
    function (directive, propertyKey) {
        var _this = this;
        /** @type {?} */
        var transformItemsFunc = this._transformItemsFunction(directive);
        /** @type {?} */
        var setItems = (/**
         * @param {?} mapper
         * @return {?}
         */
        function (mapper) {
            _this[propertyKey] = mapper(_this[propertyKey]);
            transformItemsFunc(_this[propertyKey]);
            _this.markForCheck();
        });
        setItems((/**
         * @return {?}
         */
        function () { return directive.items; }));
        // Subscribe to adding/removing items
        this._subscriptions.push(directive.onItemsChanged.subscribe((/**
         * @param {?} newItems
         * @return {?}
         */
        function (newItems) {
            setItems((/**
             * @return {?}
             */
            function () { return newItems.map((/**
             * @param {?} directive
             * @return {?}
             */
            function (directive) { return directive; })); }));
        })));
        // Subscribe for existing item changes
        this._subscriptions.push(directive.onChildItemChanged.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, changes = _a.changes;
            setItems((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.key === key ? mergeItemChanges(item, changes) : item); })); }));
            _this.markForCheck();
        })));
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    FabDetailsListComponent.prototype._transformItemsFunction = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        var _this = this;
        if (directive instanceof DetailsListColumnsDirective) {
            return (/**
             * @param {?} newColumns
             * @return {?}
             */
            function (newColumns) { return _this._createTransformedColumns(newColumns); });
        }
        else if (directive instanceof DetailsListGroupsDirective) {
            return (/**
             * @param {?} newGroups
             * @return {?}
             */
            function (newGroups) { return _this._createTransformedGroups(newGroups); });
        }
        else {
            throw new Error('Invalid directive given');
        }
    };
    /**
     * @private
     * @param {?} newColumns
     * @return {?}
     */
    FabDetailsListComponent.prototype._createTransformedColumns = /**
     * @private
     * @param {?} newColumns
     * @return {?}
     */
    function (newColumns) {
        var _this = this;
        this.transformedColumns_ = newColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return _this._transformDetailsListColumnOptionsToProps(column); }));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabDetailsListComponent.prototype._transformDetailsListColumnOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var renderer = this.createInputJsxRenderer(options.render);
        return (/** @type {?} */ (Object.assign({}, omit(options, 'render'), renderer &&
            ((/** @type {?} */ ({
                onRender: (/**
                 * @param {?=} item
                 * @param {?=} index
                 * @param {?=} column
                 * @return {?}
                 */
                function (item, index, column) { return renderer({ item: item, index: index, column: column }); }),
            }))))));
    };
    /**
     * @private
     * @param {?} newGroups
     * @return {?}
     */
    FabDetailsListComponent.prototype._createTransformedGroups = /**
     * @private
     * @param {?} newGroups
     * @return {?}
     */
    function (newGroups) {
        this.transformedGroups_ = newGroups;
    };
    FabDetailsListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-details-list',
                    exportAs: 'fabDetailsList',
                    template: "\n    <DetailsList\n      #reactNode\n      [items]=\"items\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaLabelForGrid]=\"ariaLabelForGrid\"\n      [ariaLabelForListHeader]=\"ariaLabelForListHeader\"\n      [ariaLabelForSelectAllCheckbox]=\"ariaLabelForSelectAllCheckbox\"\n      [ariaLabelForSelectionColumn]=\"ariaLabelForSelectionColumn\"\n      [cellStyleProps]=\"cellStyleProps\"\n      [checkButtonAriaLabel]=\"checkButtonAriaLabel\"\n      [checkboxCellClassName]=\"checkboxCellClassName\"\n      [checkboxVisibility]=\"checkboxVisibility\"\n      [className]=\"className\"\n      [columnReorderOptions]=\"columnReorderOptions\"\n      [columns]=\"transformedColumns_\"\n      [compact]=\"compact\"\n      [componentRef]=\"componentRef\"\n      [constrainMode]=\"constrainMode\"\n      [disableSelectionZone]=\"disableSelectionZone\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [enableUpdateAnimations]=\"enableUpdateAnimations\"\n      [enterModalSelectionOnTouch]=\"enterModalSelectionOnTouch\"\n      [getCellValueKey]=\"getCellValueKey\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [getKey]=\"getKey\"\n      [getRowAriaDescribedBy]=\"getRowAriaDescribedBy\"\n      [getRowAriaLabel]=\"getRowAriaLabel\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"transformedGroups_\"\n      [indentWidth]=\"indentWidth\"\n      [initialFocusedIndex]=\"initialFocusedIndex\"\n      [isHeaderVisible]=\"isHeaderVisible\"\n      [layoutMode]=\"layoutMode\"\n      [listProps]=\"listProps\"\n      [minimumPixelsForDrag]=\"minimumPixelsForDrag\"\n      [rowElementEventMap]=\"rowElementEventMap\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [selectionPreservedOnEmptyClick]=\"selectionPreservedOnEmptyClick\"\n      [selectionZoneProps]=\"selectionZoneProps\"\n      [setKey]=\"setKey\"\n      [shouldApplyApplicationRole]=\"shouldApplyApplicationRole\"\n      [skipViewportMeasures]=\"skipViewportMeasures\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [useFastIcons]=\"useFastIcons\"\n      [usePageCache]=\"usePageCache\"\n      [useReducedRowRenderer]=\"useReducedRowRenderer\"\n      [viewport]=\"viewport\"\n      [RenderCheckbox]=\"renderCheckbox && onRenderCheckbox\"\n      [RenderDetailsFooter]=\"renderDetailsFooter && onRenderDetailsFooter\"\n      [RenderDetailsHeader]=\"renderDetailsHeader && onRenderDetailsHeader\"\n      [RenderMissingItem]=\"renderMissingItem && onRenderMissingItem\"\n      [RenderRow]=\"renderDetailsHeader && onRenderRow\"\n      [ActiveItemChanged]=\"onActiveItemChangedHandler\"\n      [ColumnHeaderClick]=\"onColumnHeaderClickHandler\"\n      [ColumnHeaderContextMenu]=\"onColumnHeaderContextMenuHandler\"\n      [ColumnResize]=\"onColumnResizeHandler\"\n      [DidUpdate]=\"onDidUpdateHandler\"\n      [ItemContextMenu]=\"onItemContextMenuHandler\"\n      [ItemInvoked]=\"onItemInvokedHandler\"\n      [RowDidMount]=\"onRowDidMountHandler\"\n      [RowWillUnmount]=\"onRowWillUnmountHandler\"\n      [ShouldVirtualize]=\"onShouldVirtualize\"\n    >\n    </DetailsList>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDetailsListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabDetailsListComponent;
}(ReactWrapperComponent));
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
var components$8 = [
    DetailsListColumnDirective,
    DetailsListColumnRenderDirective,
    DetailsListColumnsDirective,
    DetailsListGroupsDirective,
    FabDetailsListComponent,
];
var FabDetailsListModule = /** @class */ (function () {
    function FabDetailsListModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('DetailsList', (/**
         * @return {?}
         */
        function () { return DetailsList; }));
    }
    FabDetailsListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FabGroupModule$1],
                    declarations: components$8,
                    exports: __spread(components$8, [FabGroupModule$1]),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabDetailsListModule.ctorParameters = function () { return []; };
    return FabDetailsListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDialogComponent = /** @class */ (function (_super) {
    __extends(FabDialogComponent, _super);
    function FabDialogComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onDismiss = new EventEmitter();
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    FabDialogComponent.prototype.onDismissHandler = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    };
    FabDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dialog',
                    exportAs: 'fabDialog',
                    template: "\n    <!-- prettier-ignore -->\n    <Dialog\n      #reactNode\n      [responsiveMode]=\"responsiveMode\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [isClickableOutsideFocusTrap]=\"isClickableOutsideFocusTrap\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [dialogContentProps]=\"dialogContentProps\"\n      [hidden]=\"hidden\"\n      [modalProps]=\"modalProps\"\n      [minWidth]=\"minWidth\"\n      [maxWidth]=\"maxWidth\"\n      (onDismiss)=\"onDismissHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Dialog>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDialogComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabDialogComponent;
}(ReactWrapperComponent));
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
var FabDialogFooterComponent = /** @class */ (function (_super) {
    __extends(FabDialogFooterComponent, _super);
    function FabDialogFooterComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabDialogFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dialog-footer',
                    exportAs: 'fabDialogFooter',
                    template: "\n    <DialogFooter #reactNode [componentRef]=\"componentRef\" [styles]=\"styles\" [theme]=\"theme\" [className]=\"className\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DialogFooter>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDialogFooterComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDialogFooterComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabDialogFooterComponent;
}(ReactWrapperComponent));
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
var FabDialogContentComponent = /** @class */ (function (_super) {
    __extends(FabDialogContentComponent, _super);
    function FabDialogContentComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onDismiss = new EventEmitter();
        return _this;
    }
    FabDialogContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dialog-content',
                    exportAs: 'fabDialogContent',
                    template: "\n    <DialogContent\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [isMultiline]=\"isMultiline\"\n      [showCloseButton]=\"showCloseButton\"\n      [topButtonsProps]=\"topButtonsProps\"\n      [className]=\"className\"\n      [subTextId]=\"subTextId\"\n      [subText]=\"subText\"\n      [titleId]=\"titleId\"\n      [title]=\"title\"\n      [responsiveMode]=\"responsiveMode\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [type]=\"type\"\n      [draggableHeaderClassName]=\"draggableHeaderClassName\"\n      (onDismiss)=\"onDismiss.emit($event && $event.nativeEvent)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </DialogContent>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDialogContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabDialogContentComponent;
}(ReactWrapperComponent));
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
var components$9 = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];
var FabDialogModule = /** @class */ (function () {
    function FabDialogModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Dialog', (/**
         * @return {?}
         */
        function () { return Dialog; }));
        registerElement('DialogContent', (/**
         * @return {?}
         */
        function () { return DialogContent; }));
        registerElement('DialogFooter', (/**
         * @return {?}
         */
        function () { return DialogFooter; }));
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
    FabDialogModule.ctorParameters = function () { return []; };
    return FabDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDividerComponent = /** @class */ (function (_super) {
    __extends(FabDividerComponent, _super);
    function FabDividerComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-vertical-divider',
                    exportAs: 'fabVerticalDivider',
                    template: "\n    <VerticalDivider\n      #reactNode\n      [getClassNames]=\"getClassNames\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n    >\n    </VerticalDivider>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDividerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        getClassNames: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabDividerComponent;
}(ReactWrapperComponent));
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
var components$a = [FabDividerComponent];
var FabDividerModule = /** @class */ (function () {
    function FabDividerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('VerticalDivider', (/**
         * @return {?}
         */
        function () { return VerticalDivider; }));
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
    FabDividerModule.ctorParameters = function () { return []; };
    return FabDividerModule;
}());

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
var declarations$2 = [
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
                    declarations: declarations$2,
                    exports: declarations$2,
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
var FabFabricComponent = /** @class */ (function (_super) {
    __extends(FabFabricComponent, _super);
    function FabFabricComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabFabricComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-fabric',
                    exportAs: 'fabFabric',
                    template: "\n    <Fabric #reactNode [componentRef]=\"componentRef\" [theme]=\"theme\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Fabric>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabFabricComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabFabricComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        theme: [{ type: Input }]
    };
    return FabFabricComponent;
}(ReactWrapperComponent));
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
var components$b = [FabFabricComponent];
var FabFabricModule = /** @class */ (function () {
    function FabFabricModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Fabric', (/**
         * @return {?}
         */
        function () { return Fabric; }));
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
    FabFabricModule.ctorParameters = function () { return []; };
    return FabFabricModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GroupItemDirective = /** @class */ (function (_super) {
    __extends(GroupItemDirective, _super);
    function GroupItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GroupItemDirective.prototype, "onChildItemChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onChildItemChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupItemDirective.prototype, "onItemsChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeableItemsHelper && this.changeableItemsHelper.onItemsChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GroupItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changeableItemsHelper = new ChangeableItemsHelper(this.groupItemsDirectives, this, (/**
         * @param {?} nonSelf
         * @return {?}
         */
        function (nonSelf) {
            _this.children = (/** @type {?} */ (nonSelf));
        }));
    };
    /**
     * @return {?}
     */
    GroupItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.changeableItemsHelper.destroy();
    };
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
    return GroupItemDirective;
}(ChangeableItemDirective));
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
var components$c = [GroupItemDirective];
var FabGroupModule = /** @class */ (function () {
    function FabGroupModule() {
    }
    FabGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components$c,
                    exports: components$c,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    return FabGroupModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabGroupedListComponent = /** @class */ (function (_super) {
    __extends(FabGroupedListComponent, _super);
    function FabGroupedListComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onGroupExpandStateChanged = new EventEmitter();
        // coming from React context - we need to bind to this so we can access the Angular Component properties
        _this.onRenderCell = _this.onRenderCell.bind(_this);
        _this.onGroupExpandStateChangedHandler = _this.onGroupExpandStateChangedHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabGroupedListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderCell = this.createInputJsxRenderer(this.renderCell);
    };
    /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    FabGroupedListComponent.prototype.onRenderCell = /**
     * @param {?=} nestingDepth
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    function (nestingDepth, item, index) {
        return this._renderCell({ nestingDepth: nestingDepth, item: item, index: index });
    };
    /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    FabGroupedListComponent.prototype.onGroupExpandStateChangedHandler = /**
     * @param {?} isSomeGroupExpanded
     * @return {?}
     */
    function (isSomeGroupExpanded) {
        this.onGroupExpandStateChanged.emit({
            isSomeGroupExpanded: isSomeGroupExpanded,
        });
    };
    FabGroupedListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-grouped-list',
                    exportAs: 'fabGroupedList',
                    template: "\n    <GroupedList\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [compact]=\"compact\"\n      [dragDropEvents]=\"dragDropEvents\"\n      [dragDropHelper]=\"dragDropHelper\"\n      [eventsToRegister]=\"eventsToRegister\"\n      [groupProps]=\"groupProps\"\n      [groups]=\"groups\"\n      [items]=\"items\"\n      [listProps]=\"listProps\"\n      [selection]=\"selection\"\n      [selectionMode]=\"selectionMode\"\n      [viewport]=\"viewport\"\n      [usePageCache]=\"usePageCache\"\n      [shouldVirtualize]=\"shouldVirtualize\"\n      [getGroupHeight]=\"getGroupHeight\"\n      [RenderCell]=\"renderCell && onRenderCell\"\n      [GroupExpandStateChanged]=\"onGroupExpandStateChangedHandler\"\n    >\n    </GroupedList>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabGroupedListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabGroupedListComponent;
}(ReactWrapperComponent));
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
var components$d = [FabGroupedListComponent];
var FabGroupedListModule = /** @class */ (function () {
    function FabGroupedListModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('GroupedList', (/**
         * @return {?}
         */
        function () { return GroupedList; }));
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
    FabGroupedListModule.ctorParameters = function () { return []; };
    return FabGroupedListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabExpandingCardComponent = /** @class */ (function (_super) {
    __extends(FabExpandingCardComponent, _super);
    function FabExpandingCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onEnter = new EventEmitter();
        _this.onLeave = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabExpandingCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCompactCard = this.createRenderPropHandler(this.renderCompactCard);
        this.onRenderExpandedCard = this.createRenderPropHandler(this.renderExpandedCard);
    };
    FabExpandingCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-expanding-card',
                    exportAs: 'fabExpandingCard',
                    template: "\n    <ExpandingCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [compactCardHeight]=\"compactCardHeight\"\n      [expandedCardHeight]=\"expandedCardHeight\"\n      [mode]=\"mode\"\n      [RenderCompactCard]=\"renderCompactCard && onRenderCompactCard\"\n      [RenderExpandedCard]=\"renderExpandedCard && onRenderExpandedCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ExpandingCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabExpandingCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabExpandingCardComponent;
}(ReactWrapperComponent));
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
var FabHoverCardComponent = /** @class */ (function (_super) {
    __extends(FabHoverCardComponent, _super);
    function FabHoverCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onCardVisible = new EventEmitter();
        _this.onCardHide = new EventEmitter();
        _this.onCardExpand = new EventEmitter();
        return _this;
    }
    Object.defineProperty(FabHoverCardComponent.prototype, "expandingCardOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandingCardOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandingCardOptions = value;
            if (value) {
                this.transformedExpandingCardProps = this._transformExpandingCardOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabHoverCardComponent.prototype, "plainCardOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._plainCardOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._plainCardOptions = value;
            if (value) {
                this.transformedPlainCardProps = this._transformPlainCardOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabHoverCardComponent.prototype._transformExpandingCardOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderCompactCard', 'renderExpandedCard');
        /** @type {?} */
        var compactCardRenderer = this.createInputJsxRenderer(options.renderCompactCard);
        /** @type {?} */
        var expandedCardRenderer = this.createInputJsxRenderer(options.renderExpandedCard);
        return Object.assign({}, sharedProperties, compactCardRenderer &&
            ((/** @type {?} */ ({ onRenderCompactCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return compactCardRenderer({ data: data }); }) }))), expandedCardRenderer &&
            ((/** @type {?} */ ({ onRenderExpandedCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return expandedCardRenderer({ data: data }); }) }))));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabHoverCardComponent.prototype._transformPlainCardOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderPlainCard');
        /** @type {?} */
        var plainCardRenderer = this.createInputJsxRenderer(options.renderPlainCard);
        return Object.assign({}, sharedProperties, plainCardRenderer &&
            ((/** @type {?} */ ({ onRenderPlainCard: (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return plainCardRenderer({ data: data }); }) }))));
    };
    FabHoverCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-hover-card',
                    exportAs: 'fabHoverCard',
                    template: "\n    <HoverCard\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [type]=\"type\"\n      [expandingCardProps]=\"transformedExpandingCardProps\"\n      [plainCardProps]=\"transformedPlainCardProps\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [cardOpenDelay]=\"cardOpenDelay\"\n      [cardDismissDelay]=\"cardDismissDelay\"\n      [expandedCardOpenDelay]=\"expandedCardOpenDelay\"\n      [sticky]=\"sticky\"\n      [instantOpenOnClick]=\"instantOpenOnClick\"\n      [styles]=\"styles\"\n      [target]=\"target\"\n      [eventListenerTarget]=\"eventListenerTarget\"\n      [trapFocus]=\"trapFocus\"\n      [shouldBlockHoverCard]=\"shouldBlockHoverCard\"\n      [setInitialFocus]=\"setInitialFocus\"\n      [openHotKey]=\"openHotKey\"\n      (onCardVisible)=\"onCardVisible.emit()\"\n      (onCardHide)=\"onCardHide.emit()\"\n      (onCardExpand)=\"onCardExpand.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </HoverCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabHoverCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabHoverCardComponent;
}(ReactWrapperComponent));
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
var FabPlainCardComponent = /** @class */ (function (_super) {
    __extends(FabPlainCardComponent, _super);
    function FabPlainCardComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onEnter = new EventEmitter();
        _this.onLeave = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabPlainCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderPlainCard = this.createRenderPropHandler(this.renderPlainCard);
    };
    FabPlainCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-plain-card',
                    exportAs: 'fabPlainCard',
                    template: "\n    <PlainCard\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintFixed]=\"directionalHintFixed\"\n      [firstFocus]=\"firstFocus\"\n      [gapSpace]=\"gapSpace\"\n      [renderData]=\"renderData\"\n      [styles]=\"styles\"\n      [targetElement]=\"targetElement\"\n      [theme]=\"theme\"\n      [trapFocus]=\"trapFocus\"\n      [RenderPlainCard]=\"renderPlainCard && onRenderPlainCard\"\n      (onEnter)=\"onEnter.emit()\"\n      (onLeave)=\"onLeave.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PlainCard>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPlainCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabPlainCardComponent;
}(ReactWrapperComponent));
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
var components$e = [FabHoverCardComponent, FabExpandingCardComponent, FabPlainCardComponent];
var FabHoverCardModule = /** @class */ (function () {
    function FabHoverCardModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('ExpandingCard', (/**
         * @return {?}
         */
        function () { return ExpandingCard; }));
        registerElement('HoverCard', (/**
         * @return {?}
         */
        function () { return HoverCard; }));
        registerElement('PlainCard', (/**
         * @return {?}
         */
        function () { return PlainCard; }));
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
    FabHoverCardModule.ctorParameters = function () { return []; };
    return FabHoverCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabIconComponent = /** @class */ (function (_super) {
    __extends(FabIconComponent, _super);
    function FabIconComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
    }
    FabIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-icon',
                    exportAs: 'fabIcon',
                    template: "\n    <Icon\n      #reactNode\n      [iconName]=\"iconName\"\n      [ariaLabel]=\"ariaLabel\"\n      [iconType]=\"iconType\"\n      [imageProps]=\"imageProps\"\n      [imageErrorAs]=\"imageErrorAs\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </Icon>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabIconComponent;
}(ReactWrapperComponent));
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
var components$f = [FabIconComponent];
var FabIconModule = /** @class */ (function () {
    function FabIconModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Icon', (/**
         * @return {?}
         */
        function () { return Icon; }));
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
    FabIconModule.ctorParameters = function () { return []; };
    return FabIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabImageComponent = /** @class */ (function (_super) {
    __extends(FabImageComponent, _super);
    function FabImageComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLoadingStateChange = new EventEmitter();
        return _this;
    }
    FabImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-image',
                    exportAs: 'fabImage',
                    template: "\n    <!-- prettier-ignore -->\n    <Image\n      #reactNode\n      [alt]=\"alt\"\n      [crossOrigin]=\"crossOrigin\"\n      [height]=\"height\"\n      [sizes]=\"sizes\"\n      [src]=\"src\"\n      [srcSet]=\"srcSet\"\n      [useMap]=\"useMap\"\n      [width]=\"width\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [shouldFadeIn]=\"shouldFadeIn\"\n      [shouldStartVisible]=\"shouldStartVisible\"\n      [imageFit]=\"imageFit\"\n      [errorSrc]=\"errorSrc\"\n      [maximizeFrame]=\"maximizeFrame\"\n      (onLoadingStateChange)=\"onLoadingStateChange.emit($event)\"\n      [coverStyle]=\"coverStyle\"\n    >\n    </Image>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabImageComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabImageComponent;
}(ReactWrapperComponent));
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
var components$g = [FabImageComponent];
var FabImageModule = /** @class */ (function () {
    function FabImageModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Image', (/**
         * @return {?}
         */
        function () { return Image; }));
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
    FabImageModule.ctorParameters = function () { return []; };
    return FabImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabLinkComponent = /** @class */ (function (_super) {
    __extends(FabLinkComponent, _super);
    function FabLinkComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.LinkType = Link;
        return _this;
    }
    FabLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-link',
                    exportAs: 'fabLink',
                    template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"LinkType\"\n      [href]=\"href\"\n      [type]=\"type\"\n      [download]=\"download\"\n      [hrefLang]=\"hrefLang\"\n      [media]=\"media\"\n      [rel]=\"rel\"\n      [target]=\"target\"\n      [autoFocus]=\"autoFocus\"\n      [form]=\"form\"\n      [formAction]=\"formAction\"\n      [formEncType]=\"formEncType\"\n      [formMethod]=\"formMethod\"\n      [formNoValidate]=\"formNoValidate\"\n      [formTarget]=\"formTarget\"\n      [name]=\"name\"\n      [value]=\"value\"\n      [as]=\"linkAs\"\n      [componentRef]=\"componentRef\"\n      [disabled]=\"disabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [keytipProps]=\"keytipProps\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Disguise>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabLinkComponent;
}(ReactWrapperComponent));
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
var components$h = [FabLinkComponent];
var FabLinkModule = /** @class */ (function () {
    function FabLinkModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Link', (/**
         * @return {?}
         */
        function () { return Link; }));
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
    FabLinkModule.ctorParameters = function () { return []; };
    return FabLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabMarqueeSelectionComponent = /** @class */ (function (_super) {
    __extends(FabMarqueeSelectionComponent, _super);
    function FabMarqueeSelectionComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
    }
    FabMarqueeSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-marquee-selection',
                    exportAs: 'fabMarqueeSelection',
                    template: "\n    <MarqueeSelection\n      #reactNode\n      [selection]=\"selection\"\n      [className]=\"className\"\n      [componentRef]=\"componentRef\"\n      [isDraggingConstrainedToRoot]=\"isDraggingConstrainedToRoot\"\n      [isEnabled]=\"isEnabled\"\n      [rootProps]=\"rootProps\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [ShouldStartSelection]=\"onShouldStartSelection\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MarqueeSelection>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMarqueeSelectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabMarqueeSelectionComponent;
}(ReactWrapperComponent));
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
var components$i = [FabMarqueeSelectionComponent];
var FabMarqueeSelectionModule = /** @class */ (function () {
    function FabMarqueeSelectionModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MarqueeSelection', (/**
         * @return {?}
         */
        function () { return MarqueeSelection; }));
    }
    FabMarqueeSelectionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components$i,
                    exports: __spread(components$i),
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabMarqueeSelectionModule.ctorParameters = function () { return []; };
    return FabMarqueeSelectionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabMessageBarComponent = /** @class */ (function (_super) {
    __extends(FabMessageBarComponent, _super);
    function FabMessageBarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        // Non-React prop, used together with onDismiss to allow it to be an Output EventEmitter.
        _this.dismissable = null;
        _this.onDismiss = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabMessageBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var onRenderActions = this.createRenderPropHandler(this.renderActions);
        this.actions = onRenderActions();
    };
    Object.defineProperty(FabMessageBarComponent.prototype, "onDismissInternal", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.dismissable) {
                return null;
            }
            return (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                _this.onDismiss.emit(ev && ev.nativeEvent);
            });
        },
        enumerable: true,
        configurable: true
    });
    FabMessageBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-message-bar',
                    exportAs: 'fabMessageBar',
                    template: "\n    <MessageBar\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [messageBarType]=\"messageBarType\"\n      [isMultiline]=\"isMultiline\"\n      [dismissButtonAriaLabel]=\"dismissButtonAriaLabel\"\n      [truncated]=\"truncated\"\n      [overflowButtonAriaLabel]=\"overflowButtonAriaLabel\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [Dismiss]=\"onDismissInternal\"\n      [actions]=\"renderActions && actions\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </MessageBar>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMessageBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabMessageBarComponent;
}(ReactWrapperComponent));
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
var components$j = [FabMessageBarComponent];
var FabMessageBarModule = /** @class */ (function () {
    function FabMessageBarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('MessageBar', (/**
         * @return {?}
         */
        function () { return MessageBar; }));
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
    FabMessageBarModule.ctorParameters = function () { return []; };
    return FabMessageBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabModalComponent = /** @class */ (function (_super) {
    __extends(FabModalComponent, _super);
    function FabModalComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLayerDidMount = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onDismissed = new EventEmitter();
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabModalComponent.prototype.onDismissHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onDismiss.emit(ev && ev.nativeEvent);
    };
    FabModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal',
                    exportAs: 'fabModal',
                    template: "\n    <Modal\n      #reactNode\n      [responsiveMode]=\"responsiveMode\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [isClickableOutsideFocusTrap]=\"isClickableOutsideFocusTrap\"\n      [componentRef]=\"componentRef\"\n      [isOpen]=\"isOpen\"\n      [isDarkOverlay]=\"isDarkOverlay\"\n      [layerProps]=\"layerProps\"\n      [isBlocking]=\"isBlocking\"\n      [isModeless]=\"isModeless\"\n      [className]=\"className\"\n      [containerClassName]=\"containerClassName\"\n      [scrollableContentClassName]=\"scrollableContentClassName\"\n      [titleAriaId]=\"titleAriaId\"\n      [subtitleAriaId]=\"subtitleAriaId\"\n      [topOffsetFixed]=\"topOffsetFixed\"\n      [dragOptions]=\"dragOptions\"\n      [Dismiss]=\"onDismissHandler\"\n      (onLayerDidMount)=\"onLayerDidMount.emit()\"\n      (onDismissed)=\"onDismissed.emit()\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Modal>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabModalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabModalComponent;
}(ReactWrapperComponent));
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
var components$k = [FabModalComponent];
var FabModalModule = /** @class */ (function () {
    function FabModalModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Modal', (/**
         * @return {?}
         */
        function () { return Modal; }));
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
    FabModalModule.ctorParameters = function () { return []; };
    return FabModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabPanelComponent = /** @class */ (function (_super) {
    __extends(FabPanelComponent, _super);
    function FabPanelComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onLightDismissClick = new EventEmitter();
        _this.onOpen = new EventEmitter();
        _this.onOpened = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onDismissed = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'fab-panel',
                    exportAs: 'fabPanel',
                    template: "\n    <Panel\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [isOpen]=\"isOpen\"\n      [hasCloseButton]=\"hasCloseButton\"\n      [isLightDismiss]=\"isLightDismiss\"\n      [isHiddenOnDismiss]=\"isHiddenOnDismiss\"\n      [isBlocking]=\"isBlocking\"\n      [isFooterAtBottom]=\"isFooterAtBottom\"\n      [headerText]=\"headerText\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [type]=\"type\"\n      [customWidth]=\"customWidth\"\n      [closeButtonAriaLabel]=\"closeButtonAriaLabel\"\n      [headerClassName]=\"headerClassName\"\n      [elementToFocusOnDismiss]=\"elementToFocusOnDismiss\"\n      [ignoreExternalFocusing]=\"ignoreExternalFocusing\"\n      [forceFocusInsideTrap]=\"forceFocusInsideTrap\"\n      [firstFocusableSelector]=\"firstFocusableSelector\"\n      [focusTrapZoneProps]=\"focusTrapZoneProps\"\n      [layerProps]=\"layerProps\"\n      [componentId]=\"componentId\"\n      [RenderHeader]=\"renderHeader && onRenderHeader\"\n      [RenderNavigation]=\"renderNavigation && onRenderNavigation\"\n      [RenderNavigationContent]=\"renderNavigationContent && onRenderNavigationContent\"\n      [RenderBody]=\"renderBody && onRenderBody\"\n      [RenderFooter]=\"renderFooter && onRenderFooter\"\n      [RenderFooterContent]=\"renderFooterContent && onRenderFooterContent\"\n      [Dismiss]=\"onDismissHandler\"\n      (onOpen)=\"onOpen.emit($event)\"\n      (onOpened)=\"onOpened.emit($event)\"\n      (onDismissed)=\"onDismissed.emit($event)\"\n      (onLightDismissClick)=\"onLightDismissClick.emit($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Panel>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabPanelComponent;
}(ReactWrapperComponent));
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
var components$l = [FabPanelComponent];
var FabPanelModule = /** @class */ (function () {
    function FabPanelModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Panel', (/**
         * @return {?}
         */
        function () { return Panel; }));
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
    FabPanelModule.ctorParameters = function () { return []; };
    return FabPanelModule;
}());

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
var FabPersonaBaseComponent = /** @class */ (function (_super) {
    __extends(FabPersonaBaseComponent, _super);
    function FabPersonaBaseComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onPhotoLoadingStateChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FabPersonaBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderCoin = this.createRenderPropHandler(this.renderCoin);
        this.onRenderInitials = this.createRenderPropHandler(this.renderInitials);
    };
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
    return FabPersonaBaseComponent;
}(ReactWrapperComponent));
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
var FabPersonaComponent = /** @class */ (function (_super) {
    __extends(FabPersonaComponent, _super);
    function FabPersonaComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    /**
     * @return {?}
     */
    FabPersonaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.onRenderPrimaryText = this.createRenderPropHandler(this.renderPrimaryText);
        this.onRenderSecondaryText = this.createRenderPropHandler(this.renderSecondaryText);
        this.onRenderTertiaryText = this.createRenderPropHandler(this.renderTertiaryText);
        this.onRenderOptionalText = this.createRenderPropHandler(this.renderOptionalText);
    };
    FabPersonaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-persona',
                    exportAs: 'fabPersona',
                    template: "\n    <Persona\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showSecondaryText]=\"showSecondaryText\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [className]=\"className\"\n      [styles]=\"styles\"\n      [coinProps]=\"coinProps\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      [RenderPrimaryText]=\"renderPrimaryText && onRenderPrimaryText\"\n      [RenderSecondaryText]=\"renderSecondaryText && onRenderSecondaryText\"\n      [RenderTertiaryText]=\"renderTertiaryText && onRenderTertiaryText\"\n      [RenderOptionalText]=\"renderOptionalText && onRenderOptionalText\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </Persona>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPersonaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabPersonaComponent;
}(FabPersonaBaseComponent));
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
var FabPersonaCoinComponent = /** @class */ (function (_super) {
    __extends(FabPersonaCoinComponent, _super);
    function FabPersonaCoinComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPersonaCoinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-persona-coin',
                    exportAs: 'fabPersonaCoin',
                    template: "\n    <PersonaCoin\n      #reactNode\n      [text]=\"text\"\n      [size]=\"size\"\n      [imageShouldFadeIn]=\"imageShouldFadeIn\"\n      [imageShouldStartVisible]=\"imageShouldStartVisible\"\n      [imageUrl]=\"imageUrl\"\n      [imageAlt]=\"imageAlt\"\n      [imageInitials]=\"imageInitials\"\n      [allowPhoneInitials]=\"allowPhoneInitials\"\n      [initialsColor]=\"initialsColor\"\n      [presence]=\"presence\"\n      [isOutOfOffice]=\"isOutOfOffice\"\n      [secondaryText]=\"secondaryText\"\n      [tertiaryText]=\"tertiaryText\"\n      [optionalText]=\"optionalText\"\n      [hidePersonaDetails]=\"hidePersonaDetails\"\n      [showUnknownPersonaCoin]=\"showUnknownPersonaCoin\"\n      [showInitialsUntilImageLoads]=\"showInitialsUntilImageLoads\"\n      [coinSize]=\"coinSize\"\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [RenderInitials]=\"renderInitials && onRenderInitials\"\n      [RenderCoin]=\"renderCoin && onRenderCoin\"\n      (onPhotoLoadingStateChange)=\"onPhotoLoadingStateChange.emit($event)\"\n    >\n    </PersonaCoin>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPersonaCoinComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPersonaCoinComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        styles: [{ type: Input }],
        className: [{ type: Input }]
    };
    return FabPersonaCoinComponent;
}(FabPersonaBaseComponent));
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
var components$m = [FabPersonaComponent, FabPersonaCoinComponent];
var FabPersonaModule = /** @class */ (function () {
    function FabPersonaModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Persona', (/**
         * @return {?}
         */
        function () { return Persona; }));
        registerElement('PersonaCoin', (/**
         * @return {?}
         */
        function () { return PersonaCoin; }));
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
    FabPersonaModule.ctorParameters = function () { return []; };
    return FabPersonaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabPivotItemComponent = /** @class */ (function (_super) {
    __extends(FabPivotItemComponent, _super);
    function FabPivotItemComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.disabled = false;
        return _this;
    }
    /**
     * @return {?}
     */
    FabPivotItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderItemLink = this.createRenderPropHandler(this.renderItemLink);
    };
    FabPivotItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-pivot-item',
                    exportAs: 'fabPivotItem',
                    template: "\n    <PivotItem\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [headerText]=\"headerText\"\n      [headerButtonProps]=\"headerButtonProps\"\n      [itemKey]=\"itemKey\"\n      [ariaLabel]=\"ariaLabel\"\n      [itemCount]=\"itemCount\"\n      [itemIcon]=\"itemIcon\"\n      [keytipProps]=\"keytipProps\"\n      [RenderItemLink]=\"renderItemLink && onRenderItemLink\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PivotItem>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPivotItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabPivotItemComponent;
}(ReactWrapperComponent));
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
var FabPivotComponent = /** @class */ (function (_super) {
    __extends(FabPivotComponent, _super);
    function FabPivotComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        _this.PivotType = Pivot;
        _this.PivotItemType = PivotItem;
        _this.onLinkClick = new EventEmitter();
        _this.onLinkClickHandler = _this.onLinkClickHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    FabPivotComponent.prototype.onLinkClickHandler = /**
     * @param {?=} item
     * @param {?=} ev
     * @return {?}
     */
    function (item, ev) {
        this.onLinkClick.emit({
            ev: ev && ev.nativeEvent,
            item: item,
        });
    };
    FabPivotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-pivot',
                    exportAs: 'fabPivot',
                    template: "\n    <Disguise\n      #reactNode\n      [disguiseRootAs]=\"PivotType\"\n      [disguiseChildrenAs]=\"PivotItemType\"\n      [ngChildComponents]=\"children || pivotItems?.toArray()\"\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [className]=\"className\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [defaultSelectedIndex]=\"defaultSelectedIndex\"\n      [selectedKey]=\"selectedKey\"\n      [linkSize]=\"linkSize\"\n      [linkFormat]=\"linkFormat\"\n      [headersOnly]=\"headersOnly\"\n      [getTabId]=\"getTabId\"\n      [LinkClick]=\"onLinkClickHandler\"\n    >\n      <ReactContent><ng-content select=\"fab-pivot-item\"></ng-content></ReactContent>\n    </Disguise>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPivotComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabPivotComponent;
}(ReactWrapperComponent));
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
var components$n = [FabPivotComponent, FabPivotItemComponent];
var FabPivotModule = /** @class */ (function () {
    function FabPivotModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Pivot', (/**
         * @return {?}
         */
        function () { return Pivot; }));
        registerElement('PivotItem', (/**
         * @return {?}
         */
        function () { return PivotItem; }));
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
    FabPivotModule.ctorParameters = function () { return []; };
    return FabPivotModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSearchBoxComponent = /** @class */ (function (_super) {
    __extends(FabSearchBoxComponent, _super);
    function FabSearchBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        _this.onChange = new EventEmitter();
        _this.onSearch = new EventEmitter();
        _this.onClear = new EventEmitter();
        _this.onEscape = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onSearchHandler = _this.onSearchHandler.bind(_this);
        _this.onClearHandler = _this.onClearHandler.bind(_this);
        _this.onEscapeHandler = _this.onEscapeHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabSearchBoxComponent.prototype, "clearButtonOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clearButtonOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearButtonOptions = value;
            if (value) {
                this.clearButtonProps = this._transformButtonOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onChangeHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onChange.emit({
            newValue: newValue,
        });
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onSearchHandler = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.onSearch.emit({
            newValue: newValue,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onClearHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onClear.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    };
    /**
     * @param {?=} ev
     * @return {?}
     */
    FabSearchBoxComponent.prototype.onEscapeHandler = /**
     * @param {?=} ev
     * @return {?}
     */
    function (ev) {
        this.onEscape.emit({
            ev: (ev && ev.nativeElement) || ev,
        });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabSearchBoxComponent.prototype._transformButtonOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderIcon', 'renderText', 'renderDescription', 'renderAriaDescription', 'renderChildren', 'renderMenuIcon');
        /** @type {?} */
        var iconRenderer = this.createInputJsxRenderer(options.renderIcon);
        /** @type {?} */
        var textRenderer = this.createInputJsxRenderer(options.renderText);
        /** @type {?} */
        var descriptionRenderer = this.createInputJsxRenderer(options.renderDescription);
        /** @type {?} */
        var ariaDescriptionRenderer = this.createInputJsxRenderer(options.renderAriaDescription);
        /** @type {?} */
        var childrenRenderer = this.createInputJsxRenderer(options.renderChildren);
        /** @type {?} */
        var menuIconRenderer = this.createInputJsxRenderer(options.renderMenuIcon);
        return Object.assign({}, sharedProperties, iconRenderer && ((/** @type {?} */ ({ onRenderIcon: (/**
             * @param {?} props
             * @return {?}
             */
            function (props) { return iconRenderer(props); }) }))), textRenderer && ((/** @type {?} */ ({ onRenderText: (/**
             * @param {?} props
             * @return {?}
             */
            function (props) { return textRenderer(props); }) }))), descriptionRenderer &&
            ((/** @type {?} */ ({ onRenderDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return descriptionRenderer(props); }) }))), ariaDescriptionRenderer &&
            ((/** @type {?} */ ({ onRenderAriaDescription: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return ariaDescriptionRenderer(props); }) }))), childrenRenderer &&
            ((/** @type {?} */ ({ onRenderChildren: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return childrenRenderer(props); }) }))), menuIconRenderer &&
            ((/** @type {?} */ ({ onRenderMenuIcon: (/**
                 * @param {?} props
                 * @return {?}
                 */
                function (props) { return menuIconRenderer(props); }) }))));
    };
    FabSearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-search-box',
                    exportAs: 'fabSearchBox',
                    template: "\n    <SearchBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [clearButtonProps]=\"clearButtonProps\"\n      [iconProps]=\"iconProps\"\n      [underlined]=\"underlined\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [disableAnimation]=\"disableAnimation\"\n      [Change]=\"onChangeHandler\"\n      [Search]=\"onSearchHandler\"\n      [Clear]=\"onClearHandler\"\n      [Escape]=\"onEscapeHandler\"\n    >\n    </SearchBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSearchBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabSearchBoxComponent;
}(ReactWrapperComponent));
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
var components$o = [FabSearchBoxComponent];
var FabSearchBoxModule = /** @class */ (function () {
    function FabSearchBoxModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SearchBox', (/**
         * @return {?}
         */
        function () { return SearchBox; }));
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
    FabSearchBoxModule.ctorParameters = function () { return []; };
    return FabSearchBoxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabShimmerComponent = /** @class */ (function (_super) {
    __extends(FabShimmerComponent, _super);
    function FabShimmerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
    }
    Object.defineProperty(FabShimmerComponent.prototype, "renderCustomElementsGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderCustomElementsGroup;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderCustomElementsGroup = value;
            if (value) {
                this.customElementsGroup = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    FabShimmerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-shimmer',
                    exportAs: 'fabShimmer',
                    template: "\n    <Shimmer\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [width]=\"width\"\n      [isDataLoaded]=\"isDataLoaded\"\n      [shimmerElements]=\"shimmerElements\"\n      [ariaLabel]=\"ariaLabel\"\n      [styles]=\"styles\"\n      [className]=\"className\"\n      [theme]=\"theme\"\n      [shimmerColors]=\"shimmerColors\"\n      [customElementsGroup]=\"customElementsGroup\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Shimmer>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabShimmerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabShimmerComponent;
}(ReactWrapperComponent));
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
var FabShimmerElementsGroupComponent = /** @class */ (function (_super) {
    __extends(FabShimmerElementsGroupComponent, _super);
    function FabShimmerElementsGroupComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
    }
    FabShimmerElementsGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-shimmer-elements-group',
                    exportAs: 'fabShimmerElementsGroup',
                    template: "\n    <ShimmerElementsGroup\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rowHeight]=\"rowHeight\"\n      [shimmerElements]=\"shimmerElements\"\n      [flexWrap]=\"flexWrap\"\n      [width]=\"width\"\n      [theme]=\"theme\"\n      [backgroundColor]=\"backgroundColor\"\n      [styles]=\"styles\"\n    >\n    </ShimmerElementsGroup>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabShimmerElementsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabShimmerElementsGroupComponent;
}(ReactWrapperComponent));
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
var components$p = [FabShimmerComponent, FabShimmerElementsGroupComponent];
var FabShimmerModule = /** @class */ (function () {
    function FabShimmerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Shimmer', (/**
         * @return {?}
         */
        function () { return Shimmer; }));
        registerElement('ShimmerElementsGroup', (/**
         * @return {?}
         */
        function () { return ShimmerElementsGroup; }));
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
    FabShimmerModule.ctorParameters = function () { return []; };
    return FabShimmerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSliderComponent = /** @class */ (function (_super) {
    __extends(FabSliderComponent, _super);
    function FabSliderComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChange = new EventEmitter();
        _this.onChanged = new EventEmitter();
        _this.onChangedHandler = _this.onChangedHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    FabSliderComponent.prototype.onChangedHandler = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        this.onChanged.emit({
            event: event,
            value: value,
        });
    };
    FabSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-slider',
                    exportAs: 'fabSlider',
                    template: "\n    <Slider\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [label]=\"label\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [showValue]=\"showValue\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaValueText]=\"ariaValueText\"\n      [vertical]=\"vertical\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [buttonProps]=\"buttonProps\"\n      [valueFormat]=\"valueFormat\"\n      [originFromZero]=\"originFromZero\"\n      [Changed]=\"onChangedHandler\"\n      (onChange)=\"onChange.emit($event)\"\n    >\n    </Slider>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSliderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabSliderComponent;
}(ReactWrapperComponent));
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
var components$q = [FabSliderComponent];
var FabSliderModule = /** @class */ (function () {
    function FabSliderModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Slider', (/**
         * @return {?}
         */
        function () { return Slider; }));
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
    FabSliderModule.ctorParameters = function () { return []; };
    return FabSliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSpinButtonComponent = /** @class */ (function (_super) {
    __extends(FabSpinButtonComponent, _super);
    function FabSpinButtonComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        return _this;
    }
    FabSpinButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-spin-button',
                    exportAs: 'fabSpinButton',
                    template: "\n    <SpinButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [step]=\"step\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [title]=\"title\"\n      [disabled]=\"disabled\"\n      [className]=\"className\"\n      [label]=\"label\"\n      [labelPosition]=\"labelPosition\"\n      [iconProps]=\"iconProps\"\n      [incrementButtonIcon]=\"incrementButtonIcon\"\n      [decrementButtonIcon]=\"decrementButtonIcon\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [upArrowButtonStyles]=\"upArrowButtonStyles\"\n      [downArrowButtonStyles]=\"downArrowButtonStyles\"\n      [theme]=\"theme\"\n      [incrementButtonAriaLabel]=\"incrementButtonAriaLabel\"\n      [decrementButtonAriaLabel]=\"decrementButtonAriaLabel\"\n      [precision]=\"precision\"\n      [ariaPositionInSet]=\"ariaPositionInSet\"\n      [ariaSetSize]=\"ariaSetSize\"\n      [ariaValueNow]=\"ariaValueNow\"\n      [ariaValueText]=\"ariaValueText\"\n      [keytipProps]=\"keytipProps\"\n      [Validate]=\"validate\"\n      [Increment]=\"increment\"\n      [Decrement]=\"decrement\"\n      (onFocus)=\"onFocus.emit($event)\"\n      (onBlur)=\"onBlur.emit($event)\"\n    >\n    </SpinButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSpinButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabSpinButtonComponent;
}(ReactWrapperComponent));
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
var components$r = [FabSpinButtonComponent];
var FabSpinButtonModule = /** @class */ (function () {
    function FabSpinButtonModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('SpinButton', (/**
         * @return {?}
         */
        function () { return SpinButton; }));
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
    FabSpinButtonModule.ctorParameters = function () { return []; };
    return FabSpinButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabSpinnerComponent = /** @class */ (function (_super) {
    __extends(FabSpinnerComponent, _super);
    function FabSpinnerComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    FabSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-spinner',
                    exportAs: 'fabSpinner',
                    template: "\n    <Spinner\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [type]=\"type\"\n      [size]=\"size\"\n      [label]=\"label\"\n      [className]=\"className\"\n      [ariaLive]=\"ariaLive\"\n      [ariaLabel]=\"ariaLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [labelPosition]=\"labelPosition\"\n    >\n    </Spinner>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabSpinnerComponent;
}(ReactWrapperComponent));
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
var components$s = [FabSpinnerComponent];
var FabSpinnerModule = /** @class */ (function () {
    function FabSpinnerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Spinner', (/**
         * @return {?}
         */
        function () { return Spinner; }));
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
    FabSpinnerModule.ctorParameters = function () { return []; };
    return FabSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabBaseTextFieldComponent = /** @class */ (function (_super) {
    __extends(FabBaseTextFieldComponent, _super);
    function FabBaseTextFieldComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        _this.onClick = new EventEmitter();
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this.onChange = new EventEmitter();
        _this.onBeforeChange = new EventEmitter();
        _this.onNotifyValidationResult = new EventEmitter();
        /* Non-React props, more native support for Angular */
        // support for two-way data binding for `@Input() checked`.
        _this.valueChange = new EventEmitter();
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
    return FabBaseTextFieldComponent;
}(ReactWrapperComponent));
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
        { type: Component, args: [{
                    selector: 'fab-text-field',
                    exportAs: 'fabTextField',
                    template: "\n    <TextField\n      #reactNode\n      [required]=\"required\"\n      [placeholder]=\"placeholder\"\n      [type]=\"type\"\n      [cols]=\"cols\"\n      [colSpan]=\"colSpan\"\n      [rows]=\"rows\"\n      [rowSpan]=\"rowSpan\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [pattern]=\"pattern\"\n      [htmlFor]=\"htmlFor\"\n      [componentRef]=\"componentRef\"\n      [multiline]=\"multiline\"\n      [resizable]=\"resizable\"\n      [autoAdjustHeight]=\"autoAdjustHeight\"\n      [underlined]=\"underlined\"\n      [borderless]=\"borderless\"\n      [label]=\"label\"\n      [description]=\"description\"\n      [prefix]=\"prefix\"\n      [suffix]=\"suffix\"\n      [iconProps]=\"iconProps\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"readOnly\"\n      [errorMessage]=\"errorMessage\"\n      [deferredValidationTime]=\"deferredValidationTime\"\n      [className]=\"className\"\n      [inputClassName]=\"inputClassName\"\n      [ariaLabel]=\"ariaLabel\"\n      [validateOnFocusIn]=\"validateOnFocusIn\"\n      [validateOnFocusOut]=\"validateOnFocusOut\"\n      [validateOnLoad]=\"validateOnLoad\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [autoComplete]=\"autoComplete\"\n      [mask]=\"mask\"\n      [maskChar]=\"maskChar\"\n      [maskFormat]=\"maskFormat\"\n      [GetErrorMessage]=\"getErrorMessage\"\n      [RenderLabel]=\"renderLabel\"\n      [RenderDescription]=\"renderDescription\"\n      [RenderPrefix]=\"renderPrefix\"\n      [RenderSuffix]=\"renderSuffix\"\n      [Change]=\"onChangeHandler\"\n      [BeforeChange]=\"onBeforeChangeHandler\"\n      [maxLength]=\"maxLength\"\n      [NotifyValidationResult]=\"onNotifyValidationResultHandler\"\n      (onClick)=\"onClickHandler($event)\"\n      (onFocus)=\"onFocusHandler($event)\"\n      (onBlur)=\"onBlurHandler($event)\"\n    >\n    </TextField>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTextFieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabTextFieldComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
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
        { type: Component, args: [{
                    selector: 'fab-masked-text-field',
                    exportAs: 'fabMaskedTextField',
                    template: "\n    <MaskedTextField\n      #reactNode\n      [required]=\"required\"\n      [placeholder]=\"placeholder\"\n      [type]=\"type\"\n      [cols]=\"cols\"\n      [colSpan]=\"colSpan\"\n      [rows]=\"rows\"\n      [rowSpan]=\"rowSpan\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [pattern]=\"pattern\"\n      [htmlFor]=\"htmlFor\"\n      [componentRef]=\"componentRef\"\n      [multiline]=\"multiline\"\n      [resizable]=\"resizable\"\n      [autoAdjustHeight]=\"autoAdjustHeight\"\n      [underlined]=\"underlined\"\n      [borderless]=\"borderless\"\n      [label]=\"label\"\n      [description]=\"description\"\n      [prefix]=\"prefix\"\n      [suffix]=\"suffix\"\n      [iconProps]=\"iconProps\"\n      [defaultValue]=\"defaultValue\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"readOnly\"\n      [errorMessage]=\"errorMessage\"\n      [deferredValidationTime]=\"deferredValidationTime\"\n      [className]=\"className\"\n      [inputClassName]=\"inputClassName\"\n      [ariaLabel]=\"ariaLabel\"\n      [validateOnFocusIn]=\"validateOnFocusIn\"\n      [validateOnFocusOut]=\"validateOnFocusOut\"\n      [validateOnLoad]=\"validateOnLoad\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [autoComplete]=\"autoComplete\"\n      [mask]=\"mask\"\n      [maskChar]=\"maskChar\"\n      [maskFormat]=\"maskFormat\"\n      [GetErrorMessage]=\"getErrorMessage\"\n      [RenderLabel]=\"renderLabel\"\n      [RenderDescription]=\"renderDescription\"\n      [RenderPrefix]=\"renderPrefix\"\n      [RenderSuffix]=\"renderSuffix\"\n      [Change]=\"onChangeHandler\"\n      [BeforeChange]=\"onBeforeChangeHandler\"\n      [NotifyValidationResult]=\"onNotifyValidationResultHandler\"\n      (onClick)=\"onClickHandler($event)\"\n      (onFocus)=\"onFocusHandler($event)\"\n      (onBlur)=\"onBlurHandler($event)\"\n    >\n    </MaskedTextField>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabMaskedTextFieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabMaskedTextFieldComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
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
var components$t = [FabTextFieldComponent, FabMaskedTextFieldComponent];
var FabTextFieldModule = /** @class */ (function () {
    function FabTextFieldModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TextField', (/**
         * @return {?}
         */
        function () { return TextField; }));
        registerElement('MaskedTextField', (/**
         * @return {?}
         */
        function () { return MaskedTextField; }));
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
    FabTextFieldModule.ctorParameters = function () { return []; };
    return FabTextFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabToggleComponent = /** @class */ (function (_super) {
    __extends(FabToggleComponent, _super);
    function FabToggleComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onChange = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    FabToggleComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} checked
     * @return {?}
     */
    function (event, checked) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            checked: checked,
        });
    };
    FabToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toggle',
                    exportAs: 'fabToggle',
                    template: "\n    <Toggle\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [Text]=\"onText\"\n      [offText]=\"offText\"\n      [ariaLabel]=\"ariaLabel\"\n      [checked]=\"checked\"\n      [defaultChecked]=\"defaultChecked\"\n      [disabled]=\"disabled\"\n      [inlineLabel]=\"inlineLabel\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [keytipProps]=\"keytipProps\"\n      [Change]=\"onChangeHandler\"\n    >\n    </Toggle>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabToggleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabToggleComponent;
}(ReactWrapperComponent));
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
var components$u = [FabToggleComponent];
var FabToggleModule = /** @class */ (function () {
    function FabToggleModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('Toggle', (/**
         * @return {?}
         */
        function () { return Toggle; }));
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
    FabToggleModule.ctorParameters = function () { return []; };
    return FabToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabTooltipHostComponent = /** @class */ (function (_super) {
    __extends(FabTooltipHostComponent, _super);
    function FabTooltipHostComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onTooltipToggle = new EventEmitter();
        _this.onTooltipToggleHandler = _this.onTooltipToggleHandler.bind(_this);
        return _this;
    }
    Object.defineProperty(FabTooltipHostComponent.prototype, "tooltipOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltipOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltipOptions = value;
            if (value) {
                this.transformedTooltipProps = this._transformTooltipOptionsToProps(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    FabTooltipHostComponent.prototype.onTooltipToggleHandler = /**
     * @param {?} isTooltipVisible
     * @return {?}
     */
    function (isTooltipVisible) {
        this.onTooltipToggle.emit({ isTooltipVisible: isTooltipVisible });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FabTooltipHostComponent.prototype._transformTooltipOptionsToProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var sharedProperties = omit(options, 'renderContent');
        /** @type {?} */
        var contentRenderer = this.createInputJsxRenderer(options.renderContent);
        return Object.assign({}, sharedProperties, contentRenderer && ((/** @type {?} */ ({ onRenderContent: (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return contentRenderer(data); }) }))));
    };
    FabTooltipHostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tooltip-host',
                    exportAs: 'fabTooltipHost',
                    template: "\n    <TooltipHost\n      #reactNode\n      [theme]=\"theme\"\n      [componentRef]=\"componentRef\"\n      [calloutProps]=\"calloutProps\"\n      [closeDelay]=\"closeDelay\"\n      [setAriaDescribedBy]=\"setAriaDescribedBy\"\n      [delay]=\"delay\"\n      [content]=\"content\"\n      [directionalHint]=\"directionalHint\"\n      [directionalHintForRTL]=\"directionalHintForRTL\"\n      [overflowMode]=\"overflowMode\"\n      [hostClassName]=\"hostClassName\"\n      [tooltipProps]=\"transformedTooltipProps\"\n      [TooltipToggle]=\"onTooltipToggleHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </TooltipHost>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTooltipHostComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
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
    return FabTooltipHostComponent;
}(ReactWrapperComponent));
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
var components$v = [FabTooltipHostComponent];
var FabTooltipModule = /** @class */ (function () {
    function FabTooltipModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TooltipHost', (/**
         * @return {?}
         */
        function () { return TooltipHost; }));
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
    FabTooltipModule.ctorParameters = function () { return []; };
    return FabTooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabNavComponent = /** @class */ (function (_super) {
    __extends(FabNavComponent, _super);
    function FabNavComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer) || this;
        _this.onLinkClick = new EventEmitter();
        _this.onLinkExpandClick = new EventEmitter();
        _this.onLinkClickHandler = _this.onLinkClickHandler.bind(_this);
        _this.onLinkExpandClickHandler = _this.onLinkExpandClickHandler.bind(_this);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    FabNavComponent.prototype.onLinkClickHandler = /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    function (event, link) {
        this.onLinkClick.emit({
            event: event.nativeEvent,
            link: link
        });
    };
    /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    FabNavComponent.prototype.onLinkExpandClickHandler = /**
     * @param {?} event
     * @param {?=} link
     * @return {?}
     */
    function (event, link) {
        this.onLinkExpandClick.emit({
            event: event.nativeEvent,
            link: link
        });
    };
    FabNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-nav',
                    exportAs: 'fabNav',
                    template: "\n    <Nav\n      #reactNode\n      [groups]=\"groups\"\n      [LinkClick]=\"onLinkClickHandler\"\n      [selectedKey]=\"selectedKey\"\n      [expandButtonAriaLabel]=\"expandButtonAriaLabel\"\n      [LinkExpandClick]=\"onLinkExpandClickHandler\"\n      [isOnTop]=\"isOnTop\"\n      [initialSelectedKey]=\"initialSelectedKey\"\n      [ariaLabel]=\"ariaLabel\"\n      [selectedAriaLabel]=\"selectedAriaLabel\"\n    >\n    </Nav>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabNavComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabNavComponent;
}(ReactWrapperComponent));
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
var FabNavModule = /** @class */ (function () {
    function FabNavModule() {
        registerElement('Nav', (/**
         * @return {?}
         */
        function () { return Nav; }));
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
    FabNavModule.ctorParameters = function () { return []; };
    return FabNavModule;
}());

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
var FabBasePickerComponent = /** @class */ (function (_super) {
    __extends(FabBasePickerComponent, _super);
    function FabBasePickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone, setHostDisplay: true }) || this;
        _this.onChange = new EventEmitter();
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onRemoveSuggestion = new EventEmitter();
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
        var sharedProperties = omit(options, 'renderNoResultFound', 'renderResultsFooterFull', 'renderResultsFooter');
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
    return FabBasePickerComponent;
}(ReactWrapperComponent));
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
var FabBasePickerModule = /** @class */ (function () {
    function FabBasePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('BasePicker', (/**
         * @return {?}
         */
        function () { return BasePicker; }));
    }
    FabBasePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    schemas: [NO_ERRORS_SCHEMA],
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
        { type: Component, args: [{
                    selector: 'fab-tag-picker',
                    exportAs: 'fabTagPicker',
                    template: "\n    <TagPicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [resolveDelay]=\"resolveDelay\"\n      [defaultSelectedItems]=\"defaultSelectedItems\"\n      [getTextFromItem]=\"getTextFromItem\"\n      [className]=\"className\"\n      [pickerCalloutProps]=\"pickerCalloutProps\"\n      [searchingText]=\"searchingText\"\n      [disabled]=\"disabled\"\n      [itemLimit]=\"itemLimit\"\n      [createGenericItem]=\"createGenericItem\"\n      [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n      [selectedItems]=\"selectedItems\"\n      [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n      [inputProps]=\"inputProps\"\n      [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n      [ItemSelected]=\"onItemSelected\"\n      [InputChange]=\"onInputChange\"\n      [EmptyInputFocus]=\"onEmptyInputFocus\"\n      [ResolveSuggestions]=\"onResolveSuggestions\"\n      [GetMoreResults]=\"onGetMoreResults\"\n      [ValidateInput]=\"onValidateInput\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n      [Change]=\"onChangeHandler\"\n      [Focus]=\"onFocusHandler\"\n      [Blur]=\"onBlurHandler\"\n      [Dismiss]=\"onDismissHandler\"\n      [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n    >\n    </TagPicker>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTagPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabTagPickerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
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
var components$w = [FabTagPickerComponent];
var FabTagPickerModule = /** @class */ (function () {
    function FabTagPickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('TagPicker', (/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (TagPicker)); }));
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
        { type: Component, args: [{
                    selector: 'fab-people-picker',
                    exportAs: 'fabPeoplePicker',
                    template: "\n      <PeoplePicker\n        #reactNode\n        [componentRef]=\"componentRef\"\n        [resolveDelay]=\"resolveDelay\"\n        [defaultSelectedItems]=\"defaultSelectedItems\"\n        [getTextFromItem]=\"getTextFromItem\"\n        [className]=\"className\"\n        [pickerCalloutProps]=\"pickerCalloutProps\"\n        [searchingText]=\"searchingText\"\n        [disabled]=\"disabled\"\n        [itemLimit]=\"itemLimit\"\n        [createGenericItem]=\"createGenericItem\"\n        [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n        [selectedItems]=\"selectedItems\"\n        [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n        [inputProps]=\"inputProps\"\n        [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n        [ItemSelected]=\"onItemSelected\"\n        [InputChange]=\"onInputChange\"\n        [EmptyInputFocus]=\"onEmptyInputFocus\"\n        [ResolveSuggestions]=\"onResolveSuggestions\"\n        [GetMoreResults]=\"onGetMoreResults\"\n        [ValidateInput]=\"onValidateInput\"\n        [RenderItem]=\"renderItem && onRenderItem\"\n        [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n        [Change]=\"onChangeHandler\"\n        [Focus]=\"onFocusHandler\"\n        [Blur]=\"onBlurHandler\"\n        [Dismiss]=\"onDismissHandler\"\n        [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n      >\n      </PeoplePicker>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPeoplePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPeoplePickerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
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
noop(PeoplePickerItemCss);
/** @type {?} */
var components$x = [FabPeoplePickerComponent];
var FabPeoplePickerModule = /** @class */ (function () {
    function FabPeoplePickerModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement('PeoplePicker', (/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (NormalPeoplePickerBase)); }));
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
    FabPeoplePickerModule.ctorParameters = function () { return []; };
    return FabPeoplePickerModule;
}());

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
var FabProgressIndicatorComponent = /** @class */ (function (_super) {
    __extends(FabProgressIndicatorComponent, _super);
    function FabProgressIndicatorComponent(elementRef, changeDetectorRef, renderer) {
        return _super.call(this, elementRef, changeDetectorRef, renderer) || this;
    }
    Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderDescription;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderDescription = value;
            if (value) {
                this.description = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabProgressIndicatorComponent.prototype, "renderLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._renderLabel = value;
            if (value) {
                this.label = this.createInputJsxRenderer(value)({});
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FabProgressIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderProgress = this.createRenderPropHandler(this.renderProgress);
    };
    FabProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-progress-indicator',
                    exportAs: 'fabProgressIndicator',
                    template: "\n    <ProgressIndicator\n      #reactNode\n      [ariaValueText]=\"ariaValueText\"\n      [barHeight]=\"barHeight\"\n      [className]=\"className\"\n      [description]=\"description\"\n      [label]=\"label\"\n      [RenderProgress]=\"renderProgress && onRenderProgress\"\n      [percentComplete]=\"percentComplete\"\n      [progressHidden]=\"progressHidden\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n    >\n    </ProgressIndicator>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabProgressIndicatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return FabProgressIndicatorComponent;
}(ReactWrapperComponent));
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
var components$y = [FabProgressIndicatorComponent];
var FabProgressIndicatorModule = /** @class */ (function () {
    function FabProgressIndicatorModule() {
        registerElement('ProgressIndicator', (/**
         * @return {?}
         */
        function () { return ProgressIndicator; }));
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
    FabProgressIndicatorModule.ctorParameters = function () { return []; };
    return FabProgressIndicatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabRatingComponent = /** @class */ (function (_super) {
    __extends(FabRatingComponent, _super);
    function FabRatingComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { ngZone: ngZone }) || this;
        // tslint:disable-next-line: no-output-on-prefix
        _this.onRatingChange = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        _this.onRatingChanged = new EventEmitter();
        _this.onChange = _this.onChange.bind(_this);
        _this.onChanged = _this.onChanged.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabRatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderStar = this.createRenderPropHandler(this.renderStar);
    };
    /**
     * @param {?=} ev
     * @param {?=} rating
     * @return {?}
     */
    FabRatingComponent.prototype.onChange = /**
     * @param {?=} ev
     * @param {?=} rating
     * @return {?}
     */
    function (ev, rating) {
        this.onRatingChange.emit({
            ev: ev && ev.nativeEvent,
            rating: rating
        });
    };
    /**
     * @param {?=} rating
     * @return {?}
     */
    FabRatingComponent.prototype.onChanged = /**
     * @param {?=} rating
     * @return {?}
     */
    function (rating) {
        this.onRatingChanged.emit({
            rating: rating
        });
    };
    FabRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-rating',
                    exportAs: 'fabRating',
                    template: "\n    <Rating\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [rating]=\"rating\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [allowZeroStars]=\"allowZeroStars\"\n      [icon]=\"icon\"\n      [unselectedIcon]=\"unselectedIcon\"\n      [size]=\"size\"\n      [Change]=\"onChange\"\n      [Changed]=\"onChanged\"\n      [ariaLabelFormat]=\"ariaLabelFormat\"\n      [ariaLabelId]=\"ariaLabelId\"\n      [readOnly]=\"readOnly\"\n      [getAriaLabel]=\"getAriaLabel\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [RenderStar]=\"renderStar && onRenderStar\"\n    ></Rating>\n  ",
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabRatingComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        componentRef: [{ type: Input }],
        rating: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        allowZeroStars: [{ type: Input }],
        icon: [{ type: Input }],
        unselectedIcon: [{ type: Input }],
        size: [{ type: Input }],
        ariaLabelFormat: [{ type: Input }],
        ariaLabelId: [{ type: Input }],
        readOnly: [{ type: Input }],
        getAriaLabel: [{ type: Input }],
        styles: [{ type: Input }],
        theme: [{ type: Input }],
        renderStar: [{ type: Input }],
        onRatingChange: [{ type: Output }],
        onRatingChanged: [{ type: Output }]
    };
    __decorate([
        passProp(),
        __metadata("design:type", Function)
    ], FabRatingComponent.prototype, "onRenderStar", void 0);
    return FabRatingComponent;
}(ReactWrapperComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabRatingComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabRatingComponent.prototype.componentRef;
    /** @type {?} */
    FabRatingComponent.prototype.rating;
    /** @type {?} */
    FabRatingComponent.prototype.min;
    /** @type {?} */
    FabRatingComponent.prototype.max;
    /** @type {?} */
    FabRatingComponent.prototype.allowZeroStars;
    /** @type {?} */
    FabRatingComponent.prototype.icon;
    /** @type {?} */
    FabRatingComponent.prototype.unselectedIcon;
    /** @type {?} */
    FabRatingComponent.prototype.size;
    /** @type {?} */
    FabRatingComponent.prototype.ariaLabelFormat;
    /** @type {?} */
    FabRatingComponent.prototype.ariaLabelId;
    /** @type {?} */
    FabRatingComponent.prototype.readOnly;
    /** @type {?} */
    FabRatingComponent.prototype.getAriaLabel;
    /** @type {?} */
    FabRatingComponent.prototype.styles;
    /** @type {?} */
    FabRatingComponent.prototype.theme;
    /** @type {?} */
    FabRatingComponent.prototype.renderStar;
    /** @type {?} */
    FabRatingComponent.prototype.onRenderStar;
    /** @type {?} */
    FabRatingComponent.prototype.onRatingChange;
    /** @type {?} */
    FabRatingComponent.prototype.onRatingChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$z = [FabRatingComponent];
var FabRatingModule = /** @class */ (function () {
    function FabRatingModule() {
        registerElement('Rating', (/**
         * @return {?}
         */
        function () { return Rating; }));
    }
    FabRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components$z,
                    exports: components$z,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    /** @nocollapse */
    FabRatingModule.ctorParameters = function () { return []; };
    return FabRatingModule;
}());

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

export { CalendarStringsDirective, ComboBoxOptionDirective, ComboBoxOptionsDirective, CommandBarFarItemsDirective, CommandBarItemDirective, CommandBarItemRenderDirective, CommandBarItemRenderIconDirective, CommandBarItemsDirective, CommandBarItemsDirectiveBase, CommandBarOverflowItemsDirective, ContextualMenuItemDirective, ContextualMenuItemRenderDirective, ContextualMenuItemRenderIconDirective, DetailsListColumnDirective, DetailsListColumnRenderDirective, DetailsListColumnsDirective, DetailsListGroupsDirective, DropdownOptionDirective, DropdownOptionsDirective, FabActionButtonComponent, FabBasePickerComponent, FabBasePickerModule, FabBreadcrumbComponent, FabBreadcrumbModule, FabButtonModule, FabCalendarComponent, FabCalendarModule, FabCalloutComponent, FabCalloutModule, FabCheckboxComponent, FabCheckboxModule, FabChoiceGroupComponent, FabChoiceGroupModule, FabComboBoxComponent, FabComboBoxModule, FabCommandBarButtonComponent, FabCommandBarComponent, FabCommandBarModule, FabCompoundButtonComponent, FabContextualMenuModule, FabDatePickerComponent, FabDatePickerModule, FabDefaultButtonComponent, FabDetailsListComponent, FabDetailsListModule, FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent, FabDialogModule, FabDividerComponent, FabDividerModule, FabDropdownComponent, FabDropdownModule, FabExpandingCardComponent, FabFabricComponent, FabFabricModule, FabGroupModule, FabGroupedListComponent, FabGroupedListModule, FabHoverCardComponent, FabHoverCardModule, FabIconButtonComponent, FabIconComponent, FabIconModule, FabImageComponent, FabImageModule, FabLinkComponent, FabLinkModule, FabMarqueeSelectionModule, FabMaskedTextFieldComponent, FabMessageBarButtonComponent, FabMessageBarComponent, FabMessageBarModule, FabModalComponent, FabModalModule, FabNavComponent, FabNavModule, FabPanelComponent, FabPanelModule, FabPeoplePickerComponent, FabPeoplePickerModule, FabPersonaBaseComponent, FabPersonaCoinComponent, FabPersonaComponent, FabPersonaModule, FabPivotComponent, FabPivotItemComponent, FabPivotModule, FabPlainCardComponent, FabPrimaryButtonComponent, FabProgressIndicatorComponent, FabProgressIndicatorModule, FabRatingComponent, FabRatingModule, FabSearchBoxComponent, FabSearchBoxModule, FabShimmerComponent, FabShimmerElementsGroupComponent, FabShimmerModule, FabSliderComponent, FabSliderModule, FabSpinButtonComponent, FabSpinButtonModule, FabSpinnerComponent, FabSpinnerModule, FabSplitButtonComponent, FabTagPickerComponent, FabTagPickerModule, FabTextFieldComponent, FabTextFieldModule, FabToggleComponent, FabToggleModule, FabTooltipHostComponent, FabTooltipModule, GroupItemDirective, FabBaseButtonComponent as ɵa, FabBaseComboBoxComponent as ɵb, FabVirtualizedComboBoxComponent as ɵc, FabMarqueeSelectionComponent as ɵd, FabBaseTextFieldComponent as ɵe };
//# sourceMappingURL=angular-react-fabric.js.map
