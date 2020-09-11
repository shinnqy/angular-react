/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseComboBoxComponent } from './base-combo-box.component';
var FabVirtualizedComboBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabVirtualizedComboBoxComponent, _super);
    function FabVirtualizedComboBoxComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabVirtualizedComboBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-virtualized-combo-box',
                    exportAs: 'fabVirtualizedComboBox',
                    template: "\n    <VirtualizedComboBox\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [options]=\"options\"\n      [allowFreeform]=\"allowFreeform\"\n      [autoComplete]=\"autoComplete\"\n      [text]=\"text\"\n      [buttonIconProps]=\"buttonIconProps\"\n      [autofill]=\"autofill\"\n      [theme]=\"theme\"\n      [styles]=\"styles\"\n      [getClassNames]=\"getClassNames\"\n      [caretDownButtonStyles]=\"caretDownButtonStyles\"\n      [comboBoxOptionStyles]=\"comboBoxOptionStyles\"\n      [scrollSelectedToTop]=\"scrollSelectedToTop\"\n      [dropdownWidth]=\"dropdownWidth\"\n      [useComboBoxAsMenuWidth]=\"useComboBoxAsMenuWidth\"\n      [multiSelect]=\"multiSelect\"\n      [isButtonAriaHidden]=\"isButtonAriaHidden\"\n      [ariaDescribedBy]=\"ariaDescribedBy\"\n      [keytipProps]=\"keytipProps\"\n      [persistMenu]=\"persistMenu\"\n      [shouldRestoreFocus]=\"shouldRestoreFocus\"\n      [RenderLowerContent]=\"renderLowerContent && onRenderLowerContent\"\n      [ItemClick]=\"onItemClickHandler\"\n      [Change]=\"onChangeHandler\"\n      [PendingValueChanged]=\"onPendingValueChangedHandler\"\n      [ResolveOptions]=\"resolveOptions\"\n      [ScrollToItem]=\"onScrollToItemHandler\"\n      (onMenuOpen)=\"onMenuOpen.emit()\"\n      (onMenuDismissed)=\"onMenuDismissed.emit()\"\n      (onMenuDismiss)=\"onMenuDismiss.emit()\"\n    >\n    </VirtualizedComboBox>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabVirtualizedComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabVirtualizedComboBoxComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabVirtualizedComboBoxComponent;
}(FabBaseComboBoxComponent));
export { FabVirtualizedComboBoxComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabVirtualizedComboBoxComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbGl6ZWQtY29tYm8tYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb21iby1ib3gvIiwic291cmNlcyI6WyJ2aXJ0dWFsaXplZC1jb21iby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFO0lBMENxRCwyREFBd0I7SUFHM0UseUNBQVksVUFBc0IsRUFBRSxpQkFBb0MsRUFBRSxRQUFtQixFQUFFLE1BQWM7ZUFDM0csa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDeEQsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsbzNDQW1DVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkFoREMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRFQsTUFBTTs7OytCQWlETCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFLMUMsc0NBQUM7Q0FBQSxBQWhERCxDQTBDcUQsd0JBQXdCLEdBTTVFO1NBTlksK0JBQStCOzs7Ozs7SUFDMUMsdURBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VDb21ib0JveENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jb21iby1ib3guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXZpcnR1YWxpemVkLWNvbWJvLWJveCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJWaXJ0dWFsaXplZENvbWJvQm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFZpcnR1YWxpemVkQ29tYm9Cb3hcclxuICAgICAgI3JlYWN0Tm9kZVxyXG4gICAgICBbY29tcG9uZW50UmVmXT1cImNvbXBvbmVudFJlZlwiXHJcbiAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICBbYWxsb3dGcmVlZm9ybV09XCJhbGxvd0ZyZWVmb3JtXCJcclxuICAgICAgW2F1dG9Db21wbGV0ZV09XCJhdXRvQ29tcGxldGVcIlxyXG4gICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgW2J1dHRvbkljb25Qcm9wc109XCJidXR0b25JY29uUHJvcHNcIlxyXG4gICAgICBbYXV0b2ZpbGxdPVwiYXV0b2ZpbGxcIlxyXG4gICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICBbc3R5bGVzXT1cInN0eWxlc1wiXHJcbiAgICAgIFtnZXRDbGFzc05hbWVzXT1cImdldENsYXNzTmFtZXNcIlxyXG4gICAgICBbY2FyZXREb3duQnV0dG9uU3R5bGVzXT1cImNhcmV0RG93bkJ1dHRvblN0eWxlc1wiXHJcbiAgICAgIFtjb21ib0JveE9wdGlvblN0eWxlc109XCJjb21ib0JveE9wdGlvblN0eWxlc1wiXHJcbiAgICAgIFtzY3JvbGxTZWxlY3RlZFRvVG9wXT1cInNjcm9sbFNlbGVjdGVkVG9Ub3BcIlxyXG4gICAgICBbZHJvcGRvd25XaWR0aF09XCJkcm9wZG93bldpZHRoXCJcclxuICAgICAgW3VzZUNvbWJvQm94QXNNZW51V2lkdGhdPVwidXNlQ29tYm9Cb3hBc01lbnVXaWR0aFwiXHJcbiAgICAgIFttdWx0aVNlbGVjdF09XCJtdWx0aVNlbGVjdFwiXHJcbiAgICAgIFtpc0J1dHRvbkFyaWFIaWRkZW5dPVwiaXNCdXR0b25BcmlhSGlkZGVuXCJcclxuICAgICAgW2FyaWFEZXNjcmliZWRCeV09XCJhcmlhRGVzY3JpYmVkQnlcIlxyXG4gICAgICBba2V5dGlwUHJvcHNdPVwia2V5dGlwUHJvcHNcIlxyXG4gICAgICBbcGVyc2lzdE1lbnVdPVwicGVyc2lzdE1lbnVcIlxyXG4gICAgICBbc2hvdWxkUmVzdG9yZUZvY3VzXT1cInNob3VsZFJlc3RvcmVGb2N1c1wiXHJcbiAgICAgIFtSZW5kZXJMb3dlckNvbnRlbnRdPVwicmVuZGVyTG93ZXJDb250ZW50ICYmIG9uUmVuZGVyTG93ZXJDb250ZW50XCJcclxuICAgICAgW0l0ZW1DbGlja109XCJvbkl0ZW1DbGlja0hhbmRsZXJcIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICAgIFtQZW5kaW5nVmFsdWVDaGFuZ2VkXT1cIm9uUGVuZGluZ1ZhbHVlQ2hhbmdlZEhhbmRsZXJcIlxyXG4gICAgICBbUmVzb2x2ZU9wdGlvbnNdPVwicmVzb2x2ZU9wdGlvbnNcIlxyXG4gICAgICBbU2Nyb2xsVG9JdGVtXT1cIm9uU2Nyb2xsVG9JdGVtSGFuZGxlclwiXHJcbiAgICAgIChvbk1lbnVPcGVuKT1cIm9uTWVudU9wZW4uZW1pdCgpXCJcclxuICAgICAgKG9uTWVudURpc21pc3NlZCk9XCJvbk1lbnVEaXNtaXNzZWQuZW1pdCgpXCJcclxuICAgICAgKG9uTWVudURpc21pc3MpPVwib25NZW51RGlzbWlzcy5lbWl0KClcIlxyXG4gICAgPlxyXG4gICAgPC9WaXJ0dWFsaXplZENvbWJvQm94PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJWaXJ0dWFsaXplZENvbWJvQm94Q29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZUNvbWJvQm94Q29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==