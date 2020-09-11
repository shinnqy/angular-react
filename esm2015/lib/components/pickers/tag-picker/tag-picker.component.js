/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBasePickerComponent } from '../base-picker/base-picker.component';
export class FabTagPickerComponent extends FabBasePickerComponent {
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
FabTagPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag-picker',
                exportAs: 'fabTagPicker',
                template: `
    <TagPicker
      #reactNode
      [componentRef]="componentRef"
      [resolveDelay]="resolveDelay"
      [defaultSelectedItems]="defaultSelectedItems"
      [getTextFromItem]="getTextFromItem"
      [className]="className"
      [pickerCalloutProps]="pickerCalloutProps"
      [searchingText]="searchingText"
      [disabled]="disabled"
      [itemLimit]="itemLimit"
      [createGenericItem]="createGenericItem"
      [removeButtonAriaLabel]="removeButtonAriaLabel"
      [selectedItems]="selectedItems"
      [enableSelectedSuggestionAlert]="enableSelectedSuggestionAlert"
      [inputProps]="inputProps"
      [pickerSuggestionsProps]="pickerSuggestionsProps"
      [ItemSelected]="onItemSelected"
      [InputChange]="onInputChange"
      [EmptyInputFocus]="onEmptyInputFocus"
      [ResolveSuggestions]="onResolveSuggestions"
      [GetMoreResults]="onGetMoreResults"
      [ValidateInput]="onValidateInput"
      [RenderItem]="renderItem && onRenderItem"
      [RenderSuggestionsItem]="renderSuggestionsItem && onRenderSuggestionsItem"
      [Change]="onChangeHandler"
      [Focus]="onFocusHandler"
      [Blur]="onBlurHandler"
      [Dismiss]="onDismissHandler"
      [RemoveSuggestion]="onRemoveSuggestionHandler"
    >
    </TagPicker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabTagPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabTagPickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTagPickerComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGlja2Vycy8iLCJzb3VyY2VzIjpbInRhZy1waWNrZXIvdGFnLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQTBDOUUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHNCQUE2Qzs7Ozs7OztJQUd0RixZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7Ozs7WUEvQ0MsVUFBVTtZQUZWLGlCQUFpQjtZQUlqQixTQUFTO1lBRFQsTUFBTTs7OzJCQWdETCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQUF4Qyw2Q0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBOZ1pvbmUsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRhZywgSVRhZ1BpY2tlclByb3BzIH0gZnJvbSAnb2ZmaWNlLXVpLWZhYnJpYy1yZWFjdC9saWIvUGlja2Vycyc7XHJcbmltcG9ydCB7IEZhYkJhc2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXBpY2tlci9iYXNlLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYWItdGFnLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdmYWJUYWdQaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8VGFnUGlja2VyXHJcbiAgICAgICNyZWFjdE5vZGVcclxuICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICBbcmVzb2x2ZURlbGF5XT1cInJlc29sdmVEZWxheVwiXHJcbiAgICAgIFtkZWZhdWx0U2VsZWN0ZWRJdGVtc109XCJkZWZhdWx0U2VsZWN0ZWRJdGVtc1wiXHJcbiAgICAgIFtnZXRUZXh0RnJvbUl0ZW1dPVwiZ2V0VGV4dEZyb21JdGVtXCJcclxuICAgICAgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIlxyXG4gICAgICBbcGlja2VyQ2FsbG91dFByb3BzXT1cInBpY2tlckNhbGxvdXRQcm9wc1wiXHJcbiAgICAgIFtzZWFyY2hpbmdUZXh0XT1cInNlYXJjaGluZ1RleHRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbaXRlbUxpbWl0XT1cIml0ZW1MaW1pdFwiXHJcbiAgICAgIFtjcmVhdGVHZW5lcmljSXRlbV09XCJjcmVhdGVHZW5lcmljSXRlbVwiXHJcbiAgICAgIFtyZW1vdmVCdXR0b25BcmlhTGFiZWxdPVwicmVtb3ZlQnV0dG9uQXJpYUxhYmVsXCJcclxuICAgICAgW3NlbGVjdGVkSXRlbXNdPVwic2VsZWN0ZWRJdGVtc1wiXHJcbiAgICAgIFtlbmFibGVTZWxlY3RlZFN1Z2dlc3Rpb25BbGVydF09XCJlbmFibGVTZWxlY3RlZFN1Z2dlc3Rpb25BbGVydFwiXHJcbiAgICAgIFtpbnB1dFByb3BzXT1cImlucHV0UHJvcHNcIlxyXG4gICAgICBbcGlja2VyU3VnZ2VzdGlvbnNQcm9wc109XCJwaWNrZXJTdWdnZXN0aW9uc1Byb3BzXCJcclxuICAgICAgW0l0ZW1TZWxlY3RlZF09XCJvbkl0ZW1TZWxlY3RlZFwiXHJcbiAgICAgIFtJbnB1dENoYW5nZV09XCJvbklucHV0Q2hhbmdlXCJcclxuICAgICAgW0VtcHR5SW5wdXRGb2N1c109XCJvbkVtcHR5SW5wdXRGb2N1c1wiXHJcbiAgICAgIFtSZXNvbHZlU3VnZ2VzdGlvbnNdPVwib25SZXNvbHZlU3VnZ2VzdGlvbnNcIlxyXG4gICAgICBbR2V0TW9yZVJlc3VsdHNdPVwib25HZXRNb3JlUmVzdWx0c1wiXHJcbiAgICAgIFtWYWxpZGF0ZUlucHV0XT1cIm9uVmFsaWRhdGVJbnB1dFwiXHJcbiAgICAgIFtSZW5kZXJJdGVtXT1cInJlbmRlckl0ZW0gJiYgb25SZW5kZXJJdGVtXCJcclxuICAgICAgW1JlbmRlclN1Z2dlc3Rpb25zSXRlbV09XCJyZW5kZXJTdWdnZXN0aW9uc0l0ZW0gJiYgb25SZW5kZXJTdWdnZXN0aW9uc0l0ZW1cIlxyXG4gICAgICBbQ2hhbmdlXT1cIm9uQ2hhbmdlSGFuZGxlclwiXHJcbiAgICAgIFtGb2N1c109XCJvbkZvY3VzSGFuZGxlclwiXHJcbiAgICAgIFtCbHVyXT1cIm9uQmx1ckhhbmRsZXJcIlxyXG4gICAgICBbRGlzbWlzc109XCJvbkRpc21pc3NIYW5kbGVyXCJcclxuICAgICAgW1JlbW92ZVN1Z2dlc3Rpb25dPVwib25SZW1vdmVTdWdnZXN0aW9uSGFuZGxlclwiXHJcbiAgICA+XHJcbiAgICA8L1RhZ1BpY2tlcj5cclxuICBgLFxyXG4gIHN0eWxlczogWydyZWFjdC1yZW5kZXJlciddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFiVGFnUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmFiQmFzZVBpY2tlckNvbXBvbmVudDxJVGFnLCBJVGFnUGlja2VyUHJvcHM+IHtcclxuICBAVmlld0NoaWxkKCdyZWFjdE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==