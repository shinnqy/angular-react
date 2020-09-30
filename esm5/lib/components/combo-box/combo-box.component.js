/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseComboBoxComponent } from './base-combo-box.component';
var FabComboBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabComboBoxComponent, _super);
    function FabComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabComboBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-combo-box',
                    exportAs: 'fabComboBox',
                    template: "\n    <ComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </ComboBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabComboBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabComboBoxComponent;
}(FabBaseComboBoxComponent));
export { FabComboBoxComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabComboBoxComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbWJvLWJveC9jb21iby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFO0lBMEMwQyxnREFBd0I7SUFHaEUsOEJBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7ZUFDM0csa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDeEQsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw4MUNBbUNUO29CQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUR0QyxnQkFBZ0I7aUJBRTFCOzs7O2dCQWhEQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFJakIsU0FBUztnQkFEVCxNQUFNOzs7K0JBaURMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQUsxQywyQkFBQztDQUFBLEFBaERELENBMEMwQyx3QkFBd0IsR0FNakU7U0FOWSxvQkFBb0I7Ozs7OztJQUMvQiw0Q0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBOZ1pvbmUsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFiQmFzZUNvbWJvQm94Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNvbWJvLWJveC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItY29tYm8tYm94JyxcclxuICBleHBvcnRBczogJ2ZhYkNvbWJvQm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPENvbWJvQm94XHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcclxuICAgICAgW2FsbG93RnJlZWZvcm1dPVwiYWxsb3dGcmVlZm9ybVwiXHJcbiAgICAgIFthdXRvQ29tcGxldGVdPVwiYXV0b0NvbXBsZXRlXCJcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtidXR0b25JY29uUHJvcHNdPVwiYnV0dG9uSWNvblByb3BzXCJcclxuICAgICAgW2F1dG9maWxsXT1cImF1dG9maWxsXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbZ2V0Q2xhc3NOYW1lc109XCJnZXRDbGFzc05hbWVzXCJcclxuICAgICAgW2NhcmV0RG93bkJ1dHRvblN0eWxlc109XCJjYXJldERvd25CdXR0b25TdHlsZXNcIlxyXG4gICAgICBbY29tYm9Cb3hPcHRpb25TdHlsZXNdPVwiY29tYm9Cb3hPcHRpb25TdHlsZXNcIlxyXG4gICAgICBbc2Nyb2xsU2VsZWN0ZWRUb1RvcF09XCJzY3JvbGxTZWxlY3RlZFRvVG9wXCJcclxuICAgICAgW2Ryb3Bkb3duV2lkdGhdPVwiZHJvcGRvd25XaWR0aFwiXHJcbiAgICAgIFt1c2VDb21ib0JveEFzTWVudVdpZHRoXT1cInVzZUNvbWJvQm94QXNNZW51V2lkdGhcIlxyXG4gICAgICBbbXVsdGlTZWxlY3RdPVwibXVsdGlTZWxlY3RcIlxyXG4gICAgICBbaXNCdXR0b25BcmlhSGlkZGVuXT1cImlzQnV0dG9uQXJpYUhpZGRlblwiXHJcbiAgICAgIFthcmlhRGVzY3JpYmVkQnldPVwiYXJpYURlc2NyaWJlZEJ5XCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW3BlcnNpc3RNZW51XT1cInBlcnNpc3RNZW51XCJcclxuICAgICAgW3Nob3VsZFJlc3RvcmVGb2N1c109XCJzaG91bGRSZXN0b3JlRm9jdXNcIlxyXG4gICAgICBbUmVuZGVyTG93ZXJDb250ZW50XT1cInJlbmRlckxvd2VyQ29udGVudCAmJiBvblJlbmRlckxvd2VyQ29udGVudFwiXHJcbiAgICAgIFtJdGVtQ2xpY2tdPVwib25JdGVtQ2xpY2tIYW5kbGVyXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICBbUGVuZGluZ1ZhbHVlQ2hhbmdlZF09XCJvblBlbmRpbmdWYWx1ZUNoYW5nZWRIYW5kbGVyXCJcclxuICAgICAgW1Jlc29sdmVPcHRpb25zXT1cInJlc29sdmVPcHRpb25zXCJcclxuICAgICAgW1Njcm9sbFRvSXRlbV09XCJvblNjcm9sbFRvSXRlbUhhbmRsZXJcIlxyXG4gICAgICAob25NZW51T3Blbik9XCJvbk1lbnVPcGVuLmVtaXQoKVwiXHJcbiAgICAgIChvbk1lbnVEaXNtaXNzZWQpPVwib25NZW51RGlzbWlzc2VkLmVtaXQoKVwiXHJcbiAgICAgIChvbk1lbnVEaXNtaXNzKT1cIm9uTWVudURpc21pc3MuZW1pdCgpXCJcclxuICAgID5cclxuICAgIDwvQ29tYm9Cb3g+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkNvbWJvQm94Q29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZUNvbWJvQm94Q29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==