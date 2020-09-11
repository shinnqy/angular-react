/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, Output, EventEmitter, ContentChild, } from '@angular/core';
import { DropdownOptionsDirective } from './directives/dropdown-options.directive';
export class FabDropdownComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });
        this.onChange = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onDismissHandler = this.onDismissHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onRenderContainer = this.createRenderPropHandler(this.renderContainer);
        this.onRenderList = this.createRenderPropHandler(this.renderList);
        this.onRenderItem = this.createRenderPropHandler(this.renderItem);
        this.onRenderOption = this.createRenderPropHandler(this.renderOption);
        this.onRenderPlaceholder = this.createRenderPropHandler(this.renderPlaceholder);
        this.onRenderPlaceHolder = this.createRenderPropHandler(this.renderPlaceHolder);
        this.onRenderTitle = this.createRenderPropHandler(this.renderTitle);
        this.onRenderCaretDown = this.createRenderPropHandler(this.renderCaretDown);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.dropdownOptionsDirective) {
            this._initDirective(this.dropdownOptionsDirective);
        }
        super.ngAfterContentInit();
    }
    /**
     * @param {?} event
     * @param {?=} option
     * @param {?=} index
     * @return {?}
     */
    onChangeHandler(event, option, index) {
        this.onChange.emit({
            event: event && event.nativeEvent,
            option,
            index,
        });
    }
    /**
     * @return {?}
     */
    onDismissHandler() {
        this.onDismiss.emit();
    }
    /**
     * @private
     * @param {?} directive
     * @return {?}
     */
    _initDirective(directive) {
        this.options = directive.items;
        this.markForCheck();
    }
}
FabDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown',
                exportAs: 'fabDropdown',
                template: `
    <Dropdown
      #reactNode
      [componentRef]="componentRef"
      [label]="label"
      [ariaLabel]="ariaLabel"
      [id]="id"
      [className]="className"
      [defaultSelectedKey]="defaultSelectedKey"
      [selectedKey]="selectedKey"
      [disabled]="disabled"
      [required]="required"
      [calloutProps]="calloutProps"
      [panelProps]="panelProps"
      [errorMessage]="errorMessage"
      [placeholder]="placeholder"
      [openOnKeyboardFocus]="openOnKeyboardFocus"
      [options]="options"
      [dropdownWidth]="dropdownWidth"
      [responsiveMode]="responsiveMode"
      [multiSelect]="multiSelect"
      [defaultSelectedKeys]="defaultSelectedKeys"
      [selectedKeys]="selectedKeys"
      [multiSelectDelimiter]="multiSelectDelimiter"
      [notifyOnReselect]="notifyOnReselect"
      [keytipProps]="keytipProps"
      [theme]="theme"
      [styles]="styles"
      [RenderContainer]="renderContainer && onRenderContainer"
      [RenderList]="renderList && onRenderList"
      [RenderItem]="renderItem && onRenderItem"
      [RenderOption]="renderOption && onRenderOption"
      [RenderPlaceholder]="renderPlaceholder && onRenderPlaceholder"
      [RenderPlaceHolder]="renderPlaceHolder && onRenderPlaceHolder"
      [RenderTitle]="renderTitle && onRenderTitle"
      [RenderCaretDown]="renderCaretDown && onRenderCaretDown"
      [Change]="onChangeHandler"
      [Dismiss]="onDismissHandler"
    ></Dropdown>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBdUMscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBZ0RuRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEscUJBQXFDOzs7Ozs7SUE2RDdFLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQjtRQUMzRixLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBdEJ4RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQThELENBQUM7UUFDMUYsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUF1QnRELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RSxJQUFJLENB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OztJQUNqRCxrQ0FBbUM7O0lBQ25DLHlDQUFpRDs7SUFDakQsa0RBQW1FOztJQUNuRSwyQ0FBcUQ7O0lBQ3JELHdDQUErQzs7SUFDL0Msd0NBQStDOztJQUMvQyw0Q0FBdUQ7O0lBQ3ZELDBDQUFtRDs7SUFDbkQsNENBQXVEOztJQUN2RCwyQ0FBcUQ7O0lBQ3JELG1EQUFxRTs7SUFFckUsdUNBQTRDOztJQUM1Qyw2Q0FBeUQ7O0lBQ3pELDhDQUEyRDs7SUFDM0QsMkNBQXFEOztJQUNyRCxtREFBcUU7O0lBQ3JFLDRDQUF1RDs7SUFDdkQsb0RBQXVFOztJQUN2RSxnREFBK0Q7O0lBQy9ELDJDQUFxRDs7SUFDckQscUNBQXlDOztJQUN6QyxzQ0FBMkM7O0lBRTNDLCtDQUFxRzs7SUFDckcsMENBQWdHOztJQUNoRywwQ0FBOEQ7O0lBQzlELDRDQUFnRTs7SUFDaEUsaURBQWtFOztJQUNsRSxpREFBa0U7O0lBQ2xFLDJDQUFpRjs7SUFDakYsK0NBQWdFOztJQUVoRSx3Q0FBNkc7O0lBQzdHLHlDQUF3RDs7SUFFeEQsaURBR2lCOztJQUNqQiw0Q0FHaUI7O0lBQ2pCLDRDQUEyRzs7SUFDM0csOENBQTZHOztJQUM3RyxtREFBNEc7O0lBQzVHLG1EQUE0Rzs7SUFDNUcsNkNBR2lCOztJQUNqQixpREFBMEciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSW5wdXRSZW5kZXJlck9wdGlvbnMsIEpzeFJlbmRlckZ1bmMsIFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyLXJlYWN0L2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElEcm9wZG93blByb3BzLCBJRHJvcGRvd25PcHRpb24sIElEcm9wZG93biB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL0Ryb3Bkb3duJztcclxuaW1wb3J0IHsgSVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHMsIElTZWxlY3RhYmxlT3B0aW9uIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvU2VsZWN0YWJsZU9wdGlvbic7XHJcbmltcG9ydCB7IERyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wZG93bi1vcHRpb25zLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93bicsXHJcbiAgZXhwb3J0QXM6ICdmYWJEcm9wZG93bicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxEcm9wZG93blxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFtkZWZhdWx0U2VsZWN0ZWRLZXldPVwiZGVmYXVsdFNlbGVjdGVkS2V5XCJcclxuICAgICAgW3NlbGVjdGVkS2V5XT1cInNlbGVjdGVkS2V5XCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgW2NhbGxvdXRQcm9wc109XCJjYWxsb3V0UHJvcHNcIlxyXG4gICAgICBbcGFuZWxQcm9wc109XCJwYW5lbFByb3BzXCJcclxuICAgICAgW2Vycm9yTWVzc2FnZV09XCJlcnJvck1lc3NhZ2VcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICBbb3Blbk9uS2V5Ym9hcmRGb2N1c109XCJvcGVuT25LZXlib2FyZEZvY3VzXCJcclxuICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICAgIFtkcm9wZG93bldpZHRoXT1cImRyb3Bkb3duV2lkdGhcIlxyXG4gICAgICBbcmVzcG9uc2l2ZU1vZGVdPVwicmVzcG9uc2l2ZU1vZGVcIlxyXG4gICAgICBbbXVsdGlTZWxlY3RdPVwibXVsdGlTZWxlY3RcIlxyXG4gICAgICBbZGVmYXVsdFNlbGVjdGVkS2V5c109XCJkZWZhdWx0U2VsZWN0ZWRLZXlzXCJcclxuICAgICAgW3NlbGVjdGVkS2V5c109XCJzZWxlY3RlZEtleXNcIlxyXG4gICAgICBbbXVsdGlTZWxlY3REZWxpbWl0ZXJdPVwibXVsdGlTZWxlY3REZWxpbWl0ZXJcIlxyXG4gICAgICBbbm90aWZ5T25SZXNlbGVjdF09XCJub3RpZnlPblJlc2VsZWN0XCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbUmVuZGVyQ29udGFpbmVyXT1cInJlbmRlckNvbnRhaW5lciAmJiBvblJlbmRlckNvbnRhaW5lclwiXHJcbiAgICAgIFtSZW5kZXJMaXN0XT1cInJlbmRlckxpc3QgJiYgb25SZW5kZXJMaXN0XCJcclxuICAgICAgW1JlbmRlckl0ZW1dPVwicmVuZGVySXRlbSAmJiBvblJlbmRlckl0ZW1cIlxyXG4gICAgICBbUmVuZGVyT3B0aW9uXT1cInJlbmRlck9wdGlvbiAmJiBvblJlbmRlck9wdGlvblwiXHJcbiAgICAgIFtSZW5kZXJQbGFjZWhvbGRlcl09XCJyZW5kZXJQbGFjZWhvbGRlciAmJiBvblJlbmRlclBsYWNlaG9sZGVyXCJcclxuICAgICAgW1JlbmRlclBsYWNlSG9sZGVyXT1cInJlbmRlclBsYWNlSG9sZGVyICYmIG9uUmVuZGVyUGxhY2VIb2xkZXJcIlxyXG4gICAgICBbUmVuZGVyVGl0bGVdPVwicmVuZGVyVGl0bGUgJiYgb25SZW5kZXJUaXRsZVwiXHJcbiAgICAgIFtSZW5kZXJDYXJldERvd25dPVwicmVuZGVyQ2FyZXREb3duICYmIG9uUmVuZGVyQ2FyZXREb3duXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICBbRGlzbWlzc109XCJvbkRpc21pc3NIYW5kbGVyXCJcclxuICAgID48L0Ryb3Bkb3duPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFJlYWN0V3JhcHBlckNvbXBvbmVudDxJRHJvcGRvd25Qcm9wcz4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZChEcm9wZG93bk9wdGlvbnNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IGRyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZT86IERyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCkgY29tcG9uZW50UmVmPzogSURyb3Bkb3duUHJvcHNbJ2NvbXBvbmVudFJlZiddO1xyXG4gIEBJbnB1dCgpIGxhYmVsPzogSURyb3Bkb3duUHJvcHNbJ2xhYmVsJ107XHJcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogSURyb3Bkb3duUHJvcHNbJ2FyaWFMYWJlbCddO1xyXG4gIEBJbnB1dCgpIGlkPzogSURyb3Bkb3duUHJvcHNbJ2lkJ107XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogSURyb3Bkb3duUHJvcHNbJ2NsYXNzTmFtZSddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3RlZEtleT86IElEcm9wZG93blByb3BzWydkZWZhdWx0U2VsZWN0ZWRLZXknXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZEtleT86IElEcm9wZG93blByb3BzWydzZWxlY3RlZEtleSddO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogSURyb3Bkb3duUHJvcHNbJ2Rpc2FibGVkJ107XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ/OiBJRHJvcGRvd25Qcm9wc1sncmVxdWlyZWQnXTtcclxuICBASW5wdXQoKSBjYWxsb3V0UHJvcHM/OiBJRHJvcGRvd25Qcm9wc1snY2FsbG91dFByb3BzJ107XHJcbiAgQElucHV0KCkgcGFuZWxQcm9wcz86IElEcm9wZG93blByb3BzWydwYW5lbFByb3BzJ107XHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlPzogSURyb3Bkb3duUHJvcHNbJ2Vycm9yTWVzc2FnZSddO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogSURyb3Bkb3duUHJvcHNbJ3BsYWNlaG9sZGVyJ107XHJcbiAgQElucHV0KCkgb3Blbk9uS2V5Ym9hcmRGb2N1cz86IElEcm9wZG93blByb3BzWydvcGVuT25LZXlib2FyZEZvY3VzJ107XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IElEcm9wZG93blByb3BzWydvcHRpb25zJ107XHJcbiAgQElucHV0KCkgZHJvcGRvd25XaWR0aD86IElEcm9wZG93blByb3BzWydkcm9wZG93bldpZHRoJ107XHJcbiAgQElucHV0KCkgcmVzcG9uc2l2ZU1vZGU/OiBJRHJvcGRvd25Qcm9wc1sncmVzcG9uc2l2ZU1vZGUnXTtcclxuICBASW5wdXQoKSBtdWx0aVNlbGVjdD86IElEcm9wZG93blByb3BzWydtdWx0aVNlbGVjdCddO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3RlZEtleXM/OiBJRHJvcGRvd25Qcm9wc1snZGVmYXVsdFNlbGVjdGVkS2V5cyddO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkS2V5cz86IElEcm9wZG93blByb3BzWydzZWxlY3RlZEtleXMnXTtcclxuICBASW5wdXQoKSBtdWx0aVNlbGVjdERlbGltaXRlcj86IElEcm9wZG93blByb3BzWydtdWx0aVNlbGVjdERlbGltaXRlciddO1xyXG4gIEBJbnB1dCgpIG5vdGlmeU9uUmVzZWxlY3Q/OiBJRHJvcGRvd25Qcm9wc1snbm90aWZ5T25SZXNlbGVjdCddO1xyXG4gIEBJbnB1dCgpIGtleXRpcFByb3BzPzogSURyb3Bkb3duUHJvcHNbJ2tleXRpcFByb3BzJ107XHJcbiAgQElucHV0KCkgdGhlbWU/OiBJRHJvcGRvd25Qcm9wc1sndGhlbWUnXTtcclxuICBASW5wdXQoKSBzdHlsZXM/OiBJRHJvcGRvd25Qcm9wc1snc3R5bGVzJ107XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckNvbnRhaW5lcj86IElucHV0UmVuZGVyZXJPcHRpb25zPElTZWxlY3RhYmxlRHJvcHBhYmxlVGV4dFByb3BzPElEcm9wZG93biwgSURyb3Bkb3duPj47XHJcbiAgQElucHV0KCkgcmVuZGVyTGlzdD86IElucHV0UmVuZGVyZXJPcHRpb25zPElTZWxlY3RhYmxlRHJvcHBhYmxlVGV4dFByb3BzPElEcm9wZG93biwgSURyb3Bkb3duPj47XHJcbiAgQElucHV0KCkgcmVuZGVySXRlbT86IElucHV0UmVuZGVyZXJPcHRpb25zPElTZWxlY3RhYmxlT3B0aW9uPjtcclxuICBASW5wdXQoKSByZW5kZXJPcHRpb24/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJU2VsZWN0YWJsZU9wdGlvbj47XHJcbiAgQElucHV0KCkgcmVuZGVyUGxhY2Vob2xkZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRHJvcGRvd25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyUGxhY2VIb2xkZXI/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRHJvcGRvd25Qcm9wcz47XHJcbiAgQElucHV0KCkgcmVuZGVyVGl0bGU/OiBJbnB1dFJlbmRlcmVyT3B0aW9uczxJRHJvcGRvd25PcHRpb24gfCBJRHJvcGRvd25PcHRpb25bXT47XHJcbiAgQElucHV0KCkgcmVuZGVyQ2FyZXREb3duPzogSW5wdXRSZW5kZXJlck9wdGlvbnM8SURyb3Bkb3duUHJvcHM+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IEV2ZW50OyBvcHRpb24/OiBJRHJvcGRvd25PcHRpb247IGluZGV4PzogbnVtYmVyIH0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgb25SZW5kZXJDb250YWluZXI6IChcclxuICAgIHByb3BzPzogSVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHM8SURyb3Bkb3duLCBJRHJvcGRvd24+LFxyXG4gICAgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SVNlbGVjdGFibGVEcm9wcGFibGVUZXh0UHJvcHM8SURyb3Bkb3duLCBJRHJvcGRvd24+PlxyXG4gICkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJMaXN0OiAoXHJcbiAgICBwcm9wcz86IElTZWxlY3RhYmxlRHJvcHBhYmxlVGV4dFByb3BzPElEcm9wZG93biwgSURyb3Bkb3duPixcclxuICAgIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElTZWxlY3RhYmxlRHJvcHBhYmxlVGV4dFByb3BzPElEcm9wZG93biwgSURyb3Bkb3duPj5cclxuICApID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVySXRlbTogKHByb3BzPzogSVNlbGVjdGFibGVPcHRpb24sIGRlZmF1bHRSZW5kZXI/OiBKc3hSZW5kZXJGdW5jPElTZWxlY3RhYmxlT3B0aW9uPikgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgb25SZW5kZXJPcHRpb246IChwcm9wcz86IElTZWxlY3RhYmxlT3B0aW9uLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJU2VsZWN0YWJsZU9wdGlvbj4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyUGxhY2Vob2xkZXI6IChwcm9wcz86IElEcm9wZG93blByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRHJvcGRvd25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyUGxhY2VIb2xkZXI6IChwcm9wcz86IElEcm9wZG93blByb3BzLCBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRHJvcGRvd25Qcm9wcz4pID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyVGl0bGU6IChcclxuICAgIHByb3BzPzogSURyb3Bkb3duT3B0aW9uIHwgSURyb3Bkb3duT3B0aW9uW10sXHJcbiAgICBkZWZhdWx0UmVuZGVyPzogSnN4UmVuZGVyRnVuYzxJRHJvcGRvd25PcHRpb24gfCBJRHJvcGRvd25PcHRpb25bXT5cclxuICApID0+IEpTWC5FbGVtZW50O1xyXG4gIG9uUmVuZGVyQ2FyZXREb3duOiAocHJvcHM/OiBJRHJvcGRvd25Qcm9wcywgZGVmYXVsdFJlbmRlcj86IEpzeFJlbmRlckZ1bmM8SURyb3Bkb3duUHJvcHM+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHsgc2V0SG9zdERpc3BsYXk6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpc21pc3NIYW5kbGVyID0gdGhpcy5vbkRpc21pc3NIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25SZW5kZXJDb250YWluZXIgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyQ29udGFpbmVyKTtcclxuICAgIHRoaXMub25SZW5kZXJMaXN0ID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckxpc3QpO1xyXG4gICAgdGhpcy5vblJlbmRlckl0ZW0gPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB0aGlzLm9uUmVuZGVyT3B0aW9uID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlck9wdGlvbik7XHJcbiAgICB0aGlzLm9uUmVuZGVyUGxhY2Vob2xkZXIgPSB0aGlzLmNyZWF0ZVJlbmRlclByb3BIYW5kbGVyKHRoaXMucmVuZGVyUGxhY2Vob2xkZXIpO1xyXG4gICAgdGhpcy5vblJlbmRlclBsYWNlSG9sZGVyID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlclBsYWNlSG9sZGVyKTtcclxuICAgIHRoaXMub25SZW5kZXJUaXRsZSA9IHRoaXMuY3JlYXRlUmVuZGVyUHJvcEhhbmRsZXIodGhpcy5yZW5kZXJUaXRsZSk7XHJcbiAgICB0aGlzLm9uUmVuZGVyQ2FyZXREb3duID0gdGhpcy5jcmVhdGVSZW5kZXJQcm9wSGFuZGxlcih0aGlzLnJlbmRlckNhcmV0RG93bik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5kcm9wZG93bk9wdGlvbnNEaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5faW5pdERpcmVjdGl2ZSh0aGlzLmRyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlcihldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxEaXZFbGVtZW50Piwgb3B0aW9uPzogSURyb3Bkb3duT3B0aW9uLCBpbmRleD86IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgZXZlbnQ6IGV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LFxyXG4gICAgICBvcHRpb24sXHJcbiAgICAgIGluZGV4LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpc21pc3NIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5vbkRpc21pc3MuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdERpcmVjdGl2ZShkaXJlY3RpdmU6IERyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gZGlyZWN0aXZlLml0ZW1zO1xyXG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19