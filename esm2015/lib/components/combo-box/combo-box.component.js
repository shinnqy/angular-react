/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBaseComboBoxComponent } from './base-combo-box.component';
export class FabComboBoxComponent extends FabBaseComboBoxComponent {
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
FabComboBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-combo-box',
                exportAs: 'fabComboBox',
                template: `
    <ComboBox
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
    </ComboBox>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabComboBoxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabComboBoxComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabComboBoxComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXJlYWN0L2ZhYnJpYy9saWIvY29tcG9uZW50cy9jb21iby1ib3gvIiwic291cmNlcyI6WyJjb21iby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE0Q3RFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7Ozs7Ozs7SUFHaEUsWUFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztRQUMzRyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsZ0JBQWdCO2FBRTFCOzs7O1lBaERDLFVBQVU7WUFGVixpQkFBaUI7WUFJakIsU0FBUztZQURULE1BQU07OzsyQkFpREwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFBeEMsNENBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhYkJhc2VDb21ib0JveENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jb21iby1ib3guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLWNvbWJvLWJveCcsXHJcbiAgZXhwb3J0QXM6ICdmYWJDb21ib0JveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxDb21ib0JveFxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICAgIFthbGxvd0ZyZWVmb3JtXT1cImFsbG93RnJlZWZvcm1cIlxyXG4gICAgICBbYXV0b0NvbXBsZXRlXT1cImF1dG9Db21wbGV0ZVwiXHJcbiAgICAgIFt0ZXh0XT1cInRleHRcIlxyXG4gICAgICBbYnV0dG9uSWNvblByb3BzXT1cImJ1dHRvbkljb25Qcm9wc1wiXHJcbiAgICAgIFthdXRvZmlsbF09XCJhdXRvZmlsbFwiXHJcbiAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcclxuICAgICAgW2dldENsYXNzTmFtZXNdPVwiZ2V0Q2xhc3NOYW1lc1wiXHJcbiAgICAgIFtjYXJldERvd25CdXR0b25TdHlsZXNdPVwiY2FyZXREb3duQnV0dG9uU3R5bGVzXCJcclxuICAgICAgW2NvbWJvQm94T3B0aW9uU3R5bGVzXT1cImNvbWJvQm94T3B0aW9uU3R5bGVzXCJcclxuICAgICAgW3Njcm9sbFNlbGVjdGVkVG9Ub3BdPVwic2Nyb2xsU2VsZWN0ZWRUb1RvcFwiXHJcbiAgICAgIFtkcm9wZG93bldpZHRoXT1cImRyb3Bkb3duV2lkdGhcIlxyXG4gICAgICBbdXNlQ29tYm9Cb3hBc01lbnVXaWR0aF09XCJ1c2VDb21ib0JveEFzTWVudVdpZHRoXCJcclxuICAgICAgW211bHRpU2VsZWN0XT1cIm11bHRpU2VsZWN0XCJcclxuICAgICAgW2lzQnV0dG9uQXJpYUhpZGRlbl09XCJpc0J1dHRvbkFyaWFIaWRkZW5cIlxyXG4gICAgICBbYXJpYURlc2NyaWJlZEJ5XT1cImFyaWFEZXNjcmliZWRCeVwiXHJcbiAgICAgIFtrZXl0aXBQcm9wc109XCJrZXl0aXBQcm9wc1wiXHJcbiAgICAgIFtwZXJzaXN0TWVudV09XCJwZXJzaXN0TWVudVwiXHJcbiAgICAgIFtzaG91bGRSZXN0b3JlRm9jdXNdPVwic2hvdWxkUmVzdG9yZUZvY3VzXCJcclxuICAgICAgW1JlbmRlckxvd2VyQ29udGVudF09XCJyZW5kZXJMb3dlckNvbnRlbnQgJiYgb25SZW5kZXJMb3dlckNvbnRlbnRcIlxyXG4gICAgICBbSXRlbUNsaWNrXT1cIm9uSXRlbUNsaWNrSGFuZGxlclwiXHJcbiAgICAgIFtDaGFuZ2VdPVwib25DaGFuZ2VIYW5kbGVyXCJcclxuICAgICAgW1BlbmRpbmdWYWx1ZUNoYW5nZWRdPVwib25QZW5kaW5nVmFsdWVDaGFuZ2VkSGFuZGxlclwiXHJcbiAgICAgIFtSZXNvbHZlT3B0aW9uc109XCJyZXNvbHZlT3B0aW9uc1wiXHJcbiAgICAgIFtTY3JvbGxUb0l0ZW1dPVwib25TY3JvbGxUb0l0ZW1IYW5kbGVyXCJcclxuICAgICAgKG9uTWVudU9wZW4pPVwib25NZW51T3Blbi5lbWl0KClcIlxyXG4gICAgICAob25NZW51RGlzbWlzc2VkKT1cIm9uTWVudURpc21pc3NlZC5lbWl0KClcIlxyXG4gICAgICAob25NZW51RGlzbWlzcyk9XCJvbk1lbnVEaXNtaXNzLmVtaXQoKVwiXHJcbiAgICA+XHJcbiAgICA8L0NvbWJvQm94PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21ib0JveENvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VDb21ib0JveENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCBuZ1pvbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=