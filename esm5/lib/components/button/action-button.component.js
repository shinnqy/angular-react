/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseButtonComponent } from './base-button.component';
var FabActionButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabActionButtonComponent, _super);
    function FabActionButtonComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabActionButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-action-button',
                    exportAs: 'fabActionButton',
                    template: "\n    <ActionButton\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [href]=\"href\"\n      [primary]=\"primary\"\n      [uniqueId]=\"uniqueId\"\n      [disabled]=\"disabled\"\n      [allowDisabledFocus]=\"allowDisabledFocus\"\n      [primaryDisabled]=\"primaryDisabled\"\n      [styles]=\"styles\"\n      [theme]=\"theme\"\n      [checked]=\"checked\"\n      [className]=\"className\"\n      [ariaLabel]=\"ariaLabel\"\n      [ariaDescription]=\"ariaDescription\"\n      [ariaHidden]=\"ariaHidden\"\n      [aria-selected]=\"ariaSelected\"\n      [role]=\"role\"\n      [tabIndex]=\"tabIndex\"\n      [text]=\"text\"\n      [iconProps]=\"iconProps\"\n      [menuProps]=\"menuProps\"\n      [split]=\"split\"\n      [menuIconProps]=\"menuIconProps\"\n      [splitButtonAriaLabel]=\"splitButtonAriaLabel\"\n      [menuAs]=\"menuAs\"\n      [secondaryText]=\"secondaryText\"\n      [toggle]=\"toggle\"\n      [data]=\"data\"\n      [getClassNames]=\"getClassNames\"\n      [getSplitButtonClassNames]=\"getSplitButtonClassNames\"\n      [menuTriggerKeyCode]=\"menuTriggerKeyCode\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [RenderIcon]=\"renderIcon && onRenderIcon\"\n      [RenderText]=\"renderText && onRenderText\"\n      [RenderDescription]=\"renderDescription && onRenderDescription\"\n      [RenderAriaDescription]=\"renderAriaDescription && onRenderAriaDescription\"\n      [RenderChildren]=\"renderChildren && onRenderChildren\"\n      [RenderMenuIcon]=\"renderMenuIcon && onRenderMenuIcon\"\n      [MenuClick]=\"onMenuClickHandler\"\n      (onAfterMenuDismiss)=\"onAfterMenuDismiss.emit($event)\"\n      (onClick)=\"onClickHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ActionButton>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabActionButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabActionButtonComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabActionButtonComponent;
}(FabBaseButtonComponent));
export { FabActionButtonComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabActionButtonComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFakU7SUFzRDhDLG9EQUFzQjtJQUdsRSxrQ0FBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztlQUMzRyxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUN4RCxDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxrd0RBK0NUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQTVEQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFJakIsU0FBUztnQkFEVCxNQUFNOzs7K0JBNkRMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQUsxQywrQkFBQztDQUFBLEFBNURELENBc0Q4QyxzQkFBc0IsR0FNbkU7U0FOWSx3QkFBd0I7Ozs7OztJQUNuQyxnREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBOZ1pvbmUsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFiQmFzZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1idXR0b24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWFjdGlvbi1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAnZmFiQWN0aW9uQnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPEFjdGlvbkJ1dHRvblxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW2hyZWZdPVwiaHJlZlwiXHJcbiAgICAgIFtwcmltYXJ5XT1cInByaW1hcnlcIlxyXG4gICAgICBbdW5pcXVlSWRdPVwidW5pcXVlSWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbYWxsb3dEaXNhYmxlZEZvY3VzXT1cImFsbG93RGlzYWJsZWRGb2N1c1wiXHJcbiAgICAgIFtwcmltYXJ5RGlzYWJsZWRdPVwicHJpbWFyeURpc2FibGVkXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgIFthcmlhRGVzY3JpcHRpb25dPVwiYXJpYURlc2NyaXB0aW9uXCJcclxuICAgICAgW2FyaWFIaWRkZW5dPVwiYXJpYUhpZGRlblwiXHJcbiAgICAgIFthcmlhLXNlbGVjdGVkXT1cImFyaWFTZWxlY3RlZFwiXHJcbiAgICAgIFtyb2xlXT1cInJvbGVcIlxyXG4gICAgICBbdGFiSW5kZXhdPVwidGFiSW5kZXhcIlxyXG4gICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgW2ljb25Qcm9wc109XCJpY29uUHJvcHNcIlxyXG4gICAgICBbbWVudVByb3BzXT1cIm1lbnVQcm9wc1wiXHJcbiAgICAgIFtzcGxpdF09XCJzcGxpdFwiXHJcbiAgICAgIFttZW51SWNvblByb3BzXT1cIm1lbnVJY29uUHJvcHNcIlxyXG4gICAgICBbc3BsaXRCdXR0b25BcmlhTGFiZWxdPVwic3BsaXRCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICBbbWVudUFzXT1cIm1lbnVBc1wiXHJcbiAgICAgIFtzZWNvbmRhcnlUZXh0XT1cInNlY29uZGFyeVRleHRcIlxyXG4gICAgICBbdG9nZ2xlXT1cInRvZ2dsZVwiXHJcbiAgICAgIFtkYXRhXT1cImRhdGFcIlxyXG4gICAgICBbZ2V0Q2xhc3NOYW1lc109XCJnZXRDbGFzc05hbWVzXCJcclxuICAgICAgW2dldFNwbGl0QnV0dG9uQ2xhc3NOYW1lc109XCJnZXRTcGxpdEJ1dHRvbkNsYXNzTmFtZXNcIlxyXG4gICAgICBbbWVudVRyaWdnZXJLZXlDb2RlXT1cIm1lbnVUcmlnZ2VyS2V5Q29kZVwiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICAgIFtwZXJzaXN0TWVudV09XCJwZXJzaXN0TWVudVwiXHJcbiAgICAgIFtSZW5kZXJJY29uXT1cInJlbmRlckljb24gJiYgb25SZW5kZXJJY29uXCJcclxuICAgICAgW1JlbmRlclRleHRdPVwicmVuZGVyVGV4dCAmJiBvblJlbmRlclRleHRcIlxyXG4gICAgICBbUmVuZGVyRGVzY3JpcHRpb25dPVwicmVuZGVyRGVzY3JpcHRpb24gJiYgb25SZW5kZXJEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtSZW5kZXJBcmlhRGVzY3JpcHRpb25dPVwicmVuZGVyQXJpYURlc2NyaXB0aW9uICYmIG9uUmVuZGVyQXJpYURlc2NyaXB0aW9uXCJcclxuICAgICAgW1JlbmRlckNoaWxkcmVuXT1cInJlbmRlckNoaWxkcmVuICYmIG9uUmVuZGVyQ2hpbGRyZW5cIlxyXG4gICAgICBbUmVuZGVyTWVudUljb25dPVwicmVuZGVyTWVudUljb24gJiYgb25SZW5kZXJNZW51SWNvblwiXHJcbiAgICAgIFtNZW51Q2xpY2tdPVwib25NZW51Q2xpY2tIYW5kbGVyXCJcclxuICAgICAgKG9uQWZ0ZXJNZW51RGlzbWlzcyk9XCJvbkFmdGVyTWVudURpc21pc3MuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG9uQ2xpY2spPVwib25DbGlja0hhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxyXG4gICAgPC9BY3Rpb25CdXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkFjdGlvbkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VCdXR0b25Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgbmdab25lKTtcclxuICB9XHJcbn1cclxuIl19