/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseComboBoxComponent } from './base-combo-box.component';
export class FabVirtualizedComboBoxComponent extends FabBaseComboBoxComponent {
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
FabVirtualizedComboBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-virtualized-combo-box',
                exportAs: 'fabVirtualizedComboBox',
                template: `
    <VirtualizedComboBox
      #reactNode
      [componentRef]="componentRef"
      [options]="options"
      [allowFreeform]="allowFreeform"
      [autoComplete]="autoComplete"
      [text]="text"
      [buttonIconProps]="buttonIconProps"
      [autofill]="autofill"
      [theme]="theme"
      [styles]="styles"
      [getClassNames]="getClassNames"
      [caretDownButtonStyles]="caretDownButtonStyles"
      [comboBoxOptionStyles]="comboBoxOptionStyles"
      [scrollSelectedToTop]="scrollSelectedToTop"
      [dropdownWidth]="dropdownWidth"
      [useComboBoxAsMenuWidth]="useComboBoxAsMenuWidth"
      [multiSelect]="multiSelect"
      [isButtonAriaHidden]="isButtonAriaHidden"
      [ariaDescribedBy]="ariaDescribedBy"
      [keytipProps]="keytipProps"
      [persistMenu]="persistMenu"
      [shouldRestoreFocus]="shouldRestoreFocus"
      [RenderLowerContent]="renderLowerContent && onRenderLowerContent"
      [ItemClick]="onItemClickHandler"
      [Change]="onChangeHandler"
      [PendingValueChanged]="onPendingValueChangedHandler"
      [ResolveOptions]="resolveOptions"
      [ScrollToItem]="onScrollToItemHandler"
      (onMenuOpen)="onMenuOpen.emit()"
      (onMenuDismissed)="onMenuDismissed.emit()"
      (onMenuDismiss)="onMenuDismiss.emit()"
    >
    </VirtualizedComboBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabVirtualizedComboBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabVirtualizedComboBoxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabVirtualizedComboBoxComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbGl6ZWQtY29tYm8tYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb21iby1ib3gvIiwic291cmNlcyI6WyJ2aXJ0dWFsaXplZC1jb21iby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE0Q3RFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSx3QkFBd0I7Ozs7Ozs7SUFHM0UsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQWhEQyxVQUFVO1lBRlYsaUJBQWlCO1lBSWpCLFNBQVM7WUFEVCxNQUFNOzs7MkJBaURMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBQXhDLHVEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE5nWm9uZSxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWJCYXNlQ29tYm9Cb3hDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tYm8tYm94LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhYi12aXJ0dWFsaXplZC1jb21iby1ib3gnLFxyXG4gIGV4cG9ydEFzOiAnZmFiVmlydHVhbGl6ZWRDb21ib0JveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxWaXJ0dWFsaXplZENvbWJvQm94XHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcclxuICAgICAgW2FsbG93RnJlZWZvcm1dPVwiYWxsb3dGcmVlZm9ybVwiXHJcbiAgICAgIFthdXRvQ29tcGxldGVdPVwiYXV0b0NvbXBsZXRlXCJcclxuICAgICAgW3RleHRdPVwidGV4dFwiXHJcbiAgICAgIFtidXR0b25JY29uUHJvcHNdPVwiYnV0dG9uSWNvblByb3BzXCJcclxuICAgICAgW2F1dG9maWxsXT1cImF1dG9maWxsXCJcclxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxyXG4gICAgICBbZ2V0Q2xhc3NOYW1lc109XCJnZXRDbGFzc05hbWVzXCJcclxuICAgICAgW2NhcmV0RG93bkJ1dHRvblN0eWxlc109XCJjYXJldERvd25CdXR0b25TdHlsZXNcIlxyXG4gICAgICBbY29tYm9Cb3hPcHRpb25TdHlsZXNdPVwiY29tYm9Cb3hPcHRpb25TdHlsZXNcIlxyXG4gICAgICBbc2Nyb2xsU2VsZWN0ZWRUb1RvcF09XCJzY3JvbGxTZWxlY3RlZFRvVG9wXCJcclxuICAgICAgW2Ryb3Bkb3duV2lkdGhdPVwiZHJvcGRvd25XaWR0aFwiXHJcbiAgICAgIFt1c2VDb21ib0JveEFzTWVudVdpZHRoXT1cInVzZUNvbWJvQm94QXNNZW51V2lkdGhcIlxyXG4gICAgICBbbXVsdGlTZWxlY3RdPVwibXVsdGlTZWxlY3RcIlxyXG4gICAgICBbaXNCdXR0b25BcmlhSGlkZGVuXT1cImlzQnV0dG9uQXJpYUhpZGRlblwiXHJcbiAgICAgIFthcmlhRGVzY3JpYmVkQnldPVwiYXJpYURlc2NyaWJlZEJ5XCJcclxuICAgICAgW2tleXRpcFByb3BzXT1cImtleXRpcFByb3BzXCJcclxuICAgICAgW3BlcnNpc3RNZW51XT1cInBlcnNpc3RNZW51XCJcclxuICAgICAgW3Nob3VsZFJlc3RvcmVGb2N1c109XCJzaG91bGRSZXN0b3JlRm9jdXNcIlxyXG4gICAgICBbUmVuZGVyTG93ZXJDb250ZW50XT1cInJlbmRlckxvd2VyQ29udGVudCAmJiBvblJlbmRlckxvd2VyQ29udGVudFwiXHJcbiAgICAgIFtJdGVtQ2xpY2tdPVwib25JdGVtQ2xpY2tIYW5kbGVyXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICBbUGVuZGluZ1ZhbHVlQ2hhbmdlZF09XCJvblBlbmRpbmdWYWx1ZUNoYW5nZWRIYW5kbGVyXCJcclxuICAgICAgW1Jlc29sdmVPcHRpb25zXT1cInJlc29sdmVPcHRpb25zXCJcclxuICAgICAgW1Njcm9sbFRvSXRlbV09XCJvblNjcm9sbFRvSXRlbUhhbmRsZXJcIlxyXG4gICAgICAob25NZW51T3Blbik9XCJvbk1lbnVPcGVuLmVtaXQoKVwiXHJcbiAgICAgIChvbk1lbnVEaXNtaXNzZWQpPVwib25NZW51RGlzbWlzc2VkLmVtaXQoKVwiXHJcbiAgICAgIChvbk1lbnVEaXNtaXNzKT1cIm9uTWVudURpc21pc3MuZW1pdCgpXCJcclxuICAgID5cclxuICAgIDwvVmlydHVhbGl6ZWRDb21ib0JveD5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiVmlydHVhbGl6ZWRDb21ib0JveENvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VDb21ib0JveENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCBuZ1pvbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=