/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { FabBasePickerComponent } from '../base-picker/base-picker.component';
var FabTagPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabTagPickerComponent, _super);
    function FabTagPickerComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, ngZone) || this;
    }
    FabTagPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tag-picker',
                    exportAs: 'fabTagPicker',
                    template: "\n    <TagPicker\n      #reactNode\n      [componentRef]=\"componentRef\"\n      [resolveDelay]=\"resolveDelay\"\n      [defaultSelectedItems]=\"defaultSelectedItems\"\n      [getTextFromItem]=\"getTextFromItem\"\n      [className]=\"className\"\n      [pickerCalloutProps]=\"pickerCalloutProps\"\n      [searchingText]=\"searchingText\"\n      [disabled]=\"disabled\"\n      [itemLimit]=\"itemLimit\"\n      [createGenericItem]=\"createGenericItem\"\n      [removeButtonAriaLabel]=\"removeButtonAriaLabel\"\n      [selectedItems]=\"selectedItems\"\n      [enableSelectedSuggestionAlert]=\"enableSelectedSuggestionAlert\"\n      [inputProps]=\"inputProps\"\n      [pickerSuggestionsProps]=\"pickerSuggestionsProps\"\n      [ItemSelected]=\"onItemSelected\"\n      [InputChange]=\"onInputChange\"\n      [EmptyInputFocus]=\"onEmptyInputFocus\"\n      [ResolveSuggestions]=\"onResolveSuggestions\"\n      [GetMoreResults]=\"onGetMoreResults\"\n      [ValidateInput]=\"onValidateInput\"\n      [RenderItem]=\"renderItem && onRenderItem\"\n      [RenderSuggestionsItem]=\"renderSuggestionsItem && onRenderSuggestionsItem\"\n      [Change]=\"onChangeHandler\"\n      [Focus]=\"onFocusHandler\"\n      [Blur]=\"onBlurHandler\"\n      [Dismiss]=\"onDismissHandler\"\n      [RemoveSuggestion]=\"onRemoveSuggestionHandler\"\n    >\n    </TagPicker>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['react-renderer']
                }] }
    ];
    /** @nocollapse */
    FabTagPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    FabTagPickerComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ['reactNode', { static: true },] }]
    };
    return FabTagPickerComponent;
}(FabBasePickerComponent));
export { FabTagPickerComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FabTagPickerComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1yZWFjdC9mYWJyaWMvbGliL2NvbXBvbmVudHMvcGlja2Vycy8iLCJzb3VyY2VzIjpbInRhZy1waWNrZXIvdGFnLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUU7SUF3QzJDLGlEQUE2QztJQUd0RiwrQkFBWSxVQUFzQixFQUFFLGlCQUFvQyxFQUFFLFFBQW1CLEVBQUUsTUFBYztlQUMzRyxrQkFBTSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUN4RCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsaTBDQWlDVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7OztnQkEvQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRFQsTUFBTTs7OytCQWdETCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFLMUMsNEJBQUM7Q0FBQSxBQTlDRCxDQXdDMkMsc0JBQXNCLEdBTWhFO1NBTlkscUJBQXFCOzs7Ozs7SUFDaEMsNkNBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUYWcsIElUYWdQaWNrZXJQcm9wcyB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1BpY2tlcnMnO1xyXG5pbXBvcnQgeyBGYWJCYXNlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1waWNrZXIvYmFzZS1waWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmFiLXRhZy1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnZmFiVGFnUGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPFRhZ1BpY2tlclxyXG4gICAgICAjcmVhY3ROb2RlXHJcbiAgICAgIFtjb21wb25lbnRSZWZdPVwiY29tcG9uZW50UmVmXCJcclxuICAgICAgW3Jlc29sdmVEZWxheV09XCJyZXNvbHZlRGVsYXlcIlxyXG4gICAgICBbZGVmYXVsdFNlbGVjdGVkSXRlbXNdPVwiZGVmYXVsdFNlbGVjdGVkSXRlbXNcIlxyXG4gICAgICBbZ2V0VGV4dEZyb21JdGVtXT1cImdldFRleHRGcm9tSXRlbVwiXHJcbiAgICAgIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcclxuICAgICAgW3BpY2tlckNhbGxvdXRQcm9wc109XCJwaWNrZXJDYWxsb3V0UHJvcHNcIlxyXG4gICAgICBbc2VhcmNoaW5nVGV4dF09XCJzZWFyY2hpbmdUZXh0XCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2l0ZW1MaW1pdF09XCJpdGVtTGltaXRcIlxyXG4gICAgICBbY3JlYXRlR2VuZXJpY0l0ZW1dPVwiY3JlYXRlR2VuZXJpY0l0ZW1cIlxyXG4gICAgICBbcmVtb3ZlQnV0dG9uQXJpYUxhYmVsXT1cInJlbW92ZUJ1dHRvbkFyaWFMYWJlbFwiXHJcbiAgICAgIFtzZWxlY3RlZEl0ZW1zXT1cInNlbGVjdGVkSXRlbXNcIlxyXG4gICAgICBbZW5hYmxlU2VsZWN0ZWRTdWdnZXN0aW9uQWxlcnRdPVwiZW5hYmxlU2VsZWN0ZWRTdWdnZXN0aW9uQWxlcnRcIlxyXG4gICAgICBbaW5wdXRQcm9wc109XCJpbnB1dFByb3BzXCJcclxuICAgICAgW3BpY2tlclN1Z2dlc3Rpb25zUHJvcHNdPVwicGlja2VyU3VnZ2VzdGlvbnNQcm9wc1wiXHJcbiAgICAgIFtJdGVtU2VsZWN0ZWRdPVwib25JdGVtU2VsZWN0ZWRcIlxyXG4gICAgICBbSW5wdXRDaGFuZ2VdPVwib25JbnB1dENoYW5nZVwiXHJcbiAgICAgIFtFbXB0eUlucHV0Rm9jdXNdPVwib25FbXB0eUlucHV0Rm9jdXNcIlxyXG4gICAgICBbUmVzb2x2ZVN1Z2dlc3Rpb25zXT1cIm9uUmVzb2x2ZVN1Z2dlc3Rpb25zXCJcclxuICAgICAgW0dldE1vcmVSZXN1bHRzXT1cIm9uR2V0TW9yZVJlc3VsdHNcIlxyXG4gICAgICBbVmFsaWRhdGVJbnB1dF09XCJvblZhbGlkYXRlSW5wdXRcIlxyXG4gICAgICBbUmVuZGVySXRlbV09XCJyZW5kZXJJdGVtICYmIG9uUmVuZGVySXRlbVwiXHJcbiAgICAgIFtSZW5kZXJTdWdnZXN0aW9uc0l0ZW1dPVwicmVuZGVyU3VnZ2VzdGlvbnNJdGVtICYmIG9uUmVuZGVyU3VnZ2VzdGlvbnNJdGVtXCJcclxuICAgICAgW0NoYW5nZV09XCJvbkNoYW5nZUhhbmRsZXJcIlxyXG4gICAgICBbRm9jdXNdPVwib25Gb2N1c0hhbmRsZXJcIlxyXG4gICAgICBbQmx1cl09XCJvbkJsdXJIYW5kbGVyXCJcclxuICAgICAgW0Rpc21pc3NdPVwib25EaXNtaXNzSGFuZGxlclwiXHJcbiAgICAgIFtSZW1vdmVTdWdnZXN0aW9uXT1cIm9uUmVtb3ZlU3VnZ2VzdGlvbkhhbmRsZXJcIlxyXG4gICAgPlxyXG4gICAgPC9UYWdQaWNrZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFsncmVhY3QtcmVuZGVyZXInXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYlRhZ1BpY2tlckNvbXBvbmVudCBleHRlbmRzIEZhYkJhc2VQaWNrZXJDb21wb25lbnQ8SVRhZywgSVRhZ1BpY2tlclByb3BzPiB7XHJcbiAgQFZpZXdDaGlsZCgncmVhY3ROb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCBuZ1pvbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=