/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, Input, Output, ContentChildren, QueryList, } from '@angular/core';
import { ChangeableItemsHelper, mergeItemChanges } from '@angular-react/fabric/lib/components/core';
import { omit, getDataAttributes } from '@angular-react/fabric/lib/utils';
import { ContextualMenuItemDirective } from '@angular-react/fabric/lib/components/contextual-menu';
/**
 * @abstract
 */
export class FabBaseButtonComponent extends ReactWrapperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJhc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUdMLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLGVBQWUsRUFDZixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBOEIsTUFBTSxzREFBc0QsQ0FBQzs7OztBQUcvSCxNQUFNLE9BQWdCLHNCQUF1QixTQUFRLHFCQUFtQzs7Ozs7OztJQTBEdEYsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQWpCaEUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBOEQsQ0FBQztRQUM3Rix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBWXpELG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUsxQyx3R0FBd0c7UUFDeEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVE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QUFlLFNBQUMsMkJBQTJCOzs7O0lBNUM1Qyw4Q0FBcUQ7O0lBQ3JELHNDQUFxQzs7SUFDckMseUNBQTJDOztJQUMzQywwQ0FBNkM7O0lBQzdDLDBDQUE2Qzs7SUFDN0Msb0RBQWlFOztJQUNqRSxpREFBMkQ7O0lBQzNELHdDQUF5Qzs7SUFDekMsdUNBQXVDOztJQUN2Qyx5Q0FBMkM7O0lBQzNDLDJDQUErQzs7SUFDL0MsMkNBQStDOztJQUMvQyxpREFBMkQ7O0lBQzNELDRDQUFpRDs7SUFDakQsOENBQXNEOztJQUN0RCxzQ0FBcUM7O0lBQ3JDLDBDQUE2Qzs7SUFDN0Msc0NBQXFDOztJQUNyQywyQ0FBK0M7O0lBQy9DLDJDQUErQzs7SUFDL0MsdUNBQXVDOztJQUN2QywrQ0FBdUQ7O0lBQ3ZELHNEQUFxRTs7SUFDckUsd0NBQXlDOztJQUN6QywrQ0FBdUQ7O0lBQ3ZELHdDQUF5Qzs7SUFDekMsc0NBQXFDOztJQUNyQywrQ0FBdUQ7O0lBQ3ZELDBEQUE2RTs7SUFDN0Usb0RBQWlFOztJQUNqRSw2Q0FBbUQ7O0lBQ25ELDZDQUFtRDs7SUFFbkQsNENBQXlEOztJQUN6RCw0Q0FBeUQ7O0lBQ3pELG1EQUFnRTs7SUFDaEUsdURBQW9FOztJQUNwRSxnREFBNkQ7O0lBQzdELGdEQUE2RDs7SUFFN0QseUNBQTREOztJQUM1RCw2Q0FBZ0g7O0lBQ2hILG9EQUFpRTs7SUFFakUscURBQW9IOztJQUVwSCw4Q0FBaUc7O0lBQ2pHLDhDQUFpRzs7SUFDakcscURBQXdHOztJQUN4Ryx5REFBNEc7O0lBQzVHLGtEQUFxRzs7SUFDckcsa0RBQXFHOzs7OztJQUVyRyx3REFBMkU7Ozs7O0lBQzNFLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBRdWVyeUxpc3QsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElCdXR0b25Qcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0J1dHRvbic7XHJcbmltcG9ydCB7IElDb250ZXh0dWFsTWVudUl0ZW0gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db250ZXh0dWFsTWVudSc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0hlbHBlciwgbWVyZ2VJdGVtQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb3JlJztcclxuaW1wb3J0IHsgb21pdCwgZ2V0RGF0YUF0dHJpYnV0ZXMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL3V0aWxzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUsIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvbnRleHR1YWwtbWVudSc7XHJcbmltcG9ydCB7IENvbW1hbmRCYXJJdGVtQ2hhbmdlZFBheWxvYWQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29tbWFuZC1iYXInO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYkJhc2VCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUJ1dHRvblByb3BzPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElCdXR0b25Qcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgaHJlZj86IElCdXR0b25Qcm9wc1snaHJlZiddO1xyXG4gIEBJbnB1dCgpIHByaW1hcnk/OiBJQnV0dG9uUHJvcHNbJ3ByaW1hcnknXTtcclxuICBASW5wdXQoKSB1bmlxdWVJZD86IElCdXR0b25Qcm9wc1sndW5pcXVlSWQnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElCdXR0b25Qcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBhbGxvd0Rpc2FibGVkRm9jdXM/OiBJQnV0dG9uUHJvcHNbJ2FsbG93RGlzYWJsZWRGb2N1cyddO1xyXG4gIEBJbnB1dCgpIHByaW1hcnlEaXNhYmxlZD86IElCdXR0b25Qcm9wc1sncHJpbWFyeURpc2FibGVkJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUJ1dHRvblByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElCdXR0b25Qcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBjaGVja2VkPzogSUJ1dHRvblByb3BzWydjaGVja2VkJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUJ1dHRvblByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQnV0dG9uUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGFyaWFEZXNjcmlwdGlvbj86IElCdXR0b25Qcm9wc1snYXJpYURlc2NyaXB0aW9uJ107XHJcbiAgQElucHV0KCkgYXJpYUhpZGRlbj86IElCdXR0b25Qcm9wc1snYXJpYUhpZGRlbiddO1xyXG4gIEBJbnB1dCgpIGFyaWFTZWxlY3RlZD86IElCdXR0b25Qcm9wc1snYXJpYS1zZWxlY3RlZCddO1xyXG4gIEBJbnB1dCgpIHJvbGU/OiBJQnV0dG9uUHJvcHNbJ3JvbGUnXTtcclxuICBASW5wdXQoKSB0YWJJbmRleD86IElCdXR0b25Qcm9wc1sndGFiSW5kZXgnXTtcclxuICBASW5wdXQoKSB0ZXh0PzogSUJ1dHRvblByb3BzWyd0ZXh0J107XHJcbiAgQElucHV0KCkgaWNvblByb3BzPzogSUJ1dHRvblByb3BzWydpY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBtZW51UHJvcHM/OiBJQnV0dG9uUHJvcHNbJ21lbnVQcm9wcyddO1xyXG4gIEBJbnB1dCgpIHNwbGl0PzogSUJ1dHRvblByb3BzWydzcGxpdCddO1xyXG4gIEBJbnB1dCgpIG1lbnVJY29uUHJvcHM/OiBJQnV0dG9uUHJvcHNbJ21lbnVJY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBzcGxpdEJ1dHRvbkFyaWFMYWJlbD86IElCdXR0b25Qcm9wc1snc3BsaXRCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBtZW51QXM/OiBJQnV0dG9uUHJvcHNbJ21lbnVBcyddO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeVRleHQ/OiBJQnV0dG9uUHJvcHNbJ3NlY29uZGFyeVRleHQnXTtcclxuICBASW5wdXQoKSB0b2dnbGU/OiBJQnV0dG9uUHJvcHNbJ3RvZ2dsZSddO1xyXG4gIEBJbnB1dCgpIGRhdGE/OiBJQnV0dG9uUHJvcHNbJ2RhdGEnXTtcclxuICBASW5wdXQoKSBnZXRDbGFzc05hbWVzPzogSUJ1dHRvblByb3BzWydnZXRDbGFzc05hbWVzJ107XHJcbiAgQElucHV0KCkgZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzPzogSUJ1dHRvblByb3BzWydnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSBtZW51VHJpZ2dlcktleUNvZGU/OiBJQnV0dG9uUHJvcHNbJ21lbnVUcmlnZ2VyS2V5Q29kZSddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSUJ1dHRvblByb3BzWydrZXl0aXBQcm9wcyddO1xyXG4gIEBJbnB1dCgpIHBlcnNpc3RNZW51PzogSUJ1dHRvblByb3BzWydwZXJzaXN0TWVudSddO1xyXG5cclxuICBASW5wdXQoKSByZW5kZXJJY29uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJUZXh0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJEZXNjcmlwdGlvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyQXJpYURlc2NyaXB0aW9uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJDaGlsZHJlbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyTWVudUljb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25NZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDsgYnV0dG9uPzogSUJ1dHRvblByb3BzIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQWZ0ZXJNZW51RGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IG1lbnVJdGVtc0RpcmVjdGl2ZXM/OiBRdWVyeUxpc3Q8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPjtcclxuXHJcbiAgb25SZW5kZXJJY29uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyVGV4dDogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckRlc2NyaXB0aW9uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyQXJpYURlc2NyaXB0aW9uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyQ2hpbGRyZW46IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJNZW51SWNvbjogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBfY2hhbmdlYWJsZUl0ZW1zSGVscGVyOiBDaGFuZ2VhYmxlSXRlbXNIZWxwZXI8SUNvbnRleHR1YWxNZW51SXRlbT47XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgLy8gY29taW5nIGZyb20gUmVhY3QgY29udGV4dCAtIHdlIG5lZWQgdG8gYmluZCB0byB0aGlzIHNvIHdlIGNhbiBhY2Nlc3MgdGhlIEFuZ3VsYXIgQ29tcG9uZW50IHByb3BlcnRpZXNcclxuICAgIHRoaXMub25NZW51Q2xpY2tIYW5kbGVyID0gdGhpcy5vbk1lbnVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckljb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVySWNvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyVGV4dCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJUZXh0KTtcclxuICAgIHRoaXMub25SZW5kZXJEZXNjcmlwdGlvbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJEZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyQXJpYURlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckFyaWFEZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyQ2hpbGRyZW4gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xyXG4gICAgdGhpcy5vblJlbmRlck1lbnVJY29uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlck1lbnVJY29uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMgJiYgdGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc2V0SXRlbXMgPSAoZGlyZWN0aXZlSXRlbXM6IFJlYWRvbmx5QXJyYXk8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGlyZWN0aXZlSXRlbXMubWFwKGRpcmVjdGl2ZSA9PlxyXG4gICAgICAgICAgdGhpcy5fdHJhbnNmb3JtQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1RvUHJvcHModGhpcy5fZGlyZWN0aXZlVG9Db250ZXh0dWFsTWVudUl0ZW0oZGlyZWN0aXZlKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghdGhpcy5tZW51UHJvcHMpIHtcclxuICAgICAgICAgIHRoaXMubWVudVByb3BzID0geyBpdGVtczogaXRlbXMgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tZW51UHJvcHMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlciA9IG5ldyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIodGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzKTtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5vbkl0ZW1zQ2hhbmdlZC5zdWJzY3JpYmUoKG5ld0l0ZW1zOiBRdWVyeUxpc3Q8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMudG9BcnJheSgpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25DaGlsZEl0ZW1DaGFuZ2VkLnN1YnNjcmliZSgoeyBrZXksIGNoYW5nZXMgfTogQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSB0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgaXRlbS5rZXkgPT09IGtleSA/IG1lcmdlSXRlbUNoYW5nZXMoaXRlbSwgY2hhbmdlcykgOiBpdGVtXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xyXG5cclxuICAgICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldEl0ZW1zKHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcy50b0FycmF5KCkpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIpIHtcclxuICAgICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVudUNsaWNrSGFuZGxlcihldj86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+IHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4sIGJ1dHRvbj86IElCdXR0b25Qcm9wcykge1xyXG4gICAgdGhpcy5vbk1lbnVDbGljay5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBidXR0b24sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tIYW5kbGVyKGV2PzogUmVhY3QuTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZXYubmF0aXZlRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlyZWN0aXZlVG9Db250ZXh0dWFsTWVudUl0ZW0oZGlyZWN0aXZlOiBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUpOiBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9ucyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5vbWl0KFxyXG4gICAgICAgIGRpcmVjdGl2ZSxcclxuICAgICAgICAnbWVudUl0ZW1zRGlyZWN0aXZlcycsXHJcbiAgICAgICAgJ3JlbmRlckRpcmVjdGl2ZScsXHJcbiAgICAgICAgJ3JlbmRlckljb25EaXJlY3RpdmUnLFxyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgJ29uSXRlbUNoYW5nZWQnLFxyXG4gICAgICAgICdvbkl0ZW1zQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uQ2hpbGRJdGVtQ2hhbmdlZCcsXHJcbiAgICAgICAgJ25nT25Jbml0JyxcclxuICAgICAgICAnbmdPbkNoYW5nZXMnLFxyXG4gICAgICAgICduZ09uRGVzdHJveScsXHJcbiAgICAgICAgJ25nQWZ0ZXJDb250ZW50SW5pdCdcclxuICAgICAgKSxcclxuICAgICAgLi4uZ2V0RGF0YUF0dHJpYnV0ZXMoZGlyZWN0aXZlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSksXHJcbiAgICAgIG9uQ2xpY2s6IChldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZS5jbGljay5lbWl0KHsgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LCBpdGVtOiBpdGVtIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNUb1Byb3BzKGl0ZW1PcHRpb25zOiBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9ucyk6IElDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQoaXRlbU9wdGlvbnMsICdyZW5kZXJJY29uJywgJ3JlbmRlcicpO1xyXG5cclxuICAgIC8vIExlZ2FjeSByZW5kZXIgbW9kZSBpcyB1c2VkIGZvciB0aGUgaWNvbiBiZWNhdXNlIG90aGVyd2lzZSB0aGUgaWNvbiBpcyB0byB0aGUgcmlnaHQgb2YgdGhlIHRleHQgKGluc3RlYWQgb2YgdGhlIHVzdWFsIGxlZnQpXHJcbiAgICBjb25zdCBpY29uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIoaXRlbU9wdGlvbnMucmVuZGVySWNvbiwgeyBsZWdhY3lSZW5kZXJNb2RlOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIoaXRlbU9wdGlvbnMucmVuZGVyKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIGljb25SZW5kZXJlciAmJiB7XHJcbiAgICAgICAgb25SZW5kZXJJY29uOiAoaXRlbTogSUNvbnRleHR1YWxNZW51SXRlbSkgPT4gaWNvblJlbmRlcmVyKHsgY29udGV4dHVhbE1lbnVJdGVtOiBpdGVtIH0pLFxyXG4gICAgICB9LFxyXG4gICAgICByZW5kZXJlciAmJlxyXG4gICAgICAgICh7XHJcbiAgICAgICAgICBvblJlbmRlcjogKGl0ZW0sIGRpc21pc3NNZW51KSA9PiByZW5kZXJlcih7IGl0ZW0sIGRpc21pc3NNZW51IH0pLFxyXG4gICAgICAgIH0gYXMgUGljazxJQ29udGV4dHVhbE1lbnVJdGVtLCAnb25SZW5kZXInPilcclxuICAgICkgYXMgSUNvbnRleHR1YWxNZW51SXRlbTtcclxuICB9XHJcbn1cclxuIl19