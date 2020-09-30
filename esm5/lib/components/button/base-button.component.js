/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var FabBaseButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabBaseButtonComponent, _super);
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
        return tslib_1.__assign({}, omit(directive, 'menuItemsDirectives', 'renderDirective', 'renderIconDirective', 'click', 'onItemChanged', 'onItemsChanged', 'onChildItemChanged', 'ngOnInit', 'ngOnChanges', 'ngOnDestroy', 'ngAfterContentInit'), getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
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
        menuItemsDirectives: [{ type: ContentChildren, args: [ContextualMenuItemDirective,] }]
    };
    return FabBaseButtonComponent;
}(ReactWrapperComponent));
export { FabBaseButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJhc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUF1QyxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFHTCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixlQUFlLEVBQ2YsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUcxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQThCLE1BQU0sc0RBQXNELENBQUM7Ozs7QUFHL0g7SUFBcUQsa0RBQW1DO0lBMER0RixnQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUE3RyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FJakY7UUFyQmtCLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThELENBQUM7UUFDN0Ysd0JBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQVl6RCxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFLMUMsd0dBQXdHO1FBQ3hHLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMvRCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFS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eXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElucHV0UmVuZGVyZXJPcHRpb25zLCBKc3hSZW5kZXJGdW5jLCBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUJ1dHRvblByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQnV0dG9uJztcclxuaW1wb3J0IHsgSUNvbnRleHR1YWxNZW51SXRlbSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NvbnRleHR1YWxNZW51JztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1zSGVscGVyLCBtZXJnZUl0ZW1DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvcmUnO1xyXG5pbXBvcnQgeyBvbWl0LCBnZXREYXRhQXR0cmlidXRlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSwgSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29udGV4dHVhbC1tZW51JztcclxuaW1wb3J0IHsgQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb21tYW5kLWJhcic7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFiQmFzZUJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJQnV0dG9uUHJvcHM+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUJ1dHRvblByb3BzWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSBocmVmPzogSUJ1dHRvblByb3BzWydocmVmJ107XHJcbiAgQElucHV0KCkgcHJpbWFyeT86IElCdXR0b25Qcm9wc1sncHJpbWFyeSddO1xyXG4gIEBJbnB1dCgpIHVuaXF1ZUlkPzogSUJ1dHRvblByb3BzWyd1bmlxdWVJZCddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSUJ1dHRvblByb3BzWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIGFsbG93RGlzYWJsZWRGb2N1cz86IElCdXR0b25Qcm9wc1snYWxsb3dEaXNhYmxlZEZvY3VzJ107XHJcbiAgQElucHV0KCkgcHJpbWFyeURpc2FibGVkPzogSUJ1dHRvblByb3BzWydwcmltYXJ5RGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJQnV0dG9uUHJvcHNbJ3N0eWxlcyddO1xyXG4gIEBJbnB1dCgpIHRoZW1lPzogSUJ1dHRvblByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIGNoZWNrZWQ/OiBJQnV0dG9uUHJvcHNbJ2NoZWNrZWQnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQnV0dG9uUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElCdXR0b25Qcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgYXJpYURlc2NyaXB0aW9uPzogSUJ1dHRvblByb3BzWydhcmlhRGVzY3JpcHRpb24nXTtcclxuICBASW5wdXQoKSBhcmlhSGlkZGVuPzogSUJ1dHRvblByb3BzWydhcmlhSGlkZGVuJ107XHJcbiAgQElucHV0KCkgYXJpYVNlbGVjdGVkPzogSUJ1dHRvblByb3BzWydhcmlhLXNlbGVjdGVkJ107XHJcbiAgQElucHV0KCkgcm9sZT86IElCdXR0b25Qcm9wc1sncm9sZSddO1xyXG4gIEBJbnB1dCgpIHRhYkluZGV4PzogSUJ1dHRvblByb3BzWyd0YWJJbmRleCddO1xyXG4gIEBJbnB1dCgpIHRleHQ/OiBJQnV0dG9uUHJvcHNbJ3RleHQnXTtcclxuICBASW5wdXQoKSBpY29uUHJvcHM/OiBJQnV0dG9uUHJvcHNbJ2ljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIG1lbnVQcm9wcz86IElCdXR0b25Qcm9wc1snbWVudVByb3BzJ107XHJcbiAgQElucHV0KCkgc3BsaXQ/OiBJQnV0dG9uUHJvcHNbJ3NwbGl0J107XHJcbiAgQElucHV0KCkgbWVudUljb25Qcm9wcz86IElCdXR0b25Qcm9wc1snbWVudUljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIHNwbGl0QnV0dG9uQXJpYUxhYmVsPzogSUJ1dHRvblByb3BzWydzcGxpdEJ1dHRvbkFyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIG1lbnVBcz86IElCdXR0b25Qcm9wc1snbWVudUFzJ107XHJcbiAgQElucHV0KCkgc2Vjb25kYXJ5VGV4dD86IElCdXR0b25Qcm9wc1snc2Vjb25kYXJ5VGV4dCddO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZT86IElCdXR0b25Qcm9wc1sndG9nZ2xlJ107XHJcbiAgQElucHV0KCkgZGF0YT86IElCdXR0b25Qcm9wc1snZGF0YSddO1xyXG4gIEBJbnB1dCgpIGdldENsYXNzTmFtZXM/OiBJQnV0dG9uUHJvcHNbJ2dldENsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSBnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXM/OiBJQnV0dG9uUHJvcHNbJ2dldFNwbGl0QnV0dG9uQ2xhc3NOYW1lcyddO1xyXG4gIEBJbnB1dCgpIG1lbnVUcmlnZ2VyS2V5Q29kZT86IElCdXR0b25Qcm9wc1snbWVudVRyaWdnZXJLZXlDb2RlJ107XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJQnV0dG9uUHJvcHNbJ2tleXRpcFByb3BzJ107XHJcbiAgQElucHV0KCkgcGVyc2lzdE1lbnU/OiBJQnV0dG9uUHJvcHNbJ3BlcnNpc3RNZW51J107XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckljb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlclRleHQ/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckRlc2NyaXB0aW9uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJBcmlhRGVzY3JpcHRpb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG4gIEBJbnB1dCgpIHJlbmRlckNoaWxkcmVuPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJNZW51SWNvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk1lbnVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50OyBidXR0b24/OiBJQnV0dG9uUHJvcHMgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25BZnRlck1lbnVEaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgbWVudUl0ZW1zRGlyZWN0aXZlcz86IFF1ZXJ5TGlzdDxDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBvblJlbmRlckljb246IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJUZXh0OiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyRGVzY3JpcHRpb246IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJBcmlhRGVzY3JpcHRpb246IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJDaGlsZHJlbjogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlck1lbnVJY29uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBwcml2YXRlIF9jaGFuZ2VhYmxlSXRlbXNIZWxwZXI6IENoYW5nZWFibGVJdGVtc0hlbHBlcjxJQ29udGV4dHVhbE1lbnVJdGVtPjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgbmdab25lLCBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuXHJcbiAgICAvLyBjb21pbmcgZnJvbSBSZWFjdCBjb250ZXh0IC0gd2UgbmVlZCB0byBiaW5kIHRvIHRoaXMgc28gd2UgY2FuIGFjY2VzcyB0aGUgQW5ndWxhciBDb21wb25lbnQgcHJvcGVydGllc1xyXG4gICAgdGhpcy5vbk1lbnVDbGlja0hhbmRsZXIgPSB0aGlzLm9uTWVudUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uUmVuZGVySWNvbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJJY29uKTtcclxuICAgIHRoaXMub25SZW5kZXJUZXh0ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclRleHQpO1xyXG4gICAgdGhpcy5vblJlbmRlckRlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckRlc2NyaXB0aW9uKTtcclxuICAgIHRoaXMub25SZW5kZXJBcmlhRGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyQXJpYURlc2NyaXB0aW9uKTtcclxuICAgIHRoaXMub25SZW5kZXJDaGlsZHJlbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJDaGlsZHJlbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyTWVudUljb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyTWVudUljb24pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcyAmJiB0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzZXRJdGVtcyA9IChkaXJlY3RpdmVJdGVtczogUmVhZG9ubHlBcnJheTxDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmU+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkaXJlY3RpdmVJdGVtcy5tYXAoZGlyZWN0aXZlID0+XHJcbiAgICAgICAgICB0aGlzLl90cmFuc2Zvcm1Db250ZXh0dWFsTWVudUl0ZW1PcHRpb25zVG9Qcm9wcyh0aGlzLl9kaXJlY3RpdmVUb0NvbnRleHR1YWxNZW51SXRlbShkaXJlY3RpdmUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lbnVQcm9wcykge1xyXG4gICAgICAgICAgdGhpcy5tZW51UHJvcHMgPSB7IGl0ZW1zOiBpdGVtcyB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm1lbnVQcm9wcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyID0gbmV3IENoYW5nZWFibGVJdGVtc0hlbHBlcih0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMpO1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLm9uSXRlbXNDaGFuZ2VkLnN1YnNjcmliZSgobmV3SXRlbXM6IFF1ZXJ5TGlzdDxDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmU+KSA9PiB7XHJcbiAgICAgICAgICBzZXRJdGVtcyhuZXdJdGVtcy50b0FycmF5KCkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5vbkNoaWxkSXRlbUNoYW5nZWQuc3Vic2NyaWJlKCh7IGtleSwgY2hhbmdlcyB9OiBDb21tYW5kQmFySXRlbUNoYW5nZWRQYXlsb2FkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICBpdGVtLmtleSA9PT0ga2V5ID8gbWVyZ2VJdGVtQ2hhbmdlcyhpdGVtLCBjaGFuZ2VzKSA6IGl0ZW1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XHJcblxyXG4gICAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0SXRlbXModGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzLnRvQXJyYXkoKSk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlcikge1xyXG4gICAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25NZW51Q2xpY2tIYW5kbGVyKGV2PzogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4gfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PiwgYnV0dG9uPzogSUJ1dHRvblByb3BzKSB7XHJcbiAgICB0aGlzLm9uTWVudUNsaWNrLmVtaXQoe1xyXG4gICAgICBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQsXHJcbiAgICAgIGJ1dHRvbixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0hhbmRsZXIoZXY/OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLm9uQ2xpY2suZW1pdChldi5uYXRpdmVFdmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXJlY3RpdmVUb0NvbnRleHR1YWxNZW51SXRlbShkaXJlY3RpdmU6IENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSk6IElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9taXQoXHJcbiAgICAgICAgZGlyZWN0aXZlLFxyXG4gICAgICAgICdtZW51SXRlbXNEaXJlY3RpdmVzJyxcclxuICAgICAgICAncmVuZGVyRGlyZWN0aXZlJyxcclxuICAgICAgICAncmVuZGVySWNvbkRpcmVjdGl2ZScsXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAnb25JdGVtQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uSXRlbXNDaGFuZ2VkJyxcclxuICAgICAgICAnb25DaGlsZEl0ZW1DaGFuZ2VkJyxcclxuICAgICAgICAnbmdPbkluaXQnLFxyXG4gICAgICAgICduZ09uQ2hhbmdlcycsXHJcbiAgICAgICAgJ25nT25EZXN0cm95JyxcclxuICAgICAgICAnbmdBZnRlckNvbnRlbnRJbml0J1xyXG4gICAgICApLFxyXG4gICAgICAuLi5nZXREYXRhQXR0cmlidXRlcyhkaXJlY3RpdmUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKSxcclxuICAgICAgb25DbGljazogKGV2LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aXZlLmNsaWNrLmVtaXQoeyBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQsIGl0ZW06IGl0ZW0gfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1RvUHJvcHMoaXRlbU9wdGlvbnM6IElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zKTogSUNvbnRleHR1YWxNZW51SXRlbSB7XHJcbiAgICBjb25zdCBzaGFyZWRQcm9wZXJ0aWVzID0gb21pdChpdGVtT3B0aW9ucywgJ3JlbmRlckljb24nLCAncmVuZGVyJyk7XHJcblxyXG4gICAgLy8gTGVnYWN5IHJlbmRlciBtb2RlIGlzIHVzZWQgZm9yIHRoZSBpY29uIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZSBpY29uIGlzIHRvIHRoZSByaWdodCBvZiB0aGUgdGV4dCAoaW5zdGVhZCBvZiB0aGUgdXN1YWwgbGVmdClcclxuICAgIGNvbnN0IGljb25SZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihpdGVtT3B0aW9ucy5yZW5kZXJJY29uLCB7IGxlZ2FjeVJlbmRlck1vZGU6IHRydWUgfSk7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuY3JlYXRlSW5wdXRKc3hSZW5kZXJlcihpdGVtT3B0aW9ucy5yZW5kZXIpO1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgc2hhcmVkUHJvcGVydGllcyxcclxuICAgICAgaWNvblJlbmRlcmVyICYmIHtcclxuICAgICAgICBvblJlbmRlckljb246IChpdGVtOiBJQ29udGV4dHVhbE1lbnVJdGVtKSA9PiBpY29uUmVuZGVyZXIoeyBjb250ZXh0dWFsTWVudUl0ZW06IGl0ZW0gfSksXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlbmRlcmVyICYmXHJcbiAgICAgICAgKHtcclxuICAgICAgICAgIG9uUmVuZGVyOiAoaXRlbSwgZGlzbWlzc01lbnUpID0+IHJlbmRlcmVyKHsgaXRlbSwgZGlzbWlzc01lbnUgfSksXHJcbiAgICAgICAgfSBhcyBQaWNrPElDb250ZXh0dWFsTWVudUl0ZW0sICdvblJlbmRlcic+KVxyXG4gICAgKSBhcyBJQ29udGV4dHVhbE1lbnVJdGVtO1xyXG4gIH1cclxufVxyXG4iXX0=