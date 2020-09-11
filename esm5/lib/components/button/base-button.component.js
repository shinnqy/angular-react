/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUF1QyxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFHTCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixlQUFlLEVBQ2YsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFJcEYsT0FBTyxFQUFFLDJCQUEyQixFQUE4QixNQUFNLCtCQUErQixDQUFDOzs7O0FBR3hHO0lBQXFELGtEQUFtQztJQTBEdEYsZ0NBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFBN0csWUFDRSxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLFNBSWpGO1FBckJrQixhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6QyxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUE4RCxDQUFDO1FBQzdGLHdCQUFrQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFZekQsb0JBQWMsR0FBbUIsRUFBRSxDQUFDO1FBSzFDLHdHQUF3RztRQUN4RyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDL0QsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxtREFBa0I7OztJQUFsQjtRQUFBLGlCQWtDQztRQWpDQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQzdELFVBQVE7Ozs7WUFBRyxVQUFDLGNBQTBEOztvQkFDcEUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUEsU0FBUztvQkFDeEMsT0FBQSxLQUFJLENBQUMsMENBQTBDLENBQUMsS0FBSSxDQUFDLDhCQUE4QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUEvRixDQUErRixFQUNoRztnQkFDRCxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUM5QjtnQkFFRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFBO1lBRUQsYUFBYTtZQUNiLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLFFBQWdEO2dCQUNwRyxVQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUFDLEVBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEVBQThDO29CQUE1QyxZQUFHLEVBQUUsb0JBQU87O29CQUNoRSxRQUFRLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUNoRCxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQXpELENBQXlELEVBQzFEO2dCQUNELFVBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUNILENBQUM7WUFFRixVQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxpQkFBTSxrQkFBa0IsV0FBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7Ozs7OztJQUVELG1EQUFrQjs7Ozs7SUFBbEIsVUFBbUIsRUFBcUUsRUFBRSxNQUFxQjtRQUM3RyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXO1lBQ3hCLE1BQU0sUUFBQTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsK0NBQWM7Ozs7SUFBZCxVQUFlLEVBQXFCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFTywrREFBOEI7Ozs7O0lBQXRDLFVBQXVDLFNBQXNDO1FBQzNFLDRCQUNLLElBQUksQ0FDTCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsT0FBTyxFQUNQLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixDQUNyQixFQUNFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUM5RCxPQUFPOzs7OztZQUFFLFVBQUMsRUFBRSxFQUFFLElBQUk7Z0JBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsS0FDRDtJQUNKLENBQUM7Ozs7OztJQUVPLDJFQUEwQzs7Ozs7SUFBbEQsVUFBbUQsV0FBdUM7O1lBQ2xGLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQzs7O1lBRzVELFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDOztZQUM5RixRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFaEUsYUFBYTtRQUNiLE9BQU8sbUJBQUEsTUFBTSxDQUFDLE1BQU0sQ0FDbEIsRUFBRSxFQUNGLGdCQUFnQixFQUNoQixZQUFZLElBQUk7WUFDZCxZQUFZOzs7O1lBQUUsVUFBQyxJQUF5QixJQUFLLE9BQUEsWUFBWSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQTtTQUN4RixFQUNELFFBQVE7WUFDTixDQUFDLG1CQUFBO2dCQUNDLFFBQVE7Ozs7O2dCQUFFLFVBQUMsSUFBSSxFQUFFLFdBQVcsSUFBSyxPQUFBLFFBQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQTthQUNqRSxFQUF5QyxDQUFDLENBQzlDLEVBQXVCLENBQUM7SUFDM0IsQ0FBQzs7K0JBM0tBLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztxQ0FDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLO2dDQUNMLEtBQUs7dUNBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7MkNBQ0wsS0FBSztxQ0FDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFFTCxLQUFLOzZCQUNMLEtBQUs7b0NBQ0wsS0FBSzt3Q0FDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzswQkFFTCxNQUFNOzhCQUNOLE1BQU07cUNBQ04sTUFBTTtzQ0FFTixlQUFlLFNBQUMsMkJBQTJCOztJQWdJOUMsNkJBQUM7Q0FBQSxBQTlLRCxDQUFxRCxxQkFBcUIsR0E4S3pFO1NBOUtxQixzQkFBc0I7OztJQUUxQyw4Q0FBcUQ7O0lBQ3JELHNDQUFxQzs7SUFDckMseUNBQTJDOztJQUMzQywwQ0FBNkM7O0lBQzdDLDBDQUE2Qzs7SUFDN0Msb0RBQWlFOztJQUNqRSxpREFBMkQ7O0lBQzNELHdDQUF5Qzs7SUFDekMsdUNBQXVDOztJQUN2Qyx5Q0FBMkM7O0lBQzNDLDJDQUErQzs7SUFDL0MsMkNBQStDOztJQUMvQyxpREFBMkQ7O0lBQzNELDRDQUFpRDs7SUFDakQsOENBQXNEOztJQUN0RCxzQ0FBcUM7O0lBQ3JDLDBDQUE2Qzs7SUFDN0Msc0NBQXFDOztJQUNyQywyQ0FBK0M7O0lBQy9DLDJDQUErQzs7SUFDL0MsdUNBQXVDOztJQUN2QywrQ0FBdUQ7O0lBQ3ZELHNEQUFxRTs7SUFDckUsd0NBQXlDOztJQUN6QywrQ0FBdUQ7O0lBQ3ZELHdDQUF5Qzs7SUFDekMsc0NBQXFDOztJQUNyQywrQ0FBdUQ7O0lBQ3ZELDBEQUE2RTs7SUFDN0Usb0RBQWlFOztJQUNqRSw2Q0FBbUQ7O0lBQ25ELDZDQUFtRDs7SUFFbkQsNENBQXlEOztJQUN6RCw0Q0FBeUQ7O0lBQ3pELG1EQUFnRTs7SUFDaEUsdURBQW9FOztJQUNwRSxnREFBNkQ7O0lBQzdELGdEQUE2RDs7SUFFN0QseUNBQTREOztJQUM1RCw2Q0FBZ0g7O0lBQ2hILG9EQUFpRTs7SUFFakUscURBQW9IOztJQUVwSCw4Q0FBaUc7O0lBQ2pHLDhDQUFpRzs7SUFDakcscURBQXdHOztJQUN4Ryx5REFBNEc7O0lBQzVHLGtEQUFxRzs7SUFDckcsa0RBQXFHOzs7OztJQUVyRyx3REFBMkU7Ozs7O0lBQzNFLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBRdWVyeUxpc3QsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElCdXR0b25Qcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0J1dHRvbic7XHJcbmltcG9ydCB7IElDb250ZXh0dWFsTWVudUl0ZW0gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9Db250ZXh0dWFsTWVudSc7XHJcbmltcG9ydCB7IENoYW5nZWFibGVJdGVtc0hlbHBlciB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWhlbHBlcic7XHJcbmltcG9ydCB7IG1lcmdlSXRlbUNoYW5nZXMgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9kZWNsYXJhdGl2ZS9pdGVtLWNoYW5nZWQnO1xyXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L3V0aWxzL29taXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhQXR0cmlidXRlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC91dGlscy9nZXQtZGF0YS1hdHRyaWJ1dGVzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vLyBUT0RPOlxyXG5pbXBvcnQgeyBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUsIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zIH0gZnJvbSAnLi4vY29udGV4dHVhbC1tZW51L3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBDb21tYW5kQmFySXRlbUNoYW5nZWRQYXlsb2FkIH0gZnJvbSAnLi4vY29tbWFuZC1iYXIvZGlyZWN0aXZlcy9jb21tYW5kLWJhci1pdGVtLmRpcmVjdGl2ZXMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYkJhc2VCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUJ1dHRvblByb3BzPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElCdXR0b25Qcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgaHJlZj86IElCdXR0b25Qcm9wc1snaHJlZiddO1xyXG4gIEBJbnB1dCgpIHByaW1hcnk/OiBJQnV0dG9uUHJvcHNbJ3ByaW1hcnknXTtcclxuICBASW5wdXQoKSB1bmlxdWVJZD86IElCdXR0b25Qcm9wc1sndW5pcXVlSWQnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElCdXR0b25Qcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBhbGxvd0Rpc2FibGVkRm9jdXM/OiBJQnV0dG9uUHJvcHNbJ2FsbG93RGlzYWJsZWRGb2N1cyddO1xyXG4gIEBJbnB1dCgpIHByaW1hcnlEaXNhYmxlZD86IElCdXR0b25Qcm9wc1sncHJpbWFyeURpc2FibGVkJ107XHJcbiAgQElucHV0KCkgc3R5bGVzPzogSUJ1dHRvblByb3BzWydzdHlsZXMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElCdXR0b25Qcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBjaGVja2VkPzogSUJ1dHRvblByb3BzWydjaGVja2VkJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUJ1dHRvblByb3BzWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQnV0dG9uUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGFyaWFEZXNjcmlwdGlvbj86IElCdXR0b25Qcm9wc1snYXJpYURlc2NyaXB0aW9uJ107XHJcbiAgQElucHV0KCkgYXJpYUhpZGRlbj86IElCdXR0b25Qcm9wc1snYXJpYUhpZGRlbiddO1xyXG4gIEBJbnB1dCgpIGFyaWFTZWxlY3RlZD86IElCdXR0b25Qcm9wc1snYXJpYS1zZWxlY3RlZCddO1xyXG4gIEBJbnB1dCgpIHJvbGU/OiBJQnV0dG9uUHJvcHNbJ3JvbGUnXTtcclxuICBASW5wdXQoKSB0YWJJbmRleD86IElCdXR0b25Qcm9wc1sndGFiSW5kZXgnXTtcclxuICBASW5wdXQoKSB0ZXh0PzogSUJ1dHRvblByb3BzWyd0ZXh0J107XHJcbiAgQElucHV0KCkgaWNvblByb3BzPzogSUJ1dHRvblByb3BzWydpY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBtZW51UHJvcHM/OiBJQnV0dG9uUHJvcHNbJ21lbnVQcm9wcyddO1xyXG4gIEBJbnB1dCgpIHNwbGl0PzogSUJ1dHRvblByb3BzWydzcGxpdCddO1xyXG4gIEBJbnB1dCgpIG1lbnVJY29uUHJvcHM/OiBJQnV0dG9uUHJvcHNbJ21lbnVJY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBzcGxpdEJ1dHRvbkFyaWFMYWJlbD86IElCdXR0b25Qcm9wc1snc3BsaXRCdXR0b25BcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSBtZW51QXM/OiBJQnV0dG9uUHJvcHNbJ21lbnVBcyddO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeVRleHQ/OiBJQnV0dG9uUHJvcHNbJ3NlY29uZGFyeVRleHQnXTtcclxuICBASW5wdXQoKSB0b2dnbGU/OiBJQnV0dG9uUHJvcHNbJ3RvZ2dsZSddO1xyXG4gIEBJbnB1dCgpIGRhdGE/OiBJQnV0dG9uUHJvcHNbJ2RhdGEnXTtcclxuICBASW5wdXQoKSBnZXRDbGFzc05hbWVzPzogSUJ1dHRvblByb3BzWydnZXRDbGFzc05hbWVzJ107XHJcbiAgQElucHV0KCkgZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzPzogSUJ1dHRvblByb3BzWydnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSBtZW51VHJpZ2dlcktleUNvZGU/OiBJQnV0dG9uUHJvcHNbJ21lbnVUcmlnZ2VyS2V5Q29kZSddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSUJ1dHRvblByb3BzWydrZXl0aXBQcm9wcyddO1xyXG4gIEBJbnB1dCgpIHBlcnNpc3RNZW51PzogSUJ1dHRvblByb3BzWydwZXJzaXN0TWVudSddO1xyXG5cclxuICBASW5wdXQoKSByZW5kZXJJY29uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJUZXh0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJEZXNjcmlwdGlvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyQXJpYURlc2NyaXB0aW9uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUJ1dHRvblByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJDaGlsZHJlbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElCdXR0b25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyTWVudUljb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQnV0dG9uUHJvcHM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25NZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDsgYnV0dG9uPzogSUJ1dHRvblByb3BzIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQWZ0ZXJNZW51RGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IG1lbnVJdGVtc0RpcmVjdGl2ZXM/OiBRdWVyeUxpc3Q8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPjtcclxuXHJcbiAgb25SZW5kZXJJY29uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyVGV4dDogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckRlc2NyaXB0aW9uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyQXJpYURlc2NyaXB0aW9uOiAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElCdXR0b25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyQ2hpbGRyZW46IChwcm9wcz86IElCdXR0b25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SUJ1dHRvblByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJNZW51SWNvbjogKHByb3BzPzogSUJ1dHRvblByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJQnV0dG9uUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBfY2hhbmdlYWJsZUl0ZW1zSGVscGVyOiBDaGFuZ2VhYmxlSXRlbXNIZWxwZXI8SUNvbnRleHR1YWxNZW51SXRlbT47XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7IG5nWm9uZSwgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgLy8gY29taW5nIGZyb20gUmVhY3QgY29udGV4dCAtIHdlIG5lZWQgdG8gYmluZCB0byB0aGlzIHNvIHdlIGNhbiBhY2Nlc3MgdGhlIEFuZ3VsYXIgQ29tcG9uZW50IHByb3BlcnRpZXNcclxuICAgIHRoaXMub25NZW51Q2xpY2tIYW5kbGVyID0gdGhpcy5vbk1lbnVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckljb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVySWNvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyVGV4dCA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJUZXh0KTtcclxuICAgIHRoaXMub25SZW5kZXJEZXNjcmlwdGlvbiA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJEZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyQXJpYURlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckFyaWFEZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyQ2hpbGRyZW4gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xyXG4gICAgdGhpcy5vblJlbmRlck1lbnVJY29uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlck1lbnVJY29uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMgJiYgdGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc2V0SXRlbXMgPSAoZGlyZWN0aXZlSXRlbXM6IFJlYWRvbmx5QXJyYXk8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGlyZWN0aXZlSXRlbXMubWFwKGRpcmVjdGl2ZSA9PlxyXG4gICAgICAgICAgdGhpcy5fdHJhbnNmb3JtQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1RvUHJvcHModGhpcy5fZGlyZWN0aXZlVG9Db250ZXh0dWFsTWVudUl0ZW0oZGlyZWN0aXZlKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghdGhpcy5tZW51UHJvcHMpIHtcclxuICAgICAgICAgIHRoaXMubWVudVByb3BzID0geyBpdGVtczogaXRlbXMgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tZW51UHJvcHMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlciA9IG5ldyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIodGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzKTtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5vbkl0ZW1zQ2hhbmdlZC5zdWJzY3JpYmUoKG5ld0l0ZW1zOiBRdWVyeUxpc3Q8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMudG9BcnJheSgpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25DaGlsZEl0ZW1DaGFuZ2VkLnN1YnNjcmliZSgoeyBrZXksIGNoYW5nZXMgfTogQ29tbWFuZEJhckl0ZW1DaGFuZ2VkUGF5bG9hZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSB0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgaXRlbS5rZXkgPT09IGtleSA/IG1lcmdlSXRlbUNoYW5nZXMoaXRlbSwgY2hhbmdlcykgOiBpdGVtXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xyXG5cclxuICAgICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldEl0ZW1zKHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcy50b0FycmF5KCkpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIpIHtcclxuICAgICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVudUNsaWNrSGFuZGxlcihldj86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+IHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4sIGJ1dHRvbj86IElCdXR0b25Qcm9wcykge1xyXG4gICAgdGhpcy5vbk1lbnVDbGljay5lbWl0KHtcclxuICAgICAgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBidXR0b24sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tIYW5kbGVyKGV2PzogUmVhY3QuTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZXYubmF0aXZlRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlyZWN0aXZlVG9Db250ZXh0dWFsTWVudUl0ZW0oZGlyZWN0aXZlOiBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUpOiBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9ucyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5vbWl0KFxyXG4gICAgICAgIGRpcmVjdGl2ZSxcclxuICAgICAgICAnbWVudUl0ZW1zRGlyZWN0aXZlcycsXHJcbiAgICAgICAgJ3JlbmRlckRpcmVjdGl2ZScsXHJcbiAgICAgICAgJ3JlbmRlckljb25EaXJlY3RpdmUnLFxyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgJ29uSXRlbUNoYW5nZWQnLFxyXG4gICAgICAgICdvbkl0ZW1zQ2hhbmdlZCcsXHJcbiAgICAgICAgJ29uQ2hpbGRJdGVtQ2hhbmdlZCcsXHJcbiAgICAgICAgJ25nT25Jbml0JyxcclxuICAgICAgICAnbmdPbkNoYW5nZXMnLFxyXG4gICAgICAgICduZ09uRGVzdHJveScsXHJcbiAgICAgICAgJ25nQWZ0ZXJDb250ZW50SW5pdCdcclxuICAgICAgKSxcclxuICAgICAgLi4uZ2V0RGF0YUF0dHJpYnV0ZXMoZGlyZWN0aXZlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSksXHJcbiAgICAgIG9uQ2xpY2s6IChldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZS5jbGljay5lbWl0KHsgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LCBpdGVtOiBpdGVtIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNUb1Byb3BzKGl0ZW1PcHRpb25zOiBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9ucyk6IElDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgY29uc3Qgc2hhcmVkUHJvcGVydGllcyA9IG9taXQoaXRlbU9wdGlvbnMsICdyZW5kZXJJY29uJywgJ3JlbmRlcicpO1xyXG5cclxuICAgIC8vIExlZ2FjeSByZW5kZXIgbW9kZSBpcyB1c2VkIGZvciB0aGUgaWNvbiBiZWNhdXNlIG90aGVyd2lzZSB0aGUgaWNvbiBpcyB0byB0aGUgcmlnaHQgb2YgdGhlIHRleHQgKGluc3RlYWQgb2YgdGhlIHVzdWFsIGxlZnQpXHJcbiAgICBjb25zdCBpY29uUmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIoaXRlbU9wdGlvbnMucmVuZGVySWNvbiwgeyBsZWdhY3lSZW5kZXJNb2RlOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmNyZWF0ZUlucHV0SnN4UmVuZGVyZXIoaXRlbU9wdGlvbnMucmVuZGVyKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHNoYXJlZFByb3BlcnRpZXMsXHJcbiAgICAgIGljb25SZW5kZXJlciAmJiB7XHJcbiAgICAgICAgb25SZW5kZXJJY29uOiAoaXRlbTogSUNvbnRleHR1YWxNZW51SXRlbSkgPT4gaWNvblJlbmRlcmVyKHsgY29udGV4dHVhbE1lbnVJdGVtOiBpdGVtIH0pLFxyXG4gICAgICB9LFxyXG4gICAgICByZW5kZXJlciAmJlxyXG4gICAgICAgICh7XHJcbiAgICAgICAgICBvblJlbmRlcjogKGl0ZW0sIGRpc21pc3NNZW51KSA9PiByZW5kZXJlcih7IGl0ZW0sIGRpc21pc3NNZW51IH0pLFxyXG4gICAgICAgIH0gYXMgUGljazxJQ29udGV4dHVhbE1lbnVJdGVtLCAnb25SZW5kZXInPilcclxuICAgICkgYXMgSUNvbnRleHR1YWxNZW51SXRlbTtcclxuICB9XHJcbn1cclxuIl19