/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, ContentChild, TemplateRef, ElementRef, } from '@angular/core';
import { ChangeableItemsHelper } from 'angular-react-toolkit/core/shared/changeable-helper';
import { ChangeableItemDirective } from 'angular-react-toolkit/core/shared/changeable-item.directive';
import { getDataAttributes } from 'angular-react-toolkit/utils/get-data-attributes';
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
export { ContextualMenuItemRenderDirective };
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
export { ContextualMenuItemRenderIconDirective };
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderIconDirective.prototype.templateRef;
}
var ContextualMenuItemDirective = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuItemDirective, _super);
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
        return tslib_1.__assign({}, directive, getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
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
export { ContextualMenuItemDirective };
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
export function IContextualMenuItemOptions() { }
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
export function IContextualMenuItemOptionsRenderContext() { }
if (false) {
    /** @type {?} */
    IContextualMenuItemOptionsRenderContext.prototype.item;
    /** @type {?} */
    IContextualMenuItemOptionsRenderContext.prototype.dismissMenu;
}
/**
 * @record
 */
export function IContextualMenuItemOptionsRenderIconContext() { }
if (false) {
    /** @type {?} */
    IContextualMenuItemOptionsRenderIconContext.prototype.contextualMenuItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvbnRleHR1YWwtbWVudS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7O0FBVXBGO0lBQUE7SUFHQSxDQUFDOztnQkFIQSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsK0JBQStCLEVBQUU7Ozs4QkFFckQsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBQzlDLHdDQUFDO0NBQUEsQUFIRCxJQUdDO1NBRlksaUNBQWlDOzs7SUFDNUMsd0RBQXlIOzs7OztBQU0zSDtJQUFBO0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG9DQUFvQyxFQUFFOzs7OEJBRTFELFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQUM5Qyw0Q0FBQztDQUFBLEFBSEQsSUFHQztTQUZZLHFDQUFxQzs7O0lBQ2hELDREQUE2SDs7QUFHL0g7SUFDaUQsdURBQTRDO0lBMEQzRixxQ0FBcUIsVUFBbUM7UUFBeEQsWUFDRSxpQkFBTyxTQUNSO1FBRm9CLGdC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cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBFbGVtZW50UmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udGV4dHVhbE1lbnVJdGVtIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvQ29udGV4dHVhbE1lbnUnO1xyXG5pbXBvcnQgeyBLbm93bktleXMsIElucHV0UmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9kZWNsYXJhdGlvbnMvYW5ndWxhci90eXBlZC1jaGFuZ2VzJztcclxuaW1wb3J0IHsgSXRlbUNoYW5nZWRQYXlsb2FkIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvZGVjbGFyYXRpdmUvaXRlbS1jaGFuZ2VkLnBheWxvYWQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIsIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXIgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1oZWxwZXInO1xyXG5pbXBvcnQgeyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZSB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL3NoYXJlZC9jaGFuZ2VhYmxlLWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZ2V0RGF0YUF0dHJpYnV0ZXMgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvdXRpbHMvZ2V0LWRhdGEtYXR0cmlidXRlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBDb250ZXh0dWFsTWVudUl0ZW1DaGFuZ2VkUGF5bG9hZCA9IEl0ZW1DaGFuZ2VkUGF5bG9hZDxcclxuICBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1sna2V5J10sXHJcbiAgSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNcclxuPjtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSB0byBhbGxvdyByZW5kZXJpbmcgYSBjdXN0b20gaXRlbSB0byBhIENvbnRleHR1YWxNZW51SXRlbS5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1pdGVtID4gcmVuZGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dHVhbE1lbnVJdGVtUmVuZGVyRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGRpcmVjdGl2ZSB0byBhbGxvdyByZW5kZXJpbmcgYSBjdXN0b20gaWNvbiB0byBhIENvbnRleHR1YWxNZW51SXRlbS5cclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1pdGVtID4gcmVuZGVyLWljb24nIH0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0dWFsTWVudUl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlIHtcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQ+O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjb250ZXh0dWFsLW1lbnUtaXRlbScgfSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSBleHRlbmRzIENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPElDb250ZXh0dWFsTWVudUl0ZW0+XHJcbiAgaW1wbGVtZW50c1xyXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICAgIElDaGFuZ2VhYmxlSXRlbXNDb250YWluZXI8SUNvbnRleHR1YWxNZW51SXRlbT4sXHJcbiAgICBJQ29udGV4dHVhbE1lbnVJdGVtLFxyXG4gICAgT25DaGFuZ2VzPENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZT4sXHJcbiAgICBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlKSByZWFkb25seSBtZW51SXRlbXNEaXJlY3RpdmVzOiBRdWVyeUxpc3Q8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPjtcclxuICBAQ29udGVudENoaWxkKENvbnRleHR1YWxNZW51SXRlbVJlbmRlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHJlbmRlckRpcmVjdGl2ZTogQ29udGV4dHVhbE1lbnVJdGVtUmVuZGVyRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGV4dHVhbE1lbnVJdGVtUmVuZGVySWNvbkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcmVhZG9ubHkgcmVuZGVySWNvbkRpcmVjdGl2ZTogQ29udGV4dHVhbE1lbnVJdGVtUmVuZGVySWNvbkRpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSUNvbnRleHR1YWxNZW51SXRlbVsnY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgdGV4dD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3RleHQnXTtcclxuICBASW5wdXQoKSBzZWNvbmRhcnlUZXh0PzogSUNvbnRleHR1YWxNZW51SXRlbVsnc2Vjb25kYXJ5VGV4dCddO1xyXG4gIEBJbnB1dCgpIGl0ZW1UeXBlPzogSUNvbnRleHR1YWxNZW51SXRlbVsnaXRlbVR5cGUnXTtcclxuICBASW5wdXQoKSBpY29uUHJvcHM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydpY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBzdWJtZW51SWNvblByb3BzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnc3VibWVudUljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSUNvbnRleHR1YWxNZW51SXRlbVsnZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBwcmltYXJ5RGlzYWJsZWQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydwcmltYXJ5RGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSBzaG9ydEN1dD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3Nob3J0Q3V0J107XHJcbiAgQElucHV0KCkgY2FuQ2hlY2s/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydjYW5DaGVjayddO1xyXG4gIEBJbnB1dCgpIGNoZWNrZWQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydjaGVja2VkJ107XHJcbiAgQElucHV0KCkgc3BsaXQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzcGxpdCddO1xyXG4gIEBJbnB1dCgpIGRhdGE/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydkYXRhJ107XHJcbiAgQElucHV0KCkgaHJlZj86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2hyZWYnXTtcclxuICBASW5wdXQoKSB0YXJnZXQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWyd0YXJnZXQnXTtcclxuICBASW5wdXQoKSByZWw/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydyZWwnXTtcclxuICBASW5wdXQoKSBzdWJNZW51UHJvcHM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzdWJNZW51UHJvcHMnXTtcclxuICBASW5wdXQoKSBnZXRJdGVtQ2xhc3NOYW1lcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2dldEl0ZW1DbGFzc05hbWVzJ107XHJcbiAgQElucHV0KCkgaXRlbVByb3BzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnaXRlbVByb3BzJ107XHJcbiAgQElucHV0KCkgZ2V0U3BsaXRCdXR0b25WZXJ0aWNhbERpdmlkZXJDbGFzc05hbWVzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnZ2V0U3BsaXRCdXR0b25WZXJ0aWNhbERpdmlkZXJDbGFzc05hbWVzJ107XHJcbiAgQElucHV0KCkgc2VjdGlvblByb3BzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnc2VjdGlvblByb3BzJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSUNvbnRleHR1YWxNZW51SXRlbVsnY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgc3R5bGU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzdHlsZSddO1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIHRpdGxlPzogSUNvbnRleHR1YWxNZW51SXRlbVsndGl0bGUnXTtcclxuICBASW5wdXQoKSBvbk1vdXNlRG93bj86IElDb250ZXh0dWFsTWVudUl0ZW1bJ29uTW91c2VEb3duJ107XHJcbiAgQElucHV0KCkgcm9sZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3JvbGUnXTtcclxuICBASW5wdXQoKSBjdXN0b21PblJlbmRlckxpc3RMZW5ndGg/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydjdXN0b21PblJlbmRlckxpc3RMZW5ndGgnXTtcclxuICBASW5wdXQoKSBrZXl0aXBQcm9wcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2tleXRpcFByb3BzJ107XHJcbiAgQElucHV0KCkgaW5hY3RpdmU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydpbmFjdGl2ZSddO1xyXG4gIEBJbnB1dCgpIG5hbWU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWyduYW1lJ107XHJcbiAgQElucHV0KCkgcmVuZGVyOiBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1sncmVuZGVyJ107XHJcbiAgQElucHV0KCkgcmVuZGVySWNvbjogSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNbJ3JlbmRlckljb24nXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7IGl0ZW0/OiBJQ29udGV4dHVhbE1lbnVJdGVtIH0+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGdldCBvbkNoaWxkSXRlbUNoYW5nZWQoKTogRXZlbnRFbWl0dGVyPEl0ZW1DaGFuZ2VkUGF5bG9hZDxzdHJpbmcsIElDb250ZXh0dWFsTWVudUl0ZW0+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyICYmIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5vbkNoaWxkSXRlbUNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBnZXQgb25JdGVtc0NoYW5nZWQoKTogRXZlbnRFbWl0dGVyPFF1ZXJ5TGlzdDxDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxJQ29udGV4dHVhbE1lbnVJdGVtPj4+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLm9uSXRlbXNDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jaGFuZ2VhYmxlSXRlbXNIZWxwZXI6IENoYW5nZWFibGVJdGVtc0hlbHBlcjxJQ29udGV4dHVhbE1lbnVJdGVtPjtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMucmVuZGVyRGlyZWN0aXZlICYmIHRoaXMucmVuZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXJEaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmVuZGVySWNvbkRpcmVjdGl2ZSAmJiB0aGlzLnJlbmRlckljb25EaXJlY3RpdmUudGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5yZW5kZXJJY29uID0gdGhpcy5yZW5kZXJJY29uRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlciA9IG5ldyBDaGFuZ2VhYmxlSXRlbXNIZWxwZXIodGhpcy5tZW51SXRlbXNEaXJlY3RpdmVzLCB0aGlzLCBub25TZWxmRGlyZWN0aXZlID0+IHtcclxuICAgICAgY29uc3QgaXRlbXMgPSBub25TZWxmRGlyZWN0aXZlLm1hcChkaXJlY3RpdmUgPT4gdGhpcy5fZGlyZWN0aXZlVG9Db250ZXh0dWFsTWVudUl0ZW0oZGlyZWN0aXZlIGFzIGFueSkpO1xyXG4gICAgICBpZiAoIXRoaXMuc3ViTWVudVByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51UHJvcHMgPSB7IGl0ZW1zOiBpdGVtcyB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3ViTWVudVByb3BzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlyZWN0aXZlVG9Db250ZXh0dWFsTWVudUl0ZW0oZGlyZWN0aXZlOiBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUpOiBJQ29udGV4dHVhbE1lbnVJdGVtIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmRpcmVjdGl2ZSxcclxuICAgICAgLi4uZ2V0RGF0YUF0dHJpYnV0ZXMoZGlyZWN0aXZlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSksXHJcbiAgICAgIG9uQ2xpY2s6IChldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGRpcmVjdGl2ZS5jbGljay5lbWl0KHsgZXY6IGV2ICYmIGV2Lm5hdGl2ZUV2ZW50LCBpdGVtOiBpdGVtIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE5vdCB1c2luZyBgT21pdGAgaGVyZSBzaW5jZSBpdCBjb25mdXNlZCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciBhbmQgaXQganVzdCBzaG93ZWQgdGhlIHByb3BlcnRpZXMgbGlzdGVkIGhlcmUgKGByZW5kZXJJY29uYCwgYHJlbmRlcmAgYW5kIGBkYXRhYCkuXHJcbi8vIFRoZSB0eXBlIGhlcmUgaXMganVzdCBgT21pdGAgd2l0aG91dCB0aGUgZ2VuZXJpY3MgdGhvdWdoLlxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zPFREYXRhID0gYW55PlxyXG4gIGV4dGVuZHMgUGljazxJQ29udGV4dHVhbE1lbnVJdGVtLCBFeGNsdWRlPEtub3duS2V5czxJQ29udGV4dHVhbE1lbnVJdGVtPiwgJ29uUmVuZGVyJyB8ICdvblJlbmRlckljb24nPj4ge1xyXG4gIHJlYWRvbmx5IHJlbmRlckljb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0PjtcclxuICByZWFkb25seSByZW5kZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1JlbmRlckNvbnRleHQ+O1xyXG4gIHJlYWRvbmx5IGRhdGE/OiBURGF0YTtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGFueSBhdHRyaWJ1dGVzIGxpa2UgZGF0YS0qIGV0Yy5cclxuICAgKi9cclxuICBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0IHtcclxuICBpdGVtOiBhbnk7XHJcbiAgZGlzbWlzc01lbnU6IChldj86IGFueSwgZGlzbWlzc0FsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNSZW5kZXJJY29uQ29udGV4dCB7XHJcbiAgY29udGV4dHVhbE1lbnVJdGVtOiBJQ29udGV4dHVhbE1lbnVJdGVtO1xyXG59XHJcbiJdfQ==