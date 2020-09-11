/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import omit from 'angular-react-toolkit/utils/omit';
import { mergeItemChanges } from 'angular-react-toolkit/core/declarative/item-changed';
import { CommandBarFarItemsDirective, CommandBarItemsDirective, CommandBarOverflowItemsDirective, } from './directives/command-bar-items.directives';
var FabCommandBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabCommandBarComponent, _super);
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
export { FabCommandBarComponent };
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
export function ICommandBarItemOptions() { }
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
export function ICommandBarItemOptionsRenderContext() { }
if (false) {
    /** @type {?} */
    ICommandBarItemOptionsRenderContext.prototype.item;
    /** @type {?} */
    ICommandBarItemOptionsRenderContext.prototype.dismissMenu;
}
/**
 * @record
 */
export function ICommandBarItemOptionsRenderIconContext() { }
if (false) {
    /** @type {?} */
    ICommandBarItemOptionsRenderIconContext.prototype.contextualMenuItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvY29tbWFuZC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQW1DLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0YsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxJQUFJLE1BQU0sa0NBQWtDLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHdkYsT0FBTyxFQUNMLDJCQUEyQixFQUMzQix3QkFBd0IsRUFFeEIsZ0NBQWdDLEdBQ2pDLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQ7SUE0QjRDLGtEQUF1QztJQW9DakYsZ0NBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFBN0csWUFDRSxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLFNBQ2pGO1FBZGtCLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7UUFDeEUsaUJBQVcsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQVN4RSxvQkFBYyxHQUFtQixFQUFFLENBQUM7O0lBSXJELENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQTZDO1FBQ3ZELElBQ0UsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNoQixPQUFPLENBQUMsT0FB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Q25ELHdDQUE2Qzs7SUFDN0MsdUNBQTJDOztJQUMzQyw4Q0FBeUQ7O0lBQ3pELDRDQUFxRDs7SUFFckQsdUNBQXNEOztJQUN0RCwwQ0FBeUQ7O0lBQ3pELCtDQUE4RDs7SUFFOUQsK0NBQTJGOztJQUMzRiw2Q0FBeUY7Ozs7O0lBR3pGLG1EQUF1RDs7Ozs7SUFFdkQsc0RBQTBEOzs7OztJQUUxRCwyREFBK0Q7Ozs7O0lBRS9ELGdEQUFxRDs7Ozs7O0FBcUh2RCw0Q0FLQzs7O0lBSEMsNENBQW9GOztJQUNwRix3Q0FBNEU7O0lBQzVFLHNDQUFzQjs7Ozs7QUFHeEIseURBR0M7OztJQUZDLG1EQUFVOztJQUNWLDBEQUFzRDs7Ozs7QUFHeEQsNkRBRUM7OztJQURDLHFFQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgS25vd25LZXlzLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb21tYW5kQmFySXRlbVByb3BzLCBJQ29tbWFuZEJhclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29tbWFuZEJhcic7XHJcbmltcG9ydCB7IElDb250ZXh0dWFsTWVudUl0ZW0gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db250ZXh0dWFsTWVudSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMsIFR5cGVkQ2hhbmdlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9kZWNsYXJhdGlvbnMvYW5ndWxhci90eXBlZC1jaGFuZ2VzJztcclxuaW1wb3J0IG9taXQgZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L3V0aWxzL29taXQnO1xyXG5pbXBvcnQgeyBtZXJnZUl0ZW1DaGFuZ2VzIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvZGVjbGFyYXRpdmUvaXRlbS1jaGFuZ2VkJztcclxuXHJcbmltcG9ydCB7IENvbW1hbmRCYXJJdGVtQ2hhbmdlZFBheWxvYWQsIENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbW1hbmQtYmFyLWl0ZW0uZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlLFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlLFxyXG4gIENvbW1hbmRCYXJPdmVyZmxvd0l0ZW1zRGlyZWN0aXZlLFxyXG59IGZyb20gJy4vZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtcy5kaXJlY3RpdmVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyJyxcclxuICBleHBvcnRBczogJ2ZhYkNvbW1hbmRCYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Q29tbWFuZEJhclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2l0ZW1zXT1cInRyYW5zZm9ybWVkSXRlbXNfXCJcclxuICAgICAgW2Zhckl0ZW1zXT1cInRyYW5zZm9ybWVkRmFySXRlbXNfXCJcclxuICAgICAgW292ZXJmbG93SXRlbXNdPVwidHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zX1wiXHJcbiAgICAgIFtvdmVyZmxvd0J1dHRvblByb3BzXT1cIm92ZXJmbG93QnV0dG9uUHJvcHNcIlxyXG4gICAgICBbb3ZlcmZsb3dCdXR0b25Bc109XCJvdmVyZmxvd0J1dHRvbkFzXCJcclxuICAgICAgW2J1dHRvbkFzXT1cImJ1dHRvbkFzXCJcclxuICAgICAgW3NoaWZ0T25SZWR1Y2VdPVwic2hpZnRPblJlZHVjZVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtSZWR1Y2VEYXRhXT1cIm9uUmVkdWNlRGF0YVwiXHJcbiAgICAgIFtHcm93RGF0YV09XCJvbkdyb3dEYXRhXCJcclxuICAgICAgKG9uRGF0YVJlZHVjZWQpPVwiKG9uRGF0YVJlZHVjZWQpXCJcclxuICAgICAgKG9uRGF0YUdyb3duKT1cIihvbkRhdGFHcm93bilcIlxyXG4gICAgPlxyXG4gICAgPC9Db21tYW5kQmFyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21tYW5kQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDb21tYW5kQmFyUHJvcHM+XHJcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXM8RmFiQ29tbWFuZEJhckNvbXBvbmVudD4sIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZChDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGl0ZW1zRGlyZWN0aXZlPzogQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBmYXJJdGVtc0RpcmVjdGl2ZT86IENvbW1hbmRCYXJGYXJJdGVtc0RpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKENvbW1hbmRCYXJPdmVyZmxvd0l0ZW1zRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBvdmVyZmxvd0l0ZW1zRGlyZWN0aXZlPzogQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElDb21tYW5kQmFyUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIG92ZXJmbG93QnV0dG9uUHJvcHM/OiBJQ29tbWFuZEJhclByb3BzWydvdmVyZmxvd0J1dHRvblByb3BzJ107XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dCdXR0b25Bcz86IElDb21tYW5kQmFyUHJvcHNbJ292ZXJmbG93QnV0dG9uQXMnXTtcclxuICBASW5wdXQoKSBidXR0b25Bcz86IElDb21tYW5kQmFyUHJvcHNbJ2J1dHRvbkFzJ107XHJcbiAgQElucHV0KCkgc2hpZnRPblJlZHVjZT86IElDb21tYW5kQmFyUHJvcHNbJ3NoaWZ0T25SZWR1Y2UnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQ29tbWFuZEJhclByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQ29tbWFuZEJhclByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJQ29tbWFuZEJhclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElDb21tYW5kQmFyUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgb25SZWR1Y2VEYXRhPzogSUNvbW1hbmRCYXJQcm9wc1snb25SZWR1Y2VEYXRhJ107XHJcbiAgQElucHV0KCkgb25Hcm93RGF0YT86IElDb21tYW5kQmFyUHJvcHNbJ29uR3Jvd0RhdGEnXTtcclxuXHJcbiAgQElucHV0KCkgaXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz47XHJcbiAgQElucHV0KCkgZmFySXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz47XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dJdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGF0YVJlZHVjZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW92ZWRJdGVtOiBJQ29tbWFuZEJhckl0ZW1Qcm9wcyB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRhdGFHcm93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3ZlZEl0ZW06IElDb21tYW5kQmFySXRlbVByb3BzIH0+KCk7XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICB0cmFuc2Zvcm1lZEl0ZW1zXzogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1Qcm9wcz47XHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHRyYW5zZm9ybWVkRmFySXRlbXNfOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbVByb3BzPjtcclxuICAvKiogQGludGVybmFsICovXHJcbiAgdHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zXzogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1Qcm9wcz47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogVHlwZWRDaGFuZ2VzPEZhYkNvbW1hbmRCYXJDb21wb25lbnQ+KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXNbJ2l0ZW1zJ10gJiZcclxuICAgICAgY2hhbmdlc1snaXRlbXMnXS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzWydpdGVtcyddLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICBjaGFuZ2VzWydpdGVtcyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKVxyXG4gICAgICB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEl0ZW1zKGNoYW5nZXNbJ2l0ZW1zJ10uY3VycmVudFZhbHVlKTtcclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlc1snZmFySXRlbXMnXSAmJlxyXG4gICAgICBjaGFuZ2VzWydmYXJJdGVtcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2Zhckl0ZW1zJ10uY3VycmVudFZhbHVlICYmXHJcbiAgICAgIGNoYW5nZXNbJ2Zhckl0ZW1zJ10uY3VycmVudFZhbHVlXHJcbiAgICApXHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkRmFySXRlbXMoY2hhbmdlc1snZmFySXRlbXMnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzWydvdmVyZmxvd0l0ZW1zJ10gJiZcclxuICAgICAgY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ292ZXJmbG93SXRlbXMnXS5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKVxyXG4gICAgICB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZE92ZXJmbG93SXRlbXMoY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLmN1cnJlbnRWYWx1ZSk7XHJcblxyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtc0RpcmVjdGl2ZSkgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLml0ZW1zRGlyZWN0aXZlLCAnaXRlbXMnKTtcclxuICAgIGlmICh0aGlzLmZhckl0ZW1zRGlyZWN0aXZlKSB0aGlzLl9pbml0RGlyZWN0aXZlKHRoaXMuZmFySXRlbXNEaXJlY3RpdmUsICdmYXJJdGVtcycpO1xyXG4gICAgaWYgKHRoaXMub3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSkgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLm92ZXJmbG93SXRlbXNEaXJlY3RpdmUsICdvdmVyZmxvd0l0ZW1zJyk7XHJcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RGlyZWN0aXZlPFRDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlPihcclxuICAgIGRpcmVjdGl2ZTogVENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICAgIGl0ZW1zUHJvcGVydHlLZXk6ICdpdGVtcycgfCAnZmFySXRlbXMnIHwgJ292ZXJmbG93SXRlbXMnXHJcbiAgKSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1JdGVtc0Z1bmMgPVxyXG4gICAgICAoZGlyZWN0aXZlIGluc3RhbmNlb2YgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlICYmIChuZXdJdGVtcyA9PiB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEl0ZW1zKG5ld0l0ZW1zKSkpIHx8XHJcbiAgICAgIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUgJiYgKG5ld0l0ZW1zID0+IHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkRmFySXRlbXMobmV3SXRlbXMpKSkgfHxcclxuICAgICAgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIENvbW1hbmRCYXJPdmVyZmxvd0l0ZW1zRGlyZWN0aXZlICYmXHJcbiAgICAgICAgKG5ld0l0ZW1zID0+IHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkT3ZlcmZsb3dJdGVtcyhuZXdJdGVtcykpKTtcclxuICAgIG51bGw7XHJcblxyXG4gICAgaWYgKCF0cmFuc2Zvcm1JdGVtc0Z1bmMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGl2ZSBnaXZlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEl0ZW1zID0gKFxyXG4gICAgICBtYXBwZXI6IChpdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPikgPT4gUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIHRoaXNbaXRlbXNQcm9wZXJ0eUtleV0gPSBtYXBwZXIodGhpc1tpdGVtc1Byb3BlcnR5S2V5XSk7XHJcbiAgICAgIHRyYW5zZm9ybUl0ZW1zRnVuYyh0aGlzW2l0ZW1zUHJvcGVydHlLZXldKTtcclxuXHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWwgaXRlbXNcclxuICAgIHNldEl0ZW1zKCgpID0+IGRpcmVjdGl2ZS5pdGVtcyk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGFkZGluZy9yZW1vdmluZyBpdGVtc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25JdGVtc0NoYW5nZWQuc3Vic2NyaWJlKChuZXdJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKCgpID0+IG5ld0l0ZW1zLm1hcDxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPihkaXJlY3RpdmUgPT4gZGlyZWN0aXZlKSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSBmb3IgZXhpc3RpbmcgaXRlbXMgY2hhbmdlc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25DaGlsZEl0ZW1DaGFuZ2VkLnN1YnNjcmliZSgoeyBrZXksIGNoYW5nZXMgfTogQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcChpdGVtID0+IChpdGVtLmtleSA9PT0ga2V5ID8gbWVyZ2VJdGVtQ2hhbmdlcyhpdGVtLCBjaGFuZ2VzKSA6IGl0ZW0pKSk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVUcmFuc2Zvcm1lZEl0ZW1zKG5ld0l0ZW1zOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+KSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkSXRlbXNfID0gbmV3SXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5fdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVUcmFuc2Zvcm1lZEZhckl0ZW1zKG5ld0l0ZW1zOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+KSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkRmFySXRlbXNfID0gbmV3SXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5fdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVUcmFuc2Zvcm1lZE92ZXJmbG93SXRlbXMobmV3SXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zXyA9IG5ld0l0ZW1zLm1hcChpdGVtID0+IHRoaXMuX3RyYW5zZm9ybUNvbW1hbmRCYXJJdGVtT3B0aW9uc1RvUHJvcHMoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtT3B0aW9uczogSUNvbW1hbmRCYXJJdGVtT3B0aW9ucyk6IElDb21tYW5kQmFySXRlbVByb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KGl0ZW1PcHRpb25zLCAncmVuZGVySWNvbicsICdyZW5kZXInKTtcclxuXHJcbiAgICAvLyBMZWdhY3kgcmVuZGVyIG1vZGUgaXMgdXNlZCBmb3IgdGhlIGljb24gYmVjYXVzZSBvdGhlcndpc2UgdGhlIGljb24gaXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0IChpbnN0ZWFkIG9mIHRoZSB1c3VhbCBsZWZ0KVxyXG4gICAgY29uc3QgaWNvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKGl0ZW1PcHRpb25zLnJlbmRlckljb24sIHsgbGVnYWN5UmVuZGVyTW9kZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKGl0ZW1PcHRpb25zLnJlbmRlcik7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBpY29uUmVuZGVyZXIgJiYge1xyXG4gICAgICAgIG9uUmVuZGVySWNvbjogKGl0ZW06IElDb250ZXh0dWFsTWVudUl0ZW0pID0+IGljb25SZW5kZXJlcih7IGNvbnRleHR1YWxNZW51SXRlbTogaXRlbSB9KSxcclxuICAgICAgfSxcclxuICAgICAgcmVuZGVyZXIgJiZcclxuICAgICAgKHsgb25SZW5kZXI6IChpdGVtLCBkaXNtaXNzTWVudSkgPT4gcmVuZGVyZXIoeyBpdGVtLCBkaXNtaXNzTWVudSB9KSB9IGFzIFBpY2s8SUNvbW1hbmRCYXJJdGVtUHJvcHMsICdvblJlbmRlcic+KVxyXG4gICAgKSBhcyBJQ29tbWFuZEJhckl0ZW1Qcm9wcztcclxuICB9XHJcbn1cclxuXHJcbi8vIE5vdCB1c2luZyBgT21pdGAgaGVyZSBzaW5jZSBpdCBjb25mdXNlZCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciBhbmQgaXQganVzdCBzaG93ZWQgdGhlIHByb3BlcnRpZXMgbGlzdGVkIGhlcmUgKGByZW5kZXJJY29uYCwgYHJlbmRlcmAgYW5kIGBkYXRhYCkuXHJcbi8vIFRoZSB0eXBlIGhlcmUgaXMganVzdCBgT21pdGAgd2l0aG91dCB0aGUgZ2VuZXJpY3MgdGhvdWdoLlxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tYW5kQmFySXRlbU9wdGlvbnM8VERhdGEgPSBhbnk+XHJcbiAgZXh0ZW5kcyBQaWNrPElDb21tYW5kQmFySXRlbVByb3BzLCBFeGNsdWRlPEtub3duS2V5czxJQ29tbWFuZEJhckl0ZW1Qcm9wcz4sICdvblJlbmRlcicgfCAnb25SZW5kZXJJY29uJz4+IHtcclxuICByZWFkb25seSByZW5kZXJJY29uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0PjtcclxuICByZWFkb25seSByZW5kZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbiAgcmVhZG9ubHkgZGF0YT86IFREYXRhO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0IHtcclxuICBpdGVtOiBhbnk7XHJcbiAgZGlzbWlzc01lbnU6IChldj86IGFueSwgZGlzbWlzc0FsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0IHtcclxuICBjb250ZXh0dWFsTWVudUl0ZW06IElDb250ZXh0dWFsTWVudUl0ZW07XHJcbn1cclxuIl19