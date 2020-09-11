/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { EventEmitter, Input, Output, ContentChildren, QueryList, } from '@angular/core';
import { ChangeableItemsHelper } from 'angular-react-toolkit/core/shared/changeable-helper';
import { mergeItemChanges } from 'angular-react-toolkit/core/declarative/item-changed';
import { omit } from 'angular-react-toolkit/utils/omit';
import { getDataAttributes } from 'angular-react-toolkit/utils/get-data-attributes';
// TODO:
import { ContextualMenuItemDirective } from '../contextual-menu/public-api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUdMLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLGVBQWUsRUFDZixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOztBQUlwRixPQUFPLEVBQUUsMkJBQTJCLEVBQThCLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFHeEcsTUFBTSxPQUFnQixzQkFBdUIsU0FBUSxxQkFBbUM7Ozs7Ozs7SUEwRHRGLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFqQmhFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThELENBQUM7UUFDN0YsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQVl6RCxtQkFBYyxHQUFtQixFQUFFLENBQUM7UUFLMUMsd0dBQXdHO1FBQ3hHLElBQUksQ0FBQyxrQkFBa0IsR0FB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S0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBRUwsTUFBTTswQkFDTixNQUFNO2lDQUNOLE1BQU07a0NBRU4sZUFBZSxTQUFDLDJCQUEyQjs7OztJQTVDNUMsOENBQXFEOztJQUNyRCxzQ0FBcUM7O0lBQ3JDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUM3QywwQ0FBNkM7O0lBQzdDLG9EQUFpRTs7SUFDakUsaURBQTJEOztJQUMzRCx3Q0FBeUM7O0lBQ3pDLHVDQUF1Qzs7SUFDdkMseUNBQTJDOztJQUMzQywyQ0FBK0M7O0lBQy9DLDJDQUErQzs7SUFDL0MsaURBQTJEOztJQUMzRCw0Q0FBaUQ7O0lBQ2pELDhDQUFzRDs7SUFDdEQsc0NBQXFDOztJQUNyQywwQ0FBNkM7O0lBQzdDLHNDQUFxQzs7SUFDckMsMkNBQStDOztJQUMvQywyQ0FBK0M7O0lBQy9DLHVDQUF1Qzs7SUFDdkMsK0NBQXVEOztJQUN2RCxzREFBcUU7O0lBQ3JFLHdDQUF5Qzs7SUFDekMsK0NBQXVEOztJQUN2RCx3Q0FBeUM7O0lBQ3pDLHNDQUFxQzs7SUFDckMsK0NBQXVEOztJQUN2RCwwREFBNkU7O0lBQzdFLG9EQUFpRTs7SUFDakUsNkNBQW1EOztJQUNuRCw2Q0FBbUQ7O0lBRW5ELDRDQUF5RDs7SUFDekQsNENBQXlEOztJQUN6RCxtREFBZ0U7O0lBQ2hFLHVEQUFvRTs7SUFDcEUsZ0RBQTZEOztJQUM3RCxnREFBNkQ7O0lBRTdELHlDQUE0RDs7SUFDNUQsNkNBQWdIOztJQUNoSCxvREFBaUU7O0lBRWpFLHFEQUFvSDs7SUFFcEgsOENBQWlHOztJQUNqRyw4Q0FBaUc7O0lBQ2pHLHFEQUF3Rzs7SUFDeEcseURBQTRHOztJQUM1RyxrREFBcUc7O0lBQ3JHLGtEQUFxRzs7Ozs7SUFFckcsd0RBQTJFOzs7OztJQUMzRSxnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEpzeFJlbmRlckZ1bmMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9CdXR0b24nO1xyXG5pbXBvcnQgeyBJQ29udGV4dHVhbE1lbnVJdGVtIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29udGV4dHVhbE1lbnUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1oZWxwZXInO1xyXG5pbXBvcnQgeyBtZXJnZUl0ZW1DaGFuZ2VzIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvZGVjbGFyYXRpdmUvaXRlbS1jaGFuZ2VkJztcclxuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9vbWl0JztcclxuaW1wb3J0IHsgZ2V0RGF0YUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvZ2V0LWRhdGEtYXR0cmlidXRlcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuLy8gVE9ETzpcclxuaW1wb3J0IHsgQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlLCBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9ucyB9IGZyb20gJy4uL2NvbnRleHR1YWwtbWVudS9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCB9IGZyb20gJy4uL2NvbW1hbmQtYmFyL2RpcmVjdGl2ZXMvY29tbWFuZC1iYXItaXRlbS5kaXJlY3RpdmVzJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElCdXR0b25Qcm9wcz5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJQnV0dG9uUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGhyZWY/OiBJQnV0dG9uUHJvcHNbJ2hyZWYnXTtcclxuICBASW5wdXQoKSBwcmltYXJ5PzogSUJ1dHRvblByb3BzWydwcmltYXJ5J107XHJcbiAgQElucHV0KCkgdW5pcXVlSWQ/OiBJQnV0dG9uUHJvcHNbJ3VuaXF1ZUlkJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJQnV0dG9uUHJvcHNbJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgYWxsb3dEaXNhYmxlZEZvY3VzPzogSUJ1dHRvblByb3BzWydhbGxvd0Rpc2FibGVkRm9jdXMnXTtcclxuICBASW5wdXQoKSBwcmltYXJ5RGlzYWJsZWQ/OiBJQnV0dG9uUHJvcHNbJ3ByaW1hcnlEaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElCdXR0b25Qcm9wc1snc3R5bGVzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJQnV0dG9uUHJvcHNbJ3RoZW1lJ107XHJcbiAgQElucHV0KCkgY2hlY2tlZD86IElCdXR0b25Qcm9wc1snY2hlY2tlZCddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElCdXR0b25Qcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSUJ1dHRvblByb3BzWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhRGVzY3JpcHRpb24/OiBJQnV0dG9uUHJvcHNbJ2FyaWFEZXNjcmlwdGlvbiddO1xyXG4gIEBJbnB1dCgpIGFyaWFIaWRkZW4/OiBJQnV0dG9uUHJvcHNbJ2FyaWFIaWRkZW4nXTtcclxuICBASW5wdXQoKSBhcmlhU2VsZWN0ZWQ/OiBJQnV0dG9uUHJvcHNbJ2FyaWEtc2VsZWN0ZWQnXTtcclxuICBASW5wdXQoKSByb2xlPzogSUJ1dHRvblByb3BzWydyb2xlJ107XHJcbiAgQElucHV0KCkgdGFiSW5kZXg/OiBJQnV0dG9uUHJvcHNbJ3RhYkluZGV4J107XHJcbiAgQElucHV0KCkgdGV4dD86IElCdXR0b25Qcm9wc1sndGV4dCddO1xyXG4gIEBJbnB1dCgpIGljb25Qcm9wcz86IElCdXR0b25Qcm9wc1snaWNvblByb3BzJ107XHJcbiAgQElucHV0KCkgbWVudVByb3BzPzogSUJ1dHRvblByb3BzWydtZW51UHJvcHMnXTtcclxuICBASW5wdXQoKSBzcGxpdD86IElCdXR0b25Qcm9wc1snc3BsaXQnXTtcclxuICBASW5wdXQoKSBtZW51SWNvblByb3BzPzogSUJ1dHRvblByb3BzWydtZW51SWNvblByb3BzJ107XHJcbiAgQElucHV0KCkgc3BsaXRCdXR0b25BcmlhTGFiZWw/OiBJQnV0dG9uUHJvcHNbJ3NwbGl0QnV0dG9uQXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgbWVudUFzPzogSUJ1dHRvblByb3BzWydtZW51QXMnXTtcclxuICBASW5wdXQoKSBzZWNvbmRhcnlUZXh0PzogSUJ1dHRvblByb3BzWydzZWNvbmRhcnlUZXh0J107XHJcbiAgQElucHV0KCkgdG9nZ2xlPzogSUJ1dHRvblByb3BzWyd0b2dnbGUnXTtcclxuICBASW5wdXQoKSBkYXRhPzogSUJ1dHRvblByb3BzWydkYXRhJ107XHJcbiAgQElucHV0KCkgZ2V0Q2xhc3NOYW1lcz86IElCdXR0b25Qcm9wc1snZ2V0Q2xhc3NOYW1lcyddO1xyXG4gIEBJbnB1dCgpIGdldFNwbGl0QnV0dG9uQ2xhc3NOYW1lcz86IElCdXR0b25Qcm9wc1snZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzJ107XHJcbiAgQElucHV0KCkgbWVudVRyaWdnZXJLZXlDb2RlPzogSUJ1dHRvblByb3BzWydtZW51VHJpZ2dlcktleUNvZGUnXTtcclxuICBASW5wdXQoKSBrZXl0aXBQcm9wcz86IElCdXR0b25Qcm9wc1sna2V5dGlwUHJvcHMnXTtcclxuICBASW5wdXQoKSBwZXJzaXN0TWVudT86IElCdXR0b25Qcm9wc1sncGVyc2lzdE1lbnUnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVySWNvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyVGV4dD86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyRGVzY3JpcHRpb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckFyaWFEZXNjcmlwdGlvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyQ2hpbGRyZW4/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlck1lbnVJY29uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTWVudUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7IGJ1dHRvbj86IElCdXR0b25Qcm9wcyB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkFmdGVyTWVudURpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlKSByZWFkb25seSBtZW51SXRlbXNEaXJlY3RpdmVzPzogUXVlcnlMaXN0PENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIG9uUmVuZGVySWNvbjogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlclRleHQ6IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJEZXNjcmlwdGlvbjogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckFyaWFEZXNjcmlwdGlvbjogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckNoaWxkcmVuOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyTWVudUljb246IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgX2NoYW5nZWFibGVJdGVtc0hlbHBlcjogQ2hhbmdlYWJsZUl0ZW1zSGVscGVyPElDb250ZXh0dWFsTWVudUl0ZW0+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBuZ1pvbmUsIHNldEhvc3REaXNwbGF5OiB0cnVlIH0pO1xyXG5cclxuICAgIC8vIGNvbWluZyBmcm9tIFJlYWN0IGNvbnRleHQgLSB3ZSBuZWVkIHRvIGJpbmQgdG8gdGhpcyBzbyB3ZSBjYW4gYWNjZXNzIHRoZSBBbmd1bGFyIENvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9uTWVudUNsaWNrSGFuZGxlciA9IHRoaXMub25NZW51Q2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJJY29uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckljb24pO1xyXG4gICAgdGhpcy5vblJlbmRlclRleHQgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyVGV4dCk7XHJcbiAgICB0aGlzLm9uUmVuZGVyRGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyRGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5vblJlbmRlckFyaWFEZXNjcmlwdGlvbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJBcmlhRGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5vblJlbmRlckNoaWxkcmVuID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckNoaWxkcmVuKTtcclxuICAgIHRoaXMub25SZW5kZXJNZW51SWNvbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJNZW51SWNvbik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzICYmIHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHNldEl0ZW1zID0gKGRpcmVjdGl2ZUl0ZW1zOiBSZWFkb25seUFycmF5PENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZT4pID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRpcmVjdGl2ZUl0ZW1zLm1hcChkaXJlY3RpdmUgPT5cclxuICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNUb1Byb3BzKHRoaXMuX2RpcmVjdGl2ZVRvQ29udGV4dHVhbE1lbnVJdGVtKGRpcmVjdGl2ZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIXRoaXMubWVudVByb3BzKSB7XHJcbiAgICAgICAgICB0aGlzLm1lbnVQcm9wcyA9IHsgaXRlbXM6IGl0ZW1zIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubWVudVByb3BzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgPSBuZXcgQ2hhbmdlYWJsZUl0ZW1zSGVscGVyKHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcyk7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25JdGVtc0NoYW5nZWQuc3Vic2NyaWJlKChuZXdJdGVtczogUXVlcnlMaXN0PENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZT4pID0+IHtcclxuICAgICAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLm9uQ2hpbGRJdGVtQ2hhbmdlZC5zdWJzY3JpYmUoKHsga2V5LCBjaGFuZ2VzIH06IENvbW1hbmRCYXJJdGVtQ2hhbmdlZFBheWxvYWQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gdGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgIGl0ZW0ua2V5ID09PSBrZXkgPyBtZXJnZUl0ZW1DaGFuZ2VzKGl0ZW0sIGNoYW5nZXMpIDogaXRlbVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcclxuXHJcbiAgICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRJdGVtcyh0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMudG9BcnJheSgpKTtcclxuICAgIH1cclxuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyKSB7XHJcbiAgICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1lbnVDbGlja0hhbmRsZXIoZXY/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PiB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+LCBidXR0b24/OiBJQnV0dG9uUHJvcHMpIHtcclxuICAgIHRoaXMub25NZW51Q2xpY2suZW1pdCh7XHJcbiAgICAgIGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCxcclxuICAgICAgYnV0dG9uLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrSGFuZGxlcihldj86IFJlYWN0Lk1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMub25DbGljay5lbWl0KGV2Lm5hdGl2ZUV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RpcmVjdGl2ZVRvQ29udGV4dHVhbE1lbnVJdGVtKGRpcmVjdGl2ZTogQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlKTogSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub21pdChcclxuICAgICAgICBkaXJlY3RpdmUsXHJcbiAgICAgICAgJ21lbnVJdGVtc0RpcmVjdGl2ZXMnLFxyXG4gICAgICAgICdyZW5kZXJEaXJlY3RpdmUnLFxyXG4gICAgICAgICdyZW5kZXJJY29uRGlyZWN0aXZlJyxcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICdvbkl0ZW1DaGFuZ2VkJyxcclxuICAgICAgICAnb25JdGVtc0NoYW5nZWQnLFxyXG4gICAgICAgICdvbkNoaWxkSXRlbUNoYW5nZWQnLFxyXG4gICAgICAgICduZ09uSW5pdCcsXHJcbiAgICAgICAgJ25nT25DaGFuZ2VzJyxcclxuICAgICAgICAnbmdPbkRlc3Ryb3knLFxyXG4gICAgICAgICduZ0FmdGVyQ29udGVudEluaXQnXHJcbiAgICAgICksXHJcbiAgICAgIC4uLmdldERhdGFBdHRyaWJ1dGVzKGRpcmVjdGl2ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLFxyXG4gICAgICBvbkNsaWNrOiAoZXYsIGl0ZW0pID0+IHtcclxuICAgICAgICBkaXJlY3RpdmUuY2xpY2suZW1pdCh7IGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCwgaXRlbTogaXRlbSB9KTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1Db250ZXh0dWFsTWVudUl0ZW1PcHRpb25zVG9Qcm9wcyhpdGVtT3B0aW9uczogSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnMpOiBJQ29udGV4dHVhbE1lbnVJdGVtIHtcclxuICAgIGNvbnN0IHNoYXJlZFByb3BlcnRpZXMgPSBvbWl0KGl0ZW1PcHRpb25zLCAncmVuZGVySWNvbicsICdyZW5kZXInKTtcclxuXHJcbiAgICAvLyBMZWdhY3kgcmVuZGVyIG1vZGUgaXMgdXNlZCBmb3IgdGhlIGljb24gYmVjYXVzZSBvdGhlcndpc2UgdGhlIGljb24gaXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0IChpbnN0ZWFkIG9mIHRoZSB1c3VhbCBsZWZ0KVxyXG4gICAgY29uc3QgaWNvblJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKGl0ZW1PcHRpb25zLnJlbmRlckljb24sIHsgbGVnYWN5UmVuZGVyTW9kZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5jcmVhdGVJbnB1dEpzeFJlbmRlcmVyKGl0ZW1PcHRpb25zLnJlbmRlcik7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICBzaGFyZWRQcm9wZXJ0aWVzLFxyXG4gICAgICBpY29uUmVuZGVyZXIgJiYge1xyXG4gICAgICAgIG9uUmVuZGVySWNvbjogKGl0ZW06IElDb250ZXh0dWFsTWVudUl0ZW0pID0+IGljb25SZW5kZXJlcih7IGNvbnRleHR1YWxNZW51SXRlbTogaXRlbSB9KSxcclxuICAgICAgfSxcclxuICAgICAgcmVuZGVyZXIgJiZcclxuICAgICAgICAoe1xyXG4gICAgICAgICAgb25SZW5kZXI6IChpdGVtLCBkaXNtaXNzTWVudSkgPT4gcmVuZGVyZXIoeyBpdGVtLCBkaXNtaXNzTWVudSB9KSxcclxuICAgICAgICB9IGFzIFBpY2s8SUNvbnRleHR1YWxNZW51SXRlbSwgJ29uUmVuZGVyJz4pXHJcbiAgICApIGFzIElDb250ZXh0dWFsTWVudUl0ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ==