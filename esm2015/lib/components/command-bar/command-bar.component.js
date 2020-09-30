/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, } from '@angular/core';
import { mergeItemChanges } from '@angular-react/fabric/lib/components/core';
import { omit } from '@angular-react/fabric/lib/utils';
import { CommandBarFarItemsDirective, CommandBarItemsDirective, CommandBarOverflowItemsDirective, } from './directives/command-bar-items.directives';
export class FabCommandBarComponent extends ReactWrapperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXIvY29tbWFuZC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBbUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJdkQsT0FBTyxFQUNMLDJCQUEyQixFQUMzQix3QkFBd0IsRUFFeEIsZ0NBQWdDLEdBQ2pDLE1BQU0sMkNBQTJDLENBQUM7QUE4Qm5ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxxQkFBdUM7Ozs7Ozs7SUFvQ2pGLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFiaEUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUN4RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBU3hFLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztJQUlyRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE2QztRQUN2RCxJQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEIs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OztJQUZDLG1EQUFVOztJQUNWLDBEQUFzRDs7Ozs7QUFHeEQsNkRBRUM7OztJQURDLHFFQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgS25vd25LZXlzLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb21tYW5kQmFySXRlbVByb3BzLCBJQ29tbWFuZEJhclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29tbWFuZEJhcic7XHJcbmltcG9ydCB7IElDb250ZXh0dWFsTWVudUl0ZW0gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db250ZXh0dWFsTWVudSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtZXJnZUl0ZW1DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvcmUnO1xyXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IE9uQ2hhbmdlcywgVHlwZWRDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9kZWNsYXJhdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCwgQ29tbWFuZEJhckl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzJztcclxuaW1wb3J0IHtcclxuICBDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUsXHJcbiAgQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlLFxyXG4gIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZUJhc2UsXHJcbiAgQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUsXHJcbn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbW1hbmQtYmFyLWl0ZW1zLmRpcmVjdGl2ZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiQ29tbWFuZEJhcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxDb21tYW5kQmFyXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbaXRlbXNdPVwidHJhbnNmb3JtZWRJdGVtc19cIlxyXG4gICAgICBbZmFySXRlbXNdPVwidHJhbnNmb3JtZWRGYXJJdGVtc19cIlxyXG4gICAgICBbb3ZlcmZsb3dJdGVtc109XCJ0cmFuc2Zvcm1lZE92ZXJmbG93SXRlbXNfXCJcclxuICAgICAgW292ZXJmbG93QnV0dG9uUHJvcHNdPVwib3ZlcmZsb3dCdXR0b25Qcm9wc1wiXHJcbiAgICAgIFtvdmVyZmxvd0J1dHRvbkFzXT1cIm92ZXJmbG93QnV0dG9uQXNcIlxyXG4gICAgICBbYnV0dG9uQXNdPVwiYnV0dG9uQXNcIlxyXG4gICAgICBbc2hpZnRPblJlZHVjZV09XCJzaGlmdE9uUmVkdWNlXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW1JlZHVjZURhdGFdPVwib25SZWR1Y2VEYXRhXCJcclxuICAgICAgW0dyb3dEYXRhXT1cIm9uR3Jvd0RhdGFcIlxyXG4gICAgICAob25EYXRhUmVkdWNlZCk9XCIob25EYXRhUmVkdWNlZClcIlxyXG4gICAgICAob25EYXRhR3Jvd24pPVwiKG9uRGF0YUdyb3duKVwiXHJcbiAgICA+XHJcbiAgICA8L0NvbW1hbmRCYXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNvbW1hbmRCYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNvbW1hbmRCYXJQcm9wcz5cclxuICBpbXBsZW1lbnRzIE9uQ2hhbmdlczxGYWJDb21tYW5kQmFyQ29tcG9uZW50PiwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkKENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcmVhZG9ubHkgaXRlbXNEaXJlY3RpdmU/OiBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChDb21tYW5kQmFyRmFySXRlbXNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGZhckl0ZW1zRGlyZWN0aXZlPzogQ29tbWFuZEJhckZhckl0ZW1zRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IG92ZXJmbG93SXRlbXNEaXJlY3RpdmU/OiBDb21tYW5kQmFyT3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUNvbW1hbmRCYXJQcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgb3ZlcmZsb3dCdXR0b25Qcm9wcz86IElDb21tYW5kQmFyUHJvcHNbJ292ZXJmbG93QnV0dG9uUHJvcHMnXTtcclxuICBASW5wdXQoKSBvdmVyZmxvd0J1dHRvbkFzPzogSUNvbW1hbmRCYXJQcm9wc1snb3ZlcmZsb3dCdXR0b25BcyddO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkFzPzogSUNvbW1hbmRCYXJQcm9wc1snYnV0dG9uQXMnXTtcclxuICBASW5wdXQoKSBzaGlmdE9uUmVkdWNlPzogSUNvbW1hbmRCYXJQcm9wc1snc2hpZnRPblJlZHVjZSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElDb21tYW5kQmFyUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElDb21tYW5kQmFyUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElDb21tYW5kQmFyUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUNvbW1hbmRCYXJQcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBvblJlZHVjZURhdGE/OiBJQ29tbWFuZEJhclByb3BzWydvblJlZHVjZURhdGEnXTtcclxuICBASW5wdXQoKSBvbkdyb3dEYXRhPzogSUNvbW1hbmRCYXJQcm9wc1snb25Hcm93RGF0YSddO1xyXG5cclxuICBASW5wdXQoKSBpdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPjtcclxuICBASW5wdXQoKSBmYXJJdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPjtcclxuICBASW5wdXQoKSBvdmVyZmxvd0l0ZW1zOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EYXRhUmVkdWNlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3ZlZEl0ZW06IElDb21tYW5kQmFySXRlbVByb3BzIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGF0YUdyb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdmVkSXRlbTogSUNvbW1hbmRCYXJJdGVtUHJvcHMgfT4oKTtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHRyYW5zZm9ybWVkSXRlbXNfOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbVByb3BzPjtcclxuICAvKiogQGludGVybmFsICovXHJcbiAgdHJhbnNmb3JtZWRGYXJJdGVtc186IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtUHJvcHM+O1xyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICB0cmFuc2Zvcm1lZE92ZXJmbG93SXRlbXNfOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbVByb3BzPjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBUeXBlZENoYW5nZXM8RmFiQ29tbWFuZEJhckNvbXBvbmVudD4pIHtcclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlc1snaXRlbXMnXSAmJlxyXG4gICAgICBjaGFuZ2VzWydpdGVtcyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2l0ZW1zJ10uY3VycmVudFZhbHVlICYmXHJcbiAgICAgIGNoYW5nZXNbJ2l0ZW1zJ10uY3VycmVudFZhbHVlXHJcbiAgICApXHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkSXRlbXMoY2hhbmdlc1snaXRlbXMnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzWydmYXJJdGVtcyddICYmXHJcbiAgICAgIGNoYW5nZXNbJ2Zhckl0ZW1zJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snZmFySXRlbXMnXS5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgY2hhbmdlc1snZmFySXRlbXMnXS5jdXJyZW50VmFsdWVcclxuICAgIClcclxuICAgICAgdGhpcy5fY3JlYXRlVHJhbnNmb3JtZWRGYXJJdGVtcyhjaGFuZ2VzWydmYXJJdGVtcyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXNbJ292ZXJmbG93SXRlbXMnXSAmJlxyXG4gICAgICBjaGFuZ2VzWydvdmVyZmxvd0l0ZW1zJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snb3ZlcmZsb3dJdGVtcyddLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICBjaGFuZ2VzWydvdmVyZmxvd0l0ZW1zJ10uY3VycmVudFZhbHVlXHJcbiAgICApXHJcbiAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkT3ZlcmZsb3dJdGVtcyhjaGFuZ2VzWydvdmVyZmxvd0l0ZW1zJ10uY3VycmVudFZhbHVlKTtcclxuXHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zRGlyZWN0aXZlKSB0aGlzLl9pbml0RGlyZWN0aXZlKHRoaXMuaXRlbXNEaXJlY3RpdmUsICdpdGVtcycpO1xyXG4gICAgaWYgKHRoaXMuZmFySXRlbXNEaXJlY3RpdmUpIHRoaXMuX2luaXREaXJlY3RpdmUodGhpcy5mYXJJdGVtc0RpcmVjdGl2ZSwgJ2Zhckl0ZW1zJyk7XHJcbiAgICBpZiAodGhpcy5vdmVyZmxvd0l0ZW1zRGlyZWN0aXZlKSB0aGlzLl9pbml0RGlyZWN0aXZlKHRoaXMub3ZlcmZsb3dJdGVtc0RpcmVjdGl2ZSwgJ292ZXJmbG93SXRlbXMnKTtcclxuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXREaXJlY3RpdmU8VENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZSBleHRlbmRzIENvbW1hbmRCYXJJdGVtc0RpcmVjdGl2ZUJhc2U+KFxyXG4gICAgZGlyZWN0aXZlOiBUQ29tbWFuZEJhckl0ZW1zRGlyZWN0aXZlLFxyXG4gICAgaXRlbXNQcm9wZXJ0eUtleTogJ2l0ZW1zJyB8ICdmYXJJdGVtcycgfCAnb3ZlcmZsb3dJdGVtcydcclxuICApIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybUl0ZW1zRnVuYyA9XHJcbiAgICAgIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBDb21tYW5kQmFySXRlbXNEaXJlY3RpdmUgJiYgKG5ld0l0ZW1zID0+IHRoaXMuX2NyZWF0ZVRyYW5zZm9ybWVkSXRlbXMobmV3SXRlbXMpKSkgfHxcclxuICAgICAgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIENvbW1hbmRCYXJGYXJJdGVtc0RpcmVjdGl2ZSAmJiAobmV3SXRlbXMgPT4gdGhpcy5fY3JlYXRlVHJhbnNmb3JtZWRGYXJJdGVtcyhuZXdJdGVtcykpKSB8fFxyXG4gICAgICAoZGlyZWN0aXZlIGluc3RhbmNlb2YgQ29tbWFuZEJhck92ZXJmbG93SXRlbXNEaXJlY3RpdmUgJiZcclxuICAgICAgICAobmV3SXRlbXMgPT4gdGhpcy5fY3JlYXRlVHJhbnNmb3JtZWRPdmVyZmxvd0l0ZW1zKG5ld0l0ZW1zKSkpO1xyXG4gICAgbnVsbDtcclxuXHJcbiAgICBpZiAoIXRyYW5zZm9ybUl0ZW1zRnVuYykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZGlyZWN0aXZlIGdpdmVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0SXRlbXMgPSAoXHJcbiAgICAgIG1hcHBlcjogKGl0ZW1zOiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+KSA9PiBSZWFkb25seUFycmF5PElDb21tYW5kQmFySXRlbU9wdGlvbnM+XHJcbiAgICApID0+IHtcclxuICAgICAgdGhpc1tpdGVtc1Byb3BlcnR5S2V5XSA9IG1hcHBlcih0aGlzW2l0ZW1zUHJvcGVydHlLZXldKTtcclxuICAgICAgdHJhbnNmb3JtSXRlbXNGdW5jKHRoaXNbaXRlbXNQcm9wZXJ0eUtleV0pO1xyXG5cclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbCBpdGVtc1xyXG4gICAgc2V0SXRlbXMoKCkgPT4gZGlyZWN0aXZlLml0ZW1zKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gYWRkaW5nL3JlbW92aW5nIGl0ZW1zXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIGRpcmVjdGl2ZS5vbkl0ZW1zQ2hhbmdlZC5zdWJzY3JpYmUoKG5ld0l0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZEJhckl0ZW1EaXJlY3RpdmU+KSA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMoKCkgPT4gbmV3SXRlbXMubWFwPElDb21tYW5kQmFySXRlbU9wdGlvbnM+KGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUpKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIGZvciBleGlzdGluZyBpdGVtcyBjaGFuZ2VzXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIGRpcmVjdGl2ZS5vbkNoaWxkSXRlbUNoYW5nZWQuc3Vic2NyaWJlKCh7IGtleSwgY2hhbmdlcyB9OiBDb21tYW5kQmFySXRlbUNoYW5nZWRQYXlsb2FkKSA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKGl0ZW0gPT4gKGl0ZW0ua2V5ID09PSBrZXkgPyBtZXJnZUl0ZW1DaGFuZ2VzKGl0ZW0sIGNoYW5nZXMpIDogaXRlbSkpKTtcclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZVRyYW5zZm9ybWVkSXRlbXMobmV3SXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRJdGVtc18gPSBuZXdJdGVtcy5tYXAoaXRlbSA9PiB0aGlzLl90cmFuc2Zvcm1Db21tYW5kQmFySXRlbU9wdGlvbnNUb1Byb3BzKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZVRyYW5zZm9ybWVkRmFySXRlbXMobmV3SXRlbXM6IFJlYWRvbmx5QXJyYXk8SUNvbW1hbmRCYXJJdGVtT3B0aW9ucz4pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRGYXJJdGVtc18gPSBuZXdJdGVtcy5tYXAoaXRlbSA9PiB0aGlzLl90cmFuc2Zvcm1Db21tYW5kQmFySXRlbU9wdGlvbnNUb1Byb3BzKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZVRyYW5zZm9ybWVkT3ZlcmZsb3dJdGVtcyhuZXdJdGVtczogUmVhZG9ubHlBcnJheTxJQ29tbWFuZEJhckl0ZW1PcHRpb25zPikge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1lZE92ZXJmbG93SXRlbXNfID0gbmV3SXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5fdHJhbnNmb3JtQ29tbWFuZEJhckl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1Db21tYW5kQmFySXRlbU9wdGlvbnNUb1Byb3BzKGl0ZW1PcHRpb25zOiBJQ29tbWFuZEJhckl0ZW1PcHRpb25zKTogSUNvbW1hbmRCYXJJdGVtUHJvcHMge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQoaXRlbU9wdGlvbnMsICdyZW5kZXJJY29uJywgJ3JlbmRlcicpO1xyXG5cclxuICAgIC8vIExlZ2FjeSByZW5kZXIgbW9kZSBpcyB1c2VkIGZvciB0aGUgaWNvbiBiZWNhdXNlIG90aGVyd2lzZSB0aGUgaWNvbiBpcyB0byB0aGUgcmlnaHQgb2YgdGhlIHRleHQgKGluc3RlYWQgb2YgdGhlIHVzdWFsIGxlZnQpXHJcbiAgICBjb25zdCBpY29uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIoaXRlbU9wdGlvbnMucmVuZGVySWNvbiwgeyBsZWdhY3lSZW5kZXJNb2RlOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIoaXRlbU9wdGlvbnMucmVuZGVyKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIGljb25SZW5kZXJlciAmJiB7XHJcbiAgICAgICAgb25SZW5kZXJJY29uOiAoaXRlbTogSUNvbnRleHR1YWxNZW51SXRlbSkgPT4gaWNvblJlbmRlcmVyKHsgY29udGV4dHVhbE1lbnVJdGVtOiBpdGVtIH0pLFxyXG4gICAgICB9LFxyXG4gICAgICByZW5kZXJlciAmJlxyXG4gICAgICAoeyBvblJlbmRlcjogKGl0ZW0sIGRpc21pc3NNZW51KSA9PiByZW5kZXJlcih7IGl0ZW0sIGRpc21pc3NNZW51IH0pIH0gYXMgUGljazxJQ29tbWFuZEJhckl0ZW1Qcm9wcywgJ29uUmVuZGVyJz4pXHJcbiAgICApIGFzIElDb21tYW5kQmFySXRlbVByb3BzO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTm90IHVzaW5nIGBPbWl0YCBoZXJlIHNpbmNlIGl0IGNvbmZ1c2VkIHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGFuZCBpdCBqdXN0IHNob3dlZCB0aGUgcHJvcGVydGllcyBsaXN0ZWQgaGVyZSAoYHJlbmRlckljb25gLCBgcmVuZGVyYCBhbmQgYGRhdGFgKS5cclxuLy8gVGhlIHR5cGUgaGVyZSBpcyBqdXN0IGBPbWl0YCB3aXRob3V0IHRoZSBnZW5lcmljcyB0aG91Z2guXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1hbmRCYXJJdGVtT3B0aW9uczxURGF0YSA9IGFueT5cclxuICBleHRlbmRzIFBpY2s8SUNvbW1hbmRCYXJJdGVtUHJvcHMsIEV4Y2x1ZGU8S25vd25LZXlzPElDb21tYW5kQmFySXRlbVByb3BzPiwgJ29uUmVuZGVyJyB8ICdvblJlbmRlckljb24nPj4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlckljb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQ+O1xyXG4gIHJlYWRvbmx5IHJlbmRlcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElDb21tYW5kQmFySXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0PjtcclxuICByZWFkb25seSBkYXRhPzogVERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1hbmRCYXJJdGVtT3B0aW9uc1JlbmRlckNvbnRleHQge1xyXG4gIGl0ZW06IGFueTtcclxuICBkaXNtaXNzTWVudTogKGV2PzogYW55LCBkaXNtaXNzQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbWFuZEJhckl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQge1xyXG4gIGNvbnRleHR1YWxNZW51SXRlbTogSUNvbnRleHR1YWxNZW51SXRlbTtcclxufVxyXG4iXX0=