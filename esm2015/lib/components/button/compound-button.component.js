/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
export class FabCompoundButtonComponent extends FabBaseButtonComponent {
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
FabCompoundButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-compound-button',
                exportAs: 'fabCompoundButton',
                template: `
    <CompoundButton
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
    </CompoundButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabCompoundButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabCompoundButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCompoundButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG91bmQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9idXR0b24vIiwic291cmNlcyI6WyJjb21wb3VuZC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUF3RGpFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxzQkFBc0I7Ozs7Ozs7SUFHcEUsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQTVEQyxVQUFVO1lBRlYsaUJBQWlCO1lBSWpCLFNBQVM7WUFEVCxNQUFNOzs7MkJBNkRMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBQXhDLGtEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE5nWm9uZSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItY29tcG91bmQtYnV0dG9uJyxcclxuICBleHBvcnRBczogJ2ZhYkNvbXBvdW5kQnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPENvbXBvdW5kQnV0dG9uXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbaHJlZl09XCJocmVmXCJcclxuICAgICAgW3ByaW1hcnldPVwicHJpbWFyeVwiXHJcbiAgICAgIFt1bmlxdWVJZF09XCJ1bmlxdWVJZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFthbGxvd0Rpc2FibGVkRm9jdXNdPVwiYWxsb3dEaXNhYmxlZEZvY3VzXCJcclxuICAgICAgW3ByaW1hcnlEaXNhYmxlZF09XCJwcmltYXJ5RGlzYWJsZWRcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFEZXNjcmlwdGlvbl09XCJhcmlhRGVzY3JpcHRpb25cIlxyXG4gICAgICBbYXJpYUhpZGRlbl09XCJhcmlhSGlkZGVuXCJcclxuICAgICAgW2FyaWEtc2VsZWN0ZWRdPVwiYXJpYVNlbGVjdGVkXCJcclxuICAgICAgW3JvbGVdPVwicm9sZVwiXHJcbiAgICAgIFt0YWJJbmRleF09XCJ0YWJJbmRleFwiXHJcbiAgICAgIFt0ZXh0XT1cInRleHRcIlxyXG4gICAgICBbaWNvblByb3BzXT1cImljb25Qcm9wc1wiXHJcbiAgICAgIFttZW51UHJvcHNdPVwibWVudVByb3BzXCJcclxuICAgICAgW3NwbGl0XT1cInNwbGl0XCJcclxuICAgICAgW21lbnVJY29uUHJvcHNdPVwibWVudUljb25Qcm9wc1wiXHJcbiAgICAgIFtzcGxpdEJ1dHRvbkFyaWFMYWJlbF09XCJzcGxpdEJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFttZW51QXNdPVwibWVudUFzXCJcclxuICAgICAgW3NlY29uZGFyeVRleHRdPVwic2Vjb25kYXJ5VGV4dFwiXHJcbiAgICAgIFt0b2dnbGVdPVwidG9nZ2xlXCJcclxuICAgICAgW2RhdGFdPVwiZGF0YVwiXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzXT1cImdldFNwbGl0QnV0dG9uQ2xhc3NOYW1lc1wiXHJcbiAgICAgIFttZW51VHJpZ2dlcktleUNvZGVdPVwibWVudVRyaWdnZXJLZXlDb2RlXCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW3BlcnNpc3RNZW51XT1cInBlcnNpc3RNZW51XCJcclxuICAgICAgW1JlbmRlckljb25dPVwicmVuZGVySWNvbiAmJiBvblJlbmRlckljb25cIlxyXG4gICAgICBbUmVuZGVyVGV4dF09XCJyZW5kZXJUZXh0ICYmIG9uUmVuZGVyVGV4dFwiXHJcbiAgICAgIFtSZW5kZXJEZXNjcmlwdGlvbl09XCJyZW5kZXJEZXNjcmlwdGlvbiAmJiBvblJlbmRlckRlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlckFyaWFEZXNjcmlwdGlvbl09XCJyZW5kZXJBcmlhRGVzY3JpcHRpb24gJiYgb25SZW5kZXJBcmlhRGVzY3JpcHRpb25cIlxyXG4gICAgICBbUmVuZGVyQ2hpbGRyZW5dPVwicmVuZGVyQ2hpbGRyZW4gJiYgb25SZW5kZXJDaGlsZHJlblwiXHJcbiAgICAgIFtSZW5kZXJNZW51SWNvbl09XCJyZW5kZXJNZW51SWNvbiAmJiBvblJlbmRlck1lbnVJY29uXCJcclxuICAgICAgW01lbnVDbGlja109XCJvbk1lbnVDbGlja0hhbmRsZXJcIlxyXG4gICAgICAob25BZnRlck1lbnVEaXNtaXNzKT1cIm9uQWZ0ZXJNZW51RGlzbWlzcy5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25DbGljayk9XCJvbkNsaWNrSGFuZGxlcigkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L0NvbXBvdW5kQnV0dG9uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21wb3VuZEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VCdXR0b25Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgbmdab25lKTtcclxuICB9XHJcbn1cclxuIl19