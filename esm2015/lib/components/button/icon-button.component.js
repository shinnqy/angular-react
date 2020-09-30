/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
export class FabIconButtonComponent extends FabBaseButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, ngZone);
    }
}
FabIconButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-icon-button',
                exportAs: 'fabIconButton',
                template: `
    <IconButton
      #reactNode
      [componentRef]="componentRef"
      [href]="href"
      [primary]="primary"
      [uniqueId]="uniqueId"
      [disabled]="disabled"
      [allowDisabledFocus]="allowDisabledFocus"
      [primaryDisabled]="primaryDisabled"
      [styles]="styles"
      [theme]="theme"
      [checked]="checked"
      [className]="className"
      [ariaLabel]="ariaLabel"
      [ariaDescription]="ariaDescription"
      [ariaHidden]="ariaHidden"
      [aria-selected]="ariaSelected"
      [role]="role"
      [tabIndex]="tabIndex"
      [text]="text"
      [iconProps]="iconProps"
      [menuProps]="menuProps"
      [split]="split"
      [menuIconProps]="menuIconProps"
      [splitButtonAriaLabel]="splitButtonAriaLabel"
      [menuAs]="menuAs"
      [secondaryText]="secondaryText"
      [toggle]="toggle"
      [data]="data"
      [getClassNames]="getClassNames"
      [getSplitButtonClassNames]="getSplitButtonClassNames"
      [menuTriggerKeyCode]="menuTriggerKeyCode"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [RenderIcon]="renderIcon && onRenderIcon"
      [RenderText]="renderText && onRenderText"
      [RenderDescription]="renderDescription && onRenderDescription"
      [RenderAriaDescription]="renderAriaDescription && onRenderAriaDescription"
      [RenderChildren]="renderChildren && onRenderChildren"
      [RenderMenuIcon]="renderMenuIcon && onRenderMenuIcon"
      [MenuClick]="onMenuClickHandler"
      (onAfterMenuDismiss)="onAfterMenuDismiss.emit($event)"
      (onClick)="onClickHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </IconButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabIconButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabIconButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabIconButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2J1dHRvbi8iLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBd0RqRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsc0JBQXNCOzs7Ozs7O0lBR2hFLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStDVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBNURDLFVBQVU7WUFGVixpQkFBaUI7WUFJakIsU0FBUztZQURULE1BQU07OzsyQkE2REwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFBeEMsOENBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Jhc2UtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1pY29uLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICdmYWJJY29uQnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPEljb25CdXR0b25cclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtocmVmXT1cImhyZWZcIlxyXG4gICAgICBbcHJpbWFyeV09XCJwcmltYXJ5XCJcclxuICAgICAgW3VuaXF1ZUlkXT1cInVuaXF1ZUlkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2FsbG93RGlzYWJsZWRGb2N1c109XCJhbGxvd0Rpc2FibGVkRm9jdXNcIlxyXG4gICAgICBbcHJpbWFyeURpc2FibGVkXT1cInByaW1hcnlEaXNhYmxlZFwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbYXJpYURlc2NyaXB0aW9uXT1cImFyaWFEZXNjcmlwdGlvblwiXHJcbiAgICAgIFthcmlhSGlkZGVuXT1cImFyaWFIaWRkZW5cIlxyXG4gICAgICBbYXJpYS1zZWxlY3RlZF09XCJhcmlhU2VsZWN0ZWRcIlxyXG4gICAgICBbcm9sZV09XCJyb2xlXCJcclxuICAgICAgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtpY29uUHJvcHNdPVwiaWNvblByb3BzXCJcclxuICAgICAgW21lbnVQcm9wc109XCJtZW51UHJvcHNcIlxyXG4gICAgICBbc3BsaXRdPVwic3BsaXRcIlxyXG4gICAgICBbbWVudUljb25Qcm9wc109XCJtZW51SWNvblByb3BzXCJcclxuICAgICAgW3NwbGl0QnV0dG9uQXJpYUxhYmVsXT1cInNwbGl0QnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW21lbnVBc109XCJtZW51QXNcIlxyXG4gICAgICBbc2Vjb25kYXJ5VGV4dF09XCJzZWNvbmRhcnlUZXh0XCJcclxuICAgICAgW3RvZ2dsZV09XCJ0b2dnbGVcIlxyXG4gICAgICBbZGF0YV09XCJkYXRhXCJcclxuICAgICAgW2dldENsYXNzTmFtZXNdPVwiZ2V0Q2xhc3NOYW1lc1wiXHJcbiAgICAgIFtnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXNdPVwiZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzXCJcclxuICAgICAgW21lbnVUcmlnZ2VyS2V5Q29kZV09XCJtZW51VHJpZ2dlcktleUNvZGVcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbcGVyc2lzdE1lbnVdPVwicGVyc2lzdE1lbnVcIlxyXG4gICAgICBbUmVuZGVySWNvbl09XCJyZW5kZXJJY29uICYmIG9uUmVuZGVySWNvblwiXHJcbiAgICAgIFtSZW5kZXJUZXh0XT1cInJlbmRlclRleHQgJiYgb25SZW5kZXJUZXh0XCJcclxuICAgICAgW1JlbmRlckRlc2NyaXB0aW9uXT1cInJlbmRlckRlc2NyaXB0aW9uICYmIG9uUmVuZGVyRGVzY3JpcHRpb25cIlxyXG4gICAgICBbUmVuZGVyQXJpYURlc2NyaXB0aW9uXT1cInJlbmRlckFyaWFEZXNjcmlwdGlvbiAmJiBvblJlbmRlckFyaWFEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJDaGlsZHJlbl09XCJyZW5kZXJDaGlsZHJlbiAmJiBvblJlbmRlckNoaWxkcmVuXCJcclxuICAgICAgW1JlbmRlck1lbnVJY29uXT1cInJlbmRlck1lbnVJY29uICYmIG9uUmVuZGVyTWVudUljb25cIlxyXG4gICAgICBbTWVudUNsaWNrXT1cIm9uTWVudUNsaWNrSGFuZGxlclwiXHJcbiAgICAgIChvbkFmdGVyTWVudURpc21pc3MpPVwib25BZnRlck1lbnVEaXNtaXNzLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2tIYW5kbGVyKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiSWNvbkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VCdXR0b25Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgbmdab25lKTtcclxuICB9XHJcbn1cclxuIl19