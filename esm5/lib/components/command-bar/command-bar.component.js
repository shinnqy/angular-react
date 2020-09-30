/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { mergeItemChanges } from '@angular-react/fabric/lib/components/core';
import { omit } from '@angular-react/fabric/lib/utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvY29tbWFuZC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQW1DLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0YsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXZELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isd0JBQXdCLEVBRXhCLGdDQUFnQyxHQUNqQyxNQUFNLDJDQUEyQyxDQUFDO0FBRW5EO0lBNEI0QyxrREFBdUM7SUFvQ2pGLGdDQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQTdHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUNqRjtRQWRrQixtQkFBYSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBQ3hFLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7UUFTeEUsb0JBQWMsR0FBbUIsRUFBRSxDQUFDOztJQUlyRCxDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxPQUE2QztRQUN2RCxJQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEIsT0FB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MkNBQW1EOztJQUNuRCx3Q0FBNkM7O0lBQzdDLHVDQUEyQzs7SUFDM0MsOENBQXlEOztJQUN6RCw0Q0FBcUQ7O0lBRXJELHVDQUFzRDs7SUFDdEQsMENBQXlEOztJQUN6RCwrQ0FBOEQ7O0lBRTlELCtDQUEyRjs7SUFDM0YsNkNBQXlGOzs7OztJQUd6RixtREFBdUQ7Ozs7O0lBRXZELHNEQUEwRDs7Ozs7SUFFMUQsMkRBQStEOzs7OztJQUUvRCxnREFBcUQ7Ozs7OztBQXFIdkQsNENBS0M7OztJQUhDLDRDQUFvRjs7SUFDcEYsd0NBQTRFOztJQUM1RSxzQ0FBc0I7Ozs7O0FBR3hCLHlEQUdDOzs7SUFGQyxtREFBVTs7SUFDViwwREFBc0Q7Ozs7O0FBR3hELDZEQUVDOzs7SUFEQyxxRUFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEtub3duS2V5cywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tbWFuZEJhckl0ZW1Qcm9wcywgSUNvbW1hbmRCYXJQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NvbW1hbmRCYXInO1xyXG5pbXBvcnQgeyBJQ29udGV4dHVhbE1lbnVJdGVtIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29udGV4dHVhbE1lbnUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VJdGVtQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb3JlJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMsIFR5cGVkQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvZGVjbGFyYXRpb25zJztcclxuXHJcbmltcG9ydCB7IENvbW1hbmRCYXJJdGVtQ2hhbmdlZFBheWxvYWQsIENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbW1hbmQtYmFyLWl0ZW0uZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlLFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlLFxyXG4gIENvbW1hbmRCYXJPdmVyZmxvd0l0ZW1zRGlyZWN0aXZlLFxyXG59IGZyb20gJy4vZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtcy5kaXJlY3RpdmVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyJyxcclxuICBleHBvcnRBczogJ2ZhYkNvbW1hbmRCYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Q29tbWFuZEJhclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2l0ZW1zXT1cInRyYW5zZm9ybWVkSXRlbXNfXCJcclxuICAgICAgW2Zhckl0ZW1zXT1cInRyYW5zZm9ybWVkRmFySXRlbXNfXCJcclxuICAgICAgW292ZXJmbG93SXRlbXNdPVwidHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zX1wiXHJcbiAgICAgIFtvdmVyZmxvd0J1dHRvblByb3BzXT1cIm92ZXJmbG93QnV0dG9uUHJvcHNcIlxyXG4gICAgICBbb3ZlcmZsb3dCdXR0b25Bc109XCJvdmVyZmxvd0J1dHRvbkFzXCJcclxuICAgICAgW2J1dHRvbkFzXT1cImJ1dHRvbkFzXCJcclxuICAgICAgW3NoaWZ0T25SZWR1Y2VdPVwic2hpZnRPblJlZHVjZVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtSZWR1Y2VEYXRhXT1cIm9uUmVkdWNlRGF0YVwiXHJcbiAgICAgIFtHcm93RGF0YV09XCJvbkdyb3dEYXRhXCJcclxuICAgICAgKG9uRGF0YVJlZHVjZWQpPVwiKG9uRGF0YVJlZHVjZWQpXCJcclxuICAgICAgKG9uRGF0YUdyb3duKT1cIihvbkRhdGFHcm93bilcIlxyXG4gICAgPlxyXG4gICAgPC9Db21tYW5kQmFyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21tYW5kQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDb21tYW5kQmFyUHJvcHM+XHJcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXM8RmFiQ29tbWFuZEJhckNvbXBvbmVudD4sIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZChDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGl0ZW1zRGlyZWN0aXZlPzogQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBmYXJJdGVtc0RpcmVjdGl2ZT86IENvbW1hbmRCYXJGYXJJdGVtc0RpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKENvbW1hbmRCYXJPdmVyZmxvd0l0ZW1zRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBvdmVyZmxvd0l0ZW1zRGlyZWN0aXZlPzogQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElDb21tYW5kQmFyUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIG92ZXJmbG93QnV0dG9uUHJvcHM/OiBJQ29tbWFuZEJhclByb3BzWydvdmVyZmxvd0J1dHRvblByb3BzJ107XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dCdXR0b25Bcz86IElDb21tYW5kQmFyUHJvcHNbJ292ZXJmbG93QnV0dG9uQXMnXTtcclxuICBASW5wdXQoKSBidXR0b25Bcz86IElDb21tYW5kQmFyUHJvcHNbJ2J1dHRvbkFzJ107XHJcbiAgQElucHV0KCkgc2hpZnRPblJlZHVjZT86IElDb21tYW5kQmFyUHJvcHNbJ3NoaWZ0T25SZWR1Y2UnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQ29tbWFuZEJhclByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQ29tbWFuZEJhclByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJQ29tbWFuZEJhclByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElDb21tYW5kQmFyUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgb25SZWR1Y2VEYXRhPzogSUNvbW1hbmRCYXJQcm9wc1snb25SZWR1Y2VEYXRhJ107XHJcbiAgQElucHV0KCkgb25Hcm93RGF0YT86IElDb21tYW5kQmFyUHJvcHNbJ29uR3Jvd0RhdGEnXTtcclxuXHJcbiAgQElucHV0KCkgaXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz47XHJcbiAgQElucHV0KCkgZmFySXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz47XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dJdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGF0YVJlZHVjZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW92ZWRJdGVtOiBJQ29tbWFuZEJhckl0ZW1Qcm9wcyB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkRhdGFHcm93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3ZlZEl0ZW06IElDb21tYW5kQmFySXRlbVByb3BzIH0+KCk7XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICB0cmFuc2Zvcm1lZEl0ZW1zXzogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1Qcm9wcz47XHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHRyYW5zZm9ybWVkRmFySXRlbXNfOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbVByb3BzPjtcclxuICAvKiogQGludGVybmFsICovXHJcbiAgdHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zXzogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1Qcm9wcz47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogVHlwZWRDaGFuZ2VzPEZhYkNvbW1hbmRCYXJDb21wb25lbnQ+KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXNbJ2l0ZW1zJ10gJiZcclxuICAgICAgY2hhbmdlc1snaXRlbXMnXS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzWydpdGVtcyddLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICBjaGFuZ2VzWydpdGVtcyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKVxyXG4gICAgICB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEl0ZW1zKGNoYW5nZXNbJ2l0ZW1zJ10uY3VycmVudFZhbHVlKTtcclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlc1snZmFySXRlbXMnXSAmJlxyXG4gICAgICBjaGFuZ2VzWydmYXJJdGVtcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2Zhckl0ZW1zJ10uY3VycmVudFZhbHVlICYmXHJcbiAgICAgIGNoYW5nZXNbJ2Zhckl0ZW1zJ10uY3VycmVudFZhbHVlXHJcbiAgICApXHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkRmFySXRlbXMoY2hhbmdlc1snZmFySXRlbXMnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzWydvdmVyZmxvd0l0ZW1zJ10gJiZcclxuICAgICAgY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ292ZXJmbG93SXRlbXMnXS5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLmN1cnJlbnRWYWx1ZVxyXG4gICAgKVxyXG4gICAgICB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZE92ZXJmbG93SXRlbXMoY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLmN1cnJlbnRWYWx1ZSk7XHJcblxyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtc0RpcmVjdGl2ZSkgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLml0ZW1zRGlyZWN0aXZlLCAnaXRlbXMnKTtcclxuICAgIGlmICh0aGlzLmZhckl0ZW1zRGlyZWN0aXZlKSB0aGlzLl9pbml0RGlyZWN0aXZlKHRoaXMuZmFySXRlbXNEaXJlY3RpdmUsICdmYXJJdGVtcycpO1xyXG4gICAgaWYgKHRoaXMub3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSkgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLm92ZXJmbG93SXRlbXNEaXJlY3RpdmUsICdvdmVyZmxvd0l0ZW1zJyk7XHJcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RGlyZWN0aXZlPFRDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmVCYXNlPihcclxuICAgIGRpcmVjdGl2ZTogVENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSxcclxuICAgIGl0ZW1zUHJvcGVydHlLZXk6ICdpdGVtcycgfCAnZmFySXRlbXMnIHwgJ292ZXJmbG93SXRlbXMnXHJcbiAgKSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1JdGVtc0Z1bmMgPVxyXG4gICAgICAoZGlyZWN0aXZlIGluc3RhbmNlb2YgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlICYmIChuZXdJdGVtcyA9PiB0aGlzLl9jcmVhdGVUcmFuc2Zvcm1lZEl0ZW1zKG5ld0l0ZW1zKSkpIHx8XHJcbiAgICAgIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUgJiYgKG5ld0l0ZW1zID0+IHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkRmFySXRlbXMobmV3SXRlbXMpKSkgfHxcclxuICAgICAgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIENvbW1hbmRCYXJPdmVyZmxvd0l0ZW1zRGlyZWN0aXZlICYmXHJcbiAgICAgICAgKG5ld0l0ZW1zID0+IHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkT3ZlcmZsb3dJdGVtcyhuZXdJdGVtcykpKTtcclxuICAgIG51bGw7XHJcblxyXG4gICAgaWYgKCF0cmFuc2Zvcm1JdGVtc0Z1bmMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGl2ZSBnaXZlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEl0ZW1zID0gKFxyXG4gICAgICBtYXBwZXI6IChpdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPikgPT4gUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIHRoaXNbaXRlbXNQcm9wZXJ0eUtleV0gPSBtYXBwZXIodGhpc1tpdGVtc1Byb3BlcnR5S2V5XSk7XHJcbiAgICAgIHRyYW5zZm9ybUl0ZW1zRnVuYyh0aGlzW2l0ZW1zUHJvcGVydHlLZXldKTtcclxuXHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWwgaXRlbXNcclxuICAgIHNldEl0ZW1zKCgpID0+IGRpcmVjdGl2ZS5pdGVtcyk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIGFkZGluZy9yZW1vdmluZyBpdGVtc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25JdGVtc0NoYW5nZWQuc3Vic2NyaWJlKChuZXdJdGVtczogUXVlcnlMaXN0PENvbW1hbmRCYXJJdGVtRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKCgpID0+IG5ld0l0ZW1zLm1hcDxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPihkaXJlY3RpdmUgPT4gZGlyZWN0aXZlKSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSBmb3IgZXhpc3RpbmcgaXRlbXMgY2hhbmdlc1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBkaXJlY3RpdmUub25DaGlsZEl0ZW1DaGFuZ2VkLnN1YnNjcmliZSgoeyBrZXksIGNoYW5nZXMgfTogQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcChpdGVtID0+IChpdGVtLmtleSA9PT0ga2V5ID8gbWVyZ2VJdGVtQ2hhbmdlcyhpdGVtLCBjaGFuZ2VzKSA6IGl0ZW0pKSk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVUcmFuc2Zvcm1lZEl0ZW1zKG5ld0l0ZW1zOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+KSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkSXRlbXNfID0gbmV3SXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5fdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVUcmFuc2Zvcm1lZEZhckl0ZW1zKG5ld0l0ZW1zOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+KSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkRmFySXRlbXNfID0gbmV3SXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5fdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVUcmFuc2Zvcm1lZE92ZXJmbG93SXRlbXMobmV3SXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zXyA9IG5ld0l0ZW1zLm1hcChpdGVtID0+IHRoaXMuX3RyYW5zZm9ybUNvbW1hbmRCYXJJdGVtT3B0aW9uc1RvUHJvcHMoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtT3B0aW9uczogSUNvbW1hbmRCYXJJdGVtT3B0aW9ucyk6IElDb21tYW5kQmFySXRlbVByb3BzIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KGl0ZW1PcHRpb25zLCAncmVuZGVySWNvbicsICdyZW5kZXInKTtcclxuXHJcbiAgICAvLyBMZWdhY3kgcmVuZGVyIG1vZGUgaXMgdXNlZCBmb3IgdGhlIGljb24gYmVjYXVzZSBvdGhlcndpc2UgdGhlIGljb24gaXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0IChpbnN0ZWFkIG9mIHRoZSB1c3VhbCBsZWZ0KVxyXG4gICAgY29uc3QgaWNvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKGl0ZW1PcHRpb25zLnJlbmRlckljb24sIHsgbGVnYWN5UmVuZGVyTW9kZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKGl0ZW1PcHRpb25zLnJlbmRlcik7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBpY29uUmVuZGVyZXIgJiYge1xyXG4gICAgICAgIG9uUmVuZGVySWNvbjogKGl0ZW06IElDb250ZXh0dWFsTWVudUl0ZW0pID0+IGljb25SZW5kZXJlcih7IGNvbnRleHR1YWxNZW51SXRlbTogaXRlbSB9KSxcclxuICAgICAgfSxcclxuICAgICAgcmVuZGVyZXIgJiZcclxuICAgICAgKHsgb25SZW5kZXI6IChpdGVtLCBkaXNtaXNzTWVudSkgPT4gcmVuZGVyZXIoeyBpdGVtLCBkaXNtaXNzTWVudSB9KSB9IGFzIFBpY2s8SUNvbW1hbmRCYXJJdGVtUHJvcHMsICdvblJlbmRlcic+KVxyXG4gICAgKSBhcyBJQ29tbWFuZEJhckl0ZW1Qcm9wcztcclxuICB9XHJcbn1cclxuXHJcbi8vIE5vdCB1c2luZyBgT21pdGAgaGVyZSBzaW5jZSBpdCBjb25mdXNlZCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciBhbmQgaXQganVzdCBzaG93ZWQgdGhlIHByb3BlcnRpZXMgbGlzdGVkIGhlcmUgKGByZW5kZXJJY29uYCwgYHJlbmRlcmAgYW5kIGBkYXRhYCkuXHJcbi8vIFRoZSB0eXBlIGhlcmUgaXMganVzdCBgT21pdGAgd2l0aG91dCB0aGUgZ2VuZXJpY3MgdGhvdWdoLlxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tYW5kQmFySXRlbU9wdGlvbnM8VERhdGEgPSBhbnk+XHJcbiAgZXh0ZW5kcyBQaWNrPElDb21tYW5kQmFySXRlbVByb3BzLCBFeGNsdWRlPEtub3duS2V5czxJQ29tbWFuZEJhckl0ZW1Qcm9wcz4sICdvblJlbmRlcicgfCAnb25SZW5kZXJJY29uJz4+IHtcclxuICByZWFkb25seSByZW5kZXJJY29uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0PjtcclxuICByZWFkb25seSByZW5kZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbiAgcmVhZG9ubHkgZGF0YT86IFREYXRhO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0IHtcclxuICBpdGVtOiBhbnk7XHJcbiAgZGlzbWlzc01lbnU6IChldj86IGFueSwgZGlzbWlzc0FsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0IHtcclxuICBjb250ZXh0dWFsTWVudUl0ZW06IElDb250ZXh0dWFsTWVudUl0ZW07XHJcbn1cclxuIl19