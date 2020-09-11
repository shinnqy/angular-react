/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
var FabCommandBarButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabCommandBarButtonComponent, _super);
    function FabCommandBarButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabCommandBarButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-command-bar-button',
                    exportAs: 'fabCommandBarButton',
                    template: "\n    <CommandBarButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </CommandBarButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabCommandBarButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabCommandBarButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabCommandBarButtonComponent;
}(FabBaseButtonComponent));
export { FabCommandBarButtonComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabCommandBarButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1iYXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1dHRvbi9jb21tYW5kLWJhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpFO0lBc0RrRCx3REFBc0I7SUFHdEUsc0NBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7ZUFDM0csa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDeEQsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMHdEQStDVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkE1REMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRFQsTUFBTTs7OytCQTZETCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFLMUMsbUNBQUM7Q0FBQSxBQTVERCxDQXNEa0Qsc0JBQXNCLEdBTXZFO1NBTlksNEJBQTRCOzs7Ozs7SUFDdkMsb0RBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Jhc2UtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1jb21tYW5kLWJhci1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAnZmFiQ29tbWFuZEJhckJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxDb21tYW5kQmFyQnV0dG9uXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbaHJlZl09XCJocmVmXCJcclxuICAgICAgW3ByaW1hcnldPVwicHJpbWFyeVwiXHJcbiAgICAgIFt1bmlxdWVJZF09XCJ1bmlxdWVJZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFthbGxvd0Rpc2FibGVkRm9jdXNdPVwiYWxsb3dEaXNhYmxlZEZvY3VzXCJcclxuICAgICAgW3ByaW1hcnlEaXNhYmxlZF09XCJwcmltYXJ5RGlzYWJsZWRcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2FyaWFEZXNjcmlwdGlvbl09XCJhcmlhRGVzY3JpcHRpb25cIlxyXG4gICAgICBbYXJpYUhpZGRlbl09XCJhcmlhSGlkZGVuXCJcclxuICAgICAgW2FyaWEtc2VsZWN0ZWRdPVwiYXJpYVNlbGVjdGVkXCJcclxuICAgICAgW3JvbGVdPVwicm9sZVwiXHJcbiAgICAgIFt0YWJJbmRleF09XCJ0YWJJbmRleFwiXHJcbiAgICAgIFt0ZXh0XT1cInRleHRcIlxyXG4gICAgICBbaWNvblByb3BzXT1cImljb25Qcm9wc1wiXHJcbiAgICAgIFttZW51UHJvcHNdPVwibWVudVByb3BzXCJcclxuICAgICAgW3NwbGl0XT1cInNwbGl0XCJcclxuICAgICAgW21lbnVJY29uUHJvcHNdPVwibWVudUljb25Qcm9wc1wiXHJcbiAgICAgIFtzcGxpdEJ1dHRvbkFyaWFMYWJlbF09XCJzcGxpdEJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFttZW51QXNdPVwibWVudUFzXCJcclxuICAgICAgW3NlY29uZGFyeVRleHRdPVwic2Vjb25kYXJ5VGV4dFwiXHJcbiAgICAgIFt0b2dnbGVdPVwidG9nZ2xlXCJcclxuICAgICAgW2RhdGFdPVwiZGF0YVwiXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzXT1cImdldFNwbGl0QnV0dG9uQ2xhc3NOYW1lc1wiXHJcbiAgICAgIFttZW51VHJpZ2dlcktleUNvZGVdPVwibWVudVRyaWdnZXJLZXlDb2RlXCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW3BlcnNpc3RNZW51XT1cInBlcnNpc3RNZW51XCJcclxuICAgICAgW1JlbmRlckljb25dPVwicmVuZGVySWNvbiAmJiBvblJlbmRlckljb25cIlxyXG4gICAgICBbUmVuZGVyVGV4dF09XCJyZW5kZXJUZXh0ICYmIG9uUmVuZGVyVGV4dFwiXHJcbiAgICAgIFtSZW5kZXJEZXNjcmlwdGlvbl09XCJyZW5kZXJEZXNjcmlwdGlvbiAmJiBvblJlbmRlckRlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlckFyaWFEZXNjcmlwdGlvbl09XCJyZW5kZXJBcmlhRGVzY3JpcHRpb24gJiYgb25SZW5kZXJBcmlhRGVzY3JpcHRpb25cIlxyXG4gICAgICBbUmVuZGVyQ2hpbGRyZW5dPVwicmVuZGVyQ2hpbGRyZW4gJiYgb25SZW5kZXJDaGlsZHJlblwiXHJcbiAgICAgIFtSZW5kZXJNZW51SWNvbl09XCJyZW5kZXJNZW51SWNvbiAmJiBvblJlbmRlck1lbnVJY29uXCJcclxuICAgICAgW01lbnVDbGlja109XCJvbk1lbnVDbGlja0hhbmRsZXJcIlxyXG4gICAgICAob25BZnRlck1lbnVEaXNtaXNzKT1cIm9uQWZ0ZXJNZW51RGlzbWlzcy5lbWl0KCRldmVudClcIlxyXG4gICAgICAob25DbGljayk9XCJvbkNsaWNrSGFuZGxlcigkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XHJcbiAgICA8L0NvbW1hbmRCYXJCdXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNvbW1hbmRCYXJCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBGYWJCYXNlQnV0dG9uQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==