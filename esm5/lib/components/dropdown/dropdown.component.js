/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, Output, EventEmitter, ContentChild, } from '@angular/core';
import { DropdownOptionsDirective } from './directives/dropdown-options.directive';
var FabDropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabDropdownComponent, _super);
    function FabDropdownComponent(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, { setHostDisplay: true }) || this;
        _this.onChange = new EventEmitter();
        _this.onDismiss = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onDismissHandler = _this.onDismissHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    FabDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onRenderContainer = this.createRenderPropHandler(this.renderContainer);
        this.onRenderList = this.createRenderPropHandler(this.renderList);
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        this.onRenderOption = this.createRenderPropHandler(this.renderOption);
        this.onRenderPlaceholder = this.createRenderPropHandler(this.renderPlaceholder);
        this.onRenderPlaceHolder = this.createRenderPropHandler(this.renderPlaceHolder);
        this.onRenderTitle = this.createRenderPropHandler(this.renderTitle);
        this.onRenderCaretDown = this.createRenderPropHandler(this.renderCaretDown);
    };
    /**
     * @return {?}
     */
    FabDropdownComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.dropdownOptionsDirective) {
            this._initDirective(this.dropdownOptionsDirective);
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    FabDropdownComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    function (event, option, index) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            option: option,
            index: index,
        });
    };
    /**
     * @return {?}
     */
    FabDropdownComponent.prototype.onDismissHandler = /**
     * @return {?}
     */
    function () {
        this.onDismiss.emit();
    };
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    FabDropdownComponent.prototype._initDirective = /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        this.options = directive.items;
        this.markForCheck();
    };
    FabDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown',
                    exportAs: 'fabDropdown',
                    template: "\n    <Dropdown\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [label]=\"label\"\n      [ariaLabel]=\"ariaLabel\"\n      [id]=\"id\"\n      [className]=\"className\"\n      [defaultSelectedKey]=\"defaultSelectedKey\"\n      [selectedKey]=\"selectedKey\"\n      [disabled]=\"disabled\"\n      [required]=\"required\"\n      [calloutProps]=\"calloutProps\"\n      [panelProps]=\"panelProps\"\n      [errorMessage]=\"errorMessage\"\n      [placeholder]=\"placeholder\"\n      [openOnKeyboardFocus]=\"openOnKeyboardFocus\"\n      [options]=\"options\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [responsiveMode]=\"responsiveMode\"\n      [multiSelect]=\"multiSelect\"\n      [defaultSelectedKeys]=\"defaultSelectedKeys\"\n      [selectedKeys]=\"selectedKeys\"\n      [multiSelectDelimiter]=\"multiSelectDelimiter\"\n      [notifyOnReselect]=\"notifyOnReselect\"\n      [keytipProps]=\"keytipProps\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [RenderContainer]=\"renderContainer && onRenderContainer\"\n      [RenderList]=\"renderList && onRenderList\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderOption]=\"renderOption && onRenderOption\"\n      [RenderPlaceholder]=\"renderPlaceholder && onRenderPlaceholder\"\n      [RenderPlaceHolder]=\"renderPlaceHolder && onRenderPlaceHolder\"\n      [RenderTitle]=\"renderTitle && onRenderTitle\"\n      [RenderCaretDown]=\"renderCaretDown && onRenderCaretDown\"\n      [Change]=\"onChangeHandler\"\n      [Dismiss]=\"onDismissHandler\"\n    ></Dropdown>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    FabDropdownComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }],
        dropdownOptionsDirective: [{ type: ContentChild, args: [DropdownOptionsDirective, { static: true },] }],
        componentRef: [{ type: Input }],
        label: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        id: [{ type: Input }],
        className: [{ type: Input }],
        defaultSelectedKey: [{ type: Input }],
        selectedKey: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        calloutProps: [{ type: Input }],
        panelProps: [{ type: Input }],
        errorMessage: [{ type: Input }],
        placeholder: [{ type: Input }],
        openOnKeyboardFocus: [{ type: Input }],
        options: [{ type: Input }],
        dropdownWidth: [{ type: Input }],
        responsiveMode: [{ type: Input }],
        multiSelect: [{ type: Input }],
        defaultSelectedKeys: [{ type: Input }],
        selectedKeys: [{ type: Input }],
        multiSelectDelimiter: [{ type: Input }],
        notifyOnReselect: [{ type: Input }],
        keytipProps: [{ type: Input }],
        theme: [{ type: Input }],
        styles: [{ type: Input }],
        renderContainer: [{ type: Input }],
        renderList: [{ type: Input }],
        renderItem: [{ type: Input }],
        renderOption: [{ type: Input }],
        renderPlaceholder: [{ type: Input }],
        renderPlaceHolder: [{ type: Input }],
        renderTitle: [{ type: Input }],
        renderCaretDown: [{ type: Input }],
        onChange: [{ type: Output }],
        onDismiss: [{ type: Output }]
    };
    return FabDropdownComponent;
}(ReactWrapperComponent));
export { FabDropdownComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabDropdownComponent.prototype.reactNodeRef;
    /** @type {?} */
    FabDropdownComponent.prototype.dropdownOptionsDirective;
    /** @type {?} */
    FabDropdownComponent.prototype.componentRef;
    /** @type {?} */
    FabDropdownComponent.prototype.label;
    /** @type {?} */
    FabDropdownComponent.prototype.ariaLabel;
    /** @type {?} */
    FabDropdownComponent.prototype.id;
    /** @type {?} */
    FabDropdownComponent.prototype.className;
    /** @type {?} */
    FabDropdownComponent.prototype.defaultSelectedKey;
    /** @type {?} */
    FabDropdownComponent.prototype.selectedKey;
    /** @type {?} */
    FabDropdownComponent.prototype.disabled;
    /** @type {?} */
    FabDropdownComponent.prototype.required;
    /** @type {?} */
    FabDropdownComponent.prototype.calloutProps;
    /** @type {?} */
    FabDropdownComponent.prototype.panelProps;
    /** @type {?} */
    FabDropdownComponent.prototype.errorMessage;
    /** @type {?} */
    FabDropdownComponent.prototype.placeholder;
    /** @type {?} */
    FabDropdownComponent.prototype.openOnKeyboardFocus;
    /** @type {?} */
    FabDropdownComponent.prototype.options;
    /** @type {?} */
    FabDropdownComponent.prototype.dropdownWidth;
    /** @type {?} */
    FabDropdownComponent.prototype.responsiveMode;
    /** @type {?} */
    FabDropdownComponent.prototype.multiSelect;
    /** @type {?} */
    FabDropdownComponent.prototype.defaultSelectedKeys;
    /** @type {?} */
    FabDropdownComponent.prototype.selectedKeys;
    /** @type {?} */
    FabDropdownComponent.prototype.multiSelectDelimiter;
    /** @type {?} */
    FabDropdownComponent.prototype.notifyOnReselect;
    /** @type {?} */
    FabDropdownComponent.prototype.keytipProps;
    /** @type {?} */
    FabDropdownComponent.prototype.theme;
    /** @type {?} */
    FabDropdownComponent.prototype.styles;
    /** @type {?} */
    FabDropdownComponent.prototype.renderContainer;
    /** @type {?} */
    FabDropdownComponent.prototype.renderList;
    /** @type {?} */
    FabDropdownComponent.prototype.renderItem;
    /** @type {?} */
    FabDropdownComponent.prototype.renderOption;
    /** @type {?} */
    FabDropdownComponent.prototype.renderPlaceholder;
    /** @type {?} */
    FabDropdownComponent.prototype.renderPlaceHolder;
    /** @type {?} */
    FabDropdownComponent.prototype.renderTitle;
    /** @type {?} */
    FabDropdownComponent.prototype.renderCaretDown;
    /** @type {?} */
    FabDropdownComponent.prototype.onChange;
    /** @type {?} */
    FabDropdownComponent.prototype.onDismiss;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderContainer;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderList;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderItem;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderOption;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderPlaceholder;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderPlaceHolder;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderTitle;
    /** @type {?} */
    FabDropdownComponent.prototype.onRenderCaretDown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQXVDLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVuRjtJQThDMEMsZ0RBQXFDO0lBNkQ3RSw4QkFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CO1FBQTdGLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUl6RTtRQTFCa0IsY0FBUSxHQUFHLElBQUksWUFBWSxFQUE4RCxDQUFDO1FBQzFGLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBdUJ0RCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMzRCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVks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NENBQTZFOztJQUM3RSx3REFBdUg7O0lBRXZILDRDQUF1RDs7SUFDdkQscUNBQXlDOztJQUN6Qyx5Q0FBaUQ7O0lBQ2pELGtDQUFtQzs7SUFDbkMseUNBQWlEOztJQUNqRCxrREFBbUU7O0lBQ25FLDJDQUFxRDs7SUFDckQsd0NBQStDOztJQUMvQyx3Q0FBK0M7O0lBQy9DLDRDQUF1RDs7SUFDdkQsMENBQW1EOztJQUNuRCw0Q0FBdUQ7O0lBQ3ZELDJDQUFxRDs7SUFDckQsbURBQXFFOztJQUVyRSx1Q0FBNEM7O0lBQzVDLDZDQUF5RDs7SUFDekQsOENBQTJEOztJQUMzRCwyQ0FBcUQ7O0lBQ3JELG1EQUFxRTs7SUFDckUsNENBQXVEOztJQUN2RCxvREFBdUU7O0lBQ3ZFLGdEQUErRDs7SUFDL0QsMkNBQXFEOztJQUNyRCxxQ0FBeUM7O0lBQ3pDLHNDQUEyQzs7SUFFM0MsK0NBQXFHOztJQUNyRywwQ0FBZ0c7O0lBQ2hHLDBDQUE4RDs7SUFDOUQsNENBQWdFOztJQUNoRSxpREFBa0U7O0lBQ2xFLGlEQUFrRTs7SUFDbEUsMkNBQWlGOztJQUNqRiwrQ0FBZ0U7O0lBRWhFLHdDQUE2Rzs7SUFDN0cseUNBQXdEOztJQUV4RCxpREFHaUI7O0lBQ2pCLDRDQUdpQjs7SUFDakIsNENBQTJHOztJQUMzRyw4Q0FBNkc7O0lBQzdHLG1EQUE0Rzs7SUFDNUcsbURBQTRHOztJQUM1Ryw2Q0FHaUI7O0lBQ2pCLGlEQUEwRyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJbnB1dFJlbmRlcmVyT3B0aW9ucywgSnN4UmVuZGVyRnVuYywgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXItcmVhY3QvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSURyb3Bkb3duUHJvcHMsIElEcm9wZG93bk9wdGlvbiwgSURyb3Bkb3duIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvRHJvcGRvd24nO1xyXG5pbXBvcnQgeyBJU2VsZWN0YWJsZURyb3BwYWJsZVRleHRQcm9wcywgSVNlbGVjdGFibGVPcHRpb24gfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9TZWxlY3RhYmxlT3B0aW9uJztcclxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW9wdGlvbnMuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWRyb3Bkb3duJyxcclxuICBleHBvcnRBczogJ2ZhYkRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPERyb3Bkb3duXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbbGFiZWxdPVwibGFiZWxcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2RlZmF1bHRTZWxlY3RlZEtleV09XCJkZWZhdWx0U2VsZWN0ZWRLZXlcIlxyXG4gICAgICBbc2VsZWN0ZWRLZXldPVwic2VsZWN0ZWRLZXlcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbY2FsbG91dFByb3BzXT1cImNhbGxvdXRQcm9wc1wiXHJcbiAgICAgIFtwYW5lbFByb3BzXT1cInBhbmVsUHJvcHNcIlxyXG4gICAgICBbZXJyb3JNZXNzYWdlXT1cImVycm9yTWVzc2FnZVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtvcGVuT25LZXlib2FyZEZvY3VzXT1cIm9wZW5PbktleWJvYXJkRm9jdXNcIlxyXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcclxuICAgICAgW2Ryb3Bkb3duV2lkdGhdPVwiZHJvcGRvd25XaWR0aFwiXHJcbiAgICAgIFtyZXNwb25zaXZlTW9kZV09XCJyZXNwb25zaXZlTW9kZVwiXHJcbiAgICAgIFttdWx0aVNlbGVjdF09XCJtdWx0aVNlbGVjdFwiXHJcbiAgICAgIFtkZWZhdWx0U2VsZWN0ZWRLZXlzXT1cImRlZmF1bHRTZWxlY3RlZEtleXNcIlxyXG4gICAgICBbc2VsZWN0ZWRLZXlzXT1cInNlbGVjdGVkS2V5c1wiXHJcbiAgICAgIFttdWx0aVNlbGVjdERlbGltaXRlcl09XCJtdWx0aVNlbGVjdERlbGltaXRlclwiXHJcbiAgICAgIFtub3RpZnlPblJlc2VsZWN0XT1cIm5vdGlmeU9uUmVzZWxlY3RcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtSZW5kZXJDb250YWluZXJdPVwicmVuZGVyQ29udGFpbmVyICYmIG9uUmVuZGVyQ29udGFpbmVyXCJcclxuICAgICAgW1JlbmRlckxpc3RdPVwicmVuZGVyTGlzdCAmJiBvblJlbmRlckxpc3RcIlxyXG4gICAgICBbUmVuZGVySXRlbV09XCJyZW5kZXJJdGVtICYmIG9uUmVuZGVySXRlbVwiXHJcbiAgICAgIFtSZW5kZXJPcHRpb25dPVwicmVuZGVyT3B0aW9uICYmIG9uUmVuZGVyT3B0aW9uXCJcclxuICAgICAgW1JlbmRlclBsYWNlaG9sZGVyXT1cInJlbmRlclBsYWNlaG9sZGVyICYmIG9uUmVuZGVyUGxhY2Vob2xkZXJcIlxyXG4gICAgICBbUmVuZGVyUGxhY2VIb2xkZXJdPVwicmVuZGVyUGxhY2VIb2xkZXIgJiYgb25SZW5kZXJQbGFjZUhvbGRlclwiXHJcbiAgICAgIFtSZW5kZXJUaXRsZV09XCJyZW5kZXJUaXRsZSAmJiBvblJlbmRlclRpdGxlXCJcclxuICAgICAgW1JlbmRlckNhcmV0RG93bl09XCJyZW5kZXJDYXJldERvd24gJiYgb25SZW5kZXJDYXJldERvd25cIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICAgIFtEaXNtaXNzXT1cIm9uRGlzbWlzc0hhbmRsZXJcIlxyXG4gICAgPjwvRHJvcGRvd24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkRyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElEcm9wZG93blByb3BzPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkKERyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcmVhZG9ubHkgZHJvcGRvd25PcHRpb25zRGlyZWN0aXZlPzogRHJvcGRvd25PcHRpb25zRGlyZWN0aXZlO1xyXG5cclxuICBASW5wdXQoKSBjb21wb25lbnRSZWY/OiBJRHJvcGRvd25Qcm9wc1snY29tcG9uZW50UmVmJ107XHJcbiAgQElucHV0KCkgbGFiZWw/OiBJRHJvcGRvd25Qcm9wc1snbGFiZWwnXTtcclxuICBASW5wdXQoKSBhcmlhTGFiZWw/OiBJRHJvcGRvd25Qcm9wc1snYXJpYUxhYmVsJ107XHJcbiAgQElucHV0KCkgaWQ/OiBJRHJvcGRvd25Qcm9wc1snaWQnXTtcclxuICBASW5wdXQoKSBjbGFzc05hbWU/OiBJRHJvcGRvd25Qcm9wc1snY2xhc3NOYW1lJ107XHJcbiAgQElucHV0KCkgZGVmYXVsdFNlbGVjdGVkS2V5PzogSURyb3Bkb3duUHJvcHNbJ2RlZmF1bHRTZWxlY3RlZEtleSddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkS2V5PzogSURyb3Bkb3duUHJvcHNbJ3NlbGVjdGVkS2V5J107XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBJRHJvcGRvd25Qcm9wc1snZGlzYWJsZWQnXTtcclxuICBASW5wdXQoKSByZXF1aXJlZD86IElEcm9wZG93blByb3BzWydyZXF1aXJlZCddO1xyXG4gIEBJbnB1dCgpIGNhbGxvdXRQcm9wcz86IElEcm9wZG93blByb3BzWydjYWxsb3V0UHJvcHMnXTtcclxuICBASW5wdXQoKSBwYW5lbFByb3BzPzogSURyb3Bkb3duUHJvcHNbJ3BhbmVsUHJvcHMnXTtcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U/OiBJRHJvcGRvd25Qcm9wc1snZXJyb3JNZXNzYWdlJ107XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBJRHJvcGRvd25Qcm9wc1sncGxhY2Vob2xkZXInXTtcclxuICBASW5wdXQoKSBvcGVuT25LZXlib2FyZEZvY3VzPzogSURyb3Bkb3duUHJvcHNbJ29wZW5PbktleWJvYXJkRm9jdXMnXTtcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogSURyb3Bkb3duUHJvcHNbJ29wdGlvbnMnXTtcclxuICBASW5wdXQoKSBkcm9wZG93bldpZHRoPzogSURyb3Bkb3duUHJvcHNbJ2Ryb3Bkb3duV2lkdGgnXTtcclxuICBASW5wdXQoKSByZXNwb25zaXZlTW9kZT86IElEcm9wZG93blByb3BzWydyZXNwb25zaXZlTW9kZSddO1xyXG4gIEBJbnB1dCgpIG11bHRpU2VsZWN0PzogSURyb3Bkb3duUHJvcHNbJ211bHRpU2VsZWN0J107XHJcbiAgQElucHV0KCkgZGVmYXVsdFNlbGVjdGVkS2V5cz86IElEcm9wZG93blByb3BzWydkZWZhdWx0U2VsZWN0ZWRLZXlzJ107XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRLZXlzPzogSURyb3Bkb3duUHJvcHNbJ3NlbGVjdGVkS2V5cyddO1xyXG4gIEBJbnB1dCgpIG11bHRpU2VsZWN0RGVsaW1pdGVyPzogSURyb3Bkb3duUHJvcHNbJ211bHRpU2VsZWN0RGVsaW1pdGVyJ107XHJcbiAgQElucHV0KCkgbm90aWZ5T25SZXNlbGVjdD86IElEcm9wZG93blByb3BzWydub3RpZnlPblJlc2VsZWN0J107XHJcbiAgQElucHV0KCkga2V5dGlwUHJvcHM/OiBJRHJvcGRvd25Qcm9wc1sna2V5dGlwUHJvcHMnXTtcclxuICBASW5wdXQoKSB0aGVtZT86IElEcm9wZG93blByb3BzWyd0aGVtZSddO1xyXG4gIEBJbnB1dCgpIHN0eWxlcz86IElEcm9wZG93blByb3BzWydzdHlsZXMnXTtcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyQ29udGFpbmVyPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHM8SURyb3Bkb3duLCBJRHJvcGRvd24+PjtcclxuICBASW5wdXQoKSByZW5kZXJMaXN0PzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHM8SURyb3Bkb3duLCBJRHJvcGRvd24+PjtcclxuICBASW5wdXQoKSByZW5kZXJJdGVtPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SVNlbGVjdGFibGVPcHRpb24+O1xyXG4gIEBJbnB1dCgpIHJlbmRlck9wdGlvbj86IElucHV0UmVuZGVyZXJPcHRpb25zPElTZWxlY3RhYmxlT3B0aW9uPjtcclxuICBASW5wdXQoKSByZW5kZXJQbGFjZWhvbGRlcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElEcm9wZG93blByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJQbGFjZUhvbGRlcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElEcm9wZG93blByb3BzPjtcclxuICBASW5wdXQoKSByZW5kZXJUaXRsZT86IElucHV0UmVuZGVyZXJPcHRpb25zPElEcm9wZG93bk9wdGlvbiB8IElEcm9wZG93bk9wdGlvbltdPjtcclxuICBASW5wdXQoKSByZW5kZXJDYXJldERvd24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRHJvcGRvd25Qcm9wcz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogRXZlbnQ7IG9wdGlvbj86IElEcm9wZG93bk9wdGlvbjsgaW5kZXg/OiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBvblJlbmRlckNvbnRhaW5lcjogKFxyXG4gICAgcHJvcHM/OiBJU2VsZWN0YWJsZURyb3BwYWJsZVRleHRQcm9wczxJRHJvcGRvd24sIElEcm9wZG93bj4sXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJU2VsZWN0YWJsZURyb3BwYWJsZVRleHRQcm9wczxJRHJvcGRvd24sIElEcm9wZG93bj4+XHJcbiAgKSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlckxpc3Q6IChcclxuICAgIHByb3BzPzogSVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHM8SURyb3Bkb3duLCBJRHJvcGRvd24+LFxyXG4gICAgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHM8SURyb3Bkb3duLCBJRHJvcGRvd24+PlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJJdGVtOiAocHJvcHM/OiBJU2VsZWN0YWJsZU9wdGlvbiwgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVNlbGVjdGFibGVPcHRpb24+KSA9PiBKU1guRWxlbWVudDtcclxuICBvblJlbmRlck9wdGlvbjogKHByb3BzPzogSVNlbGVjdGFibGVPcHRpb24sIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElTZWxlY3RhYmxlT3B0aW9uPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJQbGFjZWhvbGRlcjogKHByb3BzPzogSURyb3Bkb3duUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEcm9wZG93blByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJQbGFjZUhvbGRlcjogKHByb3BzPzogSURyb3Bkb3duUHJvcHMsIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEcm9wZG93blByb3BzPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJUaXRsZTogKFxyXG4gICAgcHJvcHM/OiBJRHJvcGRvd25PcHRpb24gfCBJRHJvcGRvd25PcHRpb25bXSxcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElEcm9wZG93bk9wdGlvbiB8IElEcm9wZG93bk9wdGlvbltdPlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJDYXJldERvd246IChwcm9wcz86IElEcm9wZG93blByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRHJvcGRvd25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgeyBzZXRIb3N0RGlzcGxheTogdHJ1ZSB9KTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlzbWlzc0hhbmRsZXIgPSB0aGlzLm9uRGlzbWlzc0hhbmRsZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vblJlbmRlckNvbnRhaW5lciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJDb250YWluZXIpO1xyXG4gICAgdGhpcy5vblJlbmRlckxpc3QgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyTGlzdCk7XHJcbiAgICB0aGlzLm9uUmVuZGVySXRlbSA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIHRoaXMub25SZW5kZXJPcHRpb24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyT3B0aW9uKTtcclxuICAgIHRoaXMub25SZW5kZXJQbGFjZWhvbGRlciA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJQbGFjZWhvbGRlcik7XHJcbiAgICB0aGlzLm9uUmVuZGVyUGxhY2VIb2xkZXIgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyUGxhY2VIb2xkZXIpO1xyXG4gICAgdGhpcy5vblJlbmRlclRpdGxlID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclRpdGxlKTtcclxuICAgIHRoaXMub25SZW5kZXJDYXJldERvd24gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyQ2FyZXREb3duKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmRyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLl9pbml0RGlyZWN0aXZlKHRoaXMuZHJvcGRvd25PcHRpb25zRGlyZWN0aXZlKTtcclxuICAgIH1cclxuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LCBvcHRpb24/OiBJRHJvcGRvd25PcHRpb24sIGluZGV4PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICBldmVudDogZXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQsXHJcbiAgICAgIG9wdGlvbixcclxuICAgICAgaW5kZXgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRGlzbWlzc0hhbmRsZXIoKSB7XHJcbiAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RGlyZWN0aXZlKGRpcmVjdGl2ZTogRHJvcGRvd25PcHRpb25zRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBkaXJlY3RpdmUuaXRlbXM7XHJcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=