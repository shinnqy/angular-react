/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
var FabPrimaryButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabPrimaryButtonComponent, _super);
    function FabPrimaryButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabPrimaryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-primary-button',
                    exportAs: 'fabPrimaryButton',
                    template: "\n    <PrimaryButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </PrimaryButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabPrimaryButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabPrimaryButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabPrimaryButtonComponent;
}(FabBaseButtonComponent));
export { FabPrimaryButtonComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPrimaryButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWFyeS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItcmVhY3QvZmFicmljLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL3ByaW1hcnktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRTtJQXNEK0MscURBQXNCO0lBR25FLG1DQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO2VBQzNHLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3hELENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG93REErQ1Q7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBRHRDLGdCQUFnQjtpQkFFMUI7Ozs7Z0JBNURDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQUlqQixTQUFTO2dCQURULE1BQU07OzsrQkE2REwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBSzFDLGdDQUFDO0NBQUEsQUE1REQsQ0FzRCtDLHNCQUFzQixHQU1wRTtTQU5ZLHlCQUF5Qjs7Ozs7O0lBQ3BDLGlEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE5nWm9uZSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItcHJpbWFyeS1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAnZmFiUHJpbWFyeUJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxQcmltYXJ5QnV0dG9uXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbaHJlZl09XCJocmVmXCJcclxuICAgICAgW3ByaW1hcnldPVwicHJpbWFyeVwiXHJcbiAgICAgIFt1bmlxdWVJZF09XCJ1bmlxdWVJZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFthbGxvd0Rpc2FibGVkRm9jdXNdPVwiYWxsb3dEaXNhYmxlZEZvY3VzXCJcclxuICAgICAgW3ByaW1hcnlEaXNhYmxlZF09XCJwcmltYXJ5RGlzYWJsZWRcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFEZXNjcmlwdGlvbl09XCJhcmlhRGVzY3JpcHRpb25cIlxyXG4gICAgICBbYXJpYUhpZGRlbl09XCJhcmlhSGlkZGVuXCJcclxuICAgICAgW2FyaWEtc2VsZWN0ZWRdPVwiYXJpYVNlbGVjdGVkXCJcclxuICAgICAgW3JvbGVdPVwicm9sZVwiXHJcbiAgICAgIFt0YWJJbmRleF09XCJ0YWJJbmRleFwiXHJcbiAgICAgIFt0ZXh0XT1cInRleHRcIlxyXG4gICAgICBbaWNvblByb3BzXT1cImljb25Qcm9wc1wiXHJcbiAgICAgIFttZW51UHJvcHNdPVwibWVudVByb3BzXCJcclxuICAgICAgW3NwbGl0XT1cInNwbGl0XCJcclxuICAgICAgW21lbnVJY29uUHJvcHNdPVwibWVudUljb25Qcm9wc1wiXHJcbiAgICAgIFtzcGxpdEJ1dHRvbkFyaWFMYWJlbF09XCJzcGxpdEJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFttZW51QXNdPVwibWVudUFzXCJcclxuICAgICAgW3NlY29uZGFyeVRleHRdPVwic2Vjb25kYXJ5VGV4dFwiXHJcbiAgICAgIFt0b2dnbGVdPVwidG9nZ2xlXCJcclxuICAgICAgW2RhdGFdPVwiZGF0YVwiXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzXT1cImdldFNwbGl0QnV0dG9uQ2xhc3NOYW1lc1wiXHJcbiAgICAgIFttZW51VHJpZ2dlcktleUNvZGVdPVwibWVudVRyaWdnZXJLZXlDb2RlXCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW3BlcnNpc3RNZW51XT1cInBlcnNpc3RNZW51XCJcclxuICAgICAgW1JlbmRlckljb25dPVwicmVuZGVySWNvbiAmJiBvblJlbmRlckljb25cIlxyXG4gICAgICBbUmVuZGVyVGV4dF09XCJyZW5kZXJUZXh0ICYmIG9uUmVuZGVyVGV4dFwiXHJcbiAgICAgIFtSZW5kZXJEZXNjcmlwdGlvbl09XCJyZW5kZXJEZXNjcmlwdGlvbiAmJiBvblJlbmRlckRlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlckFyaWFEZXNjcmlwdGlvbl09XCJyZW5kZXJBcmlhRGVzY3JpcHRpb24gJiYgb25SZW5kZXJBcmlhRGVzY3JpcHRpb25cIlxyXG4gICAgICBbUmVuZGVyQ2hpbGRyZW5dPVwicmVuZGVyQ2hpbGRyZW4gJiYgb25SZW5kZXJDaGlsZHJlblwiXHJcbiAgICAgIFtSZW5kZXJNZW51SWNvbl09XCJyZW5kZXJNZW51SWNvbiAmJiBvblJlbmRlck1lbnVJY29uXCJcclxuICAgICAgW01lbnVDbGlja109XCJvbk1lbnVDbGlja0hhbmRsZXJcIlxyXG4gICAgICAob25BZnRlck1lbnVEaXNtaXNzKT1cIm9uQWZ0ZXJNZW51RGlzbWlzcy5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25DbGljayk9XCJvbkNsaWNrSGFuZGxlcigkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L1ByaW1hcnlCdXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlByaW1hcnlCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==