import { __extends, __assign, __spread } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { Directive, ContentChild, TemplateRef, ElementRef, Input, ContentChildren, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, NgZone, ViewChild, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeableItemsDirective, mergeItemChanges } from '@angular-react/fabric/lib/components/core';
import { getDataAttributes, omit, noop } from '@angular-react/fabric/lib/utils';
import { ContextualMenuItemDirective, FabContextualMenuModule } from '@angular-react/fabric/lib/components/contextual-menu';
import { CommonModule } from '@angular/common';
import * as OverflowSetCss from 'office-ui-fabric-react/lib-amd/components/OverflowSet/OverflowSet.scss';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

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
}(ContextualMenuItemDirective));
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
var components = [
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
                    imports: [CommonModule, FabContextualMenuModule],
                    declarations: components,
                    exports: __spread(components, [FabContextualMenuModule]),
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

export { CommandBarFarItemsDirective, CommandBarItemDirective, CommandBarItemRenderDirective, CommandBarItemRenderIconDirective, CommandBarItemsDirective, CommandBarItemsDirectiveBase, CommandBarOverflowItemsDirective, FabCommandBarComponent, FabCommandBarModule };
//# sourceMappingURL=angular-react-fabric-lib-components-command-bar.js.map
