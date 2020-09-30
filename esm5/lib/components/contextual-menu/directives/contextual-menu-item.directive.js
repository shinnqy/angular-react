/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, ContentChild, TemplateRef, ElementRef, } from '@angular/core';
import { getDataAttributes } from '@angular-react/fabric/lib/utils';
import { ChangeableItemsHelper, ChangeableItemDirective } from '@angular-react/fabric/lib/components/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGV4dHVhbC1tZW51L2RpcmVjdGl2ZXMvY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFzQixxQkFBcUIsRUFBNkIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQVcxSjtJQUFBO0lBR0EsQ0FBQzs7Z0JBSEEsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFOzs7OEJBRXJELFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQUM5Qyx3Q0FBQztDQUFBLEFBSEQsSUFHQztTQUZZLGlDQUFpQzs7O0lBQzVDLHdEQUF5SDs7Ozs7QUFNM0g7SUFBQTtJQUdBLENBQUM7O2dCQUhBLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxvQ0FBb0MsRUFBRTs7OzhCQUUxRCxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFDOUMsNENBQUM7Q0FBQSxBQUhELElBR0M7U0FGWSxxQ0FBcUM7OztJQUNoRCw0REFBNkg7O0FBRy9IO0lBQ2lELHVEQUE0QztJQTBEM0YscUNBQXFCLFVBQW1DO1FBQXhELFlBQ0UsaUJBQU8sU0FDUjtRQUZvQixnQkFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFackMsV0FBSyxH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IEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbnRleHR1YWxNZW51SXRlbSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NvbnRleHR1YWxNZW51JztcclxuaW1wb3J0IHsgS25vd25LZXlzLCBJbnB1dFJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBnZXREYXRhQXR0cmlidXRlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvdXRpbHMnO1xyXG5pbXBvcnQgeyBJdGVtQ2hhbmdlZFBheWxvYWQsIENoYW5nZWFibGVJdGVtc0hlbHBlciwgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lciwgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvY29yZSc7XHJcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvZGVjbGFyYXRpb25zJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbnRleHR1YWxNZW51SXRlbUNoYW5nZWRQYXlsb2FkID0gSXRlbUNoYW5nZWRQYXlsb2FkPFxyXG4gIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zWydrZXknXSxcclxuICBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1xyXG4+O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIHRvIGFsbG93IHJlbmRlcmluZyBhIGN1c3RvbSBpdGVtIHRvIGEgQ29udGV4dHVhbE1lbnVJdGVtLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyLWl0ZW0gPiByZW5kZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0dWFsTWVudUl0ZW1SZW5kZXJEaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZGlyZWN0aXZlIHRvIGFsbG93IHJlbmRlcmluZyBhIGN1c3RvbSBpY29uIHRvIGEgQ29udGV4dHVhbE1lbnVJdGVtLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnZmFiLWNvbW1hbmQtYmFyLWl0ZW0gPiByZW5kZXItaWNvbicgfSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHR1YWxNZW51SXRlbVJlbmRlckljb25EaXJlY3RpdmUge1xyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNSZW5kZXJJY29uQ29udGV4dD47XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2NvbnRleHR1YWwtbWVudS1pdGVtJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlIGV4dGVuZHMgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8SUNvbnRleHR1YWxNZW51SXRlbT5cclxuICBpbXBsZW1lbnRzXHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgSUNoYW5nZWFibGVJdGVtc0NvbnRhaW5lcjxJQ29udGV4dHVhbE1lbnVJdGVtPixcclxuICAgIElDb250ZXh0dWFsTWVudUl0ZW0sXHJcbiAgICBPbkNoYW5nZXM8Q29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlPixcclxuICAgIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUpIHJlYWRvbmx5IG1lbnVJdGVtc0RpcmVjdGl2ZXM6IFF1ZXJ5TGlzdDxDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmU+O1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGV4dHVhbE1lbnVJdGVtUmVuZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgcmVuZGVyRGlyZWN0aXZlOiBDb250ZXh0dWFsTWVudUl0ZW1SZW5kZXJEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChDb250ZXh0dWFsTWVudUl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICByZWFkb25seSByZW5kZXJJY29uRGlyZWN0aXZlOiBDb250ZXh0dWFsTWVudUl0ZW1SZW5kZXJJY29uRGlyZWN0aXZlO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydjb21wb25lbnRSZWYnXTtcclxuICBASW5wdXQoKSB0ZXh0PzogSUNvbnRleHR1YWxNZW51SXRlbVsndGV4dCddO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeVRleHQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzZWNvbmRhcnlUZXh0J107XHJcbiAgQElucHV0KCkgaXRlbVR5cGU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydpdGVtVHlwZSddO1xyXG4gIEBJbnB1dCgpIGljb25Qcm9wcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2ljb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIHN1Ym1lbnVJY29uUHJvcHM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzdWJtZW51SWNvblByb3BzJ107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydkaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIHByaW1hcnlEaXNhYmxlZD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3ByaW1hcnlEaXNhYmxlZCddO1xyXG4gIEBJbnB1dCgpIHNob3J0Q3V0PzogSUNvbnRleHR1YWxNZW51SXRlbVsnc2hvcnRDdXQnXTtcclxuICBASW5wdXQoKSBjYW5DaGVjaz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2NhbkNoZWNrJ107XHJcbiAgQElucHV0KCkgY2hlY2tlZD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2NoZWNrZWQnXTtcclxuICBASW5wdXQoKSBzcGxpdD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3NwbGl0J107XHJcbiAgQElucHV0KCkgZGF0YT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2RhdGEnXTtcclxuICBASW5wdXQoKSBocmVmPzogSUNvbnRleHR1YWxNZW51SXRlbVsnaHJlZiddO1xyXG4gIEBJbnB1dCgpIHRhcmdldD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3RhcmdldCddO1xyXG4gIEBJbnB1dCgpIHJlbD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3JlbCddO1xyXG4gIEBJbnB1dCgpIHN1Yk1lbnVQcm9wcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3N1Yk1lbnVQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGdldEl0ZW1DbGFzc05hbWVzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnZ2V0SXRlbUNsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSBpdGVtUHJvcHM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydpdGVtUHJvcHMnXTtcclxuICBASW5wdXQoKSBnZXRTcGxpdEJ1dHRvblZlcnRpY2FsRGl2aWRlckNsYXNzTmFtZXM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydnZXRTcGxpdEJ1dHRvblZlcnRpY2FsRGl2aWRlckNsYXNzTmFtZXMnXTtcclxuICBASW5wdXQoKSBzZWN0aW9uUHJvcHM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzZWN0aW9uUHJvcHMnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydjbGFzc05hbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3N0eWxlJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSUNvbnRleHR1YWxNZW51SXRlbVsnYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgdGl0bGU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWyd0aXRsZSddO1xyXG4gIEBJbnB1dCgpIG9uTW91c2VEb3duPzogSUNvbnRleHR1YWxNZW51SXRlbVsnb25Nb3VzZURvd24nXTtcclxuICBASW5wdXQoKSByb2xlPzogSUNvbnRleHR1YWxNZW51SXRlbVsncm9sZSddO1xyXG4gIEBJbnB1dCgpIGN1c3RvbU9uUmVuZGVyTGlzdExlbmd0aD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2N1c3RvbU9uUmVuZGVyTGlzdExlbmd0aCddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSUNvbnRleHR1YWxNZW51SXRlbVsna2V5dGlwUHJvcHMnXTtcclxuICBASW5wdXQoKSBpbmFjdGl2ZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2luYWN0aXZlJ107XHJcbiAgQElucHV0KCkgbmFtZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ25hbWUnXTtcclxuICBASW5wdXQoKSByZW5kZXI6IElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zWydyZW5kZXInXTtcclxuICBASW5wdXQoKSByZW5kZXJJY29uOiBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1sncmVuZGVySWNvbiddO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXY/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDsgaXRlbT86IElDb250ZXh0dWFsTWVudUl0ZW0gfT4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZ2V0IG9uQ2hpbGRJdGVtQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8SXRlbUNoYW5nZWRQYXlsb2FkPHN0cmluZywgSUNvbnRleHR1YWxNZW51SXRlbT4+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgJiYgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLm9uQ2hpbGRJdGVtQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGdldCBvbkl0ZW1zQ2hhbmdlZCgpOiBFdmVudEVtaXR0ZXI8UXVlcnlMaXN0PENoYW5nZWFibGVJdGVtRGlyZWN0aXZlPElDb250ZXh0dWFsTWVudUl0ZW0+Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlciAmJiB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25JdGVtc0NoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NoYW5nZWFibGVJdGVtc0hlbHBlcjogQ2hhbmdlYWJsZUl0ZW1zSGVscGVyPElDb250ZXh0dWFsTWVudUl0ZW0+O1xyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5yZW5kZXJEaXJlY3RpdmUgJiYgdGhpcy5yZW5kZXJEaXJlY3RpdmUudGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlckRpcmVjdGl2ZS50ZW1wbGF0ZVJlZjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yZW5kZXJJY29uRGlyZWN0aXZlICYmIHRoaXMucmVuZGVySWNvbkRpcmVjdGl2ZS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnJlbmRlckljb24gPSB0aGlzLnJlbmRlckljb25EaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyID0gbmV3IENoYW5nZWFibGVJdGVtc0hlbHBlcih0aGlzLm1lbnVJdGVtc0RpcmVjdGl2ZXMsIHRoaXMsIG5vblNlbGZEaXJlY3RpdmUgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtcyA9IG5vblNlbGZEaXJlY3RpdmUubWFwKGRpcmVjdGl2ZSA9PiB0aGlzLl9kaXJlY3RpdmVUb0NvbnRleHR1YWxNZW51SXRlbShkaXJlY3RpdmUgYXMgYW55KSk7XHJcbiAgICAgIGlmICghdGhpcy5zdWJNZW51UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnN1Yk1lbnVQcm9wcyA9IHsgaXRlbXM6IGl0ZW1zIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51UHJvcHMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXJlY3RpdmVUb0NvbnRleHR1YWxNZW51SXRlbShkaXJlY3RpdmU6IENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSk6IElDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGlyZWN0aXZlLFxyXG4gICAgICAuLi5nZXREYXRhQXR0cmlidXRlcyhkaXJlY3RpdmUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKSxcclxuICAgICAgb25DbGljazogKGV2LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aXZlLmNsaWNrLmVtaXQoeyBldjogZXYgJiYgZXYubmF0aXZlRXZlbnQsIGl0ZW06IGl0ZW0gfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTm90IHVzaW5nIGBPbWl0YCBoZXJlIHNpbmNlIGl0IGNvbmZ1c2VkIHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGFuZCBpdCBqdXN0IHNob3dlZCB0aGUgcHJvcGVydGllcyBsaXN0ZWQgaGVyZSAoYHJlbmRlckljb25gLCBgcmVuZGVyYCBhbmQgYGRhdGFgKS5cclxuLy8gVGhlIHR5cGUgaGVyZSBpcyBqdXN0IGBPbWl0YCB3aXRob3V0IHRoZSBnZW5lcmljcyB0aG91Z2guXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnM8VERhdGEgPSBhbnk+XHJcbiAgZXh0ZW5kcyBQaWNrPElDb250ZXh0dWFsTWVudUl0ZW0sIEV4Y2x1ZGU8S25vd25LZXlzPElDb250ZXh0dWFsTWVudUl0ZW0+LCAnb25SZW5kZXInIHwgJ29uUmVuZGVySWNvbic+PiB7XHJcbiAgcmVhZG9ubHkgcmVuZGVySWNvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQ+O1xyXG4gIHJlYWRvbmx5IHJlbmRlcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dD47XHJcbiAgcmVhZG9ubHkgZGF0YT86IFREYXRhO1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgYW55IGF0dHJpYnV0ZXMgbGlrZSBkYXRhLSogZXRjLlxyXG4gICAqL1xyXG4gIFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1JlbmRlckNvbnRleHQge1xyXG4gIGl0ZW06IGFueTtcclxuICBkaXNtaXNzTWVudTogKGV2PzogYW55LCBkaXNtaXNzQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0IHtcclxuICBjb250ZXh0dWFsTWVudUl0ZW06IElDb250ZXh0dWFsTWVudUl0ZW07XHJcbn1cclxuIl19