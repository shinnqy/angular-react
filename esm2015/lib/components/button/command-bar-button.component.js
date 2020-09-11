/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
export class FabCommandBarButtonComponent extends FabBaseButtonComponent {
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
FabCommandBarButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-command-bar-button',
                exportAs: 'fabCommandBarButton',
                template: `
    <CommandBarButton
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
    </CommandBarButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCommandBarButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCommandBarButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCommandBarButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1dHRvbi9jb21tYW5kLWJhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUF3RGpFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxzQkFBc0I7Ozs7Ozs7SUFHdEUsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQTVEQyxVQUFVO1lBRlYsaUJBQWlCO1lBSWpCLFNBQVM7WUFEVCxNQUFNOzs7MkJBNkRMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBQXhDLG9EQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE5nWm9uZSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItY29tbWFuZC1iYXItYnV0dG9uJyxcclxuICBleHBvcnRBczogJ2ZhYkNvbW1hbmRCYXJCdXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Q29tbWFuZEJhckJ1dHRvblxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2hyZWZdPVwiaHJlZlwiXHJcbiAgICAgIFtwcmltYXJ5XT1cInByaW1hcnlcIlxyXG4gICAgICBbdW5pcXVlSWRdPVwidW5pcXVlSWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbYWxsb3dEaXNhYmxlZEZvY3VzXT1cImFsbG93RGlzYWJsZWRGb2N1c1wiXHJcbiAgICAgIFtwcmltYXJ5RGlzYWJsZWRdPVwicHJpbWFyeURpc2FibGVkXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFthcmlhRGVzY3JpcHRpb25dPVwiYXJpYURlc2NyaXB0aW9uXCJcclxuICAgICAgW2FyaWFIaWRkZW5dPVwiYXJpYUhpZGRlblwiXHJcbiAgICAgIFthcmlhLXNlbGVjdGVkXT1cImFyaWFTZWxlY3RlZFwiXHJcbiAgICAgIFtyb2xlXT1cInJvbGVcIlxyXG4gICAgICBbdGFiSW5kZXhdPVwidGFiSW5kZXhcIlxyXG4gICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgW2ljb25Qcm9wc109XCJpY29uUHJvcHNcIlxyXG4gICAgICBbbWVudVByb3BzXT1cIm1lbnVQcm9wc1wiXHJcbiAgICAgIFtzcGxpdF09XCJzcGxpdFwiXHJcbiAgICAgIFttZW51SWNvblByb3BzXT1cIm1lbnVJY29uUHJvcHNcIlxyXG4gICAgICBbc3BsaXRCdXR0b25BcmlhTGFiZWxdPVwic3BsaXRCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbbWVudUFzXT1cIm1lbnVBc1wiXHJcbiAgICAgIFtzZWNvbmRhcnlUZXh0XT1cInNlY29uZGFyeVRleHRcIlxyXG4gICAgICBbdG9nZ2xlXT1cInRvZ2dsZVwiXHJcbiAgICAgIFtkYXRhXT1cImRhdGFcIlxyXG4gICAgICBbZ2V0Q2xhc3NOYW1lc109XCJnZXRDbGFzc05hbWVzXCJcclxuICAgICAgW2dldFNwbGl0QnV0dG9uQ2xhc3NOYW1lc109XCJnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXNcIlxyXG4gICAgICBbbWVudVRyaWdnZXJLZXlDb2RlXT1cIm1lbnVUcmlnZ2VyS2V5Q29kZVwiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICAgIFtwZXJzaXN0TWVudV09XCJwZXJzaXN0TWVudVwiXHJcbiAgICAgIFtSZW5kZXJJY29uXT1cInJlbmRlckljb24gJiYgb25SZW5kZXJJY29uXCJcclxuICAgICAgW1JlbmRlclRleHRdPVwicmVuZGVyVGV4dCAmJiBvblJlbmRlclRleHRcIlxyXG4gICAgICBbUmVuZGVyRGVzY3JpcHRpb25dPVwicmVuZGVyRGVzY3JpcHRpb24gJiYgb25SZW5kZXJEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJBcmlhRGVzY3JpcHRpb25dPVwicmVuZGVyQXJpYURlc2NyaXB0aW9uICYmIG9uUmVuZGVyQXJpYURlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlckNoaWxkcmVuXT1cInJlbmRlckNoaWxkcmVuICYmIG9uUmVuZGVyQ2hpbGRyZW5cIlxyXG4gICAgICBbUmVuZGVyTWVudUljb25dPVwicmVuZGVyTWVudUljb24gJiYgb25SZW5kZXJNZW51SWNvblwiXHJcbiAgICAgIFtNZW51Q2xpY2tdPVwib25NZW51Q2xpY2tIYW5kbGVyXCJcclxuICAgICAgKG9uQWZ0ZXJNZW51RGlzbWlzcyk9XCJvbkFmdGVyTWVudURpc21pc3MuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG9uQ2xpY2spPVwib25DbGlja0hhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9Db21tYW5kQmFyQnV0dG9uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21tYW5kQmFyQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCBuZ1pvbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=