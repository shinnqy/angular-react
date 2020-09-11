/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBasePickerComponent } from '../base-picker/base-picker.component';
export class FabPeoplePickerComponent extends FabBasePickerComponent {
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
FabPeoplePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-people-picker',
                exportAs: 'fabPeoplePicker',
                template: `
      <PeoplePicker
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
      </PeoplePicker>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ['react-renderer']
            }] }
];
/** @nocollapse */
FabPeoplePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
FabPeoplePickerComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabPeoplePickerComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGlja2Vycy8iLCJzb3VyY2VzIjpbInBlb3BsZS1waWNrZXIvcGVvcGxlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQTRDOUUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUF5RDs7Ozs7OztJQUdyRyxZQUFZLFVBQXNCLEVBQUUsaUJBQW9DLEVBQUUsUUFBbUIsRUFBRSxNQUFjO1FBQzNHLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQ1Q7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRHRDLGdCQUFnQjthQUUxQjs7OztZQWxEQyxVQUFVO1lBRlYsaUJBQWlCO1lBSWpCLFNBQVM7WUFEVCxNQUFNOzs7MkJBbURMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBQXhDLGdEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICBpbXBvcnQgeyBGYWJCYXNlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1waWNrZXIvYmFzZS1waWNrZXIuY29tcG9uZW50JztcclxuICBpbXBvcnQgeyBJUGVvcGxlUGlja2VyUHJvcHMsIEJhc2VBdXRvRmlsbCB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BpY2tlcnMnO1xyXG4gIGltcG9ydCB7IElQZXJzb25hUHJvcHMgfSBmcm9tICdvZmZpY2UtdWktZmFicmljLXJlYWN0L2xpYi9QZXJzb25hJztcclxuXHJcbiAgQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZhYi1wZW9wbGUtcGlja2VyJyxcclxuICAgIGV4cG9ydEFzOiAnZmFiUGVvcGxlUGlja2VyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxQZW9wbGVQaWNrZXJcclxuICAgICAgICAjcmVhY3ROb2RlXHJcbiAgICAgICAgW2NvbXBvbmVudFJlZl09XCJjb21wb25lbnRSZWZcIlxyXG4gICAgICAgIFtyZXNvbHZlRGVsYXldPVwicmVzb2x2ZURlbGF5XCJcclxuICAgICAgICBbZGVmYXVsdFNlbGVjdGVkSXRlbXNdPVwiZGVmYXVsdFNlbGVjdGVkSXRlbXNcIlxyXG4gICAgICAgIFtnZXRUZXh0RnJvbUl0ZW1dPVwiZ2V0VGV4dEZyb21JdGVtXCJcclxuICAgICAgICBbY2xhc3NOYW1lXT1cImNsYXNzTmFtZVwiXHJcbiAgICAgICAgW3BpY2tlckNhbGxvdXRQcm9wc109XCJwaWNrZXJDYWxsb3V0UHJvcHNcIlxyXG4gICAgICAgIFtzZWFyY2hpbmdUZXh0XT1cInNlYXJjaGluZ1RleHRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2l0ZW1MaW1pdF09XCJpdGVtTGltaXRcIlxyXG4gICAgICAgIFtjcmVhdGVHZW5lcmljSXRlbV09XCJjcmVhdGVHZW5lcmljSXRlbVwiXHJcbiAgICAgICAgW3JlbW92ZUJ1dHRvbkFyaWFMYWJlbF09XCJyZW1vdmVCdXR0b25BcmlhTGFiZWxcIlxyXG4gICAgICAgIFtzZWxlY3RlZEl0ZW1zXT1cInNlbGVjdGVkSXRlbXNcIlxyXG4gICAgICAgIFtlbmFibGVTZWxlY3RlZFN1Z2dlc3Rpb25BbGVydF09XCJlbmFibGVTZWxlY3RlZFN1Z2dlc3Rpb25BbGVydFwiXHJcbiAgICAgICAgW2lucHV0UHJvcHNdPVwiaW5wdXRQcm9wc1wiXHJcbiAgICAgICAgW3BpY2tlclN1Z2dlc3Rpb25zUHJvcHNdPVwicGlja2VyU3VnZ2VzdGlvbnNQcm9wc1wiXHJcbiAgICAgICAgW0l0ZW1TZWxlY3RlZF09XCJvbkl0ZW1TZWxlY3RlZFwiXHJcbiAgICAgICAgW0lucHV0Q2hhbmdlXT1cIm9uSW5wdXRDaGFuZ2VcIlxyXG4gICAgICAgIFtFbXB0eUlucHV0Rm9jdXNdPVwib25FbXB0eUlucHV0Rm9jdXNcIlxyXG4gICAgICAgIFtSZXNvbHZlU3VnZ2VzdGlvbnNdPVwib25SZXNvbHZlU3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgIFtHZXRNb3JlUmVzdWx0c109XCJvbkdldE1vcmVSZXN1bHRzXCJcclxuICAgICAgICBbVmFsaWRhdGVJbnB1dF09XCJvblZhbGlkYXRlSW5wdXRcIlxyXG4gICAgICAgIFtSZW5kZXJJdGVtXT1cInJlbmRlckl0ZW0gJiYgb25SZW5kZXJJdGVtXCJcclxuICAgICAgICBbUmVuZGVyU3VnZ2VzdGlvbnNJdGVtXT1cInJlbmRlclN1Z2dlc3Rpb25zSXRlbSAmJiBvblJlbmRlclN1Z2dlc3Rpb25zSXRlbVwiXHJcbiAgICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICAgIFtGb2N1c109XCJvbkZvY3VzSGFuZGxlclwiXHJcbiAgICAgICAgW0JsdXJdPVwib25CbHVySGFuZGxlclwiXHJcbiAgICAgICAgW0Rpc21pc3NdPVwib25EaXNtaXNzSGFuZGxlclwiXHJcbiAgICAgICAgW1JlbW92ZVN1Z2dlc3Rpb25dPVwib25SZW1vdmVTdWdnZXN0aW9uSGFuZGxlclwiXHJcbiAgICAgID5cclxuICAgICAgPC9QZW9wbGVQaWNrZXI+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbJ3JlYWN0LXJlbmRlcmVyJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB9KVxyXG4gIGV4cG9ydCBjbGFzcyBGYWJQZW9wbGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJCYXNlUGlja2VyQ29tcG9uZW50PElQZXJzb25hUHJvcHMsIElQZW9wbGVQaWNrZXJQcm9wcz4ge1xyXG4gICAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwgbmdab25lKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==