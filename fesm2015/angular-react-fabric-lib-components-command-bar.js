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
class CommandBarItemDirective extends ContextualMenuItemDirective {
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
const components = [
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
                imports: [CommonModule, FabContextualMenuModule],
                declarations: components,
                exports: [...components, FabContextualMenuModule],
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

export { CommandBarFarItemsDirective, CommandBarItemDirective, CommandBarItemRenderDirective, CommandBarItemRenderIconDirective, CommandBarItemsDirective, CommandBarItemsDirectiveBase, CommandBarOverflowItemsDirective, FabCommandBarComponent, FabCommandBarModule };
//# sourceMappingURL=angular-react-fabric-lib-components-command-bar.js.map
