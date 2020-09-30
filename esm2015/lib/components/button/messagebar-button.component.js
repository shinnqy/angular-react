/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
export class FabMessageBarButtonComponent extends FabBaseButtonComponent {
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
FabMessageBarButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-messagebar-button',
                exportAs: 'fabMessageBarButton',
                template: `
    <MessageBarButton
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
    </MessageBarButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabMessageBarButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabMessageBarButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabMessageBarButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZWJhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljL2xpYi9jb21wb25lbnRzL2J1dHRvbi8iLCJzb3VyY2VzIjpbIm1lc3NhZ2ViYXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBd0RqRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBQXNCOzs7Ozs7O0lBR3RFLFlBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7UUFDM0csS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUE1REMsVUFBVTtZQUZWLGlCQUFpQjtZQUlqQixTQUFTO1lBRFQsTUFBTTs7OzJCQTZETCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQUF4QyxvREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBOZ1pvbmUsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFiQmFzZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1idXR0b24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLW1lc3NhZ2ViYXItYnV0dG9uJyxcclxuICBleHBvcnRBczogJ2ZhYk1lc3NhZ2VCYXJCdXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8TWVzc2FnZUJhckJ1dHRvblxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2hyZWZdPVwiaHJlZlwiXHJcbiAgICAgIFtwcmltYXJ5XT1cInByaW1hcnlcIlxyXG4gICAgICBbdW5pcXVlSWRdPVwidW5pcXVlSWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbYWxsb3dEaXNhYmxlZEZvY3VzXT1cImFsbG93RGlzYWJsZWRGb2N1c1wiXHJcbiAgICAgIFtwcmltYXJ5RGlzYWJsZWRdPVwicHJpbWFyeURpc2FibGVkXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFthcmlhRGVzY3JpcHRpb25dPVwiYXJpYURlc2NyaXB0aW9uXCJcclxuICAgICAgW2FyaWFIaWRkZW5dPVwiYXJpYUhpZGRlblwiXHJcbiAgICAgIFthcmlhLXNlbGVjdGVkXT1cImFyaWFTZWxlY3RlZFwiXHJcbiAgICAgIFtyb2xlXT1cInJvbGVcIlxyXG4gICAgICBbdGFiSW5kZXhdPVwidGFiSW5kZXhcIlxyXG4gICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgW2ljb25Qcm9wc109XCJpY29uUHJvcHNcIlxyXG4gICAgICBbbWVudVByb3BzXT1cIm1lbnVQcm9wc1wiXHJcbiAgICAgIFtzcGxpdF09XCJzcGxpdFwiXHJcbiAgICAgIFttZW51SWNvblByb3BzXT1cIm1lbnVJY29uUHJvcHNcIlxyXG4gICAgICBbc3BsaXRCdXR0b25BcmlhTGFiZWxdPVwic3BsaXRCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbbWVudUFzXT1cIm1lbnVBc1wiXHJcbiAgICAgIFtzZWNvbmRhcnlUZXh0XT1cInNlY29uZGFyeVRleHRcIlxyXG4gICAgICBbdG9nZ2xlXT1cInRvZ2dsZVwiXHJcbiAgICAgIFtkYXRhXT1cImRhdGFcIlxyXG4gICAgICBbZ2V0Q2xhc3NOYW1lc109XCJnZXRDbGFzc05hbWVzXCJcclxuICAgICAgW2dldFNwbGl0QnV0dG9uQ2xhc3NOYW1lc109XCJnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXNcIlxyXG4gICAgICBbbWVudVRyaWdnZXJLZXlDb2RlXT1cIm1lbnVUcmlnZ2VyS2V5Q29kZVwiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICAgIFtwZXJzaXN0TWVudV09XCJwZXJzaXN0TWVudVwiXHJcbiAgICAgIFtSZW5kZXJJY29uXT1cInJlbmRlckljb24gJiYgb25SZW5kZXJJY29uXCJcclxuICAgICAgW1JlbmRlclRleHRdPVwicmVuZGVyVGV4dCAmJiBvblJlbmRlclRleHRcIlxyXG4gICAgICBbUmVuZGVyRGVzY3JpcHRpb25dPVwicmVuZGVyRGVzY3JpcHRpb24gJiYgb25SZW5kZXJEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJBcmlhRGVzY3JpcHRpb25dPVwicmVuZGVyQXJpYURlc2NyaXB0aW9uICYmIG9uUmVuZGVyQXJpYURlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlckNoaWxkcmVuXT1cInJlbmRlckNoaWxkcmVuICYmIG9uUmVuZGVyQ2hpbGRyZW5cIlxyXG4gICAgICBbUmVuZGVyTWVudUljb25dPVwicmVuZGVyTWVudUljb24gJiYgb25SZW5kZXJNZW51SWNvblwiXHJcbiAgICAgIFtNZW51Q2xpY2tdPVwib25NZW51Q2xpY2tIYW5kbGVyXCJcclxuICAgICAgKG9uQWZ0ZXJNZW51RGlzbWlzcyk9XCJvbkFmdGVyTWVudURpc21pc3MuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG9uQ2xpY2spPVwib25DbGlja0hhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9NZXNzYWdlQmFyQnV0dG9uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJNZXNzYWdlQmFyQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCBuZ1pvbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=