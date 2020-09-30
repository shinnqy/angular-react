/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
var FabSplitButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabSplitButtonComponent, _super);
    function FabSplitButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabSplitButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-split-button',
                    exportAs: 'fabSplitButton',
                    template: "\n    <SplitButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </SplitButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabSplitButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabSplitButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabSplitButtonComponent;
}(FabBaseButtonComponent));
export { FabSplitButtonComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabSplitButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9idXR0b24vIiwic291cmNlcyI6WyJzcGxpdC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpFO0lBc0Q2QyxtREFBc0I7SUFHakUsaUNBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7ZUFDM0csa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDeEQsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZ3dEQStDVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkE1REMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRFQsTUFBTTs7OytCQTZETCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFLMUMsOEJBQUM7Q0FBQSxBQTVERCxDQXNENkMsc0JBQXNCLEdBTWxFO1NBTlksdUJBQXVCOzs7Ozs7SUFDbEMsK0NBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Jhc2UtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi1zcGxpdC1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAnZmFiU3BsaXRCdXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U3BsaXRCdXR0b25cclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtocmVmXT1cImhyZWZcIlxyXG4gICAgICBbcHJpbWFyeV09XCJwcmltYXJ5XCJcclxuICAgICAgW3VuaXF1ZUlkXT1cInVuaXF1ZUlkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2FsbG93RGlzYWJsZWRGb2N1c109XCJhbGxvd0Rpc2FibGVkRm9jdXNcIlxyXG4gICAgICBbcHJpbWFyeURpc2FibGVkXT1cInByaW1hcnlEaXNhYmxlZFwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICBbYXJpYURlc2NyaXB0aW9uXT1cImFyaWFEZXNjcmlwdGlvblwiXHJcbiAgICAgIFthcmlhSGlkZGVuXT1cImFyaWFIaWRkZW5cIlxyXG4gICAgICBbYXJpYS1zZWxlY3RlZF09XCJhcmlhU2VsZWN0ZWRcIlxyXG4gICAgICBbcm9sZV09XCJyb2xlXCJcclxuICAgICAgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtpY29uUHJvcHNdPVwiaWNvblByb3BzXCJcclxuICAgICAgW21lbnVQcm9wc109XCJtZW51UHJvcHNcIlxyXG4gICAgICBbc3BsaXRdPVwic3BsaXRcIlxyXG4gICAgICBbbWVudUljb25Qcm9wc109XCJtZW51SWNvblByb3BzXCJcclxuICAgICAgW3NwbGl0QnV0dG9uQXJpYUxhYmVsXT1cInNwbGl0QnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW21lbnVBc109XCJtZW51QXNcIlxyXG4gICAgICBbc2Vjb25kYXJ5VGV4dF09XCJzZWNvbmRhcnlUZXh0XCJcclxuICAgICAgW3RvZ2dsZV09XCJ0b2dnbGVcIlxyXG4gICAgICBbZGF0YV09XCJkYXRhXCJcclxuICAgICAgW2dldENsYXNzTmFtZXNdPVwiZ2V0Q2xhc3NOYW1lc1wiXHJcbiAgICAgIFtnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXNdPVwiZ2V0U3BsaXRCdXR0b25DbGFzc05hbWVzXCJcclxuICAgICAgW21lbnVUcmlnZ2VyS2V5Q29kZV09XCJtZW51VHJpZ2dlcktleUNvZGVcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbcGVyc2lzdE1lbnVdPVwicGVyc2lzdE1lbnVcIlxyXG4gICAgICBbUmVuZGVySWNvbl09XCJyZW5kZXJJY29uICYmIG9uUmVuZGVySWNvblwiXHJcbiAgICAgIFtSZW5kZXJUZXh0XT1cInJlbmRlclRleHQgJiYgb25SZW5kZXJUZXh0XCJcclxuICAgICAgW1JlbmRlckRlc2NyaXB0aW9uXT1cInJlbmRlckRlc2NyaXB0aW9uICYmIG9uUmVuZGVyRGVzY3JpcHRpb25cIlxyXG4gICAgICBbUmVuZGVyQXJpYURlc2NyaXB0aW9uXT1cInJlbmRlckFyaWFEZXNjcmlwdGlvbiAmJiBvblJlbmRlckFyaWFEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJDaGlsZHJlbl09XCJyZW5kZXJDaGlsZHJlbiAmJiBvblJlbmRlckNoaWxkcmVuXCJcclxuICAgICAgW1JlbmRlck1lbnVJY29uXT1cInJlbmRlck1lbnVJY29uICYmIG9uUmVuZGVyTWVudUljb25cIlxyXG4gICAgICBbTWVudUNsaWNrXT1cIm9uTWVudUNsaWNrSGFuZGxlclwiXHJcbiAgICAgIChvbkFmdGVyTWVudURpc21pc3MpPVwib25BZnRlck1lbnVEaXNtaXNzLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2tIYW5kbGVyKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cclxuICAgIDwvU3BsaXRCdXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlNwbGl0QnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCBuZ1pvbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=