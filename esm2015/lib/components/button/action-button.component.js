/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
export class FabActionButtonComponent extends FabBaseButtonComponent {
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
FabActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-action-button',
                exportAs: 'fabActionButton',
                template: `
    <ActionButton
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
    </ActionButton>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabActionButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabActionButtonComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabActionButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXdEakUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUFzQjs7Ozs7OztJQUdsRSxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStDVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBNURDLFVBQVU7WUFGVixpQkFBaUI7WUFJakIsU0FBUztZQURULE1BQU07OzsyQkE2REwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFBeEMsZ0RBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Jhc2UtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1hY3Rpb24tYnV0dG9uJyxcclxuICBleHBvcnRBczogJ2ZhYkFjdGlvbkJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxBY3Rpb25CdXR0b25cclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtocmVmXT1cImhyZWZcIlxyXG4gICAgICBbcHJpbWFyeV09XCJwcmltYXJ5XCJcclxuICAgICAgW3VuaXF1ZUlkXT1cInVuaXF1ZUlkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2FsbG93RGlzYWJsZWRGb2N1c109XCJhbGxvd0Rpc2FibGVkRm9jdXNcIlxyXG4gICAgICBbcHJpbWFyeURpc2FibGVkXT1cInByaW1hcnlEaXNhYmxlZFwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbYXJpYURlc2NyaXB0aW9uXT1cImFyaWFEZXNjcmlwdGlvblwiXHJcbiAgICAgIFthcmlhSGlkZGVuXT1cImFyaWFIaWRkZW5cIlxyXG4gICAgICBbYXJpYS1zZWxlY3RlZF09XCJhcmlhU2VsZWN0ZWRcIlxyXG4gICAgICBbcm9sZV09XCJyb2xlXCJcclxuICAgICAgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtpY29uUHJvcHNdPVwiaWNvblByb3BzXCJcclxuICAgICAgW21lbnVQcm9wc109XCJtZW51UHJvcHNcIlxyXG4gICAgICBbc3BsaXRdPVwic3BsaXRcIlxyXG4gICAgICBbbWVudUljb25Qcm9wc109XCJtZW51SWNvblByb3BzXCJcclxuICAgICAgW3NwbGl0QnV0dG9uQXJpYUxhYmVsXT1cInNwbGl0QnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW21lbnVBc109XCJtZW51QXNcIlxyXG4gICAgICBbc2Vjb25kYXJ5VGV4dF09XCJzZWNvbmRhcnlUZXh0XCJcclxuICAgICAgW3RvZ2dsZV09XCJ0b2dnbGVcIlxyXG4gICAgICBbZGF0YV09XCJkYXRhXCJcclxuICAgICAgW2dldENsYXNzTmFtZXNdPVwiZ2V0Q2xhc3NOYW1lc1wiXHJcbiAgICAgIFtnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXNdPVwiZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzXCJcclxuICAgICAgW21lbnVUcmlnZ2VyS2V5Q29kZV09XCJtZW51VHJpZ2dlcktleUNvZGVcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbcGVyc2lzdE1lbnVdPVwicGVyc2lzdE1lbnVcIlxyXG4gICAgICBbUmVuZGVySWNvbl09XCJyZW5kZXJJY29uICYmIG9uUmVuZGVySWNvblwiXHJcbiAgICAgIFtSZW5kZXJUZXh0XT1cInJlbmRlclRleHQgJiYgb25SZW5kZXJUZXh0XCJcclxuICAgICAgW1JlbmRlckRlc2NyaXB0aW9uXT1cInJlbmRlckRlc2NyaXB0aW9uICYmIG9uUmVuZGVyRGVzY3JpcHRpb25cIlxyXG4gICAgICBbUmVuZGVyQXJpYURlc2NyaXB0aW9uXT1cInJlbmRlckFyaWFEZXNjcmlwdGlvbiAmJiBvblJlbmRlckFyaWFEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJDaGlsZHJlbl09XCJyZW5kZXJDaGlsZHJlbiAmJiBvblJlbmRlckNoaWxkcmVuXCJcclxuICAgICAgW1JlbmRlck1lbnVJY29uXT1cInJlbmRlck1lbnVJY29uICYmIG9uUmVuZGVyTWVudUljb25cIlxyXG4gICAgICBbTWVudUNsaWNrXT1cIm9uTWVudUNsaWNrSGFuZGxlclwiXHJcbiAgICAgIChvbkFmdGVyTWVudURpc21pc3MpPVwib25BZnRlck1lbnVEaXNtaXNzLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2tIYW5kbGVyKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvQWN0aW9uQnV0dG9uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJBY3Rpb25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==