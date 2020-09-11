/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ContentChildren, Directive, EventEmitter, Input, Output, QueryList, ContentChild, TemplateRef, ElementRef, } from '@angular/core';
import { ChangeableItemsHelper } from 'angular-react-toolkit/core/shared/changeable-helper';
import { ChangeableItemDirective } from 'angular-react-toolkit/core/shared/changeable-item.directive';
import { getDataAttributes } from 'angular-react-toolkit/utils/get-data-attributes';
/**
 * Wrapper directive to allow rendering a custom item to a ContextualMenuItem.
 */
export class ContextualMenuItemRenderDirective {
}
ContextualMenuItemRenderDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render' },] }
];
ContextualMenuItemRenderDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderDirective.prototype.templateRef;
}
/**
 * Wrapper directive to allow rendering a custom icon to a ContextualMenuItem.
 */
export class ContextualMenuItemRenderIconDirective {
}
ContextualMenuItemRenderIconDirective.decorators = [
    { type: Directive, args: [{ selector: 'fab-command-bar-item > render-icon' },] }
];
ContextualMenuItemRenderIconDirective.propDecorators = {
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    ContextualMenuItemRenderIconDirective.prototype.templateRef;
}
export class ContextualMenuItemDirective extends ChangeableItemDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get onChildItemChanged() {
        return this._changeableItemsHelper && this._changeableItemsHelper.onChildItemChanged;
    }
    /**
     * @return {?}
     */
    get onItemsChanged() {
        return this._changeableItemsHelper && this._changeableItemsHelper.onItemsChanged;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
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
        nonSelfDirective => {
            /** @type {?} */
            const items = nonSelfDirective.map((/**
             * @param {?} directive
             * @return {?}
             */
            directive => this._directiveToContextualMenuItem((/** @type {?} */ (directive)))));
            if (!this.subMenuProps) {
                this.subMenuProps = { items: items };
            }
            else {
                this.subMenuProps.items = items;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._changeableItemsHelper.destroy();
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _directiveToContextualMenuItem(directive) {
        return Object.assign({}, directive, getDataAttributes(directive.elementRef.nativeElement, true), { onClick: (/**
             * @param {?} ev
             * @param {?} item
             * @return {?}
             */
            (ev, item) => {
                directive.click.emit({ ev: ev && ev.nativeEvent, item: item });
            }) });
    }
}
ContextualMenuItemDirective.decorators = [
    { type: Directive, args: [{ selector: 'contextual-menu-item' },] }
];
/** @nocollapse */
ContextualMenuItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2NvbnRleHR1YWwtbWVudS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvY29udGV4dHVhbC1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0scURBQXFELENBQUM7QUFDdkgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7QUFXcEYsTUFBTSxPQUFPLGlDQUFpQzs7O1lBRDdDLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRTs7OzBCQUVyRCxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUE1Qyx3REFBeUg7Ozs7O0FBTzNILE1BQU0sT0FBTyxxQ0FBcUM7OztZQURqRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsb0NBQW9DLEVBQUU7OzswQkFFMUQsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBNUMsNERBQTZIOztBQUkvSCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsdUJBQTRDOzs7O0lBMEQzRixZQUFxQixVQUFtQztRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQURXLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBWnJDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBbUUsQ0FBQztJ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QUtOLE1BQU07Ozs7SUE5Q1AsMERBQW1IOztJQUNuSCxzREFBZ0k7O0lBQ2hJLDBEQUNvRTs7SUFFcEUsbURBQTREOztJQUM1RCwyQ0FBNEM7O0lBQzVDLG9EQUE4RDs7SUFDOUQsK0NBQW9EOztJQUNwRCxnREFBc0Q7O0lBQ3RELHVEQUFvRTs7SUFDcEUsK0NBQW9EOztJQUNwRCxzREFBa0U7O0lBQ2xFLCtDQUFvRDs7SUFDcEQsK0NBQW9EOztJQUNwRCw4Q0FBa0Q7O0lBQ2xELDRDQUE4Qzs7SUFDOUMsMkNBQTRDOztJQUM1QywyQ0FBNEM7O0lBQzVDLDZDQUFnRDs7SUFDaEQsMENBQTBDOztJQUMxQyxtREFBNEQ7O0lBQzVELHdEQUFzRTs7SUFDdEUsZ0RBQXNEOztJQUN0RCw4RUFBa0g7O0lBQ2xILG1EQUE0RDs7SUFDNUQsZ0RBQXNEOztJQUN0RCw0Q0FBOEM7O0lBQzlDLGdEQUFzRDs7SUFDdEQsNENBQThDOztJQUM5QyxrREFBMEQ7O0lBQzFELDJDQUE0Qzs7SUFDNUMsK0RBQW9GOztJQUNwRixrREFBMEQ7O0lBQzFELCtDQUFvRDs7SUFDcEQsMkNBQTRDOztJQUM1Qyw2Q0FBc0Q7O0lBQ3RELGlEQUE4RDs7SUFFOUQsNENBQStHOzs7OztJQWdCL0csNkRBQTJFOztJQUovRCxpREFBNEM7Ozs7OztBQTBDMUQsZ0RBVUM7OztJQVJDLGdEQUF3Rjs7SUFDeEYsNENBQWdGOztJQUNoRiwwQ0FBc0I7Ozs7OztBQVF4Qiw2REFHQzs7O0lBRkMsdURBQVU7O0lBQ1YsOERBQXNEOzs7OztBQUd4RCxpRUFFQzs7O0lBREMseUVBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbnRleHR1YWxNZW51SXRlbSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0NvbnRleHR1YWxNZW51JztcclxuaW1wb3J0IHsgS25vd25LZXlzLCBJbnB1dFJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvZGVjbGFyYXRpb25zL2FuZ3VsYXIvdHlwZWQtY2hhbmdlcyc7XHJcbmltcG9ydCB7IEl0ZW1DaGFuZ2VkUGF5bG9hZCB9IGZyb20gJ2FuZ3VsYXItcmVhY3QtdG9vbGtpdC9jb3JlL2RlY2xhcmF0aXZlL2l0ZW0tY2hhbmdlZC5wYXlsb2FkJztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1zSGVscGVyLCBJQ2hhbmdlYWJsZUl0ZW1zQ29udGFpbmVyIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L2NvcmUvc2hhcmVkL2NoYW5nZWFibGUtaGVscGVyJztcclxuaW1wb3J0IHsgQ2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmUgfSBmcm9tICdhbmd1bGFyLXJlYWN0LXRvb2xraXQvY29yZS9zaGFyZWQvY2hhbmdlYWJsZS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGdldERhdGFBdHRyaWJ1dGVzIH0gZnJvbSAnYW5ndWxhci1yZWFjdC10b29sa2l0L3V0aWxzL2dldC1kYXRhLWF0dHJpYnV0ZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29udGV4dHVhbE1lbnVJdGVtQ2hhbmdlZFBheWxvYWQgPSBJdGVtQ2hhbmdlZFBheWxvYWQ8XHJcbiAgSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNbJ2tleSddLFxyXG4gIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zXHJcbj47XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgdG8gYWxsb3cgcmVuZGVyaW5nIGEgY3VzdG9tIGl0ZW0gdG8gYSBDb250ZXh0dWFsTWVudUl0ZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbSA+IHJlbmRlcicgfSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHR1YWxNZW51SXRlbVJlbmRlckRpcmVjdGl2ZSB7XHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1JlbmRlckNvbnRleHQ+O1xyXG59XHJcblxyXG4vKipcclxuICogV3JhcHBlciBkaXJlY3RpdmUgdG8gYWxsb3cgcmVuZGVyaW5nIGEgY3VzdG9tIGljb24gdG8gYSBDb250ZXh0dWFsTWVudUl0ZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItaXRlbSA+IHJlbmRlci1pY29uJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dHVhbE1lbnVJdGVtUmVuZGVySWNvbkRpcmVjdGl2ZSB7XHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uc1JlbmRlckljb25Db250ZXh0PjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnY29udGV4dHVhbC1tZW51LWl0ZW0nIH0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDaGFuZ2VhYmxlSXRlbURpcmVjdGl2ZTxJQ29udGV4dHVhbE1lbnVJdGVtPlxyXG4gIGltcGxlbWVudHNcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBJQ2hhbmdlYWJsZUl0ZW1zQ29udGFpbmVyPElDb250ZXh0dWFsTWVudUl0ZW0+LFxyXG4gICAgSUNvbnRleHR1YWxNZW51SXRlbSxcclxuICAgIE9uQ2hhbmdlczxDb250ZXh0dWFsTWVudUl0ZW1EaXJlY3RpdmU+LFxyXG4gICAgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkcmVuKENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZSkgcmVhZG9ubHkgbWVudUl0ZW1zRGlyZWN0aXZlczogUXVlcnlMaXN0PENvbnRleHR1YWxNZW51SXRlbURpcmVjdGl2ZT47XHJcbiAgQENvbnRlbnRDaGlsZChDb250ZXh0dWFsTWVudUl0ZW1SZW5kZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSByZW5kZXJEaXJlY3RpdmU6IENvbnRleHR1YWxNZW51SXRlbVJlbmRlckRpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKENvbnRleHR1YWxNZW51SXRlbVJlbmRlckljb25EaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHJlYWRvbmx5IHJlbmRlckljb25EaXJlY3RpdmU6IENvbnRleHR1YWxNZW51SXRlbVJlbmRlckljb25EaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFJlZj86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIHRleHQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWyd0ZXh0J107XHJcbiAgQElucHV0KCkgc2Vjb25kYXJ5VGV4dD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3NlY29uZGFyeVRleHQnXTtcclxuICBASW5wdXQoKSBpdGVtVHlwZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2l0ZW1UeXBlJ107XHJcbiAgQElucHV0KCkgaWNvblByb3BzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnaWNvblByb3BzJ107XHJcbiAgQElucHV0KCkgc3VibWVudUljb25Qcm9wcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3N1Ym1lbnVJY29uUHJvcHMnXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZD86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgcHJpbWFyeURpc2FibGVkPzogSUNvbnRleHR1YWxNZW51SXRlbVsncHJpbWFyeURpc2FibGVkJ107XHJcbiAgQElucHV0KCkgc2hvcnRDdXQ/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydzaG9ydEN1dCddO1xyXG4gIEBJbnB1dCgpIGNhbkNoZWNrPzogSUNvbnRleHR1YWxNZW51SXRlbVsnY2FuQ2hlY2snXTtcclxuICBASW5wdXQoKSBjaGVja2VkPzogSUNvbnRleHR1YWxNZW51SXRlbVsnY2hlY2tlZCddO1xyXG4gIEBJbnB1dCgpIHNwbGl0PzogSUNvbnRleHR1YWxNZW51SXRlbVsnc3BsaXQnXTtcclxuICBASW5wdXQoKSBkYXRhPzogSUNvbnRleHR1YWxNZW51SXRlbVsnZGF0YSddO1xyXG4gIEBJbnB1dCgpIGhyZWY/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydocmVmJ107XHJcbiAgQElucHV0KCkgdGFyZ2V0PzogSUNvbnRleHR1YWxNZW51SXRlbVsndGFyZ2V0J107XHJcbiAgQElucHV0KCkgcmVsPzogSUNvbnRleHR1YWxNZW51SXRlbVsncmVsJ107XHJcbiAgQElucHV0KCkgc3ViTWVudVByb3BzPzogSUNvbnRleHR1YWxNZW51SXRlbVsnc3ViTWVudVByb3BzJ107XHJcbiAgQElucHV0KCkgZ2V0SXRlbUNsYXNzTmFtZXM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydnZXRJdGVtQ2xhc3NOYW1lcyddO1xyXG4gIEBJbnB1dCgpIGl0ZW1Qcm9wcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2l0ZW1Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIGdldFNwbGl0QnV0dG9uVmVydGljYWxEaXZpZGVyQ2xhc3NOYW1lcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2dldFNwbGl0QnV0dG9uVmVydGljYWxEaXZpZGVyQ2xhc3NOYW1lcyddO1xyXG4gIEBJbnB1dCgpIHNlY3Rpb25Qcm9wcz86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3NlY3Rpb25Qcm9wcyddO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlPzogSUNvbnRleHR1YWxNZW51SXRlbVsnc3R5bGUnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydhcmlhTGFiZWwnXTtcclxuICBASW5wdXQoKSB0aXRsZT86IElDb250ZXh0dWFsTWVudUl0ZW1bJ3RpdGxlJ107XHJcbiAgQElucHV0KCkgb25Nb3VzZURvd24/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydvbk1vdXNlRG93biddO1xyXG4gIEBJbnB1dCgpIHJvbGU/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydyb2xlJ107XHJcbiAgQElucHV0KCkgY3VzdG9tT25SZW5kZXJMaXN0TGVuZ3RoPzogSUNvbnRleHR1YWxNZW51SXRlbVsnY3VzdG9tT25SZW5kZXJMaXN0TGVuZ3RoJ107XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJQ29udGV4dHVhbE1lbnVJdGVtWydrZXl0aXBQcm9wcyddO1xyXG4gIEBJbnB1dCgpIGluYWN0aXZlPzogSUNvbnRleHR1YWxNZW51SXRlbVsnaW5hY3RpdmUnXTtcclxuICBASW5wdXQoKSBuYW1lPzogSUNvbnRleHR1YWxNZW51SXRlbVsnbmFtZSddO1xyXG4gIEBJbnB1dCgpIHJlbmRlcjogSUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNbJ3JlbmRlciddO1xyXG4gIEBJbnB1dCgpIHJlbmRlckljb246IElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zWydyZW5kZXJJY29uJ107XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldj86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50OyBpdGVtPzogSUNvbnRleHR1YWxNZW51SXRlbSB9PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBnZXQgb25DaGlsZEl0ZW1DaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxJdGVtQ2hhbmdlZFBheWxvYWQ8c3RyaW5nLCBJQ29udGV4dHVhbE1lbnVJdGVtPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlciAmJiB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIub25DaGlsZEl0ZW1DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZ2V0IG9uSXRlbXNDaGFuZ2VkKCk6IEV2ZW50RW1pdHRlcjxRdWVyeUxpc3Q8Q2hhbmdlYWJsZUl0ZW1EaXJlY3RpdmU8SUNvbnRleHR1YWxNZW51SXRlbT4+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyICYmIHRoaXMuX2NoYW5nZWFibGVJdGVtc0hlbHBlci5vbkl0ZW1zQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2hhbmdlYWJsZUl0ZW1zSGVscGVyOiBDaGFuZ2VhYmxlSXRlbXNIZWxwZXI8SUNvbnRleHR1YWxNZW51SXRlbT47XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnJlbmRlckRpcmVjdGl2ZSAmJiB0aGlzLnJlbmRlckRpcmVjdGl2ZS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnJlbmRlckljb25EaXJlY3RpdmUgJiYgdGhpcy5yZW5kZXJJY29uRGlyZWN0aXZlLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMucmVuZGVySWNvbiA9IHRoaXMucmVuZGVySWNvbkRpcmVjdGl2ZS50ZW1wbGF0ZVJlZjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jaGFuZ2VhYmxlSXRlbXNIZWxwZXIgPSBuZXcgQ2hhbmdlYWJsZUl0ZW1zSGVscGVyKHRoaXMubWVudUl0ZW1zRGlyZWN0aXZlcywgdGhpcywgbm9uU2VsZkRpcmVjdGl2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gbm9uU2VsZkRpcmVjdGl2ZS5tYXAoZGlyZWN0aXZlID0+IHRoaXMuX2RpcmVjdGl2ZVRvQ29udGV4dHVhbE1lbnVJdGVtKGRpcmVjdGl2ZSBhcyBhbnkpKTtcclxuICAgICAgaWYgKCF0aGlzLnN1Yk1lbnVQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc3ViTWVudVByb3BzID0geyBpdGVtczogaXRlbXMgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN1Yk1lbnVQcm9wcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY2hhbmdlYWJsZUl0ZW1zSGVscGVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RpcmVjdGl2ZVRvQ29udGV4dHVhbE1lbnVJdGVtKGRpcmVjdGl2ZTogQ29udGV4dHVhbE1lbnVJdGVtRGlyZWN0aXZlKTogSUNvbnRleHR1YWxNZW51SXRlbSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kaXJlY3RpdmUsXHJcbiAgICAgIC4uLmdldERhdGFBdHRyaWJ1dGVzKGRpcmVjdGl2ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLFxyXG4gICAgICBvbkNsaWNrOiAoZXYsIGl0ZW0pID0+IHtcclxuICAgICAgICBkaXJlY3RpdmUuY2xpY2suZW1pdCh7IGV2OiBldiAmJiBldi5uYXRpdmVFdmVudCwgaXRlbTogaXRlbSB9KTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOb3QgdXNpbmcgYE9taXRgIGhlcmUgc2luY2UgaXQgY29uZnVzZWQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgYW5kIGl0IGp1c3Qgc2hvd2VkIHRoZSBwcm9wZXJ0aWVzIGxpc3RlZCBoZXJlIChgcmVuZGVySWNvbmAsIGByZW5kZXJgIGFuZCBgZGF0YWApLlxyXG4vLyBUaGUgdHlwZSBoZXJlIGlzIGp1c3QgYE9taXRgIHdpdGhvdXQgdGhlIGdlbmVyaWNzIHRob3VnaC5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dHVhbE1lbnVJdGVtT3B0aW9uczxURGF0YSA9IGFueT5cclxuICBleHRlbmRzIFBpY2s8SUNvbnRleHR1YWxNZW51SXRlbSwgRXhjbHVkZTxLbm93bktleXM8SUNvbnRleHR1YWxNZW51SXRlbT4sICdvblJlbmRlcicgfCAnb25SZW5kZXJJY29uJz4+IHtcclxuICByZWFkb25seSByZW5kZXJJY29uPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNSZW5kZXJJY29uQ29udGV4dD47XHJcbiAgcmVhZG9ubHkgcmVuZGVyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SUNvbnRleHR1YWxNZW51SXRlbU9wdGlvbnNSZW5kZXJDb250ZXh0PjtcclxuICByZWFkb25seSBkYXRhPzogVERhdGE7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBhbnkgYXR0cmlidXRlcyBsaWtlIGRhdGEtKiBldGMuXHJcbiAgICovXHJcbiAgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zUmVuZGVyQ29udGV4dCB7XHJcbiAgaXRlbTogYW55O1xyXG4gIGRpc21pc3NNZW51OiAoZXY/OiBhbnksIGRpc21pc3NBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZXh0dWFsTWVudUl0ZW1PcHRpb25zUmVuZGVySWNvbkNvbnRleHQge1xyXG4gIGNvbnRleHR1YWxNZW51SXRlbTogSUNvbnRleHR1YWxNZW51SXRlbTtcclxufVxyXG4iXX0=